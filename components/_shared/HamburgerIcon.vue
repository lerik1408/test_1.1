<template>
  <div class="hamburger-icon" @click="closeModals">
    <nuxt-link to="/mobile-active-menu">
      <img
        v-if="white"
        src="@/assets/img/hamb_white.png"
        alt="hamburger menu"
      />
      <img v-else src="@/assets/img/hamb_blue.png" alt="hamburger menu" />
    </nuxt-link>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  props: {
    white: Boolean
  },
  methods: {
    ...mapMutations("appStore", ["closeModals"])
  }
};
</script>
<style lang="scss" scoped>
.hamburger-icon {
  margin-right: 20.5px;
  margin-top: 25.84px;
  @include for-tablet {
    margin-top: 40px;
  }
  @include for-desktop {
    display: none;
  }
}
</style>
