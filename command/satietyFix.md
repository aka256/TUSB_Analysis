# 満腹度修正

- 位置(-1920,17,-192)
- リスポーン時での死亡前の空腹度の再現

## コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/tellraw @a[score_HP_min=1,score_Hunger_min=0,score_Hunger=3] [{"text":"どこからか声が聞こえる…。\n「腹が減っては探索できぬぞ。」\n"},{"text":"お腹が少し満たされた。\n","color":"aqua"},{"text":"目の前が真っ暗になった。","color":"light_purple"}]|
|2|/effect @a[score_HP_min=1,score_Hunger_min=0,score_Hunger=4] minecraft:hunger 1 174|
|3|/effect @a[score_HP_min=1,score_Hunger_min=0,score_Hunger=0] minecraft:blindness 80 0 true|
|4|/effect @a[score_HP_min=1,score_Hunger_min=1,score_Hunger=1] minecraft:blindness 60 0 true|
|5|/effect @a[score_HP_min=1,score_Hunger_min=2,score_Hunger=2] minecraft:blindness 40 0 true|
|6|/effect @a[score_HP_min=1,score_Hunger_min=3,score_Hunger=3] minecraft:blindness 20 0 true|
|7|/effect @a[score_HP_min=1,score_Hunger_min=5,score_Hunger=5] minecraft:hunger 1 166|
|8|/effect @a[score_HP_min=1,score_Hunger_min=6,score_Hunger=6] minecraft:hunger 1 158|
|9|/effect @a[score_HP_min=1,score_Hunger_min=7,score_Hunger=7] minecraft:hunger 1 150|
|10|/effect @a[score_HP_min=1,score_Hunger_min=8,score_Hunger=8] minecraft:hunger 1 142|
|11|/effect @a[score_HP_min=1,score_Hunger_min=9,score_Hunger=9] minecraft:hunger 1 134|
|12|/effect @a[score_HP_min=1,score_Hunger_min=10,score_Hunger=10] minecraft:hunger 1 126|
|13|/effect @a[score_HP_min=1,score_Hunger_min=11,score_Hunger=11] minecraft:hunger 1 118|
|14|/effect @a[score_HP_min=1,score_Hunger_min=12,score_Hunger=12] minecraft:hunger 1 110|
|15|/effect @a[score_HP_min=1,score_Hunger_min=13,score_Hunger=13] minecraft:hunger 1 102|
|16|/effect @a[score_HP_min=1,score_Hunger_min=14,score_Hunger=14] minecraft:hunger 1 94|
|17|/effect @a[score_HP_min=1,score_Hunger_min=15,score_Hunger=15] minecraft:hunger 1 86|
|18|/effect @a[score_HP_min=1,score_Hunger_min=16,score_Hunger=16] minecraft:hunger 1 78|
|19|/effect @a[score_HP_min=1,score_Hunger_min=17,score_Hunger=17] minecraft:hunger 1 70|
|20|/effect @a[score_HP_min=1,score_Hunger_min=18,score_Hunger=18] minecraft:hunger 1 62|
|21|/effect @a[score_HP_min=1,score_Hunger_min=19,score_Hunger=19] minecraft:hunger 1 54|
|22|/effect @a[score_HP_min=1,score_Hunger_min=20,score_Hunger=20] minecraft:hunger 1 46|
|23|/scoreboard players set @a[score_HP_min=1,score_Hunger_min=0] RefreshHPMax 3|
|24|/scoreboard players enable @a[score_HP_min=1,score_Hunger_min=0] kill|
|25|/scoreboard players tag @a[tag=Raise,score_HP_min=1] add RaiseEnd|
|26|/scoreboard players tag @a[tag=Raise,score_HP_min=1] remove Raise|条件付き|
|27|/scoreboard players set @a[score_HP_min=1,score_Hunger_min=0] Hunger -1|

## 詳細

1. `HP`が1以上、`Hunger`が0以上3以下であるプレイヤーに空腹時のメッセージを出す
2. 以下のような一覧のエフェクトを付与
3. `HP`が1以上、`Hunger`が0以上のプレイヤーの`RefreshHPMax`を3に設定
4. `HP`が1以上、`Hunger`が0以上のプレイヤーに`kill`への書き込みを許可
5. `Raise`を持ち、`HP`が1以上のプレイヤーに`RaiseEnd`を付与し、`Raise`を消去
6. `HP`が1以上で`Hunger`が0以上であるプレイヤーの`Hunger`を-1に設定

### エフェクト一覧

|Hunger|Effect|
|:-:|:-|
|0|盲目Lv.0 80秒間, 空腹Lv.174 1秒間|
|1|盲目Lv.0 60秒間, 空腹Lv.174 1秒間|
|2|盲目Lv.0 40秒間, 空腹Lv.174 1秒間|
|3|盲目Lv.0 20秒間, 空腹Lv.174 1秒間|
|4|空腹Lv.174 1秒間|
|5|空腹Lv.166 1秒間|
|6|空腹Lv.158 1秒間|
|7|空腹Lv.150 1秒間|
|8|空腹Lv.142 1秒間|
|9|空腹Lv.134 1秒間|
|10|空腹Lv.126 1秒間|
|11|空腹Lv.118 1秒間|
|12|空腹Lv.110 1秒間|
|13|空腹Lv.102 1秒間|
|14|空腹Lv.94 1秒間|
|15|空腹Lv.86 1秒間|
|16|空腹Lv.78 1秒間|
|17|空腹Lv.70 1秒間|
|18|空腹Lv.62 1秒間|
|19|空腹Lv.54 1秒間|
|20|空腹Lv.46 1秒間|

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
