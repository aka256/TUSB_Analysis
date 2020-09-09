---
title: 毎tick実行するコマンド群10
tags: [コマンド,スキル,狩人,白魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-08 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_command.html
datatable4c: true
summary: 狩人と白魔導士のスキルの分岐処理を行う。また、必要に応じてサブコマンドも実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,4,-167)

<span class="tagBlack">呼び出し元</span> [初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html), [村人像]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_mainclockProcessing.html)

<span class="tagBlue">分岐先</span> [ルカナントラップ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_lucananTrap.html), [照明弾実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_flare.html), [ボミオストラップ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_bomiosTrap.html), [ワイルドクッキング実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_wildCooking.html), [エンチェイス実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_enchase.html), [レーダーヴィジョン実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_radarVision.html), [エナジーセーブ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_energySave.html), [ニフラムトラップ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_niflamTrap.html), [ワイルドヒーリング実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_wildHealing.html), [リアクティブヒール実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_reactiveHeal.html), [バードストライク実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_birdStrike.html), [キアリク実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_chialik.html), [ハートブースト実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_heartBoost.html), [リジェネレーション実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_regeneration.html), [クイック実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_quick.html), [バオル実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_baol.html), [ケアル実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_keal.html), [レイズワープ]({{site.baseurl}}/command/xCircuit10/xCircuit10_raiseWarp.html), [レイズ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_raise.html)

