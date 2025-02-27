<script setup lang="ts">
const { menu } = useAppConfig()
</script>

<template>
  <nav v-if="menu?.items?.length" class="flex gap-4 py-4">
    <NuxtLink 
      v-for="(item, index) in menu.items" 
      :key="index"
      :to="item.path"
      class="text-gray-900 hover:text-primary transition-colors"
    >
      {{ item.title }}
    </NuxtLink>
  </nav>
</template> 