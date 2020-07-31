---
title: エンチェイス探索処理
tags: [コマンド,狩人,スキル]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-23 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit5/xCircuit5_enchaseSearchProcessing.html
datatable3c: true
summary: 狩人のスキルの1つである、エンチェイスの繰り返し処理を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,9,-186)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群5]({{site.baseurl}}/command/xCircuit5/xCircuit5_command.html)

狩人のスキルの1つである、エンチェイスの繰り返し処理を行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=Chaser,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 9 -186 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###リピート|
|2|/execute @e[tag=Chaser1] ~ ~ ~ /scoreboard players tag @e[r=4,tag=Enemy,c=1] add ChaseTarget|
|3|/execute @e[tag=ChaseTarget] ~ ~ ~ /scoreboard players tag @e[r=4,tag=Chaser1] add UsedChaser|条件付き|
|4|/execute @e[tag=ChaseTarget] ~ ~ ~ /scoreboard players tag @e[r=4,tag=Chaser1] remove Chaser1|条件付き|
|5|/execute @e[tag=Chaser2] ~ ~ ~ /scoreboard players tag @e[r=6,tag=Enemy,c=1] add ChaseTarget|
|6|/execute @e[tag=ChaseTarget] ~ ~ ~ /scoreboard players tag @e[r=6,tag=Chaser2] add UsedChaser|条件付き|
|7|/execute @e[tag=ChaseTarget] ~ ~ ~ /scoreboard players tag @e[r=6,tag=Chaser2] remove Chaser2|条件付き|
|8|/execute @e[tag=UsedChaser] ~ ~ ~ /tp @e[dx=0,tag=UsedChaser,c=1] @e[r=6,tag=ChaseTarget,c=1]|
|9|/scoreboard players tag @e[tag=ChaseTarget] add SkillTarget|条件付き|
|10|/scoreboard players tag @e[tag=ChaseTarget] remove ChaseTarget|条件付き|
|11|/scoreboard players tag @e[tag=UsedChaser] remove Chaser|条件付き|
|12|/scoreboard players tag @e[tag=UsedChaser] add Garbage|条件付き|
|13|/tp @e[tag=UsedChaser] ~ ~0.02 ~ |条件付き|
|14|/entitydata @e[tag=UsedChaser] {Motion:[0d,2.5d,0d]}|条件付き|
|15|/scoreboard players tag @e[tag=UsedChaser] remove UsedChaser|条件付き|

<div class="datatable3c-end"></div>

## 詳細

1. `Chaser`を持つ一つのエンティティが存在するとき、(-1920,9,-186)にある[エンチェイス探索処理](#about)を実行 (要は条件を満たしている限り、自身を呼び出し続けている。)
2. `Chaser1`を持つすべてのエンティティから半径**4m以内**にいる`Enemy`を持つエンティティ一体に`ChaseTarget`を付与し、以下の事柄を実行
   - `ChaseTarget`を持つエンティティから半径**4m以内**にいる`Chaser1`に`UsedChaser`を付与し、`Chaser1`を削除
3. `Chaser2`を持つすべてのエンティティから半径**6m以内**にいる`Enemy`を持つエンティティ一体に`ChaseTarget`を付与し、以下の事柄を実行
   - `ChaseTarget`を持つエンティティから半径**6m以内**にいる`Chaser2`に`UsedChaser`を付与し、`Chaser2`を削除
4. `UsedChaser`から同座標上に存在する`UsedChaser`1つを、そこから半径6m以内に存在する最も近い`ChaseTarget`に移動し、以下の事柄を実行
   1. `ChaseTarget`を持つすべてのエンティティに`SkillTarget`を付与し、`ChaseTarget`を削除
   2. `UsedChaser`を持つすべてのエンティティから`Chaser`を削除し、`Garbage`を付与
   3. `UsedChaser`を持つすべてのエンティティを0.02m上に移動
   4. `UsedChaser`を持つすべてのエンティティの移動ベクトルのx,z成分を0、y成分を2.5に設定
   5. `UsedChaser`を持つすべてのエンティティから`UsedChaser`を削除
