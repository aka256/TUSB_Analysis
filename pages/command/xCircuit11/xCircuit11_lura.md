---
title: ルーラ実行
tags: [コマンド,スキル,黒魔導士,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-14 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_lura.html
datatable3c: true
summary: 黒魔導士のスキルの1つであるルーラのワープ前までの処理を実行する。ジ・エンドでのワープ阻止や天井のブロック判定、ルーラ実行時のメッセージの表示などの処理を行う。なお、ルーラのワープ処理はルーラワープ処理で行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,16,-156)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるルーラのワープ前までの処理を実行する。ジ・エンドでのワープ阻止や天井のブロック判定、ルーラ実行時のメッセージの表示などの処理を行う。
なお、ルーラのワープ処理は[ルーラワープ処理]({{site.baseurl}}/command/xCircuit11/xCircuit11_luraWarp.html)で行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @a[score_ActivatedSkill_min=5070,score_ActivatedSkill=5079] add CastReturn|
|2|/tellraw @a[tag=CastReturn,score_USBDimension_min=100] {"text":"* 不思議な力に遮られた！","color":"light_purple","bold":true}|
|3|/scoreboard players tag @a[tag=CastReturn,score_USBDimension_min=100] remove CastReturn|条件付き|
|4|/scoreboard players tag @a[tag=CastReturn,c=1] add CastingReturn|
|5|/scoreboard players tag @a[tag=CastingReturn] remove CastReturn|条件付き|
|6|/execute @a[tag=CastingReturn] ~ ~ ~ /me はルーラを唱えた！|
|7|/execute @a[tag=CastingReturn] ~ ~ ~ detect ~ 255 ~ minecraft:air 0 /testforblocks ~ ~2 ~ ~ 255 ~ ~ ~1 ~ masked|
|8|/scoreboard players tag @a[tag=CastingReturn] add CastedReturn|条件付き|
|9|/scoreboard players tag @a[tag=CastedReturn] remove CastingReturn|条件付き|
|10|/execute @a[tag=CastingReturn] ~ ~ ~ /tellraw @a {"text":"* 頭上が遮られていたため、発動できなかった！"}|
|11|/scoreboard players tag @a[tag=CastingReturn] remove CastingReturn|条件付き|
|12|/execute @a[tag=CastedReturn] ~ ~ ~ /scoreboard players tag @a[r=10,score_Job_min=1] add Return|
|13|/scoreboard players tag @a[tag=Return,m=spectator] remove Return|
|14|/execute @a[tag=CastedReturn] ~ ~ ~ /tellraw @a {"translate":"%1$sにルーラの効果がかかった。","color":"green","with":[{"selector":"@a[r=10,tag=Return]"}]}|
|15|/scoreboard players tag @e[tag=CastedReturn] remove CastedReturn|
|16|/testfor @a[tag=CastReturn]|
|17|/clone -1920 ~ ~ -1920 ~ ~ -1920 ~ ~ filtered force minecraft:command_block 5 ###リピート|条件付き|

<div class="datatable3c-end"></div>

## 詳細

1. **`ActivatedSkill`が5070 ~ 5079**であるすべてのプレイヤーに、**`CastReturn`を付与**
2. **`CastReturn`を付与されている**すべてのプレイヤーに対し、以下の事柄を実行
   1. **`USBDimension`が100以上(ジ・エンドにいるプレイヤー)である**対象プレイヤーに対し、以下の事柄を実行
      1. 「<span style="color:#FF55FF;bold:true;">不思議な力に遮られた！</span>」とのメッセージを表示
      2. `CastReturn`を削除
   2. **`CastingReturn`を付与**
3. **`CastingReturn`を持つ**すべてのプレイヤーに対し、以下の事柄を実行
   1. `CastReturn`を削除
   2. 「(PlayerName)はルーラを唱えた！」とのメッセージを表示
   3. **対象プレイヤーの座標のy=255が空気ブロックであり、対象プレイヤーから2m上からy=255までのブロックと対象プレイヤーから1m上のブロックが空気ブロックを除いて等しいとき**、以下の事柄を実行
      1. **`CastedReturn`を付与**
      2. `CastingReturn`を削除
   4. 「頭上が遮られていたため、発動できなかった！」とのメッセージを表示
   5. `CastingReturn`を削除
4. **`CastedReturn`を持つ**プレイヤーから**半径10m以内**の`Job`が1以上であり、スペクテイターモードでないすべてのプレイヤーに、**`Return`を付与**
5. **`CastedReturn`を持つ**すべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーが存在するとき、「(**半径10m以内**の`Return`を持つプレイヤーの名前)<span style="color:green;">にルーラの効果がかかった。</span>」
   2. `CastedReturn`を削除
6. `CastReturn`を持つプレイヤーが存在するとき、[ルーラ実行部](#ルーラ実行部)を再び実行
