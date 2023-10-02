<template>
  <v-app class="vapp">

    <v-container class="fa-bo-box">
      <h1>Famous Books</h1>
        <v-row>
    <v-col
      v-for="index in 3"
      :key="index"
      cols="12"    
      sm="6"      
      md="4"       
    >
      <v-card class="famous-book" outlined>
        <v-img
          src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          height="200px"
          alt="Book Image"
        ></v-img>
        <v-card-title class="headline">Book Title</v-card-title>
        <v-card-subtitle>John Doe</v-card-subtitle>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lectus nec libero vehicula venenatis.
        </v-card-text>
        <v-card-actions>
          <v-btn text color="primary">Read More</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</v-app>
  </template>
<script>
export default {
    name:"FamousBooks",
    
  
};
</script>
<style scoped>
.vapp{
  height: auto;
  background-color: rgb(43, 32, 32);
}

.fa-bo-box{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

}
.famous-book {
  max-width: 250px;
  margin: 20px;
}

.headline {
  font-size: 1.5rem;
}
</style>