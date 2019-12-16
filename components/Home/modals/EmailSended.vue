<template>
  <div class="light-container">
    <HeaderNavBar class="only-mobile" />
    <div class="light-container-main">
      <h1>Email has been sent</h1>
      <p>
        If an account exists for {{ this.emailAddress }}, you will get an email with
        instructions on resetting your password.
        <br />
        <br />If it doesn't arrive, be sure to check your spam folder.
      </p>
      <span @click="switchModalToLogin">Back to Log in</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import HeaderNavBar from "@/components/_shared/HeaderNavBar.vue";

export default {
  components: { HeaderNavBar },
  // data() {
  //   return {
  //     emailAddress: ""
  //   };
  // },
  props: {
    emailAddress: String
  },
  methods: {
    ...mapMutations("appStore", ["openLoginModal", "closeModals"]),
    switchModalToLogin() {
      this.closeModals();
      this.openLoginModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.light-container {
  background-color: $bg-light;
  min-height: 100%;
  @include for-tablet {
    width: 474px;
    height: 500px;
    border-radius: 12px;
    background-color: white;
    padding-top: 30px;
  }
}
.light-container-main {
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  @include for-tablet {
    border-radius: 12px;
    padding-left: 92px;
    padding-right: 92px;
  }
}
h1 {
  margin-top: 189px;
  @include for-tablet {
    margin-top: 40px;
  }
}
p {
  margin-top: 36px;
  font-family: $font-helvetica;
  font-weight: 300;
  line-height: 27px;
  margin-bottom: 75px;
}
span {
  color: $blue;
  font-family: $font-helvetica;
  font-weight: 300;
  cursor: pointer;
}
</style>
