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
      <v-container>
        <v-card elevation="3" class="newsletter">
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
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-center">
              <v-btn type="submit" color="primary">Subscribe</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</v-main>
</v-app>
</template>

<script>
import Products from './Products.vue';
import FamousBooks from './FamousBooks.vue';
import ShowAllBooksVue from './ShowAllBooks.vue';

export default {
  name:"Home",
  components:{
    Products,
    FamousBooks,
    ShowAllBooksVue
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
.headline {
  font-weight: 700;
  margin: 20px 0px;
  color:white;
}
.newsletter{
  background-color: #333;
}
.input{
  margin: 0px;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
  border-radius: 10px;
}
</style>