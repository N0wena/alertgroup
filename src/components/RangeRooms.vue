<template>
    <div>
        <menu class="menu rooms-radio">
            <h3 class="menu-title">комнаты</h3>
            <div class="rooms-radio__list">
                <li
                    v-for="(room, index) in roomsValue"
                    :key="index"
                    :class="{'active': active == index}"
                    class="rooms-radio__item"
                    @click="selectRoomFilter(index)"
                >
                    {{ room }}
                </li>
            </div>
        </menu>
    </div>
</template>

<script>
import store from "../store";
import { mapMutations, mapState } from 'vuex';
import * as mutations from "../store/types/mutation-types";

export default {
    name: 'RangeRooms',
    store,
    data() {
        return {
            active: 0,
        }
    },
    computed: {
        ...mapState({
            roomsValue: state => state.roomsValue,
        }),
    },
    methods: {
        ...mapMutations({
            selectRoom: mutations.SELECT_ROOM,
        }),

        selectRoomFilter(index) {
            this.active = index
            this.selectRoom(index)
        }
    },
}
</script>

<style lang="scss" scoped>

.active {
    color: #FFFFFF !important;
    background: #70D24E !important;
}

.rooms-radio {
    display: flex;
    flex-direction: column;

    &__list {
        display: flex;
    }

    &__item {
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
}
</style>
