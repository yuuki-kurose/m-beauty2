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
              </v-file-input>
              <v-textarea
                outlined
                label="contents"
                placeholder="内容を入力してください"
                clearable
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
import { doc, getDoc,getFirestore } from "firebase/firestore";
import app from "../firebase";

export default {

  name: 'PostCreateForm',
  components: {},

  data: () => ({

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

<style scoped>
.postcreate-form {
  margin: 40px 30px 30px 40px;
}
</style>
