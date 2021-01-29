<template>
    <div>
        <menu class="menu range-floor">
            <h3 class="menu-title">этаж</h3>
            <div class="range-floor__output">
                <input
                    v-model.number="rangeFloor[0]"
                    class="range-floor__value"
                    type="text"
                    :min="0"
                    :max="10"
                    step="1"
                >
                -
                <input
                    v-model.number="rangeFloor[1]"
                    class="range-floor__value"
                    type="text"
                    :min="0"
                    :max="10"
                    step="1"
                >
            </div>
            <div class="range-floor__slider">
                <vue-slider
                    v-model="rangeFloor"
                    :min="0"
                    :max="10"
                >
                </vue-slider>
            </div>
        </menu>
    </div>
</template>

<script>
import store from "../store";
import { mapState } from 'vuex';
import * as mutations from "../store/types/mutation-types";
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
    name: 'RangeFloor',
    store,
    components: {
        VueSlider,
    },
    computed: {
        ...mapState({
            rangeFloor: state => state.rangeFloor,
        }),

        rangeFloor: {
            get() {
                return this.$store.state.rangeFloor;
            },
            set(value) {
                this.$store.commit(mutations.SET_RANGE_FLOOR, value);
            },
        },
    }
}
</script>

<style lang="scss" scoped>

.range-floor {
    display: flex;
    flex-direction: column;

    &__slider {
        width: 175px;
    }

    &__output {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
    }

    &__value {
        text-align: center;
        width: 80px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        box-sizing: border-box;
        border-radius: 5px;
    }
}
</style>
