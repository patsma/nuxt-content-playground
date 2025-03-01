<script setup lang="ts">
const { data: nav } = await useAsyncData('navigation', () => 
  queryCollection('navigation').all()
)
</script>

<template>
  <nav v-if="nav?.length" class="flex gap-4">
    <NuxtLink
      v-for="item in nav"
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