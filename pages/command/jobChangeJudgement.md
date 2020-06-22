---
title: ジョブチェンジ先判定
tags: [command,job,item]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,職業変更許可書,釣りチケ,職業島,ブラジル
last_updated: 2020/6/19
update: 2020-06-19 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: jobChangeJudgement.html
folder: command
datatable3c: true
---

<span class="label label-primary">位置 (-1920,10,-192)</span>

## About

職業変更許可書や釣りチケなどの処理を行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/clear @a[score_Job_min=1] minecraft:paper 0 -1 {display:{Name:"§r§lジョブ変更申請書"},初回:true}|
|2|/scoreboard players set @a ItemCount -1|
|3|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l剣士変更許可証"}}|
|4|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 1|条件付き|
|5|/scoreboard players set @a ItemCount -1|
|6|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l忍者変更許可証"}}|
|7|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 2|条件付き|
|8|/scoreboard players set @a ItemCount -1|
|9|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l狩人変更許可証"}}|
|10|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 3|条件付き|
|11|/scoreboard players set @a ItemCount -1|
|12|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l白魔導士変更許可証"}}|
|13|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 4|条件付き|
|14|/scoreboard players set @a ItemCount -1|
|15|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l黒魔導士変更許可証"}}|
|16|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 5|条件付き|
|17|/scoreboard players set @a ItemCount -1|
|18|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l召喚士変更許可証"}}|
|19|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 6|条件付き|
|20|/scoreboard players set @a ItemCount -1|
|21|/clear @a minecraft:paper -1 -1 {display:{Lore:["§r§n釣り堀-海幸彦-"],Name:"§r§l釣りチケ3分"}}|
|22|/effect @a[score_ItemCount_min=1] minecraft:unluck 180 20|条件付き|
|23|/tellraw @a[score_ItemCount_min=1] {"text":"今なら変わったものが釣れそうだ！","color":"green"}|条件付き|

<div class="datatable3c-end"></div>

## 詳細

1. `Job`が1以上であるプレイヤーからジョブ変更申請書や各職業の変更許可書を削除し、職業変更許可書の場合はプレイヤーの`LoadJob`を各職業ごとに設定
2. プレイヤーの`ItemCount`を-1に設定
3. プレイヤーから釣りチケ3分を削除し、`ItemCount`が1以上であるプレイヤーに不幸Lv.20を180秒間とテキストを表示
