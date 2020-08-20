---
title: 毎tick実行するコマンド群8
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-20 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit8/xCircuit8_command.html
datatable4c: true
summary: スニークによる範囲化可能なスキルの処理(MPコストを3倍するなど)、空腹時の実行スキルの消費MPの5倍処理、エナジーセーブの処理、MP不足時の処理などを行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,4,-177)

<span class="tagBlack">呼び出し元</span> [初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html), [村人像]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_mainclockProcessing.html)

<span class="tagBlue">分岐先</span> [MP不足演出]({{site.baseurl}}/command/xCircuit8/xCircuit8_mpLack.html), [スキル設定変更]({{site.baseurl}}/command/xCircuit8/xCircuit8_skillSettingChange.html)

スニークによる範囲化可能なスキルの処理(MPコストを3倍するなど)、空腹時の実行スキルの消費MPの5倍処理、エナジーセーブの処理、MP不足時の処理などを行う。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|状態|コメント|
|:-:|-|-|-|
|1|/testfor @a[score_ActivatedSkill_min=1,score_Sneaking_min=1,c=1]||範囲化可能スキル判定|
|2|/fill ~1 ~-1 ~ ~13 ~-1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0|条件付き|
|3|/scoreboard players tag @a[score_ActivatedSkill_min=1000,score_ActivatedSkill=1009,score_Sneaking_min=1] add Sneaking|動力が必要|
|4|/scoreboard players tag @a[score_ActivatedSkill_min=1020,score_ActivatedSkill=1029,score_Sneaking_min=1] add Sneaking|動力が必要|
|5|/scoreboard players tag @a[score_ActivatedSkill_min=2020,score_ActivatedSkill=2029,score_Sneaking_min=1] add Sneaking|動力が必要|
|6|/scoreboard players tag @a[score_ActivatedSkill_min=2060,score_ActivatedSkill=2069,score_Sneaking_min=1] add Sneaking|動力が必要|
|7|/scoreboard players tag @a[score_ActivatedSkill_min=3040,score_ActivatedSkill=3049,score_Sneaking_min=1] add Sneaking|動力が必要|
|8|/scoreboard players tag @a[score_ActivatedSkill_min=3060,score_ActivatedSkill=3069,score_Sneaking_min=1] add Sneaking|動力が必要|
|9|/scoreboard players tag @a[score_ActivatedSkill_min=4000,score_ActivatedSkill=4009,score_Sneaking_min=1] add Sneaking|動力が必要|
|10|/scoreboard players tag @a[score_ActivatedSkill_min=4200,score_ActivatedSkill=4209,score_Sneaking_min=1] add Sneaking|動力が必要|
|11|/scoreboard players tag @a[score_ActivatedSkill_min=5040,score_ActivatedSkill=5049,score_Sneaking_min=1] add Sneaking|動力が必要|
|12|/scoreboard players tag @a[score_ActivatedSkill_min=5080,score_ActivatedSkill=5089,score_Sneaking_min=1] add Sneaking|動力が必要|
|13|/scoreboard players tag @a[score_ActivatedSkill_min=6020,score_ActivatedSkill=6029,score_Sneaking_min=1] add Sneaking|動力が必要|
|14|/scoreboard players tag @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209,score_Sneaking_min=1] add Sneaking|動力が必要|
|15|/fill ~-12 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|16|/scoreboard players operation @a[tag=Sneaking] MPConsumption *= #3 Const|条件付き|
|17|/scoreboard players set @a[score_Sneaking_min=1] Sneaking 0|
|18|/scoreboard players tag @a[score_MPConsumption_min=1] add CostPenalty {ActiveEffects:[{Id:17b}]}||空腹時倍化処理|
|19|/scoreboard players operation @a[tag=CostPenalty] MPConsumption *= #5 Const|条件付き|
|20|/scoreboard players tag @a[tag=CostPenalty] remove CostPenalty|条件付き|
|21|/scoreboard players operation @a[score_MPConsumption_min=0,tag=EnergySave] MPConsumption /= #2 Const||エナジーセーブ EnergySave|
|22|/tellraw @a[score_MPConsumption_min=0,tag=EnergySave] {"text":"エナジーセーブの効果が切れた。","color":"gold"}|条件付き|
|23|/scoreboard players tag @a[score_MPConsumption_min=0,tag=EnergySave] remove EnergySave|条件付き|
|24|/execute @a[score_ActivatedSkill_min=0,score_MPConsumption_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] MP -= @a[c=1] MPConsumption||MP消費計算|
|25|/scoreboard players tag @a[score_MP=-1] add LackOfMP|条件付き|
|26|/clone -1920 8 ~ -1920 8 ~ -1920 8 ~ filtered force minecraft:command_block 5 ###MP不足演出予約|条件付き|
|27|/scoreboard players set @a[score_MP=-1] ActivatedSkill 0|条件付き|
|28|/execute @a[score_MP=-1] ~ ~ ~ /scoreboard players operation @a[c=1] MP += @a[c=1] MPConsumption|条件付き|
|29|/execute @a[score_ActivatedSkill_min=0,score_MPConsumption_min=1,score_MPMaxFlag_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] CoolTickCounter = @a[c=1] CoolTickSpan|
|30|/scoreboard players set @a[score_ActivatedSkill_min=0,score_MPConsumption_min=1,score_MPMaxFlag_min=1] MPMaxFlag 0|条件付き|
|31|/execute @a[score_InstantChangeA_min=0,c=1] ~ ~ ~ /scoreboard players set #ReserveShowSkill Global 2||スキル変更 Mode/Instant Change A/B|
|32|/execute @a[score_InstantChangeB_min=0,c=1] ~ ~ ~ /scoreboard players set #ReserveShowSkill Global 2|
|33|/execute @a[score_ModeChangeA_min=0,c=1] ~ ~ ~ /scoreboard players set #ReserveShowSkill Global 2|
|34|/execute @a[score_ModeChangeB_min=0,c=1] ~ ~ ~ /scoreboard players set #ReserveShowSkill Global 2|
|35|/scoreboard players test #ReserveShowSkill Global 2 *|
|36|/clone -1920 10 ~-1 -1920 16 ~ -1920 10 ~-1 filtered force minecraft:command_block 5 ###スキル変更|条件付き|

