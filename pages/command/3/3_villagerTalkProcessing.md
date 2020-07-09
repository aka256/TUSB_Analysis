---
title: 村人会話処理
tags: [コマンド,村人,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/26
update: 2020/7/8
sidebar: mydoc_sidebar
permalink: 3_villagerTalkProcessing.html
folder: command/3
datatable3c: true
---

<span class="label label-primary">位置 (-1920,10,-189)</span>

## About

交易島内の村人(牧師、エージェント、占い師)との会話や職業島へのワープ時の処理などを行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[score_TalkToVillager_min=1] ~ ~ ~ /tp @e[r=3,type=Item,tag=!SystemEntity] @a[c=1]|
|2|/execute 0-0-1-0-2 ~ ~ ~ /execute @e[r=24,type=Villager,tag=Pastor,c=1] ~ ~ ~ /scoreboard players tag @a[r=5,score_TalkToVillager_min=1] add TalkToPastor|
|3|/execute 0-0-1-0-2 ~ ~ ~ /execute @e[r=24,type=Villager,tag=Agent,c=1] ~ ~ ~ /scoreboard players tag @a[r=5,score_TalkToVillager_min=1] add TalkToAgent|
|4|/execute 0-0-1-0-2 ~ ~ ~ /execute @e[r=24,type=Villager,tag=Augur,c=1] ~ ~ ~ /scoreboard players tag @a[r=5,score_TalkToVillager_min=1] add TalkToAugur|
|5|/scoreboard players reset @a[score_TalkToVillager_min=1] TalkToVillager|
|6|/scoreboard players add @a[tag=TalkToPastor] PastorFlag 0|
|7|/tellraw @a[tag=TalkToPastor,score_PastorFlag=-1] {"text":"[牧師] どうかお気をつけて。"}|条件付き|
|8|/tellraw @a[tag=TalkToPastor,score_PastorFlag_min=0,score_PastorFlag=0] {"translate":"[牧師] ご存知ですか？  %1\$s / %2\$s","with":[{"text":"はい","color":"aqua","bold":true,"underlined":true,"clickEvent":{"action":"run_command","value":"/trigger PastorFlag set 2"}},{"text":"いいえ","color":"aqua","bold":true,"underlined":true,"clickEvent":{"action":"run_command","value":"/trigger PastorFlag set 1"}}]}|
|9|/scoreboard players enable @a[tag=TalkToPastor,score_PastorFlag_min=0,score_PastorFlag=0] PastorFlag|条件付き|
|10|/scoreboard players tag @a[tag=TalkToPastor] remove TalkToPastor|
|11|/scoreboard players tag @a[tag=TalkToAgent] add TalkToAgent2 {Tags:[AgentOK]}|
|12|/scoreboard players tag @a[tag=TalkToAgent2] remove TalkToAgent|条件付き|
|13|/scoreboard players set @a[tag=TalkToAgent] AgentFlag 0|
|14|/execute @a[tag=TalkToAgent] ~ ~ ~ /scoreboard players operation @a[c=1] AgentWarpCost = @a[c=1] Level|条件付き|
|15|/scoreboard players operation @a[tag=TalkToAgent] AgentWarpCost -= #50 Const|条件付き|
|16|/execute @a[tag=TalkToAgent] ~ ~ ~ /scoreboard players operation @a[c=1] AgentWarpCost *= @a[c=1] AgentWarpCost|条件付き|
|17|/scoreboard players operation @a[tag=TalkToAgent] AgentWarpCost /= #5 Const|条件付き|
|18|/tellraw @a[tag=TalkToAgent] {"translate":"[エージェント] 転職したいカ？職業島遠いだロ？\nあんたならエメラルド%1\$s個で送ってやるヨ。どうダ？  %2\$s","with":[{"score":{"name":"*","objective":"AgentWarpCost"},"color":"green","bold":true},{"text":"送っテ！","color":"aqua","bold":true,"underlined":true,"clickEvent":{"action":"run_command","value":"/trigger AgentFlag set 1"}}]}|条件付き|
|19|/scoreboard players enable @a[tag=TalkToAgent] AgentFlag|条件付き|
|20|/scoreboard players tag @a[tag=TalkToAgent] remove TalkToAgent|条件付き|
|21|/scoreboard players tag @a[tag=TalkToAgent2] add AgentItemRefused {Inventory:[{}]}|
|22|/tellraw @a[tag=AgentItemRefused] {"text":"[エージェント] アイテムは運べないんダ。置いてからまた話しかけてくレ。"}|条件付き|
|23|/scoreboard players tag @a[tag=AgentItemRefused] remove TalkToAgent2|条件付き|
|24|/scoreboard players tag @a[tag=AgentItemRefused] remove AgentItemRefused|条件付き|
|25|/tellraw @a[tag=TalkToAgent2,score_CurrentMode_min=1] {"text":"モードスキルが解除された。","color":"gray"}|
|26|/scoreboard players set @a[tag=TalkToAgent2,score_CurrentMode_min=1] ModeState 0|条件付き|
|27|/scoreboard players set @a[tag=TalkToAgent2,score_CurrentMode_min=1] CurrentModeCost 0|条件付き|
|28|/scoreboard players set @a[tag=TalkToAgent2,score_CurrentMode_min=1] CurrentMode 0|条件付き|
|29|/scoreboard players tag @a[tag=TalkToAgent2] add RemoveReRaise {Tags:[ReRaise]}|
|30|/tellraw @a[tag=RemoveReRaise] {"text":"リレイズの効果が切れた。","color":"gold"}|条件付き|
|31|/scoreboard players tag @a[tag=RemoveReRaise] remove ReRaise|条件付き|
|32|/scoreboard players tag @a[tag=RemoveReRaise] remove RemoveReRaise|条件付き|
|33|/scoreboard players tag @a[tag=TalkToAgent2] remove AgentOK|
|34|/tellraw @a[tag=TalkToAgent2] {"text":"[エージェント] それじゃあ送ろウ。達者でナ。"}|条件付き|
|35|/give @a[tag=TalkToAgent2] minecraft:wool 32 0|条件付き|
|36|/tp @a[tag=TalkToAgent2] -1786 113 -137 -90 0|条件付き|
|37|/scoreboard players tag @a[tag=TalkToAgent2] remove TalkToAgent2|条件付き|
|38|/tellraw @a[tag=TalkToAugur] {"translate":"[占い師] 占いの館へようこそ。エメラルド%1$s個であなたの運勢を占います。\n占いますか？  %2\$s","with":[{"text":"１","color":"green","bold":true},{"text":"はい","color":"aqua","bold":true,"underlined":true,"clickEvent":{"action":"run_command","value":"/trigger AugurFlag set 1"}}]}|
|39|/scoreboard players enable @a[tag=TalkToAugur] AugurFlag|条件付き|
|40|/scoreboard players tag @a[tag=TalkToAugur] remove TalkToAugur|条件付き|

<div class="datatable3c-end"></div>

## 詳細

1. `TalkToVillager`が1以上であるすべてのプレイヤーの座標から半径3m以内にある`SystemEntity`を持っていないアイテムの所に最も近くのプレイヤー一人を移動させる
2. [ShopGM](TUSB_Analysis_Entity.html#shopgm)から半径24m以内の`Pastor`を持つ村人一人(牧師)が存在し、その村人から半径5m以内の`TalkToVillager`が1以上であるすべてのプレイヤーに`TalkToPastor`を付与し、`Agent`(エージェント)、`Augur`(占い師)も同様に実行
3. `TalkToVillager`が1以上であるプレイヤーの`TalkToVillager`を0に設定
4. `TalkToPastor`を持ち、`PastorFlag`が-1以下であるすべてのプレイヤーに「\[牧師\] どうかお気をつけて。」とのメッセージを表示
5. `TalkToPastor`を持ち、`PastorFlag`が0であるすべてのプレイヤーに「\[牧師\] ご存知ですか？」とのメッセージと選択肢を表示し、`PastorFlag`への書き込みを許可
   - 「はい」を選択した際は`PastorFlag`を2に設定
   - 「いいえ」を選択した際は`PastorFlag`を1に設定
6. `TalkToPastor`を持つすべてのプレイヤーから`TalkToPastor`を消去
7. `TalkToAgent`と`AgentOK`を持つすべてのプレイヤーに`TalkToAgent2`を付与し、`TalkToAgent`を削除
8. `TalkToAgent`を持つプレイヤーが存在するとき、`AgentFlag`を0に設定し、以下の事柄を実行
   1. 以下の計算を実行
      - `AgentWarpCost`=(`Level`-50)^2/5
   2. 「\[エージェント\] 転職したいカ？」とのメッセージを表示
   3. `AgentFlag`への書き込みを許可
   4. `TalkToAgent`を削除
9. `TalkToAgent2`を持ち、インベントリ内に何かしらのアイテムを持っているプレイヤーが存在するとき、`AgentItemRefused`を付与し、以下の事柄を実行
   1. 「\[エージェント\] アイテムは運べないんダ。置いてからまた話しかけてくレ。」とのメッセージを表示
   2. `TalkToAgent2`と`AgentItemRefused`を削除
10. `TalkToAgent2`を持ち、`CurrentMode`が1以上であるプレイヤーが存在するとき、「モードスキルが解除された。」とのメッセージを表示し、以下の事柄を実行
    - `ModeState`、`CurrentModeCost`、`CurrentMode`を0に設定
11. `TalkToAgent2`と`ReRaise`を持つプレイヤーが存在するとき、`RemoveReRaise`を付与し、以下の事柄を実行
    1. 「リレイズの効果が切れた。」とのメッセージを表示
    2. `ReRaise`と`RemoveReRaise`を削除
12. `TalkToAgent`を持つプレイヤーが存在するとき、`AgentOK`を削除し、以下の事柄を実行
    1. 「\[エージェント\] それじゃあ送ろウ。達者でナ。」とのメッセージを表示
    2. 32個の羊毛を与える
    3. (-1786,113,-137)へ移動(職業島前)
    4. `TalkToAgent2`を削除
13. `TalkToAugur`を持つプレイヤーが存在するとき、「[占い師] 占いの館へようこそ。」とのメッセージを表示し、以下の事柄を実行
    1. `AugurFlag`への書き込みを許可
    2. `TalkToAugur`を削除
