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
					<v-btn
						slot="badge"
						fab
						width="20"
						height="20"
						v-on:click="onclear"
					>
						<v-icon large>mdi-close-circle</v-icon>
					</v-btn>

					<!-- アイコンアバター設置 -->
					<v-avatar
						size="150"
						color="primary"
					>
						<img v-bind:src="url" ref="file" >
					</v-avatar>
						<v-file-input
							v-if="!image"
							v-model="image"
							accept="image/*"
							show-size
							dense
							label="写真をアップ"
						>
						</v-file-input>

				</v-badge>
					<!-- 会員登録されたデータがここに反映されるようにしたい -->
					<div class="mypage-text">
						<h1 your-name="formData.accountname">@useraccountname</h1>
						<p your-accountname="formData.name">username</p>
						<p>ここに会員登録で登録した簡単な紹介文が入ります。</p>
					</div>

					<v-btn
						outlined
						to=""
						class="mypage-btn"
					>
						自分の投稿ページへ
					</v-btn>
					<v-btn
						outlined
						to="/"
						class="mypage-btn"
					>
						Topへ戻る
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</v-app>			
</template>

<script>

export default {

	props: ['your-name','your-accountname'],
	template:`{{ yourName,yourAccountname }}`,

	data: () => ({

		image: null,


	}),
	computed: {
		url() {
			if(this.image === null) {
				return;
			} else {
				return URL.createObjectURL(this.image);
			}
		}
	},
	methods: {
		onclear() {
			return this.$refs.file = null;

		}
	}
}
</script>

<style scoped>
.mypage-bg {
	background-image: url("https://images.unsplash.com/photo-1513863675557-2a61baccb932?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=dan-gold-7O_G2Jt1l08-unsplash.jpg&w=1920");
	background-position: center top;
	background-size: cover;
	height: 50vh;
}

.mypage-content {
	text-align: center;
	margin-top: 40vh;
}

.mypage-text {
	margin-top: 20px;
}

.mypage-btn {
	margin: 40px 40px 0 40px;
}
</style>


