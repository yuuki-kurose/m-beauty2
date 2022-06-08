<template>
  <v-app>
    <v-container>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          sm="6"
        >
          <v-card height="500"> 
            <v-card-title class="justify-center cyan lighten-2">
              投稿作成
            </v-card-title>

            <v-form class="postcreate-form">
              <v-file-input
                placeholder="写真を選択してください"
                clearable
              >

                <v-card-title class="justify-center">
                  投稿作成
                </v-card-title>

                <v-form
                  class="postcreate-form"
                  @submit="onsubmit"
                  >
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-file-input
                      placeholder="アップする写真を選択してください"
                      clearable
                      v-model="formData.url"
                    >
                    </v-file-input>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-textarea
                      outlined
                      label="contents"
                      placeholder="内容を入力してください"
                      class="postcreate-contents"
                      clearable
                      v-model="formData.comment"
                    >
                    </v-textarea>
                 <v-card-actions class="justify-center">
                <v-btn
                  text
                  v-on:click="postCreate"
                >
                  Post
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
import { doc, getDoc,setDoc,getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from 'uuid';
import app from "../firebase";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { defineComponent } from '@vue/composition-api'

export default {



  components: {},

  data: () => ({


    userID: '',

    formData:{
      url:'',
      comment:''
    }


  }),
  mounted() {
    const auth = getAuth(app);
    const user = auth.currentUser;

    if (user) {
      this.userID= user.uid
    }
  },

  methods: {
    postCreate: async () => {
        const db = getFirestore(app);
        const docRef = doc(db, "posts", "1");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
      },
      onsubmit(e) {
        e.preventDefault();
        console.log(e.target)
        const file = this.formData.url
        console.log(file)
        this.uploadImage(file)
      },
      uploadImage(file) {
        if (!file) return
        const storage = getStorage(app)
        const storageRef = sRef(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on('state_changed',
        (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
        }
        },
          (error) => {
            console.log(error)
        },
            () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const db = getFirestore(app);
          const uuid = uuidv4()
          const auth = getAuth();
          const user = auth.currentUser;

           setDoc(doc(db, 'posts',uuid), {
            user: user.uid,
            url: downloadURL,
            comment: this.formData.comment
          });
        });
        }
        );
       }
      }
    }
  
</script>

<style scoped>
.postcreate-form {
  margin: 40px 30px 30px 40px;
}
</style>
