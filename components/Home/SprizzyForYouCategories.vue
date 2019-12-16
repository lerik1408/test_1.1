<template>
  <div class="gallery">
    <Card
      v-for="category in categories1"
      :key="category.id"
      :url="category.url"
      :desktopImgUrl="category.cover"
      :mobileImgUrl="category.cover"
      :title="category.title"
    />

    <div class="section-header">
      <h2 class="section-title">Sprizzy is for all channels</h2>
      <p class="section-description">
        No matter the type of channel, we'll help you grow.
      </p>
    </div>

    <Card
      v-for="category in categories2"
      :key="category.id"
      :url="category.url"
      :desktopImgUrl="category.cover"
      :mobileImgUrl="category.cover"
      :title="category.title"
    />
  </div>
</template>
<script>
import Card from "./SprizzyForYouCard.vue";
export default {
  components: {
    Card
  },
  data() {
    return {
      categories1: [],
      categories2: []
    };
  },
  methods: {
    getCategories() {
      this.$http.get(`/v1/promote/youtube/categories`).then(res => {
        const list = res.data.list;
        if (res.data.list.length > 3) {
          this.categories1 = list.slice(0, 2);
          this.categories2 = list.slice(2, list.length);
        } else this.categories1 = list;
      });
    }
  },
  created() {
    this.getCategories();
  }
};
</script>
<style lang="scss" scoped>
.gallery {
  position: relative;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  max-width: 636px;
  @include for-tablet {
    padding: 30px;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 800px;
  }
  @include for-desktop {
    margin: 0 auto;
    justify-content: flex-start;

    max-width: 1460px;
  }
}
.section-header {
  order: -1;
  margin-bottom: 20px;
  margin-top: 20px;
  max-width: 90%;
  @include for-tablet {
    order: 0;
    flex-basis: 46%;
  }
  @include for-desktop {
    flex-grow: 1;
  }
}
@supports (display: grid) {
  .section-header {
    max-width: none;
    grid-row: 1;
    grid-column: 1 / -1;
    @include for-tablet {
      grid-column: 3 / -1;
    }
  }
  .gallery {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, 160px);
    @include for-desktop {
      margin: 0 auto;
      grid-template-columns: repeat(auto-fill, 270px);
      grid-gap: 30px;
      max-width: 1460px;
    }
  }
}
.section-description {
  font-size: 12px;
  line-height: 184%;
  max-width: 95%;
  @include for-tablet {
    font-size: 14px;
    max-width: none;
  }
  @include for-desktop {
    font-size: 20px;
  }
}
</style>
