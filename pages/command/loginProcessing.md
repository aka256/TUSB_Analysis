---
title: ログイン時処理
tags: [command,display]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
sidebar: mydoc_sidebar
permalink: loginProcessing.html
folder: command
datatable3cnp: true
---

- 位置(-1920,9,-192)
- 通常ログイン時の処理

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/difficulty hard|
|2|/scoreboard players tag @a[score_LeaveGame_min=1,tag=Resolved,score_Job=2147483647] remove Resolved|
|3|/execute @a[score_LeaveGame_min=1,tag=Resolved,c=1] ~ ~ ~ /tellraw @a [{"text":"[INFO]\n プレイヤー名の変更を検知しました。ステータスが引き継がれていません。\n以下のページを参考にワールドデータのスコアボードファイルを修正してください。\n"},{"text":"http://ch.nicovideo.jp/akaishi_ai/blomaga/ar970627\n","clickEvent":{"action":"open_url","value":"http://ch.nicovideo.jp/akaishi_ai/blomaga/ar970627"}},{"translate":"修正が必要なプレイヤー : ","with":[{"selector":"@a[score_LeaveGame_min=1,tag=Resolved]"}]}]|
|4|/scoreboard players reset @a[score_LeaveGame_min=1,tag=Resolved] LeaveGame|条件付き|
|5|/scoreboard players tag @a[score_LeaveGame_min=1] add Resolved|
|6|/scoreboard players add @a[score_LeaveGame_min=1] MP 0|
|7|/scoreboard players set @a[score_LeaveGame_min=1,score_MP=0,score_MPMaxFlag_min=1] MPMaxFlag 0|
|8|/scoreboard players reset @a[score_LeaveGame_min=1,score_MP=0] CoolTickCounter|条件付き|
|9|/scoreboard players tag @a[score_LeaveGame_min=1] add ShowVote|
|10|/scoreboard players set @a[score_LeaveGame_min=1,score_Job_min=1] ShowSkillSlot 4|
|11|/scoreboard players tag @a[score_LeaveGame_min=1] add Pray|
|12|/scoreboard players reset @a[score_LeaveGame_min=1] LeaveGame|
|13|/clone -1920 17 -200 -1920 17 -200 -1920 17 -200 filtered force minecraft:command_block 5 ###難易度調整|

<div class="datatable3cnp-end"></div>

## 詳細

1. 難易度をhardに設定
2. `LeaveGame`が1以上,`Job`が2147483647以下かつ`Resolved`であるプレイヤーの`Resolved`を削除
3. `LeaveGame`が1以上かつ`Resolved`であるプレイヤーにプレイヤー名変更時の通知を出し、`LeaveGame`を削除
4. `LeaveGame`が1以上であるプレイヤーに`Resolved`を付与
5. `LeaveGame`が1以上であるプレイヤーの`MP`を0に設定
6. `LeaveGame`が1以上,`MP`が0以下,`MPMaxFlag`が1以上であるプレイヤーの`MPMaxFlag`を0に設定
7. `LeaveGame`が1以上,`MP`が0以下であるプレイヤーの`CoolTickCounter`を0に設定
8. `LeaveGame`が1以上であるプレイヤーに`ShowVote`を付与
9. `LeaveGame`が1以上,`Job`が1以上であるプレイヤーの`ShowSkillSlot`を4に設定
10. `LeaveGame`が1以上であるプレイヤーに`Pray`を付与
11. `LeaveGame`が1以上であるプレイヤーの`LeaveGame`を0に設定
12. (-1920,17,-200)にある[難易度調整](difficultyAdjustment.html)を起動