---
title: エンアスピル実行
tags: [コマンド,スキル,黒魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-14 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_enAspir.html
datatable2cnp: true
summary: 黒魔導士のスキルの1つであるエンアスピルを実行する。スキル実行時のメッセージの表示やEnAspirへの値の代入などを行う。なお、敵攻撃判定は毎tick実行するコマンド群5で、MP回復処理とスキル終了処理はエンアスピルMP回復でそれぞれ行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-156)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるエンアスピルを実行する。スキル実行時のメッセージの表示や`EnAspir`への値の代入などを行う。
なお、敵攻撃判定は[毎tick実行するコマンド群5]({{site.baseurl}}/command/xCircuit5/xCircuit5_command.html)で、MP回復処理とスキル終了処理は[エンアスピルMP回復]({{site.baseurl}}/command/xCircuit5/xCircuit5_enAspirMPRecovering.html)でそれぞれ行われる。

## コマンド群

<div class="datatable2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=5050,score_ActivatedSkill=5059] ~ ~ ~ /playsound entity.experience_orb.pickup master @a[r=16] ~ ~ ~ 1 0.5 0|
|2|/execute @a[score_ActivatedSkill_min=5050,score_ActivatedSkill=5059] ~ ~ ~ /particle note ~ ~1 ~ 0.5 0.5 0.5 0 30 force|
|3|/tellraw @a[score_ActivatedSkill_min=5050,score_ActivatedSkill=5059] {"text":"エンアスピルの効果がかかった。","color":"green","hoverEvent":{"action":"show_text","value":"次にアンデッドでない敵を近接攻撃した時、MPを回復する。"}}|
|4|/scoreboard players set @a[score_ActivatedSkill_min=5050,score_ActivatedSkill=5050] EnAspir 10|
|5|/scoreboard players set @a[score_ActivatedSkill_min=5051,score_ActivatedSkill=5059] EnAspir 15|

<div class="datatable2cnp-end"></div>

## 詳細

1. **`ActivatedSkill`が5050 ~ 5059**であるすべてのプレイヤーに対して、以下の事柄を実行
   1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
   2. 対象プレイヤーの座標上に、**パーティクルを表示**
   3. 「<span style="color:green;" data-toggle="tooltip" data-original-title="{{site.data.glossary.enaspirMesage}}">エンアスピルの効果がかかった。</span>」とのメッセージを表示
2. **`ActivatedSkill`が5050**であるすべてのプレイヤーの**`EnAspir`を10に設定**
3. **`ActivatedSkill`が5051 ~ 5059**であるすべてのプレイヤーの**`EnAspir`を15に設定**
