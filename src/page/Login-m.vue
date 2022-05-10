<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <v-dialog
            v-model="dialog"
            light
            width="500"
          >
            <v-card>
              <v-card-title 
                class="cyan accent-1"
              >
                ログイン
              </v-card-title>
              <v-card-subtitle class="cyan accent-1"> Please Log in </v-card-subtitle>

              <v-form class="login-form">
                <v-text-field
                  prepend-inner-icon="mdi-email"
                  placeholder="登録したメールアドレスを入力してください"
                  clearable
                  type="email"
                  v-model="formData.email"
                  label="email"
                  class="login-email"
                >
                </v-text-field>
                <v-text-field
                  prepend-inner-icon="mdi-key"
                  placeholder="登録したパスワードを入力してください"
                  clearable
                  type="password"
                  v-model="formData.password"
                  label="password"
                  class="login-password"
                >
                </v-text-field>
                <v-card-actions
                  class="justify-center"
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    v-on:click="login"
                  >
                    Login
                  </v-btn>
                  <v-btn
                    text
                    v-on:click="dialog = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>

.login-form {
  margin-left: 50px;
  margin-top: 50px;
}

.login-email {
 width: 400px;
}

.login-password {
  width: 400px;
}

.login-formbtn {
  margin: auto;
}
</style>




<script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import app from '../firebase';


  export default {

    components: {},

    data: () => ({

      dialog: true,

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