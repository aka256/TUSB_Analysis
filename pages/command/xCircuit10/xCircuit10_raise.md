---
title: レイズ実行
tags: [コマンド,スキル,白魔導士,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-11 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_raise.html
datatable3c: true
summary: 白魔導士のスキルの1つであるレイズのリスポーン準備やレイズ持ちのプレイヤーの死亡直後の処理などの初期処理を実行する。なお、レイズのリスポーン処理はレイズリスポーン処理で、レイズ全体の詳細についてはレイズ解説で行う。
summaryDisable: true
---

<!--2020/09/11-->
<!--rm=-1については保留-->

## About

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

白魔導士のスキルの1つであるレイズのリスポーン準備やレイズ持ちのプレイヤーの死亡直後の処理などの初期処理を実行する。なお、レイズのリスポーン処理は[レイズリスポーン処理]({{site.baseurl}}/command/xCircuit10/xCircuit10_raiseWarp.html)で、レイズ全体の詳細については[レイズ解説]({{site.baseurl}}/note/note_aboutRaise.html)で行う。

## コマンド群

### レイズ実行部コマンド群

<div class="datatable3c-begin"></div>

<span class="tagYellow">位置</span> (-1920,8,-161)

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @a[tag=CastRaise,c=1] add CastingRaise|
|2|/scoreboard players tag @a[tag=CastingRaise] remove CastRaise|
|3|/execute @a[tag=CastingRaise,score_HP_min=1] ~ ~ ~ /me はレイズを唱えた。|
|4|/scoreboard players tag @a[tag=CastingRaise,score_HP_min=1] add ReRaise|条件付き|
|5|/tellraw @a[tag=CastingRaise,score_HP_min=1] {"text":"リレイズの効果がかかった。","color":"green","hoverEvent":{"action":"show_text","value":"死亡時にレイズの効果を得る。"}}|条件付き|
|6|/execute @a[-2827,57,-410,dx=9,dy=123,dz=9,tag=CastingRaise] ~ ~ ~ detect ~ 60 ~ minecraft:iron_trapdoor -1 /me は個人ロッカー利用中だったので、レイズの詠唱を中断した。|
|7|/execute @a[-2827,57,-410,dx=9,dy=123,dz=9,tag=CastingRaise] ~ ~ ~ detect ~ 60 ~ minecraft:iron_trapdoor -1 /scoreboard players tag @a[c=1] remove CastingRaise|条件付き|
|8|/execute @a[tag=CastingRaise,score_HP=0] ~ ~ ~ /me のリレイズが発動！|
|9|/execute @a[tag=CastingRaise] ~ ~ ~ /playsound entity.firework.launch master @a ~ ~ ~ 1 1.2 0|
|10|/execute @a[tag=CastingRaise] ~ ~ ~ /particle fireworksSpark ~ ~ ~ 0.5 0.5 0.5 0.1 30 force|
|11|/execute @a[tag=CastingRaise] ~ ~ ~ /summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:580s,Tags:[TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:0.5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:620,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:endRod,CustomName:"✟",CustomNameVisible:true,Tags:[RaisePoint,TypeChecked]}]}|
|12|/clone -1920 9 ~ -1920 9 ~ -1920 9 ~ filtered force minecraft:command_block 5 ###レイズクロック開始|
|13|/scoreboard players add #RaisePointCount RaiseSyncCount 1|
|14|/execute @a[tag=CastingRaise] ~ ~ ~ /scoreboard players operation @e[dx=0,tag=RaisePoint,c=1] RaiseSyncCount = #RaisePointCount RaiseSyncCount|
|15|/scoreboard players tag @a[tag=CastingRaise,score_HP=0] add NeedRaise|
|16|/scoreboard players tag @a[tag=CastingRaise,score_HP=0] remove CastingRaise|条件付き|
|17|/execute @a[tag=CastingRaise] ~ ~ ~ /scoreboard players tag @a[rm=-1,score_HP=0] add NeedRaise|
|18|/execute @a[tag=CastingRaise] ~ ~ ~ /scoreboard players tag @a[rm=11,tag=NeedRaise] remove NeedRaise|条件付き|
|19|/scoreboard players tag @a[tag=CastingRaise] remove CastingRaise|
|20|/scoreboard players operation @a[tag=NeedRaise] RaiseSyncCount = #RaisePointCount RaiseSyncCount|
|21|/execute @a[tag=NeedRaise] ~ ~ ~ /scoreboard players operation @a[c=1] RaisedArea = @a[c=1] USBDimension|
|22|/scoreboard players tag @a[tag=NeedRaise] add Raise|
|23|/gamemode spectator @a[tag=NeedRaise]|条件付き|
|24|/tellraw @a {"translate":"%1$sにレイズの効果がかかった。","color":"green","with":[{"selector":"@a[tag=NeedRaise]"}]}|条件付き|
|25|/scoreboard players tag @a[tag=NeedRaise] remove NeedRaise|
|26|/testfor @a[tag=CastRaise,c=1]|
|27|/clone -1920 ~ ~ -1920 ~ ~ -1920 ~ ~ filtered force minecraft:command_block 5 ###リピート|条件付き|

