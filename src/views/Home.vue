<template>
  <div class="home">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <router-link  class="navbar-brand" href="#" to="home">DOC</router-link >
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" href="#" to="web">web</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link" href="#" to="about">关于</router-link >
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <router-view></router-view>  
    </div>
    
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

<style lang="less" src='@/components/theme/index.less' scoped></style>
<style lang="less" scoped>
</style>