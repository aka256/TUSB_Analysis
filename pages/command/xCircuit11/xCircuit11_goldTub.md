---
title: 金タライ実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_goldTub.html
datatable3cnp: true
summary: 召喚士のスキルの1つである金タライを実行する。ダメージを与えるPreKanaTaraiの召喚、感圧版を消すためのタグの書き換え、タライ共通処理の実行などを行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,4,-157)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

<span class="tagBlue">分岐先</span> [タライ共通処理]({{site.baseurl}}/command/xCircuit11/xCircuit11_tubProcessing.html)

召喚士のスキルの1つである金タライを実行する。ダメージを与える[PreKanaTarai](#prekanatarai)の召喚、感圧版を消すためのタグの書き換え、[タライ共通処理]({{site.baseurl}}/command/xCircuit11/xCircuit11_tubProcessing.html)の実行などを行う。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[score_ActivatedSkill_min=6210,score_ActivatedSkill=6219] ~ ~ ~ /execute @e[r=15,tag=Enemy] ~ ~ ~ /summon FallingSand ~ ~2.5 ~ {Block:"minecraft:light_weighted_pressure_plate",Time:1,DropItem:false,HurtEntities:true,FallHurtMax:25,FallHurtAmount:25f,FallDistance:1f,Tags:[PreKanaTarai,Tarai]}|
|2|/execute @a[score_ActivatedSkill_min=6210,score_ActivatedSkill=6219] ~ ~2.5 ~ /entitydata @e[r=15,tag=PreKanaTarai] {Block:minecraft:piston_extension,Tags:[KanaTarai,Tarai]}|
|3|/execute @a[score_ActivatedSkill_min=6210,score_ActivatedSkill=6219] ~ ~ ~ /execute @e[r=15,tag=Enemy,c=10] ~ ~2.5 ~ /particle crit ~ ~ ~ 0.3 0.1 0.3 1 10 force|
|4|/execute @a[score_ActivatedSkill_min=6210,score_ActivatedSkill=6219] ~ ~ ~ /playsound block.anvil.land master @a[r=32] ~ ~100 ~ 0.01 0.5 0.2|条件付き|
|5|/execute 0-0-1-0-1 ~ 14 -148 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###タライ共通|

<div class="datatable3cnp-end"></div>

## 詳細

1. **`ActivatedSkill`が6210 ~ 6219**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから半径15m以内の`Enemy`を持つすべてのエンティティから2.5m上に、**[PreKanaTarai](#prekanatarai)を召喚**
   2. 対象プレイヤーから半径15m以内の**[PreKanaTarai](#prekanatarai)のタグを[PreKanaTarai書き換えタグ](#prekanatarai書き換えタグ)の通りに書き換える** (スキル実行後に、感圧版が残らないようにする処理)
   3. 対象プレイヤーから半径15m以内の`Enemy`を持つすべてのエンティティの座標上に、パーティクルを表示
   4. 対象プレイヤーから半径32mのすべてのプレイヤーに効果音を鳴らす
2. [タライ共通処理]({{site.baseurl}}/command/xCircuit11/xCircuit11_tubProcessing.html)を実行

### PreKanaTarai書き換えタグ

```mcfunction
{
  Block:minecraft:**piston_extension**,
  Tags:[
    **KanaTarai**,
    **Tarai**
  ]
}
```

### PreKanaTarai

```mcfunction
/summon FallingSand ~ ~2.5 ~ {Block:"minecraft:light_weighted_pressure_plate",Time:1,DropItem:false,HurtEntities:true,FallHurtMax:25,FallHurtAmount:25f,FallDistance:1f,Tags:[PreKanaTarai,Tarai]}
```

|-|-|
|Name|(None)|
|Type|FallingSand (light_weighted_pressure_plate)|
|Tags|**PreKanaTarai**,**Tarai**|
|HurtEntities|true|
|FallHurtMax|**25**|
