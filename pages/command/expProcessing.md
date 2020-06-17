---
title: 経験値取得処理
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
sidebar: mydoc_sidebar
permalink: expProcessing.html
folder: command
---

- 位置(-1920,8,-191)
- ネザースターの取得処理、スコアへの代入

## コマンド群

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set @a[score_GotExpFlag_min=1] GotExpFlag 0|
|2|/clear @a[score_GotExpFlag=-1] minecraft:nether_star|
|3|/execute @a[score_GotExpFlag_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] ExpMessageFlag = @a[r=50,score_HP_min=1,score_Level_min=1,c=1] Level|
|4|/execute @a[score_GotExpFlag_min=1,score_ExpMessageFlag_min=1] ~ ~ ~ /scoreboard players operation @a[r=50,score_HP_min=1,score_Level_min=1] ExpToLevel -= @a[c=1] GotExpFlag|
|5|/execute @a[score_GotExpFlag_min=1,score_ExpMessageFlag_min=1] ~ ~ ~ /tellraw @a {"translate":"%1\$sは%2\$sEXPの経験値を得た。","color":"yellow","with":[{"selector":"@a[r=50,score_HP_min=1,score_Level_min=1]"},{"score":{"name":"@a[c=1]","objective":"GotExpFlag"},"color":"white","bold":"true"}]}|
|6|/scoreboard players reset @a[score_ExpMessageFlag_min=1] ExpMessageFlag|
|7|/execute @a[score_GotExpFlag_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] ExpMessageFlag = @a[rm=50,score_HP_min=1,score_Level_min=1,c=1] Level|
|8|/execute @a[score_GotExpFlag_min=1,score_ExpMessageFlag_min=1] ~ ~ ~ /tellraw @a {"translate":"%1$sは離れ過ぎていたため、経験値を得られなかった。","color":"red","with":[{"selector":"@a[rm=50,score_HP_min=1,score_Level_min=1]"}]}|
|9|/execute @a[score_GotExpFlag_min=1] ~ ~ ~ /execute @a[r=50,score_HP_min=1,score_Level_min=1] ~ ~ ~ /playsound entity.player.levelup master @a[c=1] ~ ~ ~ 0.3 2|
|10|/scoreboard players reset @a[score_ExpMessageFlag_min=1] ExpMessageFlag|

## 詳細

1. `GotExpFlag`が1以上であるプレイヤーの`GotExpFlag`を0に設定
2. `GotExpFlag`が-1以下であるプレイヤーのインベントリ内のネザースターを消去し、`ExpMessageFlag`に半径50m以内、`HP`が1以上、`Level`が1以上であるプレイヤーの`Level`を代入
3. `GotExpFlag`が1以上、`ExpMessageFlag`が1以上であるプレイヤーから半径50m以内、`HP`が1以上、`Level`が1以上であるプレイヤーの`ExpToLevel`から`GotExpFlag`を引く
4. `GotExpFlag`が1以上、`ExpMessageFlag`が1以上であるプレイヤーに経験値取得時のメッセージを出す
5. `ExpMessageFlag`が1以上であるプレイヤーの`ExpMessageFlag`を0に設定
6. `GotExpFlag`が1以上であるプレイヤーの`ExpMessageFlag`から半径50m以上離れていて、`HP`が1以上、`Level`が1以上であるプレイヤーの`Level`を引く
7. `GotExpFlag`が1以上で`ExpMessageFlag`が1以上であるプレイヤーに経験値取得失敗時のメッセージを表示
8. `GotExpFlag`が1以上であるプレイヤーから半径50m以内、`HP`が1以上、`Level`が1以上であるプレイヤーいる座標で音を鳴らす
9. `ExpMessageFlag`が1以上であるプレイヤーの`ExpMessageFlag`を0に設定

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
