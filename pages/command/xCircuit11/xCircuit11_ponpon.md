---
title: ぽんぽん実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_ponpon.html
datatable2cnp: true
summary: 召喚士のスキルの1つであるぽんぽんを実行する。プレイヤー以外のFriendlyTeamに対し、即時回復を付与する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,14,-149)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

召喚士のスキルの1つであるぽんぽんを実行する。プレイヤー以外の`FriendlyTeam`に対し、即時回復を付与する。

## コマンド群

<div class="datatable2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=6230,score_ActivatedSkill=6239] ~ ~ ~ /execute @e[r=15,type=!Player,team=FriendlyTeam] ~ ~ ~ /particle heart ~ ~1 ~ 0.5 0.5 0.5 0 20 force|
|2|/execute @a[score_ActivatedSkill_min=6230,score_ActivatedSkill=6239] ~ ~ ~ /playsound entity.experience_orb.pickup master @a[r=16] ~ ~ ~ 1 1.6 0|条件付き|
|3|/execute @a[score_ActivatedSkill_min=6230,score_ActivatedSkill=6230] ~ ~ ~ /effect @e[r=15,type=!Player,team=FriendlyTeam] minecraft:instant_health 1 1|
|4|/execute @a[score_ActivatedSkill_min=6231,score_ActivatedSkill=6239] ~ ~ ~ /effect @e[r=15,type=!Player,team=FriendlyTeam] minecraft:instant_health 1 2|

<div class="datatable2cnp-end"></div>

## 詳細

1. **`ActivatedSkill`が6230 ~ 6239**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから半径15m以内のプレイヤー以外の`FriendlyTeam`に、パーティクルを表示
   2. 対象プレイヤーから半径16m以内のすべてのプレイヤーに、効果音を鳴らす
2. **`ActivatedSkill`が6230**であるすべてのプレイヤーから、**半径15m以内のプレイヤー以外の`FriendlyTeam`に即時回復Lv.2を付与**
3. **`ActivatedSkill`が6231 ~ 6239**であるすべてのプレイヤーから、**半径15m以内のプレイヤー以外の`FriendlyTeam`に即時回復Lv.3を付与**
