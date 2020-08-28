---
title: 呼魂実行
tags: [コマンド,スキル,忍者]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_kodama.html
datatable2c: true
summary: 忍者のスキルの1つである呼魂を実行する。また、タワーバンクからのアイテムの吸出し対策も行っている。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,14,-172)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

忍者のスキルの1つである呼魂を実行する。また、タワーバンクからのアイテムの吸出し対策も行っている。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=2030,score_ActivatedSkill=2039] ~ ~ ~ /playsound entity.wolf.shake master @a[r=32] ~ ~ ~ 2 0.6 0|
|2|/execute @a[score_ActivatedSkill_min=2030,score_ActivatedSkill=2039] ~ ~ ~ /particle enchantmenttable ~ ~2 ~ 0 0 0 5 100 force|
|3|/execute @e[-2827,57,-410,dx=9,dy=123,dz=9,type=Item] ~ ~ ~ detect ~ 60 ~ minecraft:iron_trapdoor -1 /scoreboard players tag @e[dx=0,type=Item,c=1] add SystemEntity|
|4|/execute @a[score_ActivatedSkill_min=2030,score_ActivatedSkill=2030] ~ ~ ~ /tp @e[r=10,type=Item,tag=!SystemEntity,c=-5] @a[c=1]|
|5|/execute @a[score_ActivatedSkill_min=2031,score_ActivatedSkill=2039] ~ ~ ~ /tp @e[r=20,type=Item,tag=!SystemEntity,c=-5] @a[c=1]|
|6|/scoreboard players tag @e[-2827,57,-410,dx=9,dy=123,dz=9,type=Item,tag=SystemEntity] remove SystemEntity|

<div class="datatable2c-end"></div>

## 詳細

- **`ActivatedSkill`が2030 ~ 3039**であるプレイヤーを対象として、以下の事柄を実行

1. 対象プレイヤーから**半径32m以内**のすべてのプレイヤーに**効果音を鳴らす**
2. 対象プレイヤーの座標上で**パーティクルを表示**
3. タワーバンク内のすべてのアイテムエンティティに`SystemEntity`を付与 (**プレイヤー間の不正対策と思われる。**)
4. **`ActivatedSkill`が2030**であるプレイヤーから、**半径10m以内**の`SystemEntity`を持っていないアイテムエンティティを、**一番遠くから5つ**プレイヤーの座標上に移動させる
5. **`ActivatedSkill`が2030 ~ 2039**であるプレイヤーから、**半径20m以内**の`SystemEntity`を持っていないアイテムエンティティを、**一番遠くから5つ**プレイヤーの座標上に移動させる
6. タワーバンク内の`SystemEntity`を持ったアイテムエンティティから`SystemEntity`を削除
