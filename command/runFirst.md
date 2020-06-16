# 毎tick必ず最初に実行したいコマンド群

- 位置(-1920,4,-200)

## コマンド群

|No.|コマンド|コメント|状態|
|:-:|:-|:-|:-|
|1|/clone ~-4 ~ ~ ~-4 ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###セルフクロック|
|2|/scoreboard players tag @e[tag=FloatingRequired] add Garbage {OnGround:true}|接地削除処理 FloatingRequired|
|3|/scoreboard players tag @e[tag=CooldownRequired] add Garbage {PortalCooldown:0}|時間削除処理 CooldownRequired PortalCooldown=0 なら削除|
|4|/scoreboard players tag @e[tag=Slimy] add Garbage {AbsorptionAmount:0f}|自然スライム系削除|
|5|/entitydata @e[tag=Garbage] {Size:0}||条件付き|
|6|/entitydata @e[type=LavaSlime,tag=Garbage,name=!_] {Size:1,CustomName:_,CustomNameVisible:false}||条件付き|
|7|/entitydata @e[tag=Garbage] {Health:0f,DeathTime:19s,Silent:true}|不要エンティティ削除 タグGarbage|
|8|/kill @e[tag=Garbage]||条件付き|
|9|/scoreboard players set @a[score_USBDimension_min=0] AreaChangeFlag -100 {Dimension:-1}|エリア変更処理 範囲とUSBDimension 変更は必ず0tickで 表示はAreaTitleFlag|
|10|/scoreboard players set @a[score_USBDimension=99] AreaChangeFlag 110 {Dimension:1}|
|11|/scoreboard players set @a[rm=0,score_USBDimension=-1] AreaChangeFlag 0|
|12|/scoreboard players set @a[rm=0,score_USBDimension_min=100] AreaChangeFlag 0|
|13|/scoreboard players set @a[x=-192,y=-200,z=-288,dx=511,dy=600,dz=511,score_USBDimension_min=1,SKYLANDS] AreaChangeFlag 0|
|14|/scoreboard players set @a[x=752,y=-200,z=-320,dx=1439,dy=600,dz=703,score_USBDimension=0,UNDERWORLD] AreaChangeFlag 1|
|15|/scoreboard players set @a[x=752,y=-200,z=-320,dx=1439,dy=600,dz=703,score_USBDimension_min=2,UNDERWORLD] AreaChangeFlag 1|
|16|/scoreboard players set @a[x=-3072,y=-200,z=-656,dx=1727,dy=600,dz=1103,score_USBDimension=9,CLOUDIA] AreaChangeFlag 10|
|17|/scoreboard players set @a[x=-3072,y=-200,z=-656,dx=1727,dy=600,dz=1103,score_USBDimension_min=11,CLOUDIA] AreaChangeFlag 10|
|18|/scoreboard players set @a[x=-288,y=-200,z=-2672,dx=639,dy=600,dz=1311,score_USBDimension=10,TABLE_MOUNTAIN] AreaChangeFlag 11|
|19|/scoreboard players set @a[x=-288,y=-200,z=-2672,dx=639,dy=600,dz=1311,score_USBDimension_min=12,TABLE_MOUNTAIN] AreaChangeFlag 11|
|20|/scoreboard players set @a[x=-240,y=-200,z=448,dx=559,dy=600,dz=575,score_USBDimension=11,GULLIVERS_LAND] AreaChangeFlag 12|
|21|/scoreboard players set @a[x=-240,y=-200,z=448,dx=559,dy=600,dz=575,score_USBDimension_min=13,GULLIVERS_LAND] AreaChangeFlag 12|
|22|/scoreboard players set @a[x=752,y=-200,z=1024,dx=2063,dy=600,dz=2095,score_USBDimension=12,ICE_SHEET_FLOAT] AreaChangeFlag 13|
|23|/scoreboard players set @a[x=752,y=-200,z=1024,dx=2063,dy=600,dz=2095,score_USBDimension_min=14,ICE_SHEET_FLOAT] AreaChangeFlag 13|
|24|/execute @a[score_USBDimension=-1,c=1] ~ ~ ~ /scoreboard players set @a[x=-640,y=-200,z=-832,dx=1207,dy=600,dz=991,score_USBDimension_min=-99,NETHER] AreaChangeFlag -100 {Dimension:-1}|
|25|/execute @a[score_USBDimension=-1,c=1] ~ ~ ~ /scoreboard players set @a[x=-624,y=-200,z=672,dx=1375,dy=600,dz=943,score_USBDimension=-91,NETHER_TRIAL] AreaChangeFlag -90 {Dimension:-1}|
|26|/execute @a[score_USBDimension=-1,c=1] ~ ~ ~ /scoreboard players set @a[x=-624,y=-200,z=672,dx=1375,dy=600,dz=943,score_USBDimension_min=-89,NETHER_TRIAL] AreaChangeFlag -90 {Dimension:-1}|
|27|/execute @a[score_USBDimension=-1,c=1] ~ ~ ~ /scoreboard players set @a[x=-624,y=-200,z=672,dx=1375,dy=600,dz=943,score_USBDimension_min=-89,NETHER_TRIAL] AreaChangeFlag -90 {Dimension:-1}|
|28|/execute @a[score_AreaChangeFlag_min=-100] ~ ~ ~ /scoreboard players operation @a[c=1] USBDimension = @a[c=1] AreaChangeFlag|
|29|/execute @a[score_AreaChangeFlag_min=-100] ~ ~ ~ /scoreboard players operation @a[c=1] AreaTitleFlag >< @a[c=1] AreaChangeFlag||条件付き|
|30|/clone -1920 8 ~ -1920 9 ~ -1920 8 ~ filtered force minecraft:command_block 5 ###エリアタイトル表示||条件付き|
|31|/tellraw @a[m=adventure,tag=!Adv,team=!] {"text":"ブロックの設置・破壊制限が解除された。","color":"dark_aqua"}|ゲームモード変更 タグ有無 Adv|
|32|/gamemode survival @a[m=adventure,tag=!Adv,team=!]||条件付き|
|33|/tellraw @a[m=survival,tag=Adv] {"text":"ブロックの設置・破壊が制限された。","color":"red"}|
|34|/gamemode adventure @a[m=survival,tag=Adv]||条件付き|
|35|/scoreboard players test #SkillTargetCount Global 1 *|SkillTarger位置復元|
|36|/tp @e[tag=SkillTarget] ~ ~-0.4 ~||条件付き|
|37|/scoreboard players tag @e[tag=SkillTarget] remove SkillTarget||条件付き|
|38|/blockdata ~ ~-1 ~ {Items:[{id:minecraft:porkchop,Count:1b,Slot:0b,Damage:0s}],CookTimeTotal:20s}|1秒クロック|
|39|/clone -1920 11 ~ -1920 12 ~ -1920 11 ~ filtered force minecraft:command_block 5 ###１秒毎処理||条件付き|
|40|/gamerule mobGriefing|mobGriefing修正|
|41|/scoreboard players test MobGriefing Settings * 0|
|42|/gamerule mobGriefing true||条件付き|
|43|/difficulty hard||条件付き|
|44|/scoreboard players tag @e[type=FallingSand] add Garbage {FallDistance:0f}|砂バグ対策|
|45|/scoreboard players tag @e[type=FallingSand,tag=Garbage] remove Garbage {Time:0}||条件付き|
|46|/testforblock -1875 5 -198 minecraft:stone_pressure_plate 0|
|47|/summon ArmorStand -1875 5 -198 {Health:0f,DeathTime:19s}||条件付き|
|48|/tellraw AiAkaishi {"score":{"name":"*","objective":"CoolTickCounter"}}||条件付き|

