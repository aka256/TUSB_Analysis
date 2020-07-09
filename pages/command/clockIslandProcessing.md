---
title: 時計島
tags: [コマンド,敵Mob,スポナー]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,時計島,アラーム
last_updated: 2020/6/19
update: 2020-06-19 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: clockIslandProcessing.html
folder: command
datatable3cnp: true
---

<span class="label label-primary">位置 (-1920,4,-96)</span>

## About

時計島の形態変化の管理、アラームなどの演出の実行を行う。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/summon XPOrb ~ ~ ~ {Passengers:[{id:Arrow,xTile:-58,yTile:23,zTile:22,life:1200s},{id:Arrow,xTile:35,yTile:0,zTile:6,life:1200s},{id:Arrow,xTile:59,yTile:0,zTile:6,life:1200s},{id:Arrow,xTile:35,yTile:0,zTile:30,life:1200s},{id:Arrow,xTile:59,yTile:0,zTile:30,life:1200s},{id:Arrow,xTile:4000,yTile:255,zTile:4000,life:1200s},{id:Arrow,xTile:4016,yTile:255,zTile:4000,life:1200s},{id:Arrow,xTile:4000,yTile:255,zTile:4016,life:1200s},{id:Arrow,xTile:4016,yTile:255,zTile:4016,life:1200s}],Age:6000s}|
|2|/clone ~1 ~ ~ ~1 ~ ~ ~1 ~ ~ filtered force minecraft:command_block 5|
|3|/scoreboard players test #ConquerPctInt Global 11 40|
|4|/execute 0-0-1-0-1 -58 23 22 detect ~ ~ ~ minecraft:mob_spawner 0 /blockdata ~ ~ ~ {SpawnData:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Enderman,CustomName:"秒針",DeathLootTable:"usb:entities/clock",Health:50f,Attributes:[{Name:generic.maxHealth,Base:50d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.attackDamage,Base:6d}],carried:8}]}}|条件付き|
|5|/execute 0-0-1-0-1 -58 23 22 detect ~ ~ ~ minecraft:mob_spawner 0 /blockdata ~ ~ ~ {RequiredPlayerRange:32s,Delay:100s,SpawnPotentials:}|条件付き|
|6|/execute 0-0-1-0-1 35 0 6 detect ~ ~ ~ minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~24 ~ ~ minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~ ~ ~24 minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~24 ~ ~24 minecraft:bedrock 0 /execute 0-0-1-0-1 4000 255 4000 detect ~16 ~ ~ minecraft:air 0 /execute 0-0-1-0-1 4000 255 4000 detect ~ ~ ~16 minecraft:air 0 /execute 0-0-1-0-1 4000 255 4000 detect ~16 ~ ~16 minecraft:air 0 /execute 0-0-1-0-1 4001 47 4001 detect 4000 255 4000 minecraft:air 0 /clone ~ ~ ~ ~22 ~22 ~22 36 1 7|条件付き|
|7|/summon Item -1920 7 ~ {Item:{id:stone,Count:1b},Age:5820s}|条件付き|
|8|/scoreboard players test #ConquerPctInt Global 41 70|
|9|/execute 0-0-1-0-1 -58 23 22 detect ~ ~ ~ minecraft:mob_spawner 0 /blockdata ~ ~ ~ {SpawnData:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Skeleton,CustomName:"分針",SkeletonType:1b,DeathLootTable:"usb:entities/clock",Health:100f,Attributes:[{Name:generic.maxHealth,Base:100d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.attackDamage,Base:12d}],HandItems:[{id:minecraft:stick,Count:0b}],Passengers:[{id:AreaEffectCloud,Duration:100,DurationOnUse:0,Radius:2f,RadiusPerTick:0f,RadiusOnUse:0f,Effects:[{Id:2b,Duration:100,Amplifier:2b}]}]}]}}|条件付き|
|10|/execute 0-0-1-0-1 -58 23 22 detect ~ ~ ~ minecraft:mob_spawner 0 /blockdata ~ ~ ~ {RequiredPlayerRange:32s,Delay:100s,SpawnPotentials:}|条件付き|
|11|/execute 0-0-1-0-1 35 0 6 detect ~ ~ ~ minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~24 ~ ~ minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~ ~ ~24 minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~24 ~ ~24 minecraft:bedrock 0 /execute 0-0-1-0-1 4000 255 4000 detect ~16 ~ ~ minecraft:air 0 /execute 0-0-1-0-1 4000 255 4000 detect ~ ~ ~16 minecraft:air 0 /execute 0-0-1-0-1 4000 255 4000 detect ~16 ~ ~16 minecraft:air 0 /execute 0-0-1-0-1 4001 24 4001 detect 4000 255 4000 minecraft:air 0 /clone ~ ~ ~ ~22 ~22 ~22 36 1 7|条件付き|
|12|/summon Item -1920 7 ~ {Item:{id:stone,Count:1b},Age:5820s}|条件付き|
|13|/scoreboard players test #ConquerPctInt Global 71 *|
|14|/execute 0-0-1-0-1 -58 23 22 detect ~ ~ ~ minecraft:mob_spawner 0 /blockdata ~ ~ ~ {SpawnData:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Spider,CustomName:"時針",DeathLootTable:"usb:entities/clock",Health:200f,Attributes:[{Name:generic.maxHealth,Base:200d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.attackDamage,Base:24d}],Passengers:[{id:AreaEffectCloud,Duration:100,DurationOnUse:0,Radius:2f,RadiusPerTick:0f,RadiusOnUse:0f,Effects:[{Id:2b,Duration:100,Amplifier:5b}]}]}]}}|条件付き|
|15|/execute 0-0-1-0-1 -58 23 22 detect ~ ~ ~ minecraft:mob_spawner 0 /blockdata ~ ~ ~ {RequiredPlayerRange:32s,Delay:100s,SpawnPotentials:}|条件付き|
|16|/execute 0-0-1-0-1 35 0 6 detect ~ ~ ~ minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~24 ~ ~ minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~ ~ ~24 minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~24 ~ ~24 minecraft:bedrock 0 /execute 0-0-1-0-1 4000 255 4000 detect ~16 ~ ~ minecraft:air 0 /execute 0-0-1-0-1 4000 255 4000 detect ~ ~ ~16 minecraft:air 0 /execute 0-0-1-0-1 4000 255 4000 detect ~16 ~ ~16 minecraft:air 0 /execute 0-0-1-0-1 4001 1 4001 detect 4000 255 4000 minecraft:air 0 /clone ~ ~ ~ ~22 ~22 ~22 36 1 7|条件付き|
|17|/summon Item -1920 7 ~ {Item:{id:stone,Count:1b},Age:5820s}|条件付き|

