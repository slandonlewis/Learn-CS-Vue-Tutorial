<script setup>
    import { useRoute, RouterView, useRouter } from "vue-router"
    import cars from "../data/cars.json"
    const route = useRoute()
    const router = useRouter()
    const carId = parseInt(route.params.id)
    const car = cars.find(c => c.id === carId) // return the car that matches the id in the url
    const showContact = () => { // conditionally render contact info based on car id
        if(carId === 3) {
            return
        } else {
            return router.push(`/cars/${carId}/contact`)
        }
    }
</script>

<template>
    <div v-if="car">
        <h1>Car View</h1>
        <p>{{car.name}}</p>
        <p>{{car.year}}</p>
        <p>{{car.price}}</p>
        <button @click="showContact">Click for contact</button>
        <RouterView />
    </div>
    <div v-else>
        <h1>Car Not Found...</h1>
    </div>
</template>