<template>
  <div class="container">
    <HeaderNavBar class="only-mobile" />
    <div class="container-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import HeaderNavBar from "@/components/_shared/HeaderNavBar.vue";

export default {
  components: { HeaderNavBar },
  props: {
    handleSubmit: Function,
    whichType: String
  },

  methods: {
    onSubmit() {
      this.handleSubmit();
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  background-color: $bg-light;
  min-height: 100%;
  @include for-tablet {
    width: fit-content;
    min-height: 500px;
    height: fit-content;
    border-radius: 12px;
    background-color: white;
    padding-top: 30px;
  }
}
.container-main {
  @include for-tablet {
    border-radius: 12px;
  }
}
</style>
