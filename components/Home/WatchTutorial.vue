<template>
  <div class="watch-tutorial-wrapper">
    <div class="watch-tutorial">
      <!-- <TutorialVideoForMobile v-if="isMobile && playing" @close-modal="playing = false"/> -->
      <video
        v-show="!isMobile"
        class="sprizzy-video"
        ref="video"
        @click="pauseVideo"
        poster="@/assets/img/promo_video_thumb.jpg"
      >
        <source
          src="/sprizzy_intro_video.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
      <div class="play-button" @click="playVideo" v-if="!playing">
        <PlayButton />
      </div>

      <p>How it Works</p>
    </div>
  </div>
</template>

<script>
import PlayButton from "@/components/_shared/PlayButton.vue";
export default {
  components: { PlayButton },
  data() {
    return {
      playing: false,
      isMobile: true
    };
  },
  created() {
    if (process.client) {
      this.isMobile = window.innerWidth < 701;
      window.addEventListener("resize", this.handleResize, {passive: true});
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("resize", this.handleResize, {passive: true});
    }
  },
  methods: {
    playVideo() {
      if (!this.isMobile) {
        this.$refs.video.play();
        this.$refs.video.controls = true;

        this.playing = true;
      } else {
        this.$router.push("mobile-tutorial-video");
      }
    },
    pauseVideo() {
      this.$refs.video.pause();
      this.$refs.video.controls = false;
      this.playing = false;
    },
    handleResize() {
      this.isMobile = window.innerWidth < 701;
    }
  }
};
</script>

<style lang="scss" scoped>
.watch-tutorial-wrapper {
  @include for-tablet {
    position: relative;
  }
  @include for-desktop {
    // max-width: 1200px;
    // margin: 0 auto;
    // margin-right: 10px;
    // margin-bottom: 400px;
    // top: -200px;
    display: flex;
    justify-content: flex-end;
  }
}
.watch-tutorial {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 425px;
  @include for-tablet {
    background: url("~@/assets/img/laptop.png") no-repeat center;
  }
  @include for-desktop {
    margin-top: 50px;
    width: 120%;
  }
}
.sprizzy-video {
  @include for-tablet {
    margin-bottom: 31px;
    margin-right: 7px;
    width: 542px;
    height: 344px;
    outline: none;
    background-color: white;
  }
  @include for-mobile {
    width: 100vw;
  }
}

p {
  font-size: 18px;
  color: white;
  text-transform: uppercase;
  @include for-tablet {
    display: none;
  }
}
.play-button {
  @include for-tablet {
    position: absolute;
  }
}
</style>
