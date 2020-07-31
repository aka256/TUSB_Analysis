---
title: 真空斬り使用判定
tags: [コマンド,剣士,スキル]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-31 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit5/xCircuit5_aerialSlashUseJudgment.html
datatable3cnp: true
summary: 剣士のスキルの1つである真空斬りの使用時の判定処理を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,12,-181)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群5]({{site.baseurl}}/command/xCircuit5/xCircuit5_command.html)

剣士のスキルの1つである真空斬りの使用時の判定処理を行う。

## コマンド群

(-1921,10,-181)にレッドストーンブロックが置かれている限り、以下のコマンド群が実行され続ける。

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[tag=AerialSlash] ~ ~2.3 ~ /scoreboard players tag @e[r=2,tag=AerialShockwave] add AerialTransition|リピート|
|2|/execute @a[tag=AerialSlash] ~ ~2.3 ~ /scoreboard players tag @e[r=2,tag=AerialTransition] remove AerialTransition {Motion:[0d]}|条件付き|
|3|/execute @a[tag=AerialSlash] ~ ~2.3 ~ /execute @e[r=2,type=Fireball,tag=AerialTransition,c=1] ~ ~-2.3 ~ /scoreboard players tag @a[r=2,tag=AerialSlash] add UseMode|
|4|/execute @a[tag=AerialSlash] ~ ~2.3 ~ /execute @e[r=2,type=Fireball,tag=AerialTransition,c=1] ~ ~-2.3 ~ /scoreboard players tag @a[r=2,tag=AerialSlash] remove AerialSlash|条件付き|
|5|/scoreboard players tag @a[tag=AerialSlash,score_WalkOneCm_min=1] remove AerialSlash|
|6|/scoreboard players test #EntityCount Global * 0|
|7|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3cnp-end"></div>

## 詳細

1. `AerialSlash`を持つすべてのプレイヤーの2.3m上を中心とした、半径2m以内に存在する`AerialShockwave`を持ち、移動ベクトルが0でないすべてのエンティティに`AerialTransition`を付与
2. `AerialSlash`を持つすべてのプレイヤーの2.3m上を中心とした、半径2m以内に存在する`AerialTransition`を持つすべてのファイアーボールから2.3m下から2m以内にいる`AerialSlash`を持つすべてのプレイヤーに`UseMode`を付与し、`AerialSlash`を削除
3. `AerialSlash`を持ち、`WalkOneCm`が1以上であるすべてのプレイヤーから`AerialSlash`を削除
4. `#EntityCount`の`Global`が0以下であるとき、[真空斬り使用判定](#about)を停止
