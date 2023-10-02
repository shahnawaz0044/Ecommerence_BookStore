<template>
    <v-card>
      <v-layout>
        <v-app-bar app  color="deep-purple" dark >
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>Ecommerence Book Store</v-toolbar-title>
        </v-app-bar>
  
        <v-navigation-drawer
          class="bg-deep-purple"
          theme="dark"
          v-model="drawer"
          
          app
        >
          <v-list color="transparent">
            <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>
            <v-list-item prepend-icon="mdi-account-box" title="User Profile"></v-list-item>
            <v-list-item prepend-icon="mdi-gavel" title="Admin Panel"></v-list-item>
          </v-list>
  
          <template v-slot:append>
            <div class="pa-2">
              <v-btn block>
                Logout
              </v-btn>
            </div>
          </template>
        </v-navigation-drawer>
  
        <v-main >
            <v-carousel show-arrows="hover" cycle>
  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item>
  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item>
  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item>
</v-carousel>


        </v-main>

      </v-layout>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false,
        mini: false,
        
        
      };
    },
  };
  </script>
  