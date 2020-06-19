---
title: 初期化処理
tags: [command,scoreboard,entity]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,初期化処理
last_updated: 2020/6/19
sidebar: mydoc_sidebar
permalink: initializeProcessing.html
folder: command
datatable3cnp: true
---

<span class="label label-primary">位置 (-1870,4-194)~(-1870,4,-158)</span>

## About

(-1870,4-194)から(-1870,4,-158)の壁沿いに並んでいるコマンド群であり、X回路区域やスコアボードなど、様々な初期化処理を行う。

{% include note.html content="ここにあるコマンド群はその名の通り、初期化処理を行うので基本的に1度しか起動されない。" %}

## コマンド群

### メインクロックON

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|:-|:-|
|1|(空白)|何も書かれていない|
|2|/clone -1924 4 -200 -1924 4 -111 -1920 4 -200 filtered force minecraft:command_block 5|
|3|/summon ArmorStand -1870 10 -197 {Invulnerable:true,Tags:[SystemEntity,TypeChecked],Rotation:[90f,0f],CustomNameVisible:true,CustomName:"SystemKeeper",UUIDMost:2l,UUIDLeast:2l}|条件付き|

<div class="datatable3cnp-end"></div>

### 初期化装置停止

|No.|コマンド|
|:-:|:-|
|1|/fill -1896 117 -137 -1896 117 -137 minecraft:lapis_block 0 replace minecraft:redstone_block|
|2|/blockdata -1883 3 -200 {BurnTime:20000s}|
|3|/blockdata -1872 5 -203 {Items:[{id:"minecraft:cactus",Damage:0s,Count:127b,Slot:0b},{id:"minecraft:coal",Damage:0s,Count:127b,Slot:1b}],CookTimeTotal:200s,CookTime:0s}|

### Const

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add Const dummy|
|2|/scoreboard players set #0 Const 0|
|3|/scoreboard players set #-1 Const -1|
|4|/scoreboard players set #2 Const 2|
|5|/scoreboard players set #3 Const 3|
|6|/scoreboard players set #5 Const 5|
|7|/scoreboard players set #8 Const 8|
|8|/scoreboard players set #9 Const 9|
|9|/scoreboard players set #10 Const 10|
|10|/scoreboard players set #15 Const 15|
|11|/scoreboard players set #20 Const 20|
|12|/scoreboard players set #30 Const 30|
|13|/scoreboard players set #50 Const 50|
|14|/scoreboard players set #60 Const 60|
|15|/scoreboard players set #100 Const 100|
|16|/scoreboard players set #1000 Const 1000|
|17|/scoreboard players set #12000 Const 12000|
|18|/scoreboard players set #18000 Const 18000|
|19|/scoreboard players set #24000 Const 24000|
|20|/scoreboard players set #ExpMul Const 7|
|21|/scoreboard players set #ConquerMax Const 50|
|22|/scoreboard players set #AddStuffSpan Const 4|
|23|/scoreboard players set #MWCMultiplier Const 31743|
|24|/scoreboard players set #MWCBase Const 65536|
|25|/scoreboard players set #LegacyWeight Const 7|

### Setting

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add Settings dummy 設定|
|2|/scoreboard players set Sightseeing Settings 0|
|3|/scoreboard players set ForceNight Settings 1|
|4|/scoreboard players set Debug Settings 0|
|5|/scoreboard players set Prayable Settings 0|
|6|/scoreboard players set MobGriefing Settings 0|
|7|/scoreboard players set Difficulty Settings 0|

### Global

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add Global dummy|
|2|/scoreboard players set #ConquerCount Global 0|
|3|/scoreboard players set #ConquerPctInt Global 0|
|4|/scoreboard players set #ConquerPctDec Global 0|
|5|/scoreboard players set #ConqCntSkylands Global 0|
|6|/scoreboard players set #ConqCntNether Global 0|
|7|/scoreboard players set #ConqCntEnd Global 0|
|8|/scoreboard players set #ConqCntUnderworld Global 0|
|9|/scoreboard players set #ConqCntCloudia Global 0|
|10|/scoreboard players set #ConqCntMtTable Global 0|
|11|/scoreboard players set #ConqCntGLand Global 0|
|12|/scoreboard players set #ConqCntIce Global 0|
|13|/scoreboard players set #GameTime Global 0|
|14|/scoreboard players set #Random Global 0|
|15|/scoreboard players set #ProjectileUpdate Global 0|
|16|/scoreboard players set #PastorMax Global 8|
|17|/scoreboard players set #StartTime Global 0|
|18|/time query gametime|
|19|/scoreboard players set #ConqTimeSec Global 0|
|20|/scoreboard players set #EntityCount Global 0|
|21|/scoreboard players set #BlockCount Global 0|
|22|/scoreboard players set #SkillTargetCount Global 0|
|23|/scoreboard players set #NetherBossWaitCount Global 36|

