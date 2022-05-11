<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-dialog
              v-model="dialog"
              fullscreen
            >
              <v-card
                img="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg&w=1920"
              >
                <v-card-title class="justify-center">
                  会員登録
                </v-card-title>
                  <v-form class="registration-form">
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-text-field
                        prepend-inner-icon="mdi-account"
                        placeholder="名前を入力してください"
                        clearable
                        type="name"
                        v-model="formData.name"
                        label="name"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-text-field
                        prepend-inner-icon="mdi-account-plus"
                        placeholder="アカウント名を入力してください"
                        clearable
                        type="name"
                        v-model="formData.accountname"
                        label="accountname"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-select
                        :items="age_list"
                        id="age"
                        label="Age"
                        v-model="formData.age"
                      > 
                      </v-select>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-text-field
                        prepend-inner-icon="mdi-email"
                        placeholder="設定するメールアドレスを入力してください"
                        clearable
                        type="email"
                        v-model="formData.email"
                        label="email"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                    >
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
                    </v-col>
                    <v-card-actions
                      class="justify-center"
                    >
                      <v-btn
                        text
                        class="registration-formbtn"
                        v-on:click="registration"
                      >
                        Register
                      </v-btn>
                      <v-btn
                        text
                        class="registration-formbtn"
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
  </v-app>
</template>


<style scoped>

.registration-form {
  margin-left: 700px;
  margin-top: 100px;
}

.registration-formbtn {
  margin-top: 100px;
}
</style>

<script>
  import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
  import app from '../firebase';
  

  export default {
    data: () => ({

      dialog: true,

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
