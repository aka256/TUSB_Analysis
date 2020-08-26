---
title: 斬鉄剣実行
tags: [コマンド,スキル,剣士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-26 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_zantetsu.html
datatable3c: true
summary: 剣士のスキルの1つである斬鉄剣を実行する。
summaryDisable: true
---

## About

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

剣士のスキルの1つである斬鉄剣を実行する。

## コマンド群

### 斬鉄剣実行部コマンド群

<span class="tagYellow">位置</span> (-1920,12,-174)

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[score_ActivatedSkill_min=1250,score_ActivatedSkill=1259] ~ ~ ~ /summon AreaEffectCloud ~ ~ ~ {Invulnerable:true,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:1,RadiusPerTick:0f,WaitTime:0,Age:-9,Particle:take,Tags:[ZantetsuPoint,SystemEntity,TypeChecked]}|
|2|/execute @a[score_ActivatedSkill_min=1250,score_ActivatedSkill=1259] ~ ~ ~ /execute @e[r=10,tag=Enemy] ~ ~ ~ /playsound entity.wither.ambient master @a[r=16] ~ ~ ~ 1 2 0|
|3|/execute @a[score_ActivatedSkill_min=1250,score_ActivatedSkill=1259] ~ ~ ~ /execute @e[r=10,tag=Enemy] ~ ~ ~ /particle sweepAttack ~ ~1 ~ 0.5 0.3 0.5 0 1 force|
|4|/fill -1921 ~2 ~ -1921 ~2 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###斬鉄剣待機|

<div class="datatable3c-end"></div>

### 斬鉄剣待機部コマンド群

<span class="tagYellow">位置</span> (-1920,14,-174)

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @e[tag=ZantetsuPoint] add Zantetsuken {Age:0}|リピート<br>動力が必要|
|2|/execute @e[tag=Zantetsuken] ~ ~ ~ /scoreboard players tag @e[r=10,tag=Enemy] add SkillTarget|条件付き|
|3|/execute @e[tag=Zantetsuken] ~ ~ ~ /execute @e[r=10,tag=SkillTarget] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"斬鉄剣",damage:650d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|条件付き|
|4|/execute @e[tag=Zantetsuken] ~ ~ ~ /execute @e[r=10,tag=SkillTarget] ~ ~ ~ /particle magicCrit ~ ~1 ~ 0.1 0.2 0.1 1 10 force|条件付き|
|5|/execute @e[tag=Zantetsuken] ~ ~ ~ /execute @e[r=10,tag=SkillTarget] ~ ~ ~ /playsound entity.zombie.attack_iron_door master @a[r=16] ~ ~ ~ 1 2 0|条件付き|
|6|/scoreboard players test #EntityCount Global * 0|
|7|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

## 詳細

### 斬鉄剣実行部

- `ActivatedSkill`が**1250 ~ 1259**であるプレイヤーを対象として、以下の事柄を実行

1. 対象プレイヤーの座標上に**[ZantetsuPoint]({{site.baseurl}}/entity/entity_entity.html#zantetsupoint)を召喚**
2. 対象プレイヤーから**半径10m以内の`Enemy`を持つエンティティ**から、更に**半径16m以内のすべてのプレイヤー**に効果音を鳴らす
3. 対象プレイヤーから**半径10m以内の`Enemy`を持つエンティティ**の座標上でエフェクトを表示
4. [斬鉄剣待機部](#斬鉄剣待機部)を**リピート実行**

### 斬鉄剣待機部

1. [ZantetsuPoint]({{site.baseurl}}/entity/entity_entity.html#zantetsupoint)が召喚されて、**0.45秒**たったらそのエンティティに`Zantetsuken`を付与し、`Zantetsuken`を持ったエンティティを対象として、以下の事柄を実行
   1. 対象エンティティから**半径10m以内の`Enemy`を持ったすべてのエンティティ**に`SkillTarget`を付与し、それらの座標上に[斬鉄剣]({{site.baseurl}}/entity/entity_entity.html#斬鉄剣)を召喚
   2. 対象エンティティから**半径10m以内の`SkillTarget`**の座標上でパーティクルを表示
   3. 対象エンティティから**半径10m以内の`SkillTarget`**から、更に半**径16m以内のすべてのプレイヤー**に効果音を鳴らす
2. `#EntityCount`が0以下になった時、**[斬鉄待機部](#斬鉄剣待機部)のリピートを停止**

### ZantetsuPoint

|Name|(None)|
|Type|AEC|
|Tags|ZantetsuPoint,SystemEntity,TypeChecked|
|Duration|1|
|Age|-9|

```minecraftcommand
/summon AreaEffectCloud ~ ~ ~ {Invulnerable:true,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:1,RadiusPerTick:0f,WaitTime:0,Age:-9,Particle:take,Tags:[ZantetsuPoint,SystemEntity,TypeChecked]}
```

### 斬鉄剣

|Name|斬鉄剣|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|650|
|life|1200(即デスポーンする)|

```minecraftcommand
/summon Arrow ~ ~0.02 ~ {CustomName:"斬鉄剣",damage:650d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```
