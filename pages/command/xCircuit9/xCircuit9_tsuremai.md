---
title: 連舞実行
tags: [コマンド,スキル,忍者,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_tsuremai.html
datatable2c: true
summary: 忍者のスキルの1つである連舞を実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-169)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

忍者のスキルの1つである連舞を実行する。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/scoreboard players tag @a[score_ActivatedSkill_min=2210,score_ActivatedSkill=2219] add Tsuremai|
|2|/scoreboard players add @a[tag=Tsuremai] Tsuremai 1|
|3|/scoreboard players set @a[tag=Tsuremai] NinjaTime 2|
|4|/scoreboard players operation @a[score_ActivatedSkill_min=2212,score_ActivatedSkill=2219] Tsuremai < #15 Const|
|5|/scoreboard players operation @a[score_ActivatedSkill_min=2211,score_ActivatedSkill=2211] Tsuremai < #10 Const|
|6|/scoreboard players operation @a[score_ActivatedSkill_min=2210,score_ActivatedSkill=2210] Tsuremai < #5 Const|
|7|/execute @a[tag=Tsuremai] ~ ~ ~ /playsound entity.zombie.attack_iron_door master @a[r=16] ~ ~ ~ 1 1.4 0|
|8|/execute @a[tag=Tsuremai] ~ ~ ~ /particle magicCrit ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|
|9|/title @a[tag=Tsuremai] times 0 30 10|
|10|/title @a[tag=Tsuremai] subtitle {"translate":"                          %1$s HIT!","with":[{"score":{"name":"*","objective":"Tsuremai"}}],"color":"red","italic":true,"bold":true}|
|11|/title @a[tag=Tsuremai] title {"text":""}|
|12|/effect @a[tag=Tsuremai,score_Tsuremai_min=15] minecraft:strength 2 59|
|13|/effect @a[tag=Tsuremai,score_Tsuremai_min=14,score_Tsuremai=14] minecraft:strength 2 55|
|14|/effect @a[tag=Tsuremai,score_Tsuremai_min=13,score_Tsuremai=13] minecraft:strength 2 51|
|15|/effect @a[tag=Tsuremai,score_Tsuremai_min=12,score_Tsuremai=12] minecraft:strength 2 47|
|16|/effect @a[tag=Tsuremai,score_Tsuremai_min=11,score_Tsuremai=11] minecraft:strength 2 43|
|17|/effect @a[tag=Tsuremai,score_Tsuremai_min=10,score_Tsuremai=10] minecraft:strength 2 39|
|18|/effect @a[tag=Tsuremai,score_Tsuremai_min=9,score_Tsuremai=9] minecraft:strength 2 35|
|19|/effect @a[tag=Tsuremai,score_Tsuremai_min=8,score_Tsuremai=8] minecraft:strength 2 31|
|20|/effect @a[tag=Tsuremai,score_Tsuremai_min=7,score_Tsuremai=7] minecraft:strength 2 27|
|21|/effect @a[tag=Tsuremai,score_Tsuremai_min=6,score_Tsuremai=6] minecraft:strength 2 23|
|22|/effect @a[tag=Tsuremai,score_Tsuremai_min=5,score_Tsuremai=5] minecraft:strength 2 19|
|23|/effect @a[tag=Tsuremai,score_Tsuremai_min=4,score_Tsuremai=4] minecraft:strength 2 15|
|24|/effect @a[tag=Tsuremai,score_Tsuremai_min=3,score_Tsuremai=3] minecraft:strength 2 11|
|25|/effect @a[tag=Tsuremai,score_Tsuremai_min=2,score_Tsuremai=2] minecraft:strength 2 7|
|26|/effect @a[tag=Tsuremai,score_Tsuremai_min=1,score_Tsuremai=1] minecraft:strength 2 3|
|27|/scoreboard players tag @a[tag=Tsuremai] remove Tsuremai|

<div class="datatable2c-end"></div>

## 詳細

1. **`ActivatedSkill`が2210 ~ 2219**であるすべてのプレイヤーに、**`Tsuremai`(タグ)を付与**
2. `Tsuremai`(タグ)を持っているすべてのプレイヤーの`Tsuremai`(スコア)に1を足し、`NinjaTime`を2に設定
3. **`ActivatedSkill`が2212 ~ 2219**であるすべてのプレイヤーの`Tsuremai`(スコア)が15を超えた場合、**15に設定**
4. **`ActivatedSkill`が2211**であるすべてのプレイヤーの`Tsuremai`(スコア)が10を超えた場合、**10に設定**
5. **`ActivatedSkill`が2210**であるすべてのプレイヤーの`Tsuremai`(スコア)が5を超えた場合、**5に設定**
6. `Tsuremai`(タグ)を持つすべてのプレイヤーから、**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
7. `Tsuremai`(タグ)を持つすべてのプレイヤーの座標上で、**パーティクルを表示**
8. `Tsuremai`(タグ)を持つすべてのプレイヤーに「<span style="color:red;bold:true;italic:true;">n HIT!</span>」とのメッセージを表示
9. **`Tsuremai`(スコア)の値の4倍分のレベルの攻撃力上昇を2秒間付与**
10. `Tsuremai`(タグ)を持つすべてのプレイヤーから`Tsuremai`(タグ)を削除
