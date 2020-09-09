---
title: 毎tick実行するコマンド群9
tags: [コマンド,スキル,剣士,忍者]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-08 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_command.html
datatable4c: true
summary: 剣士と忍者のスキルの分岐処理を行う。また、必要に応じてサブコマンドも実行する。
summaryDisable: true
---

<!--修正 2020/09/08 -->
<!--分岐先が空欄であったため、追記-->

## About

<span class="tagYellow">位置</span> (-1920,4,-175)

<span class="tagBlack">呼び出し元</span> [初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html), [村人像]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_mainclockProcessing.html)

<span class="tagBlue">分岐先</span> [ファランクス実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_phalanx.html), [アイアンウィル実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_ironWill.html), [ストライ実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_strike.html), [デコイ実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_decoy.html), [タクティカルヒール実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_tacticalHeal.html), [薙ぎ払い実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_slaughter.html), [リアクティブヒール実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_reactiveHeal.html), [斬鉄剣実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_zantetsu.html), [アイサツ実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_aisatsu.html), [疾風実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_shippu.html), [水遁実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_suiton.html), [呼魂実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_kodama.html), [黙想実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_mokuso.html), [兵糧丸実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_hyoryomaru.html), [火遁実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_katon.html), [風切実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_kazakiri.html), [夜駆実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_yogake.html), [連舞実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_tsuremai.html), [跳躍実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_tyoyaku.html)

