---
title: アイアンウィル継続処理
tags: [コマンド,スキル,剣士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-20 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit4/xCircuit4_ironWillContinueJudgment.html
datatable4c: true
summary: アイアンウィル使用時、盾を持ってる際の処理やアイアンウィルの終了処理を行う。
summaryDisable: true
search: exclude
---

## About

<span class="tagYellow">位置</span> (-1920,11,-184)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群4]({{site.baseurl}}/command/xCircuit4/xCircuit4_command.html)

アイアンウィル使用時、盾を持ってる際の処理やアイアンウィルの終了処理を行う。

## コマンド群

|No.|コマンド|状態|
|-|-|
|1|/execute @a[tag=IronWill] ~ ~ ~ /scoreboard players operation @a[c=1] IronWill += @a[c=1] Armor|
|2|/scoreboard players tag @a[tag=IronWill] add WithShield {Inventory:[{Slot:-106b,id:minecraft:shield}]}|
|3|/scoreboard players tag @a[tag=IronWill] add WithShield {SelectedItem:{id:minecraft:shield}}|
|4|/scoreboard players add @a[tag=WithShield] IronWill 10|
|5|/scoreboard players tag @a[tag=WithShield] remove WithShield|条件付き|
|6|/scoreboard players remove @a[tag=IronWill] IronWill 100|
|7|/scoreboard players tag @a[tag=IronWill] remove IronWill|
|8|/tellraw @a[score_IronWill=0] {"text":"アイアンウィルの効果が切れた。","color":"gold"}|
|9|/scoreboard players reset @a[score_IronWill=0] IronWill|条件付き|

## 詳細

1. `IronWill`(タグ)を持つプレイヤーを一人選択し、`IronWill`(スコア)に`Armor`を足しこむ
2. `IronWill`(タグ)を持ち、メインハンドもしくはオフハンドに盾を持っているすべてのプレイヤーに`WithShield`を付与
3. `WithShield`を持つすべてのプレイヤーの`IronWill`(スコア)に10を足す
4. `WithShield`を持つすべてのプレイヤーから`WithShield`を削除
5. `IronWill`(タグ)を持つすべてのプレイヤーの`IronWill`(スコア)から100を引く
6. `IronWill`(タグ)を持つすべてのプレイヤーから`IronWill`(タグ)を削除
7. `IronWill`が0以下であるすべてのプレイヤーに「<span style="color: gold;">アイアンウィルの効果が切れた。</span>」というメッセージを表示し、`IronWill`(スコア)を0に設定
