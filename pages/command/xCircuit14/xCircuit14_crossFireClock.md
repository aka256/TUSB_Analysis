---
title: クロスファイアークロック処理
tags: [コマンド,スキル,黒魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-20 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit14/xCircuit14_crossFireClock.html
datatable3c: true
summary: The Unusual SkyBlockでの黒魔導士のスキルの一つであるクロスファイアーの実行時の演出や、敵MOBへ満腹の付与、ターゲットへの攻撃処理などを行う。なお、満腹ステータスの付与は敵MOBに対するスキルのクールダウン処理のためのものであると考えられる。また、敵MOBが火炎耐性を持っているもしくはBurnableEnemy持っていないとき、ダメージを1/3にする。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,18,-137)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群14]({{site.baseurl}}/command/xCircuit14/xCircuit14_command.html)

The Unusual SkyBlockでの黒魔導士のスキルの一つであるクロスファイアーの実行時の演出や、敵MOBへ満腹の付与、ターゲットへの攻撃処理などを行う。なお、満腹ステータスの付与は敵MOBに対するスキルのクールダウン処理のためのものであると考えられる。また、敵MOBが火炎耐性を持っているもしくは`BurnableEnemy`持っていないとき、ダメージを1/3にする。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=CrossFire] ~ ~ ~ /playsound entity.blaze.shoot master @a[r=32] ~ ~100 ~ 0.1 1.2 0.1|リピート<br>動力が必要|
|2|/execute @e[tag=CrossFire] ~ ~ ~ /particle flame ~ ~ ~ 2.0 0.0 0.0 0.0 10 force|条件付き|
|3|/execute @e[tag=CrossFire] ~ ~ ~ /particle flame ~ ~ ~ 0.0 2.0 0.0 0.0 10 force|条件付き|
|4|/execute @e[tag=CrossFire] ~ ~ ~ /particle flame ~ ~ ~ 0.0 0.0 2.0 0.0 10 force|条件付き|
|5|/execute @e[tag=CrossFire] ~-7 ~ ~ /scoreboard players tag @e[dx=14,tag=Enemy] add Firing|
|6|/execute @e[tag=CrossFire] ~ ~-7 ~ /scoreboard players tag @e[dy=14,tag=Enemy] add Firing|
|7|/execute @e[tag=CrossFire] ~ ~ ~-7 /scoreboard players tag @e[dz=14,tag=Enemy] add Firing|
|8|/scoreboard players tag @e[tag=Firing] remove Firing {ActiveEffects:[{Id:23b,Amplifier:-1b,ShowParticles:false}]}|
|9|/effect @e[tag=Firing] minecraft:saturation 6 255 true|
|10|/fill ~3 ~1 ~ ~14 ~1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0|条件付き|
|11|/scoreboard players tag @e[tag=Firing] add Firing2 {Tags:[BurnableEnemy]}|条件付き|
|12|/scoreboard players tag @e[tag=Firing2] remove Firing2 {ActiveEffects:[{Id:12b}]}|条件付き|
|13|/scoreboard players tag @e[tag=Firing] add SkillTarget|動力が必要|
|14|/execute @e[tag=Firing] ~ ~ ~ /playsound entity.zombie.infect master @a[r=32] ~ ~ ~ 2 1.4 0|条件付き|
|15|/execute @e[tag=Firing] ~ ~ ~ /particle largesmoke ~ ~1 ~ 0.3 0.5 0.3 0.1 20 force|条件付き|
|16|/execute @e[tag=CrossFire1] ~ ~ ~ /execute @e[r=8,tag=Firing2] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"クロスファイアー",damage:30d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}|動力が必要|
|17|/execute @e[tag=CrossFire2] ~ ~ ~ /execute @e[r=8,tag=Firing2] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"クロスファイアー",damage:60d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}|動力が必要|
|18|/execute @e[tag=CrossFire3] ~ ~ ~ /execute @e[r=8,tag=Firing2] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"クロスファイアー",damage:90d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}|動力が必要|
|19|/scoreboard players tag @e[tag=Firing2] remove Firing|動力が必要|
|20|/scoreboard players tag @e[tag=Firing2] remove Firing2|動力が必要|
|21|/execute @e[tag=CrossFire1] ~ ~ ~ /execute @e[r=8,tag=Firing] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"クロスファイアー",damage:10d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}|動力が必要|
|22|/execute @e[tag=CrossFire2] ~ ~ ~ /execute @e[r=8,tag=Firing] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"クロスファイアー",damage:20d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}|動力が必要|
|23|/execute @e[tag=CrossFire3] ~ ~ ~ /execute @e[r=8,tag=Firing] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"クロスファイアー",damage:30d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}|動力が必要|
|24|/fill ~-11 ~1 ~ ~ ~1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|25|/scoreboard players tag @e[tag=Firing] remove Firing|条件付き|
|26|/execute @e[tag=CrossFire] ~ ~ ~ /fill ~-2 ~-2 ~-2 ~2 ~2 ~2 minecraft:water 0 replace minecraft:frosted_ice|
|27|/scoreboard players test #EntityCount Global * 0|
|28|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`CrossFire`を持つ**すべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
   2. 対象エンティティの数を`#EntityCount`の`Global`に代入
   3. 対象エンティティの座標上にパーティクルを表示
