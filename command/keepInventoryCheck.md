# KeepInventory確認

- 位置(-1920,16,-192)

## コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/scoreboard players test Sightseeing Settings * 0|
|2|/gamerule keepInventory false|条件付き|
|3|/clear @a[score_HP=0]|条件付き|
|4|/scoreboard players tag @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90] add Raise|
|5|/scoreboard players set @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90] RaisedArea -90|条件付き|
|6|/scoreboard players set @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90] Hunger 21|条件付き|
|7|/gamemode spectator @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90]|条件付き|
|8|/scoreboard players tag @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90] add TrialItemClear {Inventory:[{tag:{TrialItem:true}}]}|
|9|/clear @a[tag=TrialItemClear]|条件付き|
|10|/scoreboard players tag @a[tag=TrialItemClear] remove TrialItemClear|条件付き|
|11|/scoreboard players tag @a[score_HP=0,tag=Doom] remove Doom|
|12|/scoreboard players tag @a[tag=ReRaise,score_HP=0] add CastRaise|
|13|/scoreboard players tag @a[tag=ReRaise,score_HP=0] remove ReRaise|条件付き|
|14|/scoreboard players reset @a[score_Deaths_min=1,score_HP=0] Deaths|

## 詳細

1. `Sightseeing`の`Settings`が0以下の時、`keepInventory`を`false`にし、`HP`が0以下のプレイヤーのインベントリ内アイテムを消去する
2. `HP`が0以下、`USBDimension`が-90であるプレイヤーに`Raise`を付与、`Raisearea`を-90に設定、`Hunger`を21に設定、スペクターモードに切り替える。
3. `HP`が0以下、`USBDimension`が-90であり、尚且つインベントリ内に`TrialItem:true`を持つプレイヤーに`TrialItemClear`を付与し、インベントリ内アイテムを消去、`TrialItemClear`を消去
4. `HP`が0以下、`Doom`を持つプレイヤーから`Doom`を消去
5. `HP`が0以下、`ReRaise`を持つプレイヤーに`CastRaise`を付与し、`ReRaise`を消去
6. `Deaths`が1以上、`HP`が0以下であるプレイヤーの`Deaths`を0に設定

[CommonGM]:/entity/TUSB_Analysis_Entity.html
[エンダーマイト]:/entity/TUSB_Analysis_Entity.html
[SystemKeeper]:/entity/TUSB_Analysis_Entity.html
[地下世界]:/entity/TUSB_Analysis_Entity.html
[クラウディア]:/entity/TUSB_Analysis_Entity.html
[テーブルマウンテン]:/entity/TUSB_Analysis_Entity.html
[ガリバーランド]:/entity/TUSB_Analysis_Entity.html
[トカルトコルデ]:/entity/TUSB_Analysis_Entity.html
[お試しセットの印玉]:/entity/TUSB_Analysis_Item.html
[ViewPoint(仮)]:/entity/TUSB_Analysis_Entity.html
[秒針]:/entity/TUSB_Analysis_Entity.html
[分針]:/entity/TUSB_Analysis_Entity.html
[時針]:/entity/TUSB_Analysis_Entity.html

[jobSave]:/others/TUSB_Analysis_Data.html
[jobLoad]:/others/TUSB_Analysis_Data.html

[お試しセットの印玉]:/others/TUSB_Analysis_Item.html

[メインクロック開始時リセットするもの]:/command/rest.html
[初回ログイン時処理]:/command/firstLoginProcessing.html
[ログイン時処理]:/command/loginProcessing.html
[ジョブチェンジ先判定]:/command/jobChangeJudgemnt.html
[ジョブセーブ]:/command/jobSave.html
[ジョブロード]:/command/jobLoad.html
[ステータス表示]:/command/statusDisplay.html
[攻略率表示]:/command/conquerDisplay.html
[ワープ処理ジョブ島・通常世界]:/command/warpProcessing.html
[KeepInventory確認]:/command/keepInventoryCheck.html
[満腹度修正]:/command/satietyFix.html
[経験値取得処理]:/command/expProcessing.html
[レベルアップ処理]:/command/leveliupProcessing.html
[最大HP調整処理]:/command/hpFix.html
[難易度調整]:/command/difficultyAdjustment.html
[島攻略処理]:/command/conquerProcessing.html
[習得スキル取得]:/command/jobChangeJudgement.html
[時計島]:/command/clockIslandProcessing.html
[マクラウェル内部]:/command/insideMcLawell.html
[スコアボードの設定]:/command/setScoreboard.html
[メインクロック処理]:/command/mainclockProcessing.html
[SystemKeeper処理]:/command/systemKeeperProcessing.html
[かまど再設定]:/command/furnaceProcessing.html
[毎tick必ず最初に実行したいコマンド群]:/command/runFirst.html
[エリア侵入記録]:/command/areaRecord.html
