---
title: ルーラワープ処理
tags: [コマンド,スキル,黒魔導士,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-14 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_luraWarp.html
datatable3c: true
summary: 黒魔導士のスキルの1つであるルーラを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,17,-156)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるルーラのテレポート処理を実行する。ネザーからのテレポート処理やオーバーワールドからのテレポート処理を行う。また、このコマンド群にはジ・エンドからのテレポート処理もあるが、これが使われることはないと思われる。
なお、テレポート前までの処理は[ルーラ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_lura.html)で行われる。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/gamemode adventure @a[tag=Return]|
|2|/scoreboard players tag @a[tag=ReturnFromEnd,score_USBDimension_min=100] add ReturnFailed|
|3|/scoreboard players tag @a[tag=ReturnFromEnd] remove ReturnFromEnd|
|4|/scoreboard players tag @a[tag=ReturnFromNether,score_USBDimension=-1] add ReturnFailed|
|5|/scoreboard players tag @a[tag=ReturnFromNether] remove ReturnFromNether|
|6|/execute @a[tag=ReturnFailed] ~ ~ ~ detect ~ ~1 ~ minecraft:portal -1 /scoreboard players tag @a[c=1] remove ReturnFailed|
|7|/tellraw @a[tag=ReturnFailed] {"text":"元の世界に戻れなかった！","color":"yellow"}|
|8|/scoreboard players tag @a[tag=ReturnFailed] remove Return|条件付き|
|9|/scoreboard players tag @a[tag=ReturnFailed] remove ReturnFailed|条件付き|
|10|/scoreboard players tag @a[tag=Return2,score_USBDimension_min=100] add ReturnFromEnd|
|11|/scoreboard players tag @a[tag=Return2,score_USBDimension=-1] add ReturnFromNether|
|12|/gamemode creative @a[tag=Return2]|
|13|/scoreboard players tag @a[tag=Return2] remove Return2|条件付き|
|14|/scoreboard players tag @a[tag=Return,m=adventure,score_USBDimension_min=100] add Return2|
|15|/tp @a[tag=Return,m=adventure,score_USBDimension_min=100] 119 33.1 0|条件付き|
|16|/scoreboard players tag @a[tag=Return,m=adventure,score_USBDimension=-1] add Return2|
|17|/tp @a[tag=Return,m=adventure,score_USBDimension=-1] 0 29 0|条件付き|
|18|/tp @a[tag=Return,rm=-1] -58 18 19|
|19|/playsound entity.firework.launch master @a[tag=Return,rm=-1] -58 18 19 1 1.414 1|条件付き|
|20|/scoreboard players tag @a[tag=Return,rm=-1] remove Return|条件付き|

<div class="datatable3c-end"></div>

## 詳細

1. **`Retuen`を持つ**すべてのプレイヤーを**アドベンチャーモードに変更**
2. **`ReturnFromEnd`を持つ**すべてのプレイヤーに対し、以下の事柄を実行
   1. `USBDimensino`が100以上(ジ・エンドにいるプレイヤー)である対象プレイヤーに**`ReturnFailed`を付与**
   2. `ReturnFromEnd`を削除
3. **`ReturnFromNether`を持つ**すべてのプレイヤーに対し、以下の事柄を実行
   1. `USBDimensino`が-1以下(ネザーにいるプレイヤー)である対象プレイヤーに**`ReturnFailed`を付与**
   2. `ReturnFromNether`を削除
4. `ReturnFailed`を持つプレイヤーから**1m上(頭部)がポータルブロックであるとき**、`ReturnFailed`を削除
5. **`ReturnFailed`を持つ**すべてのプレイヤーに対し、以下の事柄を実行
   1. 「<span style="color:yellow; background-color:gray;">元の世界に戻れなかった！</span>」とのメッセージを表示
   2. `Return`を削除
   3. `ReturnFailed`を削除
6. **`Return2`を持つ**すべてのプレイヤーに対し、以下の事柄を実行
   1. `USBDimension`が100以上(ジ・エンドにいるプレイヤー)である対象プレイヤーに**`ReturnFromEnd`を付与**
   2. `USBDimension`が-1以下(ネザーにいるプレイヤー)である対象プレイヤーに**`ReturnFromNether`を付与**
   3. **クリエイティブに変更**
   4. `Return2`を削除
7. **`Return`を持つ**すべてのプレイヤーに対して、以下の事柄を実行
   1. アドベンチャーモードであり、`USBDimension`が100以上(ジ・エンドにいるプレイヤー)である対象プレイヤーに、`Return2`を付与し、**エンドの(119,33.1,0)(エンドのテレポート地点の裏のポータル内)にテレポートさせる**
   2. アドベンチャーモードであり、`USBDimension`が-1以上(ネザーにいるプレイヤー)である対象プレイヤーに、`Return2`を付与し、**ネザーの(0,29,0)にテレポートさせる(ネザーの通常世界へのポータル内)**
   3. オーバーワールド内にいる対象プレイヤーを**(-58,18,19)(交易島)にテレポート**し、効果音を鳴らす
   4. `Return`を削除
