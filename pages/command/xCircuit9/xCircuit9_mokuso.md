---
title: 黙想実行
tags: [コマンド,スキル,忍者]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_mokuso.html
datatable2c: true
summary: 忍者のスキルの1つである呼魂を実行する。なお、継続処理は時間経過で行われ、終了処理は毎tick実行するコマンド群4と黙想終了処理で行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,16,-172)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

忍者のスキルの1つである呼魂を実行する。
なお、継続処理は[時間経過]({{site.baseurl}}/command/xCircuit1/xCircuit1_timeElapsed.html)で行われ、終了処理は[毎tick実行するコマンド群4]({{site.baseurl}}/command/xCircuit4/xCircuit4_command.html)と[黙想終了処理]({{site.baseurl}}/command/xCircuit4/xCircuit4_mokusoEndProcessing.html)で行われる。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=2040,score_ActivatedSkill=2049] ~ ~ ~ /playsound entity.guardian.attack master @a[r=16] ~ ~-100 ~ 0 2 0.5|
|2|/execute @a[score_ActivatedSkill_min=2040,score_ActivatedSkill=2049] ~ ~ ~ /particle damageIndicator ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|
|3|/scoreboard players tag @a[score_ActivatedSkill_min=2040,score_ActivatedSkill=2049] add Mokuso|
|4|/scoreboard players set @a[score_ActivatedSkill_min=2040,score_ActivatedSkill=2049] WalkOneCm 0|
|5|/scoreboard players set @a[score_ActivatedSkill_min=2040,score_ActivatedSkill=2049] CrouchOneCm 0|
|6|/scoreboard players set @a[score_ActivatedSkill_min=2040,score_ActivatedSkill=2049] SprintOneCm 0|
|7|/effect @a[score_ActivatedSkill_min=2040,score_ActivatedSkill=2040] minecraft:regeneration 15 1 true|
|8|/effect @a[score_ActivatedSkill_min=2041,score_ActivatedSkill=2049] minecraft:regeneration 15 2 true|

<div class="datatable2c-end"></div>

## 詳細

- **`ActivatedSkill`が2040 ~ 2049**であるプレイヤーを対象として、以下の事柄を実行

1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
2. 対象プレイヤーの座標上で、**パーティクルを表示**
3. 対象プレイヤーに`Mokuso`を付与
4. 対象プレイヤーの`WalkOneCm`、`CrouchOneCm`、`SprintOneCm`をそれぞれ0に設定
5. **`ActivatedSkill`が2040**であるすべてのプレイヤーに、**再生能力Lv.2を15秒間**付与
6. **`ActivatedSkill`が2041 ~ 2049**であるすべてのプレイヤーに、**再生能力Lv.3を15秒間**付与
