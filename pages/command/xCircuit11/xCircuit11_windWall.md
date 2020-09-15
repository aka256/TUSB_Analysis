---
title: ウィンドウォール実行
tags: [コマンド,スキル,黒魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-14 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_windWall.html
datatable2cnp: true
summary: 黒魔導士のスキルの1つであるウィンドウォールを実行する。マルチプレイ時のスニーク処理やWindWallへの値の代入、スキル実行時のメッセージの表示などを行う。なお、WindWallのカウントダウン処理は時間経過で、飛翔物の撃墜処理は毎tick実行するコマンド群4でそれぞれ行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,12,-156)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるウィンドウォールを実行する。マルチプレイ時のスニーク処理や`WindWall`への値の代入、スキル実行時のメッセージの表示などを行う。
なお、`WindWall`のカウントダウン処理は[時間経過]({{site.baseurl}}/command/xCircuit1/xCircuit1_timeElapsed.html)で、飛翔物の撃墜処理は[毎tick実行するコマンド群4]({{site.baseurl}}/command/xCircuit4/xCircuit4_command.html)でそれぞれ行われる。

## コマンド群

<div class="datatable2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=5080,score_ActivatedSkill=5089] ~ ~ ~ /playsound block.portal.trigger master @a[r=16] ~ ~100 ~ 0.1 2 0.4|
|2|/execute @a[score_ActivatedSkill_min=5080,score_ActivatedSkill=5089] ~ ~ ~ /scoreboard players operation @a[c=1] TargetCheck = @a[c=1] ActivatedSkill|
|3|/execute @a[score_ActivatedSkill_min=5080,score_ActivatedSkill=5089,tag=Sneaking] ~ ~ ~ /scoreboard players operation @a[r=15] TargetCheck > @a[c=1] TargetCheck|
|4|/scoreboard players set @a[score_TargetCheck_min=5080,score_TargetCheck=5089] WindWall 20|
|5|/execute @a[score_TargetCheck_min=5080,score_TargetCheck=5089] ~ ~ ~ /particle dragonbreath ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|
|6|/tellraw @a[score_TargetCheck_min=5080,score_TargetCheck=5089] {"text":"ウィンドウォールの効果がかかった。","color":"green","hoverEvent":{"action":"show_text","value":"一定時間、周囲の飛翔物を妨げる。"}}|
|7|/scoreboard players reset @a[score_TargetCheck_min=0] TargetCheck|

<div class="datatable2cnp-end"></div>

## 詳細

1. **`ActivatedSkill`が5080 ~ 5089**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
   2. 対象プレイヤーの`TargetCheck`に`ActivatedSkill`を代入
   3. **`Sneaking`を持つ**対象プレイヤーから**半径15m以内**のすべてのプレイヤーの`TargetCheck`が対象プレイヤーの`TargetCheck`よりも小さいとき、**それを代入**
2. **`TargetCheck`が5080 ~ 5089**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. **`WindWall`を20に設定**
   2. **パーティクルを表示**
   3. 「<span style="color:green;" data-toggle="tooltip" data-original-title="{{site.data.glossary.windWallMesage}}">ウィンドウォールの効果がかかった。</span>」とのメッセージを表示
3. `TargetCheck`が0以上であるすべてのプレイヤーの`TargetCheck`を0に設定
