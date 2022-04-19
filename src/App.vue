<template>
  <div>
    <router-view></router-view>
    <v-app>
      <v-form>
        <v-btn to="/Login-m.vue"
          width="150px"
          color="primary"
          elevation="2"
          outlined
          x-large
        >Login</v-btn>
        <v-btn to="/PostCreate-m.vue"
          width="150px"
          color="primary"
          elevation="2"
          outlined
          x-large
        >PostCreate</v-btn>
        <v-btn to="Registration-m.vue"
          width="150px"
          color="primary"
          elevation="2"
          outlined
          x-large
        >Registration</v-btn>
      </v-form>
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
