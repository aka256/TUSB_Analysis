---
title: クイック実行
tags: [コマンド,スキル,白魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-10 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_quick.html
datatable2cnp: true
summary: 白魔導士のスキルの1つであるクイックを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,14,-162)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

白魔導士のスキルの1つであるクイックを実行する。

## コマンド群

<div class="datatable2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=4030,score_ActivatedSkill=4039] ~ ~ ~ /playsound block.anvil.use master @a[r=16] ~ ~ ~ 1 2 0|
|2|/execute @a[score_ActivatedSkill_min=4030,score_ActivatedSkill=4039] ~ ~ ~ /execute @a[r=15] ~ ~ ~ /particle magicCrit ~ ~1 ~ 0.5 0.5 0.5 0.5 30 force|
|3|/execute @a[score_ActivatedSkill_min=4030,score_ActivatedSkill=4030] ~ ~ ~ /effect @a[r=15] minecraft:haste 30 1|
|4|/execute @a[score_ActivatedSkill_min=4031,score_ActivatedSkill=4039] ~ ~ ~ /effect @a[r=15] minecraft:haste 30 3|

<div class="datatable2cnp-end"></div>

## 詳細

1. **`ActivatedSkill`が4030 ~ 4039**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから**半径16m以**内のすべてのプレイヤーに、**効果音を鳴らす**
   2. 対象プレイヤーから**半径15m以内**のすべてのプレイヤーに、**パーティクルを表示**
2. **`ActivatedSkill`の値に応じ**、そのプレイヤーから**半径15m以内**のすべてのプレイヤーに**異なるレベルの採掘速度上昇を30秒間付与** ([ActivatedSkillと採掘速度上昇レベルについて](#activatedskillと採掘速度上昇レベルについて)を参照)

### ActivatedSkillと採掘速度上昇レベルについて

|ActivatedSkill|採掘速度上昇レベル|
|:-:|:-:|
|4030|Lv.2|
|4031 ~ 4039|Lv.4|
