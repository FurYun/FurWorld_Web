<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-950">
    <header class="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 backdrop-blur-md bg-white/80 dark:bg-gray-950/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center gap-2">
            <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">F</div>
              <span class="font-bold text-lg">FurWorld</span>
            </NuxtLink>
          </div>

          <nav class="hidden md:flex items-center gap-1">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              active-class="!bg-violet-50 dark:!bg-violet-500/10 !text-violet-600 dark:!text-violet-400"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>

          <div class="flex items-center gap-3">
            <UButton
              icon="lucide:github"
              variant="ghost"
              size="sm"
              to="https://github.com/FurYun/FurWorld_Web"
              target="_blank"
            />
            <UButton
              icon="lucide:menu"
              variant="ghost"
              size="sm"
              class="md:hidden"
              @click="mobileMenuOpen = !mobileMenuOpen"
            />
          </div>
        </div>
      </div>

      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div class="px-4 py-3 space-y-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="block px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">F</div>
              <span class="font-bold text-lg">FurWorld</span>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 max-w-md">
              一个温暖的福瑞亚文化 Minecraft 社区，无论你是萌新还是老玩家，都能在这里找到属于自己的角落。
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-sm mb-4">快速链接</h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/about" class="text-gray-500 dark:text-gray-400 hover:text-violet-500 transition-colors">服务器介绍</NuxtLink></li>
              <li><NuxtLink to="/join" class="text-gray-500 dark:text-gray-400 hover:text-violet-500 transition-colors">加入指南</NuxtLink></li>
              <li><NuxtLink to="/guide" class="text-gray-500 dark:text-gray-400 hover:text-violet-500 transition-colors">玩法教程</NuxtLink></li>
              <li><NuxtLink to="/wiki" class="text-gray-500 dark:text-gray-400 hover:text-violet-500 transition-colors">Wiki 百科</NuxtLink></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-sm mb-4">社区</h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="https://github.com/FurYun/FurWorld_Web" target="_blank" class="text-gray-500 dark:text-gray-400 hover:text-violet-500 transition-colors flex items-center gap-2">GitHub</NuxtLink></li>
              <li><NuxtLink to="/news" class="text-gray-500 dark:text-gray-400 hover:text-violet-500 transition-colors">公告动态</NuxtLink></li>
            </ul>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-xs text-gray-400 dark:text-gray-500">
            © {{ new Date().getFullYear() }} FurWorld. 面向福瑞亚文化社区的 Minecraft 服务器
          </p>
          <p class="text-xs text-gray-400 dark:text-gray-500">
            Built with Nuxt & Nuxt UI
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navItems = [
  { label: '介绍', to: '/about' },
  { label: '加入', to: '/join' },
  { label: '教程', to: '/guide' },
  { label: 'Wiki', to: '/wiki' },
  { label: '公告', to: '/news' }
]
</script>
