---
title: ボミオストラップ実行
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_bomiosTrap.html
datatable3cnp: true
summary: 狩人のスキルの1つであるボミオストラップを実行する。
summaryDisable: true
---

<!--2020/09/18-->
<!--#EntityCountのCommandStateによる代入について追加-->

## About

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

狩人のスキルの1つであるボミオストラップを実行する。

## コマンド群

### 初回実行部コマンド群

<span class="tagYellow">位置</span> (-1920,13,-167)

<div class="datatable3cnp-begin"></div>

|No.|コマンド||
|:-:|-|-|
|1|/execute @a[score_ActivatedSkill_min=3020,score_ActivatedSkill=3020] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:wake,CustomName:"⇩SPD⇩",CustomNameVisible:true,Tags:[Decelerate,Decelerate1,TypeChecked]}]}|
|2|/execute @a[score_ActivatedSkill_min=3021,score_ActivatedSkill=3029] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:wake,CustomName:"⇩⇩SPD⇩⇩",CustomNameVisible:true,Tags:[Decelerate,Decelerate2,TypeChecked]}]}|
|3|/fill -1921 ~1 ~ -1921 ~1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ボミオストラップ処理起動|

<div class="datatable3cnp-end"></div>

### リピート部コマンド群

<span class="tagYellow">位置</span> (-1920,14,-167)

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @r[type=AreaEffectCloud,tag=Decelerate,c=3] ~ ~ ~ /playsound entity.chicken.step master @a[r=16] ~ ~ ~ 0.25 2 0|リピート<br>動力が必要|
|2|/execute @r[type=AreaEffectCloud,tag=Decelerate,c=3] ~ ~ ~ /particle wake ~ ~ ~ 5 0.1 5 0 10 force|条件付き|
|3|/execute @r[type=AreaEffectCloud,tag=Decelerate1,c=1] ~ ~ ~ /effect @r[r=5,type=!Player,tag=Enemy,c=3] minecraft:slowness 1 2 false|
|4|/execute @r[type=AreaEffectCloud,tag=Decelerate2,c=1] ~ ~ ~ /effect @r[r=5,type=!Player,tag=Enemy,c=3] minecraft:slowness 1 5 false|
|5|/scoreboard players test #EntityCount Global * 0|
|6|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3cnp-end"></div>

#### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

### 初回実行部

1. **`ActivatedSkill`が3020**であるすべてのプレイヤーから、**半径6m以内の`TrapPoint`**を持つ1体のエンティティの座標上に**`Decelerate1`を召喚**
2. **`ActivatedSkill`が3021 ~ 3029**であるすべてのプレイヤーから、**半径6m以内の`TrapPoint`**を持つ1体のエンティティの座標上に**`Decelerate2`を召喚**
3. [リピート部](#リピート部)を実行

### リピート部

1. `Decelerate`を持つAECをランダムに3体選び、そこから**半径16m以内**すべてのプレイヤーに**効果音を鳴らす**
2. 1.で実行できた`Decelerate`を持つエンティティの数を`#EntityCount`の`Global`に代入
3. `Decelerate`を持つAECをランダムに3体選び、その座標上で**パーティクルを表示**
4. **`Decelerate1`を持つAEC**を1体選び、そこから**半径5m以内**の`Enemy`を持つ3体のエンティティに**移動速度低下Lv.3を1秒間付与**
5. **`Decelerate2`を持つAEC**を1体選び、そこから**半径5m以内**の`Enemy`を持つ3体のエンティティに**耐性Lv.6を1秒間付与**
6. `#EntityCount`の`Global`が0以下であるとき、[リピート部](#リピート部)を停止

### Decelerate

#### Decelerate1

```mcfunction
/summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:wake,CustomName:"⇩SPD⇩",CustomNameVisible:true,Tags:[Decelerate,Decelerate1,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|FlyingObject, TypeChecked|
|life|800 (20秒後に消滅)|

- Passengers

|-|-|
|Name|**⇩SPD⇩**|
|Type|AEC|
|Tags|Decelerate, **Decelerate1**, TypeChecked|
|Radius|5|
|Duration|400 (20sec)|

---

#### Decelerate2

```mcfunction
/summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:wake,CustomName:"⇩⇩SPD⇩⇩",CustomNameVisible:true,Tags:[Decelerate,Decelerate2,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|FlyingObject, TypeChecked|
|life|800 (20秒後に消滅)|

- Passengers

|-|-|
|Name|**⇩⇩SPD⇩⇩**|
|Type|AEC|
|Tags|Decelerate, **Decelerate2**, TypeChecked|
|Radius|5|
|Duration|400 (20sec)|
