<template>
    <div class="web container-fluid">
        <div class="nav-menu">
            <div class="menu-item" v-for="(item, index) in menus" :key="index">
                <router-link :to=item.path>{{item.title}}</router-link>
            </div>
        </div>
        <!-- <div class="slider-bar-container"></div>
        <div class="slider-bar"></div> -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menus: []
        }
    },
    created() {
        this.getMenus()
    },
    methods: {
        getMenus() {
            this.menus = [
                {
                    title: 'vue',
                    id: '1',
                    path: '/web/vue',
                    sub: []
                },
                {
                    title: 'typescript',
                    id: '2',
                    path: '/web/ts',
                    sub: []
                },
                {
                    title: 'bootstrap',
                    id: '3',
                    path: '/web/bt4',
                    sub: []
                },
            ]
        }
    },
}
</script>

<style lang="css" scoped>

</style>