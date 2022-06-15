<template>
  <v-app>
		<v-app-bar
			app
			dense
			flat
			color="rgba(255,255,0,0)"
		>
			<!-- ホームボタンの設置 -->
			<v-toolbar-title>
				<v-btn icon text to="/">
				<v-icon>mdi-home</v-icon>
				</v-btn>
			</v-toolbar-title>
    </v-app-bar>

		<!-- 投稿されたデータの反映スペース -->
    <v-main class="postlist-bg">
      <v-container fluid>
        <v-row>
          <v-col
            v-for="post in posts"
            :key="post.title"
						cols="12"
						md="4"
						sm="6"
          >
            <v-card elevation="8">
							<v-img
								:src="post.url"
								class="white--text align-end"
								height="300px"
							>
								<v-card-title v-text="post.title"></v-card-title>
								<v-card-text v-text="post.comment"></v-card-text>
							</v-img>
							<!-- いいねボタン実装 -->
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn
									icon
									@click="oncount"
								>
									<v-icon color="red">mdi-hand-heart</v-icon>
								</v-btn>
								{{ count }}
							</v-card-actions>
						</v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
	</v-app>
</template>

<script>
import { collection, getDocs,getFirestore } from "firebase/firestore";
import app from "../firebase";

export default {
	

	data: () => ({

		count: 0,

		posts: [],

	}),
	methods: {
		oncount() {
			return this.count ++;
		},
	},
	created: async function(){
		const db = getFirestore(app);
		const querySnapshot = await getDocs(collection(db, "posts"));
		querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		console.log(doc.id, " => ", doc.data());
		this.posts.push(doc.data());
		console.log(this.posts);
		});
	}

	
}
</script>

<style>
.postlist-bg {
	background-image: url("https://images.unsplash.com/photo-1560780552-ba54683cb263?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=alex-lvrs-Md6_qA-BMis-unsplash.jpg&w=1920");
	background-position: center;
	background-size: cover;
	height: auto;
}
</style>