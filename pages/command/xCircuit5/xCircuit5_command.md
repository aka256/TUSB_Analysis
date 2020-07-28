---
title: 毎tick実行するコマンド群5
tags: [コマンド,スキル,剣士,狩人,黒魔導士,レガシー]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit5/xCircuit5_command.html
datatable4c: true
summary: エンアスピル、エンチェイス、タクティカルヒール、真空斬りの処理とレガシーアイテムの処理を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,4,-181)

<span class="tagBlack">呼び出し元</span> [初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html), [村人像]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_mainclockProcessing.html)

<span class="tagBlue">分岐先</span> [Hitリセット]({{site.baseurl}}/command/xCircuit5/xCircuit5_hitReset.html), [エンアスピルMP回復]({{site.baseurl}}/command/xCircuit5/xCircuit5_enAspirMPRecovering.html), [レガシーアイテム処理]({{site.baseurl}}/command/xCircuit5/xCircuit5_legacyProcessing.html), [エンチェイス探索処理]({{site.baseurl}}/command/xCircuit5/xCircuit5_enchaseSearchProcessing.html), [タクティカルヒール処理]({{site.baseurl}}/command/xCircuit5/xCircuit5_tacticalHealProcessing.html), [真空斬り使用判定]({{site.baseurl}}/command/xCircuit5/xCircuit5_aerialShlashUseJudgment.html)

