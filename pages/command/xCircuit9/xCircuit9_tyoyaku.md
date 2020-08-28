---
title: 跳躍実行
tags: [コマンド,スキル,忍者,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_tyoyaku.html
datatable2c: true
summary: 忍者のスキルの1つである連舞を実行する。なお、跳躍による攻撃処理は毎tick実行するコマンド群4で行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-169)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

忍者のスキルの1つである連舞を実行する。なお、跳躍による攻撃処理は[毎tick実行するコマンド群4]({{site.baseurl}}/command/xCircuit4/xCircuit4_command.html)で行われる。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/scoreboard players tag @a[score_ActivatedSkill_min=2220,score_ActivatedSkill=2229] add Choyaku|
|2|/scoreboard players add @a[tag=Choyaku] Choyaku 1|
|3|/scoreboard players set @a[tag=Choyaku] NinjaTime 3|
|4|/scoreboard players operation @a[score_ActivatedSkill_min=2222,score_ActivatedSkill=2229] Choyaku < #15 Const|
|5|/scoreboard players operation @a[score_ActivatedSkill_min=2221,score_ActivatedSkill=2221] Choyaku < #10 Const|
|6|/scoreboard players operation @a[score_ActivatedSkill_min=2220,score_ActivatedSkill=2220] Choyaku < #5 Const|
|7|/execute @a[tag=Choyaku] ~ ~ ~ /playsound entity.enderdragon.flap master @a[r=16] ~ ~ ~ 1 1.8 0|
|8|/execute @a[tag=Choyaku] ~ ~ ~ /particle townaura ~ ~ ~ 0.05 0.2 0.05 0 100|
|9|/title @a[tag=Choyaku] times 0 70 10|
|10|/title @a[tag=Choyaku] subtitle {"translate":"                          %1$s Pyon!","with":[{"score":{"name":"*","objective":"Choyaku"}}],"color":"aqua","italic":true,"bold":true}|
|11|/title @a[tag=Choyaku] title {"text":""}|
|12|/effect @a[tag=Choyaku,score_Choyaku_min=15] minecraft:jump_boost 5 14|
|13|/effect @a[tag=Choyaku,score_Choyaku_min=14,score_Choyaku=14] minecraft:jump_boost 5 13|
|14|/effect @a[tag=Choyaku,score_Choyaku_min=13,score_Choyaku=13] minecraft:jump_boost 5 12|
|15|/effect @a[tag=Choyaku,score_Choyaku_min=12,score_Choyaku=12] minecraft:jump_boost 5 11|
|16|/effect @a[tag=Choyaku,score_Choyaku_min=11,score_Choyaku=11] minecraft:jump_boost 5 10|
|17|/effect @a[tag=Choyaku,score_Choyaku_min=10,score_Choyaku=10] minecraft:jump_boost 4 9|
|18|/effect @a[tag=Choyaku,score_Choyaku_min=9,score_Choyaku=9] minecraft:jump_boost 4 8|
|19|/effect @a[tag=Choyaku,score_Choyaku_min=8,score_Choyaku=8] minecraft:jump_boost 4 7|
|20|/effect @a[tag=Choyaku,score_Choyaku_min=7,score_Choyaku=7] minecraft:jump_boost 4 6|
|21|/effect @a[tag=Choyaku,score_Choyaku_min=6,score_Choyaku=6] minecraft:jump_boost 4 5|
|22|/effect @a[tag=Choyaku,score_Choyaku_min=5,score_Choyaku=5] minecraft:jump_boost 3 4|
|23|/effect @a[tag=Choyaku,score_Choyaku_min=4,score_Choyaku=4] minecraft:jump_boost 3 3|
|24|/effect @a[tag=Choyaku,score_Choyaku_min=3,score_Choyaku=3] minecraft:jump_boost 3 2|
|25|/effect @a[tag=Choyaku,score_Choyaku_min=2,score_Choyaku=2] minecraft:jump_boost 3 1|
|26|/effect @a[tag=Choyaku,score_Choyaku_min=1,score_Choyaku=1] minecraft:jump_boost 3 0|
|27|/scoreboard players tag @a[tag=Choyaku] remove Choyaku|

<div class="datatable2c-end"></div>

## 詳細

1. **`ActivatedSkill`が2220 ~ 2229**であるすべてのプレイヤーに、`Choyaku`(タグ)を付与
2. `Choyaku`(タグ)を持つすべてのプレイヤーの`Choyaku`(スコア)に1を足し、`NInjaTime`を3に設定
3. **`ActivatedSkill`が2222 ~ 2229**であるすべてのプレイヤーの`Choyaku`(スコア)が15を超えた場合、**15に設定**
4. **`ActivatedSkill`が2221**であるすべてのプレイヤーの`Choyaku`(スコア)が10を超えた場合、**10に設定**
5. **`ActivatedSkill`が2220**であるすべてのプレイヤーの`Choyaku`(スコア)が5を超えた場合、**5に設定**
6. `Choyaku`(タグ)を持つすべてのプレイヤーから、**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
7. `Choyaku`(タグ)を持つすべてのプレイヤーの座標上で、**パーティクルを表示**
8. `Choyaku`(タグ)を持つすべてのプレイヤーに「<span style="color:aqua;bold:true;italic:true;">n Pyon!</span>」とのメッセージを表示
9. **`Choyaku`(スコア)の値に応じた、異なるレベルや効果時間の跳躍を付与**
10. `Choyaku`(タグ)を持つすべてのプレイヤーから`Choyaku`(タグ)を削除

### Choyakuと跳躍効果

|Choyaku|跳躍レベル|跳躍効果時間/s|
|:-:|:-:|:-:|
|1|1|3|
|2|2|3|
|3|3|3|
|4|4|3|
|5|5|3|
|6|6|4|
|7|7|4|
|8|8|4|
|9|9|4|
|10|10|5|
|11|11|5|
|12|12|5|
|13|13|5|
|14|14|5|
|15|15|5|
