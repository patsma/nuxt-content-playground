<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
    <div class="grid">
      <div class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit laborum perferendis consequatur quidem amet, deserunt nesciunt soluta explicabo. Eius tempore eaque, obcaecati adipisci necessitatibus enim temporibus alias cum ducimus.
      </div>
      <AppMenu />
        <ContentRenderer
      v-if="page"
      :value="page"
        />
    </div>

</template>
