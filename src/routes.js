import { createWebHistory, createRouter} from 'vue-router'
import Home from './components/Home.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import CarList from './components/CarList.vue'
import CarProduct from './components/CarProduct.vue'
import CarCart from './components/CarCart.vue'

const routes=[
  {
    path: '/',
    name: 'home',
    component: Home,
    
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/carlist',
    name: 'carlist',
    component: CarList,
    
  },
  {
    path: '/carproduct/:id',
    name: 'carproduct',
    component: CarProduct,
    props: true
  },
  {
    path: '/carcart',
    name: 'carcart',
    component: CarCart
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;