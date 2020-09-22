---
title: ぷちブラック実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_puchiBlack.html
datatable3c: true
summary: 召喚士のスキルの1つであるぷちブラックを実行する。スキル実行者から特定の相対座標が空気ブロックであるときSetOffsetの召喚、MagicBlackの召喚、ぷちブラックのコアとなる黒曜石の設置などを行う。なお、エンティティのテレポートとダメージ付与はマジックブロック削除で行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,15,-146)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

<span class="tagBlue">分岐先</span> [マジックブロック削除]({{site.baseurl}}/command/xCircuit11/xCircuit11_magicBlockDelete.html)

召喚士のスキルの1つであるぷちブラックを実行する。スキル実行者から特定の相対座標が空気ブロックであるとき[SetOffset](#setoffset)の召喚、[MagicBlack](#magicblack)の召喚、ぷちブラックのコアとなる黒曜石の設置などを行う。なお、エンティティのテレポートとダメージ付与は[マジックブロック削除]({{site.baseurl}}/command/xCircuit11/xCircuit11_magicBlockDelete.html)で行われる。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @a[score_ActivatedSkill_min=6300,score_ActivatedSkill=6309] add SetBlock|
|2|/execute @a[tag=SetBlock] ~ ~-1 ~ detect ~ ~ ~ minecraft:air 0 /summon ItemFrame ~ ~ ~ {Invulnerable:true,Facing:0b,Tags:[SetOffset]}|
|3|/execute @a[tag=SetBlock] ~ ~-1 ~ detect ~ ~ ~ minecraft:air 0 /scoreboard players tag @a[c=1] remove SetBlock|条件付き|
|4|/execute @a[tag=SetBlock] ~ ~ ~ detect ~ ~ ~ minecraft:air 0 /summon ItemFrame ~ ~ ~ {Invulnerable:true,Facing:0b,Tags:[SetOffset]}|
|5|/execute @a[tag=SetBlock] ~ ~ ~ detect ~ ~ ~ minecraft:air 0 /scoreboard players tag @a[c=1] remove SetBlock|条件付き|
|6|/execute @a[tag=SetBlock] ~ ~1 ~ detect ~ ~ ~ minecraft:air 0 /summon ItemFrame ~ ~ ~ {Invulnerable:true,Facing:0b,Tags:[SetOffset]}|
|7|/scoreboard players tag @a[tag=SetBlock] remove SetBlock|
|8|/entitydata @e[tag=SetOffset] {:}|
|9|/execute @e[tag=SetOffset] ~ ~0.125 ~0.46875 /summon AreaEffectCloud ~ ~ ~ {ReapplicantDelay:20,Radius:0f,RadiusOnUse:0f,DurationOnUse:0,Duration:0,RadiusPerTick:0f,WaitTime:1,Age:-300,Particle:take,Tags:[MagicBlock,MagicBlack,SystemEntity,TypeChecked],Passengers:[{id:AreaEffectCloud,Rotation:[0f,90f],ReapplicantDelay:20,Radius:0f,RadiusOnUse:0f,DurationOnUse:0,Duration:180,RadiusPerTick:0f,WaitTime:1,Age:-100,Particle:take,Tags:[PrePetitBlack,SystemEntity,TypeChecked]},{id:AreaEffectCloud,ReapplicantDelay:0,Radius:10f,RadiusOnUse:0f,DurationOnUse:0,Duration:10,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:dragonbreath,Tags:[SystemEntity,TypeChecked]}]}|条件付き|
|10|/execute @e[tag=SetOffset] ~ ~ ~0.46875 /playsound block.portal.travel master @a[r=32] ~ ~100 ~ 0.1 1.6 0.3|
|11|/execute @e[tag=SetOffset] ~ ~ ~0.46875 /playsound entity.endermen.stare master @a[r=32] ~ ~100 ~ 10 0.5 0.00001|
|12|/execute @e[tag=SetOffset] ~ ~ ~0.46875 /particle dragonbreath ~ ~ ~ 0.5 0.5 0.5 0.1 90 force|条件付き|
|13|/kill @e[tag=SetOffset]|条件付き|
|14|/scoreboard players operation #MagicBlockCount Global += #EntityCount Global|条件付き|
|15|/execute @e[tag=MagicBlack] ~ ~ ~ /setblock ~ ~ ~ minecraft:obsidian 0 keep|条件付き|
|16|/fill -1921 17 ~ -1921 17 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ブロック削除クロック|条件付き|

<div class="datatable3c-end"></div>

### No.13のコマンドブロックについて

No.13のコマンドブロックには、以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`ActivatedSkill`が6300 ~ 6309**であるすべてのプレイヤーに、`SetBlock`を付与
2. `SetBlock`を持つすべてのプレイヤーの**1m下が空気ブロックであるとき**、以下の事柄を実行
   1. 対象プレイヤーの1m下に**[SetOffset](#setoffset)を召喚**
   2. 対象プレイヤーから`SetBlock`を削除
3. `SetBlock`を持つすべての**プレイヤーのいる座標が空気ブロックであるとき**、以下の事柄を実行
   1. 対象プレイヤーの座標上に**[SetOffset](#setoffset)を召喚**
   2. 対象プレイヤーから`SetBlock`を削除
4. `SetBlock`を持つすべてのプレイヤーから**1m上が空気ブロックであるとき**、その座標上に**[SetOffset](#setoffset)を召喚**
5. `SetBlock`を持つすべてのプレイヤーから`SetBlock`を削除
6. [SetOffset](#setoffset)から上に0.125m、z軸方向に0.46875mの地点に**[MagicBlack](#magicblack)を召喚**
7. [SetOffset](#setoffset)からz軸方向に0.46875mの地点を中心とした、**半径32m以内のすべてのプレイヤーに効果音を鳴らし、実行できたら以下の事柄を実行**
   1. [SetOffset](#setoffset)からz軸方向に0.46875mの地点にパーティクルを表示
   2. [SetOffset](#setoffset)をキルし、その数を`#EntityCount`の`Global`に代入
   3. `#MagicBlockCount`の`Global`に`#EntityCount`の`Global`を足しこむ
   4. [MagicBlack](#magicblack)の座標上に**黒曜石を設置**
   5. [マジックブロック削除]({{site.baseurl}}/command/xCircuit11/xCircuit11_magicBlockDelete.html)を実行

### SetOffset

```mcfunction
/summon ItemFrame ~ ~ ~ {Invulnerable:true,Facing:0b,Tags:[SetOffset]}
```

|-|-|
|Name|(None)|
|Type|ItemFrame|
|Tags|**SetOffset**|

### MagicBlack

```mcfunction
/summon AreaEffectCloud ~ ~ ~ {ReapplicantDelay:20,Radius:0f,RadiusOnUse:0f,DurationOnUse:0,Duration:0,RadiusPerTick:0f,WaitTime:1,Age:-300,Particle:take,Tags:[MagicBlock,MagicBlack,SystemEntity,TypeChecked],Passengers:[{id:AreaEffectCloud,Rotation:[0f,90f],ReapplicantDelay:20,Radius:0f,RadiusOnUse:0f,DurationOnUse:0,Duration:180,RadiusPerTick:0f,WaitTime:1,Age:-100,Particle:take,Tags:[PrePetitBlack,SystemEntity,TypeChecked]},{id:AreaEffectCloud,ReapplicantDelay:0,Radius:10f,RadiusOnUse:0f,DurationOnUse:0,Duration:10,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:dragonbreath,Tags:[SystemEntity,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|**MagicBlock**,**MagicBlack**,SystemEntity,TypeChecked|
|Age|**-300**|
|Passengers|PrePetitBlack,dragonbreathAEC|

- PrePetitBlack

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|**PrePetitBlack**,SystemEntity,TypeChecked|

- dragonbreathAEC

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|SystemEntity,TypeChecked|
