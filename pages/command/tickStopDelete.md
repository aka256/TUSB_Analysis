---
title: Tick停止飛翔物削除
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/20
update: 2020-06-20 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: tickStopDelete.html
folder: command
datatable4cnp: false
---

<span class="label label-primary">位置 (-1920,15,-200)</span>

## About

凍結されたチャンク内にある飛翔物を削除するためのコマンド群と思われる。

## コマンド群

|No.|コマンド|コメント|
|:-:|-|-|
|1|/scoreboard players tag @e[tag=TestingTick] add Garbage {PortalCooldown:1}|Tick停止飛翔物削除 TestingTick|
|2|/scoreboard players tag @e[tag=TestingTick] remove TestingTick|

## 詳細

- `TestingTick`を持ち、`PortalCooldown`が1であるエンティティに`Garbage`を付与し、`TestingTick`を削除
