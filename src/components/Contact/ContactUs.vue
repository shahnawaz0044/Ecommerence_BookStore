<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="elevation-12">
            <v-card-title class="text-center">Contact Us</v-card-title>
            <v-card-text>
              <v-form @submit="submitForm" ref="form">
                <v-text-field
                  v-model="name"
                  label="Name"
                  outlined
                  required
                  :rules="nameRules"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="Email"
                  outlined
                  required
                  type="email"
                  :rules="emailRules"
                ></v-text-field>
                <v-textarea
                  v-model="message"
                  label="Message"
                  outlined
                  required
                  rows="4"
                  :rules="messageRules"
                ></v-textarea>
                <v-btn type="submit" color="primary" block>Submit</v-btn>
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
        name: '',
        email: '',
        message: '',
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => (v && v.length >= 3) || 'Name must be at least 3 characters',
        ],
        emailRules: [
          (v) => !!v || 'Email is required',
          (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        messageRules: [(v) => !!v || 'Message is required'],
      };
    },
    methods: {
      submitForm() {
        if (this.$refs.form.validate()) {
          console.log('Form submitted with data:', {
            name: this.name,
            email: this.email,
            message: this.message,
          });
        } else {
          console.error('Please correct the form errors');
        }
      },
    },
  };
  </script>
  