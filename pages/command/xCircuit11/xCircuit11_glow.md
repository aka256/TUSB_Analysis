---
title: グロウ実行
tags: [コマンド,スキル,黒魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-14 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_glow.html
datatable2c: true
summary: 黒魔導士のスキルの1つであるグロウを実行する。特定範囲内の作物に対して、成長後の作物に置換処理を行う。置換対象ブロックについては置換対象ブロックについてを参照。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,15,-157)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるグロウを実行する。特定範囲内の作物に対して、成長後の作物に置換処理を行う。置換対象ブロックについては[置換対象ブロックについて](#置換対象ブロックについて)を参照。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/scoreboard players tag @a[score_ActivatedSkill_min=5030,score_ActivatedSkill=5039] add Glow|
|2|/execute @a[tag=Glow] ~ ~ ~ /playsound block.grass.break master @a[r=16] ~ ~ ~ 1 0.5 0|
|3|/execute @a[tag=Glow] ~ ~ ~ /particle happyVillager ~ ~0.3 ~ 2 0 2 0 90 force|
|4|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:wheat 7 replace minecraft:wheat|
|5|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:carrots 7 replace minecraft:carrots|
|6|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:potatoes 7 replace minecraft:potatoes|
|7|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:pumpkin_stem 7 replace minecraft:pumpkin_stem|
|8|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:melon_stem 7 replace minecraft:melon_stem|
|9|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:nether_wart 3 replace minecraft:nether_wart|
|10|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:beetroots 3 replace minecraft:beetroots|
|11|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:cocoa 8 replace minecraft:cocoa 0|
|12|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:cocoa 9 replace minecraft:cocoa 1|
|13|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:cocoa 10 replace minecraft:cocoa 2|
|14|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:cocoa 11 replace minecraft:cocoa 3|
|15|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:cocoa 8 replace minecraft:cocoa 4|
|16|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:cocoa 9 replace minecraft:cocoa 5|
|17|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:cocoa 11 replace minecraft:cocoa 7|
|18|/execute @a[tag=Glow] ~-1.5 ~-1 ~-1.5 /fill ~ ~ ~ ~3 ~2 ~3 minecraft:cocoa 10 replace minecraft:cocoa 6|
|19|/scoreboard players tag @a[tag=Glow] remove Glow|

<div class="datatable2c-end"></div>

## 詳細

1. **`ActivatedSkill`が5030 ~ 5039**であるすべてのプレイヤーに、**`Glow`を付与**
2. **`Glow`を持つすべてのプレイヤー**に対して、以下の事柄を実行
   1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
   2. 対象プレイヤーの座標上で、**パーティクルを表示**
   3. 対象プレイヤーの足元のブロックを中心として、**xz軸方向に1.5m、足元のブロックからy軸方向に3mのブロックに対して、置換処理を行う。**対象ブロックは[置換対象ブロックについて](#置換対象ブロックについて)を参照
   4. `Glow`を削除

### 置換対象ブロックについて

|置換前ブロックID|置換前メタデータ値|置換後ブロック|置換前メタデータ値|
|-|:-:|-|:-:|
|minecraft:wheat||minecraft:wheat|7|
|minecraft:carrots||minecraft:carrots|7|
|minecraft:potatoes||minecraft:potatoes|7|
|minecraft:pumpkin_stem||minecraft:pumpkin_stem|7|
|minecraft:melon_stem||minecraft:melon_stem|7|
|minecraft:nether_wart||minecraft:nether_wart|3|
|minecraft:beetroots||minecraft:beetroots|3|
|minecraft:cocoa|0|minecraft:cocoa|8|
|minecraft:cocoa|1|minecraft:cocoa|9|
|minecraft:cocoa|2|minecraft:cocoa|10|
|minecraft:cocoa|3|minecraft:cocoa|11|
|minecraft:cocoa|4|minecraft:cocoa|8|
|minecraft:cocoa|5|minecraft:cocoa|9|
|minecraft:cocoa|6|minecraft:cocoa|10|
|minecraft:cocoa|7|minecraft:cocoa|11|
