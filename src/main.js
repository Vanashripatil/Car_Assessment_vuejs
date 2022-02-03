import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const app = createApp(App)
app.use(router)
app.mount('#app')
