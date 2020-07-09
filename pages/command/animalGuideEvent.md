---
title: 動物誘導イベント
tags: [コマンド,嫌な予感,表示,村人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,動物誘導イベント,嫌な予感
last_updated: 2020/6/23
update: 2020/6/23
sidebar: mydoc_sidebar
permalink: animalGuideEvent.html
folder: command
datatable3cnp: true
---

<span class="label label-primary">位置 (-1920,13,-197)</span>

## About

嫌な予感のイベントの1つである動物誘導イベントを管理するコマンド群である。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute 0-0-1-0-3 ~ ~ ~ /kill @e[r=5,tag=VillagerMeal,score_Freshness_min=-9]|
|2|/execute 0-0-1-0-3 ~ ~ ~ /tellraw @a {"translate":"* %1$s 「連れて来て下さったのですか！ ありがとうございます。これはほんのお礼です。お受取り下さい。」","with":[{"text":"農業家","color":"dark_green"}]}|条件付き|
|3|/execute 0-0-1-0-3 ~ ~ ~ /tellraw @a {"translate":"* %1$s 「お～い、みんな！ ごはんだぞ～！！」","with":[{"text":"農業家","color":"dark_green"}]}|条件付き|
|4|/execute 0-0-1-0-3 ~ ~ ~ /kill @e[r=5,tag=VillagerMeal,score_Freshness=-10]|
|5|/execute 0-0-1-0-3 ~ ~ ~ /tellraw @a {"translate":"* %1$s 「あぁ…連れて来て下さったのですか…。ありがとうございます。でも食事の時間はもう終わってしまいました…。」","with":[{"text":"農業家","color":"dark_green"}]}|条件付き|

<div class="datatable3cnp-end"></div>

## 詳細

1. 農業家の半径5m以内に`VillagerMeal`を持ち、`Freshness`が-9以上のエンティティを殺したとき、農業家からのお礼のメッセージを流す
2. 農業家の半径5m以内に`VillagerMeal`を持ち、`Freshness`が-10以下のエンティティを殺したとき、農業家から間に合わなかったとのメッセージを流す
