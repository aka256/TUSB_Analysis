---
title: 火遁実行
tags: [コマンド,スキル,忍者]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_katon.html
datatable4c: true
summary: 忍者のスキルの1つである火遁を実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-171)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

忍者のスキルの1つである火遁を実行する。

## コマンド群

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=2060,score_ActivatedSkill=2069] ~ ~ ~ /playsound entity.zombie.infect master @a[r=16] ~ ~ ~ 1 0.5 0|
|2|/execute @a[score_ActivatedSkill_min=2060,score_ActivatedSkill=2069] ~ ~ ~ /scoreboard players operation @a[c=1] TargetCheck = @a[c=1] ActivatedSkill|
|3|/execute @a[score_ActivatedSkill_min=2060,score_ActivatedSkill=2069,tag=Sneaking] ~ ~ ~ /scoreboard players operation @a[r=15] TargetCheck > @a[c=1] TargetCheck|
|4|/effect @a[score_TargetCheck_min=2060,score_TargetCheck=2069] minecraft:fire_resistance 60 0|
|5|/execute @a[score_TargetCheck_min=2060,score_TargetCheck=2069] ~ ~ ~ /particle flame ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|
|6|/scoreboard players reset @a[score_TargetCheck_min=0] TargetCheck|

## 詳細

- **`ActivatedSkill`が2060 ~ 2069**であるプレイヤーを対象として、以下の事柄を実行

1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
2. 対象プレイヤーの`TargetCheck`に`ActivatedSkill`を代入
3. 対象プレイヤーが**`Sneaking`を持っているとき**、**半径15m以内**のすべてのプレイヤーの`TargetCheck`が対象プレイヤーの`TargetCheck`より小さければ、対象プレイヤーのものを代入
4. **`TargetCheck`が2060 ~ 2069**であるすべてのプレイヤーに、**火炎耐性 Lv.1 を60秒間付与**
5. **`TargetCheck`が2060 ~ 2069**であるすべてのプレイヤーの座標上で、**パーティクルを表示**
6. `TargetCheck`が0以上であるすべてのプレイヤーの`TargetCheck`を0に設定
