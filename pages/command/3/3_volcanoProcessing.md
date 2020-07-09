---
title: ネザーラック破壊時火山噴火処理
tags: [コマンド,ネザー,ディメンション]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/26
update: 2020/7/7
sidebar: mydoc_sidebar
permalink: 3_volcanoProcessing.html
folder: command/3
datatable3cnp: true
---

<span class="label label-primary">位置 (-1920,13,-188)</span>

## About

ネザーでネザーラック破壊した時の処理を行う。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド群|状態|
|:-:|-|-|
|1|/execute @a[score_USBDimension=-100,score_MineNetherrack_min=1] ~ ~ ~ /playsound entity.blaze.ambient master @a[r=16] ~ ~ ~ 0.5 0.5|
|2|/execute @a[score_USBDimension=-100,score_MineNetherrack_min=1] ~ ~ ~ /scoreboard players tag @e[r=6,type=Item] add Garbage {Item:{id:"minecraft:netherrack"},Age:1s}|条件付き|
|3|/scoreboard players test Debug Settings * 0|条件付き|
|4|/execute @a[score_USBDimension=-100,score_MineNetherrack_min=1] ~ ~ ~ /execute @e[r=6,type=Item,tag=Garbage,c=1] ~ ~ ~ /summon XPOrb ~ ~1 ~ {Age:6000s,Passengers:[{id:Creeper,ExplosionRadius:1f,Fuse:40s,ignited:true,Fire:40s,ActiveEffects:[{Id:14b,Amplifier:127b,Duration:100,ShowParticles:false}],Motion:[0d,2d,0d],Tags:[TypeChecked],Passengers:[{id:FallingSand,Block:minecraft:fire,Time:1,Passengers:[{id:FallingSand,Block:minecraft:flowing_lava,Time:1}]},{id:AreaEffectCloud,ReapplicantDelay:2147483647,Radius:0.5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:40,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:lava,Tags:[TypeChecked]}]},{id:Creeper,ExplosionRadius:1f,Fuse:40s,ignited:true,Fire:40s,ActiveEffects:[{Id:14b,Amplifier:127b,Duration:100,ShowParticles:false}],Motion:[-0.1d,2d,0d],Tags:[TypeChecked],Passengers:[{id:FallingSand,Block:minecraft:fire,Time:1,Passengers:[{id:FallingSand,Block:minecraft:flowing_lava,Time:1}]}]},{id:Creeper,ExplosionRadius:1f,Fuse:40s,ignited:true,Fire:40s,ActiveEffects:[{Id:14b,Amplifier:127b,Duration:100,ShowParticles:false}],Motion:[0d,2d,-0.1d],Tags:[TypeChecked],Passengers:[{id:FallingSand,Block:minecraft:fire,Time:1,Passengers:[{id:FallingSand,Block:minecraft:flowing_lava,Time:1}]}]},{id:Creeper,ExplosionRadius:1f,Fuse:40s,ignited:true,Fire:40s,ActiveEffects:[{Id:14b,Amplifier:127b,Duration:100,ShowParticles:false}],Motion:[0.1d,2d,0d],Tags:[TypeChecked],Passengers:[{id:FallingSand,Block:minecraft:fire,Time:1,Passengers:[{id:FallingSand,Block:minecraft:flowing_lava,Time:1}]}]},{id:Creeper,ExplosionRadius:1f,Fuse:40s,ignited:true,Fire:40s,ActiveEffects:[{Id:14b,Amplifier:127b,Duration:100,ShowParticles:false}],Motion:[0d,2d,0.1d],Tags:[TypeChecked],Passengers:[{id:FallingSand,Block:minecraft:fire,Time:1,Passengers:[{id:FallingSand,Block:minecraft:flowing_lava,Time:1}]}]}]}|条件付き|
|5|/scoreboard players reset @a[score_MineNetherrack_min=1] MineNetherrack|

<div class="datatable3cnp-end"></div>

## 詳細

1. `USBDimension`が-100以下であり、`MineNetherrack`が1以上であるすべてのプレイヤーから半径16m以内のすべてのプレイヤーの座標で効果音を鳴らし、以下の事柄を実行
   1. `USBDimension`が-100以下であり、`MineNetherrack`が1以上であるすべてのプレイヤーから半径6m以内にある`Age`が1のネザーラックがアイテムとしてあった時、それに`Garbage`を付与
   2. `Debug`の`Settings`が0以下であるとき、以下の事柄を実行
      - `USBDimension`が-100以下であり、`MineNetherrack`が1以上であるすべてのプレイヤーから半径6m以内にある`Garbage`を持つアイテムの座標に溶岩や即爆クリーパーなどが仕込まれたエンティティを召喚
2. `MineNetherrack`が1以上であるすべてのプレイヤーの`MineNetherrack`を0に設定
