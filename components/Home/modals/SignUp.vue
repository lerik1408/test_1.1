<template>
  <div class="sign-up">
    <label for="email">E-mail</label>
    <input type="text" id="email" class="primary-input" />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" />

    <button class="primary-button-50px">Sing up</button>
    <p>
      Already have an account?
      <nuxt-link to="/login">Log in</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.sign-up {
  background-color: $bg-light;
}
</style>
