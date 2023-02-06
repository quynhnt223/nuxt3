<template>
  <div>
  about  {{ pages }}kkkkkk
  </div>
  <NuxtLink to="/days">days</NuxtLink>
  <NuxtLink to="/days/2">day 2</NuxtLink>
  <NuxtLink to="/days/1">day 1</NuxtLink>
</template>

<script setup>
const pages = ref();
onMounted(async () => {
const { result } = await $fetch("/api/query?col=pages");
console.log(result);
pages.value = result;
});
</script>
