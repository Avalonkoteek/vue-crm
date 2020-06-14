import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import info from "./info";
import category from "./category";
import record from "./record";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_HTTPS_FIXER;
      // const res = await fetch(
      //   `https://fcsapi.com/api-v2/forex/base_latest?symbol=EUR&type=forex&access_key=${key}`
      // );
      const res = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`);
      return await res.json();
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth,
    info,
    category,
    record
  }
});
