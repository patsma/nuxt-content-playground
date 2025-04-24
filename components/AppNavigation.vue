<script setup lang="ts">
const navigation = await useNavigation()

// Type for navigation items
interface NavigationItem {
  label: string
  href: string
  icon?: string
  children?: NavigationItem[]
}

// Convert navigation items to dropdown items format
const convertToDropdownItems = (items: NavigationItem[]) => {
  return items.map(item => ({
    label: item.label,
    icon: item.icon,
    to: item.href,
    ...(item.children && { items: convertToDropdownItems(item.children) })
  }))
}

const primaryMenuItems = computed(() => {
  if (!navigation.value?.primary) return []
  return convertToDropdownItems(navigation.value.primary)
})
</script>

<template>
  <nav class="flex items-center gap-4">
    <template v-for="item in primaryMenuItems" :key="item.to">
      <!-- Items with children get dropdown menu -->
      <UDropdown v-if="item.items" :items="item.items">
        <UButton
          :icon="item.icon"
          :label="item.label"
          color="gray"
          variant="ghost"
        />
      </UDropdown>
      <!-- Items without children get simple button -->
      <UButton
        v-else
        :to="item.to"
        :icon="item.icon"
        :label="item.label"
        color="gray"
        variant="ghost"
      />
    </template>
  </nav>
</template> 