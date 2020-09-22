---
title: ニフラムトラップ実行
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_niflamTrap.html
datatable3cnp: true
summary: 狩人のスキルの1つであるニフラムトラップを実行する。
summaryDisable: true
---

<!--2020/09/18-->
<!--#EntityCountのCommandStateによる代入について追加-->

## About

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

狩人のスキルの1つであるニフラムトラップを実行する。

## コマンド群

### 初期実行部コマンド群

<span class="tagYellow">位置</span> (-1920,15,-166)

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[score_ActivatedSkill_min=3070,score_ActivatedSkill=3079] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:witchMagic,CustomName:"☠",CustomNameVisible:true,Tags:[Poof,TypeChecked]}]}|
|2|/clone -1920 ~2 ~ -1920 ~2 ~ -1920 ~2 ~ filtered force minecraft:command_block 5 ###ニフラムトラップ処理起動|条件付き|

<div class="datatable3cnp-end"></div>

### ニフラムクロック部コマンド群

<span class="tagYellow">位置</span> (-1920,17,-166)

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @r[type=AreaEffectCloud,tag=Poof,c=3] ~ ~ ~ /playsound block.fire.ambient master @a[r=16] ~ ~ ~ 0.5 2 0|
|2|/execute @r[type=AreaEffectCloud,tag=Poof,c=3] ~ ~ ~ /particle witchMagic ~ ~ ~ 5 0.1 5 0.1 10 force|条件付き|
|3|/execute @r[type=AreaEffectCloud,tag=Poof,c=1] ~ ~ ~ /scoreboard players tag @r[r=5,type=!Player,tag=Poofable,c=3] add PoofCheck|条件付き|
|4|/scoreboard players tag @e[tag=PoofCheck] remove Poofable|条件付き|
|5|/clone -1920 ~-1 ~ -1920 ~-1 ~ -1920 ~-1 ~ filtered force minecraft:command_block 5 ###ニフラム判定&適用|条件付き|
|6|/scoreboard players test #EntityCount Global 1 *|
|7|/clone -1920 ~ ~ -1920 ~ ~ -1920 ~ ~ filtered force minecraft:command_block 5 ###ループ|条件付き|

<div class="datatable3cnp-end"></div>

#### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

### ニフラム適用部コマンド群

<span class="tagYellow">位置</span> (-1920,16,-166)

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @e[tag=PoofCheck] remove PoofCheck {ArmorItems:[{Count:1b}]}|
|2|/scoreboard players tag @e[tag=PoofCheck] remove PoofCheck {ArmorItems:[{Count:0b}]}|
|3|/entitydata @e[tag=PoofCheck] {:,ArmorItems:[{},{},{id:minecraft:wooden_button,Count:0b,Damage:0s,tag:{AttributeModifiers:[{Name:"Poof",AttributeName:"generic.maxHealth",Operation:0,Amount:-300d,UUIDMost:9007L,UUIDLeast:9007L}]}}]}|
|4|/entitydata @e[tag=PoofCheck] {:}|条件付き|
|5|/scoreboard players tag @e[tag=PoofCheck] remove PoofCheck|条件付き|

<div class="datatable3cnp-end"></div>

## 詳細

### 初期実行部

1. **`ActivatedSkill`が3070 ~ 3079**であるすべてのプレイヤーから**半径6m以内**の1つの[TrapPoint]({{site.baseurl}}/entity/entity_entity.html)に、**[ニフラムトラップポイント](#ニフラムトラップポイント)(`Poof`を持つ)を召喚**
2. [ニフラムクロック部](#ニフラムクロック部)を実行

### ニフラムクロック部

1. **`Poof`を持つ[ニフラムトラップポイント](#ニフラムトラップポイント)**が存在するとき、以下の事柄を実行
   1. `Poof`を持つ[ニフラムトラップポイント](#ニフラムトラップポイント)をランダムに3体選び、それらから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
   2. a.で実行できた`Poof`を持ったエンティティ数を`#EntityCount`の`Global`に代入
   3. `Poof`を持つ[ニフラムトラップポイント](#ニフラムトラップポイント)をランダムに3体選び、その座標上に**パーティクルを表示**
   4. `Poof`を持つ[ニフラムトラップポイント](#ニフラムトラップポイント)をランダムに1体選び、そこからさらに**半径5m以内**の**`Poofable`を持つエンティティをランダムに3体選び、`PoofCheck`を付与**
   5. `PoofCheck`を持つすべてのエンティティから、`Poofable`を削除
   6. [ニフラム適用部](#ニフラム適用部)を実行
2. `#EntityCount`の`Global`が1以上であるとき、[ニフラムクロック部](#ニフラムクロック部)を再び実行

### ニフラム適用部

1. **`PoofCheck`を持ち、装備のスタック数が1もしくは0(装備をしていないということではない)であるエンティティから、`PoofCheck`を削除**
2. `PoofCheck`を持つすべてのエンティティに、**最大体力を300減らす[ニフラム用ボタン]({{site.baseurl}}/others/others_item.html#ニフラム用ボタン)を胴に装備させる**
3. `PoofCheck`を持つすべてのエンティティのタグを読み込み、[ニフラム用ボタン]({{site.baseurl}}/others/others_item.html#ニフラム用ボタン)の効果を適用させ、**キルする**
4. `PoofCheck`を持つすべてのエンティティから`PoofCheck`を削除

### ニフラムトラップポイント

```mcfunction
/summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:witchMagic,CustomName:"☠",CustomNameVisible:true,Tags:[Poof,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|FlyingObject, TypeChecked|
|life|800 (20秒後に消滅)

- Passengers

|-|-|
|Name|**☠**|
|Type|AEC|
|Tags|**Poof**,TypeChecked|
|Duration|400 (20sec)|
