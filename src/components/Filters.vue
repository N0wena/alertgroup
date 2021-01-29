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
.vue-slider-dot-handle {
    width: 125% !important;
    height: 125% !important;
}

.vue-slider-dot-handle::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 75%;
    height: 75%;
    background-color: #70D24E;
}

.vue-slider-process {
    background-color: #70D24E !important;
}

.vue-slider-dot-handle-focus {
    box-shadow: 0px 0px 1px 2px rgba(38, 207, 47, 0.36) !important;
}

.vue-slider-dot-tooltip-inner {
    border-color: #70D24E !important;
    background-color: #70D24E !important;
}

.filters {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
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