<div class="datatable3c-end"></div>

### レイズクロック部コマンド群

<span class="tagYellow">位置</span> (-1920,9,-161)

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=RaisePoint] ~ ~ ~ detect ~ ~ ~ minecraft:air 0 /|
|2|/execute @e[tag=RaisePoint] ~ ~ ~ /particle endRod ~ ~1 ~ 0.15 4 0.15 0.001 10 force|
|3|/clone -1920 ~ ~ -1920 ~ ~ -1920 ~ ~ filtered force minecraft:command_block 5 #リピート|条件付き|

<div class="datatable3c-end"></div>

## 詳細

### レイズ実行部

1. `CastRaise`を持つプレイヤーに`CastingRaise`を付与し、`CastRaise`を削除
2. **`CastingRaise`を持ち、`HP`が1以上であるプレイヤーが存在するとき**、そのプレイヤーを対象として以下の事柄を実行
   1. 「(PlayerName)はレイズを唱えた。」とのメッセージを表示
   2. `ReRaise`を付与
   3. 「<span style="color:green;" data-toggle="tooltip" data-original-title="{{site.data.glossary.raiseMesage}}">リレイズの効果がかかった。</span>」とのメッセージを表示
3. **個人ロッカー内に`CastingRaise`を持っているプレイヤーが存在するとき**、以下の事柄を実行
   1. 「(PlayerName)は個人ロッカー利用中だったので、レイズの詠唱を中断した。」とのメッセージを表示
   2. 対象プレイヤーから`CastingRaise`を削除
4. **`CastingRaise`を持ち、`HP`が0以下であるプレイヤー**を対象として、「(PlayerName)のリレイズが発動！」とのメッセージを表示
5. `CastingRaise`を持つプレイヤーに**効果音を鳴らし、パーティクルを表示**
6. `CastingRaise`を持つすべてのプレイヤーと同座標上に**[RaisePoint](#raisepoint)(`RaisePoint`を持っている)を召喚**
7. [レイズクロック部](#レイズクロック部)を実行
8. `#RaisePointCount`の`RaiseSyncCount`に1を加える
9. `CastingRaise`を持つプレイヤーと同座標上にある[RaisePoint](#raisepoint)の`RaiseSyncCount`に`#RaisePointCount`の`RaiseSyncCount`を代入
10. `CastingRaise`を持ち、`HP`が0以下であるすべてのプレイヤーに`NeedRaise`を付与し、`CastingRaise`を削除
11. **`CastingRaise`を持つプレイヤーから半径11m未満にいるすべてのプレイヤーに、`NeedRaise`を付与**
12. `CastingRaise`を持つすべてのプレイヤーから、`CastingRaise`を削除
13. `NeedRaise`を持つすべてのプレイヤーに対し、以下の事柄を実行
    1. 対象プレイヤーの`RaiseSyncCount`に`#RaisePointCount`の`RaiseSyncCount`を代入
    2. 対象プレイヤーの`RaisedArea`に対象プレイヤーの`USBDimension`を代入
    3. `Raise`を付与
    4. **スペクテイターモードに変更**
    5. 「<span style="color:green;">(PlayerName)にレイズの効果がかかった。</span>」とのメッセージをすべてのプレイヤーに表示
    6. `NeedRaise`を削除
14. `CastRaise`を持つプレイヤーが存在するとき、[レイズ実行部](#レイズ実行部)を再び実行

### レイズクロック部

1. `RaisePoint`の座標上に、パーティクルを表示
2. `RaisePoint`が存在するとき、[レイズクロック部](#レイズクロック部)を再び実行

### RaisePoint

```mcfunction
/summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:580s,Tags:[TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:0.5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:620,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:endRod,CustomName:”✟”,CustomNameVisible:true,Tags:[RaisePoint,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|TypeChecked|
|life|580 (**31秒後に消滅**)|

- Passengers

|-|-|
|Name|**✟**|
|Type|AEC|
|Tags|**RaisePoint**,TypeChecked|
