---
title: サモンP：ウルフ実行
tags: [コマンド,スキル,召喚士,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_summonWolf.html
datatable3cnp: true
summary: 召喚士のスキルの1つであるサモンP：ウルフを実行する。TarpPointの座標上にほねちょーだいの召喚、骨を与えられたときに(ペット)ウルフへと変更するタグ(ペット)ウルフへの追加タグの付与、そして30秒間の内に懐かせられなかったほねちょーだいのキルなどを行う。
summaryDisable: true
---

## About

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

召喚士のスキルの1つであるサモンP：ウルフを実行する。[TarpPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に[ほねちょーだい](#ほねちょーだい)の召喚、骨を与えられたときに(ペット)ウルフへと変更するタグ[(ペット)ウルフへの追加タグ](#ペットウルフへの追加タグ)の付与、そして30秒間の内に懐かせられなかった[ほねちょーだい](#ほねちょーだい)のキルなどを行う。

## コマンド群

### ウルフ召喚部コマンド群

<span class="tagYellow">位置</span> (-1920,17,-152)

<div class="datatable3cnp-begin"></div>

|No.|コマンド||
|:-:|-|-|
|1|/execute @a[score_ActivatedSkill_min=6040,score_ActivatedSkill=6049] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /playsound entity.wolf.death master @a[r=16] ~ ~ ~ 1 0.5 0|
|2|/execute @a[score_ActivatedSkill_min=6040,score_ActivatedSkill=6049] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /particle snowshovel ~ ~ ~ 0.5 0.5 0.5 0.1 30 force|
|3|/execute @a[score_ActivatedSkill_min=6040,score_ActivatedSkill=6049] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /summon Wolf ~ ~ ~ {CustomName:"ほねちょーだい！",CustomNameVisible:true,ArmorItems:[{id:"minecraft:bone",Count:0b,Damage:0s,tag:{ench:[{id:2s,lvl:32767s},{id:1s,lvl:10s}],AttributeModifiers:[{Name:"WolfAttack+",AttributeName:"generic.attackDamage",Operation:0,Amount:21d,UUIDMost:101l,UUIDLeast:1l,Slot:"feet"}]}},{},{},{id:minecraft:snowball,Count:0b}], Attributes:[{Name:"generic.followRange",Base:0d},{Name:"generic.movementSpeed",Base:0.1d},{Name:"generic.armor",Base:15d},{Name:"generic.attackDamage",Base:22d},{Name:"generic.maxHealth",Base:30d}],Health:30f,Team:FriendlyTeam,PortalCooldown:600,Tags:[GimmeBone],CollarColor:0b,Passengers:[{id:Item,Item:{id:minecraft:bone,Count:3b}}],DeathLootTable:"minecraft:empty"}|
|4|/fill -1921 ~-1 ~ -1921 ~-1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###懐かせ待機|

<div class="datatable3cnp-end"></div>

### ウルフ懐かせ待機部コマンド群

<span class="tagYellow">位置</span> (-1920,16,-152)

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @e[tag=GimmeBone] add Tamed {Attributes:[{Name:"generic.maxHealth",Base:20d}]}|クロック|
|2|/entitydata @e[tag=Tamed] {CustomName:"(ペット)ウルフ",Attributes:[{Name:"generic.followRange",Base:32d},{Name:"generic.movementSpeed",Base:0.32d},{Name:"generic.maxHealth",Base:30d}],Health:30f,Tags:[]}|条件付き|
|3|/scoreboard players tag @e[tag=GimmeBone] add FailedToTame {PortalCooldown:0}|
|4|/execute @e[tag=FailedToTame] ~ ~ ~ /tellraw @a[r=16] {"text":"* オオカミ はふて腐れて帰ってしまった。"}|条件付き|
|5|/entitydata @e[tag=FailedToTame] {Health:0f,DeathTime:19s}|条件付き|
|6|/scoreboard players test #EntityCount Global * 0|
|7|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3cnp-end"></div>

#### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

### ウルフ召喚部

- **`ActivatedSkill`が6040 ~ 6049**であるすべてのプレイヤーから**半径6m以内の1体の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)に対し**、以下の事柄を実行

1. 対象エンティティから半径16m以内のすべてのプレイヤーに、効果音を鳴らす
2. 対象エンティティの座標上にパーティクルを表示
3. 対象エンティティの座標上に**[ほねちょーだい](#ほねちょーだい)(`GimmeBone`を持つ)を召喚**
4. [懐かせ待機部](#懐かせ待機部)を実行

### 懐かせ待機部

1. **`GimmeBone`を持ち、`Attributes`の`generic.maxHealth`が20であるエンティティ(骨を与えられた[ほねちょーだーい](#ほねちょーだい))に`Tamed`を付与**
2. 1.を実行できた`GimmeBone`を持つエンティティの数を`#EntityCount`の`Global`に代入
3. **`Tamed`を持ったエンティティに[(ペット)ウルフへの追加タグ](#ペットウルフへの追加タグ)を付与**
4. **`GimmeBone`を持ち、`PortalCooldown`が0であるすべてのエンティティに、`FaildToTame`を付与**し、実行できた時以下の事柄を実行
   1. `FailedToTame`を持つすべてのエンティティから半径16m以内のすべてのプレイヤーに対し、「* オオカミ はふて腐れて帰ってしまった。」とのメッセージを表示
   2. **`FailedToTame`を持つすべてのエンティティに`{Health:0f,DeathTime:19s}`を付与し、キルする**
5. `#EntityCount`の`Global`が0以下であるとき、[懐かせ待機部](#懐かせ待機部)を停止

### ほねちょーだい

```mcfunction
/summon Wolf ~ ~ ~ {CustomName:"ほねちょーだい！",CustomNameVisible:true,ArmorItems:[{id:"minecraft:bone",Count:0b,Damage:0s,tag:{ench:[{id:2s,lvl:32767s},{id:1s,lvl:10s}],AttributeModifiers:[{Name:"WolfAttack+",AttributeName:"generic.attackDamage",Operation:0,Amount:21d,UUIDMost:101l,UUIDLeast:1l,Slot:"feet"}]}},{},{},{id:minecraft:snowball,Count:0b}], Attributes:[{Name:"generic.followRange",Base:0d},{Name:"generic.movementSpeed",Base:0.1d},{Name:"generic.armor",Base:15d},{Name:"generic.attackDamage",Base:22d},{Name:"generic.maxHealth",Base:30d}],Health:30f,Team:FriendlyTeam,PortalCooldown:600,Tags:[GimmeBone],CollarColor:0b,Passengers:[{id:Item,Item:{id:minecraft:bone,Count:3b}}],DeathLootTable:"minecraft:empty"}
```

|-|-|
|Name|ほねちょーだい！|
|Type|Wolf|
|Tags|**GimmeBone**|
|Team|**FriendlyTeam**|
|Health|30|
|ArmorItem|落下耐性Lv.32767の骨|
|PortalCooldown|**600**|

### (ペット)ウルフへの追加タグ

```mcfunction
{
  CustomName:”(ペット)ウルフ”,
  Attributes:
    [{
      Name:”generic.followRange”,
      Base:32d
    },
    {
      Name:”generic.movementSpeed”,
      Base:0.32d
    },
    {
      Name:”generic.maxHealth”,
      Base:30d
    }],
  Health:30f,
  Tags:[]
}
```
