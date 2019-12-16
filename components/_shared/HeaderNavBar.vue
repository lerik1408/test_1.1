<template>
  <nav class="header-nav-bar " v-if="white">
    <Logo white />
    <Hamburger white />
    <DesktopNavList white />
  </nav>
  <div class="container white" v-else>
    <nav class="header-nav-bar">
      <Logo />
      <Hamburger />
      <DesktopNavList />
    </nav>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import Hamburger from "./HamburgerIcon.vue";
import DesktopNavList from "./DesktopNavList.vue";

export default {
  props: {
    white: Boolean
  },
  components: { Logo, Hamburger, DesktopNavList }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: white;
  @include for-tablet {
    background-color: transparent;
  }
}
nav {
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding-bottom: 25px;

  .nav-list {
    @include for-mobile {
      display: none;
    }
    @include for-tablet {
      display: none;
    }
    @include for-desktop {
      display: flex;
    }
  }
}
.white {
  box-shadow: 0px 4px 24px rgba(202, 209, 221, 0.3);
  @include for-desktop {
    box-shadow: none;
  }
}

.header-nav-bar {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
</style>
