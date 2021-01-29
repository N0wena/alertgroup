<template>
    <div class="filters">
        <range-rooms/>
        <range-floor/>
        <range-square/>
        <range-cost/>
        <filter-button/>
    </div>
</template>

<script>
import store from "../store";

export default {
    name: "Filters",
    store,
    components: {
        RangeRooms: () => import('./RangeRooms'),
        RangeFloor: () => import('./RangeFloor'),
        RangeSquare: () => import('./RangeSquare'),
        RangeCost: () => import('./RangeCost'),
        FilterButton: () => import('./FilterButton'),
    },
};
</script>

<style lang="scss">
.filters {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

.menu {
    display: flex;
    padding: 0;
    margin: 0;
}

.menu-title {
    font-size: 12px;
    line-height: 28px;
    text-transform: uppercase;
}

.lowercase {
    text-transform: lowercase;
}

</style>
