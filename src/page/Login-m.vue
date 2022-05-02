<template>
  <v-app>
    <div class="login-bg">
      <v-content>
        <v-container>
          <v-row
            align-content="center"
            justify="center"
          >
            <v-col>
              <v-card
                width="500"
                height="500"
              >
                <v-card-title>
                  <h4>ログイン</h4>
                </v-card-title>
                  <v-form class="login-form">
                    <v-text-field
                      prepend-inner-icon="mdi-email"
                      outlined
                      placeholder="メールアドレスを入力してください"
                      clearable
                      type="email"
                      v-model="formData.email"
                      label="email"
                      class="login-email"
                    >
                    </v-text-field>
                    <v-text-field
                      prepend-inner-icon="mdi-key"
                      outlined
                      placeholder="パスワードを入力してください"
                      clearable
                      type="password"
                      v-model="formData.password"
                      label="password"
                      class="login-password"
                    >
                    </v-text-field>
                    <v-btn
                      outlined
                      v-on:click="login"
                    >
                      Login
                    </v-btn>
                  </v-form>
                </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </div>
  </v-app>
</template>

<style scoped>
.login-bg {
  background-image: url(https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=sarah-dorweiler-9Z1KRIfpBTM-unsplash.jpg&w=1920);
  background-size: cover;
  background-position: center top;
  height: 100%;
}

.login-form {
  margin-left: 50px;
  margin-top: 50px;
  text-align: center;
}

.login-email {
  width: 400px;
}

.login-password {
  width: 400px;
}
</style>




<script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import app from '../firebase';


  export default {

    components: {},

    data: () => ({
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