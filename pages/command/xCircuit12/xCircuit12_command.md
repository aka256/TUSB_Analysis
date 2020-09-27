---
title: 毎tick実行するコマンド群12
tags: [コマンド,剣士,スキル]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-27 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit12/xCircuit12_command.html
datatable4c: true
summary: UpdateRandomが付与されたプレイヤーの乱数の更新やNearProjectile処理とProjectile処理の実行を行う。流し斬り実行部では、演出処理や近くのエンティティに対する弱体化の付与などを行う。真空斬り実行部では、ファイアボールへのタグの付け替えや真空斬りクロック処理の実行などを行う。魔人斬り実行部では、演出処理やエンティティへのダメージの付与、エンティティの武器の空気ブロックへの変更などを行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,4,-144)

<span class="tagBlack">呼び出し元</span> [初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html), [村人像]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_mainclockProcessing.html)

<span class="tagBlue">分岐先</span> [乱数更新]({{site.baseurl}}/command/xCircuit12/xCircuit12_randomUpdate.html), [NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html), [Projectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_projectileProcessing.html), [真空斬りクロック処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_aerialSlashClock.html)

`UpdateRandom`が付与されたプレイヤーの乱数の更新や[NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html)と[Projectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_projectileProcessing.html)の実行を行う。
[流し斬り実行部](#流し斬り実行部)では、演出処理や近くのエンティティに対する弱体化の付与などを行う。
[真空斬り実行部](#真空斬り実行部)では、ファイアボールへのタグの付け替えや[真空斬りクロック処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_aerialSlashClock.html)の実行などを行う。
[魔人斬り実行部](#魔人斬り実行部)では、演出処理やエンティティへのダメージの付与、エンティティの武器の空気ブロックへの変更などを行う。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|状態|コメント|
|:-:|-|-|-|
|1|/execute @a[tag=UpdateRandom] ~ ~ ~ /scoreboard players operation @a[c=1] Random = @a[c=1] RndMWC||乱数取得|
|2|/clone -1920 8 ~ -1920 8 ~ -1920 8 ~ filtered force minecraft:command_block 5 ###MWC更新|条件付き|
|3|/scoreboard players test #ProjectileUpdate Global 2 *||投擲物ヒット判定<br>クロック開始処理|
|4|/execute 0-0-1-0-1 ~ 10 -186 /clone ~ ~ ~ ~ ~2 ~ ~ ~ ~ filtered force minecraft:command_block 5 ###投擲ヒット判定クロック|条件付き|
|5|/execute @a[score_ActivatedSkill_min=1200,score_ActivatedSkill=1209] ~ ~ ~ /execute @e[r=5,tag=Hit,c=1] ~ ~ ~ /playsound entity.irongolem.death master @a[r=16] ~ ~ ~ 1 2 0|動力が必要|剣士<br>流し斬り|
|6|/execute @a[score_ActivatedSkill_min=1200,score_ActivatedSkill=1209] ~ ~ ~ /execute @e[r=5,tag=Hit,c=1] ~ ~ ~ /particle witchMagic ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|条件付き|
|7|/execute @a[score_ActivatedSkill_min=1200,score_ActivatedSkill=1200] ~ ~ ~ /effect @e[r=5,tag=Hit] minecraft:weakness 20 1 false|動力が必要|
|8|/execute @a[score_ActivatedSkill_min=1201,score_ActivatedSkill=1201] ~ ~ ~ /effect @e[r=5,tag=Hit] minecraft:weakness 20 3 false|動力が必要|
|9|/execute @a[score_ActivatedSkill_min=1202,score_ActivatedSkill=1209] ~ ~ ~ /effect @e[r=5,tag=Hit] minecraft:weakness 20 6 false|動力が必要|
|10|/fill ~-5 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|11|/execute @a[score_ActivatedSkill_min=1220,score_ActivatedSkill=1229] ~ ~2 ~ /entitydata @e[r=2,tag=AerialTransition,type=Fireball] {Tags:[AerialBlast,Projectile,FlyingObject,Driftable,TypeChecked]}|動力が必要|剣士<br>真空斬り|
|12|/execute @a[score_ActivatedSkill_min=1220,score_ActivatedSkill=1229] ~ ~2 ~ /scoreboard players operation @e[r=2,tag=AerialBlast,type=Fireball] ProjectileSkill = @a[c=1] ActivatedSkill|条件付き|
|13|/fill -1921 8 ~1 -1921 8 ~1 minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###真空斬りクロック|条件付き|
|14|/fill ~-3 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|15|/scoreboard players operation @a[score_ActivatedSkill_min=1240,score_ActivatedSkill=1249] Random %= #3 Const|動力が必要|剣士<br>魔人斬り|
|16|/execute @a[score_ActivatedSkill_min=1240,score_ActivatedSkill=1249] ~ ~1.52 ~ /execute @e[r=5,tag=Hit,c=1] ~ ~ ~ /playsound entity.zombie.break_door_wood master @a[r=16] ~ ~ ~ 0.4 0.8 0|条件付き|
|17|/execute @a[score_ActivatedSkill_min=1240,score_ActivatedSkill=1249] ~ ~1.52 ~ /execute @e[r=5,tag=Hit,c=1] ~ ~ ~ /particle iconcrack ~ ~1.5 ~ 0 0 0 0.2 30 force @a[r=64] 433|条件付き|
|18|/execute @a[score_ActivatedSkill_min=1240,score_ActivatedSkill=1249] ~ ~1.52 ~ /scoreboard players tag @e[r=5,tag=Hit,c=1] add SkillTarget|条件付き|
|19|/effect @a[score_ActivatedSkill_min=1240,score_ActivatedSkill=1249] minecraft:mining_fatigue 2 127 true|条件付き|
|20|/execute @a[score_ActivatedSkill_min=1240,score_ActivatedSkill=1240] ~ ~1.52 ~ /execute @e[r=5,tag=Hit,c=1] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"魔神斬り",damage:200d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}|動力が必要|
|21|/execute @a[score_ActivatedSkill_min=1240,score_ActivatedSkill=1240,score_Random=0] ~ ~1.52 ~ /replaceitem entity @e[r=5,tag=Hit,c=1] slot.weapon minecraft:air|条件付き|
|22|/execute @a[score_ActivatedSkill_min=1241,score_ActivatedSkill=1249] ~ ~1.52 ~ /execute @e[r=5,tag=Hit,c=1] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"魔神斬り",damage:400d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}|動力が必要|
|23|/execute @a[score_ActivatedSkill_min=1241,score_ActivatedSkill=1249,score_Random=1] ~ ~1.52 ~ /replaceitem entity @e[r=5,tag=Hit,c=1] slot.weapon minecraft:air|条件付き|
|24|/fill ~-9 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|

<div class="datatable4c-end"></div>

## 詳細

1. **`UpdateRandom`を持つプレイヤーが存在するとき**、このプレイヤーに対し以下の事柄を実行
   1. 対象プレイヤーの`Random`に`RndMWC`を代入
   2. [乱数更新]({{site.baseurl}}/command/xCircuit12/xCircuit12_randomUpdate.html)を実行
2. **`#ProjectileUpdate`の`Global`が2以上であるとき**、[NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html)と[Projectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_projectileProcessing.html)をそれぞれ実行

### 流し斬り実行部

- [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)によって起動される

1. **`ActivatedSkill`が1200 ~ 1209**であるすべてのプレイヤーから**半径5m以内の最も近い`Hit`を持ったエンティティ1体に対し**、以下の事柄を実行
   1. 対象エンティティから半径16m以内のすべてのプレイヤーに、効果音を鳴らす
   2. 対象エンティティの座標上にパーティクルを表示
2. **`ActivatedSkill`が1200**でであるすべてのプレイヤーから**半径5m以内の最も近い`Hit`を持ったエンティティ1体に、弱体化Lv.2を20秒間付与**
3. **`ActivatedSkill`が1201**でであるすべてのプレイヤーから**半径5m以内の最も近い`Hit`を持ったエンティティ1体に、弱体化Lv.4を20秒間付与**
4. **`ActivatedSkill`が1202 ~ 1209**でであるすべてのプレイヤーから**半径5m以内の最も近い`Hit`を持ったエンティティ1体に、弱体化Lv.7を20秒間付与**
5. [流し斬り実行部](#流し斬り実行部)を停止

### 真空斬り実行部

- [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)によって起動される

1. **`ActivatedSkill`が1220 ~ 1229**であるすべてのプレイヤーの2m上を中心とした**半径2m以内の`AerialTransition`を持ったファイアーボールが存在するとき**、そのエンティティに対し以下の事柄を実行
   1. 対象エンティティのTagsを**`AerialBlast`,`Projectile`,`FlyingObject`,`Driftable`**,`TypeChecked`に書き換える
   2. 対象エンティティの`ProjectileSkill`に、最も近いプレイヤーの`AcitvatedSkill`を代入
   3. [真空斬りクロック処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_aerialSlashClock.html)を実行
2. [真空斬り実行部](#真空斬り実行部)を停止

### 魔人斬り実行部

- [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)によって起動される

1. **`ActivatedSkill`が1240 ~ 1249**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーの`Random`を \\(Random = Random\mod 3\\) と計算する
   2. 対象プレイヤーから**半径5m以内の最も近い`Hit`を持ったエンティティ1体に対し**、以下の事柄を実行
      1. 対象エンティティから半径16m以内のすべてのプレイヤーに、効果音を鳴らす
      2. 対象エンティティから半径64m以内のすべてのプレイヤーの座標上に、パーティクルを表示
      3. **対象エンティティに`SkillTarget`を付与**
   3. **対象プレイヤーに採掘速度低下Lv.128を2秒間付与**
2. **`ActivatedSkill`が1240**であるすべてのプレイヤー(対象プレイヤー)から**1.52m上を中心とした、半径5m以内の最も近い`Hit`を持ったエンティティ1体に対し**、以下の事柄を実行
   1. 対象エンティティから0.02m上に**[魔人斬り1](#魔人斬り1)を召喚**
   2. **対象プレイヤーの`Random`が0以下であるとき、対象エンティティの武器を空気ブロックに変更** (約33.3%の確率)
3. **`ActivatedSkill`が1241 ~ 1249**であるすべてのプレイヤー(対象プレイヤー)から**1.52m上を中心とした、半径5m以内の最も近い`Hit`を持ったエンティティ1体に対し**、以下の事柄を実行
   1. 対象エンティティから0.02m上に**[魔人斬り2](#魔人斬り2)を召喚**
   2. **対象プレイヤーの`Random`が1以下であるとき、対象エンティティの武器を空気ブロックに変更** (約66.7%の確率)
4. [魔人斬り実行部](#魔人斬り実行部)を停止

### 魔人斬り1

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”魔神斬り”,damage:200d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}
```

|-|-|
|Name|魔人斬り|
|Type|Arrow|
|Tags|Garbage|
|damage|**200**|
|life|1200 (即消滅)|

### 魔人斬り2

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”魔神斬り”,damage:400d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}
```

|-|-|
|Name|魔人斬り|
|Type|Arrow|
|Tags|Garbage|
|damage|**400**|
|life|1200 (即消滅)|
