<template>
  <div class="input-label">
    <input
      :required="required"
      :readonly="readonly"
      @blur="onBlur"
      class="primary-input-50px"
      :id="id"
      :type="type ? type : 'text'"
      :value="value"
      :placeholder="placeholder"
      @input="handleInput"
      :minlength="type === 'password' && '8'"
    />
    <label :for="id">
      <slot></slot>
      <span v-if="required">*</span>
    </label>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    value: String,
    id: String,
    required: Boolean,
    readonly: Boolean,
    placeholder: String,
    type: String
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    onBlur() {
      this.$emit("touch");
    }
  }
};
</script>
<style lang="scss" scoped>
::after {
  color: $error-message-color;
  font-size: 10px;
} //error label style with pseudo selector in all cases

.error {
  input {
    border: 1px solid $error-message-color;
  }
}
.required {
  &::after {
    content: "This field is required";
  }
}
.not-number {
  &::after {
    content: "This field should be a number";
  }
}
.not-valid-email {
  &::after {
    content: "Please enter a valid email";
  }
}
</style>
