<template>
<div class="pt-5">
  <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" v-model="search" placeholder="Search">
  </div>
</div>

<div class="container">
  <div class="row">
<div class="car-rental-card col-xl-4"  v-for="car in filtredCars" :key="car.id">
  <div class="image-container">
     <img class="img-fluid d-block mx-auto" :src="require(`../assets/${car.path}`)">
  </div>
  <div class="info-container">
    <a href="javascript:void(0);" class="header">
      <h2 class="title">{{ car.title }}</h2>
      <p class="subtitle">Car rentals in 75 pickup locations</p>
    </a>
    <div class="extras">
      <div class="icon">
        <svg class="icon-car" height="32" width="32" viewBox="0 0 128 128" role="presentation" aria-hidden="true"><path d="M109.2 48.9L100 26a16 16 0 0 0-14.8-10H42.8A16 16 0 0 0 28 26l-9.1 23A16 16 0 0 0 8 64v24a8 8 0 0 0 8 8v8a8 8 0 0 0 16 0v-8h64v8a8 8 0 0 0 16 0v-8a8 8 0 0 0 8-8V64a16 16 0 0 0-10.8-15.1zM35.4 29a8 8 0 0 1 7.4-5h42.4a8 8 0 0 1 7.4 5l7.6 19H27.8zM26 76a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm76 0a10 10 0 1 1 10-10 10 10 0 0 1-10 10z"></path></svg>
      </div>
      <div class="type">
        <div>From ₹{{ car.price }} per day</div>
        <div class="muted">{{car.gear}}</div>
      </div>
    </div>
   <p class="btn w-100 px-4 mx-auto">
           <a class="btn btn-dark btn-lg w-100" v-on:click="goToDetailsPage(car.id)"><span style="color:white">Click for more details</span></a>
        </p>
  </div>
</div>
</div>
</div>


</template>

<script>
import axios from 'axios'

export default {
  emits: ["addItemToCart", "removeItemFromCart"],
  props: ['cart'],
  data(){
    return{
      name: 'carlist',
      search: '',
      cars: []
    }
  },
  methods:{
    goToDetailsPage: function(id) {
            this.$router.push("/carproduct/"+id);
        }
  },
   async mounted()
   {
     let user = localStorage.getItem('user-info');
     if(!user)
     {
       this.$router.push({name: 'register'});
     }
     let result = await axios.get('http://localhost:3000/cars');
     console.warn(result);
     this.cars = result.data;
   },
   computed:{
     filtredCars: function(){
       return this.cars.filter((car) => {
           return car.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
       })
     }
   }
}
</script>

<style>
:root {
  --theme-primary: #07c;
  --theme-accent: #febb02;
  --theme-gray-normal: #707070;
  --theme-gray-light: #e0e0e0;
  --theme-white: #ffffff;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.car-rental-card {
  
  width: 400px;
  border-radius: 4px;
  overflow: hidden;
}

.car-rental-card .image-container img {
  width: 100%;
}

.car-rental-card .image-container:hover {
  cursor: pointer;
}

.car-rental-card .info-container {
  padding: 1rem 1rem 1.2rem;
}

.info-container .header {
  text-decoration: none;
  color: var(--theme-black);
}

.info-container .title {
  margin: 0;
  font-size: 1.3rem;
}

.info-container .subtitle {
  margin: 0;
  font-size: 0.9rem;
  color: var(--theme-gray-normal);
}

.car-rental-card .extras {
  display: flex;
  align-items: center;
  margin-top: 0.7rem;
}

.extras .icon {
  margin-top: 0.4rem;
}

.extras .icon .icon-car {
  fill: var(--theme-gray-normal);
}

.extras .type {
  font-size: 0.75rem;
  margin-left: 0.6rem;
}

.extras .muted {
  color: var(--theme-gray-normal);
}

.car-rental-card .link {
  display: inline-block;
  margin-top: 0.9rem;
  font-size: 0.8rem;
  color: var(--theme-primary);
  text-decoration: none;
}

.car-rental-card .link:hover {
  color: var(--theme-accent);
}
</style>