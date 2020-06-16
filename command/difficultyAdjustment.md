# 難易度調整

- 位置(-1920,17,-200)

## コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/testfor @a|
|2|/scoreboard players operation Difficulty Settings *= Difficulty Settings|
|3|/scoreboard players test Sightseeing Settings * 0|
|4|/scoreboard players operation Difficulty Settings += #ConquerPctInt Global|条件付き|
|5|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1 0 true"}|
|6|/blockdata -1885 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:resistance 1 0 true"}|条件付き|
|7|/scoreboard players test Difficulty Settings 30 *|
|8|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 0 true"}|条件付き|
|9|/blockdata -1885 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:resistance 1000000 0 true"}|条件付き|
|10|/scoreboard players test Difficulty Settings 70 *|条件付き|
|11|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 1 true"}|条件付き|
|12|/blockdata -1885 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:resistance 1000000 1 true"}|条件付き|
|13|/scoreboard players test Difficulty Settings 110 *|条件付き|
|14|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 2 true"}|条件付き|
|15|/scoreboard players test Difficulty Settings 150 *|条件付き|
|16|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 3 true"}|条件付き|
|17|/blockdata -1885 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:resistance 1000000 2 true"}|条件付き|
|18|/scoreboard players test Difficulty Settings 190 *|条件付き|
|19|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 4 true"}|条件付き|

## 詳細

1. プレイヤーが一人でも生きているときに以下の事柄を実行
2. `Difficulty`の`Settings`を2乗
3. `Sightseeing`の`Settings`が0以下であるとき、`Difficulty`の`Settings`に`#ConquerPcInt`の`Global`を足し合わせる
4. (-1886,14,-188)([タイプ設定]の強さ補正)のコマンドブロックに{Command:"/effect @e[tag=TypeCheck,team=,type=!Player]minecraft:speed 1 0 true"}を上書きできたとき、(-1885,14,-188)のコマンドブロックに{Command:"/effect @e[tag=TypeCheck,team=,type=!Player]minecraft:resistance 1 0 true"}を上書きする
5. `Difficulty`の`Settings`が30以上の時、`Settings`の値によって(-1886,14,-188)と(-1885,14,-188)にあるコマンドブロックを書き換える(以下参考)

### コマンド書き換え

|Setting|(-1886,14,-188)への書き換え内容|(-1885,14,-188)への書き換え内容|
|:-:|:-|:-|
|~30|スピードLv.0 1秒間|耐性Lv.0 1秒間|
|30~|スピードLv.0 1000000秒間|耐性Lv.0 1000000秒間|
|70~|スピードLv.1 1000000秒間|耐性Lv.1 1000000秒間|
|110~|スピードLv.2 1000000秒間|耐性Lv.1 1000000秒間 (書き換えなし)|
|150~|スピードLv.3 1000000秒間|耐性Lv.2 1000000秒間|
|190~|スピードLv.4 1000000秒間|耐性Lv.2 1000000秒間 (書き換えなし)|

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
