---
title: マジックブロック削除
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_magicBlockDelete.html
datatable3c: true
summary: 召喚士のブロック設置系スキル(サモンB：オブシディアン、サモンB：エンダーチェスト,ぷちブラック)のブロック削除処理や、ブロックの周囲での採掘速度低下処理、ぷちブラックのテレポートと攻撃処理などを行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,17,-146)

<span class="tagBlack">呼び出し元</span> [サモンB：オブシディアン実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonObsidian.html), [サモンB：エンダーチェスト実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonEnderChest.html), [ぷちブラック実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_puchiBlack.html)

召喚士のブロック設置系スキル(サモンB：オブシディアン、サモンB：エンダーチェスト,ぷちブラック)のブロック削除処理や、ブロックの周囲での採掘速度低下処理、ぷちブラックのテレポートと攻撃処理などを行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @e[tag=MagicBlock] add SetAir {Age:0}|リピート|
|2|/scoreboard players operation #MagicBlockCount Global -= #EntityCount Global|条件付き|
|3|/execute @e[tag=SetAir] ~ ~ ~ /setblock ~ ~ ~ minecraft:air|条件付き|
|4|/scoreboard players test #MagicBlockCount Global * 0|
|5|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|
|6|/execute @e[tag=MagicBlock] ~ ~ ~ /particle dragonbreath ~ ~ ~ 0.5 0.5 0.5 0.1 1 force|
|7|/execute @e[tag=MagicBlock] ~ ~ ~ /effect @a[r=7] minecraft:mining_fatigue 1 126|条件付き|
|8|/scoreboard players tag @e[tag=PrePetitBlack] add PetitBlack {Age:0}|
|9|/execute @e[tag=PrePetitBlack] ~ ~ ~ /execute @e[r=0,c=1,tag=PetitBlack] ~ ~ ~ /playsound block.portal.ambient master @a[r=64] ~ ~100 ~ 10 0.5 0.00001|
|10|/scoreboard players tag @e[tag=PetitBlack] remove PrePetitBlack|条件付き|
|11|/execute @e[tag=PetitBlack] ~ ~ ~ /playsound entity.shulker.teleport master @a[r=32] ~ ~ ~ 0.5 0.5 0|
|12|/execute @e[tag=PetitBlack] ~ ~ ~ /particle portal ~ ~-0.5 ~ 0 0 0 3 20 force|条件付き|
|13|/execute @e[tag=PetitBlack] ~ ~ ~ /summon FallingSand ~ ~0.03 ~ {CustomName:"重力",Block:"minecraft:piston_extension",Time:1,DropItem:false,HurtEntities:true,FallHurtMax:18,FallHurtAmount:18f,FallDistance:10f,Tags:[SystemEntity]}|条件付き|
|14|/execute @e[tag=PetitBlack] ~ ~ ~ /scoreboard players tag @e[r=10] add Inhale {Attributes:[{Name:generic.maxHealth}],Invulnerable:false}|条件付き|
|15|/execute @e[tag=PetitBlack] ~ ~ ~ /tp @e[r=10,tag=Inhale] @e[r=0,tag=PetitBlack,c=1]|条件付き|
|16|/tp @e[tag=PetitBlack] ~ ~ ~ ~6 ~|条件付き|
|17|/scoreboard players tag @e[tag=Inhale] remove Inhale|条件付き|

<div class="datatable3c-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには、以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`Age`が0である`MagicBlock`を持ったエンティティ**が存在するとき、以下の事柄を実行
   1. 対象エンティティに`SetAir`を付与
   2. `SetAir`が付与された数を`#EntityCount`の`Global`に代入
   3. `#MagicBlockCount`の`Global`から`#EnitytCount`の`Global`を引く
   4. `SetAir`を持つエンティティの座標上に**空気ブロックを設置**
2. `#MagicBlockCount`の`Global`が0以上であるとき、[マジックブロック削除]({{site.baseurl}}/command/xCircuit11/xCircuit11_magicBlockDelete.html)を停止
3. `MagicBlock`を持つエンティティに対し、以下の事柄を実行
   1. 対象エンティティの座標上に、パーティクルを表示
   2. 対象エンティティから半径7m以内のすべてのプレイヤーに、**採掘速度低下Lv.127を1秒間付与**
4. **`Age`が0である`PrePetitBlock`を持つエンティティに`PetitBlock`を付与**
5. `PrePetitBlock`を持つエンティティから半径0m以内の`PetitBlock`を持つエンティティから、更に半径64m以内のすべてのプレイヤーに効果音を鳴らし、実行で来たら`PrePetitBlock`を削除
6. **`PetitBlock`を持つすべてのエンティティから半径32m以内にプレイヤーが存在するとき**、`PetitBlock`を持つエンティティに対し以下の事柄を実行
   1. 対象エンティティから半径32m以内のすべてのプレイヤーに、効果音を鳴らす
   2. 対象エンティティの座標上に、パーティクルを表示
   3. 対象エンティティの座標上に、**[重力](#重力)を召喚**
   4. 対象エンティティから半径10m以内の`{Attributes:[{Name:generic.maxHealth}],Invulnerable:false}`を持ったエンティティに`Inhale`を付与
   5. 対象エンティティから**半径10m以内の`Inhale`を持ったエンティティを、対象エンティティへワープさせる**
   6. 対象エンティティの視線をを6度右へ回転させる
   7. `Inhale`を持ったエンティティから`Inhale`を削除

### 重力

```mcfunction
/summon FallingSand ~ ~0.03 ~ {CustomName:”重力”,Block:”minecraft:piston_extension”,Time:1,DropItem:false,HurtEntities:true,FallHurtMax:18,FallHurtAmount:18f,FallDistance:10f,Tags:[SystemEntity]}
```

|-|-|
|Name|重力|
|Type|FallingSand (piston_extension)|
|Tags|SystemEntity|
|HurtEntities|true|
|FallHurtMax|**18**|
