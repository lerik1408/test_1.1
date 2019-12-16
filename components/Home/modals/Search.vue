<template>
  <LightGrayContainerLogSigGet>
    <div class="search-container">
      <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="isFullPageLoading"
        color="#3074e4"
      />
      <div class="search-component">
        <SearchVideo class="white" :searchText="searchVideoQuery" />
        <div class="message-container" v-if="!videosDescriptions.length">
          <div>{{ statusOfFetching }}</div>
        </div>
        <VideoDescriptionsContainer
          v-else
          :videosDescriptions="videosDescriptions"
          :isLoading="isLoading"
          :nextPageToken="nextPageToken"
          :handlerLoadMore="loadMore"
          :onSelectVideo="onSelectVideo"
        />
      </div>
    </div>
  </LightGrayContainerLogSigGet>
</template>
<script>
  import { mapState, mapMutations } from "vuex";
  import Loading from "vue-loading-overlay";
  import "vue-loading-overlay/dist/vue-loading.css";
  import SearchVideo from "@/components/Home/SearchVideo.vue";
  import VideoDescriptionsContainer from "@/components/Search/VideoDescriptionsContainer.vue";
  import LightGrayContainerLogSigGet from "@/components/Home/modals/LightGrayContainerLogSigGet.vue";

export default {
  components: {
    VideoDescriptionsContainer,
    SearchVideo,
    LightGrayContainerLogSigGet,
    Loading
  },
  computed: {
    ...mapState("appStore", [
      "searchVideoQuery",
    ])
  },
  data() {
    return {
      // searchText: this.searchVideoQuery,
      videosDescriptions: [],
      statusOfFetching: "",
      isLoading: false,
      nextPageToken: null,
      isFullPageLoading: false
    };
  },
  mounted() {
    this.nextPageToken = null;
    this.isFullPageLoading = this.$helpers.isMobile();
  },
  watch: {
    "searchVideoQuery": {
      handler(newValue) {
        console.log(newValue);
        this.fetchVideosObjects(newValue);
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations("appStore", ["openGetStartedModel", "closeModals"]),

    fetchVideosObjects(text, isLoadMore = false) {
      this.statusOfFetching = "";
      this.isLoading = true;
      if (!isLoadMore) {
        this.videosDescriptions = [];
        this.nextPageToken = null;
      }

      const data = {
        q: text
      };
      if (this.nextPageToken) data.nextPageToken = this.nextPageToken;

      const formData = new URLSearchParams(data).toString();

      this.$http
        .get(`/v2/youtube/search?${formData}`)
        .then(res => {
          if (res.data.list && res.data.list.length) {
            if (isLoadMore) {
              for (const item of res.data.list) {
                const isExist = this.videosDescriptions.some(
                  el => el.id === item.id
                );
                if (!isExist) this.videosDescriptions.push(item);
              }
            } else {
              this.videosDescriptions = res.data.list;
            }

            this.nextPageToken = res.data.nextPageToken;
          } else if (res.data.video_id) {
            this.$router.push({
              name: "getStarted",
              query: { videoId: res.data.video_id },
              params: {
                getStartedImageSrc: res.data.thumbnails_medium,
                getStartedVideoTitle: res.data.title
              }
            });
          } else {
            this.statusOfFetching = "Video was not found. Try again.";
          }

          this.isLoading = false;
        })
        .catch(err => {
          if (err.response.data.message)
            this.statusOfFetching = err.response.data.message;
          else this.statusOfFetching = "Video was not found. Try again.";
          this.isLoading = false;
        });
    },
    onSelectVideo(videoDescription) {

      // this.closeModals();
      this.openGetStartedModel({
        videoId: videoDescription.id,
        thumbnails: videoDescription.thumbnails,
        title: videoDescription.title,
        searchText: this.searchVideoQuery
      });

      // this.$router.push({
      //   name: "getStarted",
      //   query: { videoId: videoDescription.id },
      //   params: {
      //     getStartedImageSrc: videoDescription.thumbnails,
      //     getStartedVideoTitle: videoDescription.title,
      //     searchText: this.searchVideoQuery
      //   }
      // });
    },
    loadMore() {
      this.fetchVideosObjects(this.searchVideoQuery, true);
    }
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  @include for-mobile {
    position: relative;
    overflow-y: scroll;
    height: calc(100vh - 130px);
  }
}
.search-component {
  margin: 20px auto;
  max-width: 340px;
  @include for-tablet {
    max-width: 668px;
    height: 516px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: 30px;
    margin-right: 30px;
  }
  @include for-desktop {
    max-width: 798px;
  }
}
.primary-input {
  box-shadow: none;
}
.message-container {
  text-align: center;

  div {
    font-size: 20px;
    margin-top: 200px;
  }
}
</style>
