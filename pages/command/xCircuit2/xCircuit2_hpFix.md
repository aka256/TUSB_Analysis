---
title: 最大HP調整処理
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,HP
last_updated: 2020/6/19
update: 2020-06-19 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit2/xCircuit2_hpFix.html
folder: command
datatable2c: true
summary: スコアに応じて、基礎体力増加によるHP増加処理を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,16,-191)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群2]({{site.baseurl}}/command/xCircuit2/xCircuit2_reset.html)

スコアに応じて、基礎体力増加によるHP増加処理を行う。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|:-|
|1|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=12,score_HPMax=13] minecraft:health_boost 1000000 0 true|
|2|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=14,score_HPMax=15] minecraft:health_boost 1000000 1 true|
|3|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=16,score_HPMax=17] minecraft:health_boost 1000000 2 true|
|4|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=18,score_HPMax=19] minecraft:health_boost 1000000 3 true|
|5|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=20,score_HPMax=21] minecraft:health_boost 1000000 4 true|
|6|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=22,score_HPMax=23] minecraft:health_boost 1000000 5 true|
|7|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=24,score_HPMax=25] minecraft:health_boost 1000000 6 true|
|8|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=26,score_HPMax=27] minecraft:health_boost 1000000 7 true|
|9|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=28,score_HPMax=29] minecraft:health_boost 1000000 8 true|
|10|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=30,score_HPMax=31] minecraft:health_boost 1000000 9 true|
|11|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=32,score_HPMax=33] minecraft:health_boost 1000000 10 true|
|12|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=34,score_HPMax=35] minecraft:health_boost 1000000 11 true|
|13|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=36,score_HPMax=37] minecraft:health_boost 1000000 12 true|
|14|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=38,score_HPMax=39] minecraft:health_boost 1000000 13 true|
|15|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=40,score_HPMax=41] minecraft:health_boost 1000000 14 true|
|16|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=42,score_HPMax=43] minecraft:health_boost 1000000 15 true|
|17|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=44,score_HPMax=45] minecraft:health_boost 1000000 16 true|
|18|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=46,score_HPMax=47] minecraft:health_boost 1000000 17 true|
|19|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=48,score_HPMax=49] minecraft:health_boost 1000000 18 true|
|20|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=50] minecraft:health_boost 1000000 19 true|
|21|/effect @a[score_RefreshHPMax_min=3] minecraft:instant_health 1 6 true|
|22|/scoreboard players reset @a[score_RefreshHPMax_min=2] RefreshHPMax|

<div class="datatable2c-end"></div>

## 詳細

1. `RefreshHPMax`が2以上のプレイヤーで`HPMax`の値に対応した基礎体力増加を1000000秒間付与(Lvについては以下の表を参照)
2. `RefreshHPMax`が3以上であるプレイヤーに即時回復Lv.6を1秒間付与(増加分のHPを回復させるため)
3. `RefreshHPMax`が2以上であるプレイヤーの`RefreshHPMax`を0に設定

### 基礎体力増加について

|HPMax|health_boost Lv.|
|:-:|:-:|
|12,13|0|
|14,15|1|
|16,17|2|
|18,19|3|
|20,21|4|
|22,23|5|
|24,25|6|
|26,27|7|
|28,29|8|
|30,31|9|
|32,33|10|
|34,35|11|
|36,37|12|
|38,39|13|
|40,41|14|
|42,43|15|
|44,45|16|
|46,47|17|
|48,40|18|
|50~|19|
