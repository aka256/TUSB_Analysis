---
title: 毎tick実行するコマンド群7
tags: [コマンド,アイテム,スキル,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-31 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit7/xCircuit7_command.html
datatable4c: true
summary: 圧縮印玉等の報酬系スポーンエッグ使用時の演出、モードチェンジエッグやサポートスキルエッグ使用時の処理等を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,4,-180)

<span class="tagBlack">呼び出し元</span> [初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html), [村人像]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_mainclockProcessing.html)

<span class="tagBlue">分岐先</span> [モード変更]({{site.baseurl}}/command/xCircuit7/xCircuit7_modeChange.html)

圧縮印玉等の報酬系スポーンエッグ使用時の演出、モードチェンジエッグやサポートスキルエッグ使用時の処理等を行う。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|状態|コメント|
|:-:|-|-|-|
|1|/execute @a[score_UseSpawnEgg_min=1] ~ ~ ~ /execute @e[r=6,tag=RewardEgg] ~ ~ ~ /playsound entity.player.levelup master @a[r=16] ~ ~ ~ 2 1.8 0||報酬用演出|
|2|/execute @a[score_UseSpawnEgg_min=1] ~ ~ ~ /execute @e[r=6,tag=RewardEgg] ~ ~ ~ /summon FireworksRocketEntity ~0 ~2 ~0 {Life:1,LifeTime:1,FireworksItem:{id:fireworks,Damage:0s,Count:1b,tag:{Fireworks:{Flight:0b,Explosions:[{Type:0b,Colors:[16776960,16744448],FadeColors:[65344,65535]},{Type:2b,Colors:[16777215],FadeColors:[16777215]}]}}}}|条件付き|
|3|/execute @a[score_UseSpawnEgg_min=1] ~ ~ ~ /scoreboard players tag @e[r=6,tag=SkillEgg] add Garbage||スキルエッグ処理 UseSpawnEggスコア SkillEgg/ModeSwitch Instant/Ruby/Sapphire|
|4|/fill ~1 ~-1 ~ ~19 ~-1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0|条件付き|
|5|/scoreboard players set @a[score_UseSpawnEgg=99] UseSpawnEgg 100 {SelectedItem:{id:minecraft:spawn_egg,tag:{EntityTag:{Tags:[Instant,Ruby]}}}}|動力が必要|
|6|/scoreboard players set @a[score_UseSpawnEgg=99] UseSpawnEgg 200 {SelectedItem:{id:minecraft:spawn_egg,tag:{EntityTag:{Tags:[Instant,Sapphire]}}}}|動力が必要|
|7|/scoreboard players set @a[score_UseSpawnEgg=99] UseSpawnEgg 300 {SelectedItem:{id:minecraft:spawn_egg,tag:{EntityTag:{Tags:[ModeSwitch]}}}}|動力が必要|
|8|/scoreboard players set @a[score_UseSpawnEgg=99] UseSpawnEgg 100 {Inventory:[{Slot:-99s,id:minecraft:spawn_egg,tag:{EntityTag:{Tags:[Instant,Ruby]}}}]}|動力が必要|
|9|/scoreboard players set @a[score_UseSpawnEgg=99] UseSpawnEgg 200 {Inventory:[{Slot:-99s,id:minecraft:spawn_egg,tag:{EntityTag:{Tags:[Instant,Sapphire]}}}]}|動力が必要|
|10|/scoreboard players set @a[score_UseSpawnEgg=99] UseSpawnEgg 300 {Inventory:[{Slot:-99s,id:minecraft:spawn_egg,tag:{EntityTag:{Tags:[ModeSwitch]}}}]}|動力が必要|
|11|/execute @a[score_UseSpawnEgg=99,c=1] ~ ~ ~ /execute @e[tag=ModeSwitch] ~ ~ ~ /scoreboard players set @a[score_UseSpawnEgg=99,c=1] UseSpawnEgg 300|動力が必要|
|12|/execute @a[score_UseSpawnEgg=99,c=1] ~ ~ ~ /execute @e[tag=Sapphire] ~ ~ ~ /scoreboard players set @a[score_UseSpawnEgg=99,c=1] UseSpawnEgg 200|動力が必要|
|13|/execute @a[score_UseSpawnEgg=99,c=1] ~ ~ ~ /execute @e[tag=Ruby] ~ ~ ~ /scoreboard players set @a[score_UseSpawnEgg=99,c=1] UseSpawnEgg 100|動力が必要|
|14|/execute @a[score_UseSpawnEgg_min=100,score_UseSpawnEgg=200] ~ ~ ~ /execute @e[r=6,tag=Instant,c=1] ~ ~ ~ /summon AreaEffectCloud ~ ~ ~ {Invulnerable:true,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:take,Tags:[TrapPoint,SystemEntity,TypeChecked]}|動力が必要|
|15|/execute @a[score_UseSpawnEgg_min=100] ~ ~ ~ /tp @e[r=6,tag=SkillEgg] ~ -300 ~|動力が必要|
|16|/scoreboard players tag @a[score_UseSpawnEgg_min=300,score_UseSpawnEgg=300] add ChangeMode|条件付き|
|17|/clone -1920 8 ~ -1920 8 ~ -1920 8 ~ filtered force minecraft:command_block 5 ###モードチェンジ|条件付き|
|18|/scoreboard players set #ReserveShowSkill Global 1|条件付き|
|19|/execute @a[score_UseSpawnEgg_min=100,score_UseSpawnEgg=100] ~ ~ ~ /scoreboard players operation @a[c=1] ActivatedSkill = @a[c=1] InstantSkillA|動力が必要|
|20|/execute @a[score_UseSpawnEgg_min=100,score_UseSpawnEgg=100] ~ ~ ~ /scoreboard players operation @a[c=1] MPConsumption = @a[c=1] InstantCostA|条件付き|
|21|/execute @a[score_UseSpawnEgg_min=200,score_UseSpawnEgg=200] ~ ~ ~ /scoreboard players operation @a[c=1] ActivatedSkill = @a[c=1] InstantSkillB|動力が必要|
|22|/execute @a[score_UseSpawnEgg_min=200,score_UseSpawnEgg=200] ~ ~ ~ /scoreboard players operation @a[c=1] MPConsumption = @a[c=1] InstantCostB|条件付き|
|23|/fill ~-18 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|24|/tellraw @a[score_ActivatedSkill=0] {"text":"スキルを設定していなかった！","bold":true,"color":"yellow"}|条件付き|
|25|/execute @a[score_ActivatedSkill=0] ~ ~ ~ /playsound block.fire.extinguish master @a[c=1] ~ ~ ~ 0.5 2|条件付き|
|26|/scoreboard players reset @a[score_ActivatedSkill=0] ActivatedSkill|条件付き|
|27|/scoreboard players reset @a[score_UseSpawnEgg_min=1] UseSpawnEgg|
|28|/scoreboard players operation @a[score_MPConsumption_min=0,tag=Aisatsu] MPConsumption /= #10 Const|条件付き|
|29|/scoreboard players tag @a[score_MPConsumption_min=0,tag=Aisatsu] remove Aisatsu|条件付き|
|30|/testfor @a[score_ActivatedSkill_min=1,tag=Adv,c=1]||アドべ不可スキル判定|
|31|/fill ~1 ~-1 ~ ~4 ~-1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0|条件付き|
|32|/scoreboard players tag @a[score_ActivatedSkill_min=3250,score_ActivatedSkill=3259,tag=Adv] add SurvivalOnly|動力が必要|
|33|/scoreboard players tag @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5019,tag=Adv] add SurvivalOnly|動力が必要|
|34|/scoreboard players tag @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209,tag=Adv] add SurvivalOnly|動力が必要|
|35|/fill ~-3 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|36|/tellraw @a[tag=SurvivalOnly] {"text":"このエリアでは使えないスキルだ！","color":"light_purple"}|条件付き|
|37|/scoreboard players reset @a[tag=SurvivalOnly] ActivatedSkill|条件付き|
|38|/scoreboard players tag @a[tag=SurvivalOnly] remove SurvivalOnly|条件付き|

