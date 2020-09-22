---
title: ぽむぽむハナビ実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_pompomFirework.html
datatable3cnp: true
summary: 召喚士のスキルの1つであるぽむぽむハナビを実行する。花火であるPomPomを召喚して、1.75秒後にぽむぽむハナビを召喚して爆破を行う。
summaryDisable: true
---

## About

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

召喚士のスキルの1つであるぽむぽむハナビを実行する。花火である[PomPom](#pompom)を召喚して、1.75秒後に[ぽむぽむハナビ](#ぽむぽむハナビ)を召喚して爆破を行う。

## コマンド群

### PomPom召喚部コマンド群

<span class="tagYellow">位置</span> (-1920,9,-149)

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[score_ActivatedSkill_min=6270,score_ActivatedSkill=6279] ~ ~ ~ /summon AreaEffectCloud ~ ~ ~ {ReapplicantDelay:20,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:0,RadiusPerTick:0f,WaitTime:10,Age:0,Particle:take,Tags:[SystemEntity,TypeChecked],Passengers:[{id:FireworksRocketEntity,Life:-10,LifeTime:25,Tags:[PomPom,SystemEntity,TypeChecked],FireworksItem:{id:minecraft:fireworks,Count:1,tag:{Fireworks:{Explosions:[{Type:1b,Flicker:trueTrail:false,Colors:[16777215],FadeColors:[16752934]},{Type:3b,Flicker:trueTrail:false,Colors:[3361970],FadeColors:[8375321]}]}}}}]}|
|2|/execute @a[score_ActivatedSkill_min=6270,score_ActivatedSkill=6279] ~ ~ ~ /playsound entity.creeper.primed master @a[r=16] ~ ~ ~ 1 1.44 0|
|3|/fill -1921 ~-1 ~ -1921 ~-1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ぽむ爆待機|

<div class="datatable3cnp-end"></div>

### 爆破実行部コマンド群

<span class="tagYellow">位置</span> (-1920,8,-146)

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @e[tag=PomPom] add PomPomExplode {Life:25}|リピート|
|2|/gamerule mobGriefing false|条件付き|
|3|/difficulty easy|条件付き|
|4|/execute @e[tag=PomPomExplode] ~ ~ ~ /summon Creeper ~ ~ ~ {CustomName:"ぽむぽむハナビ",ExplosionRadius:6b,Fuse:0s,ignited:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}|条件付き|
|5|/scoreboard players test #EntityCount Global * 0|
|6|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3cnp-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには、以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

### PomPom召喚部

1. **`ActivatedSkill`が6270 ~ 6279**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーの座標上に、**[PomPom](#pompom)を召喚**
   2. 対象プレイヤーから半径16m以内のすべてのプレイヤーに、効果音を鳴らす
2. [爆破実行部](#爆破実行部)を実行

### 爆破実行部

1. **`Life`が25である[PomPom](#pompom)が存在するとき**、以下の事柄を実行 ([PomPom](#pompom)が召喚されてから、1.75秒後)
   1. 対象エンティティに`PomPomExplode`を付与
   2. `PomPomExplode`を付与した数を`#EntityCount`の`Global`に代入
   3. `mobGriefing`をfalseに変更
   4. 難易度をeasyに変更
   5. `PomPomExplode`を持ったエンティティの座標上に、**[ぽむぽむハナビ](#ぽむぽむハナビ)を召喚**
2. `#EntityCount`の`Global`が0以下であるとき、[爆破実行部](#爆破実行部)を停止

### PomPom

```mcfunction
/summon AreaEffectCloud ~ ~ ~ {ReapplicantDelay:20,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:0,RadiusPerTick:0f,WaitTime:10,Age:0,Particle:take,Tags:[SystemEntity,TypeChecked],Passengers:[{id:FireworksRocketEntity,Life:-10,LifeTime:25,Tags:[PomPom,SystemEntity,TypeChecked],FireworksItem:{id:minecraft:fireworks,Count:1,tag:{Fireworks:{Explosions:[{Type:1b,Flicker:trueTrail:false,Colors:[16777215],FadeColors:[16752934]},{Type:3b,Flicker:trueTrail:false,Colors:[3361970],FadeColors:[8375321]}]}}}}]}
```

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|SystemEntity,TypeChecked|
|Passengers|PomPom|

- PomPom

|-|-|
|Name|(None)|
|Type|FireworksRocketEntity|
|Tags|**PomPom**,SystemEntity,TypeChecked|
|Life|**-10**|

### ぽむぽむハナビ

```mcfunction
/summon Creeper ~ ~ ~ {CustomName:”ぽむぽむハナビ”,ExplosionRadius:6b,Fuse:0s,ignited:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ぽむぽむハナビ|
|Type|Creeper|
|Tags|TypeChecked|
