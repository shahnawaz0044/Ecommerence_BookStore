<template>

    <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>Available Products</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field v-model="searchQuery" label="Search Product" prepend-icon="mdi-magnify" @input="filterProducts"
          outlined dense solo-inverted clearable color="primary" class="custom-input"></v-text-field>
      </v-col>
    </v-row>

    <v-container>
      <h1 class="pro-hea">New Products</h1>
      <v-row class="products">
        <v-col v-for="product in filteredProducts" :key="product.id" cols="12" sm="6" md="4" lg="3">
          <v-card class="mb-4" max-height="450px">
            <v-img :src="product.cover_image" aspect-ratio="1">
            </v-img>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-text>{{ product.description }}</v-card-text>
            <v-card-actions>
              <v-btn color="primary" to="AddCard" text @click="addToCart(product)">
                Add to Cart
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn text>${{ product.price }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <div class="prod-btn-sho">
        <v-btn class="pro-btn" color="primary">Show More</v-btn>
      </div>
    </v-container>

  </v-container>
</template>



<script>
import axios from 'axios'

export default {

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
  computed: {

    filteredProducts() {
      return this.products.filter(product => {
        const productName = product.title.toLowerCase()
        return productName.includes(this.searchQuery.toLowerCase())
      })
    },
  },
}

</script>

<style>
.custom-input {
  border-radius: 20px;
}

.custom-input input {
  padding: 10px;
}
</style>