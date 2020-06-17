---
title: 初回ログイン時処理
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
sidebar: mydoc_sidebar
permalink: firstLoginProcessing.html
folder: command
---

- 位置(-1920,8,-192)
- 初回ログイン時にスコアやタグ、チーム分けそして乱数の設定を行う

## コマンド群

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

## 詳細

1. `team=`であるプレイヤーの`USBDimension`を0、`Hunger`を-1、`LeaveGame`を1にする
2. `team=`かつ`Resolved`を持っていないプレイヤーのスコアをそれぞれ`HP=20`、`Food=20`、`MPMax=100`、`ModeState=0`、`KnightLevel=0`、`NinjaLevel=0`、`ArcherLevel=0`、`WhiteMageLevel=0`、`BlackMageLevel=0`、`SummonerLevel=0`、`KnightToLevel=0`、`NinjaToLevel=0`、`ArcherToLevel=0`、`WhiteMageToLevel=0`、`BlackMageToLevel=0`、`SummonerToLevel=0`に設定する
3. ワールドが作られてからの時間を表示
4. `team=`かつ`Resolved`を持っていないプレイヤーの`RndMWC`と`RndMWCCarry`にそれぞれ`#GameTime`の`Global`を代入
5. `team=`かつ`Resolved`を持っていないプレイヤーの`RndMWC`に`#MWCBase`の`Const`との剰余を代入
6. `team=`かつ`Resolved`を持っていないプレイヤーの`RndMWCCarry`に`#MWCBase`の`Const`との商を代入
7. `team=`かつ`Resolved`を持っていないプレイヤーに`TrialSet`と`ISFUnreached`を付与
8. `team=`かつ`Resolved`を持っていないプレイヤーのスコアをそれぞれ`eventRank=-1`、`PersonalLocker=0`に設定する
9. `team=`かつ`Resolved`を持っていないプレイヤーに衝撃吸収Lv.0を1秒間付与
10. `team=`であるプレイヤーを`FriendlyTeam`に追加

[CommonGM]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[エンダーマイト]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[SystemKeeper]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[地下世界]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[クラウディア]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[テーブルマウンテン]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[ガリバーランド]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[トカルトコルデ]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[お試しセットの印玉]:/TUSB_Analysis/entity/TUSB_Analysis_Item.html
[ViewPoint(仮)]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[秒針]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[分針]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[時針]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html

[jobSave]:/TUSB_Analysis/others/TUSB_Analysis_Data.html
[jobLoad]:/TUSB_Analysis/others/TUSB_Analysis_Data.html

[お試しセットの印玉]:/TUSB_Analysis/others/TUSB_Analysis_Item.html

[メインクロック開始時リセットするもの]:/TUSB_Analysis/command/reset.html
[初回ログイン時処理]:/TUSB_Analysis/command/firstLoginProcessing.html
[ログイン時処理]:/TUSB_Analysis/command/loginProcessing.html
[ジョブチェンジ先判定]:/TUSB_Analysis/command/jobChangeJudgement.html
[ジョブセーブ]:/TUSB_Analysis/command/jobSave.html
[ジョブロード]:/TUSB_Analysis/command/jobLoad.html
[ステータス表示]:/TUSB_Analysis/command/statusDisplay.html
[攻略率表示]:/TUSB_Analysis/command/conquerDisplay.html
[ワープ処理ジョブ島・通常世界]:/TUSB_Analysis/command/warpProcessing.html
[KeepInventory確認]:/TUSB_Analysis/command/keepInventoryCheck.html
[満腹度修正]:/TUSB_Analysis/command/satietyFix.html
[経験値取得処理]:/TUSB_Analysis/command/expProcessing.html
[レベルアップ処理]:/TUSB_Analysis/command/levelupProcessing.html
[最大HP調整処理]:/TUSB_Analysis/command/hpFix.html
[難易度調整]:/TUSB_Analysis/command/difficultyAdjustment.html
[島攻略処理]:/TUSB_Analysis/command/conquerProcessing.html
[習得スキル取得]:/TUSB_Analysis/command/skillAcquisition.html
[時計島]:/TUSB_Analysis/command/clockIslandProcessing.html
[マクラウェル内部]:/TUSB_Analysis/command/insideMcLawell.html
[スコアボードの設定]:/TUSB_Analysis/command/setScoreboard.html
[メインクロック処理]:/TUSB_Analysis/command/mainclockProcessing.html
[SystemKeeper処理]:/TUSB_Analysis/command/systemKeeperProcessing.html
[かまど再設定]:/TUSB_Analysis/command/furnaceProcessing.html
[毎tick必ず最初に実行したいコマンド群]:/TUSB_Analysis/command/runFirst.html
[エリア侵入記録]:/TUSB_Analysis/command/areaRecord.html
