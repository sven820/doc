<template>
  <!-- <router-view></router-view> -->
  <div class="container-jj">
    <div class="test">
      <div class="inner"></div>
      <div class="inner"></div>
      <div class="inner"></div>
    </div>
    <div class="test">

    </div>
    <div class="test">
      <div class="inner"></div>
    </div>
  </div>
  
</template>

<script>
import home from '@/views/Home'

export default {

  components: {
    home,
  },
  name: 'index',

  data () {
    return {

    }
  }
}
</script>

<style lang='css' src='@/common/css/fl.css'></style>
<style lang="css">

body, html, .container-jj {
  height: 100%;
  width: 100%;
}
.test {
  /* height: 100px; */
  height: 50%;
  width: 500px;
  background-color: rgb(139, 43, 43);
  overflow: auto
}
.inner {
  height: 50%;
  width: 50%;
  background-color: rgb(28, 10, 185);
}
</style>
