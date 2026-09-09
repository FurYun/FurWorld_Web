<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold mb-4">关于 FurWorld</h1>
      <p class="text-lg text-gray-500 dark:text-gray-400">一个为福瑞亚文化社区打造的 Minecraft 服务器</p>
    </div>

    <div class="space-y-12">
      <section>
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-500/10 flex items-center justify-center">
            <UIcon name="lucide:info" class="w-4 h-4 text-violet-500" />
          </div>
          我们是谁
        </h2>
        <div class="prose prose-gray dark:prose-invert max-w-none">
          <p>
            FurWorld 是一个专为国内福瑞亚文化爱好者打造的 Minecraft 服务器社区。我们相信游戏不只是打怪升级，
            更是和志同道合的朋友一起创造美好回忆的地方。
          </p>
          <p>
            这里没有尔虞我诈，没有内卷竞争，只有纯粹的游戏乐趣和温馨的社区氛围。
            无论你是想安静地建造一个小屋，还是和朋友一起探索地下世界，FurWorld 都能满足你。
          </p>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center">
            <UIcon name="lucide:leaf" class="w-4 h-4 text-emerald-500" />
          </div>
          休闲生存服
        </h2>
        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50">
          <div class="grid grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <span class="text-gray-400">Java 版本</span>
              <p class="font-mono">1.20.2 (支持高版本)</p>
            </div>
            <div>
              <span class="text-gray-400">地址</span>
              <p class="font-mono">smp.fur-island.asia</p>
            </div>
            <div>
              <span class="text-gray-400">基岩版</span>
              <p class="font-mono">1.21.40</p>
            </div>
            <div>
              <span class="text-gray-400">端口</span>
              <p class="font-mono">25565 (Java) / 37864 (基岩)</p>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-300">
            经典的生存模式，建造你的梦想家园，探索未知世界。完善的领地保护系统让你安心创作，
            丰富的经济系统让你可以和朋友交易资源。适合喜欢悠闲游戏节奏的玩家。
          </p>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center">
            <UIcon name="lucide:flask-conical" class="w-4 h-4 text-orange-500" />
          </div>
          粘液科技服
        </h2>
        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50">
          <div class="grid grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <span class="text-gray-400">Java 版本</span>
              <p class="font-mono">1.21.1+</p>
            </div>
            <div>
              <span class="text-gray-400">地址</span>
              <p class="font-mono">slime.fur-island.asia</p>
            </div>
            <div>
              <span class="text-gray-400">基岩版</span>
              <p class="font-mono">1.21.40</p>
            </div>
            <div>
              <span class="text-gray-400">端口</span>
              <p class="font-mono">25565 (Java) / 37864 (基岩)</p>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-300">
            体验像模组一样的科技系统，Slimefun 提供了完整的科技树、自动化生产线、电力系统、
            甚至还有魔法分类。从挖矿自动化到跨维度传送，无限可能等你探索。
          </p>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center">
            <UIcon name="lucide:users" class="w-4 h-4 text-blue-500" />
          </div>
          社区准则
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(rule, i) in rules" :key="i" class="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center shrink-0">
              <UIcon name="lucide:check" class="w-4 h-4 text-green-500" />
            </div>
            <p class="text-sm">{{ rule }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '关于 - FurWorld' })

const rules = [
  '尊重每一位玩家，友善交流',
  '禁止作弊和利用游戏漏洞',
  '保护他人的建筑和财产',
  '遵守社区管理者的工作',
  '遇到问题及时联系管理员'
]
</script>
