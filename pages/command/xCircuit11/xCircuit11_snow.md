---
title: スノウ実行
tags: [コマンド,スキル,黒魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-14 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_snow.html
datatable2c: true
summary: 黒魔導士のスキルの1つであるスノウを実行する。スノウ用雪壁の召喚とその周辺に移動速度低下の付与を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,4,-157)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるスノウを実行する。[スノウ用雪壁](#スノウ用雪壁)の召喚とその周辺に移動速度低下の付与を行う。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5009] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~1 ~ detect ~ ~ ~ air 0 /summon ArmorStand ~ ~ ~ {Invulnerable:true,Small:true,Invisible:true,DisabledSlots:31,Marker:true,NoGravity:true, Health:0f, Passengers:[{id:FallingSand,Block:minecraft:snow,Time:1b,DropItem:false,Tags:[Snow], Passengers:[{id:FallingSand,Block:minecraft:snow_layer,Data:7b,Time:1,DropItem:false}]}]}|
|2|/execute @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5009,rym=-67,ry=22] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~-1 ~1 ~ detect ~ ~ ~ air 0 /summon ArmorStand ~ ~ ~ {Invulnerable:true,Small:true,Invisible:true,DisabledSlots:31,Marker:true,NoGravity:true, Health:0f, Passengers:[{id:FallingSand,Block:minecraft:snow,Time:1b,DropItem:false,Tags:[Snow], Passengers:[{id:FallingSand,Block:minecraft:snow_layer,Data:7b,Time:1,DropItem:false}]}]}|
|3|/execute @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5009,rym=-22,ry=67] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~1 ~1 ~ detect ~ ~ ~ air 0 /summon ArmorStand ~ ~ ~ {Invulnerable:true,Small:true,Invisible:true,DisabledSlots:31,Marker:true,NoGravity:true, Health:0f, Passengers:[{id:FallingSand,Block:minecraft:snow,Time:1b,DropItem:false,Tags:[Snow], Passengers:[{id:FallingSand,Block:minecraft:snow_layer,Data:7b,Time:1,DropItem:false}]}]}|
|4|/execute @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5009,rym=23,ry=112] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~1 ~-1 detect ~ ~ ~ air 0 /summon ArmorStand ~ ~ ~ {Invulnerable:true,Small:true,Invisible:true,DisabledSlots:31,Marker:true,NoGravity:true, Health:0f, Passengers:[{id:FallingSand,Block:minecraft:snow,Time:1b,DropItem:false,Tags:[Snow], Passengers:[{id:FallingSand,Block:minecraft:snow_layer,Data:7b,Time:1,DropItem:false}]}]}|
|5|/execute @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5009,rym=68,ry=157] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~1 ~1 detect ~ ~ ~ air 0 /summon ArmorStand ~ ~ ~ {Invulnerable:true,Small:true,Invisible:true,DisabledSlots:31,Marker:true,NoGravity:true, Health:0f, Passengers:[{id:FallingSand,Block:minecraft:snow,Time:1b,DropItem:false,Tags:[Snow], Passengers:[{id:FallingSand,Block:minecraft:snow_layer,Data:7b,Time:1,DropItem:false}]}]}|
|6|/execute @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5009,rym=113,ry=202] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~1 ~1 ~ detect ~ ~ ~ air 0 /summon ArmorStand ~ ~ ~ {Invulnerable:true,Small:true,Invisible:true,DisabledSlots:31,Marker:true,NoGravity:true, Health:0f, Passengers:[{id:FallingSand,Block:minecraft:snow,Time:1b,DropItem:false,Tags:[Snow], Passengers:[{id:FallingSand,Block:minecraft:snow_layer,Data:7b,Time:1,DropItem:false}]}]}|
|7|/execute @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5009,rym=158,ry=247] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~-1 ~1 ~ detect ~ ~ ~ air 0 /summon ArmorStand ~ ~ ~ {Invulnerable:true,Small:true,Invisible:true,DisabledSlots:31,Marker:true,NoGravity:true, Health:0f, Passengers:[{id:FallingSand,Block:minecraft:snow,Time:1b,DropItem:false,Tags:[Snow], Passengers:[{id:FallingSand,Block:minecraft:snow_layer,Data:7b,Time:1,DropItem:false}]}]}|
|8|/execute @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5009,rym=203,ry=292] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~1 ~1 detect ~ ~ ~ air 0 /summon ArmorStand ~ ~ ~ {Invulnerable:true,Small:true,Invisible:true,DisabledSlots:31,Marker:true,NoGravity:true, Health:0f, Passengers:[{id:FallingSand,Block:minecraft:snow,Time:1b,DropItem:false,Tags:[Snow], Passengers:[{id:FallingSand,Block:minecraft:snow_layer,Data:7b,Time:1,DropItem:false}]}]}|
|9|/execute @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5009,rym=248,ry=337] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~1 ~-1 detect ~ ~ ~ air 0 /summon ArmorStand ~ ~ ~ {Invulnerable:true,Small:true,Invisible:true,DisabledSlots:31,Marker:true,NoGravity:true, Health:0f, Passengers:[{id:FallingSand,Block:minecraft:snow,Time:1b,DropItem:false,Tags:[Snow], Passengers:[{id:FallingSand,Block:minecraft:snow_layer,Data:7b,Time:1,DropItem:false}]}]}|
|10|/execute @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5009] ~ ~ ~ /playsound entity.skeleton_horse.hurt master @a[r=16] ~ ~ ~ 1 0.8 0|
|11|/execute @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5009] ~ ~1 ~ /execute @e[r=6,tag=Snow] ~ ~ ~ /particle enchantmenttable ~ ~1 ~ 0 0 0 1 90 force|
|12|/execute @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5009] ~ ~1 ~ /execute @e[r=6,tag=Snow] ~ ~ ~ /effect @a[r=5] minecraft:slowness 15 1|

