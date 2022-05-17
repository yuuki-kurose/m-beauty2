<template>
	<v-app>
		<v-container fluid fill-height class="mypage-bg">
			<v-row
				align-content="center"
				justify="center"
			>
				<v-col
					cols="12"
					sm="6"
					class="mypage-content"
				>
				<!-- ×ボタン設置 -->
				<v-badge
					overlap
					offset-x="30"
					offset-y="30"
					color="rgba(0,0,0,0)"
				>
					<!-- slotでbadgeの実装を受け取る -->
					<v-btn
						slot="badge"
						fab
						width="20"
						height="20"
						@click="onclear"
					>
						<v-icon large>mdi-close-circle</v-icon>
					</v-btn>

					<v-avatar
						size="150"
						color="primary"
					>
						<!-- <v-btn -->
							<!-- text -->
							<!-- icon -->
							<!-- ref="file" -->
							<!-- @change="onchange" -->
						<!-- > -->
							<v-icon size="100">mdi-plus</v-icon>
						<!-- </v-btn> -->
					</v-avatar>
				</v-badge>

				<!-- firebase実装の際編集する -->
				<div class="mypage-text">
					<h1>テスト</h1>
					<p>テスト</p>
					<p>テスト</p>
				</div>
				<div>
					<v-btn
						text
						to="/"
						class="mypage-btn"
					>
						←Topへ戻る
					</v-btn>
					<v-btn
						text
						to="/PostLink.vue"
						class="mypage-btn"
					>
						自分の投稿ページへ→
					</v-btn>
				</div>
				</v-col>
			</v-row>
		</v-container>
	</v-app>			
</template>

<script>

export default {

	props:[ 'userAccountName','userName','userComment'],


	data: () => ({

	}),
	methods: {
			// firebase実装の際に編集する
	}
}

</script>

<style scoped>
.mypage-bg {
	background-image: url("https://images.unsplash.com/photo-1513863675557-2a61baccb932?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=dan-gold-7O_G2Jt1l08-unsplash.jpg&w=1920");
	background-position: center top;
	background-size: cover;
	height: 40vh;
}

.mypage-content {
	text-align: center;
	margin-top: 30vh;
}

.mypage-text {
	margin-top: 20px;
}

.mypage-btn {
	margin-top: 100px;
}
</style>


