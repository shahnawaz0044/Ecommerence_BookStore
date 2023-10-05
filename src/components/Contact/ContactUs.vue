<template>
  <v-container class="contact-us-form" >
    <v-row class="contact-us-form">
      <v-col cols="12">
        <div class="contact_form_inner">
          <div class="contact_field">
            <h3>Contact Us</h3>
            <p>Feel free to contact us any time. We will get back to you as soon as we can!</p>
            <v-text-field v-model="name" label="Name" outlined class="form-group"></v-text-field>
            <v-text-field 
            v-model="email" 
            label="Email" 
            outlined 
            class="form-group"     
            :rules="emailRules"
            ></v-text-field>
            <v-textarea v-model="message" label="Message" outlined class="form-group"></v-textarea>
            <v-btn @click="sendMessage" class="contact_form_submit">Send</v-btn>
          </div>
        </div>
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
    };
  },

  computed: {
    emailRules() {
      return [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
      ];
    },
  },

  methods: {
    sendMessage() {
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Message:', this.message);
    },
  },
};
</script>

<style scoped>
/* Add your custom CSS styles here if needed */
.contact-us-form{

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

}
.contact_form_inner {
  background-color: #fff;
  position: relative;
}

.contact_field {
 
  padding: 60px 20px 90px 90px; /* Adjust padding as needed */
}

.contact_field h3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  color: #000;
  font-size: 40px;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 10px;
}

.contact_field p {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  color: #000;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 35px;
}

.form-group {
  margin-top: 20px; /* Adjust spacing between form fields */
}

.contact_form_submit {
  background: linear-gradient(to top right, #1325e8 -5%, #8f10b7 100%);
  border: none;
  color: #fff;
  padding: 10px 30px;
  width: 100%;
  margin-top: 25px;
  border-radius: 35px;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 2px;
  transition: background 0.3s; /* Add a smooth hover transition */
}

.contact_form_submit:hover {
  background: #1325e8; /* Change background color on hover */
}

</style>