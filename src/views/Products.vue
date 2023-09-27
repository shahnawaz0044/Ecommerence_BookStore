<template>
  <v-container>
    <h1>New Products</h1>
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
              <v-img :src="product.image" aspect-ratio="1">
              </v-img>
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-text>{{ product.description }}</v-card-text>
              <v-card-actions>
                <v-btn color="primary" to="AddCard" text @click="addToCart(product)">
                  Add to Cart
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn text>{{ product.price }}</v-btn>
              </v-card-actions>
            </v-card>

            
          </v-col>
        </v-row>
  </v-container>
        
</template>
<script>
import AddCard from './AddCard.vue';
export default {
    name:"Products",
    components: {
      AddCard
    },
  data() {
    return {
products: [
        // Sample product data (replace with your actual data)
        {
          id: 1,
          name: "Product 1",
          description: "Description of Product 1",
          image: "https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          price: "$10.99",
        },
        // Add more product data as needed
        {
          id: 1,
          name: "Product 1",
          description: "Description of Product 1",
          image: "https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          price: "$10.99",
        },
        // Add more product data as needed
        {
          id: 1,
          name: "Product 1",
          description: "Description of Product 1",
          image: "https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          price: "$10.99",
        },
        // Add more product data as needed
        {
          id: 1,
          name: "Product 1",
          description: "Description of Product 1",
          image: "https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          price: "$10.99",
        },
          // Add more product data as needed
          {
          id: 1,
          name: "Product 1",
          description: "Description of Product 1",
          image: "https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          price: "$10.99",
        },
          // Add more product data as needed
          {
          id: 1,
          name: "Product 1",
          description: "Description of Product 1",
          image: "https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          price: "$10.99",
        },
          // Add more product data as needed
          {
          id: 1,
          name: "Product 1",
          description: "Description of Product 1",
          image: "https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          price: "$10.99",
        },
          // Add more product data as needed
          {
          id: 1,
          name: "Product 1",
          description: "Description of Product 1",
          image: "https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          price: "$10.99",
        },
      ],
    };
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
</style>