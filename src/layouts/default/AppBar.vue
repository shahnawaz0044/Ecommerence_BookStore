<template>
  <v-app-bar app color="primary" dark>
  
      <!-- <v-app-bar-nav-icon @click="toggleSidebar"></v-app-bar-nav-icon> -->
      <v-toolbar-title>E-Commerce Book Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/products" >Products</v-btn>
      <v-btn text to="/cartbox">Cart</v-btn>
      <div>
    <v-btn to="/login" class="login-button" text>Login</v-btn>
    <v-btn to="/signup" class="signup-button" text>Sign Up</v-btn>
  </div>
    </v-app-bar>
</template>

<script setup>

</script>
<style>
.login-button {
  background-color: #007bff; 
  color: #fff; 
  margin-right: 10px; 
}

.signup-button {
  background-color: #28a745; 
  color: #fff;
  margin-right: 10px;
}
</style>
