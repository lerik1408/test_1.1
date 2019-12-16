<template>
  <div class="payment-paid">
    <HeaderNavBar />

    <div class="payment-paid-main">
      <div class="payment-header">
        <h1>Your gift card order is complete!</h1>

        <p>
          If you’ve selected today as the delivery date, your recipient will
          receive an email with the gift card shortly! Otherwise, we will send
          your gift the morning of your chosen date.
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderNavBar from "@/components/_shared/HeaderNavBar.vue";
import Footer from "@/components/_shared/Footer.vue";

export default {
  components: { HeaderNavBar, Footer },
  mounted(){
    if(!this.$route.params.id)
    this.$router.push({
      name: "gift-cards"
    });
  }
};
</script>

<style lang="scss" scoped>
.payment-paid {
  background: $bg-light;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.payment-paid-main {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0px 30px 46px 30px;
  h1 {
    margin-bottom: 38px;
    font-size: 24px;
    @include for-tablet {
      margin-bottom: 0;
      font-size: 34px;
    }
    @include for-desktop {
      font-size: 42px;
      margin-bottom: 21px;
    }
  }
  @include for-tablet {
    width: 687px;
    margin-bottom: 63px;
    margin-left: auto;
    margin-right: auto;
    background: white;
    padding: 68px 77px 75px 77px;
    border: 1px solid $hr-color;
    border-radius: 12px;
  }
  @include for-desktop {
    width: 786px;
    padding-top: 57px;
  }
}
</style>
