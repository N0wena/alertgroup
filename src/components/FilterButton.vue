<template>
    <div>
        <menu class="filter">
            <button class="filter__btn" @click="filterBuildings">Применить</button>
            <p class="filter__reset" @click="clearFilter">Сбросить фильтр</p>
        </menu>
    </div>
</template>

<script>
import store from "../store";
import { mapState } from 'vuex';

export default {
    name: 'FilterButton',
    store,
    computed: {
        ...mapState({
            selectedRoom: (state) => state.selectedRoom,
        })
    },
    methods: {
        filterBuildings() {
            let vm = this;
            this.$store.state.filteredBuildings = [...this.$store.state.buildings]
            this.$store.state.filteredBuildings = this.$store.state.filteredBuildings
                .filter(el => el.rooms == vm.$store.state.selectedRoom)
                .filter(el => el.floor >= vm.$store.state.rangeFloor[0] && el.floor <= vm.$store.state.rangeFloor[1])
                .filter(el => el.square >= vm.$store.state.rangeSquare[0] && el.square <= vm.$store.state.rangeSquare[1])
                .filter(el => el.price >= vm.$store.getters.trueRangeCost[0] && el.price <= vm.$store.getters.trueRangeCost[1])
        },

        clearFilter() {
            this.$store.state.filteredBuildings = null
        },
    }
}
</script>

<style lang="scss" scoped>

.filter {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;

    &__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px 55px;
        text-transform: uppercase;
        color:#FFFFFF;
        cursor: pointer;
        font-size: 14px;
        line-height: 28px;
        background: #70D24E;
        border: none;
        border-radius: 5px;
        transition: 0.3s ease-out;
        margin-bottom: 5px;

        &:hover {
            background: #68e33e;
        }
    }

    &__reset {
        display: inline-block;
        position: relative;
        cursor: pointer;
        font-size: 10px;
        line-height: 28px;
        transition: 0.3s ease-out;

        &:hover {
            opacity: 0.6;
        }

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            height: 1px;
            width: 100%;
            background: #70D24E;
        }
    }
}
</style>
