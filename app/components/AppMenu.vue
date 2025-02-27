<script setup>
const config = useAppConfig()
</script>

<template>
  <nav>
    <NuxtLink 
      v-for="item in config.navigation" 
      :key="item.path"
      :to="item.path"
    >
      {{ item.title }}
    </NuxtLink>
  </nav>
</template> 