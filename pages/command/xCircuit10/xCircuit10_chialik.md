---
title: キアリク実行
tags: [コマンド,スキル,白魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-10 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_chialik.html
datatable2cnp: true
summary: 白魔導士のスキルの1つであるキアリクを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-1622)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

白魔導士のスキルの1つであるキアリクを実行する。

## コマンド群

<div class="datatable2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=4000,score_ActivatedSkill=4009] ~ ~ ~ /playsound entity.rabbit.hurt master @a[r=16] ~ ~ ~ 1 2 0|
|2|/execute @a[score_ActivatedSkill_min=4000,score_ActivatedSkill=4009] ~ ~ ~ /scoreboard players operation @a[c=1] TargetCheck = @a[c=1] ActivatedSkill|
|3|/execute @a[score_ActivatedSkill_min=4000,score_ActivatedSkill=4009,tag=Sneaking] ~ ~ ~ /scoreboard players operation @a[r=15] TargetCheck > @a[c=1] TargetCheck|
|4|/scoreboard players tag @a[score_TargetCheck_min=4000,score_TargetCheck=4009] add ClearBadStatus|
|5|/execute @a[score_TargetCheck_min=4000,score_TargetCheck=4009] ~ ~ ~ /particle happyVillager ~ ~1 ~ 0.5 0.5 0.5 0 30 force|
|6|/scoreboard players reset @a[score_TargetCheck_min=0] TargetCheck|

<div class="datatable2cnp-end"></div>

## 詳細

1. **`ActivatedSkill`が4000 ~ 4009**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
   2. 対象プレイヤーの**`TargetCheck`に`ActivatedSkill`を代入**
   3. `Sneaking`を持った対象プレイヤーから**半径15m以内**のすべてのプレイヤーの`TargetCheck`が対象プレイヤーの`TargetCheck`よりも小さいとき、**それを代入**
2. **`TargetCheck`が4000 ~ 4009**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. **`ClearBadStatus`を付与**
   2. 対象プレイヤーの座標上に**パーティクルを表示**
3. `TargetCheck`が0以上であるすべてのプレイヤーの`TargetCheck`を0に設定
