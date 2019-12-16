<template>
  <div class="second-circle">
    <div class="first-circle">
      <div class="play-button">
        <icon-play-button />
      </div>
    </div>
  </div>
</template>

<script>
import IconPlayButton from "@/components/icons/IconPlayButton.vue";
export default {
  components: { IconPlayButton }
};
</script>

<style lang="scss" scoped>
.play-button {
  padding: 18px 19px 18px 21px;
  background: white;
  border-radius: 50%;
  svg {
    width: 18px;
  }
}
.first-circle {
  border: 1px solid rgba(255, 255, 255, 0.6);
  padding: 8px;
  border-radius: 50%;
}
.second-circle {
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 6px;
  border-radius: 50%;
  margin-right: 20px;
}
</style>
