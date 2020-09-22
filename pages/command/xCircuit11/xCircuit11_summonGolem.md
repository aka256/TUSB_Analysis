---
title: サモンP：ゴーレム実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_summonGolem.html
datatable2c: true
summary: 召喚士のスキルの1つであるサモンP：ゴーレムを実行する。TarpPointの座標上に(ペット)ゴーレムを召喚する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-151)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

召喚士のスキルの1つであるサモンP：ゴーレムを実行する。[TarpPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に[(ペット)ゴーレム](#ペットゴーレム)を召喚する。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=6060,score_ActivatedSkill=6069] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /playsound entity.enderdragon.hurt master @a[r=16] ~ ~ ~ 1 0.5 0|
|2|/execute @a[score_ActivatedSkill_min=6060,score_ActivatedSkill=6069] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /particle explode ~ ~1 ~ 0.5 1 0.5 0.5 30 force|
|3|/execute @a[score_ActivatedSkill_min=6060,score_ActivatedSkill=6069] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /summon VillagerGolem ~ ~ ~ {CustomName:"(ペット)ゴーレム",CustomNameVisible:true,ArmorItems:[{id:"minecraft:iron_ingot",Count:0b,Damage:0s,tag:{ench:[{id:2s,lvl:32767s},{id:4s,lvl:10s}]}},{},{},{id:minecraft:snowball,Count:0b}], Attributes:[{Name:"generic.followRange",Base:32d},{Name:"generic.movementSpeed",Base:0.32d},{Name:"generic.armor",Base:20d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.maxHealth",Base:50d}],Health:50f,Team:FriendlyTeam,PlayerCreated:true,DeathLootTable:"minecraft:empty"}|

<div class="datatable2c-end"></div>

## 詳細

- **`ActivatedSkill`が6060 ~ 6069**であるすべてのプレイヤーから、**半径6m以内の1体の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)に対し**、以下の事柄を実行

1. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)から半径16m以内のすべてのプレイヤーに、効果音を鳴らす
2. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に、パーティクルを表示
3. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に、**[(ペット)ゴーレム](#ペットゴーレム)を召喚**

### (ペット)ゴーレム

```mcfunction
/summon VillagerGolem ~ ~ ~ {CustomName:"(ペット)ゴーレム",CustomNameVisible:true,ArmorItems:[{id:"minecraft:iron_ingot",Count:0b,Damage:0s,tag:{ench:[{id:2s,lvl:32767s},{id:4s,lvl:10s}]}},{},{},{id:minecraft:snowball,Count:0b}], Attributes:[{Name:"generic.followRange",Base:32d},{Name:"generic.movementSpeed",Base:0.32d},{Name:"generic.armor",Base:20d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.maxHealth",Base:50d}],Health:50f,Team:FriendlyTeam,PlayerCreated:true,DeathLootTable:"minecraft:empty"}
```

|-|-|
|Name|(ペット)ゴーレム|
|Type|VillagerGolem|
|Team|**FriendlyTeam**|
