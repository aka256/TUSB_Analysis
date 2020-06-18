---
title: 時間経過
tags: [command,skill]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
sidebar: mydoc_sidebar
permalink: timeElapsed.html
folder: command
datatable4c: true
---

- 位置(-1920,11,-200)

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|コメント|状態|
|:-:|:-|:-|:-|
|1|/scoreboard players remove @a[score_ManaRefresh_min=0] ManaRefresh 1|時間経過マナリフレッシュ|
|2|/tellraw @a[score_ManaRefresh=-1] {"text":"マナリフレッシュの効果が切れた。","color":"gold"}||条件付き|
|3|/scoreboard players reset @a[score_ManaRefresh=-1] ManaRefresh||条件付き|
|4|/scoreboard players remove @a[score_WindWall_min=0] WindWall 1|時間経過ウィンドウォール|
|5|/tellraw @a[score_WindWall=-1] {"text":"ウィンドウォールの効果が切れた。","color":"gold"}||条件付き|
|6|/scoreboard players reset @a[score_WindWall=-1] WindWall||条件付き|
|7|/execute @a[score_WindWall_min=0] ~ ~ ~ /playsound block.fire.extinguish master @a[r=16] ~ ~-100 ~ 0 0.5 0.1|
|8|/scoreboard players remove @a[score_NinjaTime_min=0] NinjaTime 1|時間経過連舞跳躍|
|9|/scoreboard players set @a[score_NinjaTime=-1] Tsuremai 0||条件付き|
|10|/scoreboard players set @a[score_NinjaTime=-1] Choyaku 0||条件付き|
|11|/scoreboard players reset @a[score_NinjaTime=-1] NinjaTime||条件付き|
|12|/effect @a[tag=MagicShield] minecraft:resistance 15 4 true|マジックシールド継続|
|13|/effect @a[tag=Mokuso] minecraft:regeneration 15 1 true|瞑想継続|
|14|/effect @a[tag=Mokuso,score_Level_min=43] minecraft:regeneration 15 2 true||条件付き|
|15|/scoreboard players remove @a[score_Kazakiri_min=0] Kazakiri 1|風切|
|16|/clone -1920 ~ ~2 -1920 ~ ~2 -1920 ~ ~2 filtered force minecraft:command_block 5 ###風切更新||条件付き|
|17|/scoreboard players remove @a[score_RadarVision_min=0] RadarVision 1|時間経過レーダーヴィジョン|
|18|/scoreboard players tag @a[score_RadarVision=-1] add RadarEnd||条件付き|
|19|/tp @a[score_RadarVision=-1] ~ ~15 ~||条件付き|
|20|/scoreboard players reset @a[score_RadarVision=-1] RadarVision||条件付き|
|21|/execute 0-0-1-0-1 ~ 12 -166 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###レーダーヴィジョン終了処理予約||条件付き|
|22|/scoreboard players add #SecCount Global 1|約1分処理イベント時伸びる|
|23|/scoreboard players test #SecCount Global 0 0|
|24|/worldborder warning distance 0||条件付き|
|25|/scoreboard players test #SecCount Global 61 *|
|26|/clone -1920 14 ~ -1920 14 ~ -1920 14 ~ filtered force minecraft:command_block 5 ###１分クロック||条件付き|
|27|/scoreboard players tag @e[tag=FlyingObject] add TestingTick {inTile:"minecraft:air"}|Tick停止飛翔物判定|
|28|/entitydata @e[tag=TestingTick] {PortalCooldown:1}||条件付き|
|29|/clone -1920 15 ~ -1920 15 ~ -1920 15 ~ filtered force minecraft:command_block 5 ###tick停止判定予約||条件付き|
|30|/execute @e[tag=CanSpin] ~-0.5 ~ ~-0.5 /fill ~ ~ ~ ~1 ~1 ~1 minecraft:web 0 keep|毒蜘蛛蜘蛛の巣設置 タグCanSpin|
|31|/scoreboard players tag @e[tag=Freeze] add Melt {PortalCooldown:0}|NoAI解除 Freeze Melt|
|32|/entitydata @e[tag=Melt] {:,NoAI:false}||条件付き|
|33|/scoreboard players tag @e[tag=Melt] remove Freeze||条件付き|
|34|/scoreboard players tag @e[tag=Melt] remove Melt||条件付き|
|35|/scoreboard players add @e[tag=SkillMob] MobCastTime 20|敵スキル SkillMob CastingMob MobCastTime|
|36|/execute @r[type=!Player,tag=SkillMob,c=1] ~ ~ ~ /scoreboard players operation @e[dx=0,tag=SkillMob,score_MobCastTime_min=400,c=1] MobCastTime %= #20 Const||条件付き|
|37|/clone -1920 ~3 ~3 -1920 ~3 ~3 -1920 ~3 ~3 filtered force minecraft:command_block 5 ###敵スキル実行||条件付き ガラスあり|
|38|/testfor @a[tag=CauseEvent,score_USBDimension_min=0,score_USBDimension=0]|イベント履行|
|39|/scoreboard players test #SecCount Global 0 *||条件付き|
|40|/clone -1920 ~ ~3 -1920 ~ ~3 -1920 ~ ~3 filtered force minecraft:command_block 5 ###イベント履行||条件付き|
|41|/tp 0-0-2-0-2 ~ 10 ~|クロック正常入力|
|42|/scoreboard players tag @a[score_USBDimension_min=13,score_USBDimension=13,tag=!SaveTorch,m=!spectator] add RemoveTorch|トカルト処理|
|43|/clone -1920 ~1 ~3 -1920 ~1 ~3 -1920 ~1 ~3 filtered force minecraft:command_block 5 ###トカルト処理||条件付き|
|44|/scoreboard players tag @a[tag=SaveTorch] remove SaveTorch|
|45|/execute 0-0-1-0-3 ~ ~ ~ /scoreboard players operation @e[r=5,tag=VillagerMeal] Freshness *= #-1 Const|動物誘導イベント|
|46|/clone -1920 ~2 ~3 -1920 ~2 ~3 -1920 ~2 ~3 filtered force minecraft:command_block 5 ###動物誘導イベント||条件付き|
|47|/scoreboard players tag @a add ReduceCurse {ActiveEffects:[{Id:4b,Amplifier:2b}]}|ガーディアン 呪い短縮|
|48|/effect @a[tag=ReduceCurse] minecraft:mining_fatigue 15 3||条件付き|
|49|/effect @a[tag=ReduceCurse] minecraft:weakness 15 3||条件付き|
|50|/effect @a[tag=ReduceCurse] minecraft:hunger 15 3||条件付き|
|51|/scoreboard players tag @a[tag=ReduceCurse] remove ReduceCurse||条件付き|

<div class="datatable4c-end"></div>

## 詳細

1. `ManaRefresh`が0以上であるプレイヤーが存在したら、`ManaRefresh`を1に設定し、以下の事柄を実行
   1. `ManaRefresh`が-1以下であるプレイヤーにマナリフレッシュが切れたメッセージを送る
   2. `ManaRefresh`が-1以下であるプレイヤーの`ManaRefresh`を0に設定
2. `WindWall`が0以上であるプレイヤーが存在したら、`WindWall`から1を引き、以下の事柄を実行
   1. `WindWall`が-1以上であるプレイヤーにウィンドウォールが切れたというメッセージを送る
   2. `WindWall`が-1以上であるプレイヤーの`WindWall`を0に設定
