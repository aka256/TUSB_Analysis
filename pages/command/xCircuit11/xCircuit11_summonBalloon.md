---
title: サモンE：バルーン実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_summonBalloon.html
datatable3cnp: true
summary: 召喚士のスキルの1つであるサモンE：バルーンを実行する。TarpPointの座標上に熱気球を召喚する。
summaryDisable: true
---

## About

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

召喚士のスキルの1つであるサモンE：バルーンを実行する。[TarpPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に[熱気球](#熱気球)を召喚する。

## コマンド群

### 熱気球召喚部コマンド群

<span class="tagYellow">位置</span> (-1920,12,-151)

<div class="datatable3cnp-begin"></div>

|No.|コマンド||
|:-:|-|-|
|1|/execute @a[score_ActivatedSkill_min=6070,score_ActivatedSkill=6079] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /summon Arrow ~ ~0.1 ~ {Silent:true,life:1140s,Tags:[YouCanFly,TypeChecked],Passengers:[{id:Chicken,Invulnerable:true,Silent:true,ActiveEffects:[{Id:25b,Duration:360,Amplifier:7b,ShowParticles:false},{Id:14b,Duration:2147483647,Amplifier:127b,ShowParticles:false}],Tags:[FloatingRequired,SystemEntity,TypeChecked],Passengers:[{id:Boat,CustomName:"熱気球",CustomNameVisible:true,FallDistance:-10000000f,Tags:[FloatingRequired,TypeChecked],Passengers:[{id:Pig,Saddle:true,Silent:true,Invulnerable:true,ActiveEffects:[{Id:14b,Duration:2147483647,Amplifier:127b,ShowParticles:false}],Tags:[FloatingRequired,SystemEntity,TypeChecked]},{id:ArmorStand,Marker:true,Invulnerable:true,Invisible:true,DisabledSlots:31,Small:true,NoBasePlate:true,Tags:[FloatingRequired,SystemEntity,TypeChecked]}]}]}]}|
|2|/fill -1921 17 ~ -1921 17 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###演出クロック|

<div class="datatable3cnp-end"></div>

### 演出クロック部コマンド群

<span class="tagYellow">位置</span> (-1920,17,-151)

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=YouCanFly] ~ ~ ~ /playsound block.note.harp master @a[r=16] ~ ~ ~ 0.3 1.4 0 |リピート|
|2|/execute @e[tag=YouCanFly] ~ ~ ~ /particle instantSpell ~ ~0.5 ~ 0.3 0.5 0.3 0.1 6 force|
|3|/scoreboard players test #EntityCount Global * 0|
|4|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3cnp-end"></div>

#### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

### 熱気球召喚部

1. **`ActivatedSkill`が6070 ~ 6079**であるすべてのプレイヤーから、半径6m以内の1体の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)に、**[熱気球](#熱気球)を召喚**
2. [演出クロック部](#演出クロック部)を実行

### 演出クロック部

1. [熱気球](#熱気球)から半径16m以内のすべてのプレイヤーに、効果音を鳴らす
2. 1.で実行できた[熱気球](#熱気球)の数を`#EntityCount`の`Global`に代入
3. [熱気球](#熱気球)の座標上にパーティクルを表示
4. `#EntityCount`の`Global`([熱気球](#熱気球)の数)が0以下であるとき、[演出クロック部](#演出クロック部)を停止

### 熱気球

```mcfunction
/summon Arrow ~ ~0.1 ~ {Silent:true,life:1140s,Tags:[YouCanFly,TypeChecked],Passengers:[{id:Chicken,Invulnerable:true,Silent:true,ActiveEffects:[{Id:25b,Duration:360,Amplifier:7b,ShowParticles:false},{Id:14b,Duration:2147483647,Amplifier:127b,ShowParticles:false}],Tags:[FloatingRequired,SystemEntity,TypeChecked],Passengers:[{id:Boat,CustomName:”熱気球”,CustomNameVisible:true,FallDistance:-10000000f,Tags:[FloatingRequired,TypeChecked],Passengers:[{id:Pig,Saddle:true,Silent:true,Invulnerable:true,ActiveEffects:[{Id:14b,Duration:2147483647,Amplifier:127b,ShowParticles:false}],Tags:[FloatingRequired,SystemEntity,TypeChecked]},{id:ArmorStand,Marker:true,Invulnerable:true,Invisible:true,DisabledSlots:31,Small:true,NoBasePlate:true,Tags:[FloatingRequired,SystemEntity,TypeChecked]}]}]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|**YouCanFly**,TypeChecked|
|life|**1140 (1.5秒後に消滅)**|
|Passengers|FloatingChicken|

- FloatingChicken

|-|-|
|Name|(None)|
|Type|Chicken|
|Tags|**FloatingRequired**,SystemEntity,TypeChecked|
|ActiveEffects|**浮遊Lv.8を18秒間**、透明化Lv.128を107,374,182.35秒間|
|Passengers|熱気球|

- 熱気球

|-|-|
|Name|熱気球|
|Type|Boat|
|Tags|**FloatingRequired**,TypeChecked|
|Passengers|FloatingPig,FloatingArmorStand|

- FloatingPig

|-|-|
|Name|(None)|
|Type|Pig|
|Tags|**FloatingRequired**,SystemEntity,TypeChecked|
|ActiveEffects|透明化Lv.128を107,374,182.35秒間|

- FloatingArmorStand

|-|-|
|Name|(None)|
|Type|Armor|
|Tags|**FloatingRequired**,SystemEntity,TypeChecked|
|ActiveEffects|透明化Lv.128を107,374,182.35秒間|
