import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2';

import App from './App.vue'
import router from './router'

import './assets/css/main.css';

const app = createApp(App)



app.use(createPinia())
app.use(router)
app.use(VueSweetalert2);

app.mount('#app');
