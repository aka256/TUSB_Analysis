---
title: 村人像内部
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/19
update: 2020-06-19 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuitCore/xCircuitCore_insideMcLawell.html
folder: command
summary: TUSBに初めてログインした時にトリガーとなる部分である。初期リスポーン地点にある村人像の内部にあるコマンドブロック付きトロッコの横にあるラピスラズリブロックが、初期ファイルではこれがレッドストーンブロックになっておりコマンドブロック付きトロッコを起動させている。要はX回路区域はこれによって起動されていることになる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1896,117,-136)

<span class="tagBlue">分岐先</span> [初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html)

TUSBに初めてログインした時にトリガーとなる部分である。初期リスポーン地点にある村人像の内部にあるコマンドブロック付きトロッコの横にあるラピスラズリブロックが、初期ファイルではこれがレッドストーンブロックになっておりコマンドブロック付きトロッコを起動させている。要は**X回路区域はこれによって起動されていることになる**。

{% include note.html content="初期状態を確かめるにはクリエイティブでワールドに入る必要がある。これを実現させるためには**NBT Explorer**などの外部ツールによって、level.datを書き換える必要がある。" %}

## コマンド群

### コマンドブロック付きトロッコ

```minecraftcommand
/execute @p[r=30,m=!creative] ~ ~ ~ /clone -1870 4 -194 -1870 4 -158 -1870 4 -194 filtered force minecraft:command_block
```

### その他コマンド群

|No.|コマンド|
|:-:|:-|
|1|/blockdata -1884 11 -200 {auto:true}|
|2|/blockdata -1901 4 -192 {auto:true}|
|3|/clone -1870 4 -195 -1870 4 -195 -1870 4 -195 filtered force minecraft:command_block|

## 詳細

### コマンドブロック付きトロッコ

- 周囲30m以内にcreativeでないプレイヤーがいる時、[初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html)を実行 (X回路区域の起動)

### その他コマンド群

以下のコマンド群はTUSBを配布直前に行う初期化装置と思われるので、**基本的には使われることはなく無視して構わない。**

{% include tip.html content="もし、何らかの事情で初期化したいときはコマンドブロック付きトロッコの隣にあるラピスラズリブロックをレッドストーンブロックに置き換えればよいと思われる。(どこで使うかは分からないが)" %}

1. (-1884,11,-200)にあるコマンドブロックに{auto:true}を付与
2. (-1901,4,-192)にある[毎tick実行するコマンド群2]({{site.baseurl}}/command/xCircuit2/xCircuit2_reset.html)のNo.20のコマンドブロックに{auto:true}を付与
3. (-1870,4,-195)にある[メインクロックOFF]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_mainclockProcessing.html#メインクロックOFF)を実行
