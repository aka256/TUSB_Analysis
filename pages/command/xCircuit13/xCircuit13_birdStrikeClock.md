---
title: バードストライククロック処理
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-06 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit13/xCircuit13_birdStrikeClock.html
datatable3c: true
summary: 狩人のスキルの一つであるバードストライクの演出やFallDownの付与などを行う。なお、スキル効果の処理はバードストライク効果クロック処理にて行われる。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,13,-140)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)

<span class="tagBlue">分岐先</span> [バードストライク効果クロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_birdStrikeEffectClock.html)

狩人のスキルの一つであるバードストライクの演出や`FallDown`の付与などを行う。なお、スキル効果の処理は[バードストライク効果クロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_birdStrikeEffectClock.html)にて行われる。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=BirdStrike] ~ ~ ~ /playsound block.grass.fall master @a[r=48] ~ ~ ~ 4 1.6 0|リピート<br>動力が必要|
|2|/execute @e[tag=BirdStrike] ~ ~ ~ /particle sweepAttack ~ ~-0.3 ~ 0 0 0 0 1 force|条件付き|
|3|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3240,score_PotentialSkill=3249,c=1] ~ ~ ~ /tp @e[dx=0,c=1] @e[dx=0,c=1]|動力が必要|
|4|/execute @e[tag=ProjectileHit] ~ ~ ~ /scoreboard players tag @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3240,score_PotentialSkill=3249,c=1] add FallDown|条件付き|
|5|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3240,score_PotentialSkill=3249,c=1] ~ ~ ~ /playsound entity.firework.twinkle_far master @a[r=32] ~ ~ ~ 2 0.7 0.2|条件付き|
|6|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3240,score_PotentialSkill=3249,c=1] ~ ~ ~ /particle cloud ~ ~ ~ 2 3 2 0.1 90 force|条件付き|
|7|/fill ~-4 ~1 ~ ~ ~1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|8|/fill -1921 ~-2 -140 -1921 ~-2 -140 minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###バードストライク効果クロック|条件付き|
|9|/scoreboard players test #EntityCount Global * 0|
|10|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. `BirdStrike`を持つすべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径48m以内のすべてのプレイヤーに効果音を鳴らす
   2. 対象エンティティの数を`#EntityCount`の`Global`に代入
   3. 対象エンティティの座標上にパーティクルを表示
2. [バードストライクHIT処理部](#バードストライクhit処理部)が起動されているとき、これを実行
3. **`#EntityCount`の`Global`が0以下であるとき**、[バードストライククロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_birdStrikeClock.html)を停止

### バードストライクHIT処理部

- [NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html)で起動される

1. **`ProjectileHit`を持つすべてのエンティティと同座標上にある、`ProjectileHit`を持ち`PotentialSkill`が3240 ~ 3249であるエンティティを一体選び**、そのエンティティに対し、以下の事柄を実行
   1. 対象エンティティを対象エンティティに移動させる
   2. 対象エンティティに**`FallDown`を付与**
   3. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
   4. 対象エンティティの座標上にパーティクルを表示
2. [バードストライクHIT処理部](#バードストライクhit処理部)を停止
3. [バードストライク効果クロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_birdStrikeEffectClock.html)の実行を予約
