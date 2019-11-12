<template>
  <div id="app">
    <div id="nav">
      <div class="title">doc</div> | 
      <router-link class="item" to="/">Home</router-link> |
      <router-link class="item" to="/about">About</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {

  name: 'index',

  data () {
    return {

    }
  }
}
</script>

<style src='@/common/css/fl.css' scoped></style>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  height: 2rem;
  .title {
    font-size: 20px;
  };
  .item {
    font-weight: bold;
    color: #2c3e50;
  };
  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
