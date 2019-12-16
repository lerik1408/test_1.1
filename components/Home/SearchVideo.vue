<template>
  <div class="search-video">
    <input
      class="search-video-input"
      type="text"
      placeholder="Search Video, Channel, or Link (youtube.com/watch?v=XXX)"
      v-model="searchTextLocal"
      aria-label="input for videos search"
      v-on:keyup.enter="parseSearchTextAndPushToSearch"
    />

    <a @click="parseSearchTextAndPushToSearch" class="primary-button-55px"
      >Try it now</a>

  </div>
</template>
<script>
  import { mapMutations } from "vuex";

  export default {
  components: {},
  data() {
    return {
      searchTextLocal: this.searchText
    };
  },
  props: {
    searchText: String
  },
  methods: {
    ...mapMutations("appStore", ["openSearchModal"]),
    parseSearchTextAndPushToSearch() {
      if (this.searchTextLocal && this.searchTextLocal.length > 0) {
        //showSearch
        this.openSearchModal(this.searchTextLocal);

        // this.$router.push({
        //   path: "/search",
        //   query: { q: this.searchTextLocal }
        // });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search-video {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include for-tablet {
    flex-direction: row;
    justify-content: center;
  }
  @include for-desktop {
    flex-direction: column;
  }
}
.primary-button-55px {
  width: 320px;
  max-width: 90%;
  margin-top: 12px;
  font-weight: 900;
  display: block;
  padding-top: 15px;
  /*z-index: 2;*/
  @include for-tablet {
    margin-top: 0;
    margin-left: 10px;
    width: 226px;
  }
  @include for-desktop {
    margin-top: 20px;
  }
}
.search-video-input {
  width: 320px;
  max-width: 90%;
  height: 55px;
  padding-left: 20px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  color: white;
  display: block;
  /*z-index: 2;*/
  font-size: 16px;
  line-height: normal;
  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
  }
  @include for-mobile {
    max-width: 100%;
    width: 100%;
  }
  @include for-tablet {
    width: 452px;
  }
}
.white .search-video-input {
  color: black;
  background: white;
  border: 1px solid #e5ebf3;
  &::placeholder {
    color: $dark-input;
  }
}
.search-video-form {
  display: flex;
  flex-direction: row;
  @include for-mobile {
    width: 100%;
    flex-direction: column;
  }
}
</style>
