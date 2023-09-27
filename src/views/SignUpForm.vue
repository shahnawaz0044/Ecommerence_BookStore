<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="elevation-12">
            <v-card-title class="text-center">Sign Up</v-card-title>
            <v-card-text>
              <v-form @submit="signup">
                <v-text-field
                  v-model="firstName"
                  label="First Name"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  v-model="lastName"
                  label="Last Name"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="Email"
                  outlined
                  required
                  type="email"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  outlined
                  required
                  type="password"
                ></v-text-field>
                <v-btn type="submit" color="primary" block>Sign Up</v-btn>
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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      };
    },
    methods: {
      signup() {
        if (this.firstName && this.lastName && this.email && this.password) {
          console.log('Signed up with:', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
          });
        } else {
          console.error('Please fill in all required fields');
        }
      },
    },
  };
  </script>
  