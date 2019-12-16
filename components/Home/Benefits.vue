<template>
  <section class="our-benefits">
    <h2 class="section-header">
      10,000+ YouTube creators ❤️ our benefits
    </h2>
    <div class="benefits-list">
      <div class="benefit-item">
        <h4 class="benefit-title">
          <span class="icon"><IconIncresingArrow /></span>We find your ideal
          audience
        </h4>
        <p class="benefit-description">
          With connections to YouTube's Ads platform and websites, we can reach
          up to 90% of the internet. No audience is too difficult to find!
        </p>
      </div>
      <div class="benefit-item">
        <h4 class="benefit-title">
          <span class="icon"><IconFilter /></span> Filter low engaging viewers
        </h4>
        <p class="benefit-description">
          When promoting your video, we automatically filter out "low
          engagement" viewers (such as kids on parents devices) to maximize your
          budget.
        </p>
      </div>
      <div class="benefit-item">
        <h4 class="benefit-title">
          <span class="icon icon-dash"><IconDashboard /></span>Real-time
          analytics dashboard
        </h4>
        <p class="benefit-description">
          See how many new viewers, subscribers, likes, and comments you've
          received each day from your Sprizzy campaigns.
        </p>
      </div>
      <div class="benefit-item">
        <h4 class="benefit-title">
          <span class="icon"><IconAlgorithm /></span>Smart targeting algorithm
        </h4>
        <p class="benefit-description">
          We combine machine learning and continuous A/B testing to find your
          most relevant audience (ages, genders, locations, interests,
          placements are all tested!).
        </p>
      </div>
      <div class="benefit-item">
        <h4 class="benefit-title">
          <span class="icon"><IconChannels /></span>Big and small channels are
          welcome
        </h4>
        <p class="benefit-description">
          We love working with channels both big and small and can handle
          budgets of any size. Need your video promoted in a hurry? We can do
          that too!
        </p>
      </div>
      <div class="benefit-item">
        <h4 class="benefit-title">
          <span class="icon"><IconSmile /></span>Real engagement from real
          viewers
        </h4>
        <p class="benefit-description">
          We promise to never use bots, click farms, or pay people to watch your
          videos. All growth is real with no risk to your channel!
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import IconIncresingArrow from "@/components/icons/IconIncresingArrow.vue";
import IconFilter from "@/components/icons/IconFilter.vue";
import IconDashboard from "@/components/icons/IconDashboard.vue";
import IconAlgorithm from "@/components/icons/IconAlgorithm.vue";
import IconChannels from "@/components/icons/IconChannels.vue";
import IconSmile from "@/components/icons/IconSmile.vue";

export default {
  components: {
    IconIncresingArrow,
    IconFilter,
    IconDashboard,
    IconAlgorithm,
    IconChannels,
    IconSmile
  }
};
</script>

<style lang="scss" scoped>
.our-benefits {
  position: relative;
  max-width: 90%;
  margin: 0 auto;
  z-index: 2;
  padding-top: 50px;
  @include for-desktop {
    max-width: $sectionMaxWidth;
  }
}
.section-header {
  font-size: 24px;
  text-align: center;
  font-weight: 900;
  margin-bottom: 50px;
  @include for-tablet {
    font-size: 46px;
  }
  @include for-desktop {
    font-size: 56px;
  }
}
.benefits-list {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include for-desktop {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  }
}
.benefit-item {
  max-width: 100%;
  margin-bottom: 40px;
  @include for-tablet {
    max-width: 73%;
    margin-bottom: 60px;
  }
  @include for-desktop {
    max-width: 45%;
  }
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 36px;
  min-height: 36px;
  background: #62e3ac;
  border-radius: 50%;
  margin-right: 15px;
}
.benefit-title {
  display: flex;
  align-items: center;

  font-size: 18px;
  font-weight: 900;
  margin-bottom: 15px;
  @include for-tablet {
    font-size: 24px;
    margin-bottom: 23px;
  }
}
.icon-dash {
  padding-bottom: 3px;
}
.benefit-description {
  font-size: 16px;
  line-height: 184%;
  @include for-tablet {
    font-size: 20px;
  }
}
</style>
