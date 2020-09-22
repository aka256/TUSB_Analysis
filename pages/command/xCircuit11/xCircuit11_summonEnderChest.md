---
title: サモンB：エンダーチェスト実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_summonEnderChest.html
datatable3c: true
summary: 召喚士のスキルの1つであるサモンB：エンダーチェストを実行する。スキル実行者から特定の相対座標が空気ブロックであるときSetOffsetの召喚、MagicEnderChestの召喚、エンダーチェストの設置などを行う。なお、エンダーチェストの削除処理や採掘速度低下処理はマジックブロック削除で行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,13,-146)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

<span class="tagBlue">分岐先</span> [マジックブロック削除]({{site.baseurl}}/command/xCircuit11/xCircuit11_magicBlockDelete.html)

召喚士のスキルの1つであるサモンB：エンダーチェストを実行する。スキル実行者から特定の相対座標が空気ブロックであるとき[SetOffset](#setoffset)の召喚、[MagicEnderChest](#magicenderchest)の召喚、エンダーチェストの設置などを行う。なお、エンダーチェストの削除処理や採掘速度低下処理は[マジックブロック削除]({{site.baseurl}}/command/xCircuit11/xCircuit11_magicBlockDelete.html)で行われる。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @a[score_ActivatedSkill_min=6280,score_ActivatedSkill=6289] add SetBlock|
|2|/execute @a[tag=SetBlock] ~ ~-1 ~ detect ~ ~ ~ minecraft:air 0 /summon ItemFrame ~ ~ ~ {Invulnerable:true,Facing:0b,Tags:[SetOffset]}|
|3|/execute @a[tag=SetBlock] ~ ~-1 ~ detect ~ ~ ~ minecraft:air 0 /scoreboard players tag @a[c=1] remove SetBlock|条件付き|
|4|/execute @a[tag=SetBlock] ~ ~ ~ detect ~ ~ ~ minecraft:air 0 /summon ItemFrame ~ ~ ~ {Invulnerable:true,Facing:0b,Tags:[SetOffset]}|
|5|/execute @a[tag=SetBlock] ~ ~ ~ detect ~ ~ ~ minecraft:air 0 /scoreboard players tag @a[c=1] remove SetBlock|条件付き|
|6|/execute @a[tag=SetBlock] ~ ~1 ~ detect ~ ~ ~ minecraft:air 0 /summon ItemFrame ~ ~ ~ {Invulnerable:true,Facing:0b,Tags:[SetOffset]}|
|7|/scoreboard players tag @a[tag=SetBlock] remove SetBlock|
|8|/entitydata @e[tag=SetOffset] {:}|
|9|/execute @e[tag=SetOffset] ~ ~ ~0.46875 /summon AreaEffectCloud ~ ~ ~ {ReapplicantDelay:20,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:0,RadiusPerTick:0f,WaitTime:1,Age:-100,Particle:take,Tags:[MagicBlock,MagicEnderChest,SystemEntity,TypeChecked]}|条件付き|
|10|/execute @a[score_ActivatedSkill_min=6280,score_ActivatedSkill=6289] ~ 0 ~ /execute @e[dy=191,tag=SetOffset] ~ ~ ~ /entitydata @e[dx=0,tag=MagicEnderChest] {Age:-200}|条件付き|
|11|/execute @a[score_ActivatedSkill_min=6280,score_ActivatedSkill=6289] ~ 0 ~ /execute @e[dy=127,tag=SetOffset] ~ ~ ~ /entitydata @e[dx=0,tag=MagicEnderChest] {Age:-300}|条件付き|
|12|/execute @a[score_ActivatedSkill_min=6280,score_ActivatedSkill=6289] ~ 0 ~ /execute @e[dy=63,tag=SetOffset] ~ ~ ~ /entitydata @e[dx=0,tag=MagicEnderChest] {Age:-400}|条件付き|
|13|/execute @e[tag=SetOffset] ~ ~ ~0.46875 /playsound entity.zombie.attack_iron_door master @a[r=16] ~ ~ ~ 1 0.5 0|
|14|/execute @e[tag=SetOffset] ~ ~ ~0.46875 /particle dragonbreath ~ ~ ~ 0.5 0.5 0.5 0.5 30 force|条件付き|
|15|/kill @e[tag=SetOffset]|条件付き|
|16|/scoreboard players operation #MagicBlockCount Global += #EntityCount Global|条件付き|
|17|/execute @e[tag=MagicEnderChest] ~ ~ ~ /setblock ~ ~ ~ minecraft:ender_chest 0 keep|条件付き|
|18|/fill -1921 17 ~ -1921 17 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ブロック削除クロック|条件付き|

<div class="datatable3c-end"></div>

### No.15のコマンドブロックについて

No.15のコマンドブロックには、以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`ActivatedSkill`が6280 ~ 6289**であるすべてのプレイヤーに、`SetBlock`を付与
2. `SetBlock`を持つすべてのプレイヤーの**1m下が空気ブロックであるとき**、以下の事柄を実行
   1. 対象プレイヤーの1m下に**[SetOffset](#setoffset)を召喚**
   2. 対象プレイヤーから`SetBlock`を削除
3. `SetBlock`を持つすべての**プレイヤーのいる座標が空気ブロックであるとき**、以下の事柄を実行
   1. 対象プレイヤーの座標上に**[SetOffset](#setoffset)を召喚**
   2. 対象プレイヤーから`SetBlock`を削除
4. `SetBlock`を持つすべてのプレイヤーから**1m上が空気ブロックであるとき**、その座標上に**[SetOffset](#setoffset)を召喚**
5. `SetBlock`を持つすべてのプレイヤーから`SetBlock`を削除
6. [SetOffset](#setoffset)が存在するとき、以下の事柄を実行
   1. 対象エンティティからz軸方向に0.46875mの地点に**[MagicEnderChest](#magicenderchest)を召喚**
   2. **`ActivatedSkill`が6280 ~ 6289**であるすべてのプレイヤーと同じy軸上にある[SetOffset](#setoffset)と同座標にある、**[MagicEnderChest](#magicenderchest)の`Age`を[SetOffset](#setoffset)のy座標によって変更する** ([MagicEnderChestのAgeとy座標の関係性](#magicenderchestのageとy座標の関係性)を参照)
7. [SetOffset](#setoffset)からz軸方向に0.46875mの地点を中心とした、**半径16m以内のすべてのプレイヤーに効果音を鳴らし、実行できたら以下の事柄を実行**
   1. [SetOffset](#setoffset)からz軸方向に0.46875mの地点にパーティクルを表示
   2. [SetOffset](#setoffset)をキルし、その数を`#EntityCount`の`Global`に代入
   3. `#MagicBlockCount`の`Global`に`#EntityCount`の`Global`を足しこむ
   4. **[MagicEnderChest](#magicenderchest)の座標上にエンダーチェストを設置**
   5. [マジックブロック削除]({{site.baseurl}}/command/xCircuit11/xCircuit11_magicBlockDelete.html)を実行

### MagicEnderChestのAgeとy座標の関係性

|y座標|Age|
|:-:|:-:|
|0 ~ 63|-400 (-20秒)|
|64 ~ 127|-300 (-15秒)|
|128 ~ 191|-200 (-10秒)|
|192 ~ |-100 (-5秒)|

### SetOffset

```mcfunction
/summon ItemFrame ~ ~ ~ {Invulnerable:true,Facing:0b,Tags:[SetOffset]}
```

|-|-|
|Name|(None)|
|Type|ItemFrame|
|Tags|**SetOffset**|

### MagicEnderChest

```mcfunction
/summon AreaEffectCloud ~ ~ ~ {ReapplicantDelay:20,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:0,RadiusPerTick:0f,WaitTime:1,Age:-100,Particle:take,Tags:[MagicBlock,MagicEnderChest,SystemEntity,TypeChecked]}
```

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|**MagicBlock**,**MagicEnderChest**,SystemEntity,TypeChecked|
|Age|**-100**|
