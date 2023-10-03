<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="elevation-12">
            <v-card-title class="text-center">Sign Up</v-card-title>
            <v-card-text>
              <v-form @submit="signup" ref="form">
                <v-text-field v-model="name" label="Name" outlined required :rules="nameRules"></v-text-field>
                <v-text-field v-model="email" label="Email" outlined required type="email"
                  :rules="emailRules"></v-text-field>
                <v-text-field v-model="password" label="Password" outlined required
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'"
                  :rules="passwordRules" @click:append="togglePasswordVisibility"></v-text-field>
                <v-text-field v-model="confirmpassword" label="Confirm Password" outlined required
                  :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showConfirmPassword ? 'text' : 'password'" :rules="confirmPasswordRules"
                  @click:append="toggleConfirmPasswordVisibility"></v-text-field>
                <v-btn type="submit" color="primary" block>Sign Up</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        showPassword: false,
        confirmpassword: '',
        showConfirmPassword: false,
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => (v && v.length >= 3) || 'Name must be at least 3 characters',
        ],
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          (v) => /.+\.com$/.test(v) || 'E-mail must end with .com',
        ],
        passwordRules: [
          (v) => !!v || 'Password is required',
          (v) => (v && v.length >= 8) || 'Password must be at least 8 characters',
          (v) =>
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(v) ||
            'Password must contain at least one letter, one number, and one special symbol',
        ],
        confirmPasswordRules: [
          (v) => !!v || 'Confirm Password is required',
          (v) =>
            v === this.password || 'Confirm Password must match the Password',
        ],
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
      toggleConfirmPasswordVisibility() {
        this.showConfirmPassword = !this.showConfirmPassword;
      },
      signup() {
        if (this.$refs.form.validate()) {
          console.log('Signed up with:', {
            name: this.name,
            email: this.email,
            password: this.password,
          });
        } else {
          console.error('Please correct the form errors');
        }
        axios.post("http://10.0.10.220:8080/api/register", {
  
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
  
        })
      },
    },
  };
  </script>
  