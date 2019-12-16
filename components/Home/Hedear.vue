<template>
  <header class="header">
    <HeaderNavBar white />
    <div class="wrpa">
      <div class="try-it-now-header">
        <!-- Testing #1 /beta -->
        <div v-if="testSlot === 1">
          <h1>{{ headerText }}</h1>
          <p>
            Our platform is simple and easy to use. We put your video in front of
            the right audience to ensure that your video is seen. Get big results
            with even the smallest budget.
          </p>
          <TryItNow :isShowLoginWithGoogle="false"/>
        </div>

        <!-- Testing #2 /beta2 -->
        <div v-if="testSlot === 2">
          <h1>{{ headerText }}</h1>
          <p>
            Our platform is simple and easy to use. We put your video in front of
            the right audience to ensure that your video is seen. Get big results
            with even the smallest budget.
          </p>
          <TryItNow :isShowLoginWithGoogle="true"/>
        </div>
      </div>

      <WatchTutorial class="tutorial"/>
    </div>
  </header>
</template>

<script>
import TryItNow from "@/components/Home/TryItNow.vue";
import WatchTutorial from "./WatchTutorial.vue";
import HeaderNavBar from "../_shared/HeaderNavBar.vue";

export default {
  name: "Header",
  components: { TryItNow, WatchTutorial, HeaderNavBar },
  data() {
    return {
      testSlot: this.$config.APP_A2B_TEST_SLOT,
      headerText: "Make your video Go Viral!"
    };
  },
  mounted() {
    let headerText = this.$cookies.get("shtext");
    if (headerText && headerText.split().length > 0)
      this.headerText = headerText;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tutorial{
  flex-basis: 75%;
}
h1 {
  color: white;
  font-weight: 900;
  text-align: center;
  font-size: 46px;
  margin-bottom: 30px;
  @include for-tablet {
    font-size: 58px;
  }
  @include for-desktop {
    font-size: 66px;
    text-align: left;
  }
}
.wrpa {
  @include for-desktop{
    padding-top: 130px;
    display: flex;
    width: 95vw;
    max-width: 1300px;
    margin: 0 auto;
    // margin-left: 15%;
  }
}
.try-it-now-header {
  // margin-top: 177px;
  text-align: center;
  position: relative;
  z-index: 1;
  @include for-mobile {
    margin-top: 5%;
  }
  @include for-desktop {
    max-width: 600px;
    margin-top: 30px;
    div {
      // display: flex;
      // flex-direction: column;
      // justify-content: center;
      // align-items: flex-start;
      // max-width: 870px;
    }
  }
  p {
    display: none;
    @include for-tablet {
      display: block;
      width: 76%;
      color: white;
      margin: 5px auto 43px auto;
      font-size: 16px;
    }
    @include for-desktop {
      margin: 5px 20px 43px 0px;
      width: 100%;
      line-height: 31px;
      text-align: left;
    }
  }
}
.nav-desktop {
  ul {
    display: flex;
  }
  @include for-desktop {
    display: none;
  }
}
.header {
  background: url("~@/assets/img/mobile-bg.svg"),
    linear-gradient(0deg, #3b3f5a 14.49%, #171c34 101.77%);
  background-repeat: no-repeat;
  background-size: 120%, 100%;
  @include for-tablet {
    background: url("~@/assets/img/tablet-bg.svg"),
      linear-gradient(0deg, #3b3f5a 14.49%, #171c34 101.77%);
    background-repeat: no-repeat;
    background-size: 100%, 100%;
  }
  @include for-desktop {
    background: url("~@/assets/img/desktop-bg.svg"),
      linear-gradient(0deg, #3b3f5a 14.49%, #171c34 101.77%);
    background-repeat: no-repeat;
    background-size: 100%, 100%;
    height: 100vh;
  }
}

.search-video-input {
  color: white;
}

.google-login {
  max-width: 400px;
  width: 85%;
  @media (max-width: 360px) {
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
