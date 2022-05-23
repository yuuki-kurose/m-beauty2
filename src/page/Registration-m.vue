<template>
  <v-app>
    <v-container>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          sm="6"
        > 
          <v-card
            width="500"
            height="600"
            elevation="8"
          >

            <v-card-title class="justify-center cyan lighten-2">
              はじめよう！
            </v-card-title>
              <!-- ユーザー入力欄 -->
              <v-form class="registration-form">
                <v-text-field
                  prepend-inner-icon="mdi-account"
                  placeholder="名前を入力してください"
                  clearable
                  type="name"
                  v-model="formData.name"
                  label="name"
                >
                </v-text-field>
                <v-text-field
                  prepend-inner-icon="mdi-account-plus"
                  placeholder="アカウント名を入力してください"
                  clearable
                  type="name"
                  v-model="formData.accountname"
                  label="accountname"
                >
                </v-text-field>
                <v-select
                  :items="age_list"
                  id="age"
                  label="Age"
                  v-model="formData.age"
                > 
                </v-select>
                <v-text-field
                  prepend-inner-icon="mdi-email"
                  placeholder="設定するメールアドレスを入力してください"
                  clearable
                  type="email"
                  v-model="formData.email"
                  label="email"
                >
                </v-text-field>
                <v-text-field
                  prepend-inner-icon="mdi-key"
                  placeholder="設定するパスワードを入力してください"
                  clearable
                  :append-icon="show ? 'mdi-eye': 'mdi-eye-off'"
                  :type="show ? 'text': 'password'"
                  v-on:click:append="show =! show"
                  v-model="formData.password"
                  label="password"
                >
                </v-text-field>
                <!-- ボタン -->
                <v-card-actions class="justify-center">
                  <v-btn
                    text
                    v-on:click="registration"
                  >
                    登録
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
  import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
  import app from '../firebase';
  

  export default {

    name: 'RegistrationForm',
    components:{},

    data: () => ({

      show: false,

      age_list: ['10代','20代','30代','40代'],

      formData: {
        name: '',
        accountname: '',
        age: '',
        email: '',
        password: ''
      },

    }),
    methods:{
        registration() {
          const auth = getAuth(app);
          createUserWithEmailAndPassword(auth, this.formData.email, this.formData.password)
          .then(() => {
          // const user = userCredential.user;
            updateProfile(auth.currentUser, {
            displayName: this.formData.accountname
            }).then((user) => {
            console.log(user)
            // ...
            }).catch(() => {
            // An error occurred
            // ...
            });
          })
          
        }
    }
  }
</script>


<style scoped>
.registration-form {
  margin: 50px 30px 30px 40px;
}

</style>


