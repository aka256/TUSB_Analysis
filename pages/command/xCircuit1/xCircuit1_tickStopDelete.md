---
title: Tick停止飛翔物削除
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/20
update: 2020-06-20 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit1/xCircuit1_tickStopDelete.html
folder: xCircuit1
datatable4cnp: false
summary: 凍結されたチャンク内にある飛翔物を削除するためのコマンド群と思われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,15,-200)

<span class="tagBlack">呼び出し元</span> [時間経過]({{site.baseurl}}/command/xCircuit1/xCircuit1_timeElapsed.html)

凍結されたチャンク内にある飛翔物を削除するためのコマンド群と思われる。

## コマンド群

|No.|コマンド|コメント|
|:-:|-|-|
|1|/scoreboard players tag @e[tag=TestingTick] add Garbage {PortalCooldown:1}|Tick停止飛翔物削除 TestingTick|
|2|/scoreboard players tag @e[tag=TestingTick] remove TestingTick|

## 詳細

- `TestingTick`を持ち、`PortalCooldown`が1であるエンティティに`Garbage`を付与し、`TestingTick`を削除
