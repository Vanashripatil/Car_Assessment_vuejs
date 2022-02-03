<template>

<div class="pt-5">
 <div class="home">
    <div class="vue-logo-back">
        
    </div>
    <div class="card" v-if="cars.id">
        <div class="card-header">
            Customer Details
        </div>
        <div class="card-body">
					<img class="img-fluid d-block mx-auto" :src="require(`../assets/${cars.path}`)">
            <h5 class="card-title">{{cars.title}}</h5>
             <div class="card-subtitle text-muted text-truncate my-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus porro, dolorum dolore
              </div>
             <div class="card-text d-flex justify-content-between mt-5 mb-3">
                <span>{{cars.gear}}</span>
                 <span>{{cars.fuel}}</span>
                  <span>{{cars.Mileage}}</span>
                <span class="_priceSection position-relative">
                  <div class="_now h5 _textPink font-weight-bolder">${{cars.price}}/Day</div>
                </span>
              </div>
              <div class="px-5 py-4">
              <button type="submit" class="btn btn-primary btn-lg" v-on:click="addItemToCart(cars)">Book Car</button>
            </div>
        </div>
    </div>
</div>

</div>
</template>

<script>
import axios from 'axios'
export default {
 props: [ 'id' ],
  data(){
    return{
      name: 'carproduct',
      cars: []
    }
  },
  async mounted()
  {
    let user = localStorage.getItem('user-info');
     if(!user)
     {
       this.$router.push({name: 'register'});
     } 
    let result = await axios.get('http://localhost:3000/cars/' + this.id);
    //  console.warn(result);
     this.cars = result.data;
  },
  methods: {
    async addItemToCart(cars) {
      let result = await axios.post('http://localhost:3000/cart', cars);
      console.warn(result);
      this.$router.push("/carcart")
    }
  }
}
</script>

<style>

</style>