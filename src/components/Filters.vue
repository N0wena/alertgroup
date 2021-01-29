<template>
    <div class="filters">
        <menu class="room-radio">
            <li
                v-for="(room, index) in roomsValue"
                :key="index"
                class="rooms"
                @click="setFilter()"
            >
                {{ room }}
            </li>

        </menu>
        <menu>
            <div class="range-output">
                <input
                    v-model.number="floorValue.min"
                    type="text"
                    :min="0"
                    :max="100"
                    step="1"
                >
                <input
                    v-model.number="floorValue.max"
                    type="text"
                    :min="0"
                    :max="100"
                    step="1"
                >
            </div>
            <div class="range-slider">
                <input
                    v-model.number="floorValue.min"
                    type="range"
                    :min="0"
                    :max="100"
                    step="1"
                    @change="setRange"
                />
                <input
                    v-model.number="floorValue.max"
                    type="range"
                    :min="0"
                    :max="100"
                    step="1"
                    @change="setRange"
                />
            </div>
        </menu>
    </div>
</template>

<script>
import store from "../store";
import { mapState } from 'vuex';
export default {
    name: "Filters",
    store,
    computed: {
        ...mapState({
            roomsValue: state => state.roomsValue,
            floorValue: state => state.floorValue,
            costValue: state => state.costValue,
        }),
    },

    methods: {
        setRange() {
            if (this.floorValue.min > this.floorValue.max) {
                let tmp = this.floorValue.max;
                this.floorValue.max = this.floorValue.min;
                this.floorValue.min = tmp;
            }
        }
    }

};
</script>

<style lang="scss" scoped>
menu {
    display: flex;
    padding: 0;
}

.filters {
    display: flex;
    justify-content: space-between;
}

.rooms {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #D8D8D8;
    box-sizing: border-box;
    border-radius: 5px;
    transition: 0.3s ease-out;

    &:hover {
        color: #FFFFFF;
        background: #68e33e;
    }

    &:not(:last-of-type) {
        margin-right: 4px;
    }
}

.range-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
}

.range-slider svg, .range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
}

input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
}

input[type=range] + input[type=range] {
    transform: rotate(-180deg);
}
</style>
