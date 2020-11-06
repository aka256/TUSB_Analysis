---
title: チェインアロークロック処理
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-06 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit13/xCircuit13_chainArrowClock.html
datatable3c: true
summary: 狩人のスキルの一つであるチェインアロー演出やPotentialSkillの値に応じた半径以内への攻撃処理などを行う。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,13,-141)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)

狩人のスキルの一つであるチェインアロー演出や`PotentialSkill`の値に応じた半径以内への攻撃処理などを行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=ChainArrow] ~ ~ ~ /playsound entity.mooshroom.shear master @a[r=32] ~ ~ ~ 0.2 1.2 0|リピート<br>動力が必要|
|2|/execute @e[tag=ChainArrow] ~ ~ ~ /particle largeexplode ~ ~-0.3 ~ 0 0 0 0 1 force|
|3|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3210,score_PotentialSkill=3210,c=1] ~ ~ ~ /scoreboard players tag @e[r=5,tag=Enemy] add SkillTarget|動力が必要|
|4|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3210,score_PotentialSkill=3210,c=1] ~ ~ ~ /execute @e[r=5,tag=SkillTarget] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"魔法の矢",damage:40d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,ChainedArrow,TypeChecked]}|条件付き|
|5|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3211,score_PotentialSkill=3211,c=1] ~ ~ ~ /scoreboard players tag @e[r=15,tag=Enemy] add SkillTarget|動力が必要|
|6|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3211,score_PotentialSkill=3211,c=1] ~ ~ ~ /execute @e[r=15,tag=SkillTarget] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"魔法の矢",damage:40d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,ChainedArrow,TypeChecked]}|条件付き|
|7|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3212,score_PotentialSkill=3219,c=1] ~ ~ ~ /scoreboard players tag @e[r=25,tag=Enemy] add SkillTarget|動力が必要|
|8|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3212,score_PotentialSkill=3219,c=1] ~ ~ ~ /execute @e[r=25,tag=SkillTarget] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"魔法の矢",damage:40d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,ChainedArrow,TypeChecked]}|条件付き|
|9|/fill ~-6 ~1 ~ ~ ~1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|10|/execute @r[type=!Player,tag=ChainedArrow,c=10] ~ ~ ~ /playsound minecraft:entity.arrow.hit master @a[r=32] ~ ~ ~ 2 0.8 0.2|条件付き|
|11|/execute @r[type=!Player,tag=ChainedArrow,c=10] ~ ~ ~ /particle crit ~ ~1 ~ 1 1 1 0.1 30 force|条件付き|
|12|/scoreboard players test #EntityCount Global * 0|
|13|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. `ChainArrow`を持つすべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径16m以内のすべてのプレイヤーに効果音を鳴らす
   2. 対象エンティティの数を`#EntityCount`の`Global`に代入
   3. 対象エンティティの座標上にパーティクルを表示
2. [チェインアローHIT処理部](#チェインアローhit処理部)が起動しているとき、それを実行
3. **`#EntityCount`の`Global`が0以下であるとき**、[チェインアロークロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_chainArrowClock.html)を停止

### チェインアローHIT処理部

- [NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html)で起動される

1. `ProjectileHit`を持つすべてのエンティティと同座標上に、`ProjectileHit`を持ち`PotentialSkill`が特定の値であるエンティティを1体選び、そこから決まった半径以内の`Enemy`を持ったすべてのエンティティに`SkillTarget`を付与
2. **`ProjectileHit`を持つすべてのエンティティと同座標上に、`ProjectileHit`を持ち`PotentialSkill`が特定の値であるエンティティを1体選び、そこから決まった半径以内の`SkillTarget`を持ったすべてのエンティティから0.02m上に、[魔法の矢](#魔法の矢)を召喚**([PotentialSkillと効果半径](#potentialskillと効果半径)を参照)
3. [チェインアローHIT処理部](#チェインアローhit処理部)を停止

### PotentialSkillと効果半径

|ProjectileHit|半径[m]|
|:-:|:-:|
|3210|5|
|3211|15|
|3212 ~ 3219|25|

### 魔法の矢

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:"魔法の矢",damage:40d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,ChainedArrow,TypeChecked]}
```

|-|-|
|Name|魔法の矢|
|Type|Arrow|
|Tags|Garbage,ChainedArrow,TypeChecked|
|damage|**40**|
|life|1200 (即消滅)|