### プレイヤー基礎

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add LeaveGame stat.leaveGame|
|2|/scoreboard objectives add HP dummy|
|3|/scoreboard objectives add HPChanging health HP変化フラグ|
|4|/scoreboard objectives add Food dummy|
|5|/scoreboard objectives add FoodChanging food 満腹度変化フラグ|
|6|/scoreboard objectives add Hunger dummy 空腹減少量|
|7|/scoreboard objectives add Armor armor アーマーポイント|
|8|/scoreboard objectives add HPMax dummy 最大HP|
|9|/scoreboard objectives add RefreshHPMax stat.useItem.minecraft.milk_bucket 最大HP更新フラグ|
|10|/scoreboard objectives add HealCount dummy HP回復量|
|11|/scoreboard objectives add EventRank dummy イベントランク|
|12|/scoreboard objectives add EventRank2 dummy イベントランク|
|13|/scoreboard objectives add TutorialRead dummy チュートリアル読んだフラグ|
|14|/scoreboard objectives add TutorialReading dummy チュートリアル読んでるフラグ|

### MP

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add MP dummy MP|
|2|/scoreboard objectives add MPMax dummy 最大MP|
|3|/scoreboard objectives add MPMaxFlag dummy MP回復済フラグ|
|4|/scoreboard objectives add CoolTickSpan dummy クールティックスパン|
|5|/scoreboard objectives add CoolTickCounter stat.timeSinceDeath|
|6|/scoreboard objectives add MPIncrement dummy MP定期回復量|
|7|/scoreboard objectives add MPConsumption dummy MP消費量|

### 乱数

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add Random dummy 乱数|
|2|/scoreboard objectives add RndMWC dummy lag1MWC乱数X|
|3|/scoreboard objectives add RndMWCCarry dummy lag1MWC乱数キャリー|

### ディメンション

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add USBDimension dummy 今居るエリア|
|2|/scoreboard objectives add AreaTitleFlag dummy エリア名表示フラグ|
|3|/scoreboard objectives add AreaChangeFlag dummy エリア変更フラグ|

### ジョブ

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add Job dummy 職業|
|2|/scoreboard objectives add SaveJob dummy 職業セーブスロット|
|3|/scoreboard objectives add LoadJob dummy 職業ロードスロット|
|4|/scoreboard objectives add TradedVillager stat.tradedWithVillager|
|5|/scoreboard objectives add PickupPaper stat.pickup.minecraft.paper|

### 経験値

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add NextExp dummy 必要経験値|
|2|/scoreboard objectives add ExpToLevel dummy 次のレベルアップまでの経験値|
|3|/scoreboard objectives add GotExpFlag dummy 経験値取得フラグ|
|4|/scoreboard objectives add ExpMessageFlag dummy 経験値メッセージフラグ|

### レベル 残り経験値

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add Level dummy レベル|
|2|/scoreboard objectives add KnightLevel dummy 剣士レベル|
|3|/scoreboard objectives add KnightToLevel dummy 剣士残り必要経験値|
|4|/scoreboard objectives add NinjaLevel dummy 忍者レベル|
|5|/scoreboard objectives add NinjaToLevel dummy 忍者残り必要経験値|
|6|/scoreboard objectives add ArcherLevel dummy 狩人レベル|
|7|/scoreboard objectives add ArcherToLevel dummy 狩人残り必要経験値|
|8|/scoreboard objectives add WhiteMageLevel dummy 白魔導士レベル|
|9|/scoreboard objectives add WhiteMageToLevel dummy 白魔導士残り必要経験値|
|10|/scoreboard objectives add BlackMageLevel dummy 黒魔導士レベル|
|11|/scoreboard objectives add BlackMageToLevel dummy 黒魔導士残り必要経験値|
|12|/scoreboard objectives add SummonerLevel dummy 召喚士レベル|
|13|/scoreboard objectives add SummonerToLevel dummy 召喚士残り必要経験値|

### 即時(サポートスキル)

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add InstantSkillA dummy 即時スキルA|
|2|/scoreboard objectives add InstantCostA dummy 即時スキルAコスト|
|3|/scoreboard objectives add InstantChangeA|0|即時スキルA変更フラグ|
|4|/scoreboard objectives add InstantSkillB dummy 即時スキルB|
|5|/scoreboard objectives add InstantCostB dummy 即時スキルBコスト|
|6|/scoreboard objectives add InstantChangeB trigger 即時スキルB変更フラグ|

### モード(モードスキル)

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add ModeSkillA dummy モードスキルA|
|2|/scoreboard objectives add ModeCostA dummy モードスキルAコスト|
|3|/scoreboard objectives add ModeChangeA trigger モードスキルA変更フラグ|
|4|/scoreboard objectives add ModeSkillB dummy モードスキルB|
|5|/scoreboard objectives add ModeCostB dummy モードスキルBコスト|
|6|/scoreboard objectives add ModeChangeB trigger モードスキルB変更フラグ|
|7|/scoreboard objectives add CurrentMode dummy 選択中のモードスキル|
|8|/scoreboard objectives add CurrentModeCost dummy 選択中モードスキルコスト|
|9|/scoreboard objectives add ModeState dummy モード状態|

