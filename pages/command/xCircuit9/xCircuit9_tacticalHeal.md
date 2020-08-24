---
title: タクティカルヒール実行
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-24 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_tacticalHeal.html
datatable2c: true
summary: 剣士のスキルの1つであるタクティカルヒールの実行準備を行う。なお、実際にこのスキル実行するコマンド群はタクティカルヒール処理で行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,16,-175)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

剣士のスキルの1つであるタクティカルヒールの実行準備を行う。なお、実際にこのスキル実行するコマンド群は[タクティカルヒール処理]({{site.baseurl}}/command/xCircuit5/xCircuit5_tacticalHealProcessing.html)で行われる。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=1040,score_ActivatedSkill=1049] ~ ~ ~ /playsound entity.experience_orb.pickup master @a[r=16] ~ ~ ~ 1 0.5 0|
|2|/execute @a[score_ActivatedSkill_min=1040,score_ActivatedSkill=1049] ~ ~ ~ /particle note ~ ~1 ~ 0.5 0.5 0.5 1 30 force|
|3|/tellraw @a[score_ActivatedSkill_min=1040,score_ActivatedSkill=1049] {"text":"タクティカルヒールの効果がかかった。","color":"green","hoverEvent":{"action":"show_text","value":"次に大ダメージを受けた時、HPを大きく回復する。"}}|
|4|/scoreboard players tag @a[score_ActivatedSkill_min=1040,score_ActivatedSkill=1049] add TacticalHeal|

<div class="datatable2c-end"></div>

## 詳細

- `ActivatedSkill`が1040~1049までのプレイヤーを対象として、以下の事柄を実行
   1. 対象プレイヤーから半径16m以内のすべてのプレイヤーに効果音を鳴らす
   2. 対象プレイヤーの座標上でパーティクルを表示
   3. 対象プレイヤーに「<span style="color:green" data-toggle="tooltip" data-original-title="{{site.data.glossary.tacticalHealMesage}}">タクティカルヒールの効果がかかった。</span>」とのメッセージを表示
   4. 対象プレイヤーに`TacticalHeal`を付与
