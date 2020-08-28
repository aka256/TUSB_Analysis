---
title: 薙ぎ払い実行
tags: [コマンド,スキル,剣士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_slaughter.html
datatable2c: true
summary: 剣士のスキルの1つである薙ぎ払いを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-174)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

剣士のスキルの1つである薙ぎ払いを実行する。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=1210,score_ActivatedSkill=1219] ~ ~ ~ /execute @e[r=5,tag=Enemy] ~ ~ ~ /playsound entity.enderdragon.flap master @a[r=32] ~ ~ ~ 2 1.2 0|
|2|/execute @a[score_ActivatedSkill_min=1210,score_ActivatedSkill=1219] ~ ~ ~ /execute @e[r=5,tag=Enemy] ~ ~ ~ /particle crit ~ ~4.5 ~ 0.3 3 0.3 0.1 50 force|
|3|/execute @a[score_ActivatedSkill_min=1210,score_ActivatedSkill=1210] ~ ~ ~ /entitydata @e[r=5,tag=Enemy] {ActiveEffects:[{Id:25b,Duration:3,Amplifier:99b,ShowParticles:true}],FallDistance:25f}|
|4|/execute @a[score_ActivatedSkill_min=1211,score_ActivatedSkill=1211] ~ ~ ~ /entitydata @e[r=5,tag=Enemy] {ActiveEffects:[{Id:25b,Duration:5,Amplifier:99b,ShowParticles:true}],FallDistance:50f}|
|5|/execute @a[score_ActivatedSkill_min=1212,score_ActivatedSkill=1219] ~ ~ ~ /entitydata @e[r=5,tag=Enemy] {ActiveEffects:[{Id:25b,Duration:7,Amplifier:99b,ShowParticles:true}],FallDistance:75f}|

<div class="datatable2c-end"></div>

## 詳細

- **`ActivatedSkill`が1210 ~ 1219**であるプレイヤーを対象として、以下の事柄を実行

1. 対象プレイヤーから**半径5m以内**に存在する`Enemy`を持ったエンティティから、さらに**半径32m以内**にいるすべてのプレイヤーに、**効果音を鳴らす**
2. 対象プレイヤーから**半径5m以内**に存在する`Enemy`を持ったエンティティの座標上で、**パーティクルを表示**
3. `ActivatedSkill`の値によって異なる効果時間の**浮遊 Lv.100**と**落下ダメージ**(*FallDistance*)を付与([ActivatedSkillと浮遊、落下ダメージ](#activatedskillと浮遊落下ダメージ)を参照)

### ActivatedSkillと浮遊、落下ダメージ

ダメージについては少々テキトウに調べたので、参考程度に。

|ActivatedSkill|スキルレベル|浮遊効果時間[s]|FallDistance|浮遊ダメージ|FallDistance<br>ダメージ|合計ダメージ|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|1210|1|0.15|25|13|22|35|
|1211|2|0.25|50|38|47|85|
|1212 ~ 1219|3|0.35|75|58|72|130|