### スキル全般

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add ActivatedSkill dummy 発動スキル|
|2|/scoreboard objectives add ChangeSkill dummy 変更先スキル|
|3|/scoreboard objectives add ChangeSkillCost dummy 変更先スキルコスト|
|4|/scoreboard objectives add ShowSkillSlot dummy 表示スキルスロット|
|5|/scoreboard objectives add ShowSkill dummy 表示スキル|
|6|/scoreboard objectives add MPCost dummy スキル消費MP|

### 剣士MP

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set #100 MPCost 20|
|2|/scoreboard players set #101 MPCost 20|
|3|/scoreboard players set #102 MPCost 15|
|4|/scoreboard players set #103 MPCost 10|
|5|/scoreboard players set #104 MPCost 10|
|6|/scoreboard players set #120 MPCost 5|
|7|/scoreboard players set #121 MPCost 10|
|8|/scoreboard players set #122 MPCost 5|
|9|/scoreboard players set #123 MPCost 10|
|10|/scoreboard players set #123 MPCost 10|
|11|/scoreboard players set #125 MPCost 100|

### 忍者MP

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set #200 MPCost 5|
|2|/scoreboard players set #201 MPCost 10|
|3|/scoreboard players set #202 MPCost 15|
|4|/scoreboard players set #203 MPCost 50|
|5|/scoreboard players set #204 MPCost 25|
|6|/scoreboard players set #205 MPCost 15|
|7|/scoreboard players set #206 MPCost 25|
|8|/scoreboard players set #207 MPCost 20|
|9|/scoreboard players set #208 MPCost 20|
|10|/scoreboard players set #220 MPCost 2|
|11|/scoreboard players set #221 MPCost 3|
|12|/scoreboard players set #222 MPCost 3|
|13|/scoreboard players set #223 MPCost 10|
|14|/scoreboard players set #224 MPCost 100|

### 狩人MP

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set #300 MPCost 20|
|2|/scoreboard players set #301 MPCost 25|
|3|/scoreboard players set #302 MPCost 20|
|4|/scoreboard players set #303 MPCost 5|
|5|/scoreboard players set #304 MPCost 5|
|6|/scoreboard players set #305 MPCost 80|
|7|/scoreboard players set #306 MPCost 10|
|8|/scoreboard players set #307 MPCost 40|
|9|/scoreboard players set #320 MPCost 7|
|10|/scoreboard players set #321 MPCost 15|
|11|/scoreboard players set #322 MPCost 10|
|12|/scoreboard players set #323 MPCost 5|
|13|/scoreboard players set #324 MPCost 5|
|14|/scoreboard players set #325 MPCost 7|
|15|/scoreboard players set #326 MPCost 100|

### 白魔導士MP

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set #400 MPCost 10|
|2|/scoreboard players set #401 MPCost 40|
|3|/scoreboard players set #402 MPCost 60|
|4|/scoreboard players set #403 MPCost 40|
|5|/scoreboard players set #404 MPCost 50|
|6|/scoreboard players set #405 MPCost 80|
|7|/scoreboard players set #420 MPCost 10|
|8|/scoreboard players set #421 MPCost 10|
|9|/scoreboard players set #422 MPCost 20|
|10|/scoreboard players set #423 MPCost 100|

### 黒魔導士MP

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set #500 MPCost 15|
|2|/scoreboard players set #501 MPCost 30|
|3|/scoreboard players set #502 MPCost 60|
|4|/scoreboard players set #503 MPCost 60|
|5|/scoreboard players set #504 MPCost 40|
|6|/scoreboard players set #505 MPCost 5|
|7|/scoreboard players set #506 MPCost 50|
|8|/scoreboard players set #507 MPCost 90|
|9|/scoreboard players set #508 MPCost 40|
|10|/scoreboard players set #509 MPCost 80|
|11|/scoreboard players set #509 MPCost 80|
|12|/scoreboard players set #521 MPCost 10|
|13|/scoreboard players set #522 MPCost 20|
|14|/scoreboard players set #523 MPCost 20|
|15|/scoreboard players set #524 MPCost 25|
|16|/scoreboard players set #525 MPCost 100|

### 召喚士MP

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set #600 MPCost 25|
|2|/scoreboard players set #601 MPCost 30|
|3|/scoreboard players set #602 MPCost 10|
|4|/scoreboard players set #603 MPCost 35|
|5|/scoreboard players set #604 MPCost 40|
|6|/scoreboard players set #605 MPCost 45|
|7|/scoreboard players set #606 MPCost 50|
|8|/scoreboard players set #607 MPCost 55|
|9|/scoreboard players set #608 MPCost 60|
|10|/scoreboard players set #620 MPCost 30|
|11|/scoreboard players set #621 MPCost 5|
|12|/scoreboard players set #622 MPCost 20|
|13|/scoreboard players set #623 MPCost 10|
|14|/scoreboard players set #624 MPCost 10|
|15|/scoreboard players set #625 MPCost 10|
|16|/scoreboard players set #626 MPCost 20|
|17|/scoreboard players set #627 MPCost 10|
|18|/scoreboard players set #628 MPCost 40|
|19|/scoreboard players set #629 MPCost 15|
|20|/scoreboard players set #630 MPCost 100|

