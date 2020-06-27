---
title: エージェント会話選択時処理
tags: [command]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/26
update: 2020/6/27
sidebar: mydoc_sidebar
permalink: 3_agentTalk.html
folder: command/3
datatable3cnp: true
---

<span class="label label-primary">位置 (-1920,12,-189)</span>

## About

交易島にいるエージェントとの会話処理を行う。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute 0-0-1-0-2 ~ ~ ~ /execute @e[r=24,type=Villager,tag=Agent,c=1] ~ ~ ~ /scoreboard players tag @a[r=5,score_AgentFlag_min=1] add AgentYes|
|2|/scoreboard players enable @a[score_AgentFlag_min=1,tag=!AgentYes] AgentFlag|
|3|/scoreboard players set @a[score_AgentFlag_min=1] AgentFlag 0|
|4|/scoreboard players set @a[tag=AgentYes] ItemCount -1|
|5|/clear @a[tag=AgentYes] minecraft:emerald 0 0|条件付き|
|6|/execute @a[tag=AgentYes] ~ ~ ~ /scoreboard players operation @a[c=1] ItemCount -= @a[c=1] AgentWarpCost|
|7|/tellraw @a[tag=AgentYes,score_ItemCount=-1] {"text":"[エージェント] エメラルドが足りないナ。"}|条件付き|
|8|/scoreboard players reset @a[tag=AgentYes,score_ItemCount=-1] AgentFlag|条件付き|
|10|/tellraw @a[tag=AgentYes,score_ItemCount_min=0] {"text":"[エージェント] 代金は頂いタ。もう１度アイテムを持たずに話しかけてくレ。"}|
|11|/execute @a[tag=AgentYes,score_ItemCount_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] Payment += @a[c=1] AgentWarpCost|条件付き|
|12|/scoreboard players tag @a[tag=AgentYes,score_ItemCount_min=0] add AgentOK|条件付き|
|13|/scoreboard players tag @a[tag=AgentYes] remove AgentYes|

<div class="datatable3cnp-end"></div>

## 詳細

1. [ShopGM](TUSB_Analysis_Entity.html#shopgm)から半径24m以内の`Agent`を持つ村人(エージェント)を一人選択し、その村人から半径5m以内の`AgentFlag`が1以上であるすべてのプレイヤーに`AgentYes`を付与
2. `AgentFlag`が1以上であり、`AgentYes`を持っていないすべてのプレイヤーに`AgentFlag`への書き込みを許可
3. `AgentFlag`が1以上であるすべてのプレイヤーの`AgentFlag`を0に設定
4. `AgentYes`を持つすべてのプレイヤーの`ItemCount`を-1に設定
5. `AgentYes`を持つプレイヤーを一人選択し、`ItemCount`から`AgentWarpCost`を引き、以下の事柄を実行
   - `AgentYes`を持ち、`ItemCount`が-1以上であるすべてのプレイヤーに「[エージェント] エメラルドが足りないナ。」とのメッセージを送信し、AgentFlagを0に設定
6. `AgentYes`を持ち、`ItemCount`が0以上であるすべてのプレイヤーに「[エージェント] 代金は頂いタ。もう１度アイテムを持たずに話しかけてくレ。」とのメッセージを表示し、以下の事柄を実行
   - `Payment`に`AgentWarpCost`を足して`AgentOK`を付与
7. `AgentYes`を持つすべてのプレイヤーから`AgentYes`を削除
