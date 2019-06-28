import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "tailwindcss/dist/tailwind.min.css";
import "ionicons/dist/css/ionicons.min.css";
import "@/assets/css/app.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
