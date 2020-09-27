---
title: Projectile処理
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-27 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit12/xCircuit12_projectileProcessing.html
datatable3cnp: true
summary: NearProjectileの付与と、NearProjectile処理の実行を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,12,-186)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群12]({{site.baseurl}}/command/xCircuit12/xCircuit12_command.html)

<span class="tagBlue">分岐先</span> [NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html)

`NearProjectile`の付与と、[NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html)の実行を行う。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=Projectile] ~ ~ ~ /scoreboard players tag @e[r=5,tag=Enemy] add NearProjectile|
|2|/clone ~-1 ~-2 ~ ~-1 ~-2 ~ ~-1 ~-2 ~ filtered force minecraft:command_block 5 ###ProjectileHit判定予約|条件付き|
|3|/scoreboard players set #ProjectileUpdate Global 1|条件付き|
|4|/scoreboard players test #EntityCount Global 1 *|
|5|/clone -1920 ~ ~ -1920 ~ ~ -1920 ~ ~ filtered force minecraft:command_block 5 ###リピート|条件付き|

<div class="datatable3cnp-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`Prohectile`を持つすべてのエンティティから、半径5m以内の`Enemy`を持ったエンティティが存在するとき**、以下の事柄を実行
   1. 対象エンティティに**`NearProjectile`を付与**
   2. 付与できたエンティティの数を`#EntityCount`の`Global`に代入
   3. [NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html)を実行
   4. `#ProjectileUpdate`の`Global`を1に設定
2. `#EntityCount`の`Global`が1以上であるとき、[Projectile処理]({{site.baseurl}}/comand/xCircuit12/xCircuit12_projectileProcessing.html)を再び実行
