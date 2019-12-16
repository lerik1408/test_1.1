<template>
  <RouteButton class="primary-button-55px" :path="path"
    ><span>Continue</span> <IconArrowRight
  /></RouteButton>
</template>
<script>
import RouteButton from "@/components/_shared/RouteButton.vue";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
export default {
  components: { RouteButton, IconArrowRight },
  props: {
    path: String
  }
};
</script>
<style lang="scss" scoped>
span {
  margin-right: 20px;
}
</style>
