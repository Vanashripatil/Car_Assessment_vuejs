<template>
<div class="pt-5">
  
   <section class="rental-summary" v-for="(car, index) in cart" :key="index" v-show="cart.length > 0">
     
  <div class="rental-image-container" >
    <img :src="require(`../assets/${car.path}`)" alt="image of car">
    <div class="rental-icon-details">
      <i class="fa fa-cogs" aria-hidden="true"></i>
      <span class="sub-icon">{{car.gear}}</span>
      
    </div>
  </div>
  <div class="rental-details">
    <div class="header">
      <a href="#"><h4 class="rental-type">Economy Car</h4></a>
      <span class="mileage"><i class="fa fa-check" aria-hidden="true"></i> {{ car.mileage}}</span>
    </div>
    <span class="rental-model">{{car.title}}</span>
    <span class="airport"><i class="fa fa-plane" aria-hidden="true"></i>{{car.fuel}}</span>
    <span class="rental-car-types">You'll Get One of These Rental Car Brands.</span>
  </div>
  <div class="rental-booking pt-5">
      <div class="pricing">
        <span class="price">${{car.price}}</span>
        <span class="per-day">/day</span>
      </div>
  
  </div>
  <div class="rental-booking pt-5">
     <p class="btn w-100 px-4 mx-auto">
           <a class="btn btn-dark btn-lg w-100" v-on:click="removeItemFromCart(car.id)"><span style="color:white">Remove</span></a>
        </p>
  </div>
</section>
 <tr v-show="cart.length === 0">
   <td colspan="4" class="text-center">Cart is empty</td>
 </tr>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
      return{
          cart : []
      }
    },
    methods: {
    async removeItemFromCart(product) {
      let result = await axios.delete('http://localhost:3000/cart/' + product);
     console.warn(result);
     this.$router.go()
    }
  },
   async mounted()
   {
      let user = localStorage.getItem('user-info');
     if(!user)
     {
       this.$router.push({name: 'register'});
     }
     let result = await axios.get('http://localhost:3000/cart');
     console.warn(result);
     this.cart = result.data;
   },
}
</script>

<style>
a {
  text-decoration: none;
}

img {
  height: 60%;
}

.fa-check {
  color: #5594C3;
}

.rental-summary {
  display: flex;
  font-family: 'arial';
  max-width: 931px;
  height: 177px;
  border: 1px solid #CCCCCC;
}

.rental-image-container {
  font-size: 18px;
  text-align: center;
  padding-top: 20px;
  width: 177px;
  border-right: 1px solid #CCCCCC;
}

.sub-icon {
  font-size: 12px;
  margin-right: 5px; 
  margin-left: 3px;
}

.last {
  margin-right: 0;
}

.rental-icon-details {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-right: 0 10px 0 10px;
  color: #666666;
}

.rental-details {
  display: flex;
  flex-direction: column;
  flex: 1;  
  padding: 16px 12px 0 12px;
}

.header {
  display: flex;
  justify-content: space-between
}

.rental-type {
  font-weight: 200;
  font-size: 20px;
  color: #5594C3;
  margin-bottom: 6px;
  margin-top: 0;
}

.airport {
  font-size: 18px;
  margin-bottom: 12px;
}

.mileage {
  margin-bottom: 12px;
}

.rental-car-types {
  font-size: 12px;
  margin-bottom: 12px;
}

.car-logo {
  width: 50px;
  margin-right: 6px;
}

.rental-model {
  color: #999999;
  font-size: 18px;
  margin-bottom: 12px;
}

.rental-type:hover {
  color: #245292;
}

.rental-booking {
  width: 177px;
  border-left: 1px solid #CCCCCC;
}

.pricing-summary {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 10px;
  padding-right: 10px;
  height: 177px;
  background-color: #F7F7F7;
}

button:focus {
  outline:0 !important;
}

button:hover {
  background-color: #548F2C;
}

.btn {
  font-size: 20px;
  padding: 8px 20px 8px 20px;
  background-color: #60A034;
  color: #FFF;
  border: 0;
  margin-bottom: 16px;
}

.pricing {
  color: #60A034;
}

.price {
  font-size: 30px;
}

.summary {
  font-size: 12px;
  color: #AFAFAF;
  margin-bottom: 5px;
}
</style>