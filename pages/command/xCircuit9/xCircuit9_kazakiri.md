---
title: 風切実行
tags: [コマンド,スキル,忍者]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_kazakiri.html
datatable2c: true
summary: 忍者のスキルの1つである風切を実行する。なお、スキルの継続処理は時間経過と風切更新で行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,12,-171)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

忍者のスキルの1つである風切を実行する。
なお、スキルの継続処理は[時間経過]({{site.baseurl}}//command/xCircuit1/xCircuit1_timeElapsed.html)と[風切更新]({{site.baseurl}}/command/xCircuit1/xCircuit1_kazakiriUpdata.html)で行われる。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=2070,score_ActivatedSkill=2079] ~ ~ ~ /playsound entity.enderdragon.flap master @a[r=16] ~ ~ ~ 1 0.5 0|
|2|/execute @a[score_ActivatedSkill_min=2070,score_ActivatedSkill=2079] ~ ~ ~ /particle instantSpell ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|
|3|/scoreboard players set @a[score_ActivatedSkill_min=2070,score_ActivatedSkill=2070] Kazakiri 5|
|4|/scoreboard players set @a[score_ActivatedSkill_min=2071,score_ActivatedSkill=2079] Kazakiri 10|

<div class="datatable2c-end"></div>

## 詳細

- **`ActivatedSkill`が2070 ~ 2079**であるプレイヤーを対象として、以下の事柄を実行

1. 対象プレイヤーから**半径16m以内**のプレイヤーに、**効果音を鳴らす**
2. 対象プレイヤーの座標上で、**パーティクルを表示**
3. **`ActivatedSkill`が2070**であるすべてのプレイヤーの**`Kazakiri`を5に設定**
4. **`ActivatedSkill`が2071 ~ 2079**であるすべてのプレイヤーの**`Kazakiri`を10に設定**