<div class="datatable4c-end"></div>

## 詳細

1. `ActivatedSkill`が1以上であり、`Sneaking`(スコア)が1以上であるプレイヤーが存在するとき、以下の事柄を実行
   1. No.3 ~ No.15のコマンドブロックを実行可能状態に変更
   2. `ActivatedSkill`が[範囲化可能スキル一覧](#範囲化可能スキル一覧)の範囲にあるすべてのプレイヤーに`Sneaking`(タグ)を付与
   3. No.3 ~ No.15のコマンドブロックを実行不可能状態に変更
   4. `Sneaking`(タグ)を持つすべてのプレイヤー`MPConsumption`を3倍する
2. `Sneaking`(スコア)が1以上であるすべてのプレイヤーの`Sneaking`を0に設定
3. `MPConsumption`が1以上であり、空腹エフェクトを付与されているすべてのプレイヤーに`CostPenalty`を付与し、以下の事柄を実行
   1. `CostPenalty`を持つすべてのプレイヤーの`MPConsumption`を5倍する
   2. `CostPenalty`を持つすべてのプレイヤーから`CostPenalty`を削除
4. `MPConsumption`が0以上であり、`EnergySave`を持つすべてのプレイヤーの`MPConsumption`を二分の一倍し、以下の事柄を実行
   1. `MPConsumption`が0以上であり、`EnergySave`を持つすべてのプレイヤーに「<span style="color:gold;background-color:gray">エナジーセーブの効果が切れた。</span>」とのメッセージを表示
   2. `MPConsumption`が0以上であり、`EnergySave`を持つすべてのプレイヤーから`EnergySave`を削除
5. `ActivatedSkill`が0以上であり、`MPConsumption`が1以上であるすべてのプレイヤーの`MP`から`MPConsumption`の値を引き、以下の事柄を実行
   - `MP`が-1以下であるすべてのプレイヤーに`LackOfMP`を付与し、以下の事柄を実行
      1. (-1920,8,-177)にある[MP不足演出]({{site.baseurl}}/command/xCircuit8/xCircuit8_mpLack.html)を実行
      2. `MP`が-1以下であるプレイヤーの`ActivatedSkill`を0に設定
      3. `MP`が-1以下であるプレイヤーの`MP`に`MPConxumption`を足し合わせる
6. `ActivatedSkill`が0以上、`MPConsumption`が1以上、そして`MPMaxFlag`が1以上であるすべてのプレイヤーの`CoolTickCounter`に`CoolTickSpan`を代入し、`MPMaxFlag`を0に設定
7. 以下の条件を1つでも満たすプレイヤーが存在するとき、`#ReserveShowSkill`の`Global`を2に設定
   - `InstantChangeA`が0以上
   - `InstantChangeB`が0以上
   - `ModeChangeA`が0以上
   - `ModeChangeB`が0以上
8. `#ReserveShowSkill`の`Global`が2以上であるとき、(-1920,10,-177) ~ (-1920,16,-178)にある[スキル設定変更]({{site.baseurl}}/command/xCircuit8/xCircuit8_skillSettingChange.html)を実行

### 範囲化可能スキル一覧

|ActivatedSkill|
|:-:|
|1000 ~ 1009|
|1020 ~ 1029|
|2020 ~ 2029|
|2060 ~ 2069|
|3040 ~ 3049|
|3060 ~ 3069|
|4000 ~ 4009|
|4200 ~ 4209|
|5040 ~ 5049|
|5080 ~ 5089|
|6020 ~ 6029|
|6200 ~ 6209|
