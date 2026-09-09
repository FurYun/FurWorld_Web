<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <UButton variant="ghost" icon="lucide:arrow-left" to="/news" class="mb-8">
      返回公告
    </UButton>

    <ContentDoc :path="path" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const path = computed(() => '/news/' + (route.params.slug?.join('/') || ''))
</script>
