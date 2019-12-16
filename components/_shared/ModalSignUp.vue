<template>
  <ModalDialog :show="signUpModalIsOpen" @close="closeModals">
    <LightGrayContainerLogSigGet>
      <SignUp class="login-in-modal-container" />
    </LightGrayContainerLogSigGet>
  </ModalDialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import SignUp from "@/components/_shared/SignUp.vue";
import ModalDialog from "@/components/_shared/ModalDialog.vue";
import LightGrayContainerLogSigGet from "@/components/Home/modals/LightGrayContainerLogSigGet.vue";

export default {
  components: { SignUp, ModalDialog, LightGrayContainerLogSigGet },
  computed: {
    ...mapState("appStore", ["signUpModalIsOpen"])
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
