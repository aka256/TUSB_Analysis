---
title: 黙想終了処理
tags: [コマンド,スキル,忍者]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-20 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit4/xCircuit4_mokusoEndProcessing.html
datatable4c: true
summary: 黙想終了時の処理を行う。
summaryDisable: true
search: exclude
---

## About

<span class="tagYellow">位置</span> (-1920,8,-184)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群4]({{site.baseurl}}/command/xCircuit4/xCircuit4_command.html)

黙想終了時の処理を行う。

## コマンド群

|No|コマンド|
|:-:|-|
|1|/effect @a[tag=MokusoEnd] minecraft:regeneration 0|
|2|/tellraw @a[tag=MokusoEnd] {"text":"黙想の効果が切れた。","color":"gold"}|
|3|/execute @a[tag=MokusoEnd] ~ ~ ~ /particle endRod ~ ~1 ~ 1 0.5 1 0.1 30 force|
|4|/execute @a[tag=MokusoEnd] ~ ~ ~ /playsound block.glass.break master @a[r=16] ~ ~ ~ 1 1.6 0|
|5|/scoreboard players tag @a[tag=MokusoEnd] remove Mokuso|
|6|/scoreboard players tag @a[tag=MokusoEnd] remove MokusoEnd|

## 詳細

`MokusoEnd`を持つすべてのプレイヤーを対象として、以下の事柄を実行

1. 再生能力を削除
2. 「<span style="color: gold;">黙想の効果が切れた。</span>」とのメッセージを表示
3. 演出を実行
4. 対象から`Mokuso`と`MokusoEnd`を削除
