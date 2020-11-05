---
title: サヨナラ処理
tags: [コマンド,スキル,忍者]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-05 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit13/xCircuit13_sayonara.html
datatable2c: true
summary: 忍者のスキルの一つであるサヨナラの残りMPに対応した爆破処理や演出、スキル実行者のMPが100以上である時にCastRaiseの付与などを行う。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,17,-143)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)

忍者のスキルの一つであるサヨナラの残りMPに対応した爆破処理や演出、スキル実行者のMPが100以上である時に`CastRaise`の付与などを行う。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/gamerule mobGriefing false|
|2|/difficulty easy|
|3|/execute @a[score_ActivatedSkill_min=2240,score_ActivatedSkill=2249] ~ ~ ~ /execute @e[r=10,tag=SayonaraPoint,c=1] ~ ~ ~ /playsound entity.firework.twinkle_far master @a ~ ~ ~ 3 0.5 0.1|
|4|/execute @a[score_ActivatedSkill_min=2240,score_ActivatedSkill=2249] ~ ~ ~ /execute @e[r=10,tag=SayonaraPoint,c=1] ~ ~ ~ /particle lava ~ ~1 ~ 2 2 2 0.1 90 force|
|5|/execute @a[score_ActivatedSkill_min=2240,score_ActivatedSkill=2249,score_MPConsumption=19] ~ ~ ~ /execute @e[r=10,tag=SayonaraPoint,c=1] ~ ~ ~ /summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:1b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}|
|6|/execute @a[score_ActivatedSkill_min=2240,score_ActivatedSkill=2249,score_MPConsumption_min=20,score_MPConsumption=39] ~ ~ ~ /execute @e[r=10,tag=SayonaraPoint,c=1] ~ ~ ~ /summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:2b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}|
|7|/execute @a[score_ActivatedSkill_min=2240,score_ActivatedSkill=2249,score_MPConsumption_min=40,score_MPConsumption=59] ~ ~ ~ /execute @e[r=10,tag=SayonaraPoint,c=1] ~ ~ ~ /summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:4b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}|
|8|/execute @a[score_ActivatedSkill_min=2240,score_ActivatedSkill=2249,score_MPConsumption_min=60,score_MPConsumption=79] ~ ~ ~ /execute @e[r=10,tag=SayonaraPoint,c=1] ~ ~ ~ /summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:7b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}|
|9|/execute @a[score_ActivatedSkill_min=2240,score_ActivatedSkill=2249,score_MPConsumption_min=80] ~ ~ ~ /execute @e[r=10,tag=SayonaraPoint,c=1] ~ ~ ~ /summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:10b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}|
|10|/scoreboard players tag @a[score_ActivatedSkill_min=2240,score_ActivatedSkill=2249,score_MPConsumption_min=100] add CastRaise|

<div class="datatable2c-end"></div>

## 詳細

1. `mobGriefing`を`false`に設定
2. 難易度を`easy`に変更
3. **`ActivatedSkill`が2240 ~ 2249**であるすべてのプレイヤーから、**半径10m以内の最も近い[SayonaraPoint]({{site.baseurl}}/entity/entity_entity.html#sayonarapoint)**に対し、以下の事柄を実行
   1. すべてのプレイヤーに効果音を鳴らす
   2. 対象エンティティの座標上にパーティクルを表示
4. **`ActivatedSkill`が2240 ~ 2249であるすべてのプレイヤーから、半径10m以内の最も近い[SayonaraPoint]({{site.baseurl}}/entity/entity_entity.html#sayonarapoint)に対し、`MPConsumption`の値に応じ`ExplosionRadius`の異なる特定の[ニンジャソウル](#ニンジャソウル)を召喚**([MPCunsumptionと召喚するニンジャソウルについて](#mpcunsumptionと召喚するニンジャソウルについて)を参照)
5. **`ActivatedSkill`が2240 ~ 2249であり、`MPConsumption`が100以上であるすべてのプレイヤーに、`CastRaise`を付与**

### MPCunsumptionと召喚するニンジャソウルについて

|MPConsumption|召喚エンティティ|ExplosionRadius|
|:-:|-|:-:|
|~ 19|[ニンジャソウル1](#ニンジャソウル1)|1|
|20 ~ 39|[ニンジャソウル2](#ニンジャソウル2)|2|
|40 ~ 59|[ニンジャソウル3](#ニンジャソウル3)|4|
|60 ~ 79|[ニンジャソウル4](#ニンジャソウル4)|7|
|80 ~ |[ニンジャソウル5](#ニンジャソウル5)|10|

### ニンジャソウル

このエンティティは`ExplosionRadius`のみが異なる。

#### ニンジャソウル1

```mcfunction
/summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:1b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ニンジャソウル|
|Type|Creeper|
|Tags|TypeChecked|
|Fuse|0|
|ExplosionRadius|1|
|ActiveEffects|透明化Lv.0 1秒間|

#### ニンジャソウル2

```mcfunction
/summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:2b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ニンジャソウル|
|Type|Creeper|
|Tags|TypeChecked|
|Fuse|0|
|ExplosionRadius|2|
|ActiveEffects|透明化Lv.0 1秒間|

#### ニンジャソウル3

```mcfunction
/summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:4b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ニンジャソウル|
|Type|Creeper|
|Tags|TypeChecked|
|Fuse|0|
|ExplosionRadius|4|
|ActiveEffects|透明化Lv.0 1秒間|

#### ニンジャソウル4

```mcfunction
/summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:7b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ニンジャソウル|
|Type|Creeper|
|Tags|TypeChecked|
|Fuse|0|
|ExplosionRadius|7|
|ActiveEffects|透明化Lv.0 1秒間|

#### ニンジャソウル5

```mcfunction
/summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:10b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ニンジャソウル|
|Type|Creeper|
|Tags|TypeChecked|
|Fuse|0|
|ExplosionRadius|10|
|ActiveEffects|透明化Lv.0 1秒間|
