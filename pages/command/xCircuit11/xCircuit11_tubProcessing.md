---
title: タライ共通処理
tags: [コマンド,スキル,召喚士,スキル]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_tubProcessing.html
datatable3cnp: true
summary: 召喚士のタライ系スキルの共通処理を実行する。きらきらタライ実行時のmobGriefing、難易度の変更ときらきらタライの召喚などを行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,14,-148)

<span class="tagBlack">呼び出し元</span> [金タライ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_goldTub.html), [あつあつタライ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_hotTub.html), [きらきらタライ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_kirakiraTub.html)

召喚士のタライ系スキルの共通処理を実行する。きらきらタライ実行時の`mobGriefing`、難易度の変更と[きらきらタライ](#きらきらタライ)の召喚などを行う。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @e[tag=KiraTnt] add KiraActivated {OnGround:true}|
|2|/gamerule mobGriefing false|条件付き|
|3|/difficulty easy|条件付き|
|4|/execute @e[tag=KiraActivated] ~ ~ ~ /summon Creeper ~ ~0.5 ~ {CustomName:"きらきらタライ",ExplosionRadius:4b,Fuse:0s,ignited:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}|条件付き|
|5|/kill @e[tag=KiraActivated]|条件付き|
|6|/execute @e[tag=AtsuTarai] ~ ~ ~ /playsound entity.cow.step master @a[r=16] ~ ~ ~ 0.3 2 0|
|7|/execute @r[type=FallingSand,tag=AtsuTarai,c=10] ~ ~ ~ /particle flame ~ ~ ~ 0.3 0.1 0.3 0 5 force|条件付き|
|8|/execute @e[tag=Tarai,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 14 -148 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###タライ共通|

<div class="datatable3cnp-end"></div>

<span class="expandButton" onClick="openCloseBE(`openHere1-begin`)">+</span>未稼働コマンド

<div class="openHere-begin openHere1-begin"></div>

- `FallingSand`が消えないバグ治らなかったら全体化

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @e[tag=Tarai] add TaraiFailed {FallDistance:0f}|
|2|/kill @e[tag=TaraiFailed]|条件付き|

<div class="datatable3cnp-end"></div>

<div class="openHere-end openHere1-end"></div>

## 詳細

1. **`OnGround`がtrue**であり、**`KiraTnt`を持つ**すべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティに**`KiraActivated`を付与**
   2. **`mobGriefing`をfalseに変更**
   3. **難易度をeasyに変更**
   4. `KiraActivated`を持つすべてのエンティティから0.5m上に、**[きらきらタライ](#きらきらタライ)を召喚**
   5. `KidaActivated`を持つすべてのエンティティをキル
2. `AtsuTarai`を持つすべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径16m以内のすべてにプレイヤーに、効果音を鳴らす
   2. パーティクルを表示
3. `Tarai`を持つエンティティが存在するとき、再び[タライ共通処理]({{site.baseurl}}/command/xCircuit11/xCircuit11_tubProcessing.html)を実行

### きらきらタライ

```mcfunction
/summon Creeper ~ ~0.5 ~ {CustomName:"きらきらタライ",ExplosionRadius:4b,Fuse:0s,ignited:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|きらきらタライ|
|Type|Creeper|
|Tags|TypeChecked|
|ExplosionRadius|4|
|Fuse|0|
