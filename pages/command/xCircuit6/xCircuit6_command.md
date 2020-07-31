---
title: 毎tick実行するコマンド群6
tags: [コマンド,スキル]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-31 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit6/xCircuit6_command.html
datatable4c: true
summary: スキル実行時にトリガーとなる、スニーク、雪玉、人参付き棒、火薬や骨、腐った肉などのドロップアイテムなどの処理と、それらのトリガーによって実行されるスキルを指定する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,4,-180)

<span class="tagBlack">呼び出し元</span> [初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html), [村人像]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_mainclockProcessing.html)

スキル実行時にトリガーとなる、スニーク、雪玉、人参付き棒、火薬や骨、腐った肉などのドロップアイテムなどの処理と、それらのトリガーによって実行されるスキルを指定する。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|状態|コメント|
|:-:|-|-|-|
|1|/scoreboard players tag @a[score_CurrentMode_min=2220,score_CurrentMode=2229,score_SneakTime_min=0] add UseMode {OnGround:true}||スニーク SneakTime Sneakingとは別|
|2|/scoreboard players set @a[score_SneakTime_min=0] SneakTime -5|
|3|/testfor @a[score_UseSnowball_min=1,c=1]||雪玉 UseSnowball|
|4|/fill ~1 ~-1 ~ ~5 ~-1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0|条件付き|
|5|/scoreboard players tag @a[score_CurrentMode_min=2200,score_CurrentMode=2209,score_UseSnowball_min=1] add UseMode|動力が必要|
|6|/scoreboard players tag @a[score_CurrentMode_min=2230,score_CurrentMode=2239,score_UseSnowball_min=1] add UseMode|動力が必要|
|7|/scoreboard players tag @a[score_CurrentMode_min=4210,score_CurrentMode=4239,score_UseSnowball_min=1] add UseMode|動力が必要|
|8|/scoreboard players tag @a[score_CurrentMode_min=5200,score_CurrentMode=5219,score_UseSnowball_min=1] add UseMode|動力が必要|
|9|/fill ~-4 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block|動力が必要|
|10|/scoreboard players reset @a[score_UseSnowball_min=1] UseSnowball|条件付き|
|11|/execute @a[score_CurrentMode_min=3220,score_CurrentMode=3229,score_FoodChanging_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] WildHealing = @a[c=1] FoodChanging||満腹度変化 FoodChanging|
|12|/execute @a[score_CurrentMode_min=3220,score_CurrentMode=3229,score_FoodChanging_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] WildHealing -= @a[c=1] Food|条件付き|
|13|/scoreboard players tag @a[score_CurrentMode_min=3220,score_CurrentMode=3229,score_FoodChanging_min=0,score_WildHealing_min=1] add UseMode|条件付き|
|14|/testfor @a[score_UseCarrotStick_min=1,c=1]||人参棒 UseCarrotStick|
|15|/fill ~1 ~-1 ~ ~5 ~-1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0|条件付き|
|16|/scoreboard players tag @a[score_CurrentMode_min=4200,score_CurrentMode=4209,score_UseCarrotStick_min=1] add UseMode|動力が必要|
|17|/scoreboard players tag @a[score_CurrentMode_min=5220,score_CurrentMode=5259,score_UseCarrotStick_min=1] add UseMode|動力が必要|
|18|/scoreboard players tag @a[score_CurrentMode_min=6200,score_CurrentMode=6239,score_UseCarrotStick_min=1] add UseMode|動力が必要|
|19|/scoreboard players tag @a[score_CurrentMode_min=6250,score_CurrentMode=6309,score_UseCarrotStick_min=1] add UseMode|動力が必要|
|20|/fill ~-4 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block|動力が必要|
|21|/scoreboard players reset @a[score_UseCarrotStick_min=1] UseCarrotStick|条件付き|
|22|/scoreboard players set @a[score_CurrentMode_min=6240,score_CurrentMode=6249,score_DropGunpowder_min=1] OrderType 0||アイテムドロップ|
|23|/execute @a[score_OrderType_min=0] ~ ~1.32 ~ /scoreboard players tag @e[r=1,type=Item,tag=TypeCheck] add Pickup {Item:{id:minecraft:gunpowder}}|条件付き|
|24|/scoreboard players set @a[score_CurrentMode_min=6240,score_CurrentMode=6249,score_DropBone_min=1] OrderType 2|
|25|/execute @a[score_OrderType_min=2] ~ ~1.32 ~ /scoreboard players tag @e[r=1,type=Item,tag=TypeCheck] add Pickup {Item:{id:minecraft:bone}}|条件付き|
|26|/scoreboard players set @a[score_CurrentMode_min=6240,score_CurrentMode=6249,score_DropRottenFlesh_min=1] OrderType 4|
|27|/execute @a[score_OrderType_min=4] ~ ~1.32 ~ /scoreboard players tag @e[r=1,type=Item,tag=TypeCheck] add Pickup {Item:{id:minecraft:rotten_flesh}}|条件付き|
|28|/scoreboard players tag @a[score_OrderType_min=0] add UseMode|
|29|/execute @a[score_OrderType_min=0] ~ ~1.32 ~ /entitydata @e[r=1,tag=Pickup] {PickupDelay:0s}|条件付き|
|30|/scoreboard players reset @a[score_DropGunpowder_min=1] DropGunpowder|
|31|/scoreboard players reset @a[score_DropBone_min=1] DropBone|
|32|/scoreboard players reset @a[score_DropRottenFlesh_min=1] DropRottenFlesh|
|33|/scoreboard players tag @a[score_CurrentMode_min=2240,score_CurrentMode=2249,score_HPChanging=0] add UseMode||死亡 HPCounting = 0|
|34|/execute @a[tag=UseMode] ~ ~ ~ /scoreboard players operation @a[c=1] ActivatedSkill = @a[c=1] CurrentMode||モードスキル 種類/コスト取得|
|35|/execute @a[tag=UseMode] ~ ~ ~ /scoreboard players operation @a[c=1] MPConsumption = @a[c=1] CurrentModeCost|条件付き|
|36|/scoreboard players tag @a[tag=UseMode] remove UseMode|条件付き|
|37|/execute @a[score_ActivatedSkill_min=2240,score_ActivatedSkill=2249] ~ ~ ~ /scoreboard players operation @a[c=1] MPConsumption < @a[c=1] MP|条件付き|
|38|/execute @a[score_OrderType_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] ActivatedSkill += @a[c=1] OrderType|
|39|/scoreboard players reset @a[score_OrderType_min=0] OrderType|条件付き|

