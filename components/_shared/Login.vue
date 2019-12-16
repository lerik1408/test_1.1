<template>
  <div>
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="false"
      color="#3074e4"
    />
    <LogSigForm
      :errorMessage="this.serverErrorMessage"
      whichType="Login"
      :handleSubmit="onLogin"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Loading from "vue-loading-overlay";
// import AuthService from "@/services/AuthService";
import LogSigForm from "@/components/_shared/LogSigForm.vue";

export default {
  // mixins: [AuthService],
  components: { LogSigForm, Loading },
  data() {
    return {
      // status: "",
      serverErrorMessage: "",
      isLoading: false
    };
  },
  methods: {
    ...mapMutations("appStore", ["closeModals"]),
    // ...mapMutations("authStore", ["setUserData"]),
    async onLogin(login, password) {
      // if ($config.APP_IS_OLD_MODE) {
        this.isLoading = true;
        let payload = { email: login, password: password };
        // if (this.$cookies.get("is_beta"))
        //   payload.is_beta = this.$cookies.get("is_beta");

        this.$http
          .post("/v1/login", payload)
          .then(resp => {
            window.location = `${this.$config.APP_BASE_URL}/login/by/token/${
              resp.data.token
            }`;
          })
          .catch(err => {
            this.isLoading = false;
            if (err.response.data.message)
              this.serverErrorMessage = err.response.data.message;
            if (err.response.data.error)
              this.serverErrorMessage = `${err.response.data.error[0].param} ${
                err.response.data.error[0].msg
              }`;
          });
      // } else {
      //   const payload = { email: login, password };
      //   if (this.$route.query.giftCardCode)
      //     payload.giftCardCode = this.$route.query.giftCardCode;
      //   try {
      //     const res = (await this.login(payload)).data;
      //     localStorage.setItem("token", res.token);
      //     this.setUserData(res.user);
      //     this.closeModals();
      //     this.$router.replace("/dashboard");
      //   } catch (err) {
      //     this.serverErrorMessage = err.response.data.messages[0];
      //   }
      // }
    }
  }
};
</script>
