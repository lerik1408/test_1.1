<template>
  <div class="video-despritions">
    <VideoDescription
      v-for="videoDescription in videosDescriptions"
      :key="videoDescription.id"
      :videoDescription="videoDescription"
      :onSelectVideo="onSelectVideo"
    />

    <div class="load-more-container" v-if="nextPageToken">
      <button
        v-if="!isLoading"
        @click="handlerLoadMore"
        class="primary-button-50px"
      >
        More
      </button>
    </div>
  </div>
</template>
<script>
import VideoDescription from "@/components/Search/VideoDescription.vue";
export default {
  components: { VideoDescription },
  props: {
    videosDescriptions: Array,
    isLoading: Boolean,
    handlerLoadMore: Function,
    onSelectVideo: Function,
    nextPageToken: String
  }
};
</script>
<style lang="scss" scoped>
.video-despritions {
  margin-top: 46px;
  @include for-desktop {
    height: 400px;
    position: relative;
    overflow-y: scroll;
  }
}
.load-more-container {
  text-align: center;
}
</style>
