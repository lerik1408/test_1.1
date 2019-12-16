<template>
  <ul class="nav-list">
    <li class="nav-list-item">
      <!-- <nuxt-link :class="{ dark: !white }" active-class="blue" to="/dashboard"
        >dashboard</nuxt-link
      >
      /
      <nuxt-link :class="{ dark: !white }" active-class="blue" to="/category"
        >category page</nuxt-link
      > -->
    </li>
    <li class="nav-list-item">
      <nuxt-link :class="{ dark: !white }" active-class="blue" to="/faq"
        >How It Works</nuxt-link
      >
    </li>
    <li class="nav-list-item">
      <nuxt-link
        :class="{ dark: !white }"
        active-class="blue"
        to="/contact-us"
        >Contact us</nuxt-link
      >
    </li>
    <li class="nav-list-item">
      <nuxt-link
        :class="{ dark: !white }"
        active-class="blue"
        to="/gift-cards"
        >Gift cards</nuxt-link
      >
    </li>
    <li class="nav-list-item" @click="openSignUpModal">
      <span :class="{ dark: !white }" active-class="blue">Sign up</span>
    </li>
    <li
      class="nav-list-item"
      :class="white ? 'login-light' : 'login-dark'"
      @click="openLoginModal"
    >
      <a :class="{ dark: !white }">Log in</a>
    </li>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    white: Boolean
  },
  methods: {
    ...mapMutations("appStore", ["openLoginModal", "openSignUpModal"])
    // ...mapMutations(
    //         {openLoginModal: "appStore/openLoginModal"},
    //         {openSignUpModal: "appStore/openSignUpModal"}
    // )
  }
};
</script>

<style lang="scss" scoped>
.nav-list {
  display: flex;
  margin-top: 32px;
}
.nav-list-item {
  font-size: 16px;
  margin-left: 50px;
  text-transform: uppercase;
  padding: 20px 13px;
  font-weight: 300;
}
.login-light {
  border: 1.5px solid #ffffff;
  border-radius: 8px;
  width: 160px;
  text-align: center;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
}
.login-dark {
  @extend .login-light;
  font-weight: 600;
  border: 1.5px solid $blue;
  a {
    color: $blue;
  }
}
span {
  color: white;
  cursor: pointer;
}
.dark {
  color: $dark-link;
  &:hover {
    color: $blue;
  }
}
.blue {
  color: $blue;
}
</style>
