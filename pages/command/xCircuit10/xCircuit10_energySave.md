---
title: エナジーセーブ実行
tags: [コマンド,スキル,狩人,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-10 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_energySave.html
datatable2cnp: true
summary: 狩人のスキルの1つであるエナジーセーブを実行する。なお、MPの半減処理は毎tick実行するコマンド群8で行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,13,-166)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

狩人のスキルの1つであるエナジーセーブを実行する。なお、MPの半減処理は[毎tick実行するコマンド群8]({{site.baseurl}}/command/xCircuit8/xCircuit8_command.html)で行われる。


## コマンド群

<div class="datatabel2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=3060,score_ActivatedSkill=3069] ~ ~ ~ /playsound entity.endermen.teleport master @a[r=16] ~ ~ ~ 1 1.4 0|
|2|/execute @a[score_ActivatedSkill_min=3060,score_ActivatedSkill=3069] ~ ~ ~ /scoreboard players operation @a[c=1] TargetCheck = @a[c=1] ActivatedSkill|
|3|/execute @a[score_ActivatedSkill_min=3060,score_ActivatedSkill=3069,tag=Sneaking] ~ ~ ~ /scoreboard players operation @a[r=15] TargetCheck > @a[c=1] TargetCheck|
|4|/scoreboard players tag @a[score_TargetCheck_min=3060,score_TargetCheck=3069] add EnergySave|
|5|/execute @a[score_TargetCheck_min=3060,score_TargetCheck=3069] ~ ~ ~ /particle happyVillager ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|
|6|/tellraw @a[score_TargetCheck_min=3060,score_TargetCheck=3069] {"text":"エナジーセーブの効果がかかった。","color":"green","hoverEvent":{"action":"show_text","value":"次に使用するスキルの消費MPを半減する。"}}|
|7|/scoreboard players reset @a[score_TargetCheck_min=0] TargetCheck|

<div class="datatabel2cnp-end"></div>

## 詳細

1. **`ActivatedSkill`が3060 ~ 3069**であるすべてのプレイヤーを対象として、以下の事柄を実行
   1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
   2. 対象プレイヤーの`TargetCheck`に`ActivatedSkill`を代入
   3. `Sneaking`を持つ対象プレイヤーから、半径15m以内のすべてのプレイヤーの`TargetCheck`が対象プレイヤーの`TargetCheck`よりも小さいとき、それを代入
2. **`TargetCheck`が3060 ~ 3069**であるすべてのプレイヤーを対象として、以下の事柄を実行
   1. **`EnergySave`を付与**
   2. 対象プレイヤーの座標上に**パーティクルを表示**
   3. 「<span style="color:green;" data-toggle="tooltip" data-original-title="{{site.data.glossary.energySaveMesage}}">エナジーセーブの効果がかかった。</span>」とのメッセージを表示
3. `TargetCheck`が0以下であるすべてのプレイヤーの`TargetCheck`を0に設定
