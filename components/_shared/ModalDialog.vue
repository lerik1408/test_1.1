<template>
  <div>
      <portal to="modals" v-if="show">
        <div class="modal" @click="close">
          <div class="modal-content" @click.stop>
            <slot></slot>
          </div>
        </div>
      </portal>
  </div>
</template>
<script>
export default {
  props: {
    show: Boolean
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="scss" scoped>
.modal {
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  left: 0;
  top: 0;
  // bottom: 0;
  // right: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  overflow-y: auto;
}
.modal-content {
  background-color: #fefefe;
  border: 1px solid #888;
  width: 100%; /* Could be more or less, depending on screen size */
  height: 100%;
  overflow-y: auto;
  header {
    display: flex;
    justify-content: space-between;
  }
  @include for-tablet {
    position: relative;
    margin: 0 auto;
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    border: none;
    top: 15%;
  }
}
</style>
