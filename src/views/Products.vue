<template>
  <v-container>
    <h1 class="pro-hea">New Products</h1>
    <v-row class="products">
          <v-col
            v-for="product in products"
            :key="product.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >

          <v-card class="mb-4">
            <v-img :src="product.cover_image" aspect-ratio="1">
              </v-img>
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-text>{{ product.description }}</v-card-text>
              <v-card-actions>
                <v-btn color="primary" to="AddCard" text @click="addToCart(product)">
                  Show Details
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn text>${{ product.price }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <div class="prod-btn-sho">

          <v-btn class="pro-btn" color="primary" to="products">Show More</v-btn>
        </div>
        <router-view></router-view>

  </v-container>
        
</template>
<script>
import AddCard from './AddCard.vue';

import axios from 'axios'

export default {
    name:"Products",
    components: {
      AddCard
    },
    
data: () => ({

show: false,

products: [],


searchQuery: '',

}),

async mounted() {

let result = await axios.get("http://10.0.10.220:8080/api/book")

this.products = result.data.books

console.log(this.products)




},
methods: {
    toggleSidebar() {
    },
    addToCart(product) {
    },

},
};
</script>
<style scoped>

.products{
    margin: 30px;
}
.pro-hea{
  margin-top: 15px;
}
.prod-btn-sho{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.pro-btn{
  height: 40px;
  width: 200px;
}
</style>
