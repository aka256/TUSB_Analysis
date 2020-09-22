---
title: あつあつタライ実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_hotTub.html
datatable2cnp: true
summary: 召喚士のスキルの1つであるあつあつタライを実行する。敵Mobの座標上にAtsuTaraiを召喚し、50ダメージを与える。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-148)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

<span class="tagBlue">分岐先</span> [タライ共通処理]({{site.baseurl}}/command/xCircuit11/xCircuit11_tubProcessing.html)

召喚士のスキルの1つであるあつあつタライを実行する。敵Mobの座標上に[AtsuTarai](#atsutarai)を召喚し、50ダメージを与える。

## コマンド群

<div class="datatable2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=6250,score_ActivatedSkill=6259] ~ ~ ~ /execute @e[r=15,tag=Enemy] ~ ~ ~ /summon FallingSand ~ ~2.5 ~ {Block:"minecraft:flowing_lava",Data:7b,Time:1,DropItem:false,HurtEntities:true,FallHurtMax:50,FallHurtAmount:50f,FallDistance:1f,Tags:[AtsuTarai,Tarai]}|
|2|/execute @a[score_ActivatedSkill_min=6250,score_ActivatedSkill=6259] ~ ~ ~ /execute @e[r=15,tag=Enemy,c=10] ~ ~2.5 ~ /particle lava ~ ~ ~ 0.3 0.1 0.3 0.1 5 force|
|3|/execute 0-0-1-0-1 ~ 14 -148 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###タライ共通|

<div class="datatable2cnp-end"></div>

## 詳細

1. **`ActivatedSkill`が6250 ~ 6259**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから**半径15m以内の`Enemy`を持ったすべてのエンティティ**の座標上に、**[AtsuTarai](#atsutarai)を召喚**
   2. 対象プレイヤーから半径15m以内の`Enemy`を持った10体のエンティティの座標上に、パーティクルを表示
2. [タライ共通処理]({{site.baseurl}}/command/xCircuit11/xCircuit11_tubProcessing.html)を実行

### AtsuTarai

```mcfunction
/summon FallingSand ~ ~2.5 ~ {Block:"minecraft:flowing_lava",Data:7b,Time:1,DropItem:false,HurtEntities:true,FallHurtMax:50,FallHurtAmount:50f,FallDistance:1f,Tags:[AtsuTarai,Tarai]}
```

|-|-|
|Name|(None)|
|Type|FallingSand (flowing_lava)|
|Tags|**AtsuTarai**,**Tarai**|
|HurtEntities|true|
|FallHurtMax|**50**|
