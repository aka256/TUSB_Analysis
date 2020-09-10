---
title: エンチェイス実行
tags: [コマンド,スキル,狩人,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-10 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_enchase.html
datatable2cnp: true
summary: 狩人のスキルの1つであるエンチェイスを実行する。なお、スキルの実行処理は毎tick実行するコマンド群5とエンチェイス探索処理で行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-166)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

狩人のスキルの1つであるエンチェイスを実行する。なお、スキルの実行処理は[毎tick実行するコマンド群5]({{site.baseurl}}/command/xCircuit5/xCircuit5_command.html)と[エンチェイス探索処理]({{site.baseurl}}/command/xCircuit5/xCircuit5_enchaseSearchProcessing.html)で行われる。

## コマンド群

<div class="datatable2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=3040,score_ActivatedSkill=3049] ~ ~ ~ /playsound block.anvil.use master @a[r=16] ~ ~ ~ 1 1.4 0|
|2|/execute @a[score_ActivatedSkill_min=3040,score_ActivatedSkill=3049] ~ ~ ~ /scoreboard players operation @a[c=1] EnChase = @a[c=1] ActivatedSkill|
|3|/execute @a[score_ActivatedSkill_min=3040,score_ActivatedSkill=3049,tag=Sneaking] ~ ~ ~ /scoreboard players operation @a[r=15] EnChase > @a[c=1] EnChase|
|4|/execute @a[score_EnChase_min=3040] ~ ~ ~ /particle magicCrit ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|
|5|/tellraw @a[score_EnChase_min=3040] {"text":"エンチェイスの効果がかかった。","color":"green","hoverEvent":{"action":"show_text","value":"次に撃った矢が生物に当たりやすくなる。"}}|
|6|/scoreboard players remove @a[score_EnChase_min=3040] EnChase 3039|

<div class="datatable2cnp-end"></div>

## 詳細

1. **`ActivatedSkill`が3040 ~ 3049**であるプレイヤーを対象として、以下の事柄を実行
   1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
   2. 対象プレイヤーの`EnChase`に`ActivatedSkill`を代入
   3. `Sneaking`を持った対象プレイヤーから、**半径15m以内**のすべてのプレイヤーの`EnChase`が対象プレイヤーの`EnChase`よりも小さいとき、**その値を代入する**
2. **`EnChase`が3040以上**であるすべてのプレイヤーに対して、以下の事柄を実行
   1. 対象プレイヤーの座標上で、**パーティクルを表示**
   2. 対象プレイヤーに「<span style="color:green;" data-toggle="tooltip" data-original-title="{{site.data.glossary.enChaseMesage}}">エンチェイスの効果がかかった。</span>」とのメッセージを表示
   3. 対象プレイヤーの`EnChase`から3039を引き、**`EnChase`を0以下にする**

### エンチェイスの仕組みについて

いずれ書きます。
