---
title: 领地保护
description: 保护你的建筑，设置权限，管理领地
category: systems
updatedAt: 2025-01-15
---

# 领地保护指南

领地系统可以保护你的建筑、箱子、农场不被其他人破坏。这是 FurWorld 最重要的保护机制之一。

## 创建领地

最简单的方式，一键创建 50x50 的领地：
```
/res create myhome
```

想要自定义大小？用选择工具：
```
/res select        # 进入选择模式
# 左键点第一个角，右键点对角
/res create myhome
```

## 管理你的领地

| 指令 | 用途 |
|------|------|
| `/res info` | 查看当前领地信息 |
| `/res list` | 列出你所有的领地 |
| `/res tp <名称>` | 传送到领地 |
| `/res remove <名称>` | 删除领地 |

## 设置权限

### 允许朋友进入
```
/res padd myhome Alex resident    # 添加 Alex 为居民
/res padd myhome Bob trusted      # 添加 Bob 为可信好友
```

### 移除成员
```
/res pdel myhome Alex
```

### 设置领地规则
```
/res set myhome pvp false         # 禁止 PVP
/res set myhome tnt false         # 禁止 TNT 破坏
/res set myhome flow false        # 禁止水流流动
```

## 常用标志位

| 标志位 | 作用 | 建议设置 |
|--------|------|----------|
| `build` | 放置/破坏方块 | false |
| `pvp` | 玩家对战 | false |
| `tnt` | TNT 爆炸 | false |
| `container` | 打开箱子 | false |
| `use` | 使用按钮/门 | false |

## 子领地

在大领地内划分独立区域：
```
/res subzone myhome shop1    # 创建子领地
```

## 遇到问题？

- **卡在领地边界**：`/res unstuck`
- **别人还是能偷东西**：检查 `container` 标志位
- **领地被炸了**：检查 `tnt` 和 `flow` 标志位

---

> **核心原则**：只给需要的人需要的权限。重要箱子放在子领地里更安全。
