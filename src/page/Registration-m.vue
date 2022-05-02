<template>
  <v-app>
    <div class="registration-bg">
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
                  <h4>会員登録</h4>
                </v-card-title>
                  <v-form class="registration-form">
                    <!-- 空きの部分はv-modelを入れる予定です -->
                    <v-text-field
                      prepend-inner-icon="mdi-account"
                      outlined
                      placeholder="アカウント名を入力してください"
                      clearable
                      type="name"
                      
                      label="name"
                      class="registration-name"
                    >
                    </v-text-field>
                    <v-text-field
                      prepend-inner-icon="mdi-email"
                      outlined
                      placeholder="設定するメールアドレスを入力してください"
                      clearable
                      type="email"

                      label="email"
                      class="registration-email"
                    >
                    </v-text-field>
                    <v-text-field
                      prepend-inner-icon="mdi-key"
                      outlined
                      placeholder="設定するパスワードを入力してください"
                      clearable
                      type="password"
                      
                      label="password"
                      class="registration-password"
                    >
                    </v-text-field>
                    <v-btn
                      outlined
                      v-on:click="registration"
                    >
                      Register
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
.registration-bg {
  background-image: url(https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=sarah-dorweiler-9Z1KRIfpBTM-unsplash.jpg&w=1920);
  background-size: cover;
  background-position: center top;
  height: 100%;
}

.registration-form {
  margin-left: 50px;
  margin-top: 50px;
  text-align: center;
}

.registration-name {
  width: 400px;
}

.registration-email {
  width: 400px;
}

.registration-password {
  width: 400px;
}

</style>

<script>


</script>
