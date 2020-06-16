# ステータス表示

- 位置(-1920,14,-192)
- 交易島の教会でのステータス表示?

## コマンド群

|No.|コマンド|
|:-:|:-|
|1|/tellraw @a[tag=ShowStatus] {"text":"---- ステータス ----","color":"white","bold":"true"}|
|2|/tellraw @a[tag=ShowStatus,score_Job_min=1,score_Job=1] [{"text":"選択している職業: ","color":"white"},{"text":"剣士","color":"blue","bold":"true"}]|
|3|/tellraw @a[tag=ShowStatus,score_Job_min=2,score_Job=2] [{"text":"選択している職業: ","color":"white"},{"text":"忍者","color":"dark_green","bold":"true"}]|
|4|/tellraw @a[tag=ShowStatus,score_Job_min=3,score_Job=3] [{"text":"選択している職業: ","color":"white"},{"text":"狩人","color":"red","bold":"true"}]|
|5|/tellraw @a[tag=ShowStatus,score_Job_min=4,score_Job=4] [{"text":"選択している職業: ","color":"white"},{"text":"白魔導士","color":"white","bold":"true"}]|
|6|/tellraw @a[tag=ShowStatus,score_Job_min=5,score_Job=5] [{"text":"選択している職業: ","color":"white"},{"text":"黒魔導士","color":"dark_purple","bold":"true"}]|
|7|/tellraw @a[tag=ShowStatus,score_Job_min=6,score_Job=6] [{"text":"選択している職業: ","color":"white"},{"text":"召喚士","color":"gold","bold":"true"}]|
|8|/tellraw @a[tag=ShowStatus,score_Job_min=6,score_Job=6] [{"text":"選択している職業: ","color":"white"},{"text":"召喚士","color":"gold","bold":"true"}]|
|9|/tellraw @a[tag=ShowStatus,score_Job_min=7] [{"text":"選択している職業: ","color":"white"},{"text":"不明","color":"dark_red","bold":"true","underlined":"true"}]|
|10|/tellraw @a[tag=ShowStatus] [{"translate":"レベル: %1\$s     次のレベルアップまで: \%2\$s EXP\n\n","color":"white","with":[{"score":{"name":"\*","objective":"Level"},"color":"aqua"},{"score":{"name":"\*","objective":"ExpToLevel"},"color":"aqua"}]},{"text":"レベル/残り必要経験値\n","color":"gray"},{"translate":"剣士: %1\$sLV/\%2\$sEXP        忍者: %3\$sLV/\%4\$sEXP        狩人: %5\$sLV/\%6\$sEXP\n","color":"gray","with":[{"score":{"name":"\*","objective":"KnightLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"KnightToLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"NinjaLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"NinjaToLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"ArcherLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"ArcherToLevel"},"color":"aqua"}]},{"translate":"白魔導士: %1\$sLV/\%2\$sEXP    黒魔導士: %3\$sLV/\%4\$sEXP    召喚士: %5\$sLV/\%6$sEXP","color":"gray","with":[{"score":{"name":"\*","objective":"WhiteMageLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"WhiteMageToLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"BlackMageLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"BlackMageToLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"SummonerLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"SummonerToLevel"},"color":"aqua"}]}]|
|11|/scoreboard players tag @a[tag=ShowStatus] remove ShowStatus|

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
