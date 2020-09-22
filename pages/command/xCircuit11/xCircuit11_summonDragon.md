---
title: サモンE：スーパードラゴン実行
tags: [コマンド,スキル,黒魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_summonDragon.html
datatable2c: true
summary: 召喚士のスキルの1つであるサモンE：スーパードラゴンを実行する。TarpPointの座標上にSuper Dragonを召喚する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,14,-152)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

召喚士のスキルの1つであるサモンE：スーパードラゴンを実行する。[TarpPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に[Super Dragon](#super-dragon)を召喚する。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=6030,score_ActivatedSkill=6039] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /playsound entity.horse.gallop master @a[r=16] ~ ~ ~ 1 0.5 0|
|2|/execute @a[score_ActivatedSkill_min=6030,score_ActivatedSkill=6039] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /particle cloud ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|
|3|/execute @a[score_ActivatedSkill_min=6030,score_ActivatedSkill=6039] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /summon EntityHorse ~ ~ ~ {CustomName:"Super Dragon",CustomNameVisible:true,Tags:[TypeChecked],Attributes:[{Name:"generic.maxHealth",Base:0.1d},{Name:"generic.movementSpeed",Base:0.45d},{Name:"horse.jumpStrength",Base:2.0d}],Health:0.1f,ActiveEffects:[{Id:8b,Amplifier:10b,Duration:2147483647,ShowParticles:false}],Tame:true,SaddleItem:{id:minecraft:saddle,Count:0b,tag:{display:{Name:"夢のサドル"}}},DeathLootTable:"minecraft:empty"}|

<div class="datatable2c-end"></div>

## 詳細

- **`ActivatedSkill`が6030 ~ 6039**であるすべてのプレイヤーから、**半径6m以内の1体の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)に対し**、以下の事柄を実行

1. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)から半径16m以内のすべてのプレイヤーに、効果音を鳴らす
2. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に、パーティクルを表示
3. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に、**[Super Dragon](#super-dragon)を召喚**

### Super Dragon

```mcfunction
/summon EntityHorse ~ ~ ~ {CustomName:”Super Dragon”,CustomNameVisible:true,Tags:[TypeChecked],Attributes:[{Name:”generic.maxHealth”,Base:0.1d},{Name:”generic.movementSpeed”,Base:0.45d},{Name:”horse.jumpStrength”,Base:2.0d}],Health:0.1f,ActiveEffects:[{Id:8b,Amplifier:10b,Duration:2147483647,ShowParticles:false}],Tame:true,SaddleItem:{id:minecraft:saddle,Count:0b,tag:{display:{Name:”夢のサドル”}}},DeathLootTable:”minecraft:empty”}
```

|-|-|
|Name|Super Dragon|
|Type|EntityHorse|
|Tags|TypeChecked|
|Health|**0.1**|
|ActiveEffects|**跳躍力上昇Lv.11 107,374,182.35秒間**|
|SaddleItem|夢のサドル|
