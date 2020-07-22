---
title: マジックシールド終了処理
tags: [コマンド,黒魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-20 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit4/xCircuit4_magicShieldEndProcessing.html
datatable4c: true
summary: マジックシールドの終了処理を行う。
summaryDisable: true
search: exclude
---

## About

<span class="tagYellow">位置</span> (-1920,9,-184)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群4]({{site.baseurl}}/command/xCircuit4/xCircuit4_command.html)

マジックシールドの終了処理を行う。

## コマンド群

|No.|コマンド|
|-|-|
|1|/effect @a[tag=MagicShieldEnd] minecraft:resistance 0|
|2|/tellraw @a[tag=MagicShieldEnd] {"text":"マジックシールドの効果が切れた。","color":"gold"}|
|3|/execute @a[tag=MagicShieldEnd] ~ ~ ~ /particle iconcrack ~ ~1 ~ 0.5 0.5 0.5 0.2 60 force @a[r=64] 373|
|4|/execute @a[tag=MagicShieldEnd] ~ ~ ~ /playsound block.glass.break master @a[r=16] ~ ~ ~ 1 0.6 0|
|5|/scoreboard players tag @a[tag=MagicShieldEnd] remove MagicShield|
|6|/scoreboard players tag @a[tag=MagicShieldEnd] remove MagicShieldEnd|

## 詳細

`MagicShieldEnd`を持つすべてのプレイヤーを対象として、以下の事柄を実行

1. 耐性エフェクトを削除
2. 「<span style="color: gold;">マジックシールドの効果が切れた。</span>」とのメッセージを表示
3. 演出を実行
4. 対象から`MagicShield`と`MagicShieldEnd`を削除
