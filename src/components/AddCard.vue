<template>
  <v-app>

    <v-container>
      <v-card>
        <v-container class="card-heading">
          <h1> Book Detail</h1>
        </v-container>
      </v-card>

      <v-card>
        <v-container class="product-card">
          <v-img
            src="https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            height="300px" width="250px" alt="Product Image" class="pro-img"></v-img>

          <div class="ra-container">
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
              <div class="mr-2">
                <v-text-field v-model="quantity" label="Quantity" type="number" min="1"></v-text-field>
              </div>
              <div class="mr-2">
                <v-rating v-model="rating" :half-increments="true" background-color="grey lighten-3" @input="updateRating"
                  readonly></v-rating>
                <div class="rating-label">{{ rating }}/5</div>
              </div>
            </v-card-actions>
            <div class="btn-container">
              <v-btn class="btn-addcard" @click="addToCart" color="primary">Add to Cart</v-btn>
              <v-btn class="btn-addcard" @click="buyNow" to="/login" color="success">Buy Now</v-btn>
            </div>
            <router-view></router-view>

          </div>
        </v-container>

        <v-container class="comment-section" outlined>
          <v-card-title class="headline">Comments</v-card-title>
          <v-card-text>
            <v-textarea v-model="newComment" label="Write your comment" outlined rows="4" auto-grow dense
              placeholder="Leave a comment..."></v-textarea>

            <v-btn @click="postComment" color="primary">Post Comment</v-btn>
          </v-card-text>

          <div class="comment-list">
            <v-card class="comment-item" outlined v-for="(comment, index) in comments" :key="index">
              <v-card-title>{{ comment.author }}</v-card-title>
              <v-card-text>{{ comment.text }}</v-card-text>
            </v-card>
          </div>
        </v-container>

        <v-container class="Reviews-section" outlined>
          <v-card-title class="headline">Reviews</v-card-title>

          <v-card class="review-card add-review-box" outlined>
            <v-card-title class="headline">Add Review</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="submitReview">
                <v-text-field v-model="newReview.username" label="Username"></v-text-field>
                <v-rating v-model="newReview.rating" :half-increments="true" background-color="grey lighten-3"></v-rating>
                <v-textarea v-model="newReview.comment" label="Comment"></v-textarea>
                <v-btn type="submit" color="primary">Submit Review</v-btn>
              </v-form>
            </v-card-text>
          </v-card>

          <v-row>
            <v-col v-for="review in reviews" :key="review.id" cols="12" sm="6" md="4">
              <v-card class="review-card" outlined>
                <v-card-title class="headline">{{ review.username }}</v-card-title>
                <v-card-text>
                  <v-rating v-model="review.rating" :half-increments="true" background-color="grey lighten-3"
                    readonly></v-rating>
                  <div class="review-text">
                    {{ review.comment }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </v-app>
</template>
  
<script>
export default {
  name: "AddCard",
  data() {
    return {
      rating: 3.5,
      quantity: 1,
      newComment: "",
      comments: [

      ],

      reviews: [

      ],
      newReview: {
        username: '',
        rating: 0,
        comment: '',
      },


    };
  },
  methods: {
    addToCart() {
      console.log(`Added ${this.quantity} Sample Product(s) to the cart.`);
    },
    buyNow() {
      console.log(`Purchased ${this.quantity} Sample Product(s).`);
    },

    updateRating(value) {
      console.log(`Rated: ${value}`);
    },


    postComment() {
      if (this.newComment.trim() !== "") {
        this.comments.push({
          author: "Name",
          text: this.newComment,
        });
        this.newComment = "";
      }
    },

    submitReview() {
      if (this.newReview.username && this.newReview.rating && this.newReview.comment) {
        this.newReview.id = Date.now();

        this.reviews.push(this.newReview);

        this.newReview = {
          username: '',
          rating: 0,
          comment: '',
        };
      }
    },
  },
};
</script>
  
<style scoped>
.card-heading {
  background-color: #1a9633;
  margin: 10px 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.product-card {
  display: flex;
  border-radius: 10px;

}

.pro-img {
  margin: 10px 10px;

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

.rating-label {
  font-size: 1rem;
  color: #ff9800;
  margin-top: 8px;
}

::v-deep .v-rating .v-icon {
  color: #ff9800;
  font-size: 1.5rem;
}

/* Style for the hover effect when rating */
::v-deep .v-rating .v-icon:hover {
  color: #ff5722;
  /* Hover color */
}

.ra-container {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}

.btn-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.btn-addcard {
  height: 40px;
  width: 40%;
  margin: 10px 10px;
  justify-content: center;
}



.comment-section {
  margin-top: 20px;
  padding: 20px;
}

.comment-list {
  margin-top: 20px;
}

.comment-item {
  margin-top: 10px;
}

.headline {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
</style>
  