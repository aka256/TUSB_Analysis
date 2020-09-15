---
title: ウェザー実行
tags: [コマンド,スキル,黒魔導士,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-14 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_weather.html
datatable2c: true
summary: 黒魔導士のスキルの1つであるウェザーを実行する。天候の切り替えとスキル実行時のメッセージの表示処理を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,13,-157)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるウェザーを実行する。天候の切り替えとスキル実行時のメッセージの表示処理を行う。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=5020,score_ActivatedSkill=5029] ~ ~ ~ /playsound entity.minecart.inside master @a[r=48] ~ ~ ~ 0.5 0.75 0.2|
|2|/execute @a[score_ActivatedSkill_min=5020,score_ActivatedSkill=5029] ~ ~ ~ /particle dripWater ~ ~8 ~ 15 1 15 0 1000 normal|
|3|/execute @a[score_ActivatedSkill_min=5020,score_ActivatedSkill=5029] ~ ~ ~ /particle endRod ~ ~2 ~ 0 2 0 1 90 force|
|4|/execute @a[score_ActivatedSkill_min=5020,score_ActivatedSkill=5029] ~ ~ ~ /toggledownfall|
|5|/execute @a[score_ActivatedSkill_min=5020,score_ActivatedSkill=5029] ~ ~ ~ /me の魔法で天候が変わった。|

<div class="datatable2c-end"></div>

## 詳細

- **`ActivatedSkill`が5020 ~ 5029**であるすべてのプレイヤーに対して、以下の事柄を実行

1. 対象プレイヤーから**半径48m以内**のすべてのプレイヤーに、**効果音を鳴らす**
2. 対象プレイヤーの座標上で**パーティクルを表示**
3. **晴れと降雨もしくは降雪を切り替える**
4. 「(PlayerName)の魔法で天候が変わった。」とのメッセージを表示
