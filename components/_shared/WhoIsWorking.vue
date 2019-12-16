<template>
  <section class="who-is-working">
    <div class="inside-section">
      <h2 class="section-heading">Who`s Working with Sprizzy right now?</h2>

      <client-only placeholder="Loading...">
        <div>
          <div v-if="!fetchedListOfVideos.length">Loading...</div>
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
        :perPageCustom="[[300, 1], [600, 2], [1366, 4]]"
      >
        <slide
          v-for="videoDescription in fetchedListOfVideos.slice().reverse()"
          :key="videoDescription.id"
        >
          <div class="customer-card">
            <a target="_blank" rel="noopener" :href="videoDescription.url">
              <img
                class="video-tumbnail"
                :src="videoDescription.image_url"
                alt="video thumbnail"
              />
            </a>
            <div class="customer-container">
              <div class="customer" v-if="videoDescription.first_name">
                <img
                  v-if="videoDescription.avatar"
                  class="avatar"
                  :src="videoDescription.avatar"
                  alt="customer avatar"
                />
                <span class="user-name">{{
                  (videoDescription.first_name || "") +
                    " " +
                    (videoDescription.last_name || "")
                }}</span>
              </div>
              <a target="_blank" rel="noopener" :href="videoDescription.url">
                <p class="video-title">{{ videoDescription.title }}</p>
              </a>
            </div>
            <div class="improvements-statistic">
              <div class="statistic-content">
                <IconViews class="icon gray" />
                <div class="statistic-data">
                  <p class="surplus-amount">
                    {{ videoDescription.growth_views > 0 ? '+'+videoDescription.growth_views.toLocaleString("en-US") : ' - ' }}
                  </p>
                  <p class="surplus-target">views</p>
                </div>
              </div>
              <hr />
              <div class="statistic-content">
                <IconLike class="icon gray" />
                <div class="statistic-data">
                  <p class="surplus-amount">
                    {{ videoDescription.growth_likes > 0 ? '+'+videoDescription.growth_likes.toLocaleString("en-US") : ' - ' }}
                  </p>
                  <p class="surplus-target">likes</p>
                </div>
              </div>
              <hr />
              <div class="statistic-content">
                <IconFigure class="icon gray" />
                <div class="statistic-data">
                  <p class="surplus-amount">
                    {{ videoDescription.growth_subscribers > 0 ? '+'+videoDescription.growth_subscribers.toLocaleString("en-US") : ' - ' }}
                  </p>
                  <p class="surplus-target">subscribers</p>
                </div>
              </div>
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

import IconViews from "@/components/icons/IconViews.vue";
import IconLike from "@/components/icons/IconLike.vue";
import IconFigure from "@/components/icons/IconFigure.vue";

export default {
  components: {
    IconLike,
    IconViews,
    IconFigure
  },
  data() {
    return {
      fetchedListOfVideos: []
    };
  },
  methods: {
    getVideos() {
      this.$http
              .get(`/v1/promote/youtube/carousel`)
              .then(res => (this.fetchedListOfVideos = res.data.list));
      // .catch(err => console.log(err));
    }
  },
  mounted() {
    this.getVideos();
  }
};
</script>
<style scoped lang="scss">
.carousel {
  @include for-desktop {
    max-width: 1460px;
    margin: 0 auto;
  }
}
.section-heading {
  position: relative;
  z-index: 1;
  font-size: 24px;

  font-weight: 900;
  margin-left: 20px;
  margin-right: 60px;

  @include for-tablet {
    font-size: 36px;
    max-width: 500px;
    margin-left: 59px;
  }
  @include for-desktop {
    font-size: 56px;
    margin-left: 15%;
  }
}
.who-is-working {
  min-height: 485px;
  background-color: white;
  background-image: url("~@/assets/img/GrayEffect.svg");
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: -80px 50px;
  padding-top: 117px;
  padding-bottom: 92px;
  @include for-tablet {
    // max-width: 80%;
    margin: 0 auto;
    background-size: 60%;
    background-position: 0px -55px;
  }
  @include for-desktop {
    background-position: -30px -75px;
    background-size: 43%;
  }
}

.VueCarousel-slide {
  @include for-mobile {
    flex-basis: inherit;
  }
  @include for-tablet {
    flex-basis: inherit;
  }
  @include for-desktop {
    flex-basis: inherit;
  }
  max-width: 100%;
  margin-bottom: 40px;
  padding: 20px;
}

.customer-card {
  position: relative;
  max-width: 312px;
  margin: 0 auto;
  background: white;
  box-shadow: 0px 10px 40px rgba(22, 34, 78, 0.06);
  border-radius: 20px;
  @include for-mobile {
    margin: 0 auto;
  }
}

.video-tumbnail {
  width: 312px;
  border-radius: 12px 12px 0px 0px;
  vertical-align: middle;
  position: relative;
  @include for-tablet {
    width: 430px;
  }
}

.customer-container {
  position: absolute;
  width: 100%;
  padding: 5%;
  bottom: 55px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    rgb(10, 10, 10)
  );
}

.customer {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.user-name {
  color: white;
  margin-left: 8px;
  font-weight: 600;
}
.video-title {
  color: white;

  /*max-width: 70%;*/
  font-weight: 600;
}
.avatar {
  max-width: 21px;
  border-radius: 21px;
}
.improvements-statistic {
  display: flex;
  padding: 12px 16px;
  justify-content: space-around;
  background: white;
  border-radius: 0px 0px 20px 20px;
}
.statistic-content {
  display: flex;
  align-items: center;
  min-width: 28%;
  svg {
    width: 15px;
  }
}
hr {
  margin: 3px 10px;
}
.surplus-amount {
  font-size: 14px;
  font-weight: 600;
  font-family: Gilroy;
}
.surplus-target {
  font-size: 12px;
  font-family: Gilroy;
}
.statistic-data {
  margin-left: 10px;
}
</style>
