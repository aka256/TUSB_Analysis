---
title: マジックシールド実行
tags: [コマンド,スキル,黒魔導士,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-14 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_magicShield.html
datatable2cnp: true
summary: 黒魔導士のスキルの1つであるマジックシールドを実行する。スキル実行時のメッセージの表示や耐性エフェクトの付与を行う。なお、マジックシールドの継続処理は時間経過、被ダメージ判定は毎tick実行するコマンド群4、スキル終了処理はマジックシールド終了処理でそれぞれ行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-156)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるマジックシールドを実行する。スキル実行時のメッセージの表示や耐性エフェクトの付与を行う。
なお、マジックシールドの継続処理は[時間経過]({{site.baseurl}}/command/xCircuit1/xCircuit1_timeElapsed.html)、被ダメージ判定は[毎tick実行するコマンド群4]({{site.baseurl}}/command/xCircuit4/xCircuit4_command.html)、スキル終了処理は[マジックシールド終了処理]({{site.baseurl}}/command/xCircuit4/xCircuit4_magicShieldEndProcessing.html)でそれぞれ行われる。

## コマンド群

<div class="datatable2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=5060,score_ActivatedSkill=5069] ~ ~ ~ /playsound block.anvil.use master @a[r=16] ~ ~ ~ 0.5 0.5 0|
|2|/execute @a[score_ActivatedSkill_min=5060,score_ActivatedSkill=5069] ~ ~ ~ /particle magicCrit ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|
|3|/tellraw @a[score_ActivatedSkill_min=5060,score_ActivatedSkill=5069] {"text":"マジックシールドの効果がかかった。","color":"green","hoverEvent":{"action":"show_text","value":"次に受けるダメージを無効化する。"}}|
|4|/scoreboard players tag @a[score_ActivatedSkill_min=5060,score_ActivatedSkill=5069] add MagicShield|
|5|/effect @a[score_ActivatedSkill_min=5060,score_ActivatedSkill=5069] minecraft:resistance 15 4 true|

<div class="datatable2cnp-end"></div>

## 詳細

- **`ActivatedSkill`が5060 ~ 5069**であるすべてのプレイヤーに対し、以下の事柄を実行

1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
2. 対象プレイヤーの座標上に**パーティクルを表示**
3. 「<span style="color:green;" data-toggle="tooltip" data-original-title="{{site.data.glossary.magicShieldMesage}}">マジックシールドの効果がかかった。</span>」とのメッセージを表示
4. **`MagicShiele`を付与**
5. **耐性Lv.4を15秒間付与**
