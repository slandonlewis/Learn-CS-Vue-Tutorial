<script setup>
    import { useRoute } from "vue-router"
    import cars from "../data/cars.json"
    const route = useRoute()
    const car = cars.find(c => c.id === parseInt(route.params.id)) // return the car that matches the id in the url
</script>

<template>
    <div>
        <h1>Car View</h1>
        {{ car }}
    </div>
</template>