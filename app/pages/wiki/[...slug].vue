<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <UButton variant="ghost" icon="lucide:arrow-left" to="/wiki" class="mb-8">
      返回 Wiki
    </UButton>

    <ContentDoc :path="path" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const path = computed(() => '/wiki/' + (route.params.slug?.join('/') || ''))
</script>
