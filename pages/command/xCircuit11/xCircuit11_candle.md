---
title: キャンドル実行
tags: [コマンド,スキル,黒魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-13 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_candle.html
datatable3c: true
summary: 黒魔導士のスキルの1つであるキャンドルを実行する。Candleの設置やその座標上への溶岩の設置、そして周囲のプレイヤーへの移動速度低下解除などを行う。
summaryDisable: true
---

## About

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるキャンドルを実行する。[Candle](#candle)の設置やその座標上への溶岩の設置、そして周囲のプレイヤーへの移動速度低下解除などを行う。

## コマンド群

### キャンドル初期処理部コマンド群

<span class="tagYellow">位置</span> (-1920,11,-157)

<div class="datatable3c-begin"></div>

|No.|コマンド||
|:-:|-|-|
|1|/execute @a[score_ActivatedSkill_min=5010,score_ActivatedSkill=5019] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~2.1 ~ /summon ArmorStand ~ ~ ~ {Marker:true,Small:true,Invisible:true,Invulnerable:true,NoGravity:true,NoBasePlate:true,DisabledSlots:31,PortalCooldown:390,Tags:[SystemEntity,CooldownRequired,TypeChecked],Passengers:[{id:Endermite,CustomName:"キャンドル",Attributes:[{Name:"generic.attackDamage",Base:0d}],ActiveEffects:[{Id:14b,Amplifier:0b,Duration:1200,ShowParticles:true}],Fire:1200s,Invulnerable:true,Silent:true,NoAI:true,Lifetime:2000,PortalCooldown:390,Tags:[Candle,TypeChecked]}]}|
|2|/execute @a[score_ActivatedSkill_min=5010,score_ActivatedSkill=5019] ~ ~ ~ /playsound entity.blaze.shoot master @a[r=16] ~ ~ ~ 1 0.8 0|
|3|/fill -1921 ~-1 ~ -1921 ~-1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###キャンドル起動|

<div class="datatable3c-end"></div>

### キャンドルクロック部コマンド群

<span class="tagYellow">位置</span> (-1920,10,-157)

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=Candle] ~ ~ ~ /setblock ~ ~ ~ minecraft:lava 7 keep|リピート|
|2|/execute @e[tag=Candle] ~ ~ ~ /particle smoke ~ ~0.75 ~ 0.1 0.25 0.1 0.001 1 force|
|3|/execute @e[tag=Candle] ~ ~ ~ /fill ~ ~ ~ ~ ~ ~ minecraft:lava 7 replace minecraft:flowing_lava|
|4|/execute @e[tag=Candle] ~ ~-1 ~ /fill ~ ~ ~ ~ ~ ~ minecraft:air 0 replace minecraft:flowing_lava|
|5|/execute @e[tag=Candle] ~ ~ ~ /effect @a[r=7] minecraft:slowness 0|
|6|/scoreboard players tag @e[tag=Candle] add CandleEnd {PortalCooldown:0}|
|7|/fill ~1 ~1 ~ ~4 ~1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0|条件付き|
|8|/execute @e[tag=CandleEnd] ~ ~ ~ /fill ~ ~ ~ ~ ~ ~ minecraft:air 0 replace minecraft:lava|動力が必要|
|9|/execute @e[tag=CandleEnd] ~ ~ ~ /fill ~ ~ ~ ~ ~ ~ minecraft:air 0 replace minecraft:flowing_lava|動力が必要|
|10|/entitydata @e[tag=CandleEnd] {CustomName:"芯",Tags:[Wick,TypeChecked]}|動力が必要|
|11|/fill ~-3 ~1 ~ ~ ~1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|12|/scoreboard players test #EntityCount Global * 0|
|13|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

## 詳細

### キャンドル初期処理部

1. **`ActivatedSkill`が5010 ~ 5019**であるすべてのプレイヤーに対して、以下の事柄を実行
   1. 対象プレイヤーから**半径6m以内にいる1体の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)から2.1m上に[Candle](#candle)を召喚**
   2. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
3. **[キャンドルクロック部](#キャンドルクロック部)を実行**

### キャンドルクロック部

1. **[Candle](#candle)に対して**、以下の事柄を実行
   1. 対象エンティティ上に、**液量が最も少ない溶岩を設置**
   2. 対象エンティティ上で、**パーティクルを表示**
   3. 対象エンティティ上の溶岩を、**flowing_lavaからlavaに置き換える**
   4. 対象エンティティから**1m下**の溶岩を、**空気ブロックに置き換える**
   5. 対象エンティティから**半径7m以内のすべてのプレイヤーの移動速度低下を解除**
   6. 対象エンティティの`PortalCooldown`が0であるとき、以下の事柄を実行
      1. `CandleEnd`を付与
      2. 対象エンティティ上の**溶岩を空気ブロックに置き換える**
      3. 対象エンティティに**`CustomName:"芯"`と`Tags:[Wick,TypeChecked]`を付与**
2. `#EntityCount`の`Global`が0以下であるとき、[キャンドルクロック部](#キャンドルクロック部)を停止

### Candle

```mcfunction
/summon ArmorStand ~ ~ ~ {Marker:true,Small:true,Invisible:true,Invulnerable:true,NoGravity:true,NoBasePlate:true,DisabledSlots:31,PortalCooldown:390,Tags:[SystemEntity,CooldownRequired,TypeChecked],Passengers:[{id:Endermite,CustomName:”キャンドル”,Attributes:[{Name:”generic.attackDamage”,Base:0d}],ActiveEffects:[{Id:14b,Amplifier:0b,Duration:1200,ShowParticles:true}],Fire:1200s,Invulnerable:true,Silent:true,NoAI:true,Lifetime:2000,PortalCooldown:390,Tags:[Candle,TypeChecked]}]}
```

|Name|(None)|
|Type|ArmorStand|
|Tags|SystemEntity,CooldownRequired,TypeChecked|
|Passengers|キャンドル|

- キャンドル

|Name|キャンドル|
|Type|Endermite|
|Tags|Candle,TypeChecked|
|Lifetime|2000 (20秒後に消滅)|
|ActiveEffects|透明化Lv.0 60秒間|