## 詳細

1. [毎tick必ず最初に実行したいコマンド群]を実行 (ここで自身を呼び出すことでクロックを行っている)
2. `FloationRequired`を持ち、{OnGround:true}であるエンティティと`CooldownRequired`を持ち、{PortalCooldown:0}であるエンティティに`Garbage`を付与
3. `Slimy`を持ち、{AbsorptionAmount:0f}であるエンティティが存在したら`Garbage`を付与し、以下の事柄を実行
   1. `Garbage`を持つエンティティに{Size:0}を付与
   2. `Garbage`を持ち、nameが無いマグマキューブに{Size:1,CustomName:,CustomNameVisible:false}を付与
4. `Garbage`を持つエンティティに{Health:0f,DeathTime:19s,Silent:true}を付与し、killする
5. `USBDimension`が0以上であり、ネザーにいる(`Dimension`:-1)プレイヤーの`AreaChangeFlag`を-100に設定
6. `USBDimension`が99以下であり、エンドにいる(`Dimension`:1)プレイヤーの`AreaChangeFlag`を110に設定
7. `USBDimension`が-1以下であり、0m以上外側にいる(Overworldにいることの検知?)プレイヤーの`AreaChangeFlag`を0に設定
8. `USBDimension`が100以上であり、0m以上外側にいる(Overworldにいることの検知?)プレイヤーの`AreaChangeFlag`を0に設定
9. 以下の表のようにプレイヤーのいる場所に対する`AreaChangeFlag`を変更
10. `AreaChangeFlag`が-100以上であるプレイヤーいる場合、一人選択し`USBDimension`に`AreaChangeFlag`を代入して、以下の事柄を実行
    1. `AreaTileFlag`と`AreaChangeFlag`との値を入れ替える
    2. (-1920,9,-200)にある[エリア侵入記録]と(-1920,8,-200)にある[エリア処理]を実行
