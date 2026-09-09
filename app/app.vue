<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'zh-CN'
  }
})

useSeoMeta({
  title: 'FurWorld - 面向福瑞亚文化社区的 Minecraft 服务器',
  description: 'FurWorld 是一个温暖的福瑞亚文化 Minecraft 社区，支持 Java 版、基岩版、离线版跨平台互通。'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
