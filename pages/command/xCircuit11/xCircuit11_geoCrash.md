---
title: ジオクラッシュ実行
tags: [コマンド,スキル,黒魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-17 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_geoCrash.html
datatable2c: true
summary: 黒魔導士のスキルの1つであるジオクラッシュを実行する。OnGroundがtrueであるエンティティへの攻撃処理などを行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,11,-154)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるジオクラッシュを実行する。`OnGround`がtrueであるエンティティへの攻撃処理などを行う。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=5230,score_ActivatedSkill=5239] ~-15 ~-2 ~-15 /scoreboard players tag @e[dx=30,dy=4,dz=30,tag=Enemy] add GeoCrash {OnGround:true}|
|2|/execute @a[score_ActivatedSkill_min=5230,score_ActivatedSkill=5239] ~ ~ ~ /playsound entity.wither.hurt master @a[r=32] ~ ~ ~ 2 0.5 0.1|
|3|/execute @a[score_ActivatedSkill_min=5230,score_ActivatedSkill=5239] ~ ~ ~ /particle blockcrack ~ ~0.5 ~ 6 0.2 6 0.1 300 force @a[r=64] 4097|
|4|/execute @a[score_ActivatedSkill_min=5230,score_ActivatedSkill=5230] ~-15 ~-2 ~-15 /execute @e[dx=30,dy=4,dz=30,tag=GeoCrash] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"ジオクラッシュ",damage:30d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|
|5|/execute @a[score_ActivatedSkill_min=5231,score_ActivatedSkill=5231] ~-15 ~-2 ~-15 /execute @e[dx=30,dy=4,dz=30,tag=GeoCrash] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"ジオクラッシュ",damage:50d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|
|6|/execute @a[score_ActivatedSkill_min=5232,score_ActivatedSkill=5239] ~-15 ~-2 ~-15 /execute @e[dx=30,dy=4,dz=30,tag=GeoCrash] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"ジオクラッシュ",damage:75d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|
|7|/execute @a[score_ActivatedSkill_min=5230,score_ActivatedSkill=5239] ~-15 ~-2 ~-15 /scoreboard players tag @e[dx=30,dy=4,dz=30,tag=GeoCrash] add SkillTarget|
|8|/execute @a[score_ActivatedSkill_min=5230,score_ActivatedSkill=5239] ~-15 ~-2 ~-15 /scoreboard players tag @e[dx=30,dy=4,dz=30,tag=GeoCrash] remove GeoCrash|

<div class="datatable2c-end"></div>

## 詳細

- **ジオクラッシュの効果範囲**をスキル実行プレイヤーの足元のブロックから、**下に1m、左右に15m、上に3mとする。**

1. **`ActivatedSkill`が5230 ~ 5239**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーからジオクラッシュの効果範囲内の`Enemy`を持ち、**`OnGround`がtrueであるエンティティに`GeoCrash`を付与**
   2. 対象プレイヤーから**半径32m以内**のすべてのプレイヤーに、**効果音を鳴らす**
   3. 対象プレイヤーから**半径64m以内**のすべてのプレイヤーの座標上で、**パーティクルを表示**
2. **`ActivatedSkill`が5230**であるすべてのプレイヤーから、ジオクラッシュの効果範囲内の`GeoCrash`を持つエンティティの座標上に、**[ジオクラッシュ1](#ジオクラッシュ1)を召喚**
3. **`ActivatedSkill`が5231**であるすべてのプレイヤーから、ジオクラッシュの効果範囲内の`GeoCrash`を持つエンティティの座標上に、**[ジオクラッシュ2](#ジオクラッシュ2)を召喚**
4. **`ActivatedSkill`が5232 ~ 5239**であるすべてのプレイヤーから、ジオクラッシュの効果範囲内の`GeoCrash`を持つエンティティの座標上に、**[ジオクラッシュ3](#ジオクラッシュ3)を召喚**
5. **`ActivatedSkill`が5230 ~ 5239**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーからジオクラッシュの効果範囲内の`GeoCrash`を持つエンティティに、`SkillTarget`を付与し、`GeoCrash`を削除

### ジオクラッシュ1

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:"ジオクラッシュ",damage:30d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|ジオクラッシュ|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|30|

### ジオクラッシュ2

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:"ジオクラッシュ",damage:50d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|ジオクラッシュ|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|50|

### ジオクラッシュ3

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:"ジオクラッシュ",damage:75d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|ジオクラッシュ|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|75|
