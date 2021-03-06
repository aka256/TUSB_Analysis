---
title: 初回ログイン時処理
tags: [コマンド,チーム,職業]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,乱数,スコア
update: 2020-07-14 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit2/xCircuit2_firstLoginProcessing.html
folder: command
datatable2c: true
summary: 初回ログイン時にスコアやタグ、チーム分けそして乱数の設定を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-192)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群2]({{site.baseurl}}/command/xCircuit2/xCircuit2_reset.html)

初回ログイン時にスコアやタグ、チーム分けそして乱数の設定を行う。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players add @a[team=] USBDimension 0|
|2|/scoreboard players set @a[team=,tag=!Resolved] Job 0|
|3|/scoreboard players set @a[team=] Hunger -1|
|4|/scoreboard players set @a[team=,tag=!Resolved] HP 20|
|5|/scoreboard players set @a[team=,tag=!Resolved] Food 20|
|6|/scoreboard players set @a[team=,tag=!Resolved] MPMax 100|
|7|/scoreboard players set @a[team=,tag=!Resolved] ModeState 0|
|8|/scoreboard players set @a[team=,tag=!Resolved] KnightLevel 0|
|9|/scoreboard players set @a[team=,tag=!Resolved] NinjaLevel 0|
|10|/scoreboard players set @a[team=,tag=!Resolved] ArcherLevel 0|
|11|/scoreboard players set @a[team=,tag=!Resolved] WhiteMageLevel 0|
|12|/scoreboard players set @a[team=,tag=!Resolved] BlackMageLevel 0|
|13|/scoreboard players set @a[team=,tag=!Resolved] SummonerLevel 0|
|14|/scoreboard players set @a[team=,tag=!Resolved] KnightToLevel 0|
|15|/scoreboard players set @a[team=,tag=!Resolved] NinjaToLevel 0|
|16|/scoreboard players set @a[team=,tag=!Resolved] ArcherToLevel 0|
|17|/scoreboard players set @a[team=,tag=!Resolved] WhiteMageToLevel 0|
|18|/scoreboard players set @a[team=,tag=!Resolved] BlackMageToLevel 0|
|19|/scoreboard players set @a[team=,tag=!Resolved] SummonerToLevel 0|
|20|/scoreboard players set @a[team=] LeaveGame 1|
|21|/time query gametime|
|22|/scoreboard players operation @a[team=,tag=!Resolved] RndMWC = #GameTime Global|
|23|/scoreboard players operation @a[team=,tag=!Resolved] RndMWCCarry = #GameTime Global|
|24|/scoreboard players operation @a[team=,tag=!Resolved] RndMWC %= #MWCBase Const|
|25|/scoreboard players operation @a[team=,tag=!Resolved] RndMWCCarry /= #MWCBase Const|
|26|/scoreboard players tag @a[team=,tag=!Resolved] add TrialSet|
|27|/scoreboard players tag @a[team=,tag=!Resolved] add ISFUnreached|
|28|/scoreboard players set @a[team=,tag=!Resolved] EventRank -1|
|29|/scoreboard players set @a[team=,tag=!Resolved] PersonalLocker 0|
|30|/effect @a[team=,tag=!Resolved] minecraft:absorption 1 0 true|
|31|/scoreboard teams join FriendlyTeam @a[team=]|

<div class="datatable2c-end"></div>

### No.21のコマンドブロックについて

No.21 のコマンドブロックには以下のデータタグが付与されている。

```minecraftcommand
CommandStats:{QueryResultName:"#GameTime",QueryResultObjective:"Global"}
```

## 詳細

1. `team=`であるプレイヤーの`USBDimension`を0、`Hunger`を-1、`LeaveGame`を1にする
2. `team=`かつ`Resolved`を持っていないプレイヤーのスコアをそれぞれ`HP=20`、`Food=20`、`MPMax=100`、`ModeState=0`、`KnightLevel=0`、`NinjaLevel=0`、`ArcherLevel=0`、`WhiteMageLevel=0`、`BlackMageLevel=0`、`SummonerLevel=0`、`KnightToLevel=0`、`NinjaToLevel=0`、`ArcherToLevel=0`、`WhiteMageToLevel=0`、`BlackMageToLevel=0`、`SummonerToLevel=0`に設定する
3. ワールドが作られてからの時間を`GameTime`に代入
4. `team=`かつ`Resolved`を持っていないプレイヤーの`RndMWC`と`RndMWCCarry`にそれぞれ`#GameTime`の`Global`を代入
5. `team=`かつ`Resolved`を持っていないプレイヤーの`RndMWC`に`#MWCBase`の`Const`との剰余を代入
6. `team=`かつ`Resolved`を持っていないプレイヤーの`RndMWCCarry`に`#MWCBase`の`Const`との商を代入
7. `team=`かつ`Resolved`を持っていないプレイヤーに`TrialSet`と`ISFUnreached`を付与
8. `team=`かつ`Resolved`を持っていないプレイヤーのスコアをそれぞれ`eventRank=-1`、`PersonalLocker=0`に設定する
9. `team=`かつ`Resolved`を持っていないプレイヤーに衝撃吸収Lv.0を1秒間付与
10. `team=`であるプレイヤーを`FriendlyTeam`に追加
