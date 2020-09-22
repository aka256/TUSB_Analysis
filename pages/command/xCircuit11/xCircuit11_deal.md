---
title: ディール実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_deal.html
datatable2cnp: true
summary: 召喚士のスキルの1つであるディールを実行する。ダメージを与えるPreDealの召喚、PreDealの召喚により羊毛が残らないようにするタグの書き換えPreDeal書き換えタグなどを行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,12,-149)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

召喚士のスキルの1つであるディールを実行する。ダメージを与える[PreDeal](#predeal1)の召喚、[PreDeal](#predeal1)の召喚により羊毛が残らないようにするタグの書き換え[PreDeal書き換えタグ](#predeal書き換えタグ)などを行う。

## コマンド群

<div class="datatable2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @e[tag=Fill] ~ ~ ~ /playsound block.cloth.break master @a[r=32] ~ ~ ~ 2 0.6 0|
|2|/execute @a[score_ActivatedSkill_min=6220,score_ActivatedSkill=6229] ~ ~ ~ /execute @e[r=30,tag=Deal] ~ ~ ~ /playsound entity.wither.hurt master @a[r=30] ~ ~ ~ 3 1.4 0|
|3|/execute @a[score_ActivatedSkill_min=6220,score_ActivatedSkill=6229] ~ ~ ~ /execute @e[r=30,tag=Deal] ~ ~ ~ /particle blockdust ~ ~1 ~ 0.1 0.1 0.1 0.25 100 force @a[r=60] 35|
|4|/execute @a[score_ActivatedSkill_min=6220,score_ActivatedSkill=6220] ~ ~ ~ /execute @e[r=30,tag=Deal] ~ ~ ~ /summon FallingSand ~ ~0.2 ~ {Block:"minecraft:wool",Time:1b,DropItem:false,HurtEntities:true,FallHurtMax:100,FallHurtAmount:100f,FallDistance:1f,Tags:[PreDeal]}|
|5|/execute @a[score_ActivatedSkill_min=6221,score_ActivatedSkill=6221] ~ ~ ~ /execute @e[r=30,tag=Deal] ~ ~ ~ /summon FallingSand ~ ~0.2 ~ {Block:"minecraft:wool",Time:1b,DropItem:false,HurtEntities:true,FallHurtMax:180,FallHurtAmount:180f,FallDistance:1f,Tags:[PreDeal]}|
|6|/execute @a[score_ActivatedSkill_min=6222,score_ActivatedSkill=6229] ~ ~ ~ /execute @e[r=30,tag=Deal] ~ ~ ~ /summon FallingSand ~ ~0.2 ~ {Block:"minecraft:wool",Time:1b,DropItem:false,HurtEntities:true,FallHurtMax:270,FallHurtAmount:270f,FallDistance:1f,Tags:[PreDeal]}|
|7|/execute @a[score_ActivatedSkill_min=6220,score_ActivatedSkill=6229] ~ ~ ~ /execute @e[r=30,tag=Deal] ~ ~0.2 ~ /entitydata @e[r=0,tag=PreDeal] {Block:minecraft:piston_extension,Tags:[],Motion:[0d,-0.1d,0d]}|
|8|/execute @a[score_ActivatedSkill_min=6220,score_ActivatedSkill=6229] ~ ~ ~ /scoreboard players tag @e[r=30,tag=Deal] remove Deal|

<div class="datatable2cnp-end"></div>

## 詳細

1. `Fill`を持ったすべてのエンティティから半径32m以内のすべてのプレイヤーに、効果音を鳴らす
2. **`ActivatedSkill`が6220 ~ 6229**であるすべてのプレイヤーから半径30m以内の`Deal`を持ったエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径30m以内のすべてのプレイヤーに、効果音を鳴らす
   2. 対象エンティティから半径60m以内のすべてのプレイヤーの座標上に、パーティクルを表示
3. **`ActivatedSkill`が6220**であるすべてのプレイヤーから**半径30m以内の`Deal`を持ったエンティティから0.2m上に[PreDeal1](#predeal1)を召喚**
4. **`ActivatedSkill`が6221**であるすべてのプレイヤーから**半径30m以内の`Deal`を持ったエンティティから0.2m上に[PreDeal2](#predeal2)を召喚**
5. **`ActivatedSkill`が6222 ~ 6229**であるすべてのプレイヤーから**半径30m以内の`Deal`を持ったエンティティから0.2m上に[PreDeal3](#predeal3)を召喚**
6. **`ActivatedSkill`が6220 ~ 6229**であるすべてのプレイヤーから半径30m以内の`Deal`を持ったエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径0m以内にいる**[PreDeal](#predeal1)のタグを[PreDeal書き換えタグ](#predeal書き換えタグ)の通りに書き換える**
   2. 対象エンティティから`Deal`を削除

### PreDeal書き換えタグ

```mcfunction
{
  Block:minecraft:**piston_extension**,
  Tags:[],
  Motion:[0d,-0.1d,0d]
}
```

### PreDeal1

```mcfunction
/summon FallingSand ~ ~0.2 ~ {Block:”minecraft:wool”,Time:1b,DropItem:false,HurtEntities:true,FallHurtMax:100,FallHurtAmount:100f,FallDistance:1f,Tags:[PreDeal]}
```

|-|-|
|Name|(None)|
|Type|FallingSand| (wool)|
|Tags|**PreDeal**|
|HurtEntities|true|
|FallHurtMax|**100**|

### PreDeal2

```mcfunction
/summon FallingSand ~ ~0.2 ~ {Block:”minecraft:wool”,Time:1b,DropItem:false,HurtEntities:true,FallHurtMax:180,FallHurtAmount:180f,FallDistance:1f,Tags:[PreDeal]
```

|-|-|
|Name|(None)|
|Type|FallingSand| (wool)|
|Tags|**PreDeal**|
|HurtEntities|true|
|FallHurtMax|**180**|

### PreDeal3

```mcfunction
/summon FallingSand ~ ~0.2 ~ {Block:”minecraft:wool”,Time:1b,DropItem:false,HurtEntities:true,FallHurtMax:270,FallHurtAmount:270f,FallDistance:1f,Tags:[PreDeal]}
```

|-|-|
|Name|(None)|
|Type|FallingSand| (wool)|
|Tags|**PreDeal**|
|HurtEntities|true|
|FallHurtMax|**270**|
