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
								:src="post.src"
								class="white--text align-end"
								height="300px"
							>
								<v-card-title v-text="post.title"></v-card-title>
								<v-card-text v-text="post.text"></v-card-text>
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
export default {
	// PostCreate-m.vueで投稿された情報をやり取りする
	props: ['postsTitle','postsText','postsSrc'],
	

	data: () => ({

		count: 0,

		posts: [
			{
				title:'',
				text: '',
				src: '',
			}
		],
	}),
	methods: {
		oncount() {
			return this.count ++;
		},
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