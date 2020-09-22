---
title: サモンE：グライダー実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_summonGlider.html
datatable3cnp: true
summary: 召喚士のスキルの1つであるサモンE：グライダーを実行する。TarpPointの座標上へのグライダーを召喚、プレイヤーの視線によるグライダーのMotionの変更などを行う。
summaryDisable: true
---

## About

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

召喚士のスキルの1つであるサモンE：グライダーを実行する。[TarpPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上への[グライダー](#グライダー)を召喚、プレイヤーの視線による[グライダー](#グライダー)の`Motion`の変更などを行う。

## コマンド群

### グライダー召喚部コマンド群

<span class="tagYellow">位置</span> (-1920,13,-151)

<div class="datatable3cnp-begin"></div>

|No.|コマンド||
|:-:|-|-|
|1|/execute @a[score_ActivatedSkill_min=6080,score_ActivatedSkill=6089] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /summon Arrow ~ ~0.1 ~ {Silent:true,life:1140s,Tags:[YouCanFly,TypeChecked],Passengers:[{id:Snowball,Tags:[TypeChecked],Passengers:[{id:Snowball,Tags:[TypeChecked],Passengers:[{id:ArmorStand,Invulnerable:true,Invisible:true,Marker:true,Small:true,NoBasePlate:true,DisabledSlots:31,ActiveEffects:[{Id:25b,Duration:100,Amplifier:7b,ShowParticles:false}],Tags:[FloatingRequired,SystemEntity,FoldGlider,TypeChecked],PortalCooldown:100,ArmorItems:[{},{},{id:minecraft:elytra,Count:0b}],Passengers:[{id:Boat,CustomName:"グライダー",CustomNameVisible:true,FallDistance:-10000000f,Tags:[FloatingRequired,TypeChecked],Passengers:[{id:Pig,Saddle:true,Silent:true,Invulnerable:true,ActiveEffects:[{Id:14b,Duration:2147483647,Amplifier:127b,ShowParticles:false}],Tags:[FloatingRequired,SystemEntity,TypeChecked]},{id:ArmorStand,Marker:true,Invulnerable:true,Invisible:true,DisabledSlots:31,Small:true,NoBasePlate:true,Tags:[FloatingRequired,SystemEntity,TypeChecked]}]}]}]}]}]}|
|2|/fill -1921 15 ~ -1921 17 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###演出クロック|

<div class="datatable3cnp-end"></div>

### グライダー平行移動判定部コマンド群

<span class="tagYellow">位置</span> (-1920,15,-151)

<div class="datatable3cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/scoreboard players tag @e[tag=FoldGlider] add Spread {PortalCooldown:0}|クロック|
|2|/entitydata @e[tag=Spread] {Tags:[FloatingRequired,SystemEntity,Glider,TypeChecked]}|条件付き|
|3|/fill -1921 ~-1 ~ -1921 ~-1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###グライダークロック起動|条件付き|
|4|/scoreboard players test #EntityCount Global * 0|
|5|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3cnp-end"></div>

#### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

### 演出クロック部コマンド群

<span class="tagYellow">位置</span> (-1920,17,-151)

このコマンド群は[サモンE：バルーン実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonBalloon.html)の[演出クロック部コマンド群]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonBalloon.html#演出クロック部コマンド群)のものと同じものが用いられている。

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=YouCanFly] ~ ~ ~ /playsound block.note.harp master @a[r=16] ~ ~ ~ 0.3 1.4 0 |リピート|
|2|/execute @e[tag=YouCanFly] ~ ~ ~ /particle instantSpell ~ ~0.5 ~ 0.3 0.5 0.3 0.1 6 force|
|3|/scoreboard players test #EntityCount Global * 0|
|4|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3cnp-end"></div>

#### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

### グライダー平行移動部コマンド群

<span class="tagYellow">位置</span> (-1920,14,-151)

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[score_PigOneCm_min=1,rym=-45,ry=44] ~ ~ ~ /entitydata @e[dy=-1,tag=Glider,c=1] {Motion:[0d,-0.05d,0.5d]}|リピート|
|2|/execute @a[score_PigOneCm_min=1,rym=45,ry=134] ~ ~ ~ /entitydata @e[dy=-1,tag=Glider,c=1] {Motion:[-0.5d,-0.05d,0d]}|
|3|/execute @a[score_PigOneCm_min=1,rym=135,ry=224] ~ ~ ~ /entitydata @e[dy=-1,tag=Glider,c=1] {Motion:[0d,-0.05d,-0.5d]}|
|4|/execute @a[score_PigOneCm_min=1,rym=225,ry=314] ~ ~ ~ /entitydata @e[dy=-1,tag=Glider,c=1] {Motion:[0.5d,-0.05d,0d]}|
|5|/scoreboard players reset @a[score_PigOneCm_min=1] PigOneCm|
|6|/testfor @e[tag=Glider]|
|7|/scoreboard players test #EntityCount Global * 0|
|8|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3cnp-end"></div>

#### No.6のコマンドブロックについて

No.6のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

<span class="expandButton" onClick="openCloseBE(`openHere1-begin`)">+</span>没コマンド

<div class="openHere-begin openHere1-begin"></div>

<span class="tagYellow">位置</span> (-1911,14,-151)

- elytra仕様変更により没回路
(エリトラが英名な辺りから、どれくらいの時期に作られたものか推測できるかも)

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=Glider] ~ ~ ~ /tp @e[dx=0,tag=Glider,c=1] @a[r=1,score_PigOneCm_min=1,c=1]|リピート|
|2|/execute @a[score_PigOneCm_min=1] ~ ~ ~ /tp @e[r=1,tag=Glider,c=1] ~-0.2 ~ ~|条件付き|
|3|/execute @a[score_PigOneCm_min=1] ~ ~ ~ /entitydata @e[r=1,tag=Glider,c=1] {:}|条件付き|
|4|/scoreboard players reset @a[score_PigOneCm_min=1] PigOneCm|
|5|/scoreboard players test #EntityCount Global * 0|
|6|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3cnp-end"></div>

