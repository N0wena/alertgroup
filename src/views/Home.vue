<template>
    <div>
        <div class="wrapper">
            <app-header/>
            <filters/>
            <transition appear
            appear-active-class="fade-enter-active"
    @before-appear="beforeAppear"
    @appear="appear"
    @after-appear="afterAppear">
                <building-cards/>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {
        AppHeader: () => import('../components/Header'),
        Filters: () => import('../components/Filters'),
        BuildingCards: () => import('../components/BuildingCards'),
    },
}
</script>

<style lang="scss" scoped>

.wrapper {
    width: 1130px;
    margin: 0 auto;
}

</style>
