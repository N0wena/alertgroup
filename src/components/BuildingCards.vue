<template>
    <div>
        <transition-group name="card" class="cards">
            <div
                class="card"
                v-for="(building, index) in filteredBuildings"
                :key="building.id"
                @mouseover="isHoverCard(index)"
                @mouseleave="isHoverCard(-1)"
            >
                <div class="card__title">
                    <p class="card__title-floor">
                        <span class="opacity"> {{ building.floor }} этаж </span>
                    </p>
                    <p class="card__title-room">
                        {{ building.rooms }} комната <span class="opacity">-</span>
                        {{ building.square }}м<sup>2</sup>
                    </p>
                </div>
                <figure class="card__picture" :class="{ 'selected-height': active == index }">
                    <figcaption>№{{ building.number }}</figcaption>
                    <img
                        :src="require('../assets' + building.plan)"
                        :alt="building.building_name"
                    />
                </figure>
                <div class="card__price">
                    <p class="card__price-total">{{ building.price | format }}р.</p>
                    <p class="card__price-for-square">
                        <span class="opacity">
                            {{ (building.price / building.square) | round | format }} р. за м<sup>2</sup>
                        </span>
                    </p>
                </div>
                <button class="card__button" v-show="active == index">Подробнее</button>
            </div>
        </transition-group>
    </div>
</template>

<script>
import store from "../store";
import { mapState } from "vuex";
export default {
    name: "BuildingCards",
    store,
    data() {
        return {
            active: -1,
        };
    },
    computed: {
        ...mapState({
            buildings: (state) => state.buildings,
        }),

        filteredBuildings() {
            if (this.$store.state.filteredBuildings) {
                return this.$store.state.filteredBuildings
            } else {
                return this.$store.state.buildings
            }
        }
    },
    methods: {
        isHoverCard(index) {
            this.active = index
        },
    },
    filters: {
        format: (val) => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 "),
        round: (val) => Math.round(val)
    },
};
</script>

<style lang="scss" scoped>

.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1vw;
    justify-items: center;
    align-items: center;
}

.card {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: #ffffff;
    border-radius: 10px;
    width: 270px;
    height: 365px;
    box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.05);
    transition: 0.3s ease-out;
    overflow: hidden;
    
  &-move { transition: all 600ms ease-in-out 50ms }
  &-enter-active { transition: all 300ms ease-out }

  &-leave-active {
    transition: all 200ms ease-in;
    position: absolute;
    z-index: 0;
  }

  &-enter,
  &-leave-to { opacity: 0 }
  &-enter { transform: scale(0.9) }

    &:hover {
        box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.25);
    }

    &__title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.5em;
        font-size: 12px;
    }

    &__picture {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 10px;
        width: 250px;
        height: 250px;
        background: #ffffff;
        border: 1px solid #ecd8d8;
        box-sizing: border-box;
        border-radius: 5px;
        transition: height 0.5s ease-out, padding 0.5s ease-out;

        &.selected-height {
            height: 200px;
            padding: 30px;
        }

        & figcaption {
            position: absolute;
            padding: 0.1em 0.5em;
            top: -1px;
            right: -1px;
            font-size: 14px;
            line-height: 28px;
            text-transform: uppercase;
            background: #ffffff;
            border: 1px solid #ebebeb;
            box-sizing: border-box;
            border-radius: 0px 5px;
        }
    }

    &__price {
        text-align: right;

        &-total {
            margin-top: 0.8em;
            font-size: 20px;
        }

        &-for-square {
            font-size: 12px;
            line-height: 28px;
        }
    }

    &__button {
        width: 100%;
        color: #ffffff;
        font-size: 14px;
        line-height: 28px;
        padding: 0.5em 0;
        background: #70d24e;
        border-radius: 2px 2px 5px 5px;
        border: none;
        margin: auto 0 0 0;
        transition: 0.3s ease-out;

        &:hover {
            cursor: pointer;
            background: #68e33e;
        }
    }
}

.opacity {
    opacity: 0.5;
}
</style>
