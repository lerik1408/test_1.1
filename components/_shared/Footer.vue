<template>
  <div class="container">
    <footer class="footer">
      <img src="@/assets/img/black-logo.svg" alt="logo black color" />
      <div class="nav-wrapper">
        <ul class="nav-list">
          <li>
            <nuxt-link to="/faq">How It Works</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact-us">Contact us</nuxt-link>
          </li>
          <li>
            <a href="https://sprizzy.tapfiliate.com/">Affiliate Program</a>
          </li>
          <li>
            <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/gift-cards">Gift cards</nuxt-link>
          </li>
          <li>
            <span @click="openLoginModal">Log in</span>
          </li>
          <li>
            <span @click="openSignUpModal">Sign up</span>
          </li>
        </ul>
        <p>Copyright Sprizzy 2017-{{ currentYear }}</p>
      </div>
    </footer>
    <!--<div class="switch-bottom">-->
      <!--<a @click="switchToOldSite" href="#">Switch to old site</a>-->
    <!--</div>-->
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      currentYear: ""
    };
  },
  created() {
    let date = new Date();
    this.currentYear = date.getFullYear();
  },
  methods: {
    ...mapMutations("appStore", ["openLoginModal", "openSignUpModal"]),
    // switchToOldSite() {
    //   this.$cookies.remove("is_beta");
    //   this.$cookies.remove("is_beta", "/");
    //   this.$cookies.remove("is_beta", "/", "sprizzy.com");
    //   setTimeout(function() {
    //     window.location = "https://sprizzy.com/";
    //   }, 500);
    // }
  }
};
</script>
<style scoped lang="scss">
.switch-bottom {
  text-align: right;
  a {
    background-color: #3b3f59;
    padding: 5px;
    color: #fff;
  }
}

.container {
  background-color: white;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 36px 0;
  max-width: 1200px;
  margin: 0 auto;
  @include for-tablet {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}
p {
  color: #afb4c5;
  font-size: 14px;
  text-align: center;
  margin-top: 14px;
  margin-bottom: 36px;
  @include for-tablet {
    margin-top: 36px;
  }
}
.nav-list {
  @include for-mobile {
    text-align: center;
  }
  @include for-tablet {
    display: flex;
    flex-wrap: wrap;
    /*max-width: 330px;*/
    @include for-desktop {
      /*max-width: 536px;*/
    }
  }
}
li {
  margin-top: 15px;
}
a,
span {
  color: $dark-font;
  margin-right: 50px;
  font-family: $font-helvetica;
  font-weight: 300;
  @include for-mobile {
    margin-right: 0;
  }
}
span {
  cursor: pointer;
}
img {
  margin-left: 40px;
  @include for-mobile {
    margin-left: 0;
  }
}
</style>
