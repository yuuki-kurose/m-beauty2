<template>
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

              <v-form class="postcreate-form">
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-file-input
                    placeholder="アップする写真を選択してください"
                    clearable
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
                  >
                  </v-textarea>
                </v-col>
                <v-card-actions
                  class="justify-center"
                >
                  <v-btn
                    class="postcreate-formbtn"
                    text
                    v-on:click="postCreate"
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
import { doc, getDoc,getFirestore } from "firebase/firestore";
import app from "../firebase";



export default {

  components: {},

  data: () => ({

    dialog: true

  }),

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
      } 
    }
  }
</script>
