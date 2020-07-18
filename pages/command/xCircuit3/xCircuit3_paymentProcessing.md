---
title: エメラルド支払い処理
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,エメラルド
last_updated: 2020/6/26
update: 2020/6/27
sidebar: mydoc_sidebar
permalink: command/xCircuit3/xCircuit3_paymentProcessing.html
folder: command/3
datatable3cnp: true
summary: エージェントや占い師などでのエメラルドによる支払い処理を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,14,-189)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群3](/command/xCircuit3/xCircuit3_command.html)

エージェントや占い師などでのエメラルドによる支払い処理を行う。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players set @a[score_Payment_min=1] ItemCount -1|
|2|/clear @a[score_Payment_min=1] minecraft:emerald 0 0|
|3|/execute @a[score_Payment_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] ItemCount < @a[c=1] Payment|
|4|/execute @a[score_Payment_min=1,score_ItemCount_min=1] ~ ~ ~ /playsound entity.experience_orb.pickup master @a[c=1] ~ ~ ~ 0.3 1.782 0.3|
|5|/clear @a[score_Payment_min=1,score_ItemCount_min=1,score_ItemCount=3] minecraft:emerald 0 1|
|6|/scoreboard players remove @a[score_Payment_min=1,score_ItemCount_min=1,score_ItemCount=3] Payment 1|条件付き|
|7|/clear @a[score_Payment_min=1,score_ItemCount_min=4,score_ItemCount=15] minecraft:emerald 0 4|
|8|/scoreboard players remove @a[score_Payment_min=1,score_ItemCount_min=4,score_ItemCount=15] Payment 4|条件付き|
|9|/clear @a[score_Payment_min=1,score_ItemCount_min=16,score_ItemCount=63] minecraft:emerald 0 16|
|10|/scoreboard players remove @a[score_Payment_min=1,score_ItemCount_min=16,score_ItemCount=63] Payment 16|条件付き|
|11|/clear @a[score_Payment_min=1,score_ItemCount_min=64] minecraft:emerald 0 64|
|12|/scoreboard players remove @a[score_Payment_min=1,score_ItemCount_min=64] Payment 64|条件付き|

<div class="datatable3cnp-end"></div>

## 詳細

1. `Payment`が1以上であるすべてのプレイヤーの`ItemCount`を-1に設定し、`ItemCount`が`Payment`より大きい場合、`ItemCount`に`Payment`を代入
2. `Payment`が1以上であり、`ItemCount`が1以上であるプレイヤーの位置で効果音を鳴らす
3. `Payment`が1以上であるとき、`ItemCount`の値によってエメラルドをプレイヤーから奪い取り、`Payment`から値を引く(以下参照)

### payment処理

|ItemCount|エメラルド数|Paymentから引く値|
|:-:|:-:|:-:|
|1~3|1|1|
|4~15|4|4|
|16~63|16|16|
|64~|64|64|
