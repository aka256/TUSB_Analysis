---
title: エンアスピルMP回復
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit5/xCircuit5_enAspirMPRecovering.html
datatable4c: true
summary: Hitタグの削除を行う。ただそれだけ
summaryDisable: true
search: exclude
---

## About

<span class="tagYellow">位置</span> (-1920,8,-181)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群5]({{site.baseurl}}/command/xCircuit5/xCircuit5_command.html)

## コマンド群

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_AspirBase_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] AspirBase *= @a[c=1] EnAspir|
|2|/scoreboard players reset @a[score_AspirBase_min=0] EnAspir|
|3|/execute @a[score_AspirBase_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] AspirBase /= #100 Const|
|4|/execute @a[score_AspirBase_min=0] ~ ~ ~ /playsound entity.endermen.teleport master @a[r=16] ~ ~ ~ 1 0.5 0|
|5|/execute @a[score_AspirBase_min=0] ~ ~ ~ /particle enchantmenttable ~ ~1.5 ~ 0.1 0.6 0.1 4 300 force|
|6|/execute @a[score_AspirBase_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP += @a[c=1] AspirBase|
|7|/execute @a[score_AspirBase_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP < @a[c=1] MPMax|
|8|/tellraw @a[score_AspirBase_min=0] {"text":"エンアスピルの効果が切れた。","color":"gold"}|
|9|/scoreboard players reset @a[score_AspirBase_min=0] AspirBase|

## 詳細

`AspirBase`が0以上であるすべてのプレイヤーを対象として、以下の事柄を実行

1. \\(\text{AspirBase} = \frac{\text{AspirBase}\times\text{EnAspir}}{100}\\)
2. \\(\text{EnAspir} = 0\\)
3. 演出を実行
4. $$\text{MP}=\begin{cases}\text{MP}+\text{AspirBase} & ()\\\text{MPMax} & ()\end{cases}$$
5. 「<span style="color: gold">エンアスピルの効果が切れた。</span>」
