<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">{{"Currency_Account"| localize}}</span>

        <p v-for="cur of currencues" :key="cur" class="currency-line">
          <span>{{getCurrency(cur) | currency(cur)}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["rates"],

  data: () => ({
    currencues: ["RUB", "USD", "EUR"]
  }),
  methods: {
    getCurrency(currency) {
      if (currency === "RUB") {
        return this.$store.getters.info.bill;
      } else {
        return Math.floor(
          this.$store.getters.info.bill / this.rates[currency].Value
        );
      }
    }
  }
};
</script>