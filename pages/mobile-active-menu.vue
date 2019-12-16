<template>
  <div class="mobile-acitve-menu">
    <div class="close-button">
      <nuxt-link to="/">
        <img src="@/assets/img/close_button.svg" alt="close button" />
      </nuxt-link>
    </div>
    <nav>
      <ul>
        <li class="nav-item">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/faq">How It Works</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contact-us">Contact us</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/gift-cards">Gift cards</nuxt-link>
        </li>
      </ul>
    </nav>
    <a class="login-button" @click="openLoginModal">Log in</a>
    <a class="primary-button-50px" @click="openSignUpModal">Sign up</a>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "mobileActiveMenu",

  methods: {
    ...mapMutations("appStore", ["openLoginModal", "openSignUpModal"])
  }
};
</script>

<style scoped lang="scss">
.mobile-acitve-menu {
  background: linear-gradient(0deg, #3b3f5a 14.49%, #171c34 101.77%);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-height: 100vh;
}
.close-button {
  align-self: flex-end;
}
nav {
  color: white;
  margin: auto auto;
  text-align: center;
}
.nav-item {
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 25px;
  @include for-tablet {
    font-size: 42px;
  }
}
.primary-button-50px {
  width: 320px;
  max-width: 90%;
  font-size: 15px;
  margin-bottom: 15vh;
}
.login-button {
  border: 1.5px solid white;
  border-radius: 8px;
  height: 50px;
  width: 320px;
  max-width: 90%;
  padding-top: 12px;
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
}
img {
  margin-top: 30px;
  margin-right: 20px;
}
</style>
