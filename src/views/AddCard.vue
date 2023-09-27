<template>
    <v-card class="product-card" outlined>
      <v-img
        src="https://via.placeholder.com/300x200"
        height="200px"
        alt="Product Image"
      ></v-img>
      <v-card-title class="headline">Sample Product Title</v-card-title>
      <v-card-subtitle>Sample Product Description</v-card-subtitle>
      <v-card-text>
        <div>
          <strong>Price: </strong> $19.99 USD
        </div>
        <div>
          <strong>Discount: </strong> 10%
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="d-flex flex-row">
          <div class="mr-2">
            <v-rating
              v-model="rating"
              :half-increments="true"
              background-color="grey lighten-3"
              readonly
            ></v-rating>
          </div>
          <div class="mr-2">
            <v-text-field
              v-model="quantity"
              label="Quantity"
              type="number"
              min="1"
            ></v-text-field>
          </div>
          <v-btn @click="addToCart" color="primary">Add to Cart</v-btn>
          <v-btn @click="buyNow" color="success">Buy Now</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "AddCard",
    data() {
      return {
        rating: 4,
        quantity: 1,
      };
    },
    methods: {
      addToCart() {
        console.log(`Added ${this.quantity} Sample Product(s) to the cart.`);
      },
      buyNow() {
        console.log(`Purchased ${this.quantity} Sample Product(s).`);
      },
    },
  };
  </script>
  
  <style scoped>
.product-card {
  max-width: 600px;
  margin: 20px;
}

.headline {
  font-size: 1.5rem;
}

.v-card-title {
  font-weight: bold;
}

.v-card-subtitle {
  font-style: italic;
}

</style>
  