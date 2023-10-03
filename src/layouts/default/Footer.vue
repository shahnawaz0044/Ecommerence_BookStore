<template>
    
<v-footer  class="footer">
    <!-- Footer content -->
    <v-container>
      <v-card-title class="headline text-center">Subscribe to Our Newsletter</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="subscribe">
          <v-row >
            <v-col cols="12" md="6" offset-md="3" >
              <v-text-field class="input"
                v-model="email"
                label="Email"
                required
                type="email"
                outlined
                :rules="emailRules"

              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-center">
              <v-btn type="submit" class="news-btn" >Subscribe</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-row>
        <v-col cols="12" md="4">
          <!-- Footer Section 1 -->
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius euismod risus.</p>
        </v-col>
        <v-col cols="12" md="4">
          <!-- Footer Section 2 -->
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </v-col>
        <v-col cols="12" md="4">
          <!-- Footer Section 3 -->
          <h3>Follow Us</h3>
          <v-btn icon class="icons">
            <v-icon size="24">mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon class="icons">
            <v-icon size="24">mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon class="icons">
            <v-icon size="24">mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>




      <v-row align="center" class="lastfooter">

<v-col>

  <p class="white--text">&copy; {{ new Date().getFullYear() }} Your Company Name</p>

</v-col>

</v-row>
      
    </v-container>
    
  </v-footer>
  
  
</template>
<script>
export default {
data() {
  return {
    email: '', // Your email input data
    emailRules: [
      (v) => !!v || 'Email is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      (v) => /.+\.com$/.test(v) || 'E-mail must end with .com',
    ],
    // ... (other data properties)
  };
},
};
</script>
<style scoped>


.footer{
    background-color: black;
    color: White;
    align-items: center;
}
.icons{
    color: #1b3aa0;
}
.lastfooter{
    display: flex;
    color: white;
justify-content: center;
text-align: center;}
.lastfooter p{
    margin-top: 20px;
    margin-bottom: -20px;
}
.headline {
  font-weight: 700;
  margin: 0px 0px;
  color: white;
}
.input{
  margin: 0px;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
}
.text-center{
  margin-bottom: 10px;
}
.news-btn{
  background-color: white;
  color: #1b3aa0;
  font-weight: bold;

}
</style>