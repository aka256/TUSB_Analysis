---
title: ワイルドヒーリング実行
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-10 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_wildHealing.html
datatable3c: true
summary: 狩人のスキルの1つであるワイルドヒーリングを実行する。なお、`WildHealing`の宣言は毎tick実行するコマンド群6で行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-164)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

狩人のスキルの1つであるワイルドヒーリングを実行する。なお、`WildHealing`の宣言は[毎tick実行するコマンド群6]({{site.baseurl}}/command/xCircuit6/xCircuit6_command.html)で行われる。

## コマンド群

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=3220,score_ActivatedSkill=3229] ~ ~ ~ /playsound entity.player.levelup master @a[r=16] ~ ~ ~ 1 1.9 0|
|2|/execute @a[score_ActivatedSkill_min=3220,score_ActivatedSkill=3229] ~ ~ ~ /particle heart ~ ~1 ~ 0.5 0.5 0.5 0 30 force|  
|3|/scoreboard players operation @a[score_ActivatedSkill_min=3220,score_ActivatedSkill=3220] WildHealing *= #2 Const|
|4|/scoreboard players operation @a[score_ActivatedSkill_min=3221,score_ActivatedSkill=3229] WildHealing *= #3 Const|
|5|/execute @a[score_ActivatedSkill_min=3220,score_ActivatedSkill=3229] ~ ~ ~ /scoreboard players operation @a[c=1] HealCount += @a[c=1] WildHealing|
|6|/scoreboard players reset @a[score_ActivatedSkill_min=3220,score_ActivatedSkill=3229] WildHealing|
|7|/scoreboard players tag @a[score_ActivatedSkill_min=3221,score_ActivatedSkill=3229] add ClearBadStatus|

## 詳細

- **`ActivatedSkill`が3220 ~ 3229**であるすべてのプレイヤーに、以下の事柄を実行

1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
2. 対象プレイヤーの座標上に**パーティクルを表示**
3. **`ActivatedSkill`が3220**であるすべてのプレイヤーの**`WildHealing`を2倍にする**
4. **`ActivatedSkill`が3221 ~ 3229**であるすべてのプレイヤーの**`WildHealing`を3倍にする**
5. 対象プレイヤーの**`HealCount`に`WildHealing`を足しこむ**
6. 対象プレイヤーから、`WildHealing`を削除
7. **`ActivatedSkill`が3221 ~ 3229**であるすべてのプレイヤーに**`ClearBadStatus`を付与**