### 村人会話

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add TalkToVillager stat.talkedToVillager|
|2|/scoreboard objectives add PastorFlag trigger 牧師会話フラグ|
|3|/scoreboard objectives add AgentFlag trigger エージェント会話フラグ|
|4|/scoreboard objectives add AugurFlag trigger 占い師会話フラグ|
|5|/scoreboard objectives add AgentWarpCost dummy エージェント利用価格|
|6|/scoreboard objectives add Payment dummy エメラルド支払い残額|

### 一般

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add DenySightSeeing trigger 観光モード拒否フラグ|
|2|/scoreboard objectives add kill trigger 個人killフラグ|
|3|/scoreboard objectives add UseEnderEye stat.useItem.minecraft.ender_eye|
|4|/scoreboard objectives add SleepInBed stat.sleepInBed|
|5|/scoreboard objectives add MineNetherrack stat.mineBlock.minecraft.netherrack|
|6|/scoreboard objectives add ItemCount dummy 特定アイテム数|
|7|/scoreboard objectives add UseSpawnEgg stat.useItem.minecraft.spawn_egg|
|8|/scoreboard objectives add UseArmorStand stat.useItem.minecraft.armor_stand|
|9|/scoreboard objectives add Freshness dummy 誘導羊鮮度|
|10|/scoreboard objectives add MobCastTime dummy 敵キャストタイム|
|11|/scoreboard objectives add EnderChestOpened stat.enderchestOpened|
|12|/scoreboard objectives add ISFEncount dummy トカルトエンカウント|
|13|/scoreboard objectives add UseChorus stat.useItem.minecraft.chorus_fruit|
|14|/scoreboard objectives add Deaths stat.deaths|

### 個人ロッカー

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add PersonalLocker dummy 個人ロッカー番号|
|2|/scoreboard players set #NextLocker PersonalLocker 100|
|3|/scoreboard players set 29269ff6-872d-4327-9ab5-9a1807e69292 PersonalLocker 100|
|4|/scoreboard players set b913fae5-35f1-468e-9f52-b9ad40938ea6 PersonalLocker 99|
|5|/scoreboard players set 21c17454-ba43-4f07-822f-5fa9899b9ded PersonalLocker 98|
|6|/scoreboard players set 5965dc9d-88b2-43f1-8998-7f5dab48c5e1 PersonalLocker 97

### スキル発動条件

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add UseBow stat.useItem.minecraft.bow|
|2|/scoreboard objectives add UseSnowball stat.useItem.minecraft.snowball|
|3|/scoreboard objectives add UseCarrotStick stat.useItem.minecraft.carrot_on_a_stick|
|4|/scoreboard objectives add DropGunpowder stat.drop.minecraft.gunpowder|
|5|/scoreboard objectives add DropBone stat.drop.minecraft.bone|
|6|/scoreboard objectives add DropRottenFlesh stat.drop.minecraft.rotten_flesh|
|7|/scoreboard objectives add DamageDealt stat.damageDealt|
|8|/scoreboard objectives add DamageTaken stat.damageTaken|
|9|/scoreboard objectives add SneakTime stat.sneakTime|
|10|/scoreboard objectives add Sneaking stat.sneakTime|
|11|/scoreboard objectives add WalkOneCm stat.walkOneCm|
|12|/scoreboard objectives add CrouchOneCm stat.crouchOneCm|
|13|/scoreboard objectives add SprintOneCm stat.sprintOneCm|
|14|/scoreboard objectives add FlyOneCm stat.flyOneCm|
|15|/scoreboard objectives add Jump stat.jump|
|16|/scoreboard objectives add PigOneCm stat.pigOneCm|

### スキル状態管理

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add IronWill dummy ノックバック軽減機会ポイント|
|2|/scoreboard objectives add NinjaTime dummy 連舞・跳躍効果時間|
|3|/scoreboard objectives add Tsuremai dummy 連舞レベル|
|4|/scoreboard objectives add Choyaku dummy 跳躍レベル|
|5|/scoreboard objectives add Kazakiri dummy 風切効果時間|
|6|/scoreboard objectives add CookingState dummy ワイルドクッキング成否状態|
|7|/scoreboard objectives add WildHealing dummy ワイルドヒーリング満腹度変化量|
|8|/scoreboard objectives add EnChase dummy エンチェイスレベル|
|9|/scoreboard objectives add EnAspir dummy エンアスピルレベル|
|10|/scoreboard objectives add ManaRefresh dummy MP回復量上昇時間|
|11|/scoreboard objectives add WindWall dummy ウィンドウォール効果時間|
|12|/scoreboard objectives add OrderType dummy つんつん命令タイプ|
|13|/scoreboard objectives add Doom dummy 死の宣告カウント|
|14|/scoreboard objectives add DoomSecond dummy 死の宣告進行秒管理|

