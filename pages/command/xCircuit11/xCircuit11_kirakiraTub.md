---
title: きらきらタライ実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_kirakiraTub.html
datatable2c: true
summary: 召喚士のスキルの1つであるきらきらタライを実行する。KiraTaraiを敵Mobの上に召喚する。なお、爆破処理はタライ共通処理で行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,12,-148)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

<span class="tagBlue">分岐先</span> [タライ共通処理]({{site.baseurl}}/command/xCircuit11/xCircuit11_tubProcessing.html)

召喚士のスキルの1つであるきらきらタライを実行する。[KiraTarai](#kiratarai)を敵Mobの上に召喚する。なお、爆破処理は[タライ共通処理]({{site.baseurl}}/command/xCircuit11/xCircuit11_tubProcessing.html)で行われる。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=6290,score_ActivatedSkill=6299] ~ ~ ~ /execute @e[r=15,tag=Enemy] ~ ~ ~ /summon ArmorStand ~ ~3.5 ~ {Marker:true,Invulnerable:true,Invisible:true,Small:true,NoBasePlate:true,DisabledSlots:31,FallDistance:1f,Tags:[KiraTnt,Tarai,SystemEntity,TypeChecked],Passengers:[{id:FallingSand,Block:"minecraft:chorus_flower",Time:1,DropItem:false,HurtEntities:true,FallHurtMax:25,FallHurtAmount:25f,FallDistance:1f,Tags:[KiraTarai,Tarai]}]}|
|2|/execute @a[score_ActivatedSkill_min=6290,score_ActivatedSkill=6299] ~ ~3.5 ~ /entitydata @e[r=15,tag=KiraTarai] {Block:minecraft:piston_extension,Tags:[KiraTarai,Tarai]}|
|3|/execute 0-0-1-0-1 ~ 14 -148 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###タライ共通|

<div class="datatable2c-end"></div>

## 詳細

1. **`ActivatedSkill`が6290 ~ 6299**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから**半径15m以内の`Enemy`を持ったすべてのエンティティの3.5m上に[KiraTarai](#kiratarai)を召喚**
   2. 対象プレイヤーから3.5m上を中心とした半径15m以内の[KiraTarai](#kiratarai)に[KiraTarai書き換えタグ](#kiratarai書き換えタグ)を付与 (スキル実行後に、感圧版が残らないようにする処理)
2. [タライ共通処理]({{site.baseurl}}/command/xCircuit11/xCircuit11_tubProcessing.html)を実行

### KiraTarai書き換えタグ

```mcfunction
{
  Block:minecraft:piston_extension,
  Tags:[KiraTarai,Tarai]
}
```

### KiraTarai

```mcfunction
/summon ArmorStand ~ ~3.5 ~ {Marker:true,Invulnerable:true,Invisible:true,Small:true,NoBasePlate:true,DisabledSlots:31,FallDistance:1f,Tags:[KiraTnt,Tarai,SystemEntity,TypeChecked],Passengers:[{id:FallingSand,Block:"minecraft:chorus_flower",Time:1,DropItem:false,HurtEntities:true,FallHurtMax:25,FallHurtAmount:25f,FallDistance:1f,Tags:[KiraTarai,Tarai]}]}
```

|-|-|
|Name|(None)|
|Type|ArmorStand|
|Tags|**KiraTnt**,**Tarai**,SystemEntity,TypeChecked|
|Passengers|KiraTarai|

- KiraTarai

|-|-|
|Name|(None)|
|Type|FallingSand (chorus_flower)|
|Tags|**KiraTarai**,**Tarai**|
|HurtEntities|true|
|FallHurtMax|**25**|
