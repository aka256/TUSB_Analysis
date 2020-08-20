---
title: MP不足演出
tags: [コマンド,スキル]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-20 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit8/xCircuit8_mpLack.html
datatable4c: false
summary: スキル実行時、MPが不足していた時の演出を実行する。なお、MP不足時の処理は呼び出し元である毎tick実行するコマンド群8で行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,8,-177)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群8]({{site.baseurl}}/command/xCircuit8/xCircuit8_command.html)

スキル実行時、MPが不足していた時の演出を実行する。なお、MP不足時の処理は呼び出し元である[毎tick実行するコマンド群8]({{site.baseurl}}/command/xCircuit8/xCircuit8_command.html)で行われる。

## コマンド群

|No.|コマンド|
|:-:|-|
|1|/title @a[tag=LackOfMP] times 0 0 20|
|2|/title @a[tag=LackOfMP] subtitle {"text":"ＭＰが足りない！","color":"red"}|
|3|/title @a[tag=LackOfMP] title {"text":""}|
|4|/execute @a[tag=LackOfMP] ~ ~ ~ /playsound block.comparator.click master @a[r=16] ~ ~ ~ 1 1.2 0|
|5|/execute @a[tag=LackOfMP] ~ ~ ~ /particle smoke ~ ~1 ~ 0.5 0.5 0.5 0 30 force|
|6|/scoreboard players tag @a[tag=LackOfMP] remove LackOfMP|

## 詳細

`LackOfMP`が付与されているすべてのプレイヤーを対象として、以下の事柄を実行

1. 対象に「<span style="color:red">ＭＰが足りない！</span>」とのメッセージを表示
2. 演出の実行
3. 対象から`LackOfMP`を削除
