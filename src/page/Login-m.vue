<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="ユーザー名"></v-text-field>
            <v-text-field type="password" label="パスワード"></v-text-field>
            <v-card-actions> 
              <v-btn class="info">ログイン</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>  
    </v-card>
  </v-app>
</template>


<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'Login',
        'PostCreate',
        'Registration',
        
      ],
    }),
  }
</script>