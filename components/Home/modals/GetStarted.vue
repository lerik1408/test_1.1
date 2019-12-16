<template>
  <LightGrayContainerLogSigGet>
    <h1>Get Started In 30 Seconds</h1>
    <div class="get-started-main">
      <div class="video-description">
        <img :src="chosenImage" alt />
        <div class="title" v-html="videoTitle"></div>
        <div class="input-w-icon">
          <!--<input-->
          <!--class="primary-input url-input"-->
          <!--type="text"-->
          <!--v-model="videoUrl"-->
          <!--/>-->
          <a class="change-video-link" @click="onChangeVideo()"
            >Change Video <icon-pencil
          /></a>
        </div>
      </div>
      <hr />
      <sign-up :videoUrl="videoUrl" />
    </div>
  </LightGrayContainerLogSigGet>
</template>
<script>
  import { mapState, mapMutations } from "vuex";
import SignUp from "@/components/_shared/SignUp.vue";
import LightGrayContainerLogSigGet from "@/components/Home/modals/LightGrayContainerLogSigGet.vue";
import IconPencil from "@/components/icons/IconPencil.vue";
export default {
  components: {
    SignUp,
    LightGrayContainerLogSigGet,
    IconPencil
  },
  computed: {
    ...mapState("appStore", [
      "getStartedVideoId",
      "getStartedImageSrc",
      "getStartedVideoTitle",
      "getStartedSearchText",
    ])
  },
  data() {
    return {
      videoUrl: "",
      chosenImage: "",
      videoTitle: "",
      searchText: ""
    };
  },
  created() {
    this.videoUrl =
      "https://www.youtube.com/watch?v=" + this.getStartedVideoId;
    this.chosenImage = this.getStartedImageSrc;
    this.videoTitle = this.getStartedVideoTitle;
    this.searchText = this.getStartedSearchText;
  },
  methods: {
    ...mapMutations("appStore", ["closeGetStartedModel"]),
    onChangeVideo() {
      this.closeGetStartedModel();
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  margin-top: 20px;
  font-size: 25px;
  text-align: center;
  @include for-tablet {
    font-size: 34px;
    margin-top: 23px;
    margin-bottom: 30px;
  }
}
img {
  margin: 15px auto 0 auto;
  display: block;
  width: 316px;
  height: 141px;
  border-radius: 8px;
  @include for-tablet {
    width: 280px;
    height: 172px;
  }
}
.title {
  font-size: 16px;
  line-height: 23px;
  font-weight: 600;
  text-align: center;
  margin-top: 6px;
  @include for-tablet {
    width: 316px;
    margin: 20px auto;
  }
}
.input-w-icon {
  max-width: 316px;
  margin: 15px auto 21px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  input {
    width: 278px;
  }
}

.get-started-main {
  @include for-tablet {
    display: flex;
    width: 728px;
  }
  @include for-desktop {
    min-width: 856px;
  }
}
.video-description {
  @include for-tablet {
    min-width: 50%;
    max-width: 50%;
    text-align: center;
  }
}
.change-video-link {
  color: #3074e4;
  cursor: pointer;
}
</style>
