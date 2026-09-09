<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold mb-4">加入 FurWorld</h1>
      <p class="text-lg text-gray-500 dark:text-gray-400">选择你的平台，开始冒险之旅</p>
    </div>

    <div class="mb-8">
      <div class="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all"
          :class="activeTab === tab.id
            ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'"
          @click="activeTab = tab.id"
        >
          <UIcon :name="tab.icon" class="mr-2 inline" />
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div v-if="activeTab === 'java'" class="space-y-6">
      <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50">
        <h3 class="text-xl font-bold mb-6">Java 版连接</h3>
        <div class="space-y-6">
          <div>
            <h4 class="font-medium text-gray-500 dark:text-gray-400 mb-2">休闲生存服</h4>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                <span class="text-xs text-gray-400">服务器地址</span>
                <p class="font-mono text-sm mt-1 break-all">smp.fur-island.asia</p>
              </div>
              <div class="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                <span class="text-xs text-gray-400">端口</span>
                <p class="font-mono text-sm mt-1">25565</p>
              </div>
            </div>
          </div>

          <div>
            <h4 class="font-medium text-gray-500 dark:text-gray-400 mb-2">粘液科技服</h4>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                <span class="text-xs text-gray-400">服务器地址</span>
                <p class="font-mono text-sm mt-1 break-all">slime.fur-island.asia</p>
              </div>
              <div class="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                <span class="text-xs text-gray-400">端口</span>
                <p class="font-mono text-sm mt-1">25565</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-500/10 rounded-xl">
          <div class="flex items-start gap-3">
            <UIcon name="lucide:info" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
            <div class="text-sm">
              <p class="font-medium text-blue-600 dark:text-blue-400">版本说明</p>
              <p class="text-gray-600 dark:text-gray-300 mt-1">
                服务器安装了 ViaVersion 插件，支持高版本客户端连接。推荐使用 1.20.2，但 1.21.x 也能正常进入。
                粘液科技服要求 1.21.1+。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50">
        <h3 class="text-xl font-bold mb-4">离线版 / 皮肤站</h3>
        <p class="text-gray-500 dark:text-gray-400 mb-6">
          服务器支持离线模式登录，并集成 SkinsRestorer 皮肤系统。使用离线启动器时选择"离线模式"即可，
          皮肤会自动从皮肤站同步。
        </p>
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <UIcon name="lucide:check-circle-2" class="w-5 h-5 text-green-500" />
            <span>支持 HMCL、PCL2、MultiMC 等主流启动器</span>
          </div>
          <div class="flex items-center gap-3">
            <UIcon name="lucide:check-circle-2" class="w-5 h-5 text-green-500" />
            <span>皮肤站账号自动同步皮肤</span>
          </div>
          <div class="flex items-center gap-3">
            <UIcon name="lucide:check-circle-2" class="w-5 h-5 text-green-500" />
            <span>正版玩家皮肤自动获取</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'bedrock'" class="space-y-6">
      <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50">
        <h3 class="text-xl font-bold mb-6">基岩版连接</h3>

        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
            <span class="text-xs text-gray-400">服务器地址</span>
            <p class="font-mono text-sm mt-1">fur-island.asia</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
            <span class="text-xs text-gray-400">端口</span>
            <p class="font-mono text-sm mt-1">37864</p>
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="font-medium">如何切换服务器</h4>
          <div class="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
            <p class="text-sm mb-3">进入大厅后，使用以下指令切换到对应子服：</p>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <code class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">/server smp</code>
                <span class="text-sm text-gray-500">→ 休闲生存</span>
              </div>
              <div class="flex items-center gap-2">
                <code class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">/server slime</code>
                <span class="text-sm text-gray-500">→ 粘液科技</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-orange-50 dark:bg-orange-500/10 rounded-2xl p-6 border border-orange-100 dark:border-orange-500/20">
        <div class="flex items-start gap-3">
          <UIcon name="lucide:alert-triangle" class="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
          <div class="text-sm">
            <p class="font-medium text-orange-600 dark:text-orange-400">主机平台注意事项</p>
            <p class="text-gray-600 dark:text-gray-300 mt-1">
              Switch、PS4、PS5 等主机平台可能需要修改 DNS 才能连接外部服务器。
              具体设置方法请参考主机平台的网络设置教程。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 text-center">
      <p class="text-gray-500 dark:text-gray-400 mb-4">遇到问题？</p>
      <UButton variant="outline" to="https://github.com/FurYun/FurWorld_Web/issues" target="_blank">
        查看常见问题
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '加入 - FurWorld' })

const activeTab = ref('java')

const tabs = [
  { id: 'java', label: 'Java 版', icon: 'lucide:monitor' },
  { id: 'bedrock', label: '基岩版', icon: 'lucide:smartphone' }
]
</script>
