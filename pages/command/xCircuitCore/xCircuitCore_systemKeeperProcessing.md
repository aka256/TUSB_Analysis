---
title: SystemKeeper処理
tags: [コマンド,表示,SystemKeeper]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/19
update: 2020-07-07 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuitCore/xCircuitCore_systemKeeperProcessing.html
folder: command
datatable3cnp: true
summary: SystemKeeperという名前のアーマースタンドと、その下にあるコマンド群によって構成され、X回路区域のセーフティーネットの役割を担っている。なので、通常では実行されることがないコマンド群である。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1870,7,-197)

[SystemKeeper](/entity/entity_entity.html)という名前のアーマースタンドと、その下にあるコマンド群によって構成され、X回路区域のセーフティーネットの役割を担っている。なので、通常では実行されることがないコマンド群である。

{% include note.html content="[SystemKeeper](/entity/entity_entity.html#systemkeeper)がこの上にいる限り実行される" %}

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/fill ~ ~1 ~ ~ ~1 ~ minecraft:stone_pressure_plate 0 replace minecraft:stone_pressure_plate|リピート|
|2|/tp @e[dy=2] ~ ~2 ~|
|3|/me は秩序を取り戻した。|
|4|/clone -1924 4 -200 -1924 4 -111 -1920 4 -200 filtered force minecraft:command_block 5|
|5|/clone -1870 4 -193 -1870 4 -193 -1870 4 -193 filtered force minecraft:command_block 1 ###チャンクローダー設定|

<div class="datatable3cnp-end"></div>

## 詳細

何かトラブルが発生し、[SystemKeeper](/entity/entity_entity.html)の移動がされず石の感圧版を押した際に以下の事柄が実行される。

1. (-1870,8,-197)の[SystemKeeper](/entity/entity_entity.html)の足元に石の感圧版を設置
2. [SystemKeerer](/entity/entity_entity.html)を2m上に移動
3. 秩序が戻った旨の通知を出す
4. [毎tick実行するコマンド群](/command/xCircuit1/xCircuit1_mainclockProcessing.html#毎tick実行するコマンド群)を実行
5. (-1870,5,-203)にある[チャンクローダー設定](/command/xCircuitCore/xCircuitCore_furnaceProcessing.html)を実行
