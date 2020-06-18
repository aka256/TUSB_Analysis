---
title: かまど再設定
tags: [command]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
sidebar: mydoc_sidebar
permalink: furnaceProcessing.html
folder: command
---

- 位置(-1870,5,-203)
- スポーンチャンクを常に読み込むための装置 (のはず)

## コマンド

- /blockdata ~-2 ~ ~ {Items:[{id:"minecraft:cactus",Count:127b,Slot:0b},{id:"minecraft:coal",Count:127b,Slot:1b}]}

## 詳細

1. (-1872,5,-203)のかまどにサボテンと石炭を入れる
2. サボテンが燃えたらネザーポータルに送り込むと同時に再びコマンドを実行
3. これを繰り返す
