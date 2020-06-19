---
title: マクラエル内部
tags: [command,entity]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/19
sidebar: mydoc_sidebar
permalink: insideMcLawell.html
folder: command
---

<span class="label label-primary">位置 (-1896,117,-136)</span>

## About

TUSBに初めてログインした時にトリガーとなる部分である。初期リスポーン地点にあるマクラエル像の内部にあるコマンドブロック付きトロッコの横にあるラピスラズリブロックが、初期ファイルではこれがレッドストーンブロックになっておりコマンドブロック付きトロッコを起動させている。要は**X回路区域はこれによって起動されていることになる**。

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

- 周囲30m以内にcreativeでないプレイヤーがいる時、[初期化処理](initializeProcessing.html)を実行 (X回路区域の起動)

### その他コマンド群

以下のコマンド群はTUSBを配布直前に行う初期化装置と思われるので、**基本的には使われることはなく無視して構わない。**

{% include tip.html content="もし、何らかの事情で初期化したいときはコマンドブロック付きトロッコの隣にあるラピスラズリブロックをレッドストーンブロックに置き換えればよいと思われる。(どこで使うかは分からないが)" %}

1. (-1884,11,-200)にあるコマンドブロックに{auto:true}を付与
2. (-1901,4,-192)にある[メインクロック開始時にリセットするもの](reset.html)のNo.20のコマンドブロックに{auto:true}を付与
3. (-1870,4,-195)にある[メインクロックOFF](mainclockProcessing.html#メインクロックOFF)を実行
