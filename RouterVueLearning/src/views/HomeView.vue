<script setup>
    import cars from "../data/cars.json"
    import {RouterLink} from "vue-router"
</script>

<template>
    <h1>Home View</h1>
    <div class="cars">
        <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id">
            {{car.name}}
        </RouterLink>
    </div>
</template>

<style scoped>
    .cars {
        display: flex;
    }

    .cars a {
        text-decoration: none;
        color: black;
        width: 100%;
        box-shadow: 1px 1px 1px black;
        margin: 10px;
    }

    div {
        background-color: aliceblue;
        color: black;
    }
</style>