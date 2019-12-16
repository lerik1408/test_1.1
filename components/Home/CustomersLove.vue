<template>
  <section class="customers-love">
    <div class="inside-section">
      <h1 class="section-heading">Our Customers Love What We Do</h1>
      <client-only placeholder="Loading...">
        <div>
          <carousel
            class="carousel"
            paginationColor="#E8EAF4"
            paginationActiveColor="#649DFB"
            :loop="true"
            :autoplay="true"
            :autoplayHoverPause="true"
            :speed="2000"
            :autoplayTimeout="4000"
            :paginationPadding="4"
            :paginationSize="17"
            :scrollPerPage="true"
            :perPageCustom="[[300, 1], [600, 2], [1366, 3]]"
          >
            <slide v-for="review in customerReviews.slice().reverse()" :key="review.id">
              <div class="customer-card">
                <div class="customer-info">
                  <div class="customer-ava-name">
                    <div
                      v-bind:style="{
                        'background-image': 'url(' + review.photo + ')'
                      }"
                      class="customer-avatar"
                    ></div>
                    <div class="name-title">
                      <p class="name">{{ review.title }}</p>
                      <p class="title">{{ review.type }}</p>
                    </div>
                  </div>
                  <div class="social">
                    <a
                      :href="'https://www.youtube.com/channel/' + review.channel_id"
                      target="_blank"
                      ><IconColorYoutube
                    /></a>
                    <a
                      v-if="review.facebook_url.length > 0"
                      :href="review.facebook_url"
                      target="_blank"
                      ><IconColorFacebook
                    /></a>
                  </div>
                </div>
                <div class="customer-text">
                  {{ review.review_text }}
                </div>
                <div class="customer-video">
                  <a :href="review.youtube_url" target="_blank">
                    <img :src="review.video_thumbnail" :alt="review.title" />
                    <span class="video-play-button">
                      <PlayButton />
                    </span>
                  </a>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </client-only>
    </div>
  </section>
</template>
<script>

import IconColorYoutube from "@/components/icons/IconColorYoutube.vue";
import IconColorFacebook from "@/components/icons/IconColorFacebook.vue";
import PlayButton from "@/components/_shared/PlayButton.vue";

export default {
  components: {
    IconColorYoutube,
    IconColorFacebook,
    PlayButton
  },

  data() {
    return {
      customerReviews: []
    };
  },
  methods: {
    gerReviews() {
      // if(process.client) {
        this.$http
                .get(`/v1/promote/youtube/reviews`)
                .then(res => (this.customerReviews = res.data.list));
        // .catch(err => console.log(err));
      // }
    }
  },
  mounted() {
    this.gerReviews();
  }
};
</script>

<style lang="scss" scoped>
.customers-love {
  padding: 96px 0px 96px 20px;
  background-color: $bg-light;
  @include for-tablet {
    padding-left: 40px;
    border-radius: 300px 0px 0px 0px;
  }
}
.carousel {
  @include for-desktop {
    max-width: 1460px;
    margin: 0 auto;
  }
}
.customer-card {
  max-width: 100%;
  margin: 0 0 40px 0;
  padding: 20px;
  background: white;
  box-shadow: 0px 10px 40px rgba(22, 34, 78, 0.06);
  border-radius: 20px;
  @include for-tablet {
    margin-top: 40px;
    margin-right: 10px;
    padding: 20px 35px;
  }
}
.customer-video {
  position: relative;
  height: auto;
  margin-top: 5px;
  @include for-tablet {
    height: auto;
  }
  iframe {
    border-radius: 20px;
    height: 100%;
    width: 100%;
    border: 0;
    @include for-tablet {
      display: block;
      min-height: 274px;
    }
  }
}
.video-play-button {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -45px;
  margin-left: -45px;
}
.section-heading {
  position: relative;
  z-index: 1;
  font-size: 36px;
  margin-bottom: 50px;
  margin-left: 29px;
  margin-right: 41px;
  @include for-tablet {
    font-size: 42px;
    width: 50%;
    margin-left: 40%;
  }
  @include for-desktop {
    font-size: 64px;
    width: 40%;
    margin-left: 60%;
  }
}
/deep/.second-circle {
  width: 90px;
  height: 90px;
}
.customer-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.customer-ava-name {
  display: flex;
  align-items: center;
}
.customer-avatar {
  border-radius: 100%;
  width: 72px;
  height: 72px;
  background-size: cover;
  margin-right: 10px;
  @include for-tablet {
    margin-top: -50px;
    max-width: 72px;
  }
}
.name,
.title {
  font-family: Gilroy;
}
.name {
  font-size: 16px;
  font-weight: 900;
}
.title {
  font-size: 13px;
  color: #afb4c5;
}
.social {
  svg {
    margin-left: 10px;
  }
}
.customer-text {
  font-size: 13px;
  line-height: 27px;
  @include for-tablet {
    font-size: 15px;
    line-height: 28px;
  }
}
.VueCarousel-slide {
  padding: 0 20px 0 0;
  position: relative;
}
</style>
