<template>
  <nav class="navigation">
    <ul class="nav-list">
      <li v-for="item in navigation?.items" :key="item.title" class="nav-item">
        <!-- Regular nav item -->
        <NuxtLink 
          v-if="!item.children" 
          :to="item.to"
          class="nav-link"
          active-class="active"
        >
          {{ item.title }}
        </NuxtLink>
        
        <!-- Accordion item -->
        <div v-else class="accordion">
          <button 
            class="accordion-button"
            @click="toggleAccordion(item)"
            :class="{ 'active': isOpen(item) }"
          >
            {{ item.title }}
            <span class="icon" :class="{ 'open': isOpen(item) }">▼</span>
          </button>
          
          <ul 
            class="accordion-content"
            :class="{ 'open': isOpen(item) }"
          >
            <li v-for="child in item.children" :key="child.title">
              <NuxtLink 
                :to="child.to"
                class="nav-link"
                active-class="active"
              >
                {{ child.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const { data: navigation } = await useAsyncData('navigation', () => 
  queryCollection('navigation').where({ id: 'main' }).findOne()
)

const openItems = ref(new Set())

const toggleAccordion = (item) => {
  if (openItems.value.has(item.title)) {
    openItems.value.delete(item.title)
  } else {
    openItems.value.add(item.title)
  }
}

const isOpen = (item) => openItems.value.has(item.title)
</script>

<style scoped>
.navigation {
  width: 100%;
  max-width: 300px;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 4px 0;
}

.nav-link {
  display: block;
  padding: 8px 16px;
  color: #374151;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.nav-link:hover,
.nav-link.active {
  background-color: #f3f4f6;
}

.accordion-button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: #374151;
  font-size: inherit;
  text-align: left;
  border-radius: 6px;
}

.accordion-button:hover,
.accordion-button.active {
  background-color: #f3f4f6;
}

.icon {
  font-size: 12px;
  transition: transform 0.2s;
}

.icon.open {
  transform: rotate(-180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  padding-left: 16px;
}

.accordion-content.open {
  max-height: 500px;
}
</style> 