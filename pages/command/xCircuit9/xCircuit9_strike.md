---
title: ストライ実行
tags: [コマンド,スキル,剣士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_strike.html
datatable2c: true
summary: 剣士のスキルの1つであるストライを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,12,-175)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

剣士のスキルの1つであるストライを実行する。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=1020,score_ActivatedSkill=1029] ~ ~ ~ /playsound entity.blaze.death master @a[r=16] ~ ~ ~ 1 2 0|
|2|/execute @a[score_ActivatedSkill_min=1020,score_ActivatedSkill=1029] ~ ~ ~ /scoreboard players operation @a[c=1] TargetCheck = @a[c=1] ActivatedSkill|
|3|/execute @a[score_ActivatedSkill_min=1020,score_ActivatedSkill=1029,tag=Sneaking] ~ ~ ~ /scoreboard players operation @a[r=15] TargetCheck > @a[c=1] TargetCheck|
|4|/effect @a[score_TargetCheck_min=1020,score_TargetCheck=1020] minecraft:strength 60 1|
|5|/effect @a[score_TargetCheck_min=1021,score_TargetCheck=1021] minecraft:strength 60 3|
|6|/effect @a[score_TargetCheck_min=1022,score_TargetCheck=1029] minecraft:strength 60 6|
|7|/execute @a[score_TargetCheck_min=1020,score_TargetCheck=1029] ~ ~ ~ /particle angryVillager ~ ~0.5 ~ 0.5 0.5 0.5 0 20 force|
|8|/scoreboard players reset @a[score_TargetCheck_min=0] TargetCheck|

<div class="datatable2c-end"></div>

## 詳細

1. **`ActivatedSkill`が1020 ~ 1029**であるプレイヤーを対象として以下の事柄を実行
   1. 対象プレイヤーから**半径16m以内**にいるすべてのプレイヤーに、**効果音を鳴らす**
   2. 対象プレイヤーの`TargetCheck`に`ActivatedSkill`を代入
   3. **`Sneaking`を持っている**対象プレイヤーから**半径15m以内**にいるすべてのプレイヤーの`TargetCheck`が対象の`TargetCheck`よりも小さいとき、対象の`TargetCheck`を代入
2. **`TargetCheck`の値によって異なるレベルの攻撃力上昇を60秒間付与**([TargetCheckと攻撃力上昇のレベルについて](#targetcheckと攻撃力上昇のレベルについて)を参照)
3. **`TargetCheck`が1020 ~ 1029**であるすべてのプレイヤーの座標上で、**パーティクルを表示**
4. `TargetCheck`が0以上であるすべてのプレイヤーの`TargetCheck`を0に設定

### TargetCheckと攻撃力上昇のレベルについて

|TargetCheck|攻撃力上昇のレベル|スキルレベル|
|:-:|:-:|:-:|
|1020|2|1|
|1021|4|2|
|1022~1029|7|3|
