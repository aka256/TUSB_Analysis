---
title: ステークスファイア勝ち反映
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-05 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit13/xCircuit13_stakesWinProcessing.html
datatable3c: true
summary: 狩人のスキルの一つであるステークスファイアの成功時の矢の攻撃力の10倍化処理を行う。なお、10倍化可能な矢のdamageは2 ~ 10までである。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,8,-141)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)

狩人のスキルの一つであるステークスファイアの成功時の矢の攻撃力の10倍化処理を行う。なお、10倍化可能な矢の`damage`は2 ~ 10までである。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players set @e[tag=StakesChange] TargetCheck 20 {damage:2d}|
|2|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=20,c=1] {damage:20d}|条件付き|
|3|/scoreboard players set @e[tag=StakesChange] TargetCheck 30 {damage:3d}|
|4|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=30,c=1] {damage:30d}|条件付き|
|5|/scoreboard players set @e[tag=StakesChange] TargetCheck 35 {damage:3.5d}|
|6|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=35,c=1] {damage:35d}|条件付き|
|7|/scoreboard players set @e[tag=StakesChange] TargetCheck 40 {damage:4d}|
|8|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=40,c=1] {damage:40d}|条件付き|
|9|/scoreboard players set @e[tag=StakesChange] TargetCheck 45 {damage:4.5d}|
|10|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=45,c=1] {damage:45d}|条件付き|
|11|/scoreboard players set @e[tag=StakesChange] TargetCheck 50 {damage:5d}|
|12|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=50,c=1] {damage:50d}|条件付き|
|13|/scoreboard players set @e[tag=StakesChange] TargetCheck 55 {damage:5.5d}|
|14|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=55,c=1] {damage:55d}|条件付き|
|15|/scoreboard players set @e[tag=StakesChange] TargetCheck 60 {damage:6d}|
|16|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=60,c=1] {damage:60d}|条件付き|
|17|/scoreboard players set @e[tag=StakesChange] TargetCheck 65 {damage:6.5d}|
|18|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=65,c=1] {damage:65d}|条件付き|
|19|/scoreboard players set @e[tag=StakesChange] TargetCheck 70 {damage:7d}|
|20|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=70,c=1] {damage:70d}|条件付き|
|21|/scoreboard players set @e[tag=StakesChange] TargetCheck 75 {damage:7.5d}|
|22|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=75,c=1] {damage:75d}|条件付き|
|23|/scoreboard players set @e[tag=StakesChange] TargetCheck 80 {damage:8d}|
|24|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=80,c=1] {damage:80d}|条件付き|
|25|/scoreboard players set @e[tag=StakesChange] TargetCheck 85 {damage:8.5d}|
|26|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=85,c=1] {damage:85d}|条件付き|
|27|/scoreboard players set @e[tag=StakesChange] TargetCheck 90 {damage:9d}|
|28|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=90,c=1] {damage:90d}|条件付き|
|29|/scoreboard players set @e[tag=StakesChange] TargetCheck 95 {damage:9.5d}|
|30|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=95,c=1] {damage:95d}|条件付き|
|31|/scoreboard players set @e[tag=StakesChange] TargetCheck 100 {damage:10d}|
|32|/execute @e[tag=StakesChange] ~ ~ ~ /entitydata @e[dx=0,score_TargetCheck_min=100,c=1] {damage:100d}|条件付き|
|33|/scoreboard players reset @e[tag=StakesChange] TargetCheck|
|34|/scoreboard players tag @e[tag=StakesChange] remove StakesChange|

<div class="datatable3c-end"></div>

## 詳細

1. `StakesChange`を持つ矢の`damage`の値(通常は2)に応じて、`TargetCheck`に異なる値を代入
2. `StakesChange`を持つすべてのエンティティと同一座標上のエンティティの`TargetCheck`の値に応じて、`damage`の値を変更

**要は、`StakesChange`を持った矢の`damage`を10倍にしている。**

|変更前のdamage|TargetCheck|変更後のdamage|
|:-:|:-:|:-:|
|2|20|20|
|2.5|25|25|
|3|30|30|
|3.5|35|35|
|4|40|40|
|4.5|45|45|
|5|50|50|
|5.5|55|55|
|6|60|60|
|6.5|65|65|
|7|70|70|
|7.5|75|75|
|8|80|80|
|8.5|85|85|
|9|90|90|
|9.5|95|95|
|10|100|100|
