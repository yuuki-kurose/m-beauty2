<template>
  <div>
    <h3>リンク先</h3>
    <router-link to="/Login-m.vue">ログイン</router-link><br>
    
    <router-link to="PostCreate-m.vue">会員登録</router-link><br>

    <router-link to="Registration-m.vue">投稿</router-link><br>
    <router-view></router-view>
  
    <v-app>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
