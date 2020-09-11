---
title: リジェネレーション実行
tags: [コマンド,スキル,白魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-10 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_regeneration.html
datatable2cnp: true
summary: 白魔導士のスキルの1つであるリジェネレーションを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,12,-162)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

白魔導士のスキルの1つであるリジェネレーションを実行する。

## コマンド群

<div class="datatable2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=4020,score_ActivatedSkill=4029] ~ ~ ~ /playsound entity.item.pickup master @a[r=16] ~ ~ ~ 1 0.6 0|
|2|/execute @a[score_ActivatedSkill_min=4020,score_ActivatedSkill=4029] ~ ~ ~ /execute @a[r=15] ~ ~ ~ /particle note ~ ~1 ~ 0.5 0.5 0.5 0 30 force|
|3|/execute @a[score_ActivatedSkill_min=4020,score_ActivatedSkill=4020] ~ ~ ~ /effect @a[r=15] minecraft:regeneration 90 0|
|4|/execute @a[score_ActivatedSkill_min=4021,score_ActivatedSkill=4021] ~ ~ ~ /effect @a[r=15] minecraft:regeneration 90 1|
|5|/execute @a[score_ActivatedSkill_min=4022,score_ActivatedSkill=4029] ~ ~ ~ /effect @a[r=15] minecraft:regeneration 90 2|

<div class="datatable2cnp-end"></div>

## 詳細

1. **`ActivatedSkill`が4020 ~ 4029**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから**半径16m以**内のすべてのプレイヤーに、**効果音を鳴らす**
   2. 対象プレイヤーから**半径15m以内**のすべてのプレイヤーに、**パーティクルを表示**
2. **`ActivatedSkill`の値に応じ**、そのプレイヤーから**半径15m以内**のすべてのプレイヤーに**異なるレベルの再生能力を90秒間付与** ([ActivatedSkillと再生能力レベルについて](#activatedskillと再生能力レベルについて)を参照)

### ActivatedSkillと再生能力レベルについて

|ActivatedSkill|再生能力レベル|
|:-:|:-:|
|4020|Lv.1|
|4021|Lv.2|
|4022 ~ 4029|Lv.3|
