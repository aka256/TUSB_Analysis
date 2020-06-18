---
title: メインクロック処理
tags: [command,entity]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
sidebar: mydoc_sidebar
permalink: mainclockProcessing.html
folder: command
datatable3cnp: true
---

## メインクロックON

### About

X回路区域内の

- 位置(-1870,4,-194)
- (-1870,7,-194)にあるスイッチ(青い羊毛についているやつ)によって手動にて操作可能

### コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|:-|:-|
|1|(空白)|
|2|/clone -1924 4 -200 -1924 4 -111 -1920 4 -200 filtered force minecraft:command_block 5|
|3|/summon ArmorStand -1870 10 -197 {Invulnerable:true,Tags:[SystemEntity,TypeChecked],Rotation:[90f,0f],CustomNameVisible:true,CustomName:"SystemKeeper",UUIDMost:2l,UUIDLeast:2l}|条件付き|

<div class="datatable3cnp-begin"></div>

### 詳細

1. [毎tick実行したいコマンド群](#毎tick実行したいコマンド群)を実行
2. [SystemKeeper]君を(-1870,10,-197)に召喚し、メインクロックを作動させる

### 毎tick実行したいコマンド群

実行されるコマンド群 (x=-1920,y=4)

|z座標|コマンド群名称、先頭処理名|
|:-:|:-|
|-200|[毎tick必ず最初に実行したいコマンド群]|
|-192|[メインクロック開始時リセットするもの]|
|-189|[ベッド処理]|
|-184|[黙想終了処理Mokuso]|
|-181|[与ダメージDamegeDealt]|
|-180|[スニークSneakTime]|
|-178|[報酬用演出]|
|-177|[範囲化可能スキル判定]|
|-175|[剣士即時分岐]|
|-167|[狩人即時分岐]|
|-157|[黒魔導士即時分岐]|
|-144|[乱数取得]|
|-143|[忍者スキル?]|
|-138|[白魔導士スキル?]|
|-135|[印判処理?]|
|-113|[スキル名表示呼び出し]|
|-111|[毎tick必ず最後に実行したいコマンド群]|

(これらすべてを"毎tick実行したいコマンド群"って呼ぶのかな?)

---

## メインクロックOFF

- 位置(-1870,4,-195)
- (-1870,7,-195)にあるスイッチ(赤い羊毛についているやつ)によって手動にて操作可能

### コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/blockdata -1920 4 -200 {auto:false}|
|2|/blockdata -1920 4 -111 {auto:false}|条件付き|
|3|/kill 0-0-2-0-2|条件付き|

### 詳細

1. (-1920,4,-200)にある[毎tick必ず最初に実行したいコマンド群]を停止
2. (-1920,4,-111)にある[毎tick必ず最後にに実行したいコマンド群]を停止
3. [SystemKeeper]君をキル


[SystemKeeper]:TUSB_Analysis_Entity.html

[メインクロック開始時リセットするもの]:reset.html
[初回ログイン時処理]:firstLoginProcessing.html
[ログイン時処理]:loginProcessing.html
[ジョブチェンジ先判定]:jobChangeJudgement.html
[ジョブセーブ]:jobSave.html
[ジョブロード]:jobLoad.html
[ステータス表示]:statusDisplay.html
[攻略率表示]:conquerDisplay.html
[ワープ処理ジョブ島・通常世界]:warpProcessing.html
[KeepInventory確認]:keepInventoryCheck.html
[満腹度修正]:satietyFix.html
[経験値取得処理]:expProcessing.html
[レベルアップ処理]:levelupProcessing.html
[最大HP調整処理]:hpFix.html
[難易度調整]:difficultyAdjustment.html
[島攻略処理]:conquerProcessing.html
[習得スキル取得]:skillAcquisition.html
[時計島]:clockIslandProcessing.html
[マクラウェル内部]:insideMcLawell.html
[スコアボードの設定]:setScoreboard.html
[メインクロック処理]:mainclockProcessing.html
[SystemKeeper処理]:systemKeeperProcessing.html
[かまど再設定]:furnaceProcessing.html
[毎tick必ず最初に実行したいコマンド群]:runFirst.html
[エリア侵入記録]:areaRecord.html
