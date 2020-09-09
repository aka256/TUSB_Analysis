---
title: 照明弾実行
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-09 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_flare.html
datatable2cnp: true
summary: 狩人のスキルの1つである照明弾を実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,11,-167)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

狩人のスキルの1つである照明弾を実行する。

## コマンド群

<div class="datatabel2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=3010,score_ActivatedSkill=3019] ~ ~ ~ /summon FireworksRocketEntity ~ ~ ~ {LifeTime:20,FireworksItem:{id:minecraft:fireworks,Count:1,tag:{Fireworks:{Explosions:[{Type:1b,Flicker:true,Trail:true,Colors:[16752934],FadeColors:[16777215]},{Type:0b,Flicker:false,Trail:false,Colors:[16777215,16777215,16777215],FadeColors:[16752934]}]}}},Tags:[TypeChecked]}|
|2|/execute @a[score_ActivatedSkill_min=3010,score_ActivatedSkill=3019] ~ ~ ~ /effect @a[r=30] minecraft:night_vision 60 0|
|3|/execute @a[score_ActivatedSkill_min=3010,score_ActivatedSkill=3019] ~ ~ ~ /effect @a[r=30] minecraft:blindness 0|

<div class="datatabel2cnp-end"></div>

## 詳細

- **`ActivatedSkill`が3010 ~ 3019**であるすべてのプレイヤーを対象として、以下の事柄を実行

1. 対象プレイヤーの座標上に、発射されたロケット花火を召喚
2. 対象プレイヤーから**半径30m以内のすべてのプレイヤー**に**暗視Lv.1 を60秒間**付与し、**盲目を削除**する
