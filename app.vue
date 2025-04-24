<template>
  <div class="app-layout">
    <Navigation class="app-nav" />
    <main class="app-main">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
.app-layout {
  display: flex;
  min-height: 100vh;
}

.app-nav {
  width: 300px;
  padding: 20px;
  border-right: 1px solid #e5e7eb;
}

.app-main {
  flex: 1;
  padding: 20px;
}
</style> 