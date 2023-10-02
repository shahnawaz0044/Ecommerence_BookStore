<template>
    <v-container fluid>
      <h1 class="text-center mt-5">Shopping Cart</h1>
      <v-divider></v-divider>
  
      <v-row class="mt-5" v-for="(item, index) in cart" :key="index">
        <v-col cols="4">
          <v-img :src="item.image" alt="Product" class="mx-auto" max-width="150"></v-img>
        </v-col>
        <v-col cols="4">
          <h3 class="text-h6">Book Name: {{ item.name }}</h3>
          <p>Book Description: {{ item.description }}</p>
          <p> Price: ${{ item.price }}</p>

        </v-col>
        <v-col cols="2">
          <v-text-field v-model="item.quantity" type="number" min="1" outlined dense></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn @click="removeItem(index)" color="error" dark icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
  
      <v-divider class="mt-5"></v-divider>
  
      <v-row class="mt-5">
        <v-col cols="8"></v-col>
        <v-col cols="2" class="text-h6">Subtotal:</v-col>
        <v-col cols="2" class="text-h6">${{ calculateSubtotal() }}</v-col>
      </v-row>
  
      <v-divider class="mt-5"></v-divider>
  
      <v-row class="mt-5">
        <v-col cols="10"></v-col>
        <v-col cols="2">
          <v-btn @click="checkout" color="primary" block>Checkout</v-btn>
        </v-col>
      </v-row>
  
      <v-row class="mt-5">
        <v-col cols="12" lg="4" xl="3">
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>:${{ calculateSubtotal() }}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span>Shipping Cost:</span>
              <span>$2.99</span>
            </div>
            <hr class="my-2">
            <div class="d-flex justify-content-between">
              <span>Total (tax included)</span>
              <span>:${{ calculateTotal() }}</span>
            </div>
          </div>
          <v-btn @click="checkout" color="primary" block>Checkout</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: [
          {
            name: 'Thinking, Fast and Slow',
            description: 'Daniel Kahneman',
            image: 'https://i.imgur.com/2DsA49b.webp',
            quantity: 2,
            price: 9.99,
          },
          {
            name: 'Homo Deus: A Brief History of Tomorrow',
            description: 'Yuval Noah Harari',
            image: 'https://i.imgur.com/Oj1iQUX.webp',
            quantity: 1,
            price: 13.50,
          },
        ],
      
      };
    },
    methods: {
      removeItem(index) {
        this.cart.splice(index, 1);
      },
      calculateSubtotal() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
      },
      calculateTotal() {
        return (parseFloat(this.calculateSubtotal()) + 2.99).toFixed(2);
      },
      checkout() {
      },
    },
  };
  </script>
  <style>
  .text-center {
    text-align: center;
  }
  
  .v-row.product-row {
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
  
  .product-image {
    max-width: 150px;
    display: block;
    margin: 0 auto;
  }
  
  .product-name {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  .product-description {
    margin-bottom: 1rem;
  }
  
  .product-quantity input {
    width: 50px;
    text-align: center;
  }
  
  .remove-item-button {
    font-size: 1.5rem;
    color: #f44336;
  }
  
  .subtotal-section {
    font-weight: 500;
    margin-top: 1rem;
    font-size: 1.25rem;
  }
  
  .payment-info-section {
    margin-top: 2rem;
  }
  
  .payment-method-label {
    font-size: 1rem;
  }
  
  .name-on-card,
  .expiration {
    margin-top: 1rem;
  }
  
  .card-number,
  .cvv {
    margin-top: 1rem;
  }
  
  .payment-subtotal,
  .payment-shipping,
  .payment-total {
    font-weight: 500;
    margin-top: 0.5rem;
  }
  
  .checkout-button {
    margin-top: 2rem;
  }
  
  </style>
  