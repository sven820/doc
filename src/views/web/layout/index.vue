<template>
	<div id="content">
	    <div class="nav">
		 	<router-link to="/web/layout/doc">doc</router-link> | 
	      	<router-link to="/web/layout/l1">l123</router-link>
	    </div>
    	<router-view class="section"></router-view>
  	</div>
</template>

<script>
	import l1 from "./l1.vue"
import { log } from 'util'

export default {

	name: 'index',
	components: {l1},
	data() {
		return {

		}
	},
	beforeRouteEnter (to, from, next) {
		next()
		console.log(to);
	},
	beforeRouteUpdate (to, from, next) {
		next()
		console.log(to);
	},
	beforeRouteLeave (to, from, next) {
		next()
		console.log(to);
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