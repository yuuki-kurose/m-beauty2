<template>
  <v-content>
    <v-container>
      <v-row>
        <v-col>
          <v-dialog
            v-model="dialog"
            fullscreen
          >
            <v-card
              img="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg&w=1920"
            >
              <v-card-title class="justify-center">
                会員登録
              </v-card-title>
                <v-form class="registration-form">
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <!-- 空きの部分はv-modelを入れる予定です -->
                    <v-text-field
                      prepend-inner-icon="mdi-account"
                      placeholder="名前を入力してください"
                      clearable
                      type="name"

                      label="name"
                      class="registration-name"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-text-field
                      prepend-inner-icon="mdi-account-plus"
                      placeholder="アカウント名を入力してください"
                      clearable
                      type="name"
                      label="accountname"
                      class="registration-name"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-text-field
                      prepend-inner-icon="mdi-email"
                      placeholder="設定するメールアドレスを入力してください"
                      clearable
                      type="email"

                      label="email"
                      class="registration-email"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-text-field
                      prepend-inner-icon="mdi-key"
                      placeholder="設定するパスワードを入力してください"
                      clearable
                      :append-icon="show ? 'mdi-eye': 'mdi-eye-off'"
                      :type="show ? 'text': 'password'"
                      v-on:click:append="show =! show"
                      
                      label="password"
                      class="registration-password"
                    >
                    </v-text-field>
                  </v-col>
                  <v-card-actions
                    class="justify-center"
                  >
                    <v-btn
                      text
                      class="registration-formbtn"
                      v-on:click="registration"
                    >
                      Register
                    </v-btn>
                    <v-btn
                      text
                      class="registration-formbtn"
                      v-on:click="dialog = false"
                    >
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-form>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>


<style scoped>

.registration-form {
  margin-left: 700px;
  margin-top: 100px;
}

/* .registration-name {} */
  
/* .registration-email {} */

/* .registration-password {} */

.registration-formbtn {
  margin-top: 100px;
}
</style>

<script>
  export default {
    data: () => ({

      dialog:true,

      show: false,

    })
  }

</script>
