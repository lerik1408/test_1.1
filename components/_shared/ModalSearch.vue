<template>
  <ModalDialog :show="showSearch" @close="closeModals">
    <Search />
  </ModalDialog>
</template>
<script>
  import { mapState, mapMutations } from "vuex";
import Search from "@/components/Home/modals/Search.vue";
import ModalDialog from "@/components/_shared/ModalDialog.vue";

export default {
  components: { ModalDialog, Search },
  computed: {
    ...mapState("appStore", ["showSearch"])
  },
  methods: {
    ...mapMutations("appStore", ["closeModals"])
  },
};
</script>
<style lang="scss" scoped>
/deep/.login-in-modal-container {
  margin-top: 50%;
  @include for-tablet {
    margin-top: 20px;
  }
}
</style>
