---
title: デコイ実行
tags: [コマンド,スキル,剣士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_decoy.html
datatable2c: true
summary: 剣士のスキルの1つであるデコイを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,14,-175)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

剣士のスキルの1つであるデコイを実行する。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=1030,score_ActivatedSkill=1030] ~ ~ ~ /scoreboard players tag @e[r=15,tag=Enemy] add Attracted|
|2|/execute @a[score_ActivatedSkill_min=1031,score_ActivatedSkill=1039] ~ ~ ~ /scoreboard players tag @e[r=25,tag=Enemy] add Attracted|
|3|/execute @a[score_ActivatedSkill_min=1030,score_ActivatedSkill=1039] ~ ~ ~ /execute @e[rm=1,r=25,tag=Attracted] ~ ~ ~ /playsound entity.endermen.teleport master @a[r=32] ~ ~ ~ 2 2 0|
|4|/execute @a[score_ActivatedSkill_min=1030,score_ActivatedSkill=1039] ~ ~ ~ /execute @e[rm=1,r=25,tag=Attracted] ~ ~ ~ /particle portal ~ ~1 ~ 0.1 0.5 0.1 0.001 30 force|
|5|/execute @a[score_ActivatedSkill_min=1030,score_ActivatedSkill=1039] ~ ~ ~ /playsound entity.endermen.teleport master @a[r=32] ~ ~ ~ 2 0.7 0|
|6|/execute @a[score_ActivatedSkill_min=1030,score_ActivatedSkill=1039] ~ ~ ~ /particle portal ~ ~1 ~ 0 0.5 0 1 200 force|
|7|/execute @a[score_ActivatedSkill_min=1030,score_ActivatedSkill=1039] ~ ~ ~ /tp @e[r=25,tag=Attracted] @a[c=1]|
|8|/execute @a[score_ActivatedSkill_min=1030,score_ActivatedSkill=1039] ~ ~ ~ /scoreboard players tag @e[r=25,tag=Attracted] remove Attracted|

<div class="datatable2c-end"></div>

## 詳細

1. **`ActivatedSkill`が1030**であるすべてのプレイヤーから**半径15m以内**にいる`Enemy`を持つすべてのエンティティに`Attracted`を付与
2. **`ActivatedSkill`が1031 ~ 1039**であるすべてのプレイヤーから**半径25m以内**にいる`Enemy`を持つすべてのエンティティに`Attracted`を付与
3. **`ActivatedSkill`が1030 ~ 1039**であるプレイヤーを対象として、以下の事柄を実行
   1. 対象プレイヤーから**半径1m外側から半径25m内側**にいる`Attracted`を持ったすべてのエンティティから、**半径32m以内**のすべてのプレイヤーに**効果音を鳴らす**
   2. 対象プレイヤーから**半径1m外側から半径25m内側**にいる`Attracted`を持ったすべてのエンティティの座標上で**パーティクルを表示**
   3. 対象プレイヤーから**半径32m以内のすべてのプレイヤーに効果音を鳴らす**
   4. 対象プレイヤーの座標上で**パーティクルを表示**
   5. 対象プレイヤーから**半径25m以内にいる`Attracted`を持ったすべてのエンティティを対象プレイヤーの座標上に移動**させ、`Attracted`を削除
