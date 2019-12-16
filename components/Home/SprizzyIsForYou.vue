<template>
  <section class="sprizzy-for-you">
    <Categories />
  </section>
</template>

<script>
import Categories from "./SprizzyForYouCategories.vue";
export default {
  components: { Categories }
};
</script>

<style lang="scss" scoped>
.sprizzy-for-you {
  background: #f7fafd;
  padding-top: 30px;
  padding-bottom: 50px;
  border-radius: 280px 0px 0px 0px;
}
</style>
