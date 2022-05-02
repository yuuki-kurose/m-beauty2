<template>
  <v-app>
    <div class="postcreate-bg">
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
                  <h4>投稿作成</h4>
                </v-card-title>
                  <v-form class="postcreate-form">
                    <v-text-field
                      outlined
                      label="title"
                      placeholder="タイトルを入力してください"
                      class="postcreate-title"
                      clearable
                    >
                    </v-text-field>
                    <v-textarea
                      outlined
                      label="contents"
                      placeholder="内容を入力してください"
                      class="postcreate-contents"
                      clearable
                    >
                    </v-textarea>
                    <v-btn
                      outlined
                      v-on:click="postCreate"
                    >
                      Post
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
  .postcreate-bg {
    background-image: url("https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=sarah-dorweiler-9Z1KRIfpBTM-unsplash.jpg&w=1920");
    background-size: cover;
    background-position: center top;
    height: 100%;
  }
  
  .postcreate-form {
    margin-left: 50px;
    margin-top: 50px;
    text-align: center;
  }

  .postcreate-title {
    width: 400px;

  }

  .postcreate-contents {
    width: 400px;

    
  }

</style>

<script>
import { doc, getDoc,getFirestore } from "firebase/firestore";
import app from "../firebase";


export default {

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
