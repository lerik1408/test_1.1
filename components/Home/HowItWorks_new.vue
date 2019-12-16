<template>
  <div class="container">
    <section class="how-it-works">
      <h2 class="section-heading">
        How We Grow Your YouTube Video (and Channel) Fast
      </h2>
      <div class="step-one">
        <div class="step-one-content">
          <h4 class="step-heading">
            <span class="is-blue">01.</span> Tell us who should see your video
          </h4>
          <p class="step-description">
            Provide keywords that describe your video as well as the names of
            YouTube channels whose subscribers you’d like targeted.
          </p>
        </div>
        <img
          class="step-one-image"
          src="@/assets/img/how-it-works-new/section-one-how-it-works.png"
          alt="bunch of human being photos"
        />
      </div>
      <ArrowRight class="mobile-invisible" />
      <div class="step-two">
        <div class="step-two-content">
          <h4 class="step-heading">
            <span class="is-blue">02.</span> We get their attention
          </h4>
          <p class="step-description">
            Through YouTube Ads, we promote your video on YouTube to users
            searching for your keywords and to the fans of similar channels.
          </p>
        </div>
        <img
          class="step-two-image"
          src="@/assets/img/how-it-works-new/section-two-how-it-works.png"
          alt="tablet with some messages and advertises"
        />
      </div>
      <ArrowLeft class="mobile-invisible" />
      <div class="step-three">
        <div class="step-three-content">
          <h4 class="step-heading">
            <span class="is-blue">03.</span> Get views, subscribers, and real
            engagement
          </h4>
          <p class="step-description">
            The viewers targeted in the promotion will naturally find your video
            interesting and can like, comment, and subscribe to your channel.
          </p>
        </div>
        <img
          class="step-three-image"
          src="@/assets/img/how-it-works-new/section-three-how-it-works.png"
          alt="tablet with some messages and advertises"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ArrowRight from "@/components/icons/IconDotArrowRight.vue";
import ArrowLeft from "@/components/icons/IconDotArrowLeft.vue";
export default {
  components: { ArrowRight, ArrowLeft }
};
</script>
<style lang="scss" scoped>
.container {
  background-color: white;
  @include for-desktop {
    border-radius: 0 0 300px 0;
  }
}
.how-it-works {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  @include for-tablet {
    padding-top: 100px;
    padding-left: 37px;
    padding-right: 37px;
  }
  @include for-desktop {
    // flex-direction: row;

    // justify-content: space-around;
    // align-items: flex-start;
    padding-left: 150px;
    padding-right: 150px;

    max-width: 1440px;
  }
}
.is-blue {
  color: $blue;
}
.step-heading {
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 10px;
  @include for-tablet {
    font-size: 20px;
  }
  @include for-desktop {
    font-size: 26px;
  }
}
.step-description {
  font-size: 14px;
  line-height: 184%;
  @include for-tablet {
    font-size: 18px;
  }
  @include for-desktop {
    font-size: 22px;
  }
}
.section-heading {
  font-weight: 900 !important;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
  @include for-desktop {
    margin-top: 80px;
    margin-bottom: 80px;
  }
}

.step-one {
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  @include for-tablet {
    flex-direction: row;
    margin-bottom: -50px;
  }
  @include for-desktop {
    width: 100%;
    justify-content: space-between;
  }
}
.step-one-content {
  @include for-desktop {
    max-width: 458px;
    margin-top: 50px;
  }
}
.step-one-image {
  margin-top: 40px;
  width: 100%;
  @include for-tablet {
    min-width: 334px;
    max-width: 334px;
    margin-top: 0px;
  }
  @include for-desktop {
    max-width: 483px;
  }
}
@supports (display: grid) {
  .step-two {
    @include for-tablet {
      width: 100%;
      display: grid;
      margin-top: 20px;
      margin-bottom: -250px;
    }
  }
  .step-two-image {
    @include for-tablet {
      min-width: 515px;
      max-width: 515px;
    }
    @include for-desktop {
      max-width: 759px;
      margin-top: -100px;
    }
  }
  .step-two-content {
    @include for-tablet {
      max-width: 334px;
      justify-self: end;
      margin-bottom: -90px;
    }
    @include for-desktop {
      max-width: 458px;
      margin-bottom: -200px;
    }
  }
}
.step-three {
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  @include for-tablet {
    flex-direction: row;
    margin-top: -70px;
    margin-bottom: 0px;
  }
}
.step-three-content {
  margin-top: 100px;
  @include for-desktop {
    max-width: 500px;
  }
}
.step-three-image {
  @include for-tablet {
    min-width: 377px;
    max-width: 377px;
  }
  @include for-desktop {
    max-width: 514px;
    margin-top: -50px;
  }
}
/deep/ svg {
  @include for-desktop {
    width: 595px;
    height: auto;
  }
}
</style>
