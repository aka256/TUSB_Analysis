# メインクロック処理

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

---

## メインクロックON

- 位置(-1870,4,-194)
- (-1870,7,-194)にあるスイッチ(青い羊毛についているやつ)によって手動にて操作可能

### コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|(空白)|
|2|/clone -1924 4 -200 -1924 4 -111 -1920 4 -200 filtered force minecraft:command_block 5|
|3|/summon ArmorStand -1870 10 -197 {Invulnerable:true,Tags:[SystemEntity,TypeChecked],Rotation:[90f,0f],CustomNameVisible:true,CustomName:"SystemKeeper",UUIDMost:2l,UUIDLeast:2l}|条件付き|

### 詳細

1. [毎tick実行したいコマンド群](#毎tick実行したいコマンド群)を実行
2. [SystemKeeper]君を(-1870,10,-197)に召喚し、メインクロックを作動させる

### 毎tick実行したいコマンド群

実行されるコマンド群 (x=-1920,y=4)
|z座標|コマンド群名称、先頭処理名|
|:-:|:-|
|-200|[毎tick必ず最初に実行したいコマンド群]|
|-192|[メインクロック開始時にリセットするもの]|
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

[メインクロック開始時リセットするもの]:/TUSB_Analysis/command/rest.html
[初回ログイン時処理]:/TUSB_Analysis/command/firstLoginProcessing.html
[ログイン時処理]:/TUSB_Analysis/command/loginProcessing.html
[ジョブチェンジ先判定]:/TUSB_Analysis/command/jobChangeJudgemnt.html
[ジョブセーブ]:/TUSB_Analysis/command/jobSave.html
[ジョブロード]:/TUSB_Analysis/command/jobLoad.html
[ステータス表示]:/TUSB_Analysis/command/statusDisplay.html
[攻略率表示]:/TUSB_Analysis/command/conquerDisplay.html
[ワープ処理ジョブ島・通常世界]:/TUSB_Analysis/command/warpProcessing.html
[KeepInventory確認]:/TUSB_Analysis/command/keepInventoryCheck.html
[満腹度修正]:/TUSB_Analysis/command/satietyFix.html
[経験値取得処理]:/TUSB_Analysis/command/expProcessing.html
[レベルアップ処理]:/TUSB_Analysis/command/leveliupProcessing.html
[最大HP調整処理]:/TUSB_Analysis/command/hpFix.html
[難易度調整]:/TUSB_Analysis/command/difficultyAdjustment.html
[島攻略処理]:/TUSB_Analysis/command/conquerProcessing.html
[習得スキル取得]:/TUSB_Analysis/command/jobChangeJudgement.html
[時計島]:/TUSB_Analysis/command/clockIslandProcessing.html
[マクラウェル内部]:/TUSB_Analysis/command/insideMcLawell.html
[スコアボードの設定]:/TUSB_Analysis/command/setScoreboard.html
[メインクロック処理]:/TUSB_Analysis/command/mainclockProcessing.html
[SystemKeeper処理]:/TUSB_Analysis/command/systemKeeperProcessing.html
[かまど再設定]:/TUSB_Analysis/command/furnaceProcessing.html
[毎tick必ず最初に実行したいコマンド群]:/TUSB_Analysis/command/runFirst.html
[エリア侵入記録]:/TUSB_Analysis/command/areaRecord.html
