<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <UButton variant="ghost" icon="lucide:arrow-left" to="/wiki" class="mb-8">
      返回 Wiki
    </UButton>

    <ContentDoc :path="path" v-if="path !== '/wiki/index'" />
    <div v-else class="text-center py-12">
      <UIcon name="lucide:book-open" class="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
      <h2 class="text-2xl font-bold mb-2">Wiki 百科</h2>
      <p class="text-gray-500 dark:text-gray-400">请从左侧列表选择一篇文章阅读</p>
    </div>
  </div>
</template>

<script setup lang="ts>
const route = useRoute()
const path = computed(() => {
  const slug = route.params.slug as string[] | undefined
  if (!slug || slug.length === 0) return '/wiki/index'
  return '/wiki/' + slug.join('/')
})
</script>