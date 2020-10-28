---
title: 手裏剣クロック処理
tags: [コマンド,スキル,忍者,スキル]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-10-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit13/xCircuit13_syurikenClock.html
datatable3c: true
summary: 
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,11,-143)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)

忍者のスキルの1つである手裏剣の攻撃処理や演出などを行う。スキルの攻撃力をスキルのレベルと、スキル実行者が投げてから0.5秒経った雪玉の個数によって変動させる。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @e[tag=SurikenIn10] remove SurikenIn10 {PortalCooldown:0}|リピート<br>動力が必要|
|2|/scoreboard players test #EntityCount Global 2 *|動力が必要|
|3|/execute @e[tag=ProjectileHit] ~ ~ ~ /scoreboard players add @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2200,score_PotentialSkill=2208,c=1] PotentialSkill 1|条件付き|
|4|/scoreboard players test #EntityCount Global 4 *|条件付き|
|5|/execute @e[tag=ProjectileHit] ~ ~ ~ /scoreboard players add @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2200,score_PotentialSkill=2208,c=1] PotentialSkill 1|条件付き|
|6|/execute @e[tag=ProjectileHit] ~ ~ ~ /scoreboard players tag @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2200,score_PotentialSkill=2209,c=1] add SkillTarget|動力が必要|
|7|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2200,score_PotentialSkill=2209,c=1] ~ ~ ~ /playsound entity.endermite.step master @a[r=32] ~ ~ ~ 2 0.7 1|条件付き|
|8|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2200,score_PotentialSkill=2209,c=1] ~ ~ ~ /particle iconcrack ~ ~1 ~ 0.2 0.3 0.2 0.25 60 force @e[type=Player,r=80] 372|条件付き|
|9|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2200,score_PotentialSkill=2200,c=1] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"スリケン",damage:30d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|動力が必要|
|10|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2201,score_PotentialSkill=2201,c=1] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"スリケン",damage:45d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|動力が必要|
|11|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2202,score_PotentialSkill=2202,c=1] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"スリケン",damage:60d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|動力が必要|
|12|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2203,score_PotentialSkill=2203,c=1] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"スリケン",damage:75d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|動力が必要|
|13|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2204,score_PotentialSkill=2204,c=1] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"スリケン",damage:105d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|動力が必要|
|14|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2205,score_PotentialSkill=2209,c=1] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"スリケン",damage:150d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|動力が必要|
|15|/fill ~-13 ~1 ~ ~ ~1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|16|/execute @e[tag=Suriken] ~ ~ ~ /playsound entity.witch.throw master @a[r=16] ~ ~ ~ 0.8 1.2 0|
|17|/execute @e[tag=Suriken] ~ ~ ~ /playsound entity.mooshroom.shear master @a[r=32] ~ ~ ~ 1 1.2 0.1|
|18|/execute @e[tag=Suriken] ~ ~ ~ /particle sweepAttack ~ ~-0.3 ~ 0 0 0 0 1 force|条件付き|
|19|/scoreboard players test #EntityCount Global * 0|
|20|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`SurikenIn10`を持ち、`PortalCooldown`が0である**すべてのエンティティから**`SurikenIn10`を削除し、その数を`#EntityCount`の`Global`に代入**
2. [手裏剣HIT処理部](#手裏剣hit処理部)が起動されている場合、それを実行
3. `Suriken`を持つすべてのエンティティから半径16m以内のすべてのプレイヤーに効果音を鳴らす
4. `Suriken`を持つすべてのエンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らし、実行出来たら以下の事柄を実行
   - `Suriken`を持つすべてのエンティティの座標上にパーティクルを表示
5. `#EntityCount`の`Global`が0以下であるとき、[手裏剣クロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_syurikenClock.html)を停止

### 手裏剣HIT処理部

- [NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html)で起動される

1. **`#EntityCount`の`Global`が2以上**であるとき、以下の事柄を実行
   1. `ProjectileHit`を持つエンティティと同座標上にあり、**`ProjectileHit`を持ち、`PotentialSkill`が2200 ~ 2208であるエンティティの`PotnetialSkill`に1を足す**
   2. **`#EntityCount`の`Global`が4以上**であるとき、以下の事柄を実行
      - `ProjectileHit`を持つエンティティと同座標上にあり、**`ProjectileHit`を持ち、`PotentialSkill`が2200 ~ 2208であるエンティティの`PotnetialSkill`に1を足す**
2. `ProjectileHit`を持つエンティティと同座標上にあり、**`ProjectileHit`を持ち、`PotentialSkill`が2200 ~ 2209である**エンティティが存在するとき、以下の事柄を実行
   1. 対象エンティティに**`SkillTarget`を付与**
   2. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
   3. 対象エンティティから半径80m以内のすべてのプレイヤーにパーティクルを表示
3. **`ProjectileHit`を持つエンティティと同座標上にあり、`ProjectileHit`を持つエンティティの座標上に、`PotentialSkill`の値に応じた`damage`を持つ[スリケン](#スリケン)を召喚**([手裏剣の攻撃力について](#手裏剣の攻撃力について)を参照)
4. [手裏剣HIT処理部](#手裏剣hit処理部)を停止

### 手裏剣の攻撃力について

手裏剣の攻撃力は`PotentialSkill`の値によって変動する。

|PotentialSkill|damage|スリケンの種類|
|:-:|:-:|:-:|
|2200|30|[スリケン1](#スリケン1)|
|2201|45|[スリケン2](#スリケン2)|
|2202|60|[スリケン3](#スリケン3)|
|2203|75|[スリケン4](#スリケン4)|
|2204|105|[スリケン5](#スリケン5)|
|2205 ~ 2209|150|[スリケン6](#スリケン6)|

まず、`PotentialSkill`は[毎tick実行するコマンド群13の手裏剣実行部]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html#手裏剣実行部)にて`ActivatedSkill`の値が代入され、スキルレベルに合わせてで2200 ~ 2203と変動する。次に、スキル実行者が投げて0.5秒経った雪玉の個数(どこかしらに着弾してしまった雪玉は含まれない)が2 ~ 3個であれば+1、4個以上であれば+2が`PotentialSkill`に足される。
例えばスキルレベルがLv.1でも投げてから0.5秒経った雪玉が4個であれば`PotentialSkill`が2204となり、75ダメージ与えることができる。
**要は、遠距離から雪玉を投げまくればそれだけ攻撃力が上がるということである。**

### スリケン

[スリケン1](#スリケン1) ~ [スリケン6](#スリケン6)は`damage`のみしか変化しない。

<span class="expandButton" onClick="openCloseBE(`openHere1-begin`)">+</span>展開

<div class="openHere-begin openHere1-begin"></div>

#### スリケン1

|-|-|
|Name|スリケン|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**30**|
|life|1200(即消滅)|

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”スリケン”,damage:30d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

#### スリケン2

|-|-|
|Name|スリケン|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**45**|
|life|1200(即消滅)|

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”スリケン”,damage:45d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

#### スリケン3

|-|-|
|Name|スリケン|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**60**|
|life|1200(即消滅)|

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”スリケン”,damage:60d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

#### スリケン4

|-|-|
|Name|スリケン|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**75**|
|life|1200(即消滅)|

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”スリケン”,damage:75d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

#### スリケン5

|-|-|
|Name|スリケン|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**105**|
|life|1200(即消滅)|

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”スリケン”,damage:105d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

#### スリケン6

|-|-|
|Name|スリケン|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**150**|
|life|1200(即消滅)|

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”スリケン”,damage:150d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

<div class="openHere-end openHere1-end"></div>
