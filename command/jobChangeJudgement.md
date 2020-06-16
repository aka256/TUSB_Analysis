# ジョブチェンジ先判定

- 位置(-1920,10,-192)
- 職業変更許可書や釣りチケなどの処理

## コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/clear @a[score_Job_min=1] minecraft:paper 0 -1 {display:{Name:"§r§lジョブ変更申請書"},初回:true}|
|2|/scoreboard players set @a ItemCount -1|
|3|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l剣士変更許可証"}}|
|4|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 1|条件付き|
|5|/scoreboard players set @a ItemCount -1|
|6|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l忍者変更許可証"}}|
|7|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 2|条件付き|
|8|/scoreboard players set @a ItemCount -1|
|9|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l狩人変更許可証"}}|
|10|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 3|条件付き|
|11|/scoreboard players set @a ItemCount -1|
|12|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l白魔導士変更許可証"}}|
|13|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 4|条件付き|
|14|/scoreboard players set @a ItemCount -1|
|15|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l黒魔導士変更許可証"}}|
|16|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 5|条件付き|
|17|/scoreboard players set @a ItemCount -1|
|18|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l召喚士変更許可証"}}|
|19|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 6|条件付き|
|20|/scoreboard players set @a ItemCount -1|
|21|/clear @a minecraft:paper -1 -1 {display:{Lore:["§r§n釣り堀-海幸彦-"],Name:"§r§l釣りチケ3分"}}|
|22|/effect @a[score_ItemCount_min=1] minecraft:unluck 180 20|条件付き|
|23|/tellraw @a[score_ItemCount_min=1] {"text":"今なら変わったものが釣れそうだ！","color":"green"}|条件付き|

## 詳細

1. `Job`が1以上であるプレイヤーからジョブ変更申請書や各職業の変更許可書を削除し、職業変更許可書の場合はプレイヤーの`LoadJob`を各職業ごとに設定
2. プレイヤーの`ItemCount`を-1に設定
3. プレイヤーから釣りチケ3分を削除し、`ItemCount`が1以上であるプレイヤーに不幸Lv.20を180秒間とテキストを表示

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
