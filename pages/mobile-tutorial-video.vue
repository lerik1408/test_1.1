<template>
  <div class="tutorial-video-mobile">
    <div class="close-button">
      <img :src="closeButton" alt="close button" @click="closeVideoOnMobile" />
    </div>
    <video class="sprizzy-video" ref="video" controls poster="@/assets/img/promo_video_thumb.jpg">
      <source
        src="/sprizzy_intro_video.mp4"
        type="video/mp4"
      />
      Your browser does not support HTML5 video.
    </video>
    <h3 class="header">Grow Your YouTube Channel with Sprizzy.com</h3>
    <hr />
    <p class="text">
      <a class="sprizzy-link" href="https://sprizzy.com">https://sprizzy.com</a>
      allows you to grow your YouTube channel by promoting your video to
      audiences interested in the topic of your channel.
    </p>
  </div>
</template>

<script>
import closeButtonBlack from "@/assets/img/closeButton@black.svg";
export default {
  data() {
    return {
      closeButton: closeButtonBlack
    };
  },
  methods: {
    closeVideoOnMobile() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.tutorial-video-mobile {
  position: absolute;
  background: $bg-light;
  top: 0;
  z-index: 3;
  max-width: 100%;

  min-height: 100vh;
}
.close-button {
  padding: 26px;
}
.header {
  max-width: 90%;
  margin: 25px auto 15px auto;
  font-size: 22px;
  line-height: 134.75%;
  font-weight: 900;
}
.sprizzy-link {
  color: $blue;
}
.text {
  margin: 15px auto;

  max-width: 90%;
  font-size: 14px;
  line-height: 184%;
}
.sprizzy-video {
  width: 100%;
  max-height: 100vh;
}
</style>
