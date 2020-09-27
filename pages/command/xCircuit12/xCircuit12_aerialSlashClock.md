---
title: 真空斬りクロック処理
tags: [コマンド,剣士,スキル]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-27 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit12/xCircuit12_aerialSlashClock.html
datatable3cnp: true
summary: 真空斬りの演出処理やPotentialSkillの値に応じたエンティティへのダメージの付与などを行う。なお、真空斬りの周囲への処理は毎tick実行するコマンド群5と真空斬り使用判定で行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-143)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群12]({{site.baseurl}}/command/xCircuit12/xCircuit12_command.html)

真空斬りの演出処理や`PotentialSkill`の値に応じたエンティティへのダメージの付与などを行う。なお、真空斬りの周囲への処理は[毎tick実行するコマンド群5]({{site.baseurl}}/command/xCircuit5/xCircuit5_command.html)と[真空斬り使用判定]({{site.baseurl}}/command/xCircuit5/xCircuit5_aerialSlashUseJudgment.html)で行われる。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=AerialBlast] ~ ~ ~ /playsound entity.wither.shoot master @a[r=16] ~ ~ ~ 0.5 2 0.1|動力が必要|
|2|/execute @e[tag=AerialBlast] ~ ~ ~ /particle largeexplode ~ ~1 ~ 0 0 0 0 1 force|条件付き|
|3|/execute @e[tag=ProjectileHit] ~ ~ ~ /scoreboard players tag @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=1220,score_PotentialSkill=1229,c=1] add SkillTarget|動力が必要|
|4|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=1220,score_PotentialSkill=1220,c=1] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"真空斬り",damage:50d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|動力が必要|
|5|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=1221,score_PotentialSkill=1221,c=1] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"真空斬り",damage:100d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|動力が必要|
|6|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=1222,score_PotentialSkill=1229,c=1] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"真空斬り",damage:150d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|動力が必要|
|7|/fill ~-4 ~1 ~ ~ ~1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|8|/scoreboard players test #EntityCount Global * 0|
|9|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3cnp-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`AerialBlast`を持つ**すべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径16m以内のすべてのプレイヤーに、効果音を鳴らす
   2. **対象エンティティの数を`#EntityCount`の`Global`に代入**
   3. 対象エンティティの座標上にパーティクルを表示
2. [真空斬りHIT処理部](#真空斬りhit処理部)が起動されているとき、それを実行
3. `#EntityCount`の`Global`が0以下であるとき、[真空斬りクロック処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_aerialSlashClock.html)を停止

### 真空斬りHIT処理部

- [NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html)により起動される

1. **`ProjectileHit`を持ち、`PotentialSkill`が1220 ~ 1229であるエンティティに`SkillTarget`を付与**
2. `ProjectileHit`を持ち、**`PotentialSkill`が1220**であるエンティティの座標から0.02m上に**[真空斬り1](#真空斬り1)を召喚**
3. `ProjectileHit`を持ち、**`PotentialSkill`が1221**であるエンティティの座標から0.02m上に**[真空斬り2](#真空斬り2)を召喚**
4. `ProjectileHit`を持ち、**`PotentialSkill`が1222 ~ 1229**であるエンティティの座標から0.02m上に**[真空斬り3](#真空斬り3)を召喚**

### 真空斬り1

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”真空斬り”,damage:50d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|真空斬り|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|life|1200 (即消滅)|
|damage|**50**|

### 真空斬り2

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”真空斬り”,damage:100d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|真空斬り|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|life|1200 (即消滅)|
|damage|**100**|

### 真空斬り3

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”真空斬り”,damage:150d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|真空斬り|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|life|1200 (即消滅)|
|damage|**150**|
