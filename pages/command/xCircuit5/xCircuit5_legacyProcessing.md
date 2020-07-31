---
title: レガシーアイテム処理
tags: [コマンド,レガシー,アイテム]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-31 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit5/xCircuit5_legacyProcessing.html
datatable3cnp: true
summary: レガシーアイテムの使用時の演出と破壊処理を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,14,-181)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群5]({{site.baseurl}}/command/xCircuit5/xCircuit5_command.html)

レガシーアイテムの使用時の演出と破壊処理を行う。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[tag=Legacy] ~ ~ ~ /scoreboard players operation @a[c=1] Random = @a[c=1] RndMWC|
|2|/scoreboard players tag @a[tag=Legacy] add UpdateRandom|
|3|/scoreboard players operation @a[tag=Legacy] Random %= #LegacyWeight Const|
|4|/scoreboard players tag @a[tag=Legacy,score_Random=0] add LegacyBreak {SelectedItem:{tag:{Legacy:true}}}|
|5|/replaceitem entity @a[tag=LegacyBreak] slot.weapon minecraft:air|条件付き|
|6|/execute @a[tag=LegacyBreak] ~ ~ ~ /particle iconcrack ~ ~1.52 ~ 0 0 0 0.1 30 force @a[r=64] 373|条件付き|
|7|/execute @a[tag=LegacyBreak] ~ ~ ~ /playsound entity.item.break master @a[r=16] ~ ~ ~ 1 0.5 0|条件付き|
|8|/scoreboard players tag @a[tag=LegacyBreak] remove LegacyBreak|条件付き|
|9|/execute @a[tag=Legacy] ~ ~ ~ /playsound entity.wither.death master @a ~ ~ ~ 0.3 2 0|
|10|/execute @a[tag=Legacy] ~ ~ ~ /particle endRod ~ ~1.52 ~ 0.1 0.1 0.1 0.3 90 force|
|11|/scoreboard players tag @a[tag=Legacy] remove Legacy|

<div class="datatable3cnp-end"></div>

## 詳細

1. `Legacy`を持つすべてのプレイヤーの`Random`に`RndMWC`を代入
2. `Legacy`を持つすべてのプレイヤーに`UpdateRandom`を付与
3. `Legacy`を持つすべてのプレイヤーに対して、\\(\text{Random}=\text{Random}\div 7\text{(LegacyWeight)}\\)を実行
4. `Legacy`を持ち、`Random`が0以下であり、メインハンドに`Legacy`タグを持つアイテムを持っているすべてのプレイヤーに対し、`LegacyBreak`を付与し、以下の事柄を実行
   1. `LegacyBreak`を持っているすべてのプレイヤーのメインハンドに持っているアイテムを空気ブロックに変更 (要はレガシーアイテムを削除している。スタックされたレガシーアイテムが丸ごと消去されてしまう原因?もここにある。)
   2. `LegacyBreak`を持つプレイヤーに対して、演出を実行
   3. `LegacyBreak`を持つすべてのプレイヤーから`LegacyBreak`を削除
5. `Legacy`を持つすべてのプレイヤーに対して、演出を実行
6. `Legacy`を持つすべてのプレイヤーから`Legacy`を削除
