<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold mb-4">玩法教程</h1>
      <p class="text-lg text-gray-500 dark:text-gray-400">从新手到老玩家的进阶指南</p>
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
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div class="space-y-6">
      <div v-for="(section, i) in currentSections" :key="i" class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50">
        <h3 class="text-lg font-bold mb-4">{{ section.title }}</h3>
        <div class="space-y-3">
          <div v-for="(item, j) in section.items" :key="j" class="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
            <code class="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded shrink-0">{{ item.cmd }}</code>
            <span class="text-sm text-gray-600 dark:text-gray-300">{{ item.desc }}</span>
          </div>
        </div>
      </div>

      <div class="bg-violet-50 dark:bg-violet-500/10 rounded-2xl p-6 border border-violet-100 dark:border-violet-500/20">
        <div class="flex items-start gap-3">
          <UIcon name="lucide:lightbulb" class="w-5 h-5 text-violet-500 mt-0.5 shrink-0" />
          <div class="text-sm">
            <p class="font-medium text-violet-600 dark:text-violet-400">小贴士</p>
            <p class="text-gray-600 dark:text-gray-300 mt-1">
              输入 <code class="px-1 py-0.5 bg-white dark:bg-gray-800 rounded">/cmi</code> 可以打开图形化菜单，
              大部分功能都能在里面找到，非常适合新手探索！
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '玩法教程 - FurWorld' })

const activeTab = ref('common')

const tabs = [
  { id: 'common', label: '通用基础' },
  { id: 'smp', label: '休闲生存' },
  { id: 'slime', label: '粘液科技' }
]

const commonSections = [
  {
    title: '经济系统',
    items: [
      { cmd: '/money', desc: '查看你的金币余额' },
      { cmd: '/money pay <玩家> <金额>', desc: '给其他玩家转账' },
      { cmd: '/baltop', desc: '查看富豪排行榜' },
      { cmd: '/sell', desc: '出售手中的物品' },
      { cmd: '/worth <物品>', desc: '查询物品的收购价格' }
    ]
  },
  {
    title: '领地保护',
    items: [
      { cmd: '/res create <名称>', desc: '创建一个领地保护你的建筑' },
      { cmd: '/res info', desc: '查看当前所在领地的信息' },
      { cmd: '/res set <名称> pvp false', desc: '禁止领地内 PVP' },
      { cmd: '/res padd <名称> <玩家>', desc: '邀请玩家进入你的领地' }
    ]
  },
  {
    title: '基础指令',
    items: [
      { cmd: '/sethome <名称>', desc: '设置一个家的位置' },
      { cmd: '/home <名称>', desc: '传送到你设置的家' },
      { cmd: '/tpa <玩家>', desc: '请求传送到其他玩家身边' },
      { cmd: '/tpaccept', desc: '接受传送请求' },
      { cmd: '/back', desc: '返回上一个位置' },
      { cmd: '/spawn', desc: '回到出生点' }
    ]
  },
  {
    title: '社交互动',
    items: [
      { cmd: '/msg <玩家> <消息>', desc: '给其他玩家发私信' },
      { cmd: '/r <消息>', desc: '回复最近一条私信' },
      { cmd: '/ignore <玩家>', desc: '屏蔽某个玩家的消息' },
      { cmd: '/vote', desc: '给服务器投票获得奖励' }
    ]
  }
]

const smpSections = [
  {
    title: '休闲生存特色',
    items: [
      { cmd: '/kit', desc: '领取新手礼包' },
      { cmd: '/daily', desc: '领取每日登录奖励' },
      { cmd: '/rewards', desc: '查看可完成的任务和奖励' },
      { cmd: '/quests', desc: '打开任务系统' }
    ]
  },
  {
    title: '附魔与装备',
    items: [
      { cmd: '/ae enchanter', desc: '打开附魔台 GUI' },
      { cmd: '/ae combine', desc: '合成两本附魔书' },
      { cmd: '/ae extract', desc: '从物品提取附魔书' },
      { cmd: '/ae info', desc: '查看物品的附魔详情' }
    ]
  }
]

const slimeSections = [
  {
    title: '粘液科技入门',
    items: [
      { cmd: '/sf guide', desc: '获取 Slimefun 指南书' },
      { cmd: '/sf search <关键词>', desc: '搜索物品或机器' },
      { cmd: '/sf research', desc: '查看科技树和解锁进度' }
    ]
  },
  {
    title: '基础资源',
    items: [
      { cmd: '黏液锭', desc: '铁锭 + 黏液球 + 煤炭，所有机器的基础材料' },
      { cmd: '电子管', desc: '铁锭 + 红石粉，用于电力设备' },
      { cmd: '平滑石头', desc: '圆石烧两次，用于机器外壳' }
    ]
  },
  {
    title: '电力系统',
    items: [
      { cmd: '简易发电机', desc: '煤炭燃料，约 5 EU/t 输出' },
      { cmd: '能量调节器', desc: '将电力分配到附近机器' },
      { cmd: '布局示例', desc: '[发电机] → [调节器] → [机器]' }
    ]
  }
]

const currentSections = computed(() => {
  switch (activeTab.value) {
    case 'smp': return smpSections
    case 'slime': return slimeSections
    default: return commonSections
  }
})
</script>
