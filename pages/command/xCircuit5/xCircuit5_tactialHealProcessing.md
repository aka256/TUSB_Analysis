---
title: タクティカルヒール処理
tags: [コマンド,剣士,スキル]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-31 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit5/xCircuit5_tacticalHealProcessing.html
datatable3cnp: false
summary: 剣士のスキルの1つであるタクティカルヒールの回復処理と、演出等を実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-181)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群5]({{site.baseurl}}/command/xCircuit5/xCircuit5_command.html)

剣士のスキルの1つであるタクティカルヒールの回復処理と、演出等を実行する。

## コマンド群

|No.|コマンド|
|:-:|-|
|1|/scoreboard players operation @a[score_TacticalHealBase_min=0] TacticalHealBase /= #10 Const|
|2|/execute @a[score_TacticalHealBase_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] HealCount += @a[c=1] TacticalHealBase|
|3|/tellraw @a[score_TacticalHealBase_min=0] {"text":"タクティカルヒールの効果が切れた。","color":"gold"}|
|4|/execute @a[score_TacticalHealBase_min=0] ~ ~ ~ /playsound entity.player.levelup master @a[r=16] ~ ~ ~ 1 1.78 0|
|5|/execute @a[score_TacticalHealBase_min=0] ~ ~ ~ /particle heart ~ ~1 ~ 0.5 0.5 0.5 0 30 force|
|6|/scoreboard players tag @a[score_TacticalHealBase_min=0] remove TacticalHeal|
|7|/scoreboard players reset @a[score_TacticalHealBase_min=0] TacticalHealBase|

## 詳細

`TacticalHealBase`が0以上であるすべてのプレイヤーに対し、以下の事柄を実行

1. \\(\text{TacticalHealBase}=\text{TacticalHealBase}\div 10\\)を実行
2. \\(\text{HealCount}=\text{HealCount}+\text{TacticalHealBase}\\)を実行
3. 対象に「<span style="color:gold;background-color:gray">タクティカルヒールの効果が切れた。</span>」とのメッセージを表示
4. 演出を実行
5. 対象から`TacticalHeal`を削除
6. `TacticalHealBase`を0に設定
