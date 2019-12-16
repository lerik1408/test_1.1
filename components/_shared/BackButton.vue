<template>
  <RouteButton class="back" :path="path">
    <IconArrowLeft />
    <span>Back</span>
  </RouteButton>
</template>
<script>
import RouteButton from "@/components/_shared/RouteButton.vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
export default {
  components: { RouteButton, IconArrowLeft },
  props: {
    path: String
  }
};
</script>
