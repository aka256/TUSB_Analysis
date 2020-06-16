# ジョブロード

- 位置(-1920,12,-192)
- 現在ロードしている職業のスコアへの代入

## コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/execute @a[score_LoadJob_min=1,score_LoadJob=1] ~ ~ ~ /scoreboard players operation @a[c=1] Level = @a[c=1] KnightLevel|
|2|/execute @a[score_LoadJob_min=1,score_LoadJob=1] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel = @a[c=1] KnightToLevel|条件付き|
|3|/execute @a[score_LoadJob_min=1,score_LoadJob=1] ~ ~ ~ /playsound block.anvil.use master @a[r=16] ~ ~ ~ 1 0.78 0|条件付き|
|4|/execute @a[score_LoadJob_min=1,score_LoadJob=1] ~ ~ ~ /particle happyVillager ~ ~1 ~ 1 1 1 0 200 force|条件付き|
|5|/execute @a[score_LoadJob_min=2,score_LoadJob=2] ~ ~ ~ /scoreboard players operation @a[c=1] Level = @a[c=1] NinjaLevel|
|6|/execute @a[score_LoadJob_min=2,score_LoadJob=2] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel = @a[c=1] NinjaToLevel|条件付き|
|7|/execute @a[score_LoadJob_min=2,score_LoadJob=2] ~ ~ ~ /playsound entity.firework.large_blast_far master @a[r=16] ~ ~ ~ 1 0.7 0|条件付き|
|8|/execute @a[score_LoadJob_min=2,score_LoadJob=2] ~ ~ ~ /particle explode ~ ~1 ~ 1 1 1 0.1 200 force|条件付き|
|9|/execute @a[score_LoadJob_min=3,score_LoadJob=3] ~ ~ ~ /scoreboard players operation @a[c=1] Level = @a[c=1] ArcherLevel|
|10|/execute @a[score_LoadJob_min=3,score_LoadJob=3] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel = @a[c=1] ArcherToLevel|条件付き|
|11|/execute @a[score_LoadJob_min=3,score_LoadJob=3] ~ ~ ~ /playsound entity.arrow.hit master @a[r=16] ~ ~ ~ 1 0.7 0|条件付き|
|12|/execute @a[score_LoadJob_min=3,score_LoadJob=3] ~ ~ ~ /particle crit ~ ~1 ~ 1 1 1 1 200 force|条件付き|
|13|/execute @a[score_LoadJob_min=4,score_LoadJob=4] ~ ~ ~ /scoreboard players operation @a[c=1] Level = @a[c=1] WhiteMageLevel|
|14|/execute @a[score_LoadJob_min=4,score_LoadJob=4] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel = @a[c=1] WhiteMageToLevel|条件付き|
|15|/execute @a[score_LoadJob_min=4,score_LoadJob=4] ~ ~ ~ /playsound entity.experience_orb.pickup master @a[r=16] ~ ~ ~ 1 1.08 0|条件付き|
|16|/execute @a[score_LoadJob_min=4,score_LoadJob=4] ~ ~ ~ /particle fireworksSpark ~ ~1 ~ 1 1 1 0.1 200 force|条件付き|
|17|/execute @a[score_LoadJob_min=5,score_LoadJob=5] ~ ~ ~ /scoreboard players operation @a[c=1] Level = @a[c=1] BlackMageLevel|
|18|/execute @a[score_LoadJob_min=5,score_LoadJob=5] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel = @a[c=1] BlackMageToLevel|条件付き|
|19|/execute @a[score_LoadJob_min=5,score_LoadJob=5] ~ ~ ~ /playsound entity.blaze.shoot master @a[r=16] ~ ~ ~ 1 0.65 0|条件付き|
|20|/execute @a[score_LoadJob_min=5,score_LoadJob=5] ~ ~ ~ /particle witchMagic ~ ~1 ~ 0.5 1 0.5 0.1 200 force|条件付き|
|21|/execute @a[score_LoadJob_min=6,score_LoadJob=6] ~ ~ ~ /scoreboard players operation @a[c=1] Level = @a[c=1] SummonerLevel|
|22|/execute @a[score_LoadJob_min=6,score_LoadJob=6] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel = @a[c=1] SummonerToLevel|条件付き|
|23|/execute @a[score_LoadJob_min=6,score_LoadJob=6] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel = @a[c=1] SummonerToLevel|条件付き|
|24|/execute @a[score_LoadJob_min=6,score_LoadJob=6] ~ ~ ~ /particle enchantmenttable ~ ~1.5 ~ 0.1 0.6 0.1 4 300 force|条件付き|
|25|/execute @a[score_LoadJob_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] NextExp = @a[c=1] Level|
|26|/scoreboard players operation @a[score_LoadJob_min=0] NextExp *= #ExpMul Const|
|27|/scoreboard players set @a[score_LoadJob_min=0] CoolTickSpan -100|
|28|/execute @a[score_LoadJob_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] CoolTickSpan += @a[c=1] Level|
|29|/execute @a[score_LoadJob_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] CoolTickCounter = @a[c=1] CoolTickSpan|
|30|/scoreboard players add @a[score_LoadJob_min=0] MPMaxFlag 0|
|31|/execute @a[score_LoadJob_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] Job = @a[c=1] LoadJob|
|32|/scoreboard players set @a[score_LoadJob_min=0] ModeSkillA 0|
|33|/scoreboard players set @a[score_LoadJob_min=0] ModeSkillB 0|
|34|/scoreboard players set @a[score_LoadJob_min=0] InstantSkillA 0|
|35|/scoreboard players set @a[score_LoadJob_min=0] InstantSkillB 0|
|36|/scoreboard players set @a[score_LoadJob_min=0] CurrentMode 0|
|37|/scoreboard players set @a[score_LoadJob_min=0] CurrentModeCost 0|
|38|/scoreboard players reset @a[score_LoadJob_min=0] LoadJob|

## 詳細

1. 各職業に対応する`LoadJob`の値であるプレイヤーの`Level`に`(Job)Level`を、`ExpToLevel`に`(Job)ToLevel`をそれぞれ代入し、職業にごとの音やパーティクルを表示
2. `LoadJob`が0以上であるプレイヤーを一人選択し、その`NextExp`に`Level`を代入
3. `LoadJob`が0以上であるプレイヤーの`NextExp`に`#ExpMul`の`Const`=7との積を代入、`CoolTickSpan`を-100に設定
4. `LoadJob`が0以上であるプレイヤーを一人選択し、`CoolTickSpan`に`Level`を足し合わせ、`CoolTickCounter`に`CoolTickSpan`を代入
5. `LoadJob`が0以上であるプレイヤーの`MPMaxFlag`を0に設定
6. `LoadJob`が0以上であるプレイヤーを一人選択し、`Job`に`LoadJob`を代入
7. `LoadJob`が0以上であるプレイヤーの`ModeSkillA`,`ModeSkillB`,`InstantSkillA`,`InstantSkillB`,`CurrentMode`,`CurrentModeCost`をそれぞれ0に設定
8. `LoadJob`が0以上であるプレイヤーの`LoadJob`を0に設定

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
