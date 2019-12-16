<template>
  <div>
    <nuxt />
    <ReviewSchema />
    <client-only>
      <ModalLogin />
      <ModalSignUp />
      <ModalResetPassword />
      <ModalEmailSended />
      <ModalSearch />
      <ModalGetStarted />
      <portal-target name="modals"></portal-target>
    </client-only>
  </div>
</template>

<script>
  import ModalLogin from "~/components/_shared/ModalLogin.vue";
  import ModalSignUp from "~/components/_shared/ModalSignUp.vue";
  import ModalResetPassword from "~/components/_shared/ModalResetPassword.vue";
  import ModalEmailSended from "~/components/_shared/ModalEmailSended.vue";
  import ModalGetStarted from "~/components/_shared/ModalGetStarted.vue";
  import ModalSearch from "~/components/_shared/ModalSearch.vue";
  import ReviewSchema from "~/components/_shared/ReviewSchema.vue";

  export default {
    components: {
      ModalLogin,
      ModalSignUp,
      ModalResetPassword,
      ModalEmailSended,
      ModalSearch,
      ModalGetStarted,
      ReviewSchema
    },
    mounted(){

      if (this.$route.query.ref) this.$cookies.set("ref", this.$route.query.ref);

      if (this.$route.query.utm_source)
        this.$cookies.set("utm_source", this.$route.query.utm_source);

      if (this.$route.query.promo)
        this.$cookies.set("promo", this.$route.query.promo);

      // Sprizzy referral URL to earn 150 views
      if (this.$route.query.referrer)
        this.$cookies.set("referrer", this.$route.query.referrer);

      // Sprizzy referral URL to earn 150 views
      if (this.$route.query.deposit && parseInt(this.$route.query.deposit) > 0)
        this.$cookies.set("deposit", this.$route.query.deposit);

      // Campaign min budget
      if (this.$route.query.b && parseInt(this.$route.query.b) > 0)
        this.$cookies.set("sdcb", this.$route.query.b);

      // Google Signin button style
      // if (this.$route.query.cta) this.$cookies.set("scta", this.$route.query.cta);

      // Header text (?h=Make+your+music+go+viral)
      if (this.$route.query.h) this.$cookies.set("shtext", this.$route.query.h);

    }
  }
</script>
<style>

</style>
