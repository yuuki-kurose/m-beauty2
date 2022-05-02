<template>
  <v-app>
    <!-- navigation-drawer設置 -->
    <v-navigation-drawer
      app
      v-model="drawer"
      clipped
    >
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">M-BEAUTY Lists</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- タイトルとメニューの間に横線 -->
        <v-divider></v-divider>
        <!-- navigation-drawerのリスト表示 -->
        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="list in home_lists"
            :key="list"
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
      </v-container>
    </v-navigation-drawer>
    <!-- app-barの設置 -->
    <v-app-bar
      app
      dense
      flat
      clipped-left
    >
      <v-app-bar-nav-icon v-on:click="drawer=!drawer">
      </v-app-bar-nav-icon>
        <v-toolbar-title>
          M-BEAUTY
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-toolbar-items> -->
          <!-- <v-text-field -->
            <!-- rounded -->
            <!-- width="30px" -->
            <!-- color="cyan lighten-4" -->
            <!-- >検索</v-text-field> -->
        <!-- </v-toolbar-items> -->
    </v-app-bar>
          
    <!-- main設置 -->
    <v-main class="home-bg">
      <router-view></router-view>
        <v-row 
          align-content="center" 
          justify="center"
        >
          <div class="home-title">
            <h1>Welcome to M-BEAUTY</h1>
            <p>女性だけでなく男性も美容について<br>気軽に発信できる場所ができたらいいなと思い、<br>
              このサイトを作成しました。
            </p>
          </div>
        </v-row>
    </v-main>

    <v-footer
      dense
      app
    >
      Photo by Sarah Dorweiler on <a href="https://unsplash.com/@sarahdorweiler">Unsplash</a>
    </v-footer>
  </v-app>
</template>


<style scoped>
/* 背景画像の設定 */
.home-bg {
  background-image: url(https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=sarah-dorweiler-9Z1KRIfpBTM-unsplash.jpg&w=1920);
  background-position: center top;
  background-size: cover;
  height: auto;
  
}
.home-title {
  color:black;
  text-align: center;
  margin-top: 100px;
}

</style>

<script>

export default {
  name: 'App',

  data:() => ({
    // ハンバーガーメニューの制御
    drawer:null,

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
        name: 'Registration',
        icon: 'mdi-account-plus',
        link: '/Registration-m.vue'
      }
     ]
  })
}
</script>
