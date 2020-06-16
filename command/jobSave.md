# ジョブセーブ

- 位置(-1920,11,-192)
- `(Job)Level`や`(Job)ToLevel`の保存

## コマンド群

|No.|コマンド|
|:-:|:-|
|1|/execute @a[score_SaveJob_min=1,score_SaveJob=1] ~ ~ ~ /scoreboard players operation @a[c=1] KnightLevel = @a[c=1] Level|
|2|/execute @a[score_SaveJob_min=1,score_SaveJob=1] ~ ~ ~ /scoreboard players operation @a[c=1] KnightToLevel = @a[c=1] ExpToLevel|
|3|/execute @a[score_SaveJob_min=2,score_SaveJob=2] ~ ~ ~ /scoreboard players operation @a[c=1] NinjaLevel = @a[c=1] Level|
|4|/execute @a[score_SaveJob_min=2,score_SaveJob=2] ~ ~ ~ /scoreboard players operation @a[c=1] NinjaToLevel = @a[c=1] ExpToLevel|
|5|/execute @a[score_SaveJob_min=3,score_SaveJob=3] ~ ~ ~ /scoreboard players operation @a[c=1] ArcherLevel = @a[c=1] Level|
|6|/execute @a[score_SaveJob_min=3,score_SaveJob=3] ~ ~ ~ /scoreboard players operation @a[c=1] ArcherToLevel = @a[c=1] ExpToLevel|
|7|/execute @a[score_SaveJob_min=4,score_SaveJob=4] ~ ~ ~ /scoreboard players operation @a[c=1] WhiteMageLevel = @a[c=1] Level|
|8|/execute @a[score_SaveJob_min=4,score_SaveJob=4] ~ ~ ~ /scoreboard players operation @a[c=1] WhiteMageToLevel = @a[c=1] ExpToLevel|
|9|/execute @a[score_SaveJob_min=5,score_SaveJob=5] ~ ~ ~ /scoreboard players operation @a[c=1] BlackMageLevel = @a[c=1] Level|
|10|/execute @a[score_SaveJob_min=5,score_SaveJob=5] ~ ~ ~ /scoreboard players operation @a[c=1] BlackMageToLevel = @a[c=1] ExpToLevel|
|11|/execute @a[score_SaveJob_min=6,score_SaveJob=6] ~ ~ ~ /scoreboard players operation @a[c=1] SummonerLevel = @a[c=1] Level|
|12|/execute @a[score_SaveJob_min=6,score_SaveJob=6] ~ ~ ~ /scoreboard players operation @a[c=1] SummonerToLevel = @a[c=1] ExpToLevel|
|13|/scoreboard players reset @a[score_SaveJob_min=0] SaveJob|

## 詳細

1. `SaveJob`がそれぞれの職業のものと等しいプレイヤーの`(Job)Level`に`Level`を、`(Job)ToLevel`に`ExpToLevel`をそれぞれ代入
2. `SaveJob`が0以上のプレイヤーの`SaveJob`を0に設定

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
