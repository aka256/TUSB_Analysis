---
title: ケアル実行
tags: [コマンド,スキル,白魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-11 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_keal.html
datatable2cnp: true
summary: 白魔導士のスキルの1つであるケアルを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-159)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

白魔導士のスキルの1つであるケアルを実行する。

## コマンド群

<div class="datatable2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=4200,score_ActivatedSkill=4209] ~ ~ ~ /playsound entity.experience_orb.pickup master @a[r=16] ~ ~ ~ 1 2 0|
|2|/execute @a[score_ActivatedSkill_min=4200,score_ActivatedSkill=4209] ~ ~ ~ /scoreboard players operation @a[c=1] TargetCheck = @a[c=1] ActivatedSkill|
|3|/execute @a[score_ActivatedSkill_min=4200,score_ActivatedSkill=4209,tag=Sneaking] ~ ~ ~ /scoreboard players operation @a[r=15] TargetCheck > @a[c=1] TargetCheck|
|4|/scoreboard players add @a[score_TargetCheck_min=4200,score_TargetCheck=4200] HealCount 4|
|5|/scoreboard players add @a[score_TargetCheck_min=4201,score_TargetCheck=4201] HealCount 8|
|6|/scoreboard players add @a[score_TargetCheck_min=4202,score_TargetCheck=4202] HealCount 16|
|7|/scoreboard players add @a[score_TargetCheck_min=4203,score_TargetCheck=4203] HealCount 24|
|8|/scoreboard players add @a[score_TargetCheck_min=4204,score_TargetCheck=4209] HealCount 40|
|9|/execute @a[score_TargetCheck_min=4200,score_TargetCheck=4209] ~ ~ ~ /particle heart ~ ~1 ~ 0.5 0.5 0.5 0 30 force|
|10|/scoreboard players reset @a[score_TargetCheck_min=0] TargetCheck|

<div class="datatable2cnp-end"></div>

## 詳細

1. **`AcitavatedSkill`が4200 ~ 4209**であるすべてのプレイヤーに対して、以下の事柄を実行
   1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
   2. `TargetCheck`に`ActivatedSkill`を代入
   3. **`Sneaking`を持っている**対象プレイヤーから、**半径15m以内**のプレイヤーの`TargetCheck`が対象プレイヤーの`TargetCheck`よりも小さいとき、**それを代入**
2. **`TargetCheck`の値によって、異なる値を`HealCount`に足しこむ** ([TargetCheckとHealCountについて](#targetcheckとhealcountについて)を参照)
3. `TargetCheck`が4200 ~ 4209であるすべてのプレイヤーの座標上に、**パーティクルを表示**
4. `TargetCheck`が0以上であるすべてのプレイヤーの`TargetCheck`を0に設定

### TargetCheckとHealCountについて

|TargetCheck|HealCount|
|:-:|:-:|
|4200|4|
|4201|8|
|4202|16|
|4203|24|
|4204 ~ 4209|40|
