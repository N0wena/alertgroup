<template>
    <div>
        <menu class="menu range-cost">
            <h3 class="menu-title">стоимость,<span class="lowercase"> млн. р.</span></h3>
            <div class="range-cost__output">
                <input
                    v-model.number="rangeCost[0]"
                    class="range-cost__value"
                    type="text"
                    :min="0"
                    :max="10"
                    step="0.1"
                >
                -
                <input
                    v-model.number="rangeCost[1]"
                    class="range-cost__value"
                    type="text"
                    :min="0"
                    :max="10"
                    step="0.1"
                >
            </div>
            <div class="range-cost__slider">
                <vue-slider
                    v-model="rangeCost"
                    :min="0"
                    :max="10"
                    :interval="0.1"
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
    name: 'RangeCost',
    store,
    components: {
        VueSlider,
    },
    computed: {
        ...mapState({
            rangeCost: state => state.rangeCost,
        }),

        rangeCost: {
            get() {
                return this.$store.state.rangeCost;
            },
            set(value) {
                this.$store.commit(mutations.SET_RANGE_COST, value);
            },
        },
    }
}
</script>

<style lang="scss" scoped>

.range-cost {
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
