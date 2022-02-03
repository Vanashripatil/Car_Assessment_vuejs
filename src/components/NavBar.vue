<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <div class="container-fluid">	    
		<div class="collapse navbar-collapse " id="navbarSupportedContent">
		  <ul class="navbar-nav me-auto order-0 ">
			<li class="nav-item active">
        <router-link to="/" class="nav-tem nav-link">Home</router-link>
      </li>
			 <li class="nav-item">
         <router-link to="/carlist" class="nav-tem nav-link">Car Service</router-link>
      </li>
			<li class="nav-item">
        <a class="nav-link" v-on:click="logout" v-if="user" href="#">Logout</a>
      </li>
		  </ul>
		  <router-link class="d-flex ms-auto order-5"  v-if="user" to="/carcart">
              <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
       </router-link>
		</div>
	  </div>
	</nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['user'],
  methods:{
    logout(){
      localStorage.clear();
       this.$router.push({name: 'login'})
       this.$router.go()
    }
  },
  computed(){
    this.$router.go(0)
  }
  
}
</script>

<style>
.mx-auto{
            margin-left: auto;
        }
</style>