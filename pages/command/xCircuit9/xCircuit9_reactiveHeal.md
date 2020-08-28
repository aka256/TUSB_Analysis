---
title: リアクティブヒール実行
tags: [コマンド,スキル,剣士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_reactiveHeal.html
datatable2c: true
summary: 剣士のスキルの1つであるリアクティブヒールを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-174)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

剣士のスキルの1つであるリアクティブヒールを実行する。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=1230,score_ActivatedSkill=1239] ~ ~ ~ /playsound entity.player.levelup master @a[r=16] ~ ~ ~ 1 1.88 0|
|2|/execute @a[score_ActivatedSkill_min=1230,score_ActivatedSkill=1239] ~ ~ ~ /particle heart ~ ~1 ~ 0.5 0.5 0.5 0 30 force|
|3|/scoreboard players add @a[score_ActivatedSkill_min=1230,score_ActivatedSkill=1230] HealCount 4|
|4|/scoreboard players add @a[score_ActivatedSkill_min=1231,score_ActivatedSkill=1231] HealCount 8|
|5|/scoreboard players add @a[score_ActivatedSkill_min=1232,score_ActivatedSkill=1239] HealCount 12|

<div class="datatable2c-end"></div>

## 詳細

- **`AvtivatedSkill`が1230 ~ 1239**であるプレイヤーを対象として、以下の事柄を実行

1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
2. 対象プレイヤーの座標上で**パーティクルを表示**
3. `AvtivatedSkill`の値によって`HealCount`に値を足しこむ([ActivatedSkillとHealCount](#activatedskillとhealcount)を参照)

### ActivatedSkillとHealCount

|ActivatedSkill|スキルレベル|HealCountに足す値|
|:-:|:-:|:-:|
|1230|1|4|
|1231|2|8|
|1232 ~ 1239|3|12|