エンアスピル、エンチェイス、タクティカルヒール、真空斬りの処理とレガシーアイテムの処理を行う。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|状態|コメント|
|:-:|-|-|-|
|1|/testfor @a[score_DamageDealt_min=0,c=1]||与ダメージ DamageDealt|
|2|/fill ~7 ~-1 ~ ~18 ~-1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###DamageDealt処理|条件付き|
|3|/execute @a[score_DamageDealt_min=0] ~ ~ ~ /scoreboard players tag @e[r=5,tag=Enemy] add Hit {HurtTime:10s}|条件付き|
|4|/execute 0-0-1-0-1 ~ 15 -186 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###Hitリセット予約|条件付き|
|5|/execute @a[score_EnAspir_min=1,score_DamageDealt_min=0] ~ ~ ~ /scoreboard players tag @e[r=5,tag=LivingEnemy] add AlivesHit {HurtTime:10s}|条件付き|エンアスピル判定 (DamageDealt内)|
|6|/execute @a[score_EnAspir_min=1,score_DamageDealt_min=0] ~ ~ ~ /execute @e[r=5,tag=AlivesHit,c=1] ~ ~ ~ /execute @a[r=5,score_EnAspir_min=1,score_DamageDealt_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] AspirBase += @a[c=1] DamageDealt|条件付き|
|7|/execute @a[score_EnAspir_min=1,score_DamageDealt_min=0] ~ ~ ~ /scoreboard players tag @e[r=5,tag=AlivesHit] remove AlivesHit|条件付き|
|8|/clone -1920 8 ~ -1920 8 ~ -1920 8 ~ filtered force minecraft:command_block 5 ###エンアスピルMP回復処理|条件付き|
|9|/scoreboard players tag @a[score_DamageDealt_min=0] add UseSword {SelectedItem:{id:minecraft:wooden_sword}}|動力が必要|
|10|/scoreboard players tag @a[score_DamageDealt_min=0] add UseSword {SelectedItem:{id:minecraft:golden_sword}}|動力が必要|
|11|/scoreboard players tag @a[score_DamageDealt_min=0] add UseSword {SelectedItem:{id:minecraft:stone_sword}}|動力が必要|
|12|/scoreboard players tag @a[score_DamageDealt_min=0] add UseSword {SelectedItem:{id:minecraft:iron_sword}}|動力が必要|
|13|/scoreboard players tag @a[score_DamageDealt_min=0] add UseSword {SelectedItem:{id:minecraft:diamond_sword}}|動力が必要|
|14|/scoreboard players tag @a[score_CurrentMode_min=1200,score_CurrentMode=1219,tag=UseSword] add UseMode|動力が必要|
|15|/scoreboard players tag @a[score_CurrentMode_min=1240,score_CurrentMode=1259,tag=UseSword] add UseMode|動力が必要|
|16|/scoreboard players tag @a[tag=UseSword] remove UseSword|動力が必要|
|17|/scoreboard players tag @a[score_CurrentMode_min=2210,score_CurrentMode=2219,score_DamageDealt_min=0] add UseMode|動力が必要|
|18|/scoreboard players tag @a[score_DamageDealt_min=0] add Legacy {SelectedItem:{tag:{Legacy:true}}}|動力が必要|
|19|/clone -1920 14 ~ -1920 14 ~ -1920 14 ~ filtered force minecraft:command_block 5 ###レガシー|条件付き|
|20|/fill ~-11 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###DamageDealt処理終了|動力が必要|
|21|/scoreboard players reset @a[score_DamageDealt_min=0] DamageDealt|条件付き|
|22|/execute @a[score_UseBow_min=1] ~ ~1.52 ~ /scoreboard players tag @e[r=2,tag=TypeCheck] add Arrow {inGround:false,life:0s}||弓使用 UseBow|
|23|/scoreboard players tag @a[score_UseBow_min=1,score_EnChase_min=1] add EnChase|条件付き|
|24|/execute 0-0-1-0-1 ~ 9 -186 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###Chaserクロック予約|条件付き|
|25|/scoreboard players tag @a[score_CurrentMode_min=3200,score_CurrentMode=3269,score_UseBow_min=1] add UseMode {SelectedItem:{id:minecraft:bow}}|
|26|/scoreboard players tag @a[score_CurrentMode_min=3220,score_CurrentMode=3229,score_UseBow_min=1] remove UseMode|条件付き|
|27|/scoreboard players reset @a[score_UseBow_min=1] UseBow|
|28|/execute @a[tag=TacticalHeal,score_DamageTaken_min=120] ~ ~ ~ /scoreboard players operation @a[c=1] TacticalHealBase = @a[c=1] DamageTaken||タクティカルヒール TavticalHealタグ TacticalHealBase|
|29|/clone -1920 10 ~ -1920 10 ~ -1920 10 ~ filtered force minecraft:command_block 5 ###タクティカルヒール処理予約|条件付き|
|30|/scoreboard players tag @a[score_CurrentMode_min=1230,score_CurrentMode=1239,score_DamageTaken_min=1] add UseMode||被ダメージ DamageTaken|
|31|/scoreboard players reset @a[score_DamageTaken_min=-2147483648] DamageTaken|
|32|/scoreboard players tag @a[score_CurrentMode_min=1220,score_CurrentMode=1229,score_FlyOneCm_min=1,score_WalkOneCm=0,tag=!AerialSlash] add AerialChance {SelectedItem:{Count:1b}}||真空斬り待機|
|33|/fill ~1 ~-1 ~ ~7 ~-1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block|条件付き|
|34|/scoreboard players tag @a[tag=AerialChance] add AerialSlash {SelectedItem:{id:minecraft:wooden_sword}}|動力が必要|
|35|/scoreboard players tag @a[tag=AerialChance] add AerialSlash {SelectedItem:{id:minecraft:stone_sword}}|動力が必要|
|36|/scoreboard players tag @a[tag=AerialChance] add AerialSlash {SelectedItem:{id:minecraft:golden_sword}}|動力が必要|
|37|/scoreboard players tag @a[tag=AerialChance] add AerialSlash {SelectedItem:{id:minecraft:iron_sword}}|動力が必要|
|38|/scoreboard players tag @a[tag=AerialChance] add AerialSlash {SelectedItem:{id:minecraft:diamond_sword}}|動力が必要|
|39|/scoreboard players tag @a[tag=AerialChance] remove AerialChance|動力が必要|
|40|/fill ~-6 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|41|/execute @a[score_FlyOneCm_min=1,tag=AerialSlash] ~ ~2.3 ~ /summon Fireball ~ ~ ~ {direction:[0d,0d,0d],ExplosionPower:0,Tags:[AerialShockwave,CooldownRequired,TypeChecked],PortalCooldown:5}|条件付き|
|42|/scoreboard players set @a[score_FlyOneCm_min=1,tag=AerialSlash] FlyOneCm -1000000|条件付き|
|43|/fill -1921 12 ~ -1921 12 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###真空斬り待機クロック予約|条件付き|

<div class="datatable4c-end"></div>

## 詳細

1. `DamageDealt`が0以上であるプレイヤーが一人でも存在するとき、以下の事柄を実行
   1. (-1912,4,-181) ~ (-1903,4,-181),(-1901,4,-181)にあるのコマンドブロック(No.9 ~ No.18, No.20)を実行可能状態に変更
   2. `DamageDealt`が0以上であるすべてのプレイヤーから5m以内にいて、かつ`HurtTime`が10であり、`Enemy`を持つすべてのエンティティに`Hit`を付与
   3. (-1920,15,-186)にある[Hitリセット]({{site.baseurl}}/command/xCircuit5/xCircuit5_hitReset.html)を実行
   4. `EnAspir`が1以上であり、`DamageDealt`が0以上であるプレイヤーから、半径5m以内にいる`LivingEnemy`を持ちかつ`HurtTime`が10であるすべてのエンティティに`AlivesHit`を付与し、`AlivesHit`を付与されたエンティティから5m以内にいる`EnAspir`が1以上であり、`DamageDealt`が0以上であるプレイヤーの`AspirBase`に`DamageDealt`を足しこみ、`AlivesHit`を削除
   5. (-1920,8,-181)にある[エンアスピルMP回復]({{site.baseurl}}/command/xCircuit5/xCircuit5_enAspirMPRecovering.html)を実行
