---
title: 乱数更新
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-27 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit12/xCircuit12_randomUpdate.html
datatable2cnp: true
summary: UpdateRandomが付与されたプレイヤーの、新しい乱数RndMWCの生成を行う。なお、TUSB内での乱数の解説については乱数解説を参照。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-144)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群12]({{site.baseurl}}/command/xCircuit12/xCircuit12_command.html)

`UpdateRandom`が付与されたプレイヤーの、新しい乱数`RndMWC`の生成を行う。なお、TUSB内での乱数の解説については[乱数解説]({{site.baseurl}}/note/note_random.html)を参照。

## コマンド群

<div class="datatable2cnp-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/scoreboard players operation @a[tag=UpdateRandom] RndMWC *= #MWCMultiplier Const|
|2|/execute @a[tag=UpdateRandom] ~ ~ ~ /scoreboard players operation @a[c=1] RndMWC += @a[c=1] RndMWCCarry|
|3|/execute @a[tag=UpdateRandom] ~ ~ ~ /scoreboard players operation @a[c=1] RndMWCCarry = @a[c=1] RndMWC|
|4|/scoreboard players operation @a[tag=UpdateRandom] RndMWC %= #MWCBase Const|
|5|/scoreboard players operation @a[tag=UpdateRandom] RndMWCCarry /= #MWCBase Const|
|6|/scoreboard players tag @a[tag=UpdateRandom] remove UpdateRandom|

<div class="datatable2cnp-end"></div>

## 詳細

- `UpdateRandom`を持ったすべてのプレイヤーに対し、以下の計算を実行し、`UpdateRandom`を削除

\\(n\\)回目の乱数更新とすると、

$$
\begin{align*}
& RndMWC_n = (RndMWC_{n-1}\times Multiplier + Carry_{n-1})\mod Base \\
& Carry_n = \lfloor (RndMWC_{n-1}\times Multiplier + Carry_{n-1})\div Base\rfloor
\end{align*}
$$

但し、\\(RndMWC\\)は対象プレイヤーの`RndMWC`、\\(Multiplier\\)は`#MWCMultiplier`の`Global`\\((=31743)\\)、\\(Carry\\)は対象プレイヤーの`RndMWCCarry`、\\(Base\\)は`#MWCBase`の`Global`\\((=65536)\\)である。
