---
title: ファランクス実行
tags: [コマンド,スキル,剣士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_phalanx.html
datatable2c: true
summary: 剣士のスキルの1つであるファランクスを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-175)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

剣士のスキルの1つであるファランクスを実行する。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=1000,score_ActivatedSkill=1009] ~ ~ ~ /playsound block.anvil.use master @a[r=16] ~ ~ ~ 1 1.4 0|
|2|/execute @a[score_ActivatedSkill_min=1000,score_ActivatedSkill=1009] ~ ~ ~ /scoreboard players operation @a[c=1] TargetCheck = @a[c=1] ActivatedSkill|
|3|/execute @a[score_ActivatedSkill_min=1000,score_ActivatedSkill=1009,tag=Sneaking] ~ ~ ~ /scoreboard players operation @a[r=15] TargetCheck > @a[c=1] TargetCheck|
|4|/effect @a[score_TargetCheck_min=1000,score_TargetCheck=1000] minecraft:resistance 60 0|
|5|/effect @a[score_TargetCheck_min=1001,score_TargetCheck=1001] minecraft:resistance 60 1|
|6|/effect @a[score_TargetCheck_min=1002,score_TargetCheck=1002] minecraft:resistance 60 2|
|7|/effect @a[score_TargetCheck_min=1003,score_TargetCheck=1009] minecraft:resistance 60 3|
|8|/execute @a[score_TargetCheck_min=1000,score_TargetCheck=1009] ~ ~ ~ /particle magicCrit ~ ~0.5 ~ 0.5 0.5 0.5 0 30 force|
|9|/scoreboard players reset @a[score_TargetCheck_min=0] TargetCheck|

<div class="datatable2c-end"></div>

## 詳細

- **`ActivatedSkill`が1000 ~ 1009**であるすべてのプレイヤーを対象として、以下の事柄を実行

1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
2. 対象プレイヤーの`TargetCheck`に`ActivatedSkill`を代入
3. **`Sneaking`を持っている**対象プレイヤーから、**半径15m以内**にいるすべてのプレイヤーの`TargetCheck`が対象の`TargetCheck`よりも小さいとき、対象の`TargetCheck`を代入
4. **`TargetCheck`の値に対応したレベルの耐性を60秒間プレイヤーに付与** ([TargetCheckと耐性レベル](#targetcheckと耐性レベル)を参照)
5. **`TargetCheck`が1000 ~ 1009**であるすべてのプレイヤーの座標上で、**パーティクルを表示**
6. `TargetCheck`が0以上であるすべてのプレイヤーの`TargetCheck`を0に設定

### TargetCheckと耐性レベル

|TargetCheck|耐性レベル|
|:-:|:-:|
|1000|Lv.1|
|1001|Lv.2|
|1002|Lv.3|
|1003~1009|Lv.4|
