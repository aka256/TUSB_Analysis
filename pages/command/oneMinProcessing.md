---
title: 約1分処理
tags: [command]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,嫌な予感
last_updated: 2020/6/20
update: 2020-06-20 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: oneMinProcessing.html
folder: command
datatable4cnp: false
---

<span class="label label-primary">位置 (-1920,14,-200)</span>

## About

1分置きに実行されるコマンド群であり、嫌な予感をランダムに実行したりバニラモブの難易度調整などを行う。

## コマンド群

|No.|コマンド|状態|
|:-:|-|-|
|1|/blockdata -1883 3 ~ {BurnTime:20000s}|
|2|/scoreboard players set @a PastorFlag 0|
|3|/scoreboard players test #EventTimer Global * 0|
|4|/scoreboard players operation #EventTimer Global = @a[c=1] RndMWC|条件付き|
|5|/scoreboard players tag @a[c=1] add UpdateRandom|条件付き|
|6|/scoreboard players operation #EventTimer Global %= #30 Const|条件付き|
|7|/scoreboard players operation #EventTimer Global += #30 Const|条件付き|
|8|/scoreboard players remove #EventTimer Global 1|
|9|/scoreboard players test #EventTimer Global 0 0|
|10|/scoreboard players tag @r[c=5] add CauseEvent|条件付き|
|11|/scoreboard players tag @a add Pray|条件付き|
|12|/execute @a ~ ~ ~ /playsound block.portal.travel master @a[c=1] ~ ~100 ~ 10 0.5 1|条件付き|
|13|/worldborder warning distance 20000|条件付き|
|14|/scoreboard players set #SecCount Global -8|条件付き|
|15|/scoreboard players add @e[tag=VillagerMeal] Freshness 1|
|16|/clone -1920 17 ~ -1920 17 ~ -1920 17 ~ filtered force minecraft:command_block 5 ###難易度調整|

## 詳細

1. (-1883,3,-200)にあるかまど(1秒クロック用)の`BurnTime`を1000秒に設定
2. すべてのプレイヤーの`PastorFlag`を0に設定
3. `#EventTimer`の`Global`が0以下の時、以下の事柄を実行
   1. `#EventTimer`の`Global`に近くの一人のプレイヤーの`RndMWC`を代入し、そのプレイヤーに`UpdataRandom`を付与
   2. `#EventTimer`の`Global`に30との剰余を代入し、30を足す
4. `#EventTimer`の`Global`から1を引く
5. `#EventTimer`の`Global`が0であるとき、以下の事柄を実行
   1. ランダムにプレイヤーを5人選択し、`CauseEvent`を付与
   2. すべてのプレイヤーに`Pray`を付与し、効果音を鳴らす
   3. ワールドの境界線へ近づいた際の警告距離を、境界線から20000mに設定(すべてのプレイヤーに警告を出す)
   4. `#SecCount`の`Global`を-8に設定
6. `VillagerMeal`を持つエンティティの`Freshness`に1を足す
7. (-1920,17,-200)にある[難易度調整](difficultyAdjustment.html)を実行
