<template>
  <div>
    <div v-if="!isShowLoginWithGoogle">
      <SearchVideo />
    </div>

    <div v-if="isShowLoginWithGoogle">
      <!--cta=1 default-->
      <button
        v-if="googleSignInButtonStyle === 1"
        @click="onLoginWithGoogle"
        class="google-login primary-button-50px"
      >
        <icon-google /><span>Sign up with Google</span>
      </button>
      <!--cta=2-->
      <div v-if="googleSignInButtonStyle === 2">
        <a @click="onLoginWithGoogle" style="cursor: pointer">
          <img
            width="300"
            src="@/assets/img/google_signin_cta2.png"
            alt="Login with Google To Start"
          />
        </a>
      </div>
      <!--cta=3-->
      <div v-if="googleSignInButtonStyle === 3">
        <a @click="onLoginWithGoogle" style="cursor: pointer">
          <img
            width="300"
            src="@/assets/img/google_signin_cta3.png"
            alt="Login with Google To Start"
          />
        </a>
      </div>

      <!--cta=4-->
      <div v-if="googleSignInButtonStyle === 4">
        <button @click="onLoginWithGoogle" class="google-login-2">
          <icon-google /><span>Log in with Google</span>
        </button>
      </div>

      <div class="search-video-container" v-if="googleSignInButtonStyle !== 4">
        <a
          v-if="!isShowSearchVideo"
          class="or-search-show-link"
          @click="showSearchVideo"
          >Or search for your video manually.</a
        >
        <SearchVideo v-if="isShowSearchVideo" />
      </div>

      <div class="search-video-container" v-if="googleSignInButtonStyle === 4">
        <p class="or-search-video">or</p>
        <a
          v-if="!isShowSearchVideo"
          @click="showSearchVideo"
          class="primary-button-border-55px"
          >Search for Your Video Manually</a
        >
        <SearchVideo v-if="isShowSearchVideo" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchVideo from "@/components/Home/SearchVideo.vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";

export default {
  name: "TryItNow",
  components: { SearchVideo, IconGoogle },
  props: {
    isShowLoginWithGoogle: Boolean
  },
  data() {
    return {
      testSlot: this.$config.APP_A2B_TEST_SLOT,
      isShowSearchVideo: false,
      googleSignInButtonStyle: 3
    };
  },
  mounted() {
    //get style from url query
    // let cta = parseInt(this.$cookies.get("scta") || 1);
    // this.googleSignInButtonStyle = cta > 4 ? 1 : cta;
  },
  methods: {
    showSearchVideo() {
      this.isShowSearchVideo = true;
    },
    async onLoginWithGoogle() {
      // if ($config.APP_IS_OLD_MODE) {
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
      // } else {
      //   try {
      //     const authCode = await this.$gAuth.getAuthCode();
      //     const res = (await this.loginWithGoogle({ code: authCode })).data;
      //     localStorage.setItem("token", res.token);
      //     this.setUserData(res.user);
      //     this.closeModals();
      //     this.$router.replace("/dashboard");
      //   } catch {
      //     //
      //   }
      // }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search-video-input {
  color: white;
}

.google-login {
  max-width: 400px;
  width: 85%;
  @media (max-width: 400px) {
    width: 90%;
  }
  @media (max-width: 344px) {
    width: 100%;
  }
  svg {
    margin-right: 10px;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
}

.google-login-2 {
  max-width: 400px;
  width: 85%;
  @media (max-width: 400px) {
    width: 90%;
  }
  @media (max-width: 344px) {
    width: 100%;
  }
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1.5px solid #e8edf5;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: white;
  height: 55px;
  font-family: Gilroy;
  font-size: 16px;
  position: relative;
  padding: 0 22px;

  @include for-mobile {
    margin-top: 12px;
  }
  svg {
    margin-right: 10px;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
}

.or-search-video {
  color: #ffffff;
  margin: 15px 0;
  text-transform: uppercase;
  @include for-mobile {
    margin: 20px;
  }
}

.search-video-container {
  margin-top: 13px;
}
.or-search-show-link {
  display: block;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;
}
</style>
