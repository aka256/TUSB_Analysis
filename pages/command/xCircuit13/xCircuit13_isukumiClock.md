---
title: 居縮クロック処理
tags: [コマンド,スキル,忍者]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-10-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit13/xCircuit13_isukumiClock.html
datatable3c: true
summary: 忍者のスキルの一つである居縮の演出と敵Mobを停止するためのタグFreezeの付与、PotentialSkillの値によるタグの付与などを行う。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,14,-143)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)

忍者のスキルの一つである居縮の演出と敵Mobを停止するためのタグ`Freeze`の付与、`PotentialSkill`の値によるタグの付与などを行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=Isukumi] ~ ~ ~ /playsound entity.mooshroom.shear master @a[r=16] ~ ~ ~ 0.2 1.2 0|リピート<br>動力が必要|
|2|/execute @e[tag=Isukumi] ~ ~ ~ /particle dragonbreath ~ ~-0.3 ~ 0 0 0 0 1 force|条件付き|
|3|/execute @e[tag=ProjectileHit] ~ ~ ~ /scoreboard players tag @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2230,score_PotentialSkill=2239,c=1] add Freeze|動力が必要|
|4|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2230,score_PotentialSkill=2239,c=1] ~ ~ ~ /playsound entity.ghast.hurt master @a[r=32] ~ ~ ~ 0.4 2 0.2|条件付き|
|5|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2230,score_PotentialSkill=2239,c=1] ~ ~ ~ /particle townaura ~ ~1 ~ 0.5 0.5 0.5 0 60 force|条件付き|
|6|/execute @e[tag=ProjectileHit] ~ ~ ~ /entitydata @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2230,score_PotentialSkill=2230,c=1] {NoAI:true,PortalCooldown:100}|動力が必要|
|7|/execute @e[tag=ProjectileHit] ~ ~ ~ /entitydata @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=2231,score_PotentialSkill=2239,c=1] {NoAI:true,PortalCooldown:200}|動力が必要|
|8|/fill ~-5 ~1 ~ ~ ~1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|9|/scoreboard players test #EntityCount Global * 0|
|10|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`Isukumi`を持つ**エンティティが存在するとき、以下の事柄を実行
   1. 対象エンティティから半径16m以内のすべてのプレイヤーに効果音を鳴らし、**その数を`#EntityCount`の`Global`に代入**
   2. 対象エンティティの座標上にパーティクルを表示
2. [居縮HIT処理部](#居縮hit処理部)が起動しているとき、それを実行
3. **`#EntityCount`の`Global`が0以下であるとき**、[居縮クロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_isukumiClock.html)を停止

### 居縮HIT処理部

1. **`ProjectileHit`を持つエンティティと同じ座標上かつ、`PotentialSkill`が2230 ~ 2239、そして`ProjectileHit`を持つ**すべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティに**`Freeze`を付与**
   2. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
   3. 対象エンティティの座標上にパーティクルを表示
2. `ProjectileHit`を持つエンティティと同じ座標上かつ、**`PotentialSkill`が2230**、そして`ProjectileHit`を持つすべてのエンティティに**[居縮付与タグ1](#居縮付与タグ1)を付与**
3. `ProjectileHit`を持つエンティティと同じ座標上かつ、**`PotentialSkill`が2231 ~ 2239**、そして`ProjectileHit`を持つすべてのエンティティに**[居縮付与タグ2](#居縮付与タグ2)を付与**
4. [居縮HIT処理部](#居縮hit処理部)を停止

### 居縮付与タグ1

```mcfunction
{
  NoAI:true,
  PortalCooldown:100
}
```

### 居縮付与タグ2

```mcfunction
{
  NoAI:true,
  PortalCooldown:200
}
```