### スキル同期管理

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add TacticalHealBase dummy タクティカルヒール発動時BaseDamageTaken|
|2|/scoreboard objectives add AspirBase dummy アスピル時BaseDamageDealt|
|3|/scoreboard objectives add ThunderBolt dummy サンダーボルト|
|4|/scoreboard objectives add RadarVision dummy レーダーヴィジョン効果時間|
|5|/scoreboard objectives add RadarSyncCount dummy レーダーサイト同期カウント|
|6|/scoreboard objectives add RadarAreaCheck dummy レーダーヴィジョンUSBDimensionチェック|
|7|/scoreboard objectives add RaiseSyncCount dummy レイズ同期カウント|
|8|/scoreboard objectives add RaisedArea dummy レイズ付与時USBDimension|

### スキル判定

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives add TargetCheck dummy ターゲットチェッカー|
|2|/scoreboard objectives add ProjectileSkill dummy 投擲物に付与したスキルとレベル|
|3|/scoreboard objectives add PotentialSkill dummy Mobに発動する可能性のあるスキル|

### チーム

|No.|コマンド|
|:-:|:-|
|1|/scoreboard teams add FriendlyTeam|
|2|/scoreboard teams option FriendlyTeam friendlyfire false|
|3|/scoreboard teams option FriendlyTeam seeFriendlyInvisibles true|
|4|/scoreboard teams option FriendlyTeam collisionRule never|
|5|/scoreboard teams option FriendlyTeam deathMessageVisibility always|
|6|/scoreboard teams option FriendlyTeam deathMessageVisibility always|
|7|/scoreboard teams option FriendlyTeam nametagVisibility always|
|8|/scoreboard teams add Yellow|
|9|/scoreboard teams option Yellow color yellow|
|10|/scoreboard teams option Yellow collisionRule never|

### ゲームルール

|No.|コマンド|
|:-:|:-|
|1|/gamerule logAdminCommands false|
|2|/gamerule commandBlockOutput false|
|3|/gamerule sendCommandFeedback false|
|4|/gamerule reducedDebugInfo true|
|5|/gamerule naturalRegeneration false|
|6|/gamerule doDaylightCycle false|
|7|/gamerule doEntityDrops true|
|8|/gamerule doFireTick true|
|9|/gamerule doMobLoot true|
|10|/gamerule doMobSpawning true|
|11|/gamerule doTileDrops true|
|12|/gamerule keepInventory false|
|13|/gamerule randomTickSpeed 3|
|14|/gamerule showDeathMessages true|
|15|/gamerule showDeathMessages true|
|16|/gamerule spawnRadius 5|

### setdisplay

|No.|コマンド|
|:-:|:-|
|1|/scoreboard objectives setdisplay list Level|
|2|/scoreboard objectives setdisplay sidebar MP|
|3|/scoreboard objectives setdisplay belowName HP|
|4|/gamerule disableElytraMovementCheck true|

### ワールド初期設定

|No.|コマンド|
|:-:|:-|
|1|/difficulty hard|
|2|/defaultgamemode adventure|
|3|/worldborder center 0 0|
|4|/worldborder set 7000|
|5|/time set 14000|
|6|/weather rain 15|
|7|/scoreboard players tag @e[-1920,6,-197,dz=4,tag=Enter] remove Enter|

## 詳細

### メインクロックON

