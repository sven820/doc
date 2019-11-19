<template>
  <router-view></router-view>
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
<style lang='scss' src='@/components/bt4-extension/bt4-extension.scss'></style>
<style lang="css">

</style>
