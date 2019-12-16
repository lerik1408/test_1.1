<template>
  <div>
    <a @click="goHome" style="cursor: pointer">
      <img
        v-if="white"
        class="logo"
        src="@/assets/img/white-logo.svg"
        alt="Sprizzy"
      />
      <img
        v-else
        class="logo"
        src="@/assets/img/black-logo.svg"
        alt="Sprizzy"
      />
    </a>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: { white: Boolean },
  methods: {
    ...mapMutations("appStore", ["closeModals"]),
    goHome() {
      this.closeModals();
      this.$router.push({ name: "index" });
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  width: 140px;
  height: 37.23px;
  margin-left: 20.5px;
  margin-top: 25.84px;
  position: relative;
  z-index: 1;
  @include for-tablet {
    width: 173px;
    height: 46px;
    margin-top: 40px;
  }
  @include for-desktop {
    margin-top: 32px;
  }
}
.center {
  display: flex;
  justify-content: center;
}
.only-tablet {
  display: none;
  @include for-tablet {
    display: flex;
  }
}
</style>
