---
title: ジョブセーブ
tags: [コマンド,職業,経験値]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,ジョブ,職業
last_updated: 2020/6/19
update: 2020-06-19 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit2/xCircuit2_jobSave.html
folder: command
summary: 職業のレベルやレベルアップのために必要な経験値量の保存を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,11,-192)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群2](/command/xCircuit2/xCircuit2_reset.html)

職業のレベルやレベルアップのために必要な経験値量の保存を行う。

## コマンド群

|No.|コマンド|
|:-:|:-|
|1|/execute @a[score_SaveJob_min=1,score_SaveJob=1] ~ ~ ~ /scoreboard players operation @a[c=1] KnightLevel = @a[c=1] Level|
|2|/execute @a[score_SaveJob_min=1,score_SaveJob=1] ~ ~ ~ /scoreboard players operation @a[c=1] KnightToLevel = @a[c=1] ExpToLevel|
|3|/execute @a[score_SaveJob_min=2,score_SaveJob=2] ~ ~ ~ /scoreboard players operation @a[c=1] NinjaLevel = @a[c=1] Level|
|4|/execute @a[score_SaveJob_min=2,score_SaveJob=2] ~ ~ ~ /scoreboard players operation @a[c=1] NinjaToLevel = @a[c=1] ExpToLevel|
|5|/execute @a[score_SaveJob_min=3,score_SaveJob=3] ~ ~ ~ /scoreboard players operation @a[c=1] ArcherLevel = @a[c=1] Level|
|6|/execute @a[score_SaveJob_min=3,score_SaveJob=3] ~ ~ ~ /scoreboard players operation @a[c=1] ArcherToLevel = @a[c=1] ExpToLevel|
|7|/execute @a[score_SaveJob_min=4,score_SaveJob=4] ~ ~ ~ /scoreboard players operation @a[c=1] WhiteMageLevel = @a[c=1] Level|
|8|/execute @a[score_SaveJob_min=4,score_SaveJob=4] ~ ~ ~ /scoreboard players operation @a[c=1] WhiteMageToLevel = @a[c=1] ExpToLevel|
|9|/execute @a[score_SaveJob_min=5,score_SaveJob=5] ~ ~ ~ /scoreboard players operation @a[c=1] BlackMageLevel = @a[c=1] Level|
|10|/execute @a[score_SaveJob_min=5,score_SaveJob=5] ~ ~ ~ /scoreboard players operation @a[c=1] BlackMageToLevel = @a[c=1] ExpToLevel|
|11|/execute @a[score_SaveJob_min=6,score_SaveJob=6] ~ ~ ~ /scoreboard players operation @a[c=1] SummonerLevel = @a[c=1] Level|
|12|/execute @a[score_SaveJob_min=6,score_SaveJob=6] ~ ~ ~ /scoreboard players operation @a[c=1] SummonerToLevel = @a[c=1] ExpToLevel|
|13|/scoreboard players reset @a[score_SaveJob_min=0] SaveJob|

## 詳細

1. `SaveJob`がそれぞれの職業のものと等しいプレイヤーの`(Job)Level`に`Level`を、`(Job)ToLevel`に`ExpToLevel`をそれぞれ代入
2. `SaveJob`が0以上のプレイヤーの`SaveJob`を0に設定
