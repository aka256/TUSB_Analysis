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
