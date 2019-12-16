<template>
  <div class="gift-cards">
    <HeaderNavBar />
    <div class="gift-cards-main">
      <h1>Give the Gift of YouTube Promotion!</h1>
      <p>
        Do you know someone looking to make it big on YouTube? Whether it be a
        musician, gamer, artist, or any other type of video creator, Sprizzy is
        the perfect gift for anyone looking to gain exposure and grow their
        YouTube channel.
      </p>
      <div class="def-packages">
        <PackageType
          bgColor="linear-gradient(180deg, #FF6B73 0%, #FE886F 100%)"
          imgUrl="rocket.png"
          _package="starter"
          viewsAmount="2,000"
          :promotedVidesAmount="2"
          :price="50"
        >
          <icon-rocket />
        </PackageType>
        <PackageType
          bgColor="linear-gradient(180deg, #7C78EE 0%, #649EFC 100%)"
          _package="pro"
          viewsAmount="4,000"
          :promotedVidesAmount="4"
          :price="150.0"
        >
          <icon-case />
        </PackageType>
        <PackageType
          bgColor="linear-gradient(rgb(99, 215, 206) 0%, rgb(59, 220, 160) 100%)"
          imgUrl="star.png"
          _package="ultimate"
          viewsAmount="10,000"
          :promotedVidesAmount="10"
          :price="250.0"
        >
          <icon-star />
        </PackageType>
      </div>
      <CustomPackage />
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderNavBar from "@/components/_shared/HeaderNavBar.vue";
import Footer from "@/components/_shared/Footer.vue";
import PackageType from "@/components/GiftCards/PackageType.vue";
import CustomPackage from "@/components/GiftCards/CustomPackage.vue";
import IconRocket from "@/components/icons/IconRocket.vue";
import IconCase from "@/components/icons/IconCase.vue";
import IconStar from "@/components/icons/IconStar.vue";

export default {
  components: {
    HeaderNavBar,
    PackageType,
    CustomPackage,
    Footer,
    IconRocket,
    IconCase,
    IconStar
  },
  // metaInfo: {
  //   title: $config.META_HOME_DEFAULT.TITLE,
  //   description: $config.META_HOME_DEFAULT.DESCRIPTION,
  //   keywords: $config.META_HOME_DEFAULT.KEYWORDS
  // }
};
</script>
<style lang="scss" scoped>
.gift-cards {
  background: $bg-light;
}
.gift-cards-main {
  margin: 45px auto 0 auto;
  padding: 0px 0px 125px 0px;

  @include for-tablet {
    text-align: center;
  }
  @include for-desktop {
    margin: 45px auto 0 auto;
  }
  h1 {
    margin: 0px 30px 25px 30px;
    font-size: 40px;
    margin: 0 auto;
    width: 274px;
    @include for-tablet {
      width: 657px;
      font-size: 64px;
    }
  }
  p {
    margin: 0px auto 60px auto;
    width: 291px;
    @include for-tablet {
      line-height: 27px;
      width: 73vw;
    }
    @include for-desktop {
      max-width: 45%;
    }
  }
  .def-packages {
    display: flex;
    flex-direction: column;
    @include for-tablet {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
