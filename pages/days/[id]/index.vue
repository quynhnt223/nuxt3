<template>
  <div>
  {{ id }}
<NuxtLink to="1">part 1</NuxtLink>
<NuxtLink to="2">part 2</NuxtLink>
<NuxtLink to="3">part 3</NuxtLink>
<NuxtLink to="4">part 4</NuxtLink>
<NuxtLink :to="`/days/${ id }/parts/6`">part 5</NuxtLink>
  </div>
</template>

<script setup>
const { id } = useRoute().params
</script>