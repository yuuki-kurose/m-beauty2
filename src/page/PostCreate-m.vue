<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-dialog
              fullscreen
              v-model="dialog"
            >
              <v-card
                img="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg&w=1920"
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
                  </v-col>
                  <v-card-actions
                    class="justify-center"
                  >
                    <v-btn
                      class="postcreate-formbtn"
                      text
                      type="submit"
                    >
                      Post
                    </v-btn>
                    <v-btn
                      class="postcreate-formbtn"
                      text
                      v-on:click="dialog=false"
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

  .postcreate-form {
    margin-top: 100px;
    margin-left: 700px;
  }

  /* .postcreate-title {} */
   
  /* .postcreate-contents {}*/

  .postcreate-formbtn {
    margin-top: 100px;
  }

</style>

<script>
import { doc, getDoc,set,ref,getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// simport { v4 as uuidv4 } from 'uuid';
import app from "../firebase";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { defineComponent } from '@vue/composition-api'



export default {



  components: {},

  data: () => ({

    dialog: true,
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
          // const uuid = uuidv4()
           set(ref(db, 'posts/' + 'test'), {
          uid: this.userID,
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
