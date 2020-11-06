---
title: ブラストショットクロック処理
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-06 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit13/xCircuit13_blastShotClock.html
datatable3c: true
summary: 狩人のスキルの一つであるブラストショットの演出や攻撃処理、攻撃時の爆風で地形破壊が起こらないようmobGriefingの変更などを行う。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,16,-141)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)

狩人のスキルの一つであるブラストショットの演出や攻撃処理、攻撃時の爆風で地形破壊が起こらないよう`mobGriefing`の変更などを行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=BlastShot] ~ ~ ~ /particle largesmoke ~ ~0.2 ~ 0 0 0 0 0 force|リピート<br>動力が必要|
|2|/gamerule mobGriefing false|動力が必要|
|3|/difficulty easy|条件付き|
|4|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3230,score_PotentialSkill=3239,c=1] ~ ~ ~ /playsound entity.firework.twinkle_far master @a[r=32] ~ ~ ~ 2 0.7 0.2|条件付き|
|5|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3230,score_PotentialSkill=3239,c=1] ~ ~ ~ /particle cloud ~ ~1 ~ 1 1 1 0.1 90 force|条件付き|
|6|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3230,score_PotentialSkill=3230,c=1] ~ ~ ~ /summon Creeper ~ ~0.5 ~ {CustomName:"ブラストショット",ExplosionRadius:3b,Fuse:0s,ignited:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}|動力が必要|
|7|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3231,score_PotentialSkill=3239,c=1] ~ ~ ~ /summon Creeper ~ ~0.5 ~ {CustomName:"ブラストショット",ExplosionRadius:7b,Fuse:0s,ignited:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}|動力が必要|
|8|/fill ~-6 ~1 ~ ~ ~1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|9|/scoreboard players test #EntityCount Global * 0|
|10|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. `BlastShot`を持つすべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティの座標上にパーティクルを表示
   2. 対象エンティティの数を`#EntityCount`の`Global`に代入
2. [ブラストショットHIT処理部](#ブラストショットhit処理部)が起動されているとき、これを実行
3. **`#EntityCount`の`Global`が0以下であるとき**、[ブラストショットクロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_blastShotClock.html)を停止

### ブラストショットHIT処理部

- [NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html)で起動される

1. `mobGriefing`を`false`に変更
2. ゲームモードを`easy`に変更
3. `ProjectileHit`を持つすべてのエンティティと同座標上にある、`ProjectileHit`を持ち`PotentialSkill`が3230 ~ 3239であるエンティティを一体選び、そのエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
   2. 対象エンティティの座標上にパーティクルを表示
4. `ProjectileHit`を持つすべてのエンティティと同座標上にある、**`ProjectileHit`を持ち`PotentialSkill`が3230であるエンティティを一体選び**、そこから0.5m上に**[ブラストショット1](#ブラストショット1)を召喚**
5. `ProjectileHit`を持つすべてのエンティティと同座標上にある、**`ProjectileHit`を持ち`PotentialSkill`が3231 ~ 3239であるエンティティを一体選び**、そこから0.5m上に**[ブラストショット2](#ブラストショット2)を召喚**
6. [ブラストショットHIT処理部](#ブラストショットhit処理部)を停止

### ブラストショット

`ExplosionRadius`のみが異なる。

#### ブラストショット1

```mcfunction
/summon Creeper ~ ~0.5 ~ {CustomName:"ブラストショット",ExplosionRadius:3b,Fuse:0s,ignited:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ブラストショット|
|Type|Creeper|
|Tags|TypeChecked|
|ExplosionRadius|**3**|
|ActiveEffects|透明化Lv.0 1秒間|

#### ブラストショット2

```mcfunction
/summon Creeper ~ ~0.5 ~ {CustomName:"ブラストショット",ExplosionRadius:7b,Fuse:0s,ignited:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ブラストショット|
|Type|Creeper|
|Tags|TypeChecked|
|ExplosionRadius|**7**|
|ActiveEffects|透明化Lv.0 1秒間|
