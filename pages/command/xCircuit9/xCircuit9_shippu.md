---
title: 疾風実行
tags: [コマンド,スキル,忍者]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_shippu.html
datatable2c: true
summary: 忍者のスキルの1つである疾風を実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-172)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

忍者のスキルの1つである疾風を実行する。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=2010,score_ActivatedSkill=2019] ~ ~ ~ /playsound entity.wither.shoot master @a[r=16] ~ ~ ~ 1 1.6 0|
|2|/execute @a[score_ActivatedSkill_min=2010,score_ActivatedSkill=2019] ~ ~ ~ /particle cloud ~ ~1 ~ 0.5 0.5 0.5 0.1 60 force|
|3|/effect @a[score_ActivatedSkill_min=2010,score_ActivatedSkill=2010] minecraft:speed 60 1|
|4|/effect @a[score_ActivatedSkill_min=2011,score_ActivatedSkill=2011] minecraft:speed 60 3|
|5|/effect @a[score_ActivatedSkill_min=2012,score_ActivatedSkill=2019] minecraft:speed 60 5|

<div class="datatable2c-end"></div>

## 詳細

- **`ActivatedSkill`が2010 ~ 2019**であるプレイヤーを対象として、以下の事柄を実行

1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
2. 対象プレイヤーの座標上に**パーティクルを表示**
3. **`ActivatedSkill`の値によって異なるレベルの移動速度上昇を60秒間付与**([ActivatedSkillと移動速度上昇レベル](#activatedskillと移動速度上昇レベル)を参照)

### ActivatedSkillと移動速度上昇レベル

|ActivatedSkill|スキルレベル|移動速度上昇レベル|
|:-:|:-:|:-:|
|2010|1|2|
|2011|2|4|
|2012 ~ 2019|3|6|
