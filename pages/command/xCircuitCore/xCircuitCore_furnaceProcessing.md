---
title: チャンクローダー設定
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
update: 2020-06-17 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuitCore/xCircuitCore_furnaceProcessing.html
folder: command
summary: かまど、ネザーポータル、レッドストーン回路などによって構成されていて、スポーンチャンクを常に読み込むための装置である。スポーンチャンクでアイテムを定期的にネザーポータルに投げ入れると、その周囲のチャンクが読み込まれ続けるという仕様を利用して、X回路区域を常に読み込み続けている。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1870,5,-203)

<span class="tagBlack">呼び出し元</span> [初期化処理](/command/xCircuitCore/xCircuitCore_initializeProcessing.html), [SystemKeeper処理](/command/xCircuitCore/xCircuitCore_systemKeeperProcessing.html)

かまど、ネザーポータル、レッドストーン回路などによって構成されていて、スポーンチャンクを常に読み込むための装置である。

スポーンチャンクでアイテムを定期的にネザーポータルに投げ入れると、その周囲のチャンクが読み込まれ続けるという仕様を利用して、X回路区域を常に読み込み続けている。

{% include tip.html content="スポーンチャンクについてもっと知りたい場合は[Spawn chunk|Minecraft Wiki](https://minecraft.gamepedia.com/Spawn_chunk)を読むとよい。" %}

## コマンド

- /blockdata ~-2 ~ ~ {Items:[{id:"minecraft:cactus",Count:127b,Slot:0b},{id:"minecraft:coal",Count:127b,Slot:1b}]}

## 詳細

1. (-1872,5,-203)のかまどにサボテンと石炭を入れる
2. サボテンが燃えたらネザーポータルに送り込むと同時に再びコマンドを実行
3. これを繰り返す
