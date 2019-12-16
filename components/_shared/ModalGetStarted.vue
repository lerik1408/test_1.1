<template>
  <ModalDialog :show="showGetStarted" @close="closeModals">
    <GetStarted />
  </ModalDialog>
</template>
<script>
  import { mapState, mapMutations } from "vuex";
  import GetStarted from "@/components/Home/modals/GetStarted.vue";
  import ModalDialog from "@/components/_shared/ModalDialog.vue";

export default {
  components: { ModalDialog, GetStarted },
  computed: {
    ...mapState("appStore", ["showGetStarted"])
  },
  methods: {
    ...mapMutations("appStore", ["closeModals"])
  },
  props: {
    show: Boolean
  }
};
</script>
<style lang="scss" scoped>
/deep/.login-in-modal-container {
  margin-top: 50%;
  @include for-mobile {
    margin-top: 10%;
  }
  @include for-tablet {
    margin-top: 20px;
  }
}
</style>