<div class="datatable4c-end"></div>

## 詳細

1. `UseSpawnEgg`が1以上であるすべてのプレイヤーから半径6m以内に`RewardEgg`を持つエンティティが存在するとき、演出を実行
2. `UseSpawnEgg`が1以上であるすべてのプレイヤーから半径6m以内の`SkillEgg`を持つエンティティに、`Garbage`を付与し、以下の事柄を実行
   1. No.5 ~ No.23の動力が必要となっているコマンドブロックを実行可能状態に変更
   2. `UseSpawnEgg`が99以下であり、メインハンドもしくはSlot:-99の位置?(後から無効化した物かも)に持っているスポーンエッグのタグによって`UseSpawnEgg`の値をそれぞれ設定
      - スポーンエッグが`Instant`と`Ruby`を持っている時は`UseSpawnEgg`を100
      - スポーンエッグが`Instant`と`Sapphire`を持っている時は`UseSpawnEgg`を200
      - スポーンエッグが`ModeSwitch`を持っている時は`UseSpawnEgg`を300
   3. `UseSpawnEgg`が99以下であるプレイヤーとあるタグを持つエンティティが存在するとき、`UseSpawnEgg`が99以下であるプレイヤーの`UseSpawnEgg`の値をそれぞれ設定
      - エンティティが`ModeSwitch`を持っているとき、`UseSpawnEgg`を300に設定
      - エンティティが`Sapphire`を持っているとき、`UseSpawnEgg`を200に設定
      - エンティティが`Ruby`を持っているとき、`UseSpawnEgg`を100に設定
   4. `UseSpawnEgg`が\\(100\leq\text{UseSpawnEgg}\leq 200\\)であるすべてのプレイヤーから半径6m以内の最も近い`Instant`を持つエンティティの座標上に、[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)を召喚
   5. `UseSpawnEgg`が100以上であるすべてのプレイヤーから半径6m以内の`SkillEgg`を持つすべてのエンティティを300m下に移動させ、キルし、以下の事柄を実行
      1. `UseSpawnEgg`が300であるすべてのプレイヤーに`ChangeMode`を付与し、(-1920,8,-178)にある[モード変更]({{site.baseurl}}/command/xCircuit7/xCircuit7_modeChange.html)を実行
      2. `#ReserveShowSkill`の`Global`を1に設定
   6. `UseSpawnEgg`が100であるプレイヤーの`ActivatedSkill`に`InstantSkillA`を、`MPConsumption`に`InstantCostA`をそれぞれ代入
   7. `UseSpawnEgg`が200であるプレイヤーの`ActivatedSkill`に`InstantSkillB`を、`MPConsumption`に`InstantCostB`をそれぞれ代入
   8. No.5 ~ No.23の動力が必要となっているコマンドブロックを実行不可能状態に変更
   9. `AcivatedSkill`が0以下であるすべてのプレイヤーに「<span style="color:yellow;background-color:gray;bold:true">スキルを設定していなかった！</span>」とのメッセージを表示し、演出を実行
   10. `ActivatedSkill`が0以下であるすべてのプレイヤーの`ActivatedSkill`を0に設定
3. `AcivatedSkill`が1以上であり、`Adv`を持っているプレイヤーが存在するとき、以下の事柄を実行
   1. No.32 ~ No.35のコマンドブロックを実行可能状態に変更
   2. `ActivatedSkill`が以下の範囲にあるすべてのプレイヤーに、`SurvivalOnly`を付与
      - \\(3250\leq\text{ActivatedSkill}\leq 3259\\)
      - \\(5000\leq\text{ActivatedSkill}\leq 5019\\)
      - \\(6200\leq\text{ActivatedSkill}\leq 6209\\)
   3. No.32 ~ No.35のコマンドブロックを実行不可能状態に変更
   4. `SurvivalOnly`を持つすべてのプレイヤーに「<span style="color:purple">このエリアでは使えないスキルだ！</span>」とのメッセージを表示し、`ActivatedSkill`を0に設定
   5. `SurvivalOnly`を持っているすべてのプレイヤーから`SurvivalOnly`を削除
