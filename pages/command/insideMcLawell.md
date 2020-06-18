---
title: マクラウェル内部
tags: [command,entity]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
sidebar: mydoc_sidebar
permalink: insideMcLawell.html
folder: command
---

- 位置(-1896,117,-136)

## コマンド群

コマンドトロッコ

- /execute @p[r=30,m=!creative] ~ ~ ~ /clone -1870 4 -194 -1870 4 -158 -1870 4 -194 filtered force minecraft:command_block

|No.|コマンド|
|:-:|:-|
|1|/blockdata -1884 11 -200 {auto:true}|
|2|/blockdata -1901 4 -192 {auto:true}|
|3|/clone -1870 4 -195 -1870 4 -195 -1870 4 -195 filtered force minecraft:command_block|

## 詳細

コマンドトロッコ

- 周囲30m以内にcreativeでないプレイヤーがいる時、[スコアボードの設定](setScoreboard.html)などを実行

1. (-1884,11,-200)にあるコマンドブロックに{auto:true}を付与
2. (-1901,4,-192)にある[メインクロック開始時にリセットするもの](reset.html)のNo.20のコマンドブロックに{auto:true}を付与
3. (-1870,4,-195)にある[メインクロックOFF](mainclockProcessing.html)を実行