<div class="datatable3cnp-end"></div>

### 詳細

1. 9つの矢を乗せたEXPオーブをその場に召喚 (なんで?)
2. 次のコマンド([時計島](#時計島)のNo.3のコマブロ)を実行
3. `#ConquerPctInt`の`Global`が11以上40以下の時以下の事柄を実行
   1. (-58,23,22)にあるスポーンブロックが0であるとき、このスポーンブロックを[秒針](TUSB_Analysis_Entity.html#秒針)のものに置き換える
   2. 時計島の底面の4隅の岩盤が存在し、時計島のクローン元(4000,255,4000)のy=255に空気ブロックが存在するとき、(4001,47,4001)にある時計島第二形態を(36,1,7)にコピーする
   3. (-1920,7,-96)に石をドロップし、[時計島のアラーム](#時計島のアラーム)を実行
4. `#ConquerPctInt`の`Global`が41以上70以下の時以下の事柄を実行
   1. (-58,23,22)にあるスポーンブロックが0であるとき、このスポーンブロックを[分針](TUSB_Analysis_Entity.html#分針)のものに置き換える
   2. 時計島の底面の4隅の岩盤が存在し、時計島のクローン元(4000,255,4000)のy=255に空気ブロックが存在するとき、(4001,24,4001)にある時計島第三形態を(36,1,7)にコピーする
   3. (-1920,7,-96)に石をドロップし、[時計島のアラーム](#時計島のアラーム)を実行
5. `#ConquerPctInt`の`Global`が71以上の時以下の事柄を実行
   1. (-58,23,22)にあるスポーンブロックが0であるとき、このスポーンブロックを[時針](TUSB_Analysis_Entity.html#時針)のものに置き換える
   2. 時計島の底面の4隅の岩盤が存在し、時計島のクローン元(4000,255,4000)のy=255に空気ブロックが存在するとき、(4001,1,4001)にある時計島第三形態を(36,1,7)にコピーする
   3. (-1920,7,-96)に石をドロップし、[時計島のアラーム](#時計島のアラーム)を実行

## 時計島のアラーム

- 位置(-1920,6,096)

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/execute @a ~ ~ ~ /playsound block.anvil.land master @a[c=1] ~ ~100 ~ 0.3 1.414 0.3|リピート|
|2|/time set 23400|

- 音を鳴らし、時間を23400に設定する
