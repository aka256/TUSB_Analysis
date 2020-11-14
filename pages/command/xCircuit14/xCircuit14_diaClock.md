---
title: ディアクロック処理
tags: [コマンド,スキル,白魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-14 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit14/xCircuit14_diaClock.html
datatable3c: true
summary: The Unusual SkyBlockでの白魔導士のスキルの一つであるディアの実行時の演出や、PotentialSkillの値に応じた即時回復の付与を行う。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,8,-138)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群14]({{site.baseurl}}/command/xCircuit14/xCircuit14_command.html)

The Unusual SkyBlockでの白魔導士のスキルの一つであるディアの実行時の演出や、`PotentialSkill`の値に応じた即時回復の付与を行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=Dia] ~ ~ ~ /playsound entity.rabbit.hurt master @a[r=32] ~ ~ ~ 0.5 2 0.1|リピート<br>動力が必要|
|2|/execute @e[tag=Dia] ~ ~ ~ /particle instantSpell ~ ~ ~ 0.1 0 0.1 0 1 force|条件付き|
|3|/execute @e[tag=ProjectileHit] ~ ~ ~ /effect @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=4210,score_PotentialSkill=4210,c=1] minecraft:instant_health 1 1 false|動力が必要|
|4|/execute @e[tag=ProjectileHit] ~ ~ ~ /effect @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=4211,score_PotentialSkill=4211,c=1] minecraft:instant_health 1 2 false|動力が必要|
|5|/execute @e[tag=ProjectileHit] ~ ~ ~ /effect @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=4212,score_PotentialSkill=4212,c=1] minecraft:instant_health 1 3 false|動力が必要|
|6|/execute @e[tag=ProjectileHit] ~ ~ ~ /effect @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=4213,score_PotentialSkill=4213,c=1] minecraft:instant_health 1 4 false|動力が必要|
|7|/execute @e[tag=ProjectileHit] ~ ~ ~ /effect @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=4214,score_PotentialSkill=4219,c=1] minecraft:instant_health 1 5 false|動力が必要|
|8|/fill ~-5 ~1 ~ ~ ~1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|9|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=4210,score_PotentialSkill=4219,c=1] ~ ~ ~ /playsound entity.bat.hurt master @a[r=32] ~ ~ ~ 2 0.75 1|条件付き|
|10|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=4210,score_PotentialSkill=4219,c=1] ~ ~ ~ /particle endRod ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|条件付き|
|11|/scoreboard players test #EntityCount Global * 0|
|12|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`Dia`を持つ**すべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
   2. 対象エンティティの数を`#EntityCount`の`Global`に代入
   3. 対象エンティティの座標上にパーティクルを表示
2. [ディアHIT処理部](#ディアhit処理部)が起動されているとき、それを実行
3. `#EntityCount`の`Global`が0以下であるとき、[ディアクロック処理部]({{site.baseurl}}/command/xCircuit14/xCircuit14_diaClock.html)を停止

### ディアHIT処理部

- [NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html)で起動される

1. **`ProjectileHit`を持つすべてのエンティティと同座標上に、`ProjectileHit`を持ち`PotentialSkill`が特定の値であるエンティティのうち1体に、対応したレベルの即時回復を付与** ([PotentialSkillと即時回復レベルについて](#potentialskillと即時回復レベルについて)を参照)
2. [ディアHIT処理部](#ディアhit処理部)を停止し、以下の事柄を実行
   1. `ProjectileHit`を持つすべてのエンティティと同座標上に、`ProjectileHit`を持ち`PotentialSkill`が4210 ~ 4219であるエンティティのうち1体に対し、以下の事柄を実行
      1. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
      2. 対象エンティティの座標上にパーティクルを表示

### PotentialSkillと即時回復レベルについて

`PotentialSkill`の値と即時回復のレベルは比例する。

|PotentialSkill|即時回復レベル|
|:-:|:-:|
|4210|1|
|4211|2|
|4212|3|
|4213|4|
|4214 ~ 4219|5|
