---
title: ルカナントラップ実行
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-08 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_lucananTrap.html
datatable3c: true
summary: 狩人のスキルの1つであるルカナントラップを実行する。
summaryDisable: true
---

## About

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

狩人のスキルの1つであるルカナントラップを実行する。

## コマンド群

### 初回実行部コマンド群

<span class="tagYellow">位置</span> (-1920,8,-167)

<div class="datatable3c-begin"></div>

|No.|コマンド||
|:-:|-|-|
|1|/execute @a[score_ActivatedSkill_min=3000,score_ActivatedSkill=3000] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:smoke,CustomName:"⇩DEF⇩",CustomNameVisible:true,Tags:[Kasap,Kasap1,TypeChecked]}]}|
|2|/execute @a[score_ActivatedSkill_min=3001,score_ActivatedSkill=3001] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:smoke,CustomName:"⇩⇩DEF⇩⇩",CustomNameVisible:true,Tags:[Kasap,Kasap2,TypeChecked]}]}|
|3|/execute @a[score_ActivatedSkill_min=3002,score_ActivatedSkill=3009] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:smoke,CustomName:"⇩⇩⇩DEF⇩⇩⇩",CustomNameVisible:true,Tags:[Kasap,Kasap3,TypeChecked]}]}|
|4|/fill -1921 ~1 ~ -1921 ~1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ルカナントラップ処理起動|

<div class="datatable3c-end"></div>

### リピート部コマンド群

<span class="tagYellow">位置</span> (-1920,9,-167)

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @r[type=AreaEffectCloud,tag=Kasap,c=3] ~ ~ ~ /playsound entity.creeper.hurt master @a[r=16] ~ ~ ~ 0.15 2 0|リピート<br>動力が必要|
|2|/execute @r[type=AreaEffectCloud,tag=Kasap,c=3] ~ ~ ~ /particle smoke ~ ~ ~ 5 0.1 5 0.1 10 force|条件付き|
|3|/execute @r[type=AreaEffectCloud,tag=Kasap1,c=1] ~ ~ ~ /entitydata @r[r=5,type=!Player,tag=Enemy,c=3] {ActiveEffects:[{Amplifier:-6b,Duration:20,Id:11b,ShowParticles:true}]}|
|4|/execute @r[type=AreaEffectCloud,tag=Kasap2,c=1] ~ ~ ~ /entitydata @r[r=5,type=!Player,tag=Enemy,c=3] {ActiveEffects:[{Amplifier:-11b,Duration:20,Id:11b,ShowParticles:true}]}|
|5|/execute @r[type=AreaEffectCloud,tag=Kasap3,c=1] ~ ~ ~ /entitydata @r[r=5,type=!Player,tag=Enemy,c=3] {ActiveEffects:[{Amplifier:-16b,Duration:20,Id:11b,ShowParticles:true}]}|
|6|/scoreboard players test #EntityCount Global * 0|
|7|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

## 詳細

### 初回実行部

1. **`ActivatedSkill`が3000**であるプレイヤーから**半径6m以内の`TrapPoint`**を持つエンティティの座標上に、**`Kasap1`を召喚**
2. **`ActivatedSkill`が3001**であるプレイヤーから**半径6m以内の`TrapPoint`**を持つエンティティの座標上に、**`Kasap2`を召喚**
3. **`ActivatedSkill`が3002 ~ 3009**であるプレイヤーから**半径6m以内の`TrapPoint`**を持つエンティティの座標上に、**`Kasap3`を召喚**
4. [リピート部](#リピート部)を実行

### リピート部

1. `Kasap`を持つAECをランダムに3体選び、そこから**半径16m以内**すべてのプレイヤーに**効果音を鳴らす**
2. `Kasap`を持つAECをランダムに3体選び、その座標上で**パーティクルを表示**
3. **`Kasap1`を持つAEC**を1体選び、そこから**半径5m以内**の`Enemy`を持つ3体のエンティティに**耐性Lv.-6を1秒間付与**
4. **`Kasap2`を持つAEC**を1体選び、そこから**半径5m以内**の`Enemy`を持つ3体のエンティティに**耐性Lv.-11を1秒間付与**
5. **`Kasap3`を持つAEC**を1体選び、そこから**半径5m以内**の`Enemy`を持つ3体のエンティティに**耐性Lv.-16を1秒間付与**
6. `#EntityCount`の`Global`が0以下であるとき、[リピート部](#リピート部)を停止

### Kasap

どうでもいいが英語で「ルカナン」のことを*Kasap*というらしい。
[Kasap - Dragon Quest Wiki](https://dragon-quest.org/wiki/Kasap)

---

#### Kasap1

```mcfunction
/summon Arrow ~ ~ ~{Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:smoke,CustomName:"⇩DEF⇩",CustomNameVisible:true,Tags:[Kasap,Kasap1,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|FlyingObject, TypeChecked|
|life|800 (20秒後に消滅)|

- Passengers

|-|-|
|Name|**⇩DEF⇩**|
|Type|AEC|
|Tags|Kasap, **Kasap1**, TypeChecked|
|Radius|5|
|Duration|400 (20sec)|

---

#### Kasap2

```mcfunction
/summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:smoke,CustomName:"⇩⇩DEF⇩⇩",CustomNameVisible:true,Tags:[Kasap,Kasap2,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|FlyingObject, TypeChecked|
|life|800 (20秒後に消滅)|

- Passengers

|-|-|
|Name|**⇩⇩DEF⇩⇩**|
|Type|AEC|
|Tags|Kasap, **Kasap2**, TypeChecked|
|Radius|5|
|Duration|400 (20sec)|

---

#### Kasap3

```mcfunction
/summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:smoke,CustomName:"⇩⇩⇩DEF⇩⇩⇩",CustomNameVisible:true,Tags:[Kasap,Kasap3,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|FlyingObject, TypeChecked|
|life|800 (20秒後に消滅)|

- Passengers

|-|-|
|Name|**⇩⇩⇩DEF⇩⇩⇩**|
|Type|AEC|
|Tags|Kasap, **Kasap3**, TypeChecked|
|Radius|5|
|Duration|400 (20sec)|
