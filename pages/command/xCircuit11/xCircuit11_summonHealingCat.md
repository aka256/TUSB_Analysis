---
title: サモンE：ヒーリングキャット実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_summonHealingCat.html
datatable2c: true
summary: 召喚士のスキルの1つであるサモンE：ヒーリングキャットを実行する。TarpPointの座標上にぬこを召喚する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-151)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

召喚士のスキルの1つであるサモンE：ヒーリングキャットを実行する。[TarpPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に[ぬこ](#ぬこ)を召喚する。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=6050,score_ActivatedSkill=6059] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /playsound entity.cat.ambient master @a[r=16] ~ ~ ~ 1 1.2 0|
|2|/execute @a[score_ActivatedSkill_min=6050,score_ActivatedSkill=6059] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /particle spell ~ ~ ~ 0.5 0.5 0.5 0.001 30 force|
|3|/execute @a[score_ActivatedSkill_min=6050,score_ActivatedSkill=6059] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /summon Ozelot ~ ~1 ~ {Attributes:[{Name:"generic.movementSpeed",Base:0.4d}],CustomName:"ぬこ",CustomNameVisible:true,Invulnerable:true,Silent:true,DeathTime:19s,PortalCooldown:260,Tags:[CooldownRequiredLong,TypeChecked],Passengers:[{id:AreaEffectCloud,Effects:[{Id:10b,Duration:1,Amplifier:5b,ShowParticles:true}],ReapplicantDelay:0,Radius:1.5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:200,RadiusPerTick:0f,WaitTime:60,Age:0,Particle:heart,Tags:[SystemEntity,TypeChecked]}],DeathLootTable:"minecraft:empty"}|

<div class="datatable2c-end"></div>

## 詳細

- **`ActivatedSkill`が6050 ~ 6059**であるすべてのプレイヤーから、**半径6m以内の1体の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)に対し**、以下の事柄を実行

1. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)から半径16m以内のすべてのプレイヤーに、効果音を鳴らす
2. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に、パーティクルを表示
3. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に、**[ぬこ](#ぬこのAEC)を召喚**

### ぬこ

```mcfunction
/summon Ozelot ~ ~1 ~ {Attributes:[{Name:"generic.movementSpeed",Base:0.4d}],CustomName:"ぬこ",CustomNameVisible:true,Invulnerable:true,Silent:true,DeathTime:19s,PortalCooldown:260,Tags:[CooldownRequiredLong,TypeChecked],Passengers:[{id:AreaEffectCloud,Effects:[{Id:10b,Duration:1,Amplifier:5b,ShowParticles:true}],ReapplicantDelay:0,Radius:1.5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:200,RadiusPerTick:0f,WaitTime:60,Age:0,Particle:heart,Tags:[SystemEntity,TypeChecked]}],DeathLootTable:"minecraft:empty"}
```

|-|-|
|Name|ぬこ|
|Type|Ozelot|
|Tags|CooldownRequiredLong,TypeChecked|
|PortalCooldown|**260**|
|Passengers|ぬこのAEC|

- ぬこのAEC

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|SystemEntity,TypeChecked|
|Effects|**再生能力Lv.6**|
|Radius|**1.5**|
|Duration|**200**|
