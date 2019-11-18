<template>
    <div class="container-fluid bg-light clearfix">
        <div class="nav-menu float-left">
            <div class="menu-item" v-for="(item, index) in menus" :key="index">
                <router-link :to=item.path>{{item.title}}</router-link>
            </div>
        </div>
        <router-view class=""></router-view>
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
                {
                    title: 'layout',
                    id: '4',
                    path: '/web/layout',
                    sub: []
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

</style>