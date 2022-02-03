<template>
  <NavBar  :user="user" />
    <div class="container">
    <router-view v-on:addItemToCart="addItemToCart" :cart="cart" v-on:removeItemFromCart="removeItemFromCart"></router-view>
    </div>

</template>

<script>
import NavBar from './components/NavBar.vue' 
export default {
  name: 'App',
  data(){
    return{
      user: null,
      cart: [],
    }
  },
  components:{
    NavBar,
  },
  mounted()
   {
      this.user = localStorage.getItem('user-info');
      console.warn(this.user);
   },
   methods: {
    addItemToCart(cars) {
      this.cart.push(cars);
    },
    removeItemFromCart(cars) {
      this.cart.splice(this.cart.indexOf(cars), 1);
    },
  },
}
</script>


