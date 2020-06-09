import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import currencyFilter from "./filters/currency.filter";
import dateFilter from "./filters/date.filter";
import messagePlugin from "./utils/message.plugin";
import Loader from "./components/app/Loader";
import tooltipDirective from "./directives/tooltip.directive";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.component("Loader", Loader);

Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);

Vue.directive("tooltip", tooltipDirective);

const firebaseConfig = {
  apiKey: "AIzaSyDzQRyuLtUFvezDHcwTAkQvBD1KT_0fONo",
  authDomain: "vue-crm-67f17.firebaseapp.com",
  databaseURL: "https://vue-crm-67f17.firebaseio.com",
  projectId: "vue-crm-67f17",
  storageBucket: "vue-crm-67f17.appspot.com",
  messagingSenderId: "742318860597",
  appId: "1:742318860597:web:86e1cd7398a99a95eb847c"
};

let app;
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
