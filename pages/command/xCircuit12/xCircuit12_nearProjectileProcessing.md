---
title: NearProjectile処理
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-10-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit12/xCircuit12_nearProjectileProcessing.html
datatable3c: true
summary: NearProjectileが付与されていて、かつダメージを受けたエンティティが存在するときに、特定のスキルのHIT処理の実行と、Projectile処理を実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-186)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群12]({{site.baseurl}}/command/xCircuit12/xCircuit12_command.html)

`NearProjectile`が付与されていて、かつダメージを受けたエンティティが存在するときに、特定のスキルのHIT処理を実行する。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @e[tag=NearProjectile] add ProjectileHit {HurtTime:10s}|
|2|/clone ~-1 ~4 ~ ~-1 ~4 ~ ~-1 ~4 ~ filtered force minecraft:command_block 5 ###ProjectileHitリセット予約|条件付き|
|3|/fill ~2 ~1 ~ ~10 ~1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0|条件付き|
|4|/scoreboard players tag @e[tag=NearProjectile] remove NearProjectile|
|5|/execute @e[tag=ProjectileHit,score_PotentialSkill_min=1220,score_PotentialSkill=1229,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1918 9 -143 /fill ~ ~ ~ ~4 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 #真空斬りHIT処理|動力が必要|
|6|/execute @e[tag=ProjectileHit,score_PotentialSkill_min=2200,score_PotentialSkill=2209,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1919 12 -143 /fill ~ ~ ~ ~13 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 #手裏剣HIT処理|動力が必要|
|7|/execute @e[tag=ProjectileHit,score_PotentialSkill_min=2230,score_PotentialSkill=2239,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1918 15 -143 /fill ~ ~ ~ ~5 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 #居縮HIT処理|動力が必要|
|8|/execute @e[tag=ProjectileHit,score_PotentialSkill_min=3210,score_PotentialSkill=3219,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1918 14 -141 /fill ~ ~ ~ ~6 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 #チェインアローHIT処理|動力が必要|
|9|/execute @e[tag=ProjectileHit,score_PotentialSkill_min=3230,score_PotentialSkill=3239,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1919 17 -141 /fill ~ ~ ~ ~6 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 #ブラストショットHIT処理|動力が必要|
|10|/execute @e[tag=ProjectileHit,score_PotentialSkill_min=3240,score_PotentialSkill=3249,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1918 14 -140 /fill ~ ~ ~ ~4 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 #バードストライクHIT処理|動力が必要|
|11|/execute @e[tag=ProjectileHit,score_PotentialSkill_min=3260,score_PotentialSkill=3269,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1918 17 -140 /fill ~ ~ ~ ~7 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 #フェイタルショットHIT処理|動力が必要|
|12|/execute @e[tag=ProjectileHit,score_PotentialSkill_min=4210,score_PotentialSkill=4219,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1918 9 -138 /fill ~ ~ ~ ~5 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 #ディアHIT処理|動力が必要|
|13|/fill ~-8 ~1 ~ ~ ~1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|

<div class="datatable3c-end"></div>

### ProjectileHitリセットコマンド

<span class="tagYellow">位置</span> (-1920,14,-186)

```mcfunction
/scoreboard players tag @e[tag=ProjectileHit] remove ProjectileHit
```

## 詳細

1. **`NearProjectile`を持ち**、`HurtTime`が10であるエンティティが存在するとき、そのエンティティに対し以下の事柄を実行
   1. 対象エンティティに`ProjectileHit`を付与
   2. [ProjectileHitリセット](#projectilehitリセット)の実行を予約
   3. [HIT処理実行部](#hit処理実行部)を起動
2. `NearProjectile`を持つすべてのエンティティから、`NearProjectile`を削除
3. [HIT処理実行部](#hit処理実行部)が起動されているとき、それを実行

### HIT処理実行部

- `PojectileHit`を持ち、`PotentialSkill`が特定の値であるプレイヤーが存在するとき、以下のHIT処理部を起動

|PotentialSkill|起動部|
|:-:|-|
|1220 ~ 1229|[真空斬りクロック処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_aerialSlashClock.html)の[真空斬りHIT処理部]({{site.baseurl}}/command/xCircuit12/xCircuit12_aerialSlashClock.html#真空斬りhit処理部)|
|2200 ~ 2209|[手裏剣クロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_syurikenClock.html)の[手裏剣HIT処理部]({{site.baseurl}}/command/xCircuit13/xCircuit13_syurikenClock.html#手裏剣hit処理部)|
|2230 ~ 2239|[居縮クロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_isukumiClock.html)の[居縮HIT処理部]({{site.baseurl}}/command/xCircuit13/xCircuit13_isukumiClock.html#居縮hit処理部)|
|3210 ~ 3219|[チェインアロークロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_chainArrowClock.html)の[チェインアローHIT処理部]({{site.baseurl}}/command/xCircuit13/xCircuit13_chainArrowClock.html#チェインアローhit処理部)|
|3230 ~ 3239|[ブラストショットクロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_blastShotClock.html)の[ブラストショットHIT処理部]({{site.baseurl}}/command/xCircuit13/xCircuit13_blastShotClock.html#ブラストショットhit処理部)|
|3240 ~ 3249|[バードストライククロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_birdStrikeClock.html)の[バードストライクHIT処理部]({{site.baseurl}}/command/xCircuit13/xCircuit13_birdStrikeClock.html#バードストライクhit処理部)|
|3260 ~ 3269|[フェイタルショットクロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_fatalShotClock.html)の[フェイタルショットHIT処理部]({{site.baseurl}}/command/xCircuit13/xCircuit13_fatalShotClock.html#フェイタルショットhit処理部)|
|4210 ~ 4219|[ディアクロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_deiaClock.html)の[ディアHIT処理部]({{site.baseurl}}/command/xCircuit14/xCircuit14_deiaClock.html#ディアhit処理部)|

### ProjectileHitリセット

- `ProjectileHit`を持つすべてのエンティティから`ProjectileHit`を削除
