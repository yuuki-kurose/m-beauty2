<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field type="email" v-model="formData.email" label="メールアドレス"></v-text-field>
            <v-text-field type="password" v-model="formData.password" label="パスワード"></v-text-field>
            <v-card-actions> 
              <v-btn class="info" v-on:click="login">ログイン</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>  
    </v-card>
  </v-app>
</template>


<script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import app from '../firebase';
  export default {
    data: () => ({
      links: [
        'Home',
        'Login',
        'PostCreate',
        'Registration',
        
      ],
      formData: {
        email: '',
        password: ''
      }
    }),
    methods: {
      login(){
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, this.formData.email, this.formData.password)
        .then((userCredential) => {
        // const user = userCredential.user;
        console.log(userCredential);
      })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      // });
        console.log(this.formData)
      }
    }
  }

</script>