2. `DamageDealt`が0以上であるプレイヤーが一人でも存在するとき、以下の事柄を実行される (No.9 ~ No.18,No.20)
   1. `DamageDealt`が0以上であり、種類を問わず剣を持っているすべてのプレイヤーに`UseSword`を付与
   2. \\(1200\leq\text{CurrentMode}\leq 1219 or 1240\leq\text{CurrentMode}\leq 1259\\)であり、`UseSword`を持つすべてのプレイヤーに`UseMode`を付与
   3. `UseSword`を持つすべてのプレイヤーから`UseSword`を削除
   4. \\(2210\leq \text{CurrentMode} \leq 2219\\)であり、`DamageDealt`が0以上であるすべてのプレイヤーに`UseMode`を付与
   5. `DamageDealt`が0以上であり、メインハンドに`Lagacy`を持つアイテムを持っているすべてのプレイヤーに`Legacy`を付与し、(-1920,14,-181)にある[レガシーアイテム処理]({{site.baseurl}}/command/xCircuit5/xCircuit5_legacyProcessing.html)を実行
   6. (-1912,4,-181) ~ (-1903,4,-181),(-1901,4,-181)にあるのコマンドブロック(No.9 ~ No.18, No.20)を実行不可能状態に変更
   7. `DamageDealt`が0以上であるすべてのプレイヤーの`DamageDealt`を0に設定
3. `UseBow`が1以上であるすべてのプレイヤーから1.52m頭上を中心とした半径2m以内にいて、`TypeCheck`を持ち、地面に刺さってなく(inGround:false)、動いている投擲物(life:0)に`Arrow`を付与し、成功したら以下の事柄を実行
   1. `UseBow`が1以上であり、`EnChase`が1以上であるすべてのプレイヤーに`EnChase`を付与
   2. (-1920,9,-186)にある[エンチェイス探索処理]({{site.baseurl}}/command/xCircuit5/xCircuit5_enchaseSearchProcessing.html)を実行
4. \\(3200\leq\text{CurrentMode}\leq 3219 or 3230\leq\text{CurrentMode}\leq 3269\\)であり、`UseBow`が1以上であり、メインハンドに弓を持っているすべてのプレイヤーに`UseMode`を付与
5. `UseBow`(スコア)が1以上であるすべてのプレイヤーに`UseBow`(タグ)を付与
6. `TacticalHeal`を持ち、`DamageTaken`が120以上であるプレイヤーの`TacticalHealBase`に`DamageTaken`を代入し、実行で来たら(-1920,10,-181)にある[タクティカルヒール処理]({{site.baseurl}}/command/xCircuit5/xCircuit5_tacticalHealProcessing.html)を実行
7. \\(1230\leq\text{CurrentMode}\leq 1239\\)の範囲に`CurrentMode`が存在し、`DamageTaken`が1以上であるすべてのプレイヤーに`UseMode`を付与
8. すべてのプレイヤーの`DamageTaken`を0に設定
9. \\(1220\leq\text{CurrentMode}\leq 1229\\)の範囲に`CurrentMode`が存在し、`FlyOneCm`が1以上、`WalkOneCm`が0以下であり、`AerialSlash`を持たず、メインハンドに1個のアイテムを持っているとき`AerialChance`を付与し、成功したら以下の事柄を実行
   1. `AerialChance`を持ち、メインハンドに何かしらの剣を持っているとき、`AerialSlash`を付与
   2. `AerialChance`を持っているすべてのプレイヤーから`AerialChance`を削除
   3. `FlyOneCm`が1以上であり、`AerialSlash`を持つすべてのプレイヤーの頭上2.3mにファイアボール[AerialShockwave]({{site.baseurl}}/entity/entity_entity.html)を召喚
   4. `FlyOneCm`が1以上であり、`AerialSlash`を持つすべてのプレイヤーの`FlyOneCm`を-1000000に設定
   5. (-1920,12,-181)にある[真空斬り使用判定]({{site.baseurl}}/command/xCircuit5/xCircuit5_aerialShlashUseJudgment.html)をリピート実行
