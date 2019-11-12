<template>
	<div id="content">
	    <div class="nav">
			<!-- 有histor，/开头根路径 -->
		 	<router-link to="/layout/doc" append>doc</router-link> | 
	      	<router-link to="/layout/l1" append>l123</router-link>
			<!-- replace没有history -->
			<!-- <router-link to="/layout/doc" replace>doc</router-link> | 
	      	<router-link to="/layout/l1" replace>l123</router-link> -->
	    </div>
    	<router-view class="section"></router-view>
  	</div>
</template>

<script>
	import l1 from "./l1.vue"

export default {

	name: 'index',
	components: {l1},
	data() {
		return {

		}
	}
}
</script>

<style lang="css" scoped>

.nav {
	float: left;
	width: 20%;
	height: 300px;
}
.section {
	margin-left: 20%
}
</style>