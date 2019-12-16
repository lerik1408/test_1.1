<template>
  <!--<nuxt-link :to="'/promote-' + url">-->
  <div class="card">
    <div
      v-bind:style="{
        'background-image': 'url(' + desktopImgUrl + ')'
      }"
      class="card-image"
    ></div>

    <p class="card-title">{{ title }}</p>
  </div>
  <!--</nuxt-link>-->
</template>
<script>
export default {
  props: {
    desktopImgUrl: String,
    mobileImgUrl: String,
    title: String,
    url: String
  }
};
</script>
<style lang="scss" scoped>
.card {
  margin-bottom: 10px;
  box-shadow: 0px 10px 40px rgba(22, 34, 78, 0.06);
  border-radius: 20px;

  @include for-desktop {
    min-width: 270px;
    margin-bottom: 25px;
    margin-left: 8px;
    margin-right: 8px;
  }
}
.card-image {
  /*vertical-align: middle;*/
  width: 270px;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  // border-radius: 20px 20px 0 0;
  @include for-mobile {
    height: 116px;
    width: 160px;
  }
  @include for-tablet {
    height: 116px;
    width: 160px;
  }
  @include for-desktop {
    height: 190px;
    width: 270px;
  }
}
.card-title {
  font-size: 13px;
  font-family: Gilroy;
  font-weight: 600;
  text-align: center;
  background: white;
  padding: 14px 2px;
  border-radius: 0 0 20px 20px;
  color: #2a3247;
  @include for-desktop {
    font-size: 20px;
    padding: 18px 4px;
  }
}
</style>
