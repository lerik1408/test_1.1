<template>
  <div>
    <div
      class="video-description-container"
      @click="openGetStarted"
    >
      <img :src="videoDescription.thumbnails" alt />

      <div class="video-description-text">
        <div v-html="videoDescription.title"></div>
        <p
          class="youtube-description"
          v-html="videoDescription.description.substring(0, 140)"
        ></p>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    videoDescription: Object,
    onSelectVideo: Function
  },
  methods: {
    openGetStarted() {
      this.onSelectVideo(this.videoDescription);
    }
  }
};
</script>
<style lang="scss" scoped>
.video-description-container {
  cursor: pointer;
  display: flex;
  width: 80%;
  margin: 0 auto 13px auto;
  @include for-tablet {
    width: 100%;
  }
}
img {
  width: 100px;
  height: 65px;
  margin-right: 15px;
  border-radius: 8px;
}
.video-description-text {
  font-weight: 600;
}
.youtube-description {
  display: none;
  @include for-tablet {
    display: block;
    font-size: 13px;
    line-height: 21px;
    margin-top: 10px;
    max-width: 80%;
  }
}
hr {
  @include for-tablet {
    width: 85%;
    margin-left: 0;
  }
}
</style>