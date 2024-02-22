SETUP USING COMPOSITION API (NEW)
<script setup> /* setup lets vue know you want to use the composition api instead of the options api (older way) */
  import { ref } from "vue"
  let count = ref(0) /* initial state of count */
  const add = () => { /* implementing methods with composition api just looks like vanilla js */
    count.value++
  }
  const sub = () => {
    count.value--
  }
</script>

<!-- SETUP USING OPTIONS API (OLD)
<script>
  export default ({
    data() { /* Defining variables in data function */
      return {
        count: 0 /* initial state of count*/
      }
    },
    methods: { /* Defining functions in methods */
      add() {
        this.count++
      },
      sub() {
        this.count--
      }
    }
  })
</script> -->

<template>
  <main>
    <div>
      <h4>Current Count:</h4>
      <h1>{{ count }}</h1>
      <button @click="add">+</button>
      <button @click="sub">-</button>
    </div>
  </main>
</template>

<style scoped> /* scoped makes this code only apply to this specific vue component */
main {
  background-color: aliceblue;
  color: rgb(56, 56, 56);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 50px;
}

button {
    padding: 20px;
    margin: 10px;
    font-size: larger;
  }
</style>