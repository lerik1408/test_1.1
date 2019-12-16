<template>
  <button @click="routeTo(path)">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    path: String,
    type: String
  },
  methods: {
    routeTo(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.back {
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 600;
  border: none;
  background-color: Transparent;
  width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include for-tablet {
    border: 1.5px solid #e8edf5;
    height: 55px;
    width: 206px;
    border-radius: 8px;
    justify-content: center;
    span {
      margin-left: 10px;
    }
  }
}
.primary-button-55px {
  text-transform: capitalize;
  width: 100%;
  @include for-tablet {
    max-width: 206px;
  }
}
.mobile-visible {
  @include for-tablet {
    display: none;
  }
}
.mobile-invisible {
  display: none;
  @include for-tablet {
    display: flex;
  }
}
</style>
