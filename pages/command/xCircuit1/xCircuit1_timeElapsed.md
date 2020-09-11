---
title: 時間経過
tags: [コマンド,スキル]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,トカルトコルデ,スキル,ガーディアン
last_updated: 2020/6/19
update: 2020-09-10 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit1/xCircuit1_timeElapsed.html
folder: xCircuit1
datatable4c: true
summary: スキルやイベント、トカルトコルデなどでの時間経過により変化するものの処理、分岐を行っている。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,11,-200)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群1]({{site.baseurl}}/command/xCircuit1/xCircuit1_runFirst.html)

<span class="tagBlue">分岐先</span> [風切更新]({{site.baseurl}}/command/xCircuit1/xCircuit1_kazakiriUpdata.html), [狩人レーダーヴィジョン終了処理]({{site.baseurl}}/command/xCircuit10/xCircuit10_RadarVisionFinProcessing.html), [約1分処理]({{site.baseurl}}/command/xCircuit1/xCircuit1_oneMinProcessing.html), [Tick停止飛翔物削除]({{site.baseurl}}/command/xCircuit1/xCircuit1_tickStopDelete.html), [敵スキル実行]({{site.baseurl}}/command/xCircuit1/xCircuit1_runMobSkill.html), [嫌な予感実行]({{site.baseurl}}/command/xCircuit1/xCircuit1_eventFulfill.html), [トカルト処理]({{site.baseurl}}/command/xCircuit1/xCircuit1_iceProcessing.html), [動物誘導イベント]({{site.baseurl}}/command/xCircuit1/xCircuit1_animalGuideEvent.html)

スキルやイベント、トカルトコルデなどでの時間経過により変化するものの処理、分岐を行っている。

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
|38|/testfor @a[tag=CauseEvent,score_USBDimension_min=0,score_USBDimension=0]|嫌な予感実行|
|39|/scoreboard players test #SecCount Global 0 *||条件付き|
|40|/clone -1920 ~ ~3 -1920 ~ ~3 -1920 ~ ~3 filtered force minecraft:command_block 5 ###嫌な予感実行||条件付き|
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
3. `WindWall`が0以上であるプレイヤーのいる座標で効果音を鳴らす。
4. `NinjaTime`が0以上であるプレイヤーが存在したら、`NinjaTime`から1を引いて以下の事柄を実行
   - `NinjaTime`が-1以下であるとき`Tsuremai`と`Choyaku`、`NinjaTime`をそれぞれ0に設定
5. `MagicShield`を持つプレイヤーに耐性Lv.4を15秒間付与
6. `Mokuso`を持つプレイヤーが存在したら、再生能力Lv.1を15秒間付与し、`Level`が43以上だったら再生能力Lv.2を15秒間付与
7. `Kazakiri`を持つプレイヤーが存在したら、`Kazakiri`から1を引き、(-1920,11,-198)にある[風切更新]({{site.baseurl}}/command/xCircuit1/xCircuit1_kazakiriUpdata.html)を実行
8. `RadarVision`が0以上であるプレイヤーが存在したら、`RadarVision`から1を引き、以下の事柄を実行
   1. `RadarVision`が-1以下であるプレイヤーに`RadarEnd`を付与し、15m下に移動、`RadarVision`を0に設定
   2. (-1920,12,-166)にある[狩人レーダーヴィジョン終了処理]({{site.baseurl}}/command/xCircuit10/xCircuit10_radarVisionFinProcessing.html)を実行
9. `#SecCount`の`Global`に1を足す
10. `#SecCount`の`Global`が0であるとき、ワールドの境界線から0m近づいたとき警告を出す
11. `#SecCount`の`Global`が61以上であるとき、(-1920,14,-200)にある[約1分処理]({{site.baseurl}}/command/xCircuit1/xCircuit1_oneMinProcessing.html)を実行
12. `FlyingObject`を持ち、空気中で停止している飛翔物が存在したら、それに`TestingTick`を付与し以下の事柄を実行
    1. `TestingTick`を持つエンティティの`PortalCooldown`を1に設定
    2. (-1920,15,-200)にある[Tick停止飛翔物削除]({{site.baseurl}}/command/xCircuit1/xCircuit1_tickStopDelete.html)を実行
13. `CanSpin`を持つエンティティを中心として一辺2mの範囲に蜘蛛の巣を設置
14. `Freeze`を持ち、`PortalCooldown`が0であるエンティティが存在したら、`Melt`を付与し以下の事柄を実行
    - `Melt`を持つエンティティの`NoAI`をfalseにし、`Freeze`と`Melt`を削除
15. `SkillMob`を持つエンティティが存在したら、`MobCastTime`に20を足し、以下の事柄を実行
    1. `SkillMob`を持ち、プレイヤーでないエンティティを一人ランダムに選び、`MobCastTime`が400以上であるとき`MobCastTime`に20との剰余を代入
    2. (-1920,14,-197)にある[敵スキル実行]({{site.baseurl}}/command/xCircuit1/xCircuit1_runMobSkill.html)を実行
16. `CauseEvent`を持ち、`USBDimension`が0であるプレイヤーが存在する時、以下の事柄を実行
    - `#SecCount`の`Global`が0以上であるとき、(-1920,11,-197)にある[嫌な予感実行]({{site.baseurl}}/command/xCircuit1/xCircuit1_eventFulfill.html)を実行
17. [SystemKeeper]({{site.baseurl}}/entity/entity_entity.html#systemkeeper)を今の座標からy=10へ移動
18. `USBDimension`が13であり、`SaveTorch`を持ってなく、スペクテイターモードでないプレイヤーが存在したら、`RemoveTorch`を付与し(-1920,12,-197)にある[トカルト処理]({{site.baseurl}}/command/xCircuit1/xCircuit1_iceProcessing.html)を実行
19. `SaveTouch`を持つプレイヤーから`SaveTouch`を消去
20. UUIDが0-0-1-0-3であるエンティティから5m以内で`VillagerMeal`を持つエンティティが存在したら、それの`Freshness`の符号を反転し、(-1920,13,-197)にある[動物誘導イベント]({{site.baseurl}}/command/xCircuit1/xCircuit1_animalGuideEvent.html)を実行
21. 採掘速度低下Lv.3を持つプレイヤーが存在したら、`ReduceCurse`を付与し、以下の事柄を実行
    1. `ReduceCurse`を持つプレイヤーに採掘速度低下Lv.3を15秒間、弱体化Lv.3を15秒間、空腹Lv.3を15秒間付与
    2. `ReduceCurse`を持つプレイヤーから`ResuceCurce`を削除
