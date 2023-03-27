<script setup>
import { ref } from 'vue';
const count = ref(0);
const add = () => {
  count.value = count.value + 1;
};
const subtract = () => {
  count.value = count.value - 1;
};
</script>

<template>
  <div class="counter">
    <div class="counter-tool">
      <button @click="subtract">-</button>
      <pre>{{ count }}</pre>
      <button @click="add">+</button>
    </div>
    <div class="counter-message">
      <slot />
    </div>
  </div>
</template>

<style>
.counter {
  background: #eaeaea;
  padding: 2em;
  margin-bottom: 2em;
}
.counter-tool {
  display: grid;
  font-size: 2em;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  place-items: center;
}
.counter-message {
  text-align: center;
}
</style>
