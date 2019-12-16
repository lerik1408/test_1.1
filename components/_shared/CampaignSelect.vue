<template>
  <select class="primary-select">
    <option value="all">All campaigns</option>
    <option value="Active">Active</option>
    <option value="Finished">Finished</option>
    <option value="Pending">Pending</option>
    <option value="smth">Smth</option>
  </select>
</template>
<style lang="scss" scoped>
.primary-select {
  display: block;
  background-image: url("~@/assets/img/arrowDown.svg"),
    url("~@/assets/img/IconFilter.svg");
  background-position: 90% 50%, 8% 50%;
  background-repeat: no-repeat;
  width: 240px;
  padding-left: 40px;
}
</style>