狩人と白魔導士のスキルの分岐処理を行う。また、必要に応じてサブコマンドも実行する。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|状態|コメント|
|:-:|-|-|-|
|1|/execute @a[score_ActivatedSkill_min=3000,score_ActivatedSkill=3199,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1919 3 -167 /fill ~ ~ ~ ~8 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0||狩人<br>即時分岐|
|2|/execute @a[score_ActivatedSkill_min=3000,score_ActivatedSkill=3009] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -167 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ルカナントラップ|動力が必要|
|3|/execute @a[score_ActivatedSkill_min=3010,score_ActivatedSkill=3019] ~ ~ ~ /execute 0-0-1-0-1 ~ 11 -167 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###照明弾|動力が必要|
|4|/execute @a[score_ActivatedSkill_min=3020,score_ActivatedSkill=3029] ~ ~ ~ /execute 0-0-1-0-1 ~ 13 -167 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ボミオストラップ|動力が必要|
|5|/execute @a[score_ActivatedSkill_min=3030,score_ActivatedSkill=3039] ~ ~ ~ /execute 0-0-1-0-1 ~ 16 -167 /clone ~ ~ ~ ~ ~1 ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ワイルドクッキング|動力が必要|
|6|/execute @a[score_ActivatedSkill_min=3040,score_ActivatedSkill=3049] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -166 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###エンチェイス|動力が必要|
|7|/execute @a[score_ActivatedSkill_min=3050,score_ActivatedSkill=3059] ~ ~ ~ /execute 0-0-1-0-1 ~ 10 -166 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###レーダーヴィジョン|動力が必要|
|8|/execute @a[score_ActivatedSkill_min=3060,score_ActivatedSkill=3069] ~ ~ ~ /execute 0-0-1-0-1 ~ 13 -166 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###エナジーセーブ|動力が必要|
|9|/execute @a[score_ActivatedSkill_min=3070,score_ActivatedSkill=3079] ~ ~ ~ /execute 0-0-1-0-1 ~ 15 -166 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ニフラムトラップ|動力が必要|
|10|/fill ~-8 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|11|/execute @a[score_ActivatedSkill_min=3200,score_ActivatedSkill=3399,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1909 3 -167 /fill ~ ~ ~ ~12 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0||狩人<br>モード分岐|
|12|/execute @a[score_ActivatedSkill_min=3200,score_ActivatedSkill=3209,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1906 3 -143 /fill ~ ~ ~ ~9 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ステークスファイア|動力が必要|
|13|/scoreboard players tag @a[score_ActivatedSkill_min=3200,score_ActivatedSkill=3209] add UpdateRandom|条件付き|
|14|/execute @a[score_ActivatedSkill_min=3210,score_ActivatedSkill=3219,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1896 3 -143 /fill ~ ~ ~ ~3 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###チェインアロー|動力が必要|
|15|/scoreboard players set #ProjectileUpdate Global 2|条件付き|
|16|/execute @a[score_ActivatedSkill_min=3220,score_ActivatedSkill=3229,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -164 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ワイルドヒーリング|動力が必要|
|17|/execute @a[score_ActivatedSkill_min=3230,score_ActivatedSkill=3239,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1892 3 -143 /fill ~ ~ ~ ~4 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ブラストショット|動力が必要|
|18|/scoreboard players set #ProjectileUpdate Global 2|条件付き|
|19|/execute @a[score_ActivatedSkill_min=3240,score_ActivatedSkill=3249,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1887 3 -143 /fill ~ ~ ~ ~3 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###バードストライク|動力が必要|
|20|/scoreboard players set #ProjectileUpdate Global 2|条件付き|
|21|/execute @a[score_ActivatedSkill_min=3250,score_ActivatedSkill=3259,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1883 3 -143 /fill ~ ~ ~ ~4 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ガストキャノン|動力が必要|
|22|/execute @a[score_ActivatedSkill_min=3260,score_ActivatedSkill=3269,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1878 3 -143 /fill ~ ~ ~ ~3 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###フェイタルショット|動力が必要|
|23|/scoreboard players set #ProjectileUpdate Global 2|条件付き|
|24|/fill ~-12 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|25|/execute @a[score_ActivatedSkill_min=4000,score_ActivatedSkill=4199,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1895 3 -167 /fill ~ ~ ~ ~6 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0||白魔導士<br>即時分岐|
|26|/execute @a[score_ActivatedSkill_min=4000,score_ActivatedSkill=4009] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -162 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###キアリク|動力が必要|
|27|/execute @a[score_ActivatedSkill_min=4010,score_ActivatedSkill=4019] ~ ~ ~ /execute 0-0-1-0-1 ~ 10 -162 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ハートブースト|動力が必要|
|28|/execute @a[score_ActivatedSkill_min=4020,score_ActivatedSkill=4029] ~ ~ ~ /execute 0-0-1-0-1 ~ 12 -162 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###リジェネレーション|動力が必要|
|29|/execute @a[score_ActivatedSkill_min=4030,score_ActivatedSkill=4039] ~ ~ ~ /execute 0-0-1-0-1 ~ 14 -162 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###クイック|動力が必要|
|30|/execute @a[score_ActivatedSkill_min=4040,score_ActivatedSkill=4049] ~ ~ ~ /execute 0-0-1-0-1 ~ 16 -162 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###バオル|動力が必要|
|31|/scoreboard players tag @a[score_ActivatedSkill_min=4050,score_ActivatedSkill=4059] add CastRaise|動力が必要|
|32|/fill ~-6 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|33|/execute @a[score_ActivatedSkill_min=4200,score_ActivatedSkill=4399,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1887 3 -167 /fill ~ ~ ~ ~5 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0||白魔導士<br>モード分岐|
|34|/execute @a[score_ActivatedSkill_min=4200,score_ActivatedSkill=4209,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -159 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ケアル|動力が必要|
|35|/execute @a[score_ActivatedSkill_min=4210,score_ActivatedSkill=4219,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1919 3 -138 /fill ~ ~ ~ ~3 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ディア|動力が必要|
|36|/scoreboard players set #ProjectileUpdate Global 2|条件付き|
|37|/execute @a[score_ActivatedSkill_min=4220,score_ActivatedSkill=4229,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1915 3 -138 /fill ~ ~ ~ ~4 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###フラワーギフト|動力が必要|
|38|/execute @a[score_ActivatedSkill_min=4230,score_ActivatedSkill=4239,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1910 3 -138 /fill ~ ~ ~ ~2 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ホーリー|動力が必要|
|39|/fill ~-5 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|40|/execute @a[tag=RaiseEnd,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 10 -161 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###レイズ発動||レイズ発動|
|41|/execute @a[tag=CastRaise,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -161 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###レイズ||レイズ・リレイズ|

<div class="datatable4c-end"></div>

## 詳細

- プレイヤーの`ActivatedSkill`の値によって分岐、または起動準備を行う。また、必要に応じてサブコマンドも実行する。
- `RaiseEnd`が付与されているプレイヤーが存在するとき、[レイズワープ]({{site.baseurl}}/command/xCircuit10/xCircuit10_raiseWarp.html)を実行
- `CastRaise`が付与されているプレイヤーが存在するとき、[レイズ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_raise.html)を実行

### ActivatedSkill分岐(狩人)

|ActivatedSkill|スキル名|実行先|サブコマンド|
|:-:|-|-|-|
|3000~3009|ルカナントラップ|[ルカナントラップ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_lucananTrap.html)|
|3010~3019|照明弾|[照明弾実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_flare.html)|
|3020~3029|ボミオストラップ|[ボミオストラップ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_bomiosTrap.html)|
|3030~3039|ワイルドクッキング|[ワイルドクッキング実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_wildCooking.html)|
|3040~3049|エンチェイス|[エンチェイス実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_enchase.html)|
|3050~3059|レーダーヴィジョン|[レーダーヴィジョン実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_radarVision.html)|
|3060~3069|エナジーセーブ|[エナジーセーブ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_energySave.html)|
|3070~3079|ニフラムトラップ|[ニフラムトラップ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_niflamTrap.html)|
|3200~3209|ステークスファイア|[毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)の<br>**ステークスファイア実行部**を起動|対象に`UpdateRandom`を付与|
|3210~3219|チェインアロー|[毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)の<br>**チェインアロー実行部**を起動|`#ProjectileUpdate`の`Global`を2に設定|
|3220~3229|ワイルドヒーリング|[ワイルドヒーリング実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_wildHealing.html)|
|3230~3239|リアクティブヒール|[リアクティブヒール実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_reactiveHeal.html)|
|3240~3249|ブラストショット|[毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)の<br>**ブラストショット実行部**を起動|`#ProjectileUpdate`の`Global`を2に設定|
|3250~3259|バードストライク|[バードストライク実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_birdStrike.html)|`#ProjectileUpdate`の`Global`を2に設定|
|3260~3269|ガストキャノン|[毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)の<br>**ガストキャノン実行部**を起動|
|3270~3279|フェイタルショット|[毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)の<br>**フェイタルショット実行部**を起動|`#ProjectileUpdate`の`Global`を2に設定|

### ActivatedSkill分岐(白魔導士)

|ActivatedSkill|スキル名|実行先|サブコマンド|
|:-:|-|-|-|
|4000~4009|キアリク|[キアリク実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_chialik.html)|
|4010~4019|ハートブースト|[ハートブースト実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_heartBoost.html)|
|4020~4029|リジェネレーション|[リジェネレーション実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_regeneration.html)|
|4030~4039|クイック|[クイック実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_quick.html)|
|4040~4049|バオル|[バオル実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_baol.html)|
|4050~4059|レイズ||対象に`CastRaise`を付与|
|4200~4209|ケアル|[ケアル実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_keal.html)|
|4210~4219|ディア|[毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)の<br>**ディア実行部**を起動|`#ProjectileUpdate`の`Global`を2に設定|
|4220~4229|フラワーギフト|[毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)の<br>**フラワーギフト実行部**を起動|
|4230~4239|ホーリー|[毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)の<br>**ホーリー実行部**を起動|`#ProjectileUpdate`の`Global`を2に設定|
