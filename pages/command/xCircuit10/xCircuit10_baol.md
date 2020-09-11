---
title: バオル実行
tags: [コマンド,スキル,白魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-10 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_baol.html
datatable2cnp: true
summary: 白魔導士のスキルの1つであるバオルを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,16,-162)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

白魔導士のスキルの1つであるバオルを実行する。

## コマンド群

<div class="datatable2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=4040,score_ActivatedSkill=4049] ~ ~ ~ /playsound entity.firework.launch master @a[r=16] ~ ~ ~ 1 2 0|
|2|/execute @a[score_ActivatedSkill_min=4040,score_ActivatedSkill=4049] ~ ~ ~ /execute @a[r=15] ~ ~ ~ /particle reddust ~ ~1 ~ 0.5 0.5 0.5 10 30 force|
|3|/execute @a[score_ActivatedSkill_min=4040,score_ActivatedSkill=4049] ~ ~ ~ /effect @a[r=15] minecraft:fire_resistance 30 0|
|4|/execute @a[score_ActivatedSkill_min=4040,score_ActivatedSkill=4049] ~ ~ ~ /effect @a[r=15] minecraft:water_breathing 30 0|

<div class="datatable2cnp-end"></div>

## 詳細

- **`AcitvatedSkill`が4040 ~ 4049**であるすべてのプレイヤーに対し、以下の事柄を実行

1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
2. 対象プレイヤーから**半径15m以内**のすべてのプレイヤーに、**パーティクルを表示**
3. 対象プレイヤーから**半径15m以内**のすべてのプレイヤーに、**火炎耐性Lv.1と水中呼吸Lv.1をそれぞれ30秒間付与**
