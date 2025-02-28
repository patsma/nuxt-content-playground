<script setup lang="ts">
const { data: nav } = await useAsyncData('navigation', () => 
  queryContent('navigation').findOne()
)
</script>

<template>
  <nav v-if="nav?.items?.length" class="flex gap-4">
    <NuxtLink
      v-for="item in nav.items"
      :key="item.to"
      :to="item.to"
      class="flex items-center gap-1 hover:text-primary"
    >

      {{ item.title }}
    </NuxtLink>
  </nav>
</template> 