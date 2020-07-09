---
title: お祈りkill
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,お祈り
last_updated: 2020/6/26
update: 2020/6/27
sidebar: mydoc_sidebar
permalink: 3_prayProcessing.html
folder: command/3
datatable4cnp: false
---

<span class="label label-primary">位置 (-1920,9,-189)</span>

## About

お祈りによるkillを処理を行う。

## コマンド群

|No.|コマンド|
|:-:|-|
|1|/scoreboard players set @a[score_kill_min=1,score_kill=1] MP 0|
|2|/scoreboard players set @a[score_kill_min=1,score_kill=1] MPMaxFlag 0|
|3|/spawnpoint @a[score_kill_min=1,score_kill=1] -64 15.0625 30|
|4|/kill @a[score_kill_min=1]|
|5|/scoreboard players set @a[score_kill_min=1] kill 0|

## 詳細

1. `kill`が1であるすべてのプレイヤーの`MP`と`MPMaxFlag`をそれぞれ0に設定し、スポーンポイントを(-64,15.0625,30)に設定
2. `kill`が1以上であるすべてのプレイヤーをキルする
3. `kill`が1以上であるすべてのプレイヤーの`kill`を0に設定
