<template>
  <v-app>  
    <v-carousel cycle height="600">
  <v-carousel-item
    src="https://images.unsplash.com/photo-1414124488080-0188dcbb8834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    cover
  >
  <v-container class="heading-slider">
    <h1>Enjoy a new world inside a book</h1>
    <p>Excellent Books are at Your Doorstep because of its excellent reputation and many satisfied customers, In addition, we believe that having a limited budget should never stop you from reading. As a result, we offer amazing savings on a selection of books.</p>
    <v-btn color="primary" class="mt-4" to="/login">Shop Now</v-btn>
  </v-container>
</v-carousel-item>

  <v-carousel-item
    src="https://images.unsplash.com/photo-1414124488080-0188dcbb8834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    cover
  >
  <v-container class="heading-slider">
    <h1>Enjoy a new world inside a book</h1>
    <p>Excellent Books are at Your Doorstep because of its excellent reputation and many satisfied customers, In addition, we believe that having a limited budget should never stop you from reading. As a result, we offer amazing savings on a selection of books.</p>
    <v-btn color="primary" class="mt-4" to="/login">Shop Now</v-btn>
  </v-container>
</v-carousel-item>

  <v-carousel-item
    src="https://images.unsplash.com/photo-1414124488080-0188dcbb8834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    cover
  >
  <v-container class="heading-slider">
    <h1>Enjoy a new world inside a book</h1>
    <p>Excellent Books are at Your Doorstep because of its excellent reputation and many satisfied customers, In addition, we believe that having a limited budget should never stop you from reading. As a result, we offer amazing savings on a selection of books.</p>
    <v-btn color="primary" class="mt-4" to="/login">Shop Now</v-btn>
  </v-container>
  <router-view></router-view>

</v-carousel-item>
</v-carousel>

<v-main>
  <Products />
  <FamousBooks />
      
</v-main>
</v-app>
</template>

<script>
import Products from '@/components/Home/Products.vue';
import FamousBooks from '../components/Home/FamousBooks.vue';

export default {
  name:"Home",
  components:{
    Products,
    FamousBooks,
},
  
  data() {
    return {
      email: '',
    };
   
  },
  methods: {
    subscribe() {
      if (this.email) {
        console.log(`Subscribed with email: ${this.email}`);
        this.email = '';
      } else {
        console.error('Invalid email address');
      }
    },
  },
};
</script>

<style scoped>
.heading-slider{
  height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;


}
.heading-slider h1{
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 10px;
}
.heading-slider p{
  margin-bottom: 10px;
  color: white;
  text-align: center;
}
.mt-4{
  height: 40px;
  border-radius: 5px;
  justify-content: center;
}

</style>