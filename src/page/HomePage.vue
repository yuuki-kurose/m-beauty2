<template>
  <v-app>
		<v-navigation-drawer
      temporary
      app
      height="50%"
      v-model="drawer"
      clipped
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">LIST</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
        
      <v-divider></v-divider>
        
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="list in home_lists"
          :key="list.name"
          :to="list.link"
        >
          <v-list-item-icon>
            <v-icon> {{ list.icon }} </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> {{ list.name }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dense
      flat
      color="rgba(255,255,0,0)"
      clipped-left
    >
      <v-app-bar-nav-icon
        v-on:click="drawer=!drawer"
      >
      </v-app-bar-nav-icon>

			<v-toolbar-title>
				<v-icon>mdi-home</v-icon>
			</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
          
    <v-main class="main-bg">
      <v-container>
        <v-row>
          <v-col>
            <div>
              <transition appear>
                <h1 class="main-title" v-show="flag">Welcome to <br> M-BEAUTY</h1>
              </transition>
            </div>
          </v-col>
        </v-row>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer
      dense
      app
      color="rgba(255,255,0,0)"
    >
      I appreciate it very much. Photo by <a href="https://unsplash.com/@bialons?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyTextUnsplash"> the Bialons,</a>
      <a href="https://unsplash.com/@sarahdorweiler">Sarah Dorweiler</a> on Unsplash
    </v-footer>
  </v-app>
</template>

<script>

export default {


  data:() => ({
    // ハンバーガーメニューの制御
    drawer: false,
    flag: true,

		// リストの中身
    home_lists: [
      {
        name: 'Login',
        icon: 'mdi-account-check',
        link: '/Login-m.vue'
      },
      {
        name: 'PostCreate',
        icon: 'mdi-file-document',
        link: '/PostCreate-m.vue'
      },
      {
        name: 'PostList',
        icon: 'mdi-note-multiple',
        link: '/PostList.vue'
      },
      { 
        name: 'Registration',
        icon: 'mdi-account-plus',
        link: '/Registration-m.vue'
      }
     ]

    

    
  })
}
</script>


<style scoped>
/* 背景画像の設定 */
.main-bg {
  background-image: url('https://images.unsplash.com/photo-1543872981-578a0310c83a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=the-bialons-nBDb1m-_nJA-unsplash.jpg&w=1920');
  background-position: center bottom;
  background-size: cover;
  height: 100vh;
}

.main-title {
  margin-top: 300px;
  font-family: cursive;
  font-size: 5rem;
  font-weight: bold;
  mix-blend-mode: overlay;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateX(128px);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.v-enter-active {
  animation: slide-in 1.5s;
}

</style>