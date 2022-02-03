<template>
  <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Login</h3>
            <form @submit.prevent="handleSubmit" ref="form">

                  <div class="row align-items-center pt-4 pb-3">
                  <div class="col-md-3 ps-6">

                  <h6 class="mb-0">Username</h6>

                  </div>
                  <div class="col-md-9 pe-5">

                <input type="text" class="form-control form-control-lg" v-model="username"/>

                 </div>
                 </div>
               
                  <div class="row align-items-center pt-4 pb-3">
                 <div class="col-md-3 ps-6">

                <h6 class="mb-0">Password</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input type="password" class="form-control form-control-lg" v-model="password" />

              </div>
            </div>
              <div class="row">
            <div class="px-5 py-4">
              <button type="submit" class="btn btn-primary btn-lg">Login</button>
            </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios'

export default {
    name:'login',
    data(){
      return{
        username: '',
        password: '',
      }
    },
     methods: 
     {
       async handleSubmit(){
         let result = await axios.get(
           `http://localhost:3000/user?username=${this.username}&password=${this.password}`
         )

         console.warn(result);
         if(result.status == 200 && result.data.length > 0)
        {
          localStorage.setItem("user-info", JSON.stringify(result.data[0]))
          this.$router.push({name: 'home'})
          this.$router.go()
        }
        else{
          alert("Username or password is wrong")
        }
       }
     },

      mounted()
      {
        let user = localStorage.getItem('user-info');
        if(user)
        {
          this.$router.push({name: 'home'})
        }
      }
}
</script>

<style>

</style>