11. adventureであり、`Adv`がなく、何かしらのteamに所属しているプレイヤーがいる場合、アドベンチャーモード解除の旨のメッセージを出し、survivalに変更
12. survivalであり、`Adv`があるプレイヤーがいる場合、アドベンチャーモードに変更された旨のメッセージを出し、adventureに変更
13. `#SkillTargetCount`の`Global`が1以上である時、以下の事柄を実行
    1. `SkillTarget`を持つエンティティを0.4m下に移動
    2. `SkillTarget`を持つエンティティから`SkillTarget`を消去
14. (-1883,3,-200)にあるかまどに1秒で燃焼する豚肉を入れることができたら(要は1秒たったら)、(-1920,11,-200)にある[時間経過]と(-1920,12,-200)にある[AEC維持]を実行
15. `mobGriefing`について表示? (よくわからない)
16. `mobGriefing`が0以下(false)の時、`mobGriefing`=trueとし、難易度を`hard`に変更
17. `FallingSand`を持ち、{FallDistance:0f}であるエンティティに`Garbage`を付与し、{Time:0}であるエンティティから`Garbage`を削除
18. (-1875,5,-198)に石の感圧板があるとき、以下の事柄を実行 (恐らくデバッグ用なので無視して構わない)
    - 1tickで死亡するアーマースタンドを(-1875,5,-198)に召喚し、AiAkaishiに`CoolTickCounter`を持つエンティティの名前を送信する

|AreaName|プレイヤーの位置|USBDimension|AreaChangeFlag|
|:-|:-|:-|:-|
|SKYLANDS|x=-192,y=-200,z=-288,dx=511,dy=600,dz=511|1~|0|
|UNDERWORLD|x=752,y=-200,z=-320,dx=1439,dy=600,dz=703|~0 or 2~|1|
|CLOUDIA|x=-3072,y=-200,z=-656,dx=1727,dy=600,dz=1103|~9 or 11~|10|
|TABLE_MOUNTAIN|x=-288,y=-200,z=-2672,dx=639,dy=600,dz=1311|~10 or 12~|11|
|GULLIVERS_LAND|x=-240,y=-200,z=448,dx=559,dy=600,dz=575|~11 or 13~|12|
|ICE_SHEET_FLOAT|x=752,y=-200,z=1024,dx=2063,dy=600,dz=2095|~12 or 14~|13|
|NETHER|x=-640,y=-200,z=-832,dx=1207,dy=600,dz=991 かつ ネザーにいる|-99~|-100|
|NETHER_TRIAL|x=-624,y=-200,z=672,dx=1375,dy=600,dz=943 かつ ネザーにいる|~-91 or -89~|-90|

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
