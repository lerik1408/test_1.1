<template>
  <div class="input-label">
    <div class="input-w-arrows">
      <input
        type="number"
        :value="value"
        @input="handleInput"
        class="primary-input-55px"
      />
      <div class="arrows">
        <span @click="incValue">
          <IconArrowUp class="blue" />
        </span>
        <span @click="decValue">
          <IconArrowDown class="blue" />
        </span>
      </div>
    </div>
    <label for="value-input" class="value-input-label">
      <slot></slot>
    </label>
  </div>
</template>
<script>
import IconArrowUp from "@/components/icons/IconArrowUp.vue";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
export default {
  components: { IconArrowUp, IconArrowDown },
  props: {
    value: Number
  },
  methods: {
    incValue(e) {
      e.preventDefault();
      this.$emit("input", this.value + 1);
    },
    decValue(e) {
      e.preventDefault();
      this.$emit("input", this.value - 1);
    },
    handleInput(e) {
      e.preventDefault();
      if (e.data == "e") return;
      if (e.target.value === "") this.$emit("input", 0);
      else this.$emit("input", e.target.value);
    }
  }
};
</script>
<style lang="scss" scoped>
.input-w-arrows {
  position: relative;
  width: 146px;
  input {
    max-width: 100%;
    font-size: 16px;
    font-weight: 600;
  }
}
.arrows {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20%;
  left: 80%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
.input-w-note {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  p {
    width: 140px;
  }
  @include for-tablet {
    flex-direction: column;
    align-items: flex-start;
    p {
      width: auto;
      margin-right: 50px;
      margin-left: 0;
      margin-top: 14px;
    }
  }
}
</style>
