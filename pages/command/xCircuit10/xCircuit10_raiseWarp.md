---
title: レイズリスポーン処理
tags: [コマンド,スキル,白魔導士,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-11 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_raiseWarp.html
datatable3c: true
summary: 白魔導士のスキルの1つであるレイズのリスポーン処理を行う。また、ネザーアスレでのリスポーン処理もこれを用いている。なお、レイズの初期処理はレイズ実行にて、レイズ全体の処理についての詳しい説明はレイズ解説で行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-161)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

白魔導士のスキルの1つであるレイズのディメンション別のリスポーン処理を行う。また、ネザーアスレでのリスポーン処理もこれを用いている。なお、レイズの初期処理は[レイズ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_raise.html)にて、レイズ全体の処理についての詳しい説明は[レイズ解説]({{site.baseurl}}/note/note_aboutRaise.html)で行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[rm=-1,tag=RaiseEnd3] ~ ~ ~ detect ~ ~1 ~ minecraft:portal -1 /scoreboard players tag @a[c=1] remove RaiseEnd3|
|2|/scoreboard players tag @a[tag=RaiseEnd3] remove RaiseEnd2|
|3|/gamemode spectator @a[tag=RaiseEnd3,m=!spectator]|条件付き|
|4|/tp @a[tag=RaiseEnd3,score_USBDimension_min=100] 101 52 0|
|5|/tp @a[tag=RaiseEnd3,score_USBDimension=-1] 0 32 -6|
|6|/scoreboard players tag @a[tag=RaiseEnd3,c=1] add RaiseEnd4|
|7|/scoreboard players tag @a[tag=RaiseEnd4] remove RaiseEnd3|条件付き|
|8|/tp @a[tag=RaiseEnd4,score_USBDimension=-1,score_RaisedArea_min=-90,score_RaisedArea=-90] -281 23.5 879 -90 0|
|9|/gamemode adventure @a[tag=RaiseEnd4,score_USBDimension=-1,score_RaisedArea_min=-90,score_RaisedArea=-90]|条件付き|
|10|/scoreboard players operation @e[tag=RaisePoint] RaiseSyncCount -= @a[tag=RaiseEnd4,m=spectator,c=1] RaiseSyncCount|
|11|/execute @e[tag=RaisePoint,score_RaiseSyncCount_min=0,score_RaiseSyncCount=0] ~ ~ ~ /summon ArmorStand ~ ~0.5 ~ {Invisible:true,Invulnerable:true,Marker:true,NoBasePlate:true,NoGravity:true,Small:true,DisabledSlots:31,Tags:[RaiseTPMarker,Garbage,SystemEntity,TypeChecked]}|条件付き|
|12|/scoreboard players operation @e[tag=RaisePoint] RaiseSyncCount += @a[tag=RaiseEnd4,m=spectator,c=1] RaiseSyncCount|
|13|/tp @a[tag=RaiseEnd4,m=spectator] @e[tag=RaiseTPMarker,c=1]|
|14|/gamemode adventure @a[tag=RaiseEnd4,m=spectator]|条件付き|
|15|/tellraw @a[tag=RaiseEnd4,m=spectator] {"text":"復帰地点が見つからなかった！","color":"yellow"}|
|16|/gamemode adventure @a[tag=RaiseEnd4,m=spectator]|条件付き|
|17|/execute @a[tag=RaiseEnd4] ~ ~ ~ /playsound entity.player.levelup master @a[c=1] ~ ~ ~ 1 0.6 0|
|18|/scoreboard players tag @a[tag=RaiseEnd4] remove RaiseEnd4|条件付き|
|19|/scoreboard players tag @a[tag=RaiseEnd2] add RaiseEnd3|
|20|/scoreboard players tag @a[tag=RaiseEnd2] remove RaiseEnd|条件付き|
|21|/gamemode creative @a[tag=RaiseEnd2,score_RaisedArea=-1]|条件付き|
|22|/scoreboard players tag @a[tag=RaiseEnd] add RaiseEnd2|
|23|/tp @a[tag=RaiseEnd,score_RaisedArea_min=100] 22 212 -40|
|24|/tp @a[tag=RaiseEnd,score_RaisedArea=-1] 36 46 8|
|25|/testfor @a[tag=RaiseEnd3]|
|26|/clone -1920 ~ ~ -1920 ~ ~ -1920 ~ ~ filtered force minecraft:command_block 5 ###リピート|条件付き|

