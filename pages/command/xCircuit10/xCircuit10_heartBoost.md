---
title: ハートブースト実行
tags: [コマンド,スキル,白魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-10 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_heartBoost.html
datatable2cnp: true
summary: 白魔導士のスキルの1つであるハートブーストを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-162)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

白魔導士のスキルの1つであるハートブーストを実行する。

## コマンド群

<div class="datatable2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=4010,score_ActivatedSkill=4019] ~ ~ ~ /playsound entity.player.levelup master @a[r=16] ~ ~ ~ 1 2 0|
|2|/execute @a[score_ActivatedSkill_min=4010,score_ActivatedSkill=4019] ~ ~ ~ /execute @a[r=15] ~ ~ ~ /particle endRod ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|
|3|/execute @a[score_ActivatedSkill_min=4010,score_ActivatedSkill=4010] ~ ~ ~ /effect @a[r=15] minecraft:absorption 180 1|
|4|/execute @a[score_ActivatedSkill_min=4011,score_ActivatedSkill=4011] ~ ~ ~ /effect @a[r=15] minecraft:absorption 180 3|
|5|/execute @a[score_ActivatedSkill_min=4012,score_ActivatedSkill=4012] ~ ~ ~ /effect @a[r=15] minecraft:absorption 180 5|
|6|/execute @a[score_ActivatedSkill_min=4013,score_ActivatedSkill=4013] ~ ~ ~ /effect @a[r=15] minecraft:absorption 180 7|
|7|/execute @a[score_ActivatedSkill_min=4014,score_ActivatedSkill=4019] ~ ~ ~ /effect @a[r=15] minecraft:absorption 180 9|

<div class="datatable2cnp-end"></div>

## 詳細

1. **`ActivatedSkill`が4010 ~ 4019**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから**半径16m以**内のすべてのプレイヤーに、**効果音を鳴らす**
   2. 対象プレイヤーから**半径15m以内**のすべてのプレイヤーに、**パーティクルを表示**
2. **`ActivatedSkill`の値に応じ**、そのプレイヤーから**半径15m以内**のすべてのプレイヤーに**異なるレベルの衝撃吸収を180秒間付与** ([ActivatedSkillと衝撃吸収レベルについて](#activatedskillと衝撃吸収レベルについて)を参照)

### ActivatedSkillと衝撃吸収レベルについて

|ActivatedSkill|衝撃吸収レベル|
|:-:|:-:|
|4010|Lv.2|
|4011|Lv.4|
|4012|Lv.6|
|4013|Lv.8|
|4014 ~ 4019|Lv.10|
