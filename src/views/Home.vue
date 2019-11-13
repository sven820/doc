<template>
  <div class="home">
    <section class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="logo navbar-brand">doc</a>
    </section>
    <section class="content"></section>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {

  }
}
</script>

<style lang="less" scoped src='@/components/theme/index.less'></style>
<style lang="less" scoped>
div {
  color: burlywood;
}
.content {
  width: 1rem;
  background-color: brown;
  height: 100px;
}
</style>