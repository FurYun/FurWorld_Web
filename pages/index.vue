<template>
  <div>
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMjgsMTI4LDEyOCwwLjA4KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-60" />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-medium mb-8">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            服务器运行中
          </div>

          <h1 class="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span class="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">FurWorld</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            这里不只是一个服务器，更是一个家。<br class="hidden sm:block" />
            无论你是喜欢悠闲建造，还是痴迷科技自动化，都能找到属于你的世界。
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <UButton
              size="xl"
              to="/join"
              class="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 px-8"
            >
              立即加入
              <UIcon name="lucide:arrow-right" class="ml-2" />
            </UButton>
            <UButton
              size="xl"
              variant="outline"
              to="/about"
              class="px-8"
            >
              了解更多
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">为什么选择 FurWorld</h2>
          <p class="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            我们用心打造每一个细节，只为给你最好的体验
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(feature, i) in features"
            :key="i"
            class="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50 hover:border-violet-200 dark:hover:border-violet-500/30"
          >
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <UIcon :name="feature.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
            <p class="text-gray-500 dark:text-gray-400 leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">两个世界，一份快乐</h2>
          <p class="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            想要悠闲种田？还是想要硬核科技？成年人不做选择，两个都要。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="relative group bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-500/5 dark:to-teal-500/5 rounded-2xl p-8 border border-emerald-100 dark:border-emerald-500/20 hover:shadow-xl transition-all duration-300">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-bl-full opacity-10" />
            <div class="relative">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-4">
                <UIcon name="lucide:leaf" class="w-3 h-3" />
                Java / 基岩版
              </div>
              <h3 class="text-2xl font-bold mb-3">休闲生存服</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                经典生存体验，建造你梦想中的家园，探索广阔世界，结交志同道合的朋友。
              </p>
              <div class="space-y-2 text-sm">
                <div class="flex items-center gap-3">
                  <UIcon name="lucide:check-circle-2" class="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>温馨的社区氛围</span>
                </div>
                <div class="flex items-center gap-3">
                  <UIcon name="lucide:check-circle-2" class="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>完善的领地保护系统</span>
                </div>
                <div class="flex items-center gap-3">
                  <UIcon name="lucide:check-circle-2" class="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>丰富的玩法内容</span>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t border-emerald-200/50 dark:border-emerald-500/20">
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded">smp.fur-island.asia</span>
                </div>
              </div>
            </div>
          </div>

          <div class="relative group bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-500/5 dark:to-amber-500/5 rounded-2xl p-8 border border-orange-100 dark:border-orange-500/20 hover:shadow-xl transition-all duration-300">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-400 rounded-bl-full opacity-10" />
            <div class="relative">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-medium mb-4">
                <UIcon name="lucide:flask-conical" class="w-3 h-3" />
                Slimefun
              </div>
              <h3 class="text-2xl font-bold mb-3">粘液科技服</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                像玩模组一样体验科技的魅力，自动化生产线、电力系统、魔法应有尽有。
              </p>
              <div class="space-y-2 text-sm">
                <div class="flex items-center gap-3">
                  <UIcon name="lucide:check-circle-2" class="w-4 h-4 text-orange-500 shrink-0" />
                  <span>50+ 自定义附魔</span>
                </div>
                <div class="flex items-center gap-3">
                  <UIcon name="lucide:check-circle-2" class="w-4 h-4 text-orange-500 shrink-0" />
                  <span>完整的科技树系统</span>
                </div>
                <div class="flex items-center gap-3">
                  <UIcon name="lucide:check-circle-2" class="w-4 h-4 text-orange-500 shrink-0" />
                  <span>自动化与魔法并存</span>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t border-orange-200/50 dark:border-orange-500/20">
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded">slime.fur-island.asia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">支持全平台</h2>
          <p class="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            无论你用什么设备，都能和朋友一起玩
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="(platform, i) in platforms" :key="i" class="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/50">
            <UIcon :name="platform.icon" class="w-10 h-10 mx-auto mb-3 text-gray-600 dark:text-gray-300" />
            <p class="font-medium text-sm">{{ platform.name }}</p>
            <p class="text-xs text-gray-400 mt-1">{{ platform.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6">准备好了吗？</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
          只需几步就能加入我们，开始你的 FurWorld 之旅
        </p>
        <UButton size="xl" to="/join" class="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 px-8">
          开始冒险
          <UIcon name="lucide:arrow-right" class="ml-2" />
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'FurWorld - 面向福瑞亚文化社区的 Minecraft 服务器'
})

const features = [
  {
    icon: 'lucide:heart',
    title: '温暖的社区',
    desc: '这里是福瑞亚爱好者的聚集地，大家友善包容，无论你是萌新还是老玩家都能快速融入。'
  },
  {
    icon: 'lucide:monitor-smartphone',
    title: '全平台互通',
    desc: 'Java 版、基岩版、离线版、正版、皮肤站全部支持，跨平台一起玩不是梦。'
  },
  {
    icon: 'lucide:shield-check',
    title: '公平安全',
    desc: '完善的反作弊系统和数据保护机制，让你安心享受游戏，不用担心被捣乱。'
  },
  {
    icon: 'lucide:sparkles',
    title: '丰富玩法',
    desc: '从休闲生存到科技自动化，从附魔系统到魔法体验，总有你喜欢的玩法。'
  },
  {
    icon: 'lucide:mic',
    title: '语音聊天',
    desc: '内置语音系统，跨平台语音互通，和朋友面对面交流更方便。'
  },
  {
    icon: 'lucide:palette',
    title: '皮肤自由',
    desc: '支持皮肤站和自定义皮肤，让你的角色独一无二。'
  }
]

const platforms = [
  { icon: 'lucide:monitor', name: 'Java 版', desc: '离线/正版/皮肤站' },
  { icon: 'lucide:smartphone', name: '基岩版', desc: 'iOS/Android/主机' },
  { icon: 'lucide:shield', name: '离线模式', desc: '无需正版也能玩' },
  { icon: 'lucide:paintbrush', name: '皮肤站', desc: '自定义你的形象' }
]
</script>
