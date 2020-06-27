---
title: ベッド処理
tags: [command]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/26
update: 2020/6/27
sidebar: mydoc_sidebar
permalink: 3_bedProcessing.html
folder: command/3
datatable4cnp: false
---

<span class="label label-primary">位置 (-1920,8,-189)</span>

## About

ベッドで寝た際の回復処理や、アドベンチャーモードでの就寝処理を行う。

## コマンド群

|No.|コマンド|状態|
|:-:|-|-|
|1|/effect @a[m=adventure,score_SleepInBed_min=1] minecraft:instant_damage 1 0 true|
|2|/tellraw @a[m=adventure,score_SleepInBed_min=1] {"text":"痛っ！ここで寝るのは危ないようだ。","color":"yellow"}|条件付き|
|3|/effect @a[m=survival,score_SleepInBed_min=1] minecraft:instant_health 1 6 true|
|4|/tellraw @a[m=survival,score_SleepInBed_min=1] {"text":"( ˘ω˘ ) ｽﾔｧ…疲れが取れていく…","color":"aqua"}|条件付き|
|5|/scoreboard players set @a[score_SleepInBed_min=1] SleepInBed 0|

## 詳細

1. アドベンチャーモードであり、`SleepInBed`が1以上であるとき、即時ダメージLv.0を付与し、「痛っ！ここで寝るのは危ないようだ。」と表示
2. サバイバルモードであり、`SleepInBed`が1以上であるとき、即時回復Lv.6を付与し、「( ˘ω˘ ) ｽﾔｧ…疲れが取れていく…」と表示
3. `SleepInBed`が1以上であるすべてのプレイヤーの`SleepInBed`を0に設定
