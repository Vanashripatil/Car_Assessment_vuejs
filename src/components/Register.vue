<template>
  <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
           <form @submit.prevent="handleSubmit" ref="form">

             
                  <div class="row align-items-center pt-4 pb-3">
                  <div class="col-md-3 ps-6">

                  <h6 class="mb-0">Username</h6>

                  </div>
                  <div class="col-md-9 pe-5">

                <input type="text" class="form-control form-control-lg" v-model="username" />

                 </div>
                 </div>
               
                  <div class="row align-items-center pt-4 pb-3">
                 <div class="col-md-3 ps-6">

                <h6 class="mb-0">Password</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input type="password" class="form-control form-control-lg" v-model="password"/>

              </div>
            </div>
                
             

              <div class="row">
                    <div class="row align-items-center pt-4 pb-3">
                 <div class="col-md-3 ps-6">

                <h6 class="mb-0">Gender:</h6>

              </div>
              <div class="col-md-9 pe-5">

              <input type="radio" id="male" value="Male" v-model="gender">
              <label for="male">Male</label>
              <input type="radio" id="female" value="Female" v-model="gender">
              <label for="female">Female</label>

              </div>
            </div>

             <div class="row align-items-center pt-4 pb-3">
                 <div class="col-md-3 ps-6">

                <h6 class="mb-0">Country</h6>

              </div>
              <div class="col-md-9 pe-5">

                <select class="select form-control-lg" v-model="country">
                      <option disabled value="">Please select one</option>
                      <option>India</option>
                      <option>Japan</option>
                      <option>US</option>
                      <option>UK</option>
                      <option>Chile</option>
                      <option>France</option>
                      <option>Indonesia</option>
                      <option>Italy</option>
                      <option>Maldives</option>
                      <option>Mexico</option>
                  </select>

              </div>
            </div>
            <div class="px-5 py-4">
              <button type="submit" class="btn btn-primary btn-lg">Register</button>
            </div>
            <p>
              <router-link to="/login">Login</router-link>
            </p>
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
   name: 'register',
   data()
   {
     return{
       username: '',
       password: '',
       gender: '',
       country: ''
     }
   },
   methods:{
     async handleSubmit()
     {
        let result = await axios.post('http://localhost:3000/user', {
          username: this.username,
          password: this.password,
          gender: this.gender,
          country: this.country
        });

        console.warn(result);
        if(result.status == 201)
        {
          localStorage.setItem("user-info", JSON.stringify(result.data))
          this.$router.push({name: 'home'})
          this.$router.go()
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