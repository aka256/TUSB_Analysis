---
title: サモンP：スノー実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_summonSnow.html
datatable2c: true
summary: 召喚士のスキルの1つであるサモンP：スノウを実行する。TarpPointの座標上に(ペット)スノーを召喚する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-152)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

召喚士のスキルの1つであるサモンP：スノウを実行する。[TarpPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に[(ペット)スノー](#ペットスノー)を召喚する。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=6000,score_ActivatedSkill=6009] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /playsound entity.player.levelup master @a[r=16] ~ ~ ~ 1 1.4 0|
|2|/execute @a[score_ActivatedSkill_min=6000,score_ActivatedSkill=6009] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /particle instantSpell ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|
|3|/execute @a[score_ActivatedSkill_min=6000,score_ActivatedSkill=6009] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /summon SnowMan ~ ~ ~ {CustomName:"(ペット)スノー",CustomNameVisible:true,ArmorItems:[{id:"minecraft:snowball",Count:0b,Damage:0s,tag:{ench:[{id:2s,lvl:32767s},{id:3s,lvl:10s}]}},{},{},{id:minecraft:snowball,Count:0b}], Attributes:[{Name:"generic.followRange",Base:32d},{Name:"generic.movementSpeed",Base:0.32d},{Name:"generic.armor",Base:10d},{Name:"generic.maxHealth",Base:30d}],Health:30f,Team:FriendlyTeam,DeathLootTable:"minecraft:empty"}|

<div class="datatable2c-end"></div>

## 詳細

- **`ActivatedSkill`が6000 ~ 6009**であるすべてのプレイヤーから、**半径6m以内の1体の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)に対し**、以下の事柄を実行

1. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)から半径16m以内のすべてのプレイヤーに、効果音を鳴らす
2. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に、パーティクルを表示
3. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に、**[(ペット)スノー](#ペットスノー)を召喚**

### (ペット)スノー

```mcfunction
/summon SnowMan ~ ~ ~ {CustomName:"(ペット)スノー",CustomNameVisible:true,ArmorItems:[{id:"minecraft:snowball",Count:0b,Damage:0s,tag:{ench:[{id:2s,lvl:32767s},{id:3s,lvl:10s}]}},{},{},{id:minecraft:snowball,Count:0b}], Attributes:[{Name:"generic.followRange",Base:32d},{Name:"generic.movementSpeed",Base:0.32d},{Name:"generic.armor",Base:10d},{Name:"generic.maxHealth",Base:30d}],Health:30f,Team:FriendlyTeam,DeathLootTable:"minecraft:empty"}
```

|-|-|
|Name|(ペット)スノー|
|Type|SnowMan|
|Team|**FriendlyTeam**|
|Health|30|
|ArmorItems|落下耐性Lv.32767、爆破耐性Lv.10の雪玉|
