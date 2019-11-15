<template>
  <router-view></router-view>
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
