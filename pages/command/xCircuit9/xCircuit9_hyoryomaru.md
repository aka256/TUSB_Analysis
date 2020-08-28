---
title: 兵糧丸実行
tags: [コマンド,スキル,忍者]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_hyoryomaru.html
datatable2c: true
summary: 忍者のスキルの1つである兵糧丸を実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-171)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

忍者のスキルの1つである兵糧丸を実行する。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=2050,score_ActivatedSkill=2059] ~ ~ ~ /playsound entity.player.burp master @a[r=16] ~ ~ ~ 1 0.8 0|
|2|/execute @a[score_ActivatedSkill_min=2050,score_ActivatedSkill=2059] ~ ~ ~ /particle iconcrack ~ ~1.35 ~ 0.01 0.1 0.01 0.05 30 force @a[r=64] 282|
|3|/effect @a[score_ActivatedSkill_min=2050,score_ActivatedSkill=2059] minecraft:saturation 1 1 true|
|4|/scoreboard players tag @a[score_ActivatedSkill_min=2050,score_ActivatedSkill=2059] add ClearBadStatus|

<div class="datatable2c-end"></div>

## 詳細

- **`ActivatedSkill`が2050 ~ 2059**であるプレイヤーを対象として、以下の事柄を実行

1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
2. 対象プレイヤーの座標上に**パーティクルを表示**
3. 対象プレイヤーに**満腹Lv.2を1秒間付与**(満腹度2回復)
4. 対象プレイヤーに`ClearBadStatus`を付与