<div class="datatable2c-end"></div>

## 詳細

- **`ActivatedSkill`が5000 ~ 5009**であるすべてのプレイヤーに対して、以下の事柄を実行

1. **対象プレイヤーの視線のxz平面上での角度に応じて**、**半径6m以内**の1体の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)から**特定の相対座標やが空気ブロックであるとき、[スノウ用雪壁](#スノウ用雪壁)を召喚** ([スノウ用雪壁召喚相対座標について](#スノウ用雪壁召喚相対座標について)を参照)
2. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
3. 対象プレイヤーから**半径6m以内**の[スノウ用雪壁](#スノウ用雪壁)の座標上で、**パーティクルを表示**
4. 対象プレイヤーから**半径6m以内**の[スノウ用雪壁](#スノウ用雪壁)から**半径5m以内のすべてのプレイヤーに、移動速度低下Lv.2を15秒間付与**

### スノウ用雪壁召喚相対座標について

|視線角度|相対座標|
|:-:|:-:|
|(None)|(0,1,0)|
|-67 ~ 22|(-1,1,0)|
|-22 ~ 67|(1,1,0)|
|23 ~ 112|(0,1,-1)|
|68 ~ 157|(0,1,1)|
|113 ~ 202|(1,1,0)|
|158 ~ 247|(-1,1,0)|
|203 ~ 292|(0,1,1)|
|248 ~ 337|(0,1,-1)|

### スノウ用雪壁

```mcfunction
/summon ArmorStand ~ ~ ~ {Invulnerable:true,Small:true,Invisible:true,DisabledSlots:31,Marker:true,NoGravity:true, Health:0f, Passengers:[{id:FallingSand,Block:minecraft:snow,Time:1b,DropItem:false,Tags:[Snow], Passengers:[{id:FallingSand,Block:minecraft:snow_layer,Data:7b,Time:1,DropItem:false}]}]}
```

|-|-|
|Name|(None)|
|Type|ArmorStand|
|Passengers|Snow|

- Snow

|-|-|
|Name|(None)|
|Type|FallingSand|
|Tags|Snow|
|Block|minecraft:snow|
|Time|1|
|Passengers|Snow Layer|

- Snow Layer

|-|-|
|Name|(None)|
|Type|FallingSand|
|Type|FallingSand|
|Block|minecraft:snow_layer|
|Time|1|
