---
title: モード変更
tags: [コマンド,スキル,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-31 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit7/xCircuit7_modeChange.html
datatable3cnp: true
summary: モードチェンジエッグによるモードスキルの変更時の演出と処理を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-178)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群7]({{site.baseurl}}/command/xCircuit7/xCircuit7_command.html)

<span class="tagBlue">分岐先</span>

モードチェンジエッグによるモードスキルの変更時の演出と処理を行う。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players operation @a[tag=ChangeMode] ModeState *= #-1 Const|
|2|/scoreboard players set @a[tag=ChangeMode,score_ModeState_min=0,score_ModeState=0] ModeState 1|
|3|/tellraw @a[tag=ChangeMode,score_ModeState_min=1] {"text":"ルビーモードにチェンジ！","color":"red","bold":true}|
|4|/execute @a[tag=ChangeMode,score_ModeState_min=1] ~ ~ ~ /playsound block.note.harp master @a[c=1] ~ ~ ~ 1 1.42 0|条件付き|
|5|/execute @a[tag=ChangeMode,score_ModeState_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] CurrentMode = @a[c=1] ModeSkillA|条件付き|
|6|/execute @a[tag=ChangeMode,score_ModeState_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] CurrentModeCost = @a[c=1] ModeCostA|条件付き|
|7|/tellraw @a[tag=ChangeMode,score_ModeState=-1] {"text":"サファイアモードにチェンジ！","color":"blue","bold":true}|
|8|/execute @a[tag=ChangeMode,score_ModeState=-1] ~ ~ ~ /playsound block.note.harp master @a[c=1] ~ ~ ~ 1 0.7 0|条件付き|
|9|/execute @a[tag=ChangeMode,score_ModeState=-1] ~ ~ ~ /scoreboard players operation @a[c=1] CurrentMode = @a[c=1] ModeSkillB|条件付き|
|10|/execute @a[tag=ChangeMode,score_ModeState=-1] ~ ~ ~ /scoreboard players operation @a[c=1] CurrentModeCost = @a[c=1] ModeCostB|条件付き|
|11|/execute @a[tag=ChangeMode] ~ ~ ~ /scoreboard players operation @a[c=1] ShowSkill = @a[c=1] CurrentMode|
|12|/scoreboard players tag @a[tag=ChangeMode] remove ChangeMode|

<div class="datatable3cnp-end"></div>

## 詳細

`ChangeMode`を持っているすべてのプレイヤーを対象とし、以下の事柄を実行

1. \\(\text{ModeState} = \text{ModeState}\times -1\\)を実行
2. `ModeState`が0であるとき、`ModeStateを1に設定
3. `ModeState`が1以上であるとき、対象のプレイヤーに対して以下の事柄を実行
   1. 「<span style="color:red;bold:true">ルビーモードにチェンジ！</span>」とのメッセージを表示
   2. 演出の実行
   3. `CurrentMode`に`ModeSkillA`を、`CurrentModeCost`に`ModeCostA`をそれぞれ代入
4. `ModeState`が-1以下であるとき、対象のプレイヤーに対して以下の事柄を実行
   1. 「<span style="color:blue;bold:true">サファイアモードにチェンジ！</span>」とのメッセージを表示
   2. 演出の実行
   3. `CurrentMode`に`ModeSkillB`を、`CurrentModeCost`に`ModeCostB`をそれぞれ代入
5. `ShowSkill`に`CurrentMode`を代入
6. `ChangeMode`を削除
