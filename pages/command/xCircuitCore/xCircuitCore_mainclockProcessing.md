---
title: メインクロック起動処理
tags: [コマンド,SystemKeeper]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
update: 2020-07-10 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuitCore/xCircuitCore_mainclockProcessing.html
folder: command
datatable3cnp: true
summary: X回路区域内のメインクロックを起動させるコマンド群であり、初期化処理の一部でもある。
summaryDisable: true
---

## メインクロックON

### About

<span class="tagYellow">位置</span> (-1870,4,-194)

<span class="tagBlack">呼び出し元</span> [村人像内部]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_insideMcLawell.html)

<span class="tagBlue">分岐先</span> [毎tick実行するコマンド群1]({{site.baseurl}}/command/xCircuit1/xCircuit1_runFirst.html), [毎tick実行するコマンド群2]({{site.baseurl}}/command/xCircuit2/xCircuit2_reset.html), [毎tick実行するコマンド群3]({{site.baseurl}}/command/xCircuit3/xCircuit3_command.html)

X回路区域内のメインクロックを起動させるコマンド群であり、[初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html)の一部でもある。

{% include note.html content="(-1870,7,-194)にあるスイッチ(青い羊毛についているやつ)によって手動にて操作可能" %}

### コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|:-|:-|
|1|(空白)|
|2|/clone -1924 4 -200 -1924 4 -111 -1920 4 -200 filtered force minecraft:command_block 5|
|3|/summon ArmorStand -1870 10 -197 {Invulnerable:true,Tags:[SystemEntity,TypeChecked],Rotation:[90f,0f],CustomNameVisible:true,CustomName:"SystemKeeper",UUIDMost:2l,UUIDLeast:2l}|条件付き|

<div class="datatable3cnp-begin"></div>

### 詳細

1. [毎tick実行するコマンド群](#毎tick実行するコマンド群)を実行
2. [SystemKeeper]({{site.baseurl}}/entity/entity_entity.html#systemkeeper)君を(-1870,10,-197)に召喚し、メインクロックを作動させる

### 毎tick実行するコマンド群

実行されるコマンド群 (x=-1920,y=4)

|z座標|コマンド群名称、先頭処理名|
|:-:|:-|
|-200|[毎tick実行するコマンド群1]({{site.baseurl}}/command/xCircuit1/xCircuit1_runFirst.html)|
|-192|[毎tick実行するコマンド群2]({{site.baseurl}}/command/xCircuit2/xCircuit2_reset.html)|
|-189|[毎tick実行するコマンド群3]({{site.baseurl}}/command/xCircuit3/xCircuit3_command.html)|
|-184|[黙想終了処理Mokuso]|
|-181|[与ダメージDamegeDealt]|
|-180|[スニークSneakTime]|
|-178|[報酬用演出]|
|-177|[範囲化可能スキル判定]|
|-175|[剣士即時分岐]|
|-167|[狩人即時分岐]|
|-157|[黒魔導士即時分岐]|
|-144|[乱数取得]|
|-143|[忍者スキル?]|
|-138|[白魔導士スキル?]|
|-135|[印判処理?]|
|-113|[スキル名表示呼び出し]|
|-111|[毎tick必ず最後に実行したいコマンド群]|

(これらすべてを"毎tick実行するコマンド群"って呼ぶのかな?)

---

## メインクロックOFF

### About

<span class="tagYellow">位置</span> (-1870,4,-195)

X回路区域内のメインクロックを停止指せるコマンド群であり、基本的には使われない。

{% include note.html content="(-1870,7,-195)にあるスイッチ(赤い羊毛についているやつ)によって手動にて操作可能なので、気になったら押してみるといい。" %}

### コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/blockdata -1920 4 -200 {auto:false}|
|2|/blockdata -1920 4 -111 {auto:false}|条件付き|
|3|/kill 0-0-2-0-2|条件付き|

### 詳細

1. (-1920,4,-200)にある[毎tick実行するコマンド群1]({{site.baseurl}}/command/xCircuit1/xCircuit1_runFirst.html)を停止
2. (-1920,4,-111)にある[毎tick必ず最後にに実行したいコマンド群]を停止
3. [SystemKeeper]({{site.baseurl}}/entity/entity_entity.html#systemkeeper)君をキル
