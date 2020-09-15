---
title: 毎tick実行するコマンド群11
tags: [コマンド,スキル,黒魔導士,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-14 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_command.html
datatable4c: true
summary: 黒魔導士と召喚士のスキルの分岐処理を行う。また、必要に応じてサブコマンドも実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,4,-157)

<span class="tagBlack">呼び出し元</span> [初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html), [村人像]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_mainclockProcessing.html)

<span class="tagBlue">分岐先</span> [スノウ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_snow.html), [キャンドル実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_candle.html), [ウェザー実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_weather.html), [グロウ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_glow.html), [マナリフレッシュ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_manaRefresh.html), [エンアスピル実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_enAspir.html), [マジックシールド実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_magicShield.html), [ルーラ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_lura.html), [ウィンドウォール実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_windWall.html), [ラナルータ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_lanaRouter.html), [サンダーボルト実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_thunderbolt.html), [ジオクラッシュ]({{site.baseurl}}/command/xCircuit11/xCircuit11_geoCrash.html), [ドレイン]({{site.baseurl}}/command/xCircuit11/xCircuit11_drain.html), [パルプンテ]({{site.baseurl}}/command/xCircuit11/xCircuit11_pulpunte.html), [サモンP：スノー実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonSnow.html), [サモンE：マーチャント実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonMerchant.html), [ヘイカモン実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_heyComeOn.html), [サモンE：スーパードラゴン実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonDragon.html), [サモンP：ウルフ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonWolf.html), [サモンE：ヒーリングキャット実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonHealingCat.html), [サモンP：ゴーレム実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonGolem.html), [サモンE：バルーン実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summmonBalloon.html), [サモンE：グライダー実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summmonGlider.html), [あつあつタライ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_hotTub.html), [サモンB：オブシディアン実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonObsidian.html), [ぽむぽむハナビ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_pompomFirework.html), [サモンB：エンダーチェスト実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonEnderChest.html), [きらきらタライ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_kirakiraTub.html), [ぷちブラック実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_puchiBlack.html)

