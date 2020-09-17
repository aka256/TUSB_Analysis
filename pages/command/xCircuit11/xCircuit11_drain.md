---
title: ドレイン実行
tags: [コマンド,スキル,黒魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-17 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_drain.html
datatable3c: true
summary: 黒魔導士のスキルの1つであるドレインを実行する。敵Mobへの即時ダメージ、スキル実行者への即時回復、衝撃吸収の付与などを行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,13,-154)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるドレインを実行する。敵Mobへの即時ダメージ、スキル実行者への即時回復、衝撃吸収の付与などを行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[score_ActivatedSkill_min=5240,score_ActivatedSkill=5249] ~ ~ ~ /execute @e[r=10,tag=LivingEnemy,c=1] ~ ~ ~ /playsound entity.endermen.teleport master @a[r=16] ~ ~ ~ 1 0.5 0|
|2|/execute @a[score_ActivatedSkill_min=5240,score_ActivatedSkill=5249] ~ ~ ~ /execute @e[r=10,tag=LivingEnemy,c=1] ~ ~ ~ /particle witchMagic ~ ~1 ~ 0.2 0.5 0.2 0.1 30 force|条件付き|
|3|/execute @a[score_ActivatedSkill_min=5240,score_ActivatedSkill=5249] ~ ~ ~ /execute @e[r=10,tag=LivingEnemy,c=1] ~ ~ ~ /execute @a[r=10,score_ActivatedSkill_min=5240,score_ActivatedSkill=5249] ~ ~ ~ /particle portal ~ ~1.5 ~ 0.1 0.1 0.1 1 90 force|条件付き|
|4|/execute @a[score_ActivatedSkill_min=5240,score_ActivatedSkill=5240] ~ ~ ~ /effect @e[r=10,tag=LivingEnemy,c=1] minecraft:instant_damage 1 1 false|
|5|/execute @a[score_ActivatedSkill_min=5240,score_ActivatedSkill=5240] ~ ~ ~ /execute @e[r=10,tag=LivingEnemy,c=1] ~ ~ ~ /effect @a[r=10,score_ActivatedSkill_min=5240,score_ActivatedSkill=5240] minecraft:instant_health 1 0 true|条件付き|
|6|/execute @a[score_ActivatedSkill_min=5240,score_ActivatedSkill=5240] ~ ~ ~ /execute @e[r=10,tag=LivingEnemy,c=1] ~ ~ ~ /effect @a[r=10,score_ActivatedSkill_min=5240,score_ActivatedSkill=5240] minecraft:absorption 15 0 true|条件付き|
|7|/execute @a[score_ActivatedSkill_min=5241,score_ActivatedSkill=5249] ~ ~ ~ /effect @e[r=10,tag=LivingEnemy,c=1] minecraft:instant_damage 1 2 false|
|8|/execute @a[score_ActivatedSkill_min=5241,score_ActivatedSkill=5249] ~ ~ ~ /execute @e[r=10,tag=LivingEnemy,c=1] ~ ~ ~ /effect @a[r=10,score_ActivatedSkill_min=5241,score_ActivatedSkill=5249] minecraft:instant_health 1 1 true|条件付き|
|9|/execute @a[score_ActivatedSkill_min=5241,score_ActivatedSkill=5249] ~ ~ ~ /execute @e[r=10,tag=LivingEnemy,c=1] ~ ~ ~ /effect @a[r=10,score_ActivatedSkill_min=5241,score_ActivatedSkill=5249] minecraft:absorption 15 1 true|条件付き|

<div class="datatable3c-end"></div>

## 詳細

1. **`ActivatedSkill`が5240 ~ 5249**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから**半径10m以内の最も近い`LivingEnemy`を持つエンティティを1体**選び、以下の事柄を実行
      1. 対象エンティティから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
      2. **パーティクルを表示**
2. **`ActivatedSkill`が5240**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから**半径10m以内の最も近い`LivingEnemy`を持つエンティティを1体**選び、以下の事柄を実行
      1. **即時ダメージLv.2を付与**
      2. 対処エンティティから**半径10m以内の対象プレイヤー**に、**即時回復Lv.2と衝撃吸収Lv.1 15秒間を付与**
3. **`ActivatedSkill`が5241 ~ 5249**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから**半径10m以内の最も近い`LivingEnemy`を持つエンティティを1体**選び、以下の事柄を実行
      1. **即時ダメージLv.3を付与**
      2. 対処エンティティから**半径10m以内の対象プレイヤー**に、**即時回復Lv.2と衝撃吸収Lv.2 15秒間を付与**
