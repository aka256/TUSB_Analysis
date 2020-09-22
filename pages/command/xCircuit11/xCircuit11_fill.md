---
title: フィール実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_fill.html
datatable2c: true
summary: 召喚士のスキルの1つであるフィールを実行する。特定のMotionを持つ雪玉であるFillSnowballによるフィール実行エリアの予約、羊毛の設置などを行う。
summaryDisable: true
---

## About

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

召喚士のスキルの1つであるフィールを実行する。特定の`Motion`を持つ雪玉である[FillSnowball](#fillsnowball1)によるフィール実行エリアの予約、羊毛の設置などを行う。

## コマンド群

### フィール予約部コマンド群

<span class="tagYellow">位置</span> (-1920,8,-149)

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209] ~ ~ ~ /summon ItemFrame ~ ~ ~ {Invulnerable:true,Facing:0b,Tags:[FillOffset]}|
|2|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209,tag=Sneaking] ~ ~ ~ /execute @a[rm=1,r=15] ~ ~ ~ /summon ItemFrame ~ ~ ~ {Invulnerable:true,Facing:0b,Tags:[FillOffset]}|
|3|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209] ~ ~ ~ /entitydata @e[r=15,tag=FillOffset] {:}|
|4|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209] ~ ~ ~ /playsound entity.bat.takeoff master @a[r=32] ~ ~ ~ 2 0.6 0|
|5|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /particle footstep ~ ~-0.5 ~ 2 0 2 0.1 60 force|
|6|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~-1 ~-1 ~-0.53125 /fill ~ ~ ~ ~2 ~ ~2 minecraft:wool 0 keep|
|7|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6200] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~1.2 {Motion:[0d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|8|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6200] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~1.2 {Motion:[0d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|9|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6200] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~-1.2 {Motion:[0d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|10|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6200] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~-1.2 {Motion:[0d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|11|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~ {Motion:[1d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|12|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~ ~-0.5 ~1.2 {Motion:[0d,0.1d,1d],Tags:[Fill,TypeChecked]}|
|13|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~ {Motion:[-1d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|14|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~ ~-0.5 ~-1.2 {Motion:[0d,0.1d,-1d],Tags:[Fill,TypeChecked]}|
|15|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~1.2 {Motion:[1d,0.1d,1d],Tags:[Fill,TypeChecked]}|
|16|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~1.2 {Motion:[-1d,0.1d,1d],Tags:[Fill,TypeChecked]}|
|17|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~-1.2 {Motion:[-1d,0.1d,-1d],Tags:[Fill,TypeChecked]}|
|18|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~-1.2 {Motion:[1d,0.1d,-1d],Tags:[Fill,TypeChecked]}|
|19|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~ {Motion:[2d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|20|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~ ~-0.5 ~1.2 {Motion:[0d,0.1d,2d],Tags:[Fill,TypeChecked]}|
|21|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~ {Motion:[-2d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|22|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~ ~-0.5 ~-1.2 {Motion:[0d,0.1d,-2d],Tags:[Fill,TypeChecked]}|
|23|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~1.2 {Motion:[2d,0.1d,2d],Tags:[Fill,TypeChecked]}|
|24|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~1.2 {Motion:[-2d,0.1d,2d],Tags:[Fill,TypeChecked]}|
|25|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~-1.2 {Motion:[-2d,0.1d,-2d],Tags:[Fill,TypeChecked]}|
|26|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~-1.2 {Motion:[2d,0.1d,-2d],Tags:[Fill,TypeChecked]}|
|27|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209] ~ ~ ~ /kill @e[r=15,tag=FillOffset]|
|28|/clone -1920 ~2 ~ -1920 ~2 ~ -1920 ~2 ~ filtered force minecraft:command_block 5 ###周囲フィール予約|

<div class="datatable2c-end"></div>

### フィール予約部コマンド群

<span class="tagYellow">位置</span> (-1920,10,-149)

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @e[tag=Fill] ~ ~ ~ /playsound block.cloth.break master @a[r=32] ~ ~ ~ 2 0.6 0|
|2|/execute @e[tag=Fill] ~ ~ ~ /particle instantSpell ~ ~-1 ~ 1 0.1 1 0.1 10 force|
|3|/execute @e[tag=Fill] ~-1 ~-1 ~-1 /fill ~ ~ ~ ~2 ~ ~2 minecraft:wool 0 keep|
|4|/kill @e[tag=Fill]|

<div class="datatable2c-end"></div>

## 詳細

### フィール予約部

1. **`ActivatedSkill`が6200 ~ 6209**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. **対象プレイヤーの座標上に[FillOffset](#filloffset)を召喚**
   2. **`Sneaking`を持つ**対象エンティティから、**半径1~15m以内のすべてのプレイヤーの座標上に[FillOffset](#filloffset)を召喚**
   3. 対象プレイヤーから半径32m以内のすべてのプレイヤーに、効果音を鳴らす
   4. 対象プレイヤーから**半径15m以内の`FillOffset`を持つエンティティ**に対し、以下の事柄を実行
      1. 対象エンティティの座標上で、パーティクルを表示
      2. 対象エンティティを中心としたxz軸方向に**1辺3mの部分に白い羊毛を置く**
2. `ActivatedSkill`の値によって、プレイヤーから半径15m以内の`FillOffset`を持つエンティティから更にz軸方向に0.46875mの座標から、**特定の相対座標とそれに従った`Motion`を持つ[FillSnowball](#fillsnowball)を召喚** ([相対座標とMotion](#相対座標とmotion)を参照)
3. `ActivatedSkill`が6200 ~ 6209であるプレイヤーが存在するとき、そのプレイヤーから半径15m以内の`FillOffset`を持つすべてのエンティティをキル
4. [フィール実行部](#フィール実行部)を実行

### フィール実行部

- **`Fill`を持つすべてのエンティティ**に対し、以下の事柄を実行

1. 対象エンティティから半径32m以内のすべてのプレイヤーに対し、効果音を鳴らす
2. 対象エンティティの座標上にパーティクルを表示
3. **対象エンティティを中心とし、xz軸方向に1辺3mの部分に羊毛を置く**
4. 対象エンティティをキル

### 相対座標とMotion

- `ActivatedSkill`が6200であるとき

|相対座標|Motion|
|:-:|:-:|
|1.2,-0.5,1.2|0,0.1,0|
|-1.2,-0.5,1.2|0,0.1,0|
|-1.2,-0.5,-1.2|0,0.1,0|
|1.2,-0.5,-1.2|0,0.1,0|

- `ActivatedSkill`が6201であるとき

|相対座標|Motion|
|:-:|:-:|
|1.2,-0.5,0|1,0.1,0|
|0,-0.5,1.2|0,0.1,1|
|-1.2,-0.5,0|-1,0.1,0|
|0,-0.5,-1.2|0,0.1,-1|
|1.2,-0.5,1.2|1,0.1,1|
|-1.2,-0.5,1.2|-1,0.1,1|
|-1.2,-0.5,-1.2|-1,0.1,-1|
|1.2,-0.5,-1.2|1,0.1,-1|

- `ActivatedSkill`が6202 ~ 6209であるとき

|相対座標|Motion|
|:-:|:-:|
|1.2,-0.5,0|2,0.1,0|
|0,-0.5,1.2|0,0.1,2|
|-1.2,-0.5,0|-2,0.1,0|
|0,-0.5,-1.2|0,0.1,-2|
|1.2,-0.5,1.2|2,0.1,2|
|-1.2,-0.5,1.2|-2,0.1,2|
|-1.2,-0.5,-1.2|-2,0.1,-2|
|1.2,-0.5,-1.2|2,0.1,-2|

### FillOffset

```mcfunction
/summon ItemFrame ~ ~ ~ {Invulnerable:true,Facing:0b,Tags:[FillOffset]}
```

|-|-|
|Name|(None)|
|Type|ItemFrame|
|Tags|**FillOffset**|

### FillSnowball

```mcfunction
/summon Snowball ~ ~ ~ {Motion:[0d,0.1d,0d],Tags:[Fill,TypeChecked]}
```

|-|-|
|Name|(None)|
|Type|Snowball|
|Tags|**Fill**,TypeChecked|
|Motion|0,0.1,0|
