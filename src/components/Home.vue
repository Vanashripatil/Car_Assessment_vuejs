<template>

  <CarList />
</template>

<script>
import CarList from './CarList.vue' 
export default {
  name: 'Home',
  components:{
    CarList
  },
    mounted()
   {
     let user = localStorage.getItem('user-info');
     if(!user)
     {
       this.$router.push({name: 'register'});
     }
   }
}
</script>

<style>

</style>