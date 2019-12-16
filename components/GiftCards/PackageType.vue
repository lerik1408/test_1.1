<template>
  <div class="package-type">
    <div :style="packageImage" class="out-of-space">
      <slot></slot>
    </div>

    <h2>{{ _package }} Package</h2>
    <hr />
    <p class="text">{{ viewsAmount }} Views</p>
    <hr />
    <p class="text">Promote up to {{ promotedVidesAmount }} videos</p>
    <hr />
    <a
      @click="goToCreateEmail"
      class="primary-button-55px"
      :style="{ background: bgColor }"
    >
      ${{ price }}.00 <span>|</span> Purchase
    </a>
  </div>
</template>

<script>
export default {
  props: {
    _package: String,
    viewsAmount: String,
    promotedVidesAmount: Number,
    price: Number,
    bgColor: String
  },
  methods: {
    goToCreateEmail() {
      let paymentFormData = {};
      paymentFormData._package = this._package;
      paymentFormData.amount = this.price;

      this.$router.push({ name: "gift-cards-create-email", params: paymentFormData });
    }
  },
  computed: {
    packageImage: function() {
      return {
        padding: "0px",
        background: this.bgColor,
        width: "77px",
        "border-radius": "50%"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  margin: 20px;
  max-width: 36px;
}
hr {
  min-width: 190px;
  margin-bottom: 18px;
  border-top: 1px solid $hr-color;
  margin-top: 0px;
}
.package-type {
  position: relative;
  width: 315px;
  max-width: 90%;
  height: 364px;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(22, 34, 78, 0.06);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 88px;
  margin-right: auto;
  margin-left: auto;
  @include for-tablet {
    margin-right: 15px;
    margin-left: 15px;
  }
  @include for-desktop {
    margin-right: 20px;
    margin-left: 20px;
  }
}
h2 {
  text-transform: capitalize;
  margin-bottom: 22px;
  color: $dark-input;
  font-weight: 900;
  font-size: 26px;
}
.out-of-space {
  position: relative;
  top: -10%;
  max-width: 76px;
  max-height: 76px;
}
p {
  font-size: 18px;
  color: #808190;
  margin-bottom: 17px;
}
.primary-button-55px {
  text-transform: capitalize;
  width: 240px;
}
span {
  font-weight: normal;
  margin: 0 5px;
}
</style>
