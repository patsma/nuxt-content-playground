<script setup lang="ts">
const { data: nav } = await useAsyncData('navigation', () => 
  queryCollection('navigation').first()
)
</script>

<template>
  <nav v-if="nav?.items?.length" class="flex gap-4">
    <NuxtLink
      v-for="item in nav.items"
      :key="item.to"
      :to="item.to"
      class="hover:text-primary"
    >
      {{ item.title }}
    </NuxtLink>
  </nav>
  <div v-else class="text-gray-500">
    No navigation items found
  </div>
</template> 