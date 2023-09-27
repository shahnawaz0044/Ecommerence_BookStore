<template>
    
<v-footer  class="footer">
    <!-- Footer content -->
    <v-container >
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
</script>
<style scoped>


.footer{
    background-color: #1b3aa0;
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
</style>