<div class="datatable4c-end"></div>

## 詳細

1. `CurrentMode`が\\(2220\leq\text{CurrentMode}\leq 2229\\)であり、`SneakTime`が0以上であり、かつ地面に接しているすべてのプレイヤーに`UseMode`を付与
2. `SneakTIme`が0以上であるすべてのプレイヤーの`SneakTime`を-5に設定
3. `UseSnowball`が1以上であるプレイヤー存在するとき、以下の事柄を実行
   1. 以下のコマンド群(No.5 ~ No.9)を実行
      - `CurrentMode`が以下の範囲に含まれ、`UseSnowball`が1以上であるとき、`UseMode`を付与
        - \\(2200\leq\text{CurrentMode}\leq 2209\\)
        - \\(2230\leq\text{CurrentMode}\leq 2239\\)
        - \\(4210\leq\text{CurrentMode}\leq 4239\\)
        - \\(5200\leq\text{CurrentMode}\leq 5219\\)
   2. `UseSnowball`が1以上であるすべてのプレイヤーの`UseSnowball`を0に設定
4. `CurrentMode`が\\(3220\leq\text{CurrentMode}\leq 3229\\)であり、`FoodChanging`が0以上であるプレイヤーに対し、以下の事柄を実行
   1. \\(\text{WildHealing}=\text{FoodChanging}-\text{Food}\\)を実行
   2. `WildHealing`が1以上であるすべてのプレイヤーに`UseMode`を付与
5. `UseCarrotStick`が1以上であるプレイヤーが存在するとき、以下の事柄を実行
   1. 以下のコマンド群(No.16 ~ No.20)を実行
      - `CurrentMode`が以下の範囲に含まれ、`UseCarrotStick`が1以上であるとき、`UseMode`を付与
        - \\(4200\leq\text{CurrentMode}\leq 4209\\)
        - \\(5220\leq\text{CurrentMode}\leq 5259\\)
        - \\(6200\leq\text{CurrentMode}\leq 6239\\)
        - \\(6250\leq\text{CurrentMode}\leq 6309\\)
   2. `UseSnowball`が1以上であるすべてのプレイヤーの`UseCarrotStick`を0に設定
6. `CurrentMode`が\\(6240\leq\text{CurrentMode}\leq 6249\\)であり、`DropGunpowder`が1以上であるすべてのプレイヤーの`OrderType`を0に設定し、以下の事柄を実行
   - `OrderType`が0以上であるすべてのプレイヤーの1.32m上を中心に半径1m以内の`TypeCheck`を持つアイテム状態の火薬に`Pickup`を付与
7. `CurrentMode`が\\(6240\leq\text{CurrentMode}\leq 6249\\)であり、`DropBone`が1以上であるすべてのプレイヤーの`OrderType`を2に設定し、以下の事柄を実行
   - `OrderType`が2以上であるすべてのプレイヤーの1.32m上を中心に半径1m以内の`TypeCheck`を持つアイテム状態の骨に`Pickup`を付与
8. `CurrentMode`が\\(6240\leq\text{CurrentMode}\leq 6249\\)であり、`DropRottenFlesh`が1以上であるすべてのプレイヤーの`OrderType`を4に設定し、以下の事柄を実行
   - `OrderType`が4以上であるすべてのプレイヤーの1.32m上を中心に半径1m以内の`TypeCheck`を持つアイテム状態の腐った肉に`Pickup`を付与
9. `OrderType`が0以上であるすべてのプレイヤーに`UseMode`を付与し、そのプレイヤーの1.32m上から半径1mの`Pickup`を持つすべてのエンティティをすぐに拾えるように設定(PickupDelay:0s)
10. `DropGunpowder`、`DropBone`、`DropRottenFlesh`が1以上であるすべてのプレイヤーのそれぞれの値を0に設定
11. `CurrentMode`が\\(2240\leq\text{CurrentMode}\leq 2249\\)であり、`HPChanging`が0以下であるすべてのプレイヤーに`UseMode`を付与
12. `UseMode`を持つプレイヤーが存在するとき、以下の事柄を実行
    1. `UseMode`を持つプレイヤーの`ActivatedSkill`に`CurrentMode`を代入
    2. `UseMode`を持つプレイヤーの`MPConsumption`に`CurrentModeCost`を代入
    3. `UseMode`を持つプレイヤーから`UseMode`を削除
    4. `ActivatedSkill`が\\(2240\leq\text{ActivatedSkill}\leq 2249\\)であるすべてのプレイヤーで\\(\text{MPConsumption}<\text{MP}\\)となるとき、`MPConsumption`に`MP`を代入
13. `OrderType`が0以上であるプレイヤーの`ActivatedSkill`に`OrderType`を足し合わせ、`OrderType`を0に設定する
