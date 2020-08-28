---
title: アイサツ実行
tags: [コマンド,スキル,忍者,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_aisatsu.html
datatable3c: true
summary: 忍者のスキルの1つであるアイサツを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-172)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

忍者のスキルの1つであるアイサツを実行する。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[score_ActivatedSkill_min=2000,score_ActivatedSkill=2009] ~ ~ ~ /playsound entity.irongolem.attack master @a[r=16] ~ ~ ~ 1 1.4 0|
|2|/tp @a[score_ActivatedSkill_min=2000,score_ActivatedSkill=2009] ~ ~ ~ ~ 90|
|3|/execute @a[score_ActivatedSkill_min=2000,score_ActivatedSkill=2009] ~ ~ ~ /tellraw @a {"translate":"[%1$s] ドーモ、 %2\$s %3\$s %4\$s =サン、 %1\$sです","with":[{"selector":"@a[c=1]"},{"selector":"@e[type=!Player,tag=!SystemEntity,r=5]","color":"yellow"},{"selector":"@e[type=!Player,tag=!SystemEntity,rm=5,r=10]","color":"white"},{"selector":"@e[type=!Player,tag=!SystemEntity,rm=10,r=15]","color":"gray"}]}|
|4|/execute @a[score_ActivatedSkill_min=2000,score_ActivatedSkill=2009] ~ ~ ~ /execute @e[r=15,tag=Enemy,c=1] ~ ~ ~ /scoreboard players tag @a[score_ActivatedSkill_min=2000,score_ActivatedSkill=2009] add Aisatsu|
|5|/execute @a[score_ActivatedSkill_min=2000,score_ActivatedSkill=2009,tag=Aisatsu] ~ ~ ~ /me は戦闘に備えた！|条件付き|

<div class="datatable3c-end"></div>

## 詳細

- **`ActivatedSkill`が2000 ~ 2009**であるプレイヤーを対象として、以下の事柄を実行

1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
2. 対象プレイヤーを**強制的に下を向かせる**
3. 対象プレイヤーに「[(PlayerName)] ドーモ、(<span style="color: yellow;background-color: gray">Entity1</span>)(<span style="color: white;background-color: gray">Entity2</span>)(<span style="color: gray">Entity3</span>) =サン、(PlayerName)です」とのメッセージを表示
   - PlayerName: 対象プレイヤーの名前
   - <span style="color: yellow;background-color: gray">Entity1</span>: **半径5m以内**のプレイヤーでなく、かつ`SystemEntity`でもないエンティティ
   - <span style="color: white;background-color: gray">Entity2</span>: **半径10m以内**のプレイヤーでなく、かつ`SystemEntity`でもないエンティティ
   - <span style="color: gray">Entity3</span>: **半径15m以内**のプレイヤーでなく、かつ`SystemEntity`でもないエンティティ
4. 対象プレイヤーから**半径15m以内に`Enemy`を持つエンティティが一体でも存在するとき**、対象プレイヤーに`Aisatsu`を付与し、「(Player)は戦闘に備えた！」とのメッセージを表示