黒魔導士と召喚士のスキルの分岐処理を行う。また、必要に応じてサブコマンドも実行する。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|状態|コメント|
|:-:|-|-|-|
|1|/execute @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5199,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1919 3 -157 /fill ~ ~ ~ ~10 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0||黒魔導士<br>即時分岐|
|2|/execute @a[score_ActivatedSkill_min=5000,score_ActivatedSkill=5009] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -157 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###スノウ|動力が必要|
|3|/execute @a[score_ActivatedSkill_min=5010,score_ActivatedSkill=5019] ~ ~ ~ /execute 0-0-1-0-1 ~ 11 -157 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###キャンドル|動力が必要|
|4|/execute @a[score_ActivatedSkill_min=5020,score_ActivatedSkill=5029] ~ ~ ~ /execute 0-0-1-0-1 ~ 13 -157 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ウェザー|動力が必要|
|5|/execute @a[score_ActivatedSkill_min=5030,score_ActivatedSkill=5039] ~ ~ ~ /execute 0-0-1-0-1 ~ 15 -157 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###グロウ|動力が必要|
|6|/execute @a[score_ActivatedSkill_min=5040,score_ActivatedSkill=5049] ~ ~ ~ /execute 0-0-1-0-1 ~ 17 -157 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###マナリフレッシュ|動力が必要|
|7|/execute @a[score_ActivatedSkill_min=5050,score_ActivatedSkill=5059] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -156 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###エンアスピル|動力が必要|
|8|/execute @a[score_ActivatedSkill_min=5060,score_ActivatedSkill=5069] ~ ~ ~ /execute 0-0-1-0-1 ~ 10 -156 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###マジックシールド|動力が必要|
|9|/execute @a[score_ActivatedSkill_min=5070,score_ActivatedSkill=5079] ~ ~ ~ /execute 0-0-1-0-1 ~ 16 -156 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ルーラ|動力が必要|
|10|/execute @a[score_ActivatedSkill_min=5080,score_ActivatedSkill=5089] ~ ~ ~ /execute 0-0-1-0-1 ~ 12 -156 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ウィンドウォール|動力が必要|
|11|/execute @a[score_ActivatedSkill_min=5090,score_ActivatedSkill=5099] ~ ~ ~ /execute 0-0-1-0-1 ~ 14 -156 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ラナルータ|動力が必要|
|12|/fill ~-10 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|13|/execute @a[score_ActivatedSkill_min=5200,score_ActivatedSkill=5399,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1907 3 -157 /fill ~ ~ ~ ~7 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0||黒魔導士<br>モード分岐|
|14|/execute @a[score_ActivatedSkill_min=5200,score_ActivatedSkill=5209] ~ ~ ~ /execute 0-0-1-0-1 -1907 3 -138 /fill ~ ~ ~ ~4 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###アイスストーム|動力が必要|
|15|/execute @a[score_ActivatedSkill_min=5210,score_ActivatedSkill=5219] ~ ~ ~ /execute 0-0-1-0-1 -1902 3 -138 /fill ~ ~ ~ ~4 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###クロスファイアー|動力が必要|
|16|/execute @a[score_ActivatedSkill_min=5220,score_ActivatedSkill=5229] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -154 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###サンダーボルト|動力が必要|
|17|/execute @a[score_ActivatedSkill_min=5230,score_ActivatedSkill=5239] ~ ~ ~ /execute 0-0-1-0-1 ~ 11 -154 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ジオクラッシュ|動力が必要|
|18|/execute @a[score_ActivatedSkill_min=5240,score_ActivatedSkill=5249] ~ ~ ~ /execute 0-0-1-0-1 ~ 13 -154 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ドレイン|動力が必要|
|19|/execute @a[score_ActivatedSkill_min=5250,score_ActivatedSkill=5259] ~ ~ ~ /execute 0-0-1-0-1 ~ 15 -154 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###パルプンテ|動力が必要|
|20|/scoreboard players tag @a[score_ActivatedSkill_min=5250,score_ActivatedSkill=5259] add UpdateRandom|条件付き|
|21|/fill ~-7 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|22|/execute @a[score_ActivatedSkill_min=6000,score_ActivatedSkill=6199,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1898 3 -157 /fill ~ ~ ~ ~9 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0||召喚士<br>即時分岐|
|23|/execute @a[score_ActivatedSkill_min=6000,score_ActivatedSkill=6009] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -152 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###サモンP：スノー|動力が必要|
|24|/execute @a[score_ActivatedSkill_min=6010,score_ActivatedSkill=6019] ~ ~ ~ /execute 0-0-1-0-1 ~ 10 -152 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###サモンE：マーチャント|動力が必要|
|25|/execute @a[score_ActivatedSkill_min=6020,score_ActivatedSkill=6029] ~ ~ ~ /execute 0-0-1-0-1 ~ 12 -152 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ヘイカモン|動力が必要|
|26|/execute @a[score_ActivatedSkill_min=6030,score_ActivatedSkill=6039] ~ ~ ~ /execute 0-0-1-0-1 ~ 14 -152 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###サモンE:スーパードラゴン|動力が必要|
|27|/execute @a[score_ActivatedSkill_min=6040,score_ActivatedSkill=6049] ~ ~ ~ /execute 0-0-1-0-1 ~ 17 -152 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###サモンP：ウルフ|動力が必要|
|28|/execute @a[score_ActivatedSkill_min=6050,score_ActivatedSkill=6059] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -151 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###サモンE:ヒーリングキャット|動力が必要|
|29|/execute @a[score_ActivatedSkill_min=6060,score_ActivatedSkill=6069] ~ ~ ~ /execute 0-0-1-0-1 ~ 10 -151 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###サモンP:ゴーレム|動力が必要|
|30|/execute @a[score_ActivatedSkill_min=6070,score_ActivatedSkill=6079] ~ ~ ~ /execute 0-0-1-0-1 ~ 12 -151 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###サモンE:バルーン|動力が必要|
|31|/execute @a[score_ActivatedSkill_min=6080,score_ActivatedSkill=6089] ~ ~ ~ /execute 0-0-1-0-1 ~ 13 -151 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###サモンE:バルーン|動力が必要|
|32|/fill ~-9 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|33|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6399,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1887 3 -157 /fill ~ ~ ~ ~11 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0||召喚士<br>モード分岐|
|34|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -149 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###フィール|動力が必要|
|35|/execute @a[score_ActivatedSkill_min=6210,score_ActivatedSkill=6219] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -148 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###金タライ|動力が必要|
|36|/execute @a[score_ActivatedSkill_min=6220,score_ActivatedSkill=6229] ~ ~ ~ /execute 0-0-1-0-1 ~ 12 -149 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ディール|動力が必要|
|37|/execute @a[score_ActivatedSkill_min=6230,score_ActivatedSkill=6239] ~ ~ ~ /execute 0-0-1-0-1 ~ 14 -149 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ぽんぽん|動力が必要|
|38|/execute @a[score_ActivatedSkill_min=6240,score_ActivatedSkill=6249] ~ ~ ~ /execute 0-0-1-0-1 ~ 17 -149 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###つんつん|動力が必要|
|39|/execute @a[score_ActivatedSkill_min=6250,score_ActivatedSkill=6259] ~ ~ ~ /execute 0-0-1-0-1 ~ 10 -148 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###あつあつタライ|動力が必要|
|40|/execute @a[score_ActivatedSkill_min=6260,score_ActivatedSkill=6269] ~ ~ ~ /execute 0-0-1-0-1 ~ 11 -146 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###サモンB:オブシディアン|動力が必要|
|41|/execute @a[score_ActivatedSkill_min=6270,score_ActivatedSkill=6279] ~ ~ ~ /execute 0-0-1-0-1 ~ 9 -146 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ぽむぽむハナビ|動力が必要|
|42|/execute @a[score_ActivatedSkill_min=6280,score_ActivatedSkill=6289] ~ ~ ~ /execute 0-0-1-0-1 ~ 13 -146 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###サモンB:エンダーチェスト|動力が必要|
|43|/execute @a[score_ActivatedSkill_min=6290,score_ActivatedSkill=6299] ~ ~ ~ /execute 0-0-1-0-1 ~ 12 -148 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###きらきらタライ|動力が必要|
|44|/execute @a[score_ActivatedSkill_min=6300,score_ActivatedSkill=6309] ~ ~ ~ /execute 0-0-1-0-1 ~ 15 -146 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###サモン:ぷちブラック|動力が必要|
|45|/fill ~-11 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|46|/execute @a[tag=Return,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 17 -156 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ルーラ発動||ルーラ発動|

<div class="datatable4c-end"></div>

## 詳細

- プレイヤーの`ActivatedSkill`の値によって分岐、または起動準備を行う。また、必要に応じてサブコマンドも実行する。
- `Return`を持つプレイヤーが存在するとき、[ルーラワープ処理]({{site.baseurl}}/command/xCircuit11/xCircuit11_luraWarp.html)を実行

### ActivatedSkill分岐(黒魔導士)

|ActivatedSkill|スキル名|実行先|サブコマンド|
|:-:|-|-|-|
|5000~5009|スノウ|[スノウ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_snow.html)|
|5010~5019|キャンドル|[キャンドル実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_candle.html)|
|5020~5029|ウェザー|[ウェザー実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_weather.html)|
|5030~5039|グロウ|[グロウ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_glow.html)|
|5040~5049|マナリフレッシュ|[マナリフレッシュ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_manaRefresh.html)|
|5050~5059|エンアスピル|[エンアスピル実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_enAspir.html)|
|5060~5069|マジックシールド|[マジックシールド実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_magicShield.html)|
|5070~5079|ルーラ|[ルーラ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_lura.html)|
|5080~5089|ウィンドウォール|[ウィンドウォール実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_windWall.html)|
|5090~5099|ラナルータ|[ラナルータ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_lanaRouter.html)|
|5200~5209|アイスストーム|[毎tick実行するコマンド群14]({{site.baseurl}}/command/xCircuit14/xCircuit14_command.html)の<br>**アイスストーム実行部**を起動|
|5210~5219|クロスファイアー|[毎tick実行するコマンド群14]({{site.baseurl}}/command/xCircuit14/xCircuit14_command.html)の<br>**クロスファイアー実行部**を起動|
|5220~5229|サンダーボルト|[サンダーボルト実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_thunderbolt.html)|
|5230~5239|ジオクラッシュ|[ジオクラッシュ]({{site.baseurl}}/command/xCircuit11/xCircuit11_geoCrash.html)|
|5240~5249|ドレイン|[ドレイン]({{site.baseurl}}/command/xCircuit11/xCircuit11_drain.html)|
|5250~5259|パルプンテ|[パルプンテ]({{site.baseurl}}/command/xCircuit11/xCircuit11_pulpunte.html)|対象に`UpdateRandom`を付与|

### ActivatedSkill分岐(召喚士)

|ActivatedSkill|スキル名|実行先|サブコマンド|
|:-:|-|-|-|
|6000~6009|サモンP：スノー|[サモンP：スノー実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonSnow.html)|
|6010~6019|サモンE：マーチャント|[サモンE：マーチャント実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonMerchant.html)|
|6020~6029|ヘイカモン|[ヘイカモン実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_heyComeOn.html)|
|6030~6039|サモンE：スーパードラゴン|[サモンE：スーパードラゴン実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonDragon.html)|
|6040~6049|サモンP：ウルフ|[サモンP：ウルフ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonWolf.html)|
|6050~6059|サモンE：ヒーリングキャット|[サモンE：ヒーリングキャット実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonHealingCat.html)|
|6060~6069|サモンP：ゴーレム|[サモンP：ゴーレム実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonGolem.html)|
|6070~6079|サモンE：バルーン|[サモンE：バルーン実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summmonBalloon.html)|
|6080~6089|サモンE：グライダー|[サモンE：グライダー実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summmonGlider.html)|
|6200~6209|あつあつタライ|[あつあつタライ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_hotTub.html)|
|6210~6219|サモンB：オブシディアン|[サモンB：オブシディアン実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonObsidian.html)|
|6220~6229|ぽむぽむハナビ|[ぽむぽむハナビ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_pompomFirework.html)|
|6230~6239|サモンB：エンダーチェスト|[サモンB：エンダーチェスト実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_summonEnderChest.html)|
|6230~6239|きらきらタライ|[きらきらタライ実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_kirakiraTub.html)|
|6230~6239|ぷちブラック|[ぷちブラック実行]({{site.baseurl}}/command/xCircuit11/xCircuit11_puchiBlack.html)|