<div class="datatable3c-end"></div>

## 詳細

1. **`RaiseEnd3`を持つすべてのプレイヤー**に対して、以下の事柄を実行
   1. 対象プレイヤーの**頭部がポータルブロック**であるとき、**`RaiseEnd3`を削除**
   2. 対象プレイヤーから**`RaiseEnd2`を削除**
   3. **スペクテイターモードに変更**
   4. 対象プレイヤーの**`USBDimension`が100以上**(ジ・エンド)であるすべてのプレイヤーを、(101,52,0)に移動(**ジ・エンドのスタート地点**)
   5. 対象プレイヤーの**`USBDimension`が-1以下**(ネザー)であるすべてのプレイヤーを、(0,32,-6)に移動(**ネザーの通常世界へのゲート前**)
   6. **`RaiseEnd4`を付与**
2. **`RaiseEnd4`を持つすべてのプレイヤー**に対して、以下の事柄を実行
   1. **`RaiseEnd3`を削除**
   2. `USBDimension`が-1以下であり、`RaisedArea`が-90(**ネザーアスレ**)であるであるすべてのプレイヤーに対し、以下の事柄を実行
      1. (-281,23.5,879)に移動(**ネザーアスレリスポーン地点**)
      2. **アドベンチャーモードに変更**
3. [RaisePoint]({{site.baseurl}}/entity/entity_entity.html#raisepoint)の`RaiseSyncCount`と、`RaiseEnd4`を持ち、スペクテイターモードであるプレイヤーの`RaiseSyncCount`が等しいとき、**[RaiseTPMarker](#raisetpmarker)をその[RaisePoint]({{site.baseurl}}/entity/entity_entity.html#raisepoint)と同座標上に召喚**
4. `RaiseEnd4`を持ち、スペクテイターモードであるすべてのプレイヤーを、[RaiseTPMarker](#raisetpmarker)に移動し、アドベンチャーモードに変更
5. `RaiseEnd4`を持ち、スペクテイターモードであるすべてのプレイヤーに「<span style="color:yellow;background-color:gray;">復帰地点が見つからなかった！</span>」とのメッセージを表示し、アドベンチャーモードに変更
6. `RaiseEnd4`を持つすべてのプレイヤーに効果音を鳴らし、`RaiseEnd4`を削除
7. **`RaiseEnd2`であるすべてのプレイヤー**に対して、以下の事柄を実行
   1. **`RaiseEnd3`を付与**
   2. **`RaiseEnd`を削除**
   3. **`RaisedArea`が-1以下**(ネザー)である対象プレイヤーを、**クリエイティブモードに変更**
8. **`RaiseEnd`を持つすべてのプレイヤー**に対し、以下の事柄を実行
   1. **`RaiseEnd2`を付与**
   2. **`RaisedArea`が100以上**(ジ・エンド)である対象プレイヤーを、(22,212,-40)に移動(**通常世界のエンドポータル内であり、即エンドにワープする**)
   3. **`RaisedArea`が-1以下**(ネザー)である対象プレイヤーを、(36,46,8)に移動(**通常世界のネザーポータル内であり、即ネザーにワープする**)
9. `RaiseEnd3`を持つプレイヤーが存在するとき、[レイズリスポーン処理]({{site.baseurl}}/command/xCircuit10/xCircuit10_raiseWarp.html)を再び実行

### RaiseTPMarker

```mcfunction
/summon ArmorStand ~ ~0.5 ~ {Invisible:true,Invulnerable:true,Marker:true,NoBasePlate:true,NoGravity:true,Small:true,DisabledSlots:31,Tags:[RaiseTPMarker,Garbage,SystemEntity,TypeChecked]}
```

|-|-|
|Name|(None)|
|Type|ArmorStand|
|Tags|**RaiseTPMarker**,Garbage,SystemEntity,TypeChecked|
