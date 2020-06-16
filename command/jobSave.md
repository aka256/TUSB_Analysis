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

[メインクロック開始時にリセットするもの]:/command/rest.html
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
