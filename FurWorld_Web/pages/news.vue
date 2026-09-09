<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold mb-4">公告与新闻</h1>
      <p class="text-lg text-gray-500 dark:text-gray-400">服务器最新动态</p>
    </div>

    <ContentList :path="'/news'" v-slot="{ list }">
      <div class="space-y-6">
        <NuxtLink
          v-for="article in list"
          :key="article._path"
          :to="article._path"
          class="block bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 hover:border-violet-200 dark:hover:border-violet-500/30 hover:shadow-lg transition-all duration-300"
        >
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shrink-0">
              <UIcon name="lucide:megaphone" class="w-5 h-5" />
            </div>
            <div class="min-w-0">
              <h3 class="text-xl font-bold">{{ article.title }}</h3>
              <p class="text-gray-500 dark:text-gray-400 mt-2">{{ article.description }}</p>
              <p class="text-sm text-gray-400 mt-3">
                <UIcon name="lucide:calendar" class="mr-1 inline" />
                {{ formatDate(article.updatedAt) }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '公告 - FurWorld' })

const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
