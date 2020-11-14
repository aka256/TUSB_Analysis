---
title: フラワーギフトクロック処理
tags: [コマンド,スキル,白魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-14 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit14/xCircuit14_flowerGiftClock.html
datatable3c: true
summary: The Unusual SkyBlockでの白魔導士のスキルの一つであるフラワーギフトの実行時の演出や、タグにより異なるフラワーギフト用ポピーを`Enemy`のオフハンドに付与する。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,11,-138)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群14]({{site.baseurl}}/command/xCircuit14/xCircuit14_command.html)

The Unusual SkyBlockでの白魔導士のスキルの一つであるフラワーギフトの実行時の演出や、タグにより異なるフラワーギフト用ポピーを`Enemy`のオフハンドに付与する。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=FlowerGift] ~ ~ ~ /playsound entity.shulker_bullet.hit master @a[r=32] ~ ~ ~ 2 2 0|リピート<br>動力が必要|
|2|/execute @e[tag=FlowerGift] ~ ~ ~ /particle reddust ~ ~ ~ 1 1 1 1 5 force|条件付き|
|3|/execute @e[tag=FlowerGift] ~ ~ ~ /scoreboard players tag @e[r=5,tag=Enemy] add Flowering|
|4|/fill ~1 ~1 ~ ~4 ~1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0|条件付き|
|5|/execute @e[tag=FlowerGift1] ~ ~ ~ /replaceitem entity @e[r=5,tag=Flowering] slot.weapon.offhand minecraft:red_flower 1 0 {AttributeModifiers:[{Name:"FlowerGift1",AttributeName:"generic.followRange",Operation:2,Amount:-0.5d,UUIDMost:987362l,UUIDLeast:1l,Slot:"offhand"}]}|動力が必要|
|6|/execute @e[tag=FlowerGift2] ~ ~ ~ /replaceitem entity @e[r=5,tag=Flowering] slot.weapon.offhand minecraft:red_flower 1 0 {AttributeModifiers:[{Name:"FlowerGift2",AttributeName:"generic.followRange",Operation:2,Amount:-0.65d,UUIDMost:987362l,UUIDLeast:2l,Slot:"offhand"}]}|動力が必要|
|7|/execute @e[tag=FlowerGift3] ~ ~ ~ /replaceitem entity @e[r=5,tag=Flowering] slot.weapon.offhand minecraft:red_flower 1 0 {AttributeModifiers:[{Name:"FlowerGift3",AttributeName:"generic.followRange",Operation:2,Amount:-0.8d,UUIDMost:987362l,UUIDLeast:3l,Slot:"offhand"}]}|動力が必要|
|8|/fill ~-3 ~1 ~ ~ ~1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|9|/scoreboard players tag @e[tag=Flowering] remove Flowering|条件付き|
|10|/scoreboard players test #EntityCount Global * 0|
|11|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`FlowerGift`を持つ**すべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
   2. 対象エンティティの数を`#EntityCount`の`Global`に代入
   3. 対象エンティティの座標上にパーティクルを表示
2. **`FlowerGift`を持つすべてのエンティティから半径5m以内の`Enemy`を持った**すべてのエンティティに対し、以下の事柄を実行
   1. **対象エンティティに`Flowering`を付与**
   2. [フラワーギフト用ポピー付与部](#フラワーギフト用ポピー付与部)を実行
3. `Flowering`を持つすべてのエンティティから`Flowering`を削除
4. `#EntityCount`の`Global`が0以下であるとき、[フラワーギフトクロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_flowerGiftClock.html)を停止

### フラワーギフト用ポピー付与部

1. **`FlowerGift1`を持つ**すべてのエンティティから半径5m以内の`Flowering`を持つすべてのエンティティに対し、**[フラワーギフト用ポピー1](#フラワーギフト用ポピー1)をオフハンドに持たせる**
2. **`FlowerGift2`を持つ**すべてのエンティティから半径5m以内の`Flowering`を持つすべてのエンティティに対し、**[フラワーギフト用ポピー2](#フラワーギフト用ポピー2)をオフハンドに持たせる**
3. **`FlowerGift3`を持つ**すべてのエンティティから半径5m以内の`Flowering`を持つすべてのエンティティに対し、**[フラワーギフト用ポピー3](#フラワーギフト用ポピー3)をオフハンドに持たせる**
4. [フラワーギフト用ポピー付与部](#フラワーギフト用ポピー付与部)を停止

### フラワーギフト用ポピー1

|-|-|
|アイテム|minecraft:red_flower|
|個数|1|
|メタデータ値|0|
|NBTタグ|AttributeModifiers|

#### AttributeModifiers

|Name|Value|
|-|-|
|Name|FlowerGift1|
|AttributeName|generic.followRange|
|Operation|2|
|Amount|**-0.5**|
|Slot|offhand|

### フラワーギフト用ポピー2

|-|-|
|アイテム|minecraft:red_flower|
|個数|1|
|メタデータ値|0|
|NBTタグ|AttributeModifiers|

#### AttributeModifiers

|Name|Value|
|-|-|
|Name|FlowerGift2|
|AttributeName|generic.followRange|
|Operation|2|
|Amount|**-0.65**|
|Slot|offhand|

### フラワーギフト用ポピー3

|-|-|
|アイテム|minecraft:red_flower|
|個数|1|
|メタデータ値|0|
|NBTタグ|AttributeModifiers|

#### AttributeModifiers

|Name|Value|
|-|-|
|Name|FlowerGift3|
|AttributeName|generic.followRange|
|Operation|2|
|Amount|**-0.8**|
|Slot|offhand|
