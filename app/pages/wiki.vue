<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold mb-4">Wiki 百科</h1>
      <p class="text-lg text-gray-500 dark:text-gray-400">玩转 FurWorld 的完整指南</p>
    </div>

    <div class="mb-8">
      <UInput
        v-model="searchQuery"
        placeholder="搜索文章..."
        icon="lucide:search"
        size="lg"
      />
    </div>

    <div class="mb-8 flex flex-wrap gap-2">
      <UButton
        v-for="cat in categories"
        :key="cat.value"
        :variant="selectedCategory === cat.value ? 'solid' : 'outline'"
        :color="selectedCategory === cat.value ? 'primary' : 'gray'"
        size="sm"
        @click="selectedCategory = cat.value"
      >
        {{ cat.label }}
      </UButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NuxtLink
        v-for="article in filteredArticles"
        :key="article._path"
        :to="article._path"
        class="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 hover:border-violet-200 dark:hover:border-violet-500/30 hover:shadow-lg transition-all duration-300"
      >
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
            <UIcon :name="getCategoryIcon(article.category)" class="w-5 h-5" />
          </div>
          <div class="min-w-0">
            <h3 class="font-bold group-hover:text-violet-500 transition-colors">{{ article.title }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{{ article.description }}</p>
            <div class="flex items-center gap-3 mt-2 text-xs text-gray-400">
              <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">{{ getCategoryLabel(article.category) }}</span>
              <span v-if="article.updatedAt">{{ formatDate(article.updatedAt) }}</span>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Wiki - FurWorld' })

const searchQuery = ref('')
const selectedCategory = ref('all')

const { data: articles } = await useAsyncData('wiki-articles', () =>
  queryCollection('wiki').all()
)

const categories = [
  { label: '全部', value: 'all' },
  { label: '快速入门', value: 'getting-started' },
  { label: '游戏系统', value: 'systems' },
  { label: '科技玩法', value: 'tech' },
  { label: '常见问题', value: 'faq' }
]

const filteredArticles = computed(() => {
  return (articles.value || []).filter(article => {
    const matchesSearch = !searchQuery.value ||
      article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'all' || article.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

const getCategoryIcon = (category: string) => {
  const icons: Record<string, string> = {
    'getting-started': 'lucide:rocket',
    'systems': 'lucide:cog',
    'tech': 'lucide:flask-conical',
    'faq': 'lucide:help-circle'
  }
  return icons[category] || 'lucide:file-text'
}

const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    'getting-started': '快速入门',
    'systems': '游戏系统',
    'tech': '科技玩法',
    'faq': '常见问题'
  }
  return labels[category] || '其他'
}

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('zh-CN')
}
</script>