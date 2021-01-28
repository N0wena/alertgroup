<template>
    <div>
        <header>
            <h1>Lorem ipsum dolor sit</h1>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>

<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    margin: 40px auto 50px auto;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 34px;
    line-height: 60px;
}
</style>
