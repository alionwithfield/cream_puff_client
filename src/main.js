import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import './assets/base.css';

// TODO: Add a bootstrap function

const app = createApp(App);

app.config.errorHandler = () => {
  /* handle error */
};

app.use(createPinia());
app.use(router);

app.mount('#app');
// console.log(app.config);
