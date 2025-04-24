<template>
  <div class="min-h-screen bg-gray-50">
    <header class="border-b bg-white">
      <div class="container mx-auto px-4 py-4">
        <AppNavigation />
      </div>
    </header>
    <main class="container mx-auto px-4 py-8">
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