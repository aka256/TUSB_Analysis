---
title: レーダーヴィジョン実行
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-10 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_radarVision.html
datatable3c: true
summary: 狩人のスキルの1つであるレーダーヴィジョンを実行する。なお、`RadarVision`のカウントダウン処理は時間経過、レーダーヴィジョンの終了処理はレーダーヴィジョン終了処理でそれぞれ行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-166)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

狩人のスキルの1つであるレーダーヴィジョンを実行する。なお、`RadarVision`のカウントダウン処理は[時間経過]({{site.baseurl}}/command/xCircuit1/xCircuit1_timeElapsed.html)、レーダーヴィジョンの終了処理は[レーダーヴィジョン終了処理]({{site.baseurl}}/command/xCircuit10/xCircuit10_radarVisionFinProcessing.html)でそれぞれ行われる。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @a[score_ActivatedSkill_min=3050,score_ActivatedSkill=3059] add RadarStart|
|2|/scoreboard players set @a[score_ActivatedSkill_min=3050,score_ActivatedSkill=3050] RadarVision 2|
|3|/scoreboard players set @a[score_ActivatedSkill_min=3051,score_ActivatedSkill=3059] RadarVision 5|
|4|/scoreboard players add #RadarSiteCount RadarSyncCount 1|
|5|/scoreboard players operation @a[tag=RadarStart,c=1] RadarSyncCount = #RadarSiteCount RadarSyncCount|
|6|/execute @a[tag=RadarStart,score_RadarSyncCount_min=1] ~ ~ ~ /summon ArmorStand ~ ~ ~ {Invulnerable:true, Small:true, NoGravity:true, NoBasePlate:true, Invisible:true, DisabledSlots:31, Pose:{Body:[180f,0f,0f],LeftLeg:[180f,0f,-10f],RightLeg:[180f,0f,10f]}, CustomName:"レーダーサイト", CustomNameVisible:true, ArmorItems:[{},{},{},{id:"minecraft:beacon",Count:0b,Damage:0s}], Tags:[PreRadarSite,RadarSite,CooldownRequired,TypeChecked], PortalCooldown:200}|
|7|/execute @a[tag=RadarStart,score_RadarSyncCount_min=1] ~ ~ ~ /tp @e[dx=0,tag=PreRadarSite,c=1] @a[c=1]|
|8|/execute @a[tag=RadarStart,score_RadarSyncCount_min=1] ~ ~ ~ /scoreboard players operation @e[dx=0,tag=PreRadarSite,c=1] RadarSyncCount = @a[c=1] RadarSyncCount|
|9|/execute @a[tag=RadarStart,score_RadarSyncCount_min=1] ~ ~ ~ /scoreboard players tag @e[dx=0,tag=PreRadarSite,c=1] remove PreRadarSite|
|10|/execute @a[tag=RadarStart,score_RadarSyncCount_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] RadarAreaCheck = @a[c=1] USBDimension|
|11|/effect @a[tag=RadarStart,score_RadarSyncCount_min=1] minecraft:water_breathing 30 100 true|
|12|/effect @a[tag=RadarStart,score_RadarSyncCount_min=1] minecraft:night_vision 30 100 true|
|13|/execute @a[tag=RadarStart,score_RadarSyncCount_min=1] ~ ~ ~ /playsound minecraft:entity.zombie_villager.converted master @a[r=16] ~ ~ ~ 1 0.78 0|
|14|/gamemode spectator @a[tag=RadarStart,score_RadarSyncCount_min=1]|
|15|/scoreboard players tag @a[tag=RadarStart,score_RadarSyncCount_min=1] remove RadarStart|
|16|/testfor @a[tag=RadarStart]|
|17|/clone -1920 ~ ~ -1920 ~ ~ -1920 ~ ~ filtered force minecraft:command_block 5 ###リピート|条件付き|

<div class="datatable3c-end"></div>

## 詳細

1. **`ActivatedSkill`が3050 ~ 3059**であるすべてのプレイヤーに**`RadarStart`を付与**
2. **`ActivatedSkill`が3050**であるすべてのプレイヤーの**`RaderVision`を2に設定**
3. **`ActivatedSkill`が3051 ~ 3059**であるすべてのプレイヤーの**`RaderVision`を5に設定**
4. `RadarSyncCount`の`#RadarSiteCount`に1を足し、`RadarStart`を持つプレイヤーの`RadarSyncCount`に代入
5. **`RadarStart`を持ち、`RadarSyncCount`が1以上であるプレイヤー**を対象として、以下の事柄を実行
   1. 対象プレイヤーの座標上に**[レーダーサイト](#レーダーサイト)(`PreRadarSite`を持つ)を召喚**し、対象プレイヤーと同じ方向を向かせる
   2. 対象プレイヤーと同座標にある`PreRadarSite`を持つ[レーダーサイト](#レーダーサイト)の`RadatSyncCount`に、対象プレイヤーの`RadatSyncCount`を代入
   3. 対象プレイヤーの`RadarAreaCheck`に、対象プレイヤーの`USBDimension`を代入
   4. 対象プレイヤーに、**水中呼吸Lv.99と暗視Lv.99をそれぞれ30秒間付与**
   5. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
   6. 対象プレイヤーを**スペクテイターモードに変更**
   7. 対象プレイヤーから`RadarStart`を削除
6. `RadarStart`を持つプレイヤーが存在したとき、[レーダーヴィジョン実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_radarVision.html)を再び1から実行

### レーダーサイト

```mcfunction
/summon ArmorStand ~ ~ ~ {Invulnerable:true, Small:true, NoGravity:true, NoBasePlate:true, Invisible:true, DisabledSlots:31, Pose:{Body:[180f,0f,0f],LeftLeg:[180f,0f,-10f],RightLeg:[180f,0f,10f]}, CustomName:"レーダーサイト", CustomNameVisible:true, ArmorItems:[{},{},{},{id:"minecraft:beacon",Count:0b,Damage:0s}], Tags:[PreRadarSite,RadarSite,CooldownRequired,TypeChecked], PortalCooldown:200}
```

|-|-|
|Name|レーダーサイト|
|Type|ArmorStand|
|Tags|**PreRadarSite**,RadarSite,CooldownRequired,TypeChecked|
|ArmorItems|{},{},{},{id:"minecraft:**beacon**",Count:0b,Damage:0s}|
