<template>
  <v-app>
    <v-container>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          sm="6"
        >
          <v-card width="500" height="350">
            <v-card-title class="justify-center cyan lighten-2">
              ログイン
            </v-card-title>

            <v-form class="login-form">
              <v-text-field
                prepend-inner-icon="mdi-email"
                placeholder="登録したメールアドレスを入力してください"
                clearable
                type="email"
                v-model="formData.email"
                label="email"
              >
              </v-text-field>
              <v-text-field
                prepend-inner-icon="mdi-key"
                placeholder="登録したパスワードを入力してください"
                clearable
                type="password"
                v-model="formData.password"
                label="password"
              >
              </v-text-field>
              <v-card-actions class="justify-center">
                <v-btn
                  text
                  v-on:click="login"
                >
                  Login
                </v-btn>
                <v-btn
                  text
                  to="/"
                >
                  Homeへ戻る
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import app from '../firebase';


  export default {

    name: 'LoginForm',
    components: {},

    data: () => ({

      show: false,

      // フォームデータ定義
      formData: {
        email: '',
        password: ''
      },
    }),
    // ログイン機能の設定
    methods:{
        login() {
          const auth = getAuth(app);
          signInWithEmailAndPassword(auth, this.formData.email, this.formData.password)
          .then((userCredential) => {
          // const user = userCredential.user;
          console.log(userCredential);
          })
          console.log(this.formData);
        }
    }
  }
</script>

<style scoped>
.login-form {
  margin: 40px 30px 40px 30px;
}

</style>