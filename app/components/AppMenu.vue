<script setup lang="ts">
const config = useAppConfig()
</script>

<template>
  <nav v-if="config.navigation?.length" class="flex gap-4 p-4">
    <NuxtLink 
      v-for="link in config.navigation" 
      :key="link.to"
      :to="link.to"
    >
      {{ link.title }}
    </NuxtLink>
  </nav>
</template> 