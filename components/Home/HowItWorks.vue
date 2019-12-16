<template>
  <div class="container">
    <section class="how-it-works">
      <div class="step">
        <span><icon-check-in-circle /></span>
        <h3 class="how-it-works-header">Submit Your Video</h3>
        <p class="how-it-works-text">
          You provide Sprizzy with your video, budget, and simple information to
          help us target your ideal audience.
        </p>
      </div>
      <div class="step">
        <span><icon-megaphone /></span>
        <h3 class="how-it-works-header">We Promote Your Video</h3>
        <p class="how-it-works-text">
          Sprizzy's marketing team works their magic to promote your video to
          targeted viewers across thousands of websites.
        </p>
      </div>
      <div class="step">
        <span><icon-followers /></span>
        <h3 class="how-it-works-header">Get New Fans</h3>
        <p class="how-it-works-text">
          Watch your YouTube views skyrocket as people interact with and share
          your video.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import IconCheckInCircle from "@/components/icons/IconCheckInCircle.vue";
import IconMegaphone from "@/components/icons/IconMegaphone.vue";
import IconFollowers from "@/components/icons/IconFollowers.vue";
export default {
  components: { IconCheckInCircle, IconMegaphone, IconFollowers }
};
</script>
<style lang="scss" scoped>
.container {
  background-color: $bg-light;
  @include for-desktop {
    border-radius: 0 0 300px 0;
  }
}
.how-it-works {
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  @include for-tablet {
    padding-top: 100px;
  }
  @include for-desktop {
    flex-direction: row;

    justify-content: space-around;
    align-items: flex-start;
    padding-bottom: 174px;
  }
}
.step span {
  display: block;
  width: 99px;
  margin: 0 auto;
}
img,
.step span {
  padding: 26px;
  background-color: white;
  border-radius: 12px;
  min-width: 99px;
  box-shadow: 0px 10px 40px rgba(22, 34, 78, 0.1);
  margin-bottom: 30px;
}

h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 14px;
}
.step {
  padding-top: 70px;
  width: 286px;
  text-align: center;

  @include for-desktop {
  }
}
.how-it-works-text {
  font-family: $font-helvetica;
  font-weight: 300;
}
</style>
