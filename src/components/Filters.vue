<template>
    <div>
        <menu>
            <li
                v-for="(room, index) in rooms"
                :key="index"
                class="rooms"
                @click="setFilter()"
            >
                {{ room }}
            </li>

        </menu>
        <menu>
            <output>
                <input
                    type="text"
                    v-model="floors.rating"
                />
            </output>
            <input
                v-model="floors.rating"
                class="filters__range"
                type="range"
                :min="rating.min"
                :max="rating.max"
                step="1"
            />
        </menu>
    </div>
</template>

<script>
export default {
    name: "Filters",
    data() {
        return {
            rooms: ["s", "1к", "2к", "3к"],
            rating: {
                min: 0,
                max: 10,
            },
            floors: {
                rating: false,
            }
        };
    },
};
</script>

<style lang="scss" scoped>
menu {
    display: flex;
    padding: 0;
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
</style>
