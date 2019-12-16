<template>
  <ModalDialog :show="resetPasswordModalIsOpen" @close="closeModals">
    <ResetPassword class="login-in-modal-container" />
  </ModalDialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ResetPassword from "@/components/Home/modals/ResetPassword.vue";
import ModalDialog from "@/components/_shared/ModalDialog.vue";

export default {
  components: { ModalDialog, ResetPassword },
  computed: {
    ...mapState("appStore", ["resetPasswordModalIsOpen"])
  },
  methods: {
    ...mapMutations("appStore", ["closeModals"])
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
