<template>
    <div>
        <div class="wrapper">
            <app-header/>
            <filters/>
            <transition>
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
    padding-bottom: 100px;
}

</style>
