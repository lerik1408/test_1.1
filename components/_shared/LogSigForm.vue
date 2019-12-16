<template>
  <div class="login-sign-form-main">
    <div class="head-text">
      {{
        whichType !== "Login"
          ? videoUrl
            ? "Create a Sprizzy account to continue:"
            : "Create a Sprizzy account"
          : ""
      }}
    </div>
    <form class="login-sign-up-form" v-on:submit.prevent="onSubmit">
      <BaseInput v-model="email" id="e-mail" type="email" required
        >Email Address</BaseInput
      >
      <p class="error-text">{{ errorMessage }}</p>
      <div class="input-with-icon">
        <BaseInput
          required
          v-model="password"
          :type="passwordFieldType"
          name="password"
          id="password"
          >Password</BaseInput
        >
        <span @click="tooglePasswordVisibility">
          <icon-eye v-if="passwordFieldType != 'password'" />
          <icon-eye-closed v-else />
        </span>
      </div>
      <p class="forgot-password" v-if="whichType === 'Login'">
        <span @click="switchModalToForgotPassword">Forgot password?</span>
      </p>
      <button class="primary-button-50px">
        {{ whichType === "Login" ? "Log in" : "Sign up" }}
      </button>
    </form>
    <p class="or-google">
      {{
        whichType === "Login"
          ? "Or log in using your Google account:"
          : "Or sign up using your Google account:"
      }}
    </p>
    <button @click="onLoginWithGoogle" class="google-login">
      <icon-google /><span>{{
        whichType === "Login" ? "Log in with Google" : "Sign up with Google"
      }}</span>
    </button>
    <p class="create-account">
      {{ whichType === "Login" ? "No account?" : "Already have account?" }}
      <a @click="switchLoginSignUpModals">{{
        whichType === "Login" ? "Create account" : "Log in"
      }}</a>
    </p>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import IconGoogle from "@/components/icons/IconGoogle.vue";
import IconEye from "@/components/icons/IconEye.vue";
import IconEyeClosed from "@/components/icons/IconEyeClosed.vue";
import BaseInput from "@/components/_shared/BaseInput.vue";

export default {
  components: {
    IconGoogle,
    IconEye,
    IconEyeClosed,
    BaseInput
  },
  props: {
    handleSubmit: Function,
    whichType: String,
    errorMessage: String,
    videoUrl: String
  },
  data() {
    return {
      passwordFieldType: "password",
      iconName: "closed_eye.svg",
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapState("appStore", ["loginModalIsOpen"])
  },
  methods: {
    ...mapMutations("authStore", ["setUserData"]),
    ...mapMutations("appStore", [
      "openLoginModal",
      "openSignUpModal",
      "openResetPasswordModal",
      "closeModals"
    ]),
    switchModalToForgotPassword() {
      this.closeModals();
      this.openResetPasswordModal();
    },
    switchLoginSignUpModals() {
      let loginWasOpen = this.loginModalIsOpen;
      this.closeModals();
      loginWasOpen ? this.openSignUpModal() : this.openLoginModal();
    },
    onSubmit() {
      this.handleSubmit(this.email, this.password, this.videoUrl);
    },
    async onLoginWithGoogle() {
        const data = {};
        if (this.$cookies.get("ref")) data.ref = this.$cookies.get("ref");

        if (this.$cookies.get("utm_source"))
          data.utm_source = this.$cookies.get("utm_source");

        // if (this.$cookies.get("is_beta"))
        //   data.is_beta = this.$cookies.get("is_beta");

        if (this.$cookies.get("promo")) data.promo = this.$cookies.get("promo");

        if (this.$cookies.get("referrer"))
          data.referrer = this.$cookies.get("referrer");

        if (this.$cookies.get("deposit"))
          data.deposit = this.$cookies.get("deposit");

        if (this.$cookies.get("sdcb"))
          data.campaign_min_budget = this.$cookies.get("sdcb");

        if (this.videoUrl) data.url = this.videoUrl;

        const params = new URLSearchParams(data).toString();
        window.location = `${this.$config.API_BASE_URL}/v1/auth/google?${params}`;

    },
    tooglePasswordVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;

  @include for-tablet {
    margin-top: 25px;
  }
}
.head-text {
  font-weight: 600;
  text-align: center;
}

.forgot-password span {
  color: #7f92ab;
  font-family: $font-helvetica;
  font-weight: 300;
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
  margin-top: 5px;
  cursor: pointer;
}
.primary-button-50px {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 14px;
  text-transform: capitalize;
}
/deep/.input-label {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.password-input {
  margin-bottom: 14px;
  width: 100%;
}
.primary-label {
  margin-top: 5px;
  margin-left: 10%;
}

.create-account {
  text-align: center;
  margin-top: 0px;
  a {
    color: $blue;
    cursor: pointer;
  }
}
.input-with-icon {
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  svg {
    position: absolute;
    left: 74%;
    top: 65%;
    cursor: pointer;
  }
}
.login-sign-form-main {
  margin: 0 auto;
  @include for-tablet {
    width: 420px;
    min-height: 500px;
  }
}

.google-login {
  cursor: pointer;
  border: 1.5px solid #e8edf5;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: transparent;
  width: 80%;
  height: 50px;
  margin: 0px 10% 10px 10%;
  font-family: Gilroy;
  font-size: 16px;
  position: relative;
  svg {
    margin-right: 10px;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
}
.or-google {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.error-text {
  font-size: 12px;
  color: $error-message-color;
  width: 80%;

  margin: 3px auto 0 auto;
}
</style>