剣士と忍者のスキルの分岐処理を行う。また、必要に応じてサブコマンドも実行する。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|状態|コメント|
|:-:|-|-|-|
|1|/execute @a[score_ActivatedSkill_min=1000,score_ActivatedSkill=1199,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1919 3 -175 /fill ~ ~ ~ ~5 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0||剣士<br>即時分岐|
|2|/execute @a[score_ActivatedSkill_min=1000,score_ActivatedSkill=1009,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -175 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ファランクス|動力が必要|
|3|/execute @a[score_ActivatedSkill_min=1010,score_ActivatedSkill=1019,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 10 -175 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###アイアンウィル|動力が必要|
|4|/execute @a[score_ActivatedSkill_min=1020,score_ActivatedSkill=1029,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 12 -175 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ストライ|動力が必要|
|5|/execute @a[score_ActivatedSkill_min=1030,score_ActivatedSkill=1039,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 14 -175 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###デコイ|動力が必要|
|6|/execute @a[score_ActivatedSkill_min=1040,score_ActivatedSkill=1049,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 16 -175 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###タクティカルヒール|動力が必要|
|7|/fill ~-5 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|8|/execute @a[score_ActivatedSkill_min=1200,score_ActivatedSkill=1399,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1912 3 -175 /fill ~ ~ ~ ~8 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0||剣士<br>モード分岐|
|9|/execute @a[score_ActivatedSkill_min=1200,score_ActivatedSkill=1209,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1916 3 -144 /fill ~ ~ ~ ~5 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###流し斬り|動力が必要|
|10|/execute @a[score_ActivatedSkill_min=1210,score_ActivatedSkill=1219,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -174 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###薙ぎ払い|動力が必要|
|11|/execute @a[score_ActivatedSkill_min=1220,score_ActivatedSkill=1229,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1910 3 -144 /fill ~ ~ ~ ~3 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###真空斬り|動力が必要|
|12|/scoreboard players set #ProjectileUpdate Global 2|条件付き|
|13|/execute @a[score_ActivatedSkill_min=1230,score_ActivatedSkill=1239,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 10 -174 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###リアクティブヒール|動力が必要|
|14|/execute @a[score_ActivatedSkill_min=1240,score_ActivatedSkill=1249,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1906 3 -144 /fill ~ ~ ~ ~9 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###魔神斬り|動力が必要|
|15|/scoreboard players tag @a[score_ActivatedSkill_min=1240,score_ActivatedSkill=1249] add UpdateRandom|条件付き|
|16|/execute @a[score_ActivatedSkill_min=1250,score_ActivatedSkill=1259,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 12 -174 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###斬鉄剣|動力が必要|
|17|/fill ~-8 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|18|/execute @a[score_ActivatedSkill_min=2000,score_ActivatedSkill=2199,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1902 3 -175 /fill ~ ~ ~ ~9 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0||忍者<br>即時分岐|
|19|/execute @a[score_ActivatedSkill_min=2000,score_ActivatedSkill=2009,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -172 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###アイサツ|動力が必要|
|20|/execute @a[score_ActivatedSkill_min=2010,score_ActivatedSkill=2019,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 10 -172 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###疾風|動力が必要|
|21|/execute @a[score_ActivatedSkill_min=2020,score_ActivatedSkill=2029,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 12 -172 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###水遁|動力が必要|
|22|/execute @a[score_ActivatedSkill_min=2030,score_ActivatedSkill=2039,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 14 -172 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###呼魂|動力が必要|
|23|/execute @a[score_ActivatedSkill_min=2040,score_ActivatedSkill=2049,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 16 -172 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###黙想|動力が必要|
|24|/execute @a[score_ActivatedSkill_min=2050,score_ActivatedSkill=2059,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -171 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###兵糧丸|動力が必要|
|25|/execute @a[score_ActivatedSkill_min=2060,score_ActivatedSkill=2069,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 10 -171 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###火遁|動力が必要|
|26|/execute @a[score_ActivatedSkill_min=2070,score_ActivatedSkill=2079,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 12 -171 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###風切|動力が必要|
|27|/execute @a[score_ActivatedSkill_min=2080,score_ActivatedSkill=2089,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 14 -171 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###夜駆|動力が必要|
|28|/fill ~-9 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|29|/execute @a[score_ActivatedSkill_min=2200,score_ActivatedSkill=2399,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1891 3 -175 /fill ~ ~ ~ ~7 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0||忍者<br>モード分岐|
|30|/execute @a[score_ActivatedSkill_min=2200,score_ActivatedSkill=2209,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1919 3 -143 /fill ~ ~ ~ ~3 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###手裏剣|動力が必要|
|31|/scoreboard players set #ProjectileUpdate Global 2|条件付き|
|32|/execute @a[score_ActivatedSkill_min=2210,score_ActivatedSkill=2219,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -169 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###連舞|動力が必要|
|33|/execute @a[score_ActivatedSkill_min=2220,score_ActivatedSkill=2229,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 10 -169 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###跳躍|動力が必要|
|34|/execute @a[score_ActivatedSkill_min=2230,score_ActivatedSkill=2239,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1915 3 -143 /fill ~ ~ ~ ~3 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###居縮|動力が必要|
|35|/scoreboard players set #ProjectileUpdate Global 2|条件付き|
|36|/execute @a[score_ActivatedSkill_min=2240,score_ActivatedSkill=2249,c=1] ~ ~ ~ /execute 0-0-1-0-1 -1911 3 -143 /fill ~ ~ ~ ~4 ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###サヨナラ|動力が必要|
|37|/fill ~-7 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|

<div class="datatable4c-end"></div>

## 詳細

- プレイヤーの`ActivatedSkill`の値によって分岐、または起動準備を行う。また、必要に応じてサブコマンドも実行する。

### ActivatedSkill分岐(剣士)

|ActivatedSkill|スキル名|実行先|サブコマンド|
|:-:|-|-|-|
|1000~1009|ファランクス|[ファランクス実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_phalanx.html)|
|1010~1019|アイアンウィル|[アイアンウィル実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_ironWill.html)|
|1020~1029|ストライ|[ストライ実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_strike.html)|
|1030~1039|デコイ|[デコイ実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_decoy.html)|
|1040~1049|タクティカルヒール|[タクティカルヒール実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_tacticalHeal.html)|
|1200~1209|流し斬り|[毎tick実行するコマンド群12]({{site.baseurl}}/command/xCircuit12/xCircuit12_command.html)の<br>**流し斬り実行部**を起動|
|1210~1219|薙ぎ払い|[薙ぎ払い実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_slaughter.html)|
|1220~1229|真空斬り|[毎tick実行するコマンド群12]({{site.baseurl}}/command/xCircuit12/xCircuit12_command.html)の<br>**真空斬り実行部**を起動|`#ProjectileUpdate`の`Global`を2に設定|
|1230~1239|リアクティブヒール|[リアクティブヒール実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_reactiveHeal.html)|
|1240~1249|魔人斬り|[毎tick実行するコマンド群12]({{site.baseurl}}/command/xCircuit12/xCircuit12_command.html)の<br>**魔人斬り実行部**を起動|対象に`UpdateRandom`を付与|
|1250~1259|斬鉄剣|[斬鉄剣実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_zantetsu.html)|

### ActivatedSkill分岐(忍者)

|ActivatedSkill|スキル名|実行先|サブコマンド|
|:-:|-|-|-|
|2000~2009|アイサツ|[アイサツ実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_aisatsu.html)|
|2010~2019|疾風|[疾風実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_shippu.html)|
|2020~2029|水遁|[水遁実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_suiton.html)|
|2030~2039|呼魂|[呼魂実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_kodama.html)|
|2040~2049|黙想|[黙想実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_mokuso.html)|
|2050~2059|兵糧丸|[兵糧丸実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_hyoryomaru.html)|
|2060~2069|火遁|[火遁実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_katon.html)|
|2070~2079|風切|[風切実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_kazakiri.html)|
|2080~2089|夜駆|[夜駆実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_yogake.html)|
|2200~2209|手裏剣|[毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)の<br>**手裏剣実行部**を起動|`#ProjectileUpdate`の`Global`を2に設定|
|2210~2219|連舞|[連舞実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_tsuremai.html)|
|2220~2229|跳躍|[跳躍実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_tyoyaku.html)|
|2230~2239|居縮|[毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)の<br>**居縮実行部**を起動|`#ProjectileUpdate`の`Global`を2に設定|
|2240~2249|サヨナラ|[毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)の<br>**サヨナラ実行部**を起動|