- No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

<div class="openHere-end openHere1-end"></div>

## 詳細

### グライダー召喚部

1. **`ActivatedSkill`が6080 ~ 6089**であるすべてのプレイヤーから、半径6m以内の1体の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)に、**[グライダー](#グライダー)を召喚** (`FoldGlider`を持つ)
2. [グライダー平行移動判定部](#グライダー平行移動判定部)と[演出クロック部](#演出クロック部)を実行

### グライダー平行移動判定部

1. **`FoldGlider`を持ち、`PortalCooldown`が0であるすべてのエンティティに`Spread`を付与**し、以下の事柄を実行
   1. `Spread`が付与されたエンティティの数を`#EntityCount`の`Global`に代入
   2. `Spread`を持つすべてのエンティティに、`{Tags:[FloatingRequired,SystemEntity,Glider,TypeChecked]}`を付与 (**`FoldGlider`を削除、`Glider`を追加**)
   3. [グライダー平行移動部](#グライダー平行移動部)を実行
2. `#EntityCount`の`Global`(`Spread`が付与されたエンティティの数)が0以下であるとき、[グライダー平行移動判定部](#グライダー平行移動判定部)を停止

### 演出クロック部

1. [熱気球]({{site.baseurl}}/entity/entity_entity.html#熱気球)から半径16m以内のすべてのプレイヤーに、効果音を鳴らす
2. 1.で実行できた[熱気球]({{site.baseurl}}/entity/entity_entity.html#熱気球)の数を`#EntityCount`の`Global`に代入
3. [熱気球]({{site.baseurl}}/entity/entity_entity.html#熱気球)の座標上にパーティクルを表示
4. `#EntityCount`の`Global`([熱気球]({{site.baseurl}}/entity/entity_entity.html#熱気球)の数)が0以下であるとき、[演出クロック部](#演出クロック部)を停止

### グライダー平行移動部

1. **`PigOneCm`が1以上**であるプレイヤーのxz平面上の視線の角度に応じて、**そのプレイヤーの1m下の`Glider`を持った1体のエンティティの`Motion`を変更する** ([プレイヤーの視線とグライダーのMotionについて](#プレイヤーの視線とグライダーのmotionについて)を参照)
2. `PigOneCm`が1以上であるすべてのプレイヤーの`PigOneCm`を0に設定
3. `Glider`を持つエンティティが0体以下であるとき、[グライダー平行移動部](#グライダー平行移動部)を停止

### プレイヤーの視線とグライダーのMotionについて

|xz平面上の視線の角度|Motion|
|:-:|:-:|
|-45 ~ 44|0,-0.05,0.5|
|45 ~ 134|-0.5,-0.05,0|
|135 ~ 224|0,-0.05,-0.5|
|225 ~ 314|0.5,-0.05,0|

### グライダー

```mcfunction
/summon Arrow ~ ~0.1 ~ {Silent:true,life:1140s,Tags:[YouCanFly,TypeChecked],Passengers:[{id:Snowball,Tags:[TypeChecked],Passengers:[{id:Snowball,Tags:[TypeChecked],Passengers:[{id:ArmorStand,Invulnerable:true,Invisible:true,Marker:true,Small:true,NoBasePlate:true,DisabledSlots:31,ActiveEffects:[{Id:25b,Duration:100,Amplifier:7b,ShowParticles:false}],Tags:[FloatingRequired,SystemEntity,FoldGlider,TypeChecked],PortalCooldown:100,ArmorItems:[{},{},{id:minecraft:elytra,Count:0b}],Passengers:[{id:Boat,CustomName:”グライダー”,CustomNameVisible:true,FallDistance:-10000000f,Tags:[FloatingRequired,TypeChecked],Passengers:[{id:Pig,Saddle:true,Silent:true,Invulnerable:true,ActiveEffects:[{Id:14b,Duration:2147483647,Amplifier:127b,ShowParticles:false}],Tags:[FloatingRequired,SystemEntity,TypeChecked]},{id:ArmorStand,Marker:true,Invulnerable:true,Invisible:true,DisabledSlots:31,Small:true,NoBasePlate:true,Tags:[FloatingRequired,SystemEntity,TypeChecked]}]}]}]}]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|**YouCanFly**,TypeChecked|
|life|**1140 (1.5秒後に消滅)**|
|Passengers|Snowball1|

- Snowball1

|-|-|
|Name|(None)|
|Type|Snowball|
|Tags|TypeChecked|
|Passengers|Snowball2|

- Snowball2

|-|-|
|Name|(None)|
|Type|Snowball|
|Tags|TypeChecked|
|Passengers|FoldGlider|

- FoldGlider

|-|-|
|Name|(None)|
|Type|ArmorStand|
|Tags|**FloatingRequired**,SystemEntity,FoldGlider,TypeChecked|
|ActiveEffects|**浮遊Lv.8を5秒間**|
|PortalCooldown|**100 (5秒)**|
|Passengers|グライダー|

- グライダー

|-|-|
|Name|グライダー|
|Type|Boat|
|Tags|**FloatingRequired**,TypeChecked|
|Passengers|FloatingPig,FloatingArmorStand|

- FloatingPig

|-|-|
|Name|(None)|
|Type|Pig|
|Tags|**FloatingRequired**,SystemEntity,TypeChecked|
|ActiveEffects|透明化Lv.128を107,374,182.35秒間|

- FlaotingArmorStand

|-|-|
|Name|(None)|
|Type|ArmorStand|
|Tags|**FloatingRequired**,SystemEntity,TypeChecked|