2. **`CrossFire`を持つすべてのエンティティから、xyz軸の正負方向にそれぞれ7mの位置にいる`Enemy`を持ったすべてのエンティティに、`Firing`を付与**
3. **`Firing`を持ち、[Firing削除対象タグ](#firing削除対象タグ)(満腹Lv.255を持つエンティティ)が付与されているすべてのエンティティから、`Firing`を削除**
4. **`Firing`を持つ**すべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティに**満腹Lv.255を6秒間付与**
   2. [クロスファイアー攻撃実行部](#クロスファイアー攻撃実行部)を起動
   3. **`Firing`と`BurnableEnemy`を持つすべてのエンティティに`Firing2`を付与**
   4. **`Firing`を持ち、火炎耐性が付与されているすべてのエンティティから`Firing2`を削除**
5. **[クロスファイアー攻撃実行部](#クロスファイアー攻撃実行部)が起動されているとき、それを実行**
5. **`CrossFire`を持つすべてのエンティティからxyz軸方向にそれぞれ2mの範囲内の薄氷を水に置き換える**
6. `#EntityCount`の`Global`が0以下であるとき、[クロスファイアークロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_crossFireClock.html)を停止

### クロスファイアー攻撃実行部

1. **`Firing`を持つ**すべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティに`SkillTarget`を付与
   2. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
   3. 対象エンティティの座標上にパーティクルを表示
2. **`CrossFire1`を持つ**すべてのエンティティから半径8m以内の**`Firing2`を持つ**すべてのエンティティから0.02m上に**[クロスファイアー4](#クロスファイアー4)を召喚**
3. **`CrossFire2`を持つ**すべてのエンティティから半径8m以内の**`Firing2`を持つ**すべてのエンティティから0.02m上に**[クロスファイアー5](#クロスファイアー5)を召喚**
4. **`CrossFire3`を持つ**すべてのエンティティから半径8m以内の**`Firing2`を持つ**すべてのエンティティから0.02m上に**[クロスファイアー6](#クロスファイアー6)を召喚**
5. `Firing2`を持つすべてのエンティティから`Firing`と`Firing2`を削除
6. **`CrossFire1`を持つ**すべてのエンティティから半径8m以内の**`Firing`を持つ**すべてのエンティティから0.02m上に**[クロスファイアー1](#クロスファイアー1)を召喚**
7. **`CrossFire2`を持つ**すべてのエンティティから半径8m以内の**`Firing`を持つ**すべてのエンティティから0.02m上に**[クロスファイアー2](#クロスファイアー2)を召喚**
8. **`CrossFire3`を持つ**すべてのエンティティから半径8m以内の**`Firing`を持つ**すべてのエンティティから0.02m上に**[クロスファイアー3](#クロスファイアー3)を召喚**
9. [クロスファイアー攻撃実行部](#クロスファイアー攻撃実行部)を停止し、以下の事柄を実行
   - `Firing`を持つすべてのエンティティから`Firing`を削除

### Firing削除対象タグ

```mcfunction
{
  ActiveEffects:
  [{
    Id:23b,
    Amplifier:-1b,
    ShowParticles:false
  }]
}
```

### クロスファイアー1

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”クロスファイアー”,damage:10d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}
```

|-|-|
|Name|クロスファイアー|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**10**|
|life|1200 (即消滅)|
|Fire|40|

### クロスファイアー2

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”クロスファイアー”,damage:20d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}
```

|-|-|
|Name|クロスファイアー|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**20**|
|life|1200 (即消滅)|
|Fire|40|

### クロスファイアー3

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”クロスファイアー”,damage:30d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}
```

|-|-|
|Name|クロスファイアー|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**30**|
|life|1200 (即消滅)|
|Fire|40|

### クロスファイアー4

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”クロスファイアー”,damage:30d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}
```

|-|-|
|Name|クロスファイアー|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**30**|
|life|1200 (即消滅)|
|Fire|40|

### クロスファイアー5

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”クロスファイアー”,damage:60d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}
```

|-|-|
|Name|クロスファイアー|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**60**|
|life|1200 (即消滅)|
|Fire|40|

### クロスファイアー6

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”クロスファイアー”,damage:90d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}
```

|-|-|
|Name|クロスファイアー|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**90**|
|life|1200 (即消滅)|
|Fire|40|