1. [毎tick実行されるコマンド群](mainclockProcessing.html#毎tick実行されるコマンド群)を実行
2. [SystemKeeper](TUSB_Analysis_Entity.html#SystemKeeper)君を(-1870,10,-197)に召喚し、[メインクロック](mainclockProcessing.html)を作動させる

### 初期化装置停止

1. (-1896,117,-137)にあるレッドストーンブロックをラピスラズリブロックに置き換えて、[初期化装置](insideMcLawell.html)を停止
2. (-1883,3,-200)にある、1秒クロックのためのかまどの燃料がなくなるまでの時間を1000秒に設定
3. (-1872,5,-203)にある[スポーンチャンク読み込みのためのかまど](furnaceProcessing.html)にサボテンと石炭を投入し、これを稼働させる

### Const

- `Const` (定数)を作成し、以下のような値を代入していく

- `#N`(Nは整数)というフェイクプレイヤーの`Const`にはNが代入される
- その他の定数は以下のようになる

|フェイクプレイヤー|値|コメント|
|:-|:-|:-|
|#ExpMul|7|経験値取得時に使用する定数|
|#ConquerMax|50|エンドポータルフレームの数|
|#AddStaffSpan|4|製作者村人が追加される間隔|
|#MWCMultiplier|31743|詳しくは[キャリー付き乗算](https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%A3%E3%83%AA%E3%83%BC%E4%BB%98%E3%81%8D%E4%B9%97%E7%AE%97)を参照|
|#MWCBase|65536|同上|
|#LegacyWeight|7|レガシーアイテムの破壊されるかの重み|

### Setting

- `Settings`を作成し、以下のような値を代入していく

|(フェイク)プレイヤー?|初期値|コメント|
|:-|:-|
|Sightseeing|0|
|ForceNight|1|
|Debug|0|
|Prayable|0|
|MobGriefing|0|
|Diffuculty|0|

### Global

- `Global`を作成し、以下のような値を代入していく

|フェイクプレイヤー|初期値|コメント|
|:-|:-|:-|
|#ConquerCount|0|攻略した島の数|
|#ConquerPctInt|0|攻略率の整数部|
|#ConquerPctDec|0|攻略率の小数部|
|#ConquerSkylands|0|通常世界の攻略数|
|#ConquerNether|0|ネザーの攻略数|
|#ConquerEnd|0|エンドの攻略数|
|#ConquerUnderworld|0|地下世界の攻略数|
|#ConquerCloudia|0|クラウディアの攻略数|
|#ConquerMtTable|0|テーブルマウンテンの攻略数|
|#ConquerGLand|0|ガリバーランドの攻略数|
|#ConquerCntIce|0|トカルトコルデの攻略数|
|#GameTime|0|
|#Random|0|
|#ProjectileUpdata|0|
|#PastorMax|8|
|#StartTime|0|
|#ConquerTimeSec|0|
|#EntityCount|0|
|#BlockCount|0|
|#SkillTargetCount|0|
|#NeterBossWaitCount|36|

### プレイヤー基礎

|タグの名前|初期値|コメント|
|:-|:-|:-|
|LeaveGame|(stat.leaveGame)|ゲームを終了した回数|
|HP|0||
|HPChangeing|(health)HP変化フラグ|
|Food|0||
|FoodChangeing|(food)|満腹度変化フラグ|
|Hunger|0|空腹減少量|
|Armor|(armor)|アーマーポイント|
|HPMax|0|最大HP|
|RefreshHPMax|(tat.useItem.minecraft.milk_bucket)|最大HP更新フラグ|
|HealCount|0|HP回復量|
|EventRank|0|イベントランク|
|EventRank2|0|イベントランク|
|TutorialRead|0|チュートリアルを読んだフラグ|
|TutorialReading|0|チュートリアルを読んでいるフラグ|

### MP

|タグの名前|初期値|コメント|
|:-|:-|:-|
|MP|0|MP|
|MPMax|0|最大MP|
|MPMaxFlag|0|MP回復フラグ|
|CoolTickSpan|0|クールスティックスパン|
|CoolTickCounter|(stat.timeSinceDeath)|
|MPIncrement|0|MP定期回復量|
|MPConsumption|0|MP消費量|

### 乱数

|タグの名前|初期値|コメント|
|:-|:-|:-|
|Random|0|乱数|
|RndMWC|0|lag1MWC乱数X|
|RndMWCCarry|0|lag1MWC乱数キャリー|

### ディメンション

|タグの名前|初期値|コメント|
|:-|:-|:-|
|USBDimension|0|今いるエリア|
|AreaTitleFlag|0|エリア名表示フラグ|
|AreaChangeFlag|0|エリア変更フラグ|

### ジョブ

|タグの名前|初期値|コメント|
|:-|:-|:-|
|Job|0|職業|
|SaveJob|0|職業セーブスロット|
|LoadJob|0|職業ロードスロット|
|TradedVillager|(tat.tradedWithVillager)|
|PickPaper|(stat.pickup.minecraft.paper)|

### 経験値

|タグの名前|初期値|コメント|
|:-|:-|:-|
|NextExp|0|必要経験値|
|ExpToLevel|0|次のレベルアップまでの経験値|
|GotExpFlag|0|経験値取得フラグ|
|ExpMessageFlag|0|経験値メッセージフラグ|

### レベル 残り経験値

|タグの名前|初期値|コメント|
|:-|:-|:-|
|Level|0|レベル|
|KnightLevel|0|剣士レベル|
|KnightToLevel|0|剣士残り必要経験値|
|NinjaLevel|0|忍者レベル|
|NinjaToLevel|0|忍者残り必要経験値|
|ArcherLevel|0|狩人レベル|
|ArcherToLevel|0|狩人残り必要経験値|
|WhiteMageLevel|0|白魔導士レベル|
|WhiteMageToLevel|0|白魔導士残り必要経験値|
|BlackMageLevel|0|黒魔導士レベル|
|BlackMageToLevel|0|黒魔導士残り必要経験値|
|SummonerLevel|0|召喚士レベル|
|SummonerToLevel|0|召喚士残り必要経験値|

### 即時(サポートスキル)

|タグの名前|初期値|コメント|
|:-|:-|:-|
|InstantSkillA|0|即時スキルA|
|InstantCostA|0|即時スキルAコスト|
|InstantChangeA|0|即時スキルA変更フラグ(triger)|
|InstantSkillB|0|即時スキルB|
|InstantCostB|0|即時スキルBコスト|
|InstantChangeB|0|即時スキルB変更フラグ(triger)|

### モード(モードスキル)

|タグの名前|初期値|コメント|
|:-|:-|:-|
|ModeSkillA|0|モードスキルA|
|ModeCostA|0|モードスキルAコスト|
|ModeChangeA|0|モードスキルA変更フラグ(triger)|
|ModeSkillB|0|モードスキルB|
|ModeCostB|0|モードスキルBコスト|
|ModeChangeB|0|モードスキルB変更フラグ(triger)|
|CurrentMode|0|選択中のモードスキル|
|CurrentModeCost|0|選択中モードスキルコスト|
|ModeState|0|モード状態|

### スキル全般

|タグの名前|初期値|コメント|
|:-|:-|:-|
|ActivatedSkill|0|発動スキル|
|ChangeSkill|0|変更先スキル|
|ChangeSkillCost|0|変更先スキルコスト|
|ShowSkillSlot|0|表示スキルスロット|
|ShowSkill|0|表示スキル|
|MPCost|0|スキル消費MP|

### 剣士MP

|フェイクプレイヤー|MPCostの値|
|:-|:-|
|#100|20|
|#101|20|
|#102|15|
|#103|10|
|#104|10|
|#120|5|
|#121|10|
|#122|5|
|#123|10|
|#123|10|
|#125|100|

### 忍者MP

|フェイクプレイヤー|MPCostの値|
|:-|:-|
|#200|5|
|#201|10|
|#202|15|
|#203|50|
|#204|25|
|#205|15|
|#206|25|
|#207|20|
|#208|20|
|#220|2|
|#221|3|
|#222|3|
|#223|10|
|#224|100|

### 狩人MP

|フェイクプレイヤー|MPCostの値|
|:-|:-|
|#300|20|
|#301|25|
|#302|20|
|#303|5|
|#304|5|
|#305|80|
|#306|10|
|#307|40|
|#320|7|
|#321|15|
|#322|10|
|#323|5|
|#324|5|
|#325|7|
|#326|100|

### 白魔導士MP

|フェイクプレイヤー|MPCostの値|
|:-|:-|
|#400|10|
|#401|40|
|#402|60|
|#403|40|
|#404|50|
|#405|80|
|#420|10|
|#421|10|
|#422|20|
|#423|100|

### 黒魔導士MP

|フェイクプレイヤー|MPCostの値|
|:-|:-|
|#500|15|
|#501|30|
|#502|60|
|#503|60|
|#504|40|
|#505|5|
|#506|50|
|#507|90|
|#508|40|
|#509|80|
|#509|80|
|#521|10|
|#522|20|
|#523|20|
|#524|25|
|#525|100|

### 召喚士MP

|フェイクプレイヤー|MPCostの値|
|:-|:-|
|#600|25|
|#601|30|
|#602|10|
|#603|35|
|#604|40|
|#605|45|
|#606|50|
|#607|55|
|#608|60|
|#620|30|
|#621|5|
|#622|20|
|#623|10|
|#624|10|
|#625|10|
|#626|20|
|#627|10|
|#628|40|
|#629|15|
|#630|100|

### 村人会話

|タグの名前|初期値|コメント|
|:-|:-|:-|
|TalkToVillager|(stat.talkedToVillager)|
|PastorFlag|0|牧師会話フラグ(trigger)|
|AgentFlag|0|エージェント会話フラグ(trigger)|
|AugurFlag|0|占い師会話フラグ(trigger)|
|AgentWarpCost|0|エージェント利用価格|
|Payment|0|エメラルド支払い残額|

### 一般

|タグの名前|初期値|コメント|
|:-|:-|:-|
|DenySightSeeing|0|観光モード拒否フラグ(trigger)|
|kill|0|個人killフラグ(trigger)|
|UseEnderEye|(stat.useItem.minecraft.ender_eye)|
|SleepInBed|(stat.sleepInBed)|
|MineNetherrack|(stat.mineBlock.minecraft.netherrack)|
|ItemCount|0|特定アイテム数|
|UseSpawnEgg|(stat.useItem.minecraft.spawn_egg)|
|UseArmorStand|(stat.useItem.minecraft.armor_stand)|
|Freshness|0|誘導羊鮮度|
|MobCastTime|0|敵キャストタイム|
|EnderChestOpened|(stat.enderchestOpened)|
|ISFEncount|0|トカルトエンカウント|
|UseChorus|(stat.useItem.minecraft.chorus_fruit)|
|Deaths|(stat.deaths)|

### 個人ロッカー

- 個人ロッカー番号を管理する`PersonalLocker`を作成し、以下のエンティティの`PersonalLocker`の値を変更

|フェイクプレイヤー/UUID|値|
|-|-|
|#NextLocker|100|
|29269ff6-872d-4327-9ab5-9a1807e69292|100|
|b913fae5-35f1-468e-9f52-b9ad40938ea6|99|
|21c17454-ba43-4f07-822f-5fa9899b9ded|98|
|5965dc9d-88b2-43f1-8998-7f5dab48c5e1|97|

### スキル発動条件

|タグの名前|初期値|
|:-|:-|
|UseBow|(stat.useItem.minecraft.bow)|
|UseSnowball|(stat.useItem.minecraft.snowball)|
|UseCarrotStick|(stat.useItem.minecraft.carrot_on_a_stick)|
|DropGunpowder|(stat.drop.minecraft.gunpowder)|
|DropBone|(stat.drop.minecraft.bone)|
|DropRottenFlesh|(stat.drop.minecraft.rotten_flesh)|
|DamageDealt|(stat.damageDealt)|
|DamageTaken|(stat.damageTaken)|
|SneakTime|(stat.sneakTime)|
|Sneaking|(stat.sneakTime)|
|WalkOneCm|(stat.walkOneCm)|
|CrouchOneCm|(stat.crouchOneCm)|
|SprintOneCm|(stat.sprintOneCm)|
|FlyOneCm|(stat.flyOneCm)|
|Jump|(stat.jump)|
|PigOneCm|(stat.pigOneCm)|

### スキル状態管理

|タグの名前|初期値|コメント|
|:-|:-|:-|
|IronWill|0|ノックバック軽減機会ポイント|
|NinjaTime|0|連舞・跳躍効果時間|
|Tsuremai|0|連舞レベル|
|Choyaku|0|跳躍レベル|
|Kazakiri|0|風切効果時間|
|CookingState|0|ワイルドクッキング成否状態|
|WildHealing|0|ワイルドヒーリング満腹度変化量|
|EnChase|0|エンチェイスレベル|
|EnAspir|0|エンアスピルレベル|
|ManaRefresh|0|MP回復量上昇時間|
|WindWall|0|ウィンドウォール効果時間|
|OrderType|0|つんつん命令タイプ|
|Doom|0|死の宣告カウント|
|DoomSecond|0|死の宣告進行秒管理|

### スキル同期管理

|タグの名前|初期値|コメント|
|:-|:-|:-|
|TacticalHealBase|0|タクティカルヒール発動時BaseDamageTaken|
|AspirBase|0|アスピル時BaseDamageDealt|
|ThunderBolt|0|サンダーボルト|
|RadarVision|0|レーダーヴィジョン効果時間|
|RadarSyncCount|0|レーダーサイト同期カウント|
|RadarAreaCheck|0|レーダーヴィジョンUSBDimensionチェック|
|RaiseSyncCount|0|レイズ同期カウント|
|RaisedArea|0|レイズ付与時USBDimension|

### スキル判定

|タグの名前|初期値|コメント|
|:-|:-|:-|
|TargetCheck|0|ターゲットチェッカー|
|ProjectileSkill|0|投擲物に付与したスキルとレベル|
|PotentialSkill|0|Mobに発動する可能性のあるスキル|

### チーム

- `FriendlyTeam`と`Yellow`を作成し、以下のように設定を行う

#### FriendlyTeam

|設定名|値|コメント|
|:-|:-|:-|
|friendlyfire|false|
|seeFriendlyInvisibles|true|
|collisionRule|never|
|deathMessageVisibility|always|
|deathMessageVisibility|always|
|nametagVisibility|always|

#### Yellow

|設定名|値|コメント|
|:-|:-|:-|
|color|yellow|
|collisionRule|never|

### ゲームルール

- gameruleを以下のように設定

|ルール名|値|
|:-|:-|
|logAdminCommands|false|
|commandBlockOutput|false|
|sendCommandFeedback|false|
|reducedDebugInfo|true|
|naturalRegeneration|false|
|doDaylightCycle|false|
|doEntityDrops|true|
|doFireTick|true|
|doMobLoot|true|
|doMobSpawning|true|
|doTileDrops|true|
|keepInventory|false|
|randomTickSpeed|3|
|showDeathMessages|true|
|showDeathMessages|true|
|spawnRadius|5|

### setdisplay

- listに`Level`、sidebarに`MP`、belowNameに`HP`をそれぞれ表示し、`disableElytraMovementCheck`をtrueに変更

### ワールド初期設定

1. 難易度をハードに、デフォルトのゲームモードをアドベンチャーモードにそれぞれ変更
2. ワールドの境界線を(0,0)を中心とし、7000mを一辺の長さとした矩形として構成
3. 時間を14000に設定
4. 15秒間雨を降らせる
5. (-1920,6,-197)付近にいる[地下世界](TUSB_Analysis_Entity.html#地下世界)、[クラウディア](TUSB_Analysis_Entity.html#クラウディア)、[テーブルマウンテン](TUSB_Analysis_Entity.html#テーブルマウンテン)、[ガリバーランド](TUSB_Analysis_Entity.html#ガリバーランド)、[トカルトコルデ](TUSB_Analysis_Entity.html#トカルトコルデ)から`Enter`を消去
