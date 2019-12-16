<template>
  <ModalDialog :show="loginModalIsOpen" @close="closeModals">
    <LightGrayContainerLogSigGet>
      <Login class="login-in-modal-container" />
    </LightGrayContainerLogSigGet>
  </ModalDialog>
</template>
<script>

import { mapState, mapMutations } from "vuex";
import Login from "~/components/_shared/Login.vue";
import ModalDialog from "~/components/_shared/ModalDialog.vue";
import LightGrayContainerLogSigGet from "~/components/Home/modals/LightGrayContainerLogSigGet.vue";

export default {
  components: { Login, ModalDialog, LightGrayContainerLogSigGet },
  computed: {
    ...mapState("appStore", ["loginModalIsOpen"])
  },
  methods: {
    ...mapMutations("appStore", ["closeModals"])
  },
  created(){
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
