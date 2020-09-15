---
title: マナリフレッシュ実行
tags: [コマンド,スキル,黒魔導士,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-14 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_manaRefresh.html
datatable2c: true
summary: 黒魔導士のスキルの1つであるマナリフレッシュを実行する。マルチプレイにおけるスニーク処理、ManaRefreshへの値の代入、メッセージの表示などを行う。なお、ManaRefreshのカウントダウン処理とスキルの終了処理は時間経過で、MP回復処理は毎tick実行するコマンド群2でそれぞれ行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,17,-157)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるマナリフレッシュを実行する。マルチプレイにおけるスニーク処理、`ManaRefresh`への値の代入、メッセージの表示などを行う。
なお、`ManaRefresh`のカウントダウン処理とスキルの終了処理は[時間経過]({{site.baseurl}}/command/xCircuit1/xCircuit1_timeElapsed.html)で、MP回復処理は[毎tick実行するコマンド群2]({{site.baseurl}}/command/xCircuit2/xCircuit2_reset.html)でそれぞれ行われる。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=5040,score_ActivatedSkill=5049] ~ ~ ~ /playsound block.portal.trigger master @a[r=16] ~ ~100 ~ 0.1 2 0.4|
|2|/execute @a[score_ActivatedSkill_min=5040,score_ActivatedSkill=5049] ~ ~ ~ /scoreboard players operation @a[c=1] TargetCheck = @a[c=1] ActivatedSkill|
|3|/execute @a[score_ActivatedSkill_min=5040,score_ActivatedSkill=5049,tag=Sneaking] ~ ~ ~ /scoreboard players operation @a[r=15] TargetCheck > @a[c=1] TargetCheck|
|4|/scoreboard players operation @a[score_TargetCheck_min=5040,score_TargetCheck=5040] ManaRefresh > #30 Const|
|5|/scoreboard players operation @a[score_TargetCheck_min=5041,score_TargetCheck=5049] ManaRefresh > #60 Const|
|6|/execute @a[score_TargetCheck_min=5040,score_TargetCheck=5049] ~ ~ ~ /particle dragonbreath ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|
|7|/tellraw @a[score_TargetCheck_min=5040,score_TargetCheck=5049] {"text":"マナリフレッシュの効果がかかった。","color":"green","hoverEvent":{"action":"show_text","value":"一定時間MPの自然回復量が増加する。"}}|
|8|/scoreboard players reset @a[score_TargetCheck_min=0] TargetCheck|

<div class="datatable2c-end"></div>

## 詳細

1. **`ActivatedSkill`が5040 ~ 5049**であるすべてのプレイヤーに対して、以下の事柄を実行
   1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
   2. 対象プレイヤーの**`TargetCheck`に`ActivatedSkill`を代入**
   3. **`Sneaking`を持つ**対象プレイヤーから**半径15m以内**のすべてのプレイヤーの`TargetCheck`が対象プレイヤーの`TargetCheck`よりも小さいとき、**それを代入**
2. **`TargetCheck`が5040**であるすべてのプレイヤーの**`ManaRefresh`が30より小さいとき、30を代入**
3. **`TargetCheck`が5041 ~ 5049**であるすべてのプレイヤーの**`ManaRefresh`が60より小さいとき、60を代入**
4. **`TargetCheck`が5040 ~ 5049**であるすべてのプレイヤーに対して、以下の事柄を実行
   1. 対象プレイヤーの座標上で、**パーティクルを表示**
   2. 「<span style="color:green;" data-toggle="tooltip" data-original-title="{{site.data.glossary.manaRefreshMesage}}">マナリフレッシュの効果がかかった。</span>」とのメッセージを表示
5. `TargetCheck`が0以上であるすべてのプレイヤーの`TargetCheck`を0に設定
