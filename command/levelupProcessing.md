# レベルアップ処理

- 位置(-1920,9,-191)
- レベルアップ処理

## コマンド群

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players add @a[score_ExpToLevel=0,score_Level=49] Level 1|
|2|/scoreboard players add @a[score_ExpToLevel=0] MPMax 1|
|3|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP = @a[c=1] MPMax|
|4|/scoreboard players set @a[score_ExpToLevel=0] MPMaxFlag 1|
|5|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] HPMax = @a[c=1] MPMax|
|6|/scoreboard players operation @a[score_ExpToLevel=0] HPMax /= #8 Const|
|7|/scoreboard players set @a[score_HPMax_min=51] HPMax 50|
|8|/scoreboard players set @a[score_ExpToLevel=0] CoolTickSpan -100|
|9|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] CoolTickSpan += @a[c=1] Level|
|10|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] MPIncrement = @a[c=1] MPMax|
|11|/scoreboard players operation @a[score_ExpToLevel=0] MPIncrement /= #50 Const|
|12|/scoreboard players operation @a[score_ExpToLevel=0] MPIncrement += #3 Const|
|13|/execute @a[score_ExpToLevel=0] ~ ~ ~ /playsound entity.player.levelup master @a[r=16] ~ ~ ~ 2 0.7 0|
|14|/execute @a[score_ExpToLevel=0] ~ ~ ~ /particle happyVillager ~ ~ ~ 1 2 1 0.001 100 normal|
|15|/execute @a[score_ExpToLevel=0] ~ ~ ~ /summon FireworksRocketEntity ~ ~ ~ {LifeTime:10,FireworksItem:{id:minecraft:fireworks,Count:1b,tag:{Fireworks:{Explosions:[{Type:1b,Flicker:true,Trail:true,Colors:[16752934],FadeColors:[16777215]},{Type:0b,Flicker:false,Trail:false,Colors:[16715021,16777215],FadeColors:[16777215]}]}}}}|
|16|/title @a[score_ExpToLevel=0] times 5 100 20|
|17|/title @a[score_ExpToLevel=0] subtitle [{"text":"現在のレベル : ","italic":"true"},{"score":{"name":"*","objective":"Level"},"bold":"true","italic":"false"}]|
|18|/title @a[score_ExpToLevel=0] title {"text":"LEVEL UP ！","color":"green","bold":"true"}|
|19|/scoreboard players tag @a[score_ExpToLevel=0,score_Level_min=1,score_Level=50,score_NextExp=349] add ShowNewSkill|
|20|/clone -1920 ~1 ~ -1920 ~6 ~ -1920 ~1 ~ filtered force minecraft:command_block 5 #習得スキル取得|
|21|/scoreboard players set #ReserveShowSkill Global 1|
|22|/scoreboard players set @a[score_ExpToLevel=0] RefreshHPMax 3|
|23|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] NextExp = @a[c=1] Level|
|24|/scoreboard players operation @a[score_ExpToLevel=0] NextExp *= #ExpMul Const|
|25|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel += @a[c=1] NextExp|

## 詳細

1. `ExpToLevel`が0以下で、`Level`が49以下であるプレイヤーの`Level`を1に設定
2. `ExpToLevel`が0以下であるプレイヤーの`MPMax`を1に設定、`MP`に`MPMax`を代入、`MPMaxFlag`を1に設定、`HPMax`に`MPMax`を代入、`HPMax`に8で割った時の商を代入
3. `HPMax`が51以上であるプレイヤーの`HPMax`を50に設定
4. `ExpTolevel`が0以下であるプレイヤーの`CoolTickSpan`を-100に設定、`CoolTickSpan`に`Level`を足し合わせ、`MPInvrement`に`MPMax`を代入
5. `ExpTolevel`が0以下であるプレイヤーの`MPIncrement`に50で割った時の商を代入、`MPIncrement`に3を足す
6. `ExpTolevel`が0以下であるプレイヤーの座標で演出の実行
7. `ExpToLevel`が0以上、`Level`が1以上50以下、`NextExp`が349以下であるプレイヤーに`ShowNewSkill`を付与
8. (-1920,10,-191)から(-1920,15,-191)にある[**習得スキル取得**]を実行
9. `#ReserveShowSkill`の`Global`を1に設定
10. `ExpToLevel`が0以下であるプレイヤーの`RefreshHPMax`を3に設定、`NextExp`に`Level`を代入、`NextExp`に7との積を代入、`ExpToLevel`に`NextExp`を足し合わせる

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
