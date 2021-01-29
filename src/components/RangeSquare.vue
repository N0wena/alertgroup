<template>
    <div>
        <menu class="menu range-square">
            <h3 class="menu-title">площадь,<span class="lowercase"> м<sup>2</sup></span></h3>
            <div class="range-square__output">
                <input
                    v-model.number="rangeSquare[0]"
                    class="range-square__value"
                    type="text"
                    :min="0"
                    :max="100"
                    step="1"
                >
                -
                <input
                    v-model.number="rangeSquare[1]"
                    class="range-square__value"
                    type="text"
                    :min="0"
                    :max="100"
                    step="1"
                >
            </div>
            <div class="range-square__slider">
                <vue-slider
                    v-model="rangeSquare"
                    :min="0"
                    :max="100"
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
    name: 'RangeSquare',
    store,
    components: {
        VueSlider,
    },
    computed: {
        ...mapState({
            rangeSquare: state => state.rangeSquare,
        }),

        rangeSquare: {
            get() {
                return this.$store.state.rangeSquare;
            },
            set(value) {
                this.$store.commit(mutations.SET_RANGE_SQUARE, value);
            },
        },
    }
}
</script>

<style lang="scss" scoped>

.range-square {
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
