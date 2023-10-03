<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-card-title class="text-center">Login</v-card-title>
          <v-card-text>
            <v-form @submit="login" ref="form">
              <v-text-field
                v-model="username"
                label="Username"
                outlined
                required
                :rules="usernameRules"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                outlined
                required
                type="password"
                :rules="passwordRules"
              ></v-text-field>
              <div>
                <v-btn type="submit" color="primary" block>Login</v-btn>
                <v-btn color="primary" block class="log-btn" to="/signup">Create Account</v-btn>
              </div>
              <router-view></router-view>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      username: '',
      password: '',
      usernameRules: [
        (v) => !!v || 'Username is required',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
      ],
    };
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        console.log('Logged in with username:', this.username);
      } else {
        console.error('Please correct the form errors');
      }
    },
  },
};
</script>

  <style scoped>
  .log-btn{
    margin-top: 10px;
  }
  </style>
  