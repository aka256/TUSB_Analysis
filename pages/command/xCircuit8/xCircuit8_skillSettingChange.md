---
title: スキル設定変更
tags: [コマンド,表示,スキル]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-20 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit8/xCircuit8_skillSettingChange.html
datatable3c: true
summary: スキルの変更時、現在のスキルIDの変更、スキルコストの変更などを行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-177) ~ (-1920,16,-178)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群8]({{site.baseurl}}/command/xCircuit8/xCircuit8_command.html)

スキルの変更時、現在のスキルIDの変更、スキルコストの変更などを行う。

## ChangeSkill絞り込み(全体)

### コマンド群

<span class="tagYellow">位置</span> (-1920,10,-178)

<span class="expandButton" onClick="openCloseBE(`openHere1-begin`)">+</span>コマンド

<div class="openHere-begin openHere1-begin"></div>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @a[score_InstantChangeA_min=0] add SkillChanging|
|2|/execute @a[score_InstantChangeA_min=0,score_InstantChangeA=19] ~ ~ ~ /scoreboard players operation @a[c=1] ChangeSkill = @a[c=1] InstantChangeA|条件付き|
|3|/scoreboard players tag @a[score_InstantChangeB_min=0] add SkillChanging|
|4|/execute @a[score_InstantChangeB_min=0,score_InstantChangeB=19] ~ ~ ~ /scoreboard players operation @a[c=1] ChangeSkill = @a[c=1] InstantChangeB|条件付き|
|5|/scoreboard players tag @a[score_ModeChangeA_min=0] add SkillChanging|
|6|/execute @a[score_ModeChangeA_min=20,score_ModeChangeA=39] ~ ~ ~ /scoreboard players operation @a[c=1] ChangeSkill = @a[c=1] ModeChangeA|条件付き|
|7|/scoreboard players tag @a[score_ModeChangeB_min=0] add SkillChanging|
|8|/execute @a[score_ModeChangeB_min=20,score_ModeChangeB=39] ~ ~ ~ /scoreboard players operation @a[c=1] ChangeSkill = @a[c=1] ModeChangeB|条件付き|
|9|/scoreboard players operation @a Job *= #100 Const|
|10|/execute @a[score_ChangeSkill_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] ChangeSkill += @a[c=1] Job|
|11|/scoreboard players operation @a Job /= #100 Const|
|12|/scoreboard players operation @a[score_ChangeSkill_min=0] ChangeSkill *= #10 Const|

<div class="datatable3c-end"></div>

<div class="openHere-end openHere1-end"></div>

### 詳細

1. `InstantChangeA`, `InstantChangB`, `ModeChangeA`, `ModeChangeB`がそれぞれ0以上であるすべてのプレイヤーに`SkillChanging`を付与し、それぞれのスコアが条件を満たす時([ChangeSkillの条件](#changeskillへの代入の条件)を参照)、`ChangeSkill`にそれぞれのスコアの値を代入する
2. `ChangeSkill`が0以上であるすべてのプレイヤーに対し、以下の計算を実行

$$\text{ChangeSkill} = (\text{ChangeSkill}+100\times \text{Job})\times 10$$

#### ChangeSkillへの代入の条件

|対象スコア|条件|結果|
|-|-|-|
|`InstantChangeA`|\\(0\leq\text{InstantChangeA}\leq 19\\)|\\(\text{ChangeSkill}=\text{InstantChangeA}\\)|
|`InstantChangeB`|\\(0\leq\text{InstantChangeB}\leq 19\\)|\\(\text{ChangeSkill}=\text{InstantChangeB}\\)|
|`ModeChangeA`|\\(20\leq\text{ModeChangeA}\leq 39\\)|\\(\text{ChangeSkill}=\text{ModeChangeA}\\)|
|`ModeChangeB`|\\(20\leq\text{ModeChangeB}\leq 39\\)|\\(\text{ChangeSkill}=\text{ModeChangeB}\\)|

{% include note.html content="実行後の`ChangeSkill`は4桁目に`Job`、2,3桁目に`InstantChangeA`, `InstantChangeB`, `ModeChangeA`, `ModeChangeB`のいずれか、そして1桁目に0が入る。<br/><br/> 例: `Job`=2(忍者)、`InstantChangeB`=13であるときは、`ChangeSkill`=2130となる。" %}

## ChangeSkill絞り込み(剣士)

### コマンド群

<span class="tagYellow">位置</span> (-1920,11,-178)

<span class="expandButton" onClick="openCloseBE(`openHere2-begin`)">+</span>コマンド

<div class="openHere-begin openHere2-begin"></div>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players add @a[score_ChangeSkill_min=1000,score_ChangeSkill=1008,score_Level_min=15] ChangeSkill 1|
|2|/scoreboard players add @a[score_ChangeSkill_min=1000,score_ChangeSkill=1008,score_Level_min=30] ChangeSkill 1|条件付き|
|3|/scoreboard players add @a[score_ChangeSkill_min=1000,score_ChangeSkill=1008,score_Level_min=45] ChangeSkill 1|条件付き|
|4|/scoreboard players add @a[score_ChangeSkill_min=1010,score_ChangeSkill=1018,score_Level_min=35] ChangeSkill 1|
|5|/scoreboard players add @a[score_ChangeSkill_min=1020,score_ChangeSkill=1028,score_Level_min=25] ChangeSkill 1|
|6|/scoreboard players add @a[score_ChangeSkill_min=1020,score_ChangeSkill=1028,score_Level_min=40] ChangeSkill 1|条件付き|
|7|/scoreboard players add @a[score_ChangeSkill_min=1030,score_ChangeSkill=1038,score_Level_min=38] ChangeSkill 1|
|8|/scoreboard players add @a[score_ChangeSkill_min=1200,score_ChangeSkill=1208,score_Level_min=20] ChangeSkill 1|
|9|/scoreboard players add @a[score_ChangeSkill_min=1200,score_ChangeSkill=1208,score_Level_min=37] ChangeSkill 1|条件付き|
|10|/scoreboard players add @a[score_ChangeSkill_min=1210,score_ChangeSkill=1218,score_Level_min=28] ChangeSkill 1|
|11|/scoreboard players add @a[score_ChangeSkill_min=1210,score_ChangeSkill=1218,score_Level_min=48] ChangeSkill 1|条件付き|
|12|/scoreboard players add @a[score_ChangeSkill_min=1220,score_ChangeSkill=1228,score_Level_min=26] ChangeSkill 1|
|13|/scoreboard players add @a[score_ChangeSkill_min=1220,score_ChangeSkill=1228,score_Level_min=39] ChangeSkill 1|条件付き|
|14|/scoreboard players add @a[score_ChangeSkill_min=1230,score_ChangeSkill=1238,score_Level_min=33] ChangeSkill 1|
|15|/scoreboard players add @a[score_ChangeSkill_min=1230,score_ChangeSkill=1238,score_Level_min=49] ChangeSkill 1|条件付き|
|16|/scoreboard players add @a[score_ChangeSkill_min=1240,score_ChangeSkill=1248,score_Level_min=46] ChangeSkill 1|
|17|/scoreboard players reset @a[score_ChangeSkill_min=1000,score_ChangeSkill=1009,score_Level=0] ChangeSkill|
|18|/scoreboard players reset @a[score_ChangeSkill_min=1010,score_ChangeSkill=1019,score_Level=4] ChangeSkill|
|19|/scoreboard players reset @a[score_ChangeSkill_min=1020,score_ChangeSkill=1029,score_Level=9] ChangeSkill|
|20|/scoreboard players reset @a[score_ChangeSkill_min=1030,score_ChangeSkill=1039,score_Level=17] ChangeSkill|
|21|/scoreboard players reset @a[score_ChangeSkill_min=1040,score_ChangeSkill=1049,score_Level=42] ChangeSkill|
|22|/scoreboard players reset @a[score_ChangeSkill_min=1200,score_ChangeSkill=1209,score_Level=2] ChangeSkill|
|23|/scoreboard players reset @a[score_ChangeSkill_min=1210,score_ChangeSkill=1219,score_Level=7] ChangeSkill|
|24|/scoreboard players reset @a[score_ChangeSkill_min=1220,score_ChangeSkill=1229,score_Level=12] ChangeSkill|
|25|/scoreboard players reset @a[score_ChangeSkill_min=1230,score_ChangeSkill=1239,score_Level=16] ChangeSkill|
|26|/scoreboard players reset @a[score_ChangeSkill_min=1240,score_ChangeSkill=1249,score_Level=22] ChangeSkill|
|27|/scoreboard players reset @a[score_ChangeSkill_min=1250,score_ChangeSkill=1259,score_Level=49] ChangeSkill|
|28|/scoreboard players reset @a[score_ChangeSkill_min=1050,score_ChangeSkill=1199] ChangeSkill|
|29|/scoreboard players reset @a[score_ChangeSkill_min=1260,score_ChangeSkill=1999] ChangeSkill|

<div class="datatable3c-end"></div>

<div class="openHere-end openHere2-end"></div>

### 詳細

- すべてのプレイヤーの`ChangeSkill`と`Level`の値に対して、`ChangeSkill`に特定の値を足す、もしくは`ChangeSkill`を0に設定する。詳細は[Job=1(剣士)でのChangeSkill操作](#job1剣士でのchangeskill操作)を参考。

#### Job=1(剣士)でのChangeSkill操作

下記の表の「`ChangeSkill`への操作」に整数がある場合はそれを`ChangeSkill`へ足しこみ、resetとある場合は`ChangeSkill`=0とする。

|ChangeSkillの範囲|Levelの範囲|ChangeSkillへの操作|操作後のChangeSkill|
|:-:|:-:|:-:|:-:|
|\\(1000\leq\text{ChangeSkill}\leq 1009\\)|\\(\text{Level}\leq 0\\)|reset|0|
|\\((1000\leq\text{ChangeSkill}\leq 1009)\\)|\\(1\leq\text{Level}\leq 14\\)|(none)|1000|
|\\(1000\leq\text{ChangeSkill}\leq 1008\\)|\\(15\leq\text{Level}\leq 29\\)|+1|1001|
|同上|\\(30\leq\text{Level}\leq 44\\)|+2|1002|
|同上|\\(45\leq\text{Level}\\)|+3|1003|
|\\(1010\leq\text{ChangeSkill}\leq 1019\\)|\\(\text{Level}\leq 4\\)|reset|0|
|\\((1010\leq\text{ChangeSkill}\leq 1019)\\)|\\(5\leq\text{Level}\leq 34\\)|(none)|1010|
|\\(1010\leq\text{ChangeSkill}\leq 1018\\)|\\(35\leq\text{Level}\\)|+1|1011|
|\\(1020\leq\text{ChangeSkill}\leq 1029\\)|\\(\text{Level}\leq 9\\)|reset|0|
|\\((1020\leq\text{ChangeSkill}\leq 1029)\\)|\\(10\leq\text{Level}\leq 24\\)|(none)|1020|
|\\(1020\leq\text{ChangeSkill}\leq 1028\\)|\\(25\leq\text{Level}\leq 39\\)|+1|1021|
|同上|\\(40\leq\text{Level}\\)|+2|1022|
|\\(1030\leq\text{ChangeSkill}\leq 1039\\)|\\(\text{Level}\leq 17\\)|reset|0|
|\\((1030\leq\text{ChangeSkill}\leq 1039)\\)|\\(18\leq\text{Level}\leq 37\\)|(none)|1030|
|\\(1030\leq\text{ChangeSkill}\leq 1038\\)|\\(38\leq\text{Level}\\)|+1|1031|
|\\(1040\leq\text{ChangeSkill}\leq 1049\\)|\\(\text{Level}\leq 42\\)|reset|0|
|\\((1040\leq\text{ChangeSkill}\leq 1049)\\)|\\(43\leq\text{Level}\\)|(none)|1040|
|\\(1050\leq\text{ChangeSkill}\leq 1199\\)|(none)|reset|0|
|\\(1200\leq\text{ChangeSkill}\leq 1209\\)|\\(\text{Level}\leq 2\\)|reset|0|
|\\((1200\leq\text{ChangeSkill}\leq 1209)\\)|\\(3\leq\text{Level}\leq 19\\)|(none)|1200|
|\\(1200\leq\text{ChangeSkill}\leq 1208\\)|\\(20\leq\text{Level}\leq 36\\)|+1|1201|
|同上|\\(37\leq\text{Level}\\)|+2|1202|
|\\(1210\leq\text{ChangeSkill}\leq 1219\\)|\\(\text{Level}\leq 7\\)|reset|0|
|\\((1210\leq\text{ChangeSkill}\leq 1219)\\)|\\(8\leq\text{Level}\leq 27\\)|(none)|1210|
|\\(1210\leq\text{ChangeSkill}\leq 1218\\)|\\(28\leq\text{Level}\leq 47\\)|+1|1211|
|同上|\\(48\leq\text{Level}\\)|+2|1212|
|\\(1220\leq\text{ChangeSkill}\leq 1229\\)|\\(\text{Level}\leq 12\\)|reset|0|
|\\((1220\leq\text{ChangeSkill}\leq 1229)\\)|\\(13\leq\text{Level}\leq 25\\)|(none)|1220|
|\\(1220\leq\text{ChangeSkill}\leq 1228\\)|\\(26\leq\text{Level}\leq 38\\)|+1|1221|
|同上|\\(39\leq\text{Level}\\)|+2|1222|
|\\(1230\leq\text{ChangeSkill}\leq 1239\\)|\\(\text{Level}\leq 16\\)|reset|0|
|\\((1230\leq\text{ChangeSkill}\leq 1239)\\)|\\(17\leq\text{Level}\leq 32\\)|(none)|1230|
|\\(1230\leq\text{ChangeSkill}\leq 1238\\)|\\(33\leq\text{Level}\leq 48\\)|+1|1231|
|同上|\\(49\leq\text{Level}\\)|+2|1232|
|\\(1240\leq\text{ChangeSkill}\leq 1249\\)|\\(\text{Level}\leq 22\\)|reset|0|
|\\((1240\leq\text{ChangeSkill}\leq 1249)\\)|\\(23\leq\text{Level}\leq 45\\)|(none)|1240|
|\\(1240\leq\text{ChangeSkill}\leq 1248\\)|\\(46\leq\text{Level}\\)|+1|1241|
|\\(1260\leq\text{ChangeSkill}\leq 1999\\)|(none)|reset|0|

## ChangeSkill絞り込み(忍者)

### コマンド群

<span class="tagYellow">位置</span> (-1920,12,-178)

<span class="expandButton" onClick="openCloseBE(`openHere3-begin`)">+</span>コマンド

<div class="openHere-begin openHere3-begin"></div>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players add @a[score_ChangeSkill_min=2010,score_ChangeSkill=2018,score_Level_min=23] ChangeSkill 1|
|2|/scoreboard players add @a[score_ChangeSkill_min=2010,score_ChangeSkill=2018,score_Level_min=38] ChangeSkill 1|条件付き|
|3|/scoreboard players add @a[score_ChangeSkill_min=2030,score_ChangeSkill=2038,score_Level_min=35] ChangeSkill 1|
|4|/scoreboard players add @a[score_ChangeSkill_min=2040,score_ChangeSkill=2048,score_Level_min=43] ChangeSkill 1|
|5|/scoreboard players add @a[score_ChangeSkill_min=2070,score_ChangeSkill=2078,score_Level_min=49] ChangeSkill 1|
|6|/scoreboard players add @a[score_ChangeSkill_min=2200,score_ChangeSkill=2208,score_Level_min=18] ChangeSkill 1|
|7|/scoreboard players add @a[score_ChangeSkill_min=2200,score_ChangeSkill=2208,score_Level_min=33] ChangeSkill 1|条件付き|
|8|/scoreboard players add @a[score_ChangeSkill_min=2200,score_ChangeSkill=2208,score_Level_min=48] ChangeSkill 1|条件付き|
|9|/scoreboard players add @a[score_ChangeSkill_min=2210,score_ChangeSkill=2218,score_Level_min=25] ChangeSkill 1|
|10|/scoreboard players add @a[score_ChangeSkill_min=2210,score_ChangeSkill=2218,score_Level_min=45] ChangeSkill 1|条件付き|
|11|/scoreboard players add @a[score_ChangeSkill_min=2220,score_ChangeSkill=2228,score_Level_min=26] ChangeSkill 1|
|12|/scoreboard players add @a[score_ChangeSkill_min=2220,score_ChangeSkill=2228,score_Level_min=39] ChangeSkill 1|条件付き|
|13|/scoreboard players add @a[score_ChangeSkill_min=2230,score_ChangeSkill=2238,score_Level_min=46] ChangeSkill 1|
|14|/scoreboard players reset @a[score_ChangeSkill_min=2000,score_ChangeSkill=2009,score_Level=0] ChangeSkill|
|15|/scoreboard players reset @a[score_ChangeSkill_min=2010,score_ChangeSkill=2019,score_Level=7] ChangeSkill|
|16|/scoreboard players reset @a[score_ChangeSkill_min=2020,score_ChangeSkill=2029,score_Level=9] ChangeSkill|
|17|/scoreboard players reset @a[score_ChangeSkill_min=2030,score_ChangeSkill=2039,score_Level=14] ChangeSkill|
|18|/scoreboard players reset @a[score_ChangeSkill_min=2040,score_ChangeSkill=2049,score_Level=16] ChangeSkill|
|19|/scoreboard players reset @a[score_ChangeSkill_min=2050,score_ChangeSkill=2059,score_Level=19] ChangeSkill|
|20|/scoreboard players reset @a[score_ChangeSkill_min=2060,score_ChangeSkill=2069,score_Level=29] ChangeSkill|
|21|/scoreboard players reset @a[score_ChangeSkill_min=2070,score_ChangeSkill=2079,score_Level=36] ChangeSkill|
|22|/scoreboard players reset @a[score_ChangeSkill_min=2080,score_ChangeSkill=2089,score_Level=39] ChangeSkill|
|23|/scoreboard players reset @a[score_ChangeSkill_min=2200,score_ChangeSkill=2209,score_Level=2] ChangeSkill|
|24|/scoreboard players reset @a[score_ChangeSkill_min=2210,score_ChangeSkill=2219,score_Level=4] ChangeSkill|
|25|/scoreboard players reset @a[score_ChangeSkill_min=2220,score_ChangeSkill=2229,score_Level=12] ChangeSkill|
|26|/scoreboard players reset @a[score_ChangeSkill_min=2230,score_ChangeSkill=2239,score_Level=27] ChangeSkill|
|27|/scoreboard players reset @a[score_ChangeSkill_min=2240,score_ChangeSkill=2249,score_Level=49] ChangeSkill|
|28|/scoreboard players reset @a[score_ChangeSkill_min=2090,score_ChangeSkill=2199] ChangeSkill|
|29|/scoreboard players reset @a[score_ChangeSkill_min=2250,score_ChangeSkill=2999] ChangeSkill|

<div class="datatable3c-end"></div>

<div class="openHere-end openHere3-end"></div>

### 詳細

- すべてのプレイヤーの`ChangeSkill`と`Level`の値に対して、`ChangeSkill`に特定の値を足す、もしくは`ChangeSkill`を0に設定する。詳細は[Job=2(忍者)でのChangeSkill操作](#job2忍者でのchangeskill操作)を参考。

#### Job=2(忍者)でのChangeSkill操作

下記の表の「`ChangeSkill`への操作」に整数がある場合はそれを`ChangeSkill`へ足しこみ、resetとある場合は`ChangeSkill`=0とする。

|ChangeSkillの範囲|Levelの範囲|ChangeSkillへの操作|操作後のChangeSkill|
|:-:|:-:|:-:|:-:|
|\\(2000\leq\text{ChangeSkill}\leq 2009\\)|\\(\text{Level}\leq 0\\)|reset|0|
|\\((2000\leq\text{ChangeSkill}\leq 2009)\\)|\\(1\leq\text{Level}\\)|(none)|2000|
|\\(2010\leq\text{ChangeSkill}\leq 2019\\)|\\(\text{Level}\leq 7\\)|reset|0|
|\\((2010\leq\text{ChangeSkill}\leq 2019)\\)|\\(8\leq\text{Level}\leq 22\\)|(none)|2010|
|\\(2010\leq\text{ChangeSkill}\leq 2018\\)|\\(23\leq\text{Level}\leq 37\\)|+1|2011|
|同上|\\(38\leq\text{Level}\\)|+2|2012|
|\\(2020\leq\text{ChangeSkill}\leq 2029\\)|\\(\text{Level}\leq 9\\)|reset|0|
|\\((2020\leq\text{ChangeSkill}\leq 2029)\\)|\\(10\leq\text{Level}\\)|(none)|2020|
|\\(2030\leq\text{ChangeSkill}\leq 2039\\)|\\(\text{Level}\leq 14\\)|reset|0|
|\\((2030\leq\text{ChangeSkill}\leq 2039)\\)|\\(15\leq\text{Level}\leq 34\\)|(none)|2030|
|\\(2030\leq\text{ChangeSkill}\leq 2038\\)|\\(35\leq\text{Level}\\)|+1|2031|
|\\(2040\leq\text{ChangeSkill}\leq 2049\\)|\\(\text{Level}\leq 16\\)|reset|0|
|\\((2040\leq\text{ChangeSkill}\leq 2049)\\)|\\(17\leq\text{Level}\leq 42\\)|(none)|2040|
|\\(2040\leq\text{ChangeSkill}\leq 2048\\)|\\(43\leq\text{Level}\\)|+1|2041|
|\\(2050\leq\text{ChangeSkill}\leq 2059\\)|\\(\text{Level}\leq 19\\)|reset|0|
|\\((2050\leq\text{ChangeSkill}\leq 2059)\\)|\\(20\leq\text{Level}\\)|(none)|2050|
|\\(2060\leq\text{ChangeSkill}\leq 2069\\)|\\(\text{Level}\leq 29\\)|reset|0|
|\\((2060\leq\text{ChangeSkill}\leq 2069)\\)|\\(30\leq\text{Level}\\)|(none)|2060|
|\\(2070\leq\text{ChangeSkill}\leq 2079\\)|\\(\text{Level}\leq 36\\)|reset|0|
|\\((2070\leq\text{ChangeSkill}\leq 2079)\\)|\\(37\leq\text{Level}\leq 48\\)|(none)|2070|
|\\(2070\leq\text{ChangeSkill}\leq 2078\\)|\\(49\leq\text{Level}\\)|+1|2071|
|\\(2080\leq\text{ChangeSkill}\leq 2089\\)|\\(\text{Level}\leq 39\\)|reset|0|
|\\((2080\leq\text{ChangeSkill}\leq 2089)\\)|\\(40\leq\text{Level}\\)|(none)|2080|
|\\(2090\leq\text{ChangeSkill}\leq 2199\\)|(none)|reset|0|
|\\(2200\leq\text{ChangeSkill}\leq 2209\\)|\\(\text{Level}\leq 2\\)|reset|0|
|\\((2200\leq\text{ChangeSkill}\leq 2209)\\)|\\(3\leq\text{Level}\leq 17\\)|(none)|2200|
|\\(2200\leq\text{ChangeSkill}\leq 2208\\)|\\(18\leq\text{Level}\leq 32\\)|+1|2201|
|同上|\\(33\leq\text{Level}\leq 47\\)|+2|2202|
|同上|\\(48\leq\text{Level}\\)|+3|2203|
|\\(2210\leq\text{ChangeSkill}\leq 2219\\)|\\(\text{Level}\leq 4\\)|reset|0|
|\\((2210\leq\text{ChangeSkill}\leq 2219)\\)|\\(5\leq\text{Level}\leq 24\\)|(none)|2210|
|\\(2210\leq\text{ChangeSkill}\leq 2218\\)|\\(25\leq\text{Level}\leq 38\\)|+1|2211|
|同上|\\(39\leq\text{Level}\\)|+2|2212|
|\\(2220\leq\text{ChangeSkill}\leq 2229\\)|\\(\text{Level}\leq 12\\)|reset|0|
|\\((2220\leq\text{ChangeSkill}\leq 2229)\\)|\\(13\leq\text{Level}\leq 25\\)|(none)|2220|
|\\(2220\leq\text{ChangeSkill}\leq 2228\\)|\\(26\leq\text{Level}\leq 38\\)|+1|2221|
|同上|\\(39\leq\text{Level}\\)|+2|2222|
|\\(2230\leq\text{ChangeSkill}\leq 2239\\)|\\(\text{Level}\leq 27\\)|reset|0|
|\\((2230\leq\text{ChangeSkill}\leq 2239)\\)|\\(28\leq\text{Level}\leq 45\\)|(none)|2230|
|\\(2230\leq\text{ChangeSkill}\leq 2238\\)|\\(46\leq\text{Level}\\)|+1|2231|
|\\(2240\leq\text{ChangeSkill}\leq 2249\\)|\\(\text{Level}\leq 49\\)|reset|0|
|\\((2240\leq\text{ChangeSkill}\leq 2249)\\)|\\(50\leq\text{Level}\\)|(none)|2240|
|\\(2250\leq\text{ChangeSkill}\leq 2999\\)|(none)|reset|0|

## ChangeSkill絞り込み(狩人)

### コマンド群

<span class="tagYellow">位置</span> (-1920,13,-178)

<span class="expandButton" onClick="openCloseBE(`openHere4-begin`)">+</span>コマンド

<div class="openHere-begin openHere4-begin"></div>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players add @a[score_ChangeSkill_min=3000,score_ChangeSkill=3008,score_Level_min=23] ChangeSkill 1|
|2|/scoreboard players add @a[score_ChangeSkill_min=3000,score_ChangeSkill=3008,score_Level_min=43] ChangeSkill 1|条件付き|
|3|/scoreboard players add @a[score_ChangeSkill_min=3020,score_ChangeSkill=3028,score_Level_min=33] ChangeSkill 1|
|4|/scoreboard players add @a[score_ChangeSkill_min=3040,score_ChangeSkill=3048,score_Level_min=37] ChangeSkill 1|
|5|/scoreboard players add @a[score_ChangeSkill_min=3050,score_ChangeSkill=3058,score_Level_min=38] ChangeSkill 1|
|6|/scoreboard players add @a[score_ChangeSkill_min=3200,score_ChangeSkill=3208,score_Level_min=20] ChangeSkill 1|
|7|/scoreboard players add @a[score_ChangeSkill_min=3200,score_ChangeSkill=3208,score_Level_min=40] ChangeSkill 1|条件付き|
|8|/scoreboard players add @a[score_ChangeSkill_min=3210,score_ChangeSkill=3218,score_Level_min=28] ChangeSkill 1|
|9|/scoreboard players add @a[score_ChangeSkill_min=3210,score_ChangeSkill=3218,score_Level_min=48] ChangeSkill 1|条件付き|
|10|/scoreboard players add @a[score_ChangeSkill_min=3220,score_ChangeSkill=3228,score_Level_min=30] ChangeSkill 1|
|11|/scoreboard players add @a[score_ChangeSkill_min=3230,score_ChangeSkill=3238,score_Level_min=45] ChangeSkill 1|
|12|/scoreboard players add @a[score_ChangeSkill_min=3250,score_ChangeSkill=3258,score_Level_min=49] ChangeSkill 1|
|13|/scoreboard players reset @a[score_ChangeSkill_min=3000,score_ChangeSkill=3009,score_Level=2] ChangeSkill|
|14|/scoreboard players reset @a[score_ChangeSkill_min=3010,score_ChangeSkill=3019,score_Level=4] ChangeSkill|
|15|/scoreboard players reset @a[score_ChangeSkill_min=3020,score_ChangeSkill=3029,score_Level=12] ChangeSkill|
|16|/scoreboard players reset @a[score_ChangeSkill_min=3030,score_ChangeSkill=3039,score_Level=14] ChangeSkill|
|17|/scoreboard players reset @a[score_ChangeSkill_min=3040,score_ChangeSkill=3049,score_Level=16] ChangeSkill|
|18|/scoreboard players reset @a[score_ChangeSkill_min=3050,score_ChangeSkill=3059,score_Level=17] ChangeSkill|
|19|/scoreboard players reset @a[score_ChangeSkill_min=3060,score_ChangeSkill=3069,score_Level=34] ChangeSkill|
|20|/scoreboard players reset @a[score_ChangeSkill_min=3070,score_ChangeSkill=3079,score_Level=45] ChangeSkill|
|21|/scoreboard players reset @a[score_ChangeSkill_min=3200,score_ChangeSkill=3209,score_Level=0] ChangeSkill|
|22|/scoreboard players reset @a[score_ChangeSkill_min=3210,score_ChangeSkill=3219,score_Level=7] ChangeSkill|
|23|/scoreboard players reset @a[score_ChangeSkill_min=3220,score_ChangeSkill=3229,score_Level=9] ChangeSkill|
|24|/scoreboard players reset @a[score_ChangeSkill_min=3230,score_ChangeSkill=3239,score_Level=24] ChangeSkill|
|25|/scoreboard players reset @a[score_ChangeSkill_min=3240,score_ChangeSkill=3249,score_Level=25] ChangeSkill|
|26|/scoreboard players reset @a[score_ChangeSkill_min=3250,score_ChangeSkill=3259,score_Level=38] ChangeSkill|
|27|/scoreboard players reset @a[score_ChangeSkill_min=3260,score_ChangeSkill=3269,score_Level=49] ChangeSkill|
|28|/scoreboard players reset @a[score_ChangeSkill_min=3080,score_ChangeSkill=3199] ChangeSkill|
|29|/scoreboard players reset @a[score_ChangeSkill_min=3270,score_ChangeSkill=3999] ChangeSkill|

<div class="datatable3c-end"></div>

<div class="openHere-end openHere4-end"></div>

### 詳細

- すべてのプレイヤーの`ChangeSkill`と`Level`の値に対して、`ChangeSkill`に特定の値を足す、もしくは`ChangeSkill`を0に設定する。詳細は[Job=3(狩人)でのChangeSkill操作](#job3狩人でのchangeskill操作)を参考。

#### Job=3(狩人)でのChangeSkill操作

下記の表の「`ChangeSkill`への操作」に整数がある場合はそれを`ChangeSkill`へ足しこみ、resetとある場合は`ChangeSkill`=0とする。

|ChangeSkillの範囲|Levelの範囲|ChangeSkillへの操作|操作後のChangeSkill|
|:-:|:-:|:-:|:-:|
|\\(3000\leq\text{ChangeSkill}\leq 3009\\)|\\(\text{Level}\leq 2\\)|reset|0|
|\\((3000\leq\text{ChangeSkill}\leq 3009)\\)|\\(3\leq\text{Level}\leq 22\\)|(none)|3000|
|\\(3000\leq\text{ChangeSkill}\leq 3008\\)|\\(23\leq\text{Level}\leq 42\\)|+1|3001|
|\\(3000\leq\text{ChangeSkill}\leq 3008\\)|\\(43\leq\text{Level}\\)|+2|3002|
|\\(3010\leq\text{ChangeSkill}\leq 3019\\)|\\(\text{Level}\leq 4\\)|reset|0|
|\\((3010\leq\text{ChangeSkill}\leq 3019)\\)|\\(5\leq\text{Level}\\)|(none)|3010|
|\\(3020\leq\text{ChangeSkill}\leq 3029\\)|\\(\text{Level}\leq 12\\)|reset|0|
|\\((3020\leq\text{ChangeSkill}\leq 3029)\\)|\\(13\leq\text{Level}\leq 32\\)|(none)|3020|
|\\(3020\leq\text{ChangeSkill}\leq 3028\\)|\\(33\leq\text{Level}\\)|+1|3021|
|\\(3030\leq\text{ChangeSkill}\leq 3039\\)|\\(\text{Level}\leq 14\\)|reset|0|
|\\((3030\leq\text{ChangeSkill}\leq 3039)\\)|\\(15\leq\text{Level}\\)|(none)|3030|
|\\(3040\leq\text{ChangeSkill}\leq 3049\\)|\\(\text{Level}\leq 16\\)|reset|0|
|\\((3040\leq\text{ChangeSkill}\leq 3049)\\)|\\(17\leq\text{Level}\leq 36\\)|(none)|3040|
|\\(3040\leq\text{ChangeSkill}\leq 3048\\)|\\(37\leq\text{Level}\\)|+1|3041|
|\\(3050\leq\text{ChangeSkill}\leq 3059\\)|\\(\text{Level}\leq 17\\)|reset|0|
|\\((3050\leq\text{ChangeSkill}\leq 3059)\\)|\\(18\leq\text{Level}\leq 37\\)|(none)|3050|
|\\(3050\leq\text{ChangeSkill}\leq 3058\\)|\\(38\leq\text{Level}\\)|+1|3051|
|\\(3060\leq\text{ChangeSkill}\leq 3069\\)|\\(\text{Level}\leq 34\\)|reset|0|
|\\((3060\leq\text{ChangeSkill}\leq 3069)\\)|\\(35\leq\text{Level}\\)|(none)|3060|
|\\(3070\leq\text{ChangeSkill}\leq 3079\\)|\\(\text{Level}\leq 45\\)|reset|0|
|\\((3070\leq\text{ChangeSkill}\leq 3079)\\)|\\(46\leq\text{Level}\\)|(none)|3070|
|\\(3080\leq\text{ChangeSkill}\leq 3199\\)|(none)|reset|0|
|\\(3200\leq\text{ChangeSkill}\leq 3209\\)|\\(\text{Level}\leq 0\\)|reset|0|
|\\((3200\leq\text{ChangeSkill}\leq 3209)\\)|\\(1\leq\text{Level}\leq 19\\)|(none)|3200|
|\\(3200\leq\text{ChangeSkill}\leq 3208\\)|\\(20\leq\text{Level}\leq 39\\)|+1|3201|
|同上|\\(40\leq\text{Level}\\)|+2|3202|
|\\(3210\leq\text{ChangeSkill}\leq 3219\\)|\\(\text{Level}\leq 7\\)|reset|0|
|\\((3210\leq\text{ChangeSkill}\leq 3219)\\)|\\(8\leq\text{Level}\leq 27\\)|(none)|3210|
|\\(3210\leq\text{ChangeSkill}\leq 3218\\)|\\(28\leq\text{Level}\leq 47\\)|+1|3211|
|同上|\\(48\leq\text{Level}\\)|+2|3212|
|\\(3220\leq\text{ChangeSkill}\leq 3229\\)|\\(\text{Level}\leq 9\\)|reset|0|
|\\((3220\leq\text{ChangeSkill}\leq 3229)\\)|\\(10\leq\text{Level}\leq 29\\)|(none)|3220|
|\\(3220\leq\text{ChangeSkill}\leq 3228\\)|\\(30\leq\text{Level}\\)|+1|3221|
|\\(3230\leq\text{ChangeSkill}\leq 3239\\)|\\(\text{Level}\leq 24\\)|reset|0|
|\\((3230\leq\text{ChangeSkill}\leq 3239)\\)|\\(25\leq\text{Level}\leq 44\\)|(none)|3230|
|\\(3230\leq\text{ChangeSkill}\leq 3238\\)|\\(45\leq\text{Level}\\)|+1|3231|
|\\(3240\leq\text{ChangeSkill}\leq 3249\\)|\\(\text{Level}\leq 25\\)|reset|0|
|\\((3240\leq\text{ChangeSkill}\leq 3249)\\)|\\(26\leq\text{Level}\\)|(none)|3240|
|\\(3250\leq\text{ChangeSkill}\leq 3259\\)|\\(\text{Level}\leq 38\\)|reset|0|
|\\((3250\leq\text{ChangeSkill}\leq 3259)\\)|\\(39\leq\text{Level}\leq 47\\)|(none)|3250|
|\\(3250\leq\text{ChangeSkill}\leq 3258\\)|\\(48\leq\text{Level}\\)|+1|3251|
|\\(3260\leq\text{ChangeSkill}\leq 3269\\)|\\(\text{Level}\leq 49\\)|reset|0|
|\\((3260\leq\text{ChangeSkill}\leq 3269)\\)|\\(50\leq\text{Level}\\)|(none)|3260|
|\\(3270\leq\text{ChangeSkill}\leq 3999\\)|(none)|reset|0|

## ChangeSkill絞り込み(白魔導士)

### コマンド群

<span class="tagYellow">位置</span> (-1920,14,-178)

<span class="expandButton" onClick="openCloseBE(`openHere5-begin`)">+</span>コマンド

<div class="openHere-begin openHere5-begin"></div>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players add @a[score_ChangeSkill_min=4010,score_ChangeSkill=4018,score_Level_min=18] ChangeSkill 1|
|2|/scoreboard players add @a[score_ChangeSkill_min=4010,score_ChangeSkill=4018,score_Level_min=28] ChangeSkill 1|条件付き|
|3|/scoreboard players add @a[score_ChangeSkill_min=4010,score_ChangeSkill=4018,score_Level_min=38] ChangeSkill 1|条件付き|
|4|/scoreboard players add @a[score_ChangeSkill_min=4010,score_ChangeSkill=4018,score_Level_min=48] ChangeSkill 1|条件付き|
|5|/scoreboard players add @a[score_ChangeSkill_min=4020,score_ChangeSkill=4028,score_Level_min=37] ChangeSkill 1|
|6|/scoreboard players add @a[score_ChangeSkill_min=4020,score_ChangeSkill=4028,score_Level_min=46] ChangeSkill 1|条件付き|
|7|/scoreboard players add @a[score_ChangeSkill_min=4030,score_ChangeSkill=4038,score_Level_min=35] ChangeSkill 1|
|8|/scoreboard players add @a[score_ChangeSkill_min=4200,score_ChangeSkill=4208,score_Level_min=10] ChangeSkill 1|
|9|/scoreboard players add @a[score_ChangeSkill_min=4200,score_ChangeSkill=4208,score_Level_min=25] ChangeSkill 1|条件付き|
|10|/scoreboard players add @a[score_ChangeSkill_min=4200,score_ChangeSkill=4208,score_Level_min=40] ChangeSkill 1|条件付き|
|11|/scoreboard players add @a[score_ChangeSkill_min=4200,score_ChangeSkill=4208,score_Level_min=49] ChangeSkill 1|条件付き|
|12|/scoreboard players add @a[score_ChangeSkill_min=4210,score_ChangeSkill=4218,score_Level_min=13] ChangeSkill 1|
|13|/scoreboard players add @a[score_ChangeSkill_min=4210,score_ChangeSkill=4218,score_Level_min=23] ChangeSkill 1|条件付き|
|14|/scoreboard players add @a[score_ChangeSkill_min=4210,score_ChangeSkill=4218,score_Level_min=33] ChangeSkill 1|条件付き|
|15|/scoreboard players add @a[score_ChangeSkill_min=4210,score_ChangeSkill=4218,score_Level_min=43] ChangeSkill 1|条件付き|
|16|/scoreboard players add @a[score_ChangeSkill_min=4220,score_ChangeSkill=4228,score_Level_min=30] ChangeSkill 1|
|17|/scoreboard players add @a[score_ChangeSkill_min=4220,score_ChangeSkill=4228,score_Level_min=45] ChangeSkill 1|条件付き|
|18|/scoreboard players reset @a[score_ChangeSkill_min=4000,score_ChangeSkill=4009,score_Level=4] ChangeSkill|
|19|/scoreboard players reset @a[score_ChangeSkill_min=4010,score_ChangeSkill=4019,score_Level=7] ChangeSkill|
|20|/scoreboard players reset @a[score_ChangeSkill_min=4020,score_ChangeSkill=4029,score_Level=16] ChangeSkill|
|21|/scoreboard players reset @a[score_ChangeSkill_min=4030,score_ChangeSkill=4039,score_Level=19] ChangeSkill|
|22|/scoreboard players reset @a[score_ChangeSkill_min=4040,score_ChangeSkill=4049,score_Level=25] ChangeSkill|
|23|/scoreboard players reset @a[score_ChangeSkill_min=4050,score_ChangeSkill=4059,score_Level=38] ChangeSkill|
|24|/scoreboard players reset @a[score_ChangeSkill_min=4200,score_ChangeSkill=4209,score_Level=0] ChangeSkill|
|25|/scoreboard players reset @a[score_ChangeSkill_min=4210,score_ChangeSkill=4219,score_Level=2] ChangeSkill|
|26|/scoreboard players reset @a[score_ChangeSkill_min=4220,score_ChangeSkill=4229,score_Level=14] ChangeSkill|
|27|/scoreboard players reset @a[score_ChangeSkill_min=4230,score_ChangeSkill=4239,score_Level=49] ChangeSkill|
|28|/scoreboard players reset @a[score_ChangeSkill_min=4060,score_ChangeSkill=4199] ChangeSkill|
|29|/scoreboard players reset @a[score_ChangeSkill_min=4240,score_ChangeSkill=4999] ChangeSkill|

<div class="datatable3c-end"></div>

<div class="openHere-end openHere5-end"></div>

### 詳細

- すべてのプレイヤーの`ChangeSkill`と`Level`の値に対して、`ChangeSkill`に特定の値を足す、もしくは`ChangeSkill`を0に設定する。詳細は[Job=4(白魔導士)でのChangeSkill操作](#job4白魔導士でのchangeskill操作)を参考。

#### Job=4(白魔導士)でのChangeSkill操作

下記の表の「`ChangeSkill`への操作」に整数がある場合はそれを`ChangeSkill`へ足しこみ、resetとある場合は`ChangeSkill`=0とする。

|ChangeSkillの範囲|Levelの範囲|ChangeSkillへの操作|操作後のChangeSkill|
|:-:|:-:|:-:|:-:|
|\\(4000\leq\text{ChangeSkill}\leq 4009\\)|\\(\text{Level}\leq 4\\)|reset|0|
|\\((4000\leq\text{ChangeSkill}\leq 4009)\\)|\\(5\leq\text{Level}\\)|(none)|4000|
|\\(4010\leq\text{ChangeSkill}\leq 4019\\)|\\(\text{Level}\leq 7\\)|reset|0|
|\\((4010\leq\text{ChangeSkill}\leq 4019)\\)|\\(8\leq\text{Level}\leq 17\\)|(none)|4010|
|\\(4010\leq\text{ChangeSkill}\leq 4018\\)|\\(18\leq\text{Level}\leq 27\\)|+1|4011|
|同上|\\(28\leq\text{Level}\leq 37\\)|+2|4012|
|同上|\\(38\leq\text{Level}\leq 47\\)|+3|4013|
|同上|\\(48\leq\text{Level}\\)|+4|4014|
|\\(4020\leq\text{ChangeSkill}\leq 4029\\)|\\(\text{Level}\leq 16\\)|reset|0|
|\\((4020\leq\text{ChangeSkill}\leq 4029)\\)|\\(17\leq\text{Level}\leq 36\\)|(none)|4020|
|\\(4020\leq\text{ChangeSkill}\leq 4028\\)|\\(37\leq\text{Level}\leq 45\\)|+1|4021|
|同上|\\(46\leq\text{Level}\\)|+2|4022|
|\\(4030\leq\text{ChangeSkill}\leq 4039\\)|\\(\text{Level}\leq 19\\)|reset|0|
|\\((4030\leq\text{ChangeSkill}\leq 4039)\\)|\\(20\leq\text{Level}\leq 34\\)|(none)|4030|
|\\(4030\leq\text{ChangeSkill}\leq 4038\\)|\\(35\leq\text{Level}\\)|+1|4021|
|\\(4040\leq\text{ChangeSkill}\leq 4049\\)|\\(\text{Level}\leq 25\\)|reset|0|
|\\((4040\leq\text{ChangeSkill}\leq 4049)\\)|\\(26\leq\text{Level}\\)|(none)|4040|
|\\(4050\leq\text{ChangeSkill}\leq 4059\\)|\\(\text{Level}\leq 38\\)|reset|0|
|\\((4050\leq\text{ChangeSkill}\leq 4059)\\)|\\(39\leq\text{Level}\\)|(none)|4050|
|\\(4060\leq\text{ChangeSkill}\leq 4199\\)|(none)|reset|0|
|\\(4200\leq\text{ChangeSkill}\leq 4209\\)|\\(\text{Level}\leq 0\\)|reset|0|
|\\((4200\leq\text{ChangeSkill}\leq 4209)\\)|\\(1\leq\text{Level}\leq 9\\)|(none)|4200|
|\\(4200\leq\text{ChangeSkill}\leq 4208\\)|\\(10\leq\text{Level}\leq 24\\)|+1|4201|
|同上|\\(25\leq\text{Level}\leq 39\\)|+2|4202|
|同上|\\(40\leq\text{Level}\leq 48\\)|+3|4203|
|同上|\\(49\leq\text{Level}\\)|+4|4204|
|\\(4210\leq\text{ChangeSkill}\leq 4219\\)|\\(\text{Level}\leq 2\\)|reset|0|
|\\((4210\leq\text{ChangeSkill}\leq 4219)\\)|\\(3\leq\text{Level}\leq 12\\)|(none)|4210|
|\\(4210\leq\text{ChangeSkill}\leq 4218\\)|\\(13\leq\text{Level}\leq 22\\)|+1|4211|
|同上|\\(23\leq\text{Level}\leq 32\\)|+2|4212|
|同上|\\(33\leq\text{Level}\leq 42\\)|+3|4213|
|同上|\\(43\leq\text{Level}\\)|+4|4214|
|\\(4220\leq\text{ChangeSkill}\leq 4229\\)|\\(\text{Level}\leq 14\\)|reset|0|
|\\((4220\leq\text{ChangeSkill}\leq 4229)\\)|\\(15\leq\text{Level}\leq 29\\)|(none)|4220|
|\\(4220\leq\text{ChangeSkill}\leq 4228\\)|\\(30\leq\text{Level}\leq 44\\)|+1|4221|
|同上|\\(45\leq\text{Level}\\)|+2|4222|
|\\(4230\leq\text{ChangeSkill}\leq 4239\\)|\\(\text{Level}\leq 49\\)|reset|0|
|\\((4230\leq\text{ChangeSkill}\leq 4239)\\)|\\(50\leq\text{Level}\\)|(none)|4230|
|\\(4240\leq\text{ChangeSkill}\leq 4999\\)|(none)|reset|0|

## ChangeSkill絞り込み(黒魔導士)

### コマンド群

<span class="tagYellow">位置</span> (-1920,15,-178)

<span class="expandButton" onClick="openCloseBE(`openHere6-begin`)">+</span>コマンド

<div class="openHere-begin openHere6-begin"></div>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players add @a[score_ChangeSkill_min=5040,score_ChangeSkill=5048,score_Level_min=43] ChangeSkill 1|
|2|/scoreboard players add @a[score_ChangeSkill_min=5050,score_ChangeSkill=5058,score_Level_min=39] ChangeSkill 1|
|3|/scoreboard players add @a[score_ChangeSkill_min=5200,score_ChangeSkill=5208,score_Level_min=20] ChangeSkill 1|
|4|/scoreboard players add @a[score_ChangeSkill_min=5200,score_ChangeSkill=5208,score_Level_min=45] ChangeSkill 1|条件付き|
|5|/scoreboard players add @a[score_ChangeSkill_min=5210,score_ChangeSkill=5218,score_Level_min=25] ChangeSkill 1|
|6|/scoreboard players add @a[score_ChangeSkill_min=5210,score_ChangeSkill=5218,score_Level_min=46] ChangeSkill 1|条件付き|
|7|/scoreboard players add @a[score_ChangeSkill_min=5220,score_ChangeSkill=5228,score_Level_min=30] ChangeSkill 1|
|8|/scoreboard players add @a[score_ChangeSkill_min=5220,score_ChangeSkill=5228,score_Level_min=48] ChangeSkill 1|条件付き|
|9|/scoreboard players add @a[score_ChangeSkill_min=5230,score_ChangeSkill=5238,score_Level_min=35] ChangeSkill 1|
|10|/scoreboard players add @a[score_ChangeSkill_min=5230,score_ChangeSkill=5238,score_Level_min=49] ChangeSkill 1|条件付き|
|11|/scoreboard players add @a[score_ChangeSkill_min=5240,score_ChangeSkill=5248,score_Level_min=37] ChangeSkill 1|
|12|/scoreboard players reset @a[score_ChangeSkill_min=5000,score_ChangeSkill=5009,score_Level=2] ChangeSkill|
|13|/scoreboard players reset @a[score_ChangeSkill_min=5010,score_ChangeSkill=5019,score_Level=7] ChangeSkill|
|14|/scoreboard players reset @a[score_ChangeSkill_min=5020,score_ChangeSkill=5029,score_Level=12] ChangeSkill|
|15|/scoreboard players reset @a[score_ChangeSkill_min=5030,score_ChangeSkill=5039,score_Level=17] ChangeSkill|
|16|/scoreboard players reset @a[score_ChangeSkill_min=5040,score_ChangeSkill=5049,score_Level=22] ChangeSkill|
|17|/scoreboard players reset @a[score_ChangeSkill_min=5050,score_ChangeSkill=5059,score_Level=25] ChangeSkill|
|18|/scoreboard players reset @a[score_ChangeSkill_min=5060,score_ChangeSkill=5069,score_Level=27] ChangeSkill|
|19|/scoreboard players reset @a[score_ChangeSkill_min=5070,score_ChangeSkill=5079,score_Level=32] ChangeSkill|
|20|/scoreboard players reset @a[score_ChangeSkill_min=5080,score_ChangeSkill=5089,score_Level=37] ChangeSkill|
|21|/scoreboard players reset @a[score_ChangeSkill_min=5090,score_ChangeSkill=5099,score_Level=39] ChangeSkill|
|22|/scoreboard players reset @a[score_ChangeSkill_min=5200,score_ChangeSkill=5209,score_Level=0] ChangeSkill|
|23|/scoreboard players reset @a[score_ChangeSkill_min=5210,score_ChangeSkill=5219,score_Level=4] ChangeSkill|
|24|/scoreboard players reset @a[score_ChangeSkill_min=5220,score_ChangeSkill=5229,score_Level=9] ChangeSkill|
|25|/scoreboard players reset @a[score_ChangeSkill_min=5230,score_ChangeSkill=5239,score_Level=14] ChangeSkill|
|26|/scoreboard players reset @a[score_ChangeSkill_min=5240,score_ChangeSkill=5249,score_Level=16] ChangeSkill|
|27|/scoreboard players reset @a[score_ChangeSkill_min=5250,score_ChangeSkill=5259,score_Level=49] ChangeSkill|
|28|/scoreboard players reset @a[score_ChangeSkill_min=5100,score_ChangeSkill=5199] ChangeSkill|
|29|/scoreboard players reset @a[score_ChangeSkill_min=5260,score_ChangeSkill=5999] ChangeSkill|

<div class="datatable3c-end"></div>

<div class="openHere-end openHere6-end"></div>

### 詳細

- すべてのプレイヤーの`ChangeSkill`と`Level`の値に対して、`ChangeSkill`に特定の値を足す、もしくは`ChangeSkill`を0に設定する。詳細は[Job=5(黒魔導士)でのChangeSkill操作](#job5黒魔導士でのchangeskill操作)を参考。

#### Job=5(黒魔導士)でのChangeSkill操作

下記の表の「`ChangeSkill`への操作」に整数がある場合はそれを`ChangeSkill`へ足しこみ、resetとある場合は`ChangeSkill`=0とする。

|ChangeSkillの範囲|Levelの範囲|ChangeSkillへの操作|操作後のChangeSkill|
|:-:|:-:|:-:|:-:|
|\\(5000\leq\text{ChangeSkill}\leq 5009\\)|\\(\text{Level}\leq 2\\)|reset|0|
|\\((5000\leq\text{ChangeSkill}\leq 5009)\\)|\\(3\leq\text{Level}\\)|(none)|5000|
|\\(5010\leq\text{ChangeSkill}\leq 5019\\)|\\(\text{Level}\leq 7\\)|reset|0|
|\\((5010\leq\text{ChangeSkill}\leq 5019)\\)|\\(8\leq\text{Level}\\)|(none)|5010|
|\\(5020\leq\text{ChangeSkill}\leq 5029\\)|\\(\text{Level}\leq 12\\)|reset|0|
|\\((5020\leq\text{ChangeSkill}\leq 5029)\\)|\\(13\leq\text{Level}\leq 36\\)|(none)|5020|
|\\(5030\leq\text{ChangeSkill}\leq 5039\\)|\\(\text{Level}\leq 17\\)|reset|0|
|\\((5030\leq\text{ChangeSkill}\leq 5039)\\)|\\(18\leq\text{Level}\\)|(none)|5030|
|\\(5040\leq\text{ChangeSkill}\leq 5049\\)|\\(\text{Level}\leq 22\\)|reset|0|
|\\((5040\leq\text{ChangeSkill}\leq 5049)\\)|\\(23\leq\text{Level}\leq 42\\)|(none)|5040|
|\\(5040\leq\text{ChangeSkill}\leq 5048\\)|\\(43\leq\text{Level}\\)|+1|5041|
|\\(5050\leq\text{ChangeSkill}\leq 5059\\)|\\(\text{Level}\leq 25\\)|reset|0|
|\\((5050\leq\text{ChangeSkill}\leq 5059)\\)|\\(26\leq\text{Level}\leq 38\\)|(none)|5050|
|\\(5050\leq\text{ChangeSkill}\leq 5058\\)|\\(39\leq\text{Level}\\)|+1|5051|
|\\(5060\leq\text{ChangeSkill}\leq 5069\\)|\\(\text{Level}\leq 27\\)|reset|0|
|\\((5060\leq\text{ChangeSkill}\leq 5069)\\)|\\(28\leq\text{Level}\\)|(none)|5060|
|\\(5070\leq\text{ChangeSkill}\leq 5079\\)|\\(\text{Level}\leq 32\\)|reset|0|
|\\((5070\leq\text{ChangeSkill}\leq 5079)\\)|\\(33\leq\text{Level}\\)|(none)|5070|
|\\(5080\leq\text{ChangeSkill}\leq 5089\\)|\\(\text{Level}\leq 37\\)|reset|0|
|\\((5080\leq\text{ChangeSkill}\leq 5089)\\)|\\(38\leq\text{Level}\\)|(none)|5080|
|\\(5090\leq\text{ChangeSkill}\leq 5099\\)|\\(\text{Level}\leq 39\\)|reset|0|
|\\((5090\leq\text{ChangeSkill}\leq 5099)\\)|\\(40\leq\text{Level}\\)|(none)|5090|
|\\(5100\leq\text{ChangeSkill}\leq 5199\\)|(none)|reset|0|
|\\(5200\leq\text{ChangeSkill}\leq 5209\\)|\\(\text{Level}\leq 0\\)|reset|0|
|\\((5200\leq\text{ChangeSkill}\leq 5209)\\)|\\(1\leq\text{Level}\leq 19\\)|(none)|5200|
|\\(5200\leq\text{ChangeSkill}\leq 5208\\)|\\(20\leq\text{Level}\leq 44\\)|+1|5201|
|同上|\\(45\leq\text{Level}\\)|+2|5202|
|\\(5210\leq\text{ChangeSkill}\leq 5219\\)|\\(\text{Level}\leq 4\\)|reset|0|
|\\((5210\leq\text{ChangeSkill}\leq 5219)\\)|\\(5\leq\text{Level}\leq 24\\)|(none)|5210|
|\\(5210\leq\text{ChangeSkill}\leq 5218\\)|\\(25\leq\text{Level}\leq 45\\)|+1|5211|
|同上|\\(46\leq\text{Level}\\)|+2|5212|
|\\(5220\leq\text{ChangeSkill}\leq 5229\\)|\\(\text{Level}\leq 9\\)|reset|0|
|\\((5220\leq\text{ChangeSkill}\leq 5229)\\)|\\(10\leq\text{Level}\leq 29\\)|(none)|5220|
|\\(5220\leq\text{ChangeSkill}\leq 5228\\)|\\(30\leq\text{Level}\leq 47\\)|+1|5221|
|同上|\\(48\leq\text{Level}\\)|+2|5222|
|\\(5230\leq\text{ChangeSkill}\leq 5239\\)|\\(\text{Level}\leq 14\\)|reset|0|
|\\((5230\leq\text{ChangeSkill}\leq 5239)\\)|\\(15\leq\text{Level}\leq 34\\)|(none)|5230|
|\\(5230\leq\text{ChangeSkill}\leq 5238\\)|\\(35\leq\text{Level}\leq 48\\)|+1|5231|
|同上|\\(49\leq\text{Level}\\)|+2|5232|
|\\(5240\leq\text{ChangeSkill}\leq 5249\\)|\\(\text{Level}\leq 16\\)|reset|0|
|\\((5240\leq\text{ChangeSkill}\leq 5249)\\)|\\(17\leq\text{Level}\leq 36\\)|(none)|5240|
|\\(5240\leq\text{ChangeSkill}\leq 5248\\)|\\(37\leq\text{Level}\\)|+1|5241|
|\\(5250\leq\text{ChangeSkill}\leq 5259\\)|\\(\text{Level}\leq 49\\)|reset|0|
|\\((5250\leq\text{ChangeSkill}\leq 5259)\\)|\\(50\leq\text{Level}\\)|(none)|5250|
|\\(5260\leq\text{ChangeSkill}\leq 5999\\)|(none)|reset|0|

## ChangeSkill絞り込み(召喚士)

### コマンド群

<span class="tagYellow">位置</span> (-1920,16,-178)

<span class="expandButton" onClick="openCloseBE(`openHere7-begin`)">+</span>コマンド

<div class="openHere-begin openHere7-begin"></div>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players add @a[score_ChangeSkill_min=6020,score_ChangeSkill=6028,score_Level_min=33] ChangeSkill 1|
|2|/scoreboard players add @a[score_ChangeSkill_min=6200,score_ChangeSkill=6208,score_Level_min=20] ChangeSkill 1|
|3|/scoreboard players add @a[score_ChangeSkill_min=6200,score_ChangeSkill=6208,score_Level_min=40] ChangeSkill 1|条件付き|
|4|/scoreboard players add @a[score_ChangeSkill_min=6220,score_ChangeSkill=6228,score_Level_min=28] ChangeSkill 1|
|5|/scoreboard players add @a[score_ChangeSkill_min=6220,score_ChangeSkill=6228,score_Level_min=48] ChangeSkill 1|条件付き|
|6|/scoreboard players add @a[score_ChangeSkill_min=6230,score_ChangeSkill=6238,score_Level_min=35] ChangeSkill 1|
|7|/scoreboard players add @a[score_ChangeSkill_min=6240,score_ChangeSkill=6248,score_Level_min=38] ChangeSkill 1|
|8|/scoreboard players reset @a[score_ChangeSkill_min=6000,score_ChangeSkill=6009,score_Level=4] ChangeSkill|
|9|/scoreboard players reset @a[score_ChangeSkill_min=6010,score_ChangeSkill=6019,score_Level=9] ChangeSkill|
|10|/scoreboard players reset @a[score_ChangeSkill_min=6020,score_ChangeSkill=6029,score_Level=12] ChangeSkill|
|11|/scoreboard players reset @a[score_ChangeSkill_min=6030,score_ChangeSkill=6039,score_Level=16] ChangeSkill|
|12|/scoreboard players reset @a[score_ChangeSkill_min=6040,score_ChangeSkill=6049,score_Level=24] ChangeSkill|
|13|/scoreboard players reset @a[score_ChangeSkill_min=6050,score_ChangeSkill=6059,score_Level=29] ChangeSkill|
|14|/scoreboard players reset @a[score_ChangeSkill_min=6060,score_ChangeSkill=6069,score_Level=44] ChangeSkill|
|15|/scoreboard players reset @a[score_ChangeSkill_min=6070,score_ChangeSkill=6079,score_Level=45] ChangeSkill|
|16|/scoreboard players reset @a[score_ChangeSkill_min=6080,score_ChangeSkill=6089,score_Level=48] ChangeSkill|
|17|/scoreboard players reset @a[score_ChangeSkill_min=6200,score_ChangeSkill=6209,score_Level=0] ChangeSkill|
|18|/scoreboard players reset @a[score_ChangeSkill_min=6210,score_ChangeSkill=6219,score_Level=2] ChangeSkill|
|19|/scoreboard players reset @a[score_ChangeSkill_min=6220,score_ChangeSkill=6229,score_Level=7] ChangeSkill|
|20|/scoreboard players reset @a[score_ChangeSkill_min=6230,score_ChangeSkill=6239,score_Level=14] ChangeSkill|
|21|/scoreboard players reset @a[score_ChangeSkill_min=6240,score_ChangeSkill=6249,score_Level=17] ChangeSkill|
|22|/scoreboard players reset @a[score_ChangeSkill_min=6250,score_ChangeSkill=6259,score_Level=22] ChangeSkill|
|23|/scoreboard players reset @a[score_ChangeSkill_min=6260,score_ChangeSkill=6269,score_Level=25] ChangeSkill|
|24|/scoreboard players reset @a[score_ChangeSkill_min=6270,score_ChangeSkill=6279,score_Level=36] ChangeSkill|
|25|/scoreboard players reset @a[score_ChangeSkill_min=6280,score_ChangeSkill=6289,score_Level=38] ChangeSkill|
|26|/scoreboard players reset @a[score_ChangeSkill_min=6290,score_ChangeSkill=6299,score_Level=42] ChangeSkill|
|27|/scoreboard players reset @a[score_ChangeSkill_min=6300,score_ChangeSkill=6309,score_Level=49] ChangeSkill|
|28|/scoreboard players reset @a[score_ChangeSkill_min=6090,score_ChangeSkill=6199] ChangeSkill|
|29|/scoreboard players reset @a[score_ChangeSkill_min=6310,score_ChangeSkill=6999] ChangeSkill|

<div class="datatable3c-end"></div>

<div class="openHere-end openHere7-end"></div>

### 詳細

- すべてのプレイヤーの`ChangeSkill`と`Level`の値に対して、`ChangeSkill`に特定の値を足す、もしくは`ChangeSkill`を0に設定する。詳細は[Job=6(召喚士)でのChangeSkill操作](#job6召喚士でのchangeskill操作)を参考。

#### Job=6(召喚士)でのChangeSkill操作

下記の表の「`ChangeSkill`への操作」に整数がある場合はそれを`ChangeSkill`へ足しこみ、resetとある場合は`ChangeSkill`=0とする。

|ChangeSkillの範囲|Levelの範囲|ChangeSkillへの操作|操作後のChangeSkill|
|:-:|:-:|:-:|:-:|
|\\(6000\leq\text{ChangeSkill}\leq 6009\\)|\\(\text{Level}\leq 4\\)|reset|0|
|\\((6000\leq\text{ChangeSkill}\leq 6009)\\)|\\(5\leq\text{Level}\\)|(none)|6000|
|\\(6010\leq\text{ChangeSkill}\leq 6019\\)|\\(\text{Level}\leq 9\\)|reset|0|
|\\((6010\leq\text{ChangeSkill}\leq 6019)\\)|\\(10\leq\text{Level}\\)|(none)|6010|
|\\(6020\leq\text{ChangeSkill}\leq 6029\\)|\\(\text{Level}\leq 12\\)|reset|0|
|\\((6020\leq\text{ChangeSkill}\leq 6029)\\)|\\(13\leq\text{Level}\leq 32\\)|(none)|6020|
|\\(6020\leq\text{ChangeSkill}\leq 6028\\)|\\(33\leq\text{Level}\\)|+1|6021|
|\\(6030\leq\text{ChangeSkill}\leq 6039\\)|\\(\text{Level}\leq 16\\)|reset|0|
|\\((6030\leq\text{ChangeSkill}\leq 6039)\\)|\\(17\leq\text{Level}\\)|(none)|6030|
|\\(6040\leq\text{ChangeSkill}\leq 6049\\)|\\(\text{Level}\leq 24\\)|reset|0|
|\\((6040\leq\text{ChangeSkill}\leq 6049)\\)|\\(25\leq\text{Level}\\)|(none)|6040|
|\\(6050\leq\text{ChangeSkill}\leq 6059\\)|\\(\text{Level}\leq 29\\)|reset|0|
|\\((6050\leq\text{ChangeSkill}\leq 6059)\\)|\\(30\leq\text{Level}\\)|(none)|6050|
|\\(6060\leq\text{ChangeSkill}\leq 6069\\)|\\(\text{Level}\leq 44\\)|reset|0|
|\\((6060\leq\text{ChangeSkill}\leq 6069)\\)|\\(45\leq\text{Level}\\)|(none)|6060|
|\\(6070\leq\text{ChangeSkill}\leq 6079\\)|\\(\text{Level}\leq 45\\)|reset|0|
|\\((6070\leq\text{ChangeSkill}\leq 6079)\\)|\\(46\leq\text{Level}\\)|(none)|6070|
|\\(6080\leq\text{ChangeSkill}\leq 6089\\)|\\(\text{Level}\leq 48\\)|reset|0|
|\\((6080\leq\text{ChangeSkill}\leq 6089)\\)|\\(49\leq\text{Level}\\)|(none)|6080|
|\\(6090\leq\text{ChangeSkill}\leq 6199\\)|(none)|reset|0|
|\\(6200\leq\text{ChangeSkill}\leq 6209\\)|\\(\text{Level}\leq 0\\)|reset|0|
|\\((6200\leq\text{ChangeSkill}\leq 6209)\\)|\\(1\leq\text{Level}\leq 19\\)|(none)|6200|
|\\(6200\leq\text{ChangeSkill}\leq 6208\\)|\\(20\leq\text{Level}\leq 39\\)|+1|6201|
|同上|\\(40\leq\text{Level}\\)|+2|6202|
|\\(6210\leq\text{ChangeSkill}\leq 6219\\)|\\(\text{Level}\leq 2\\)|reset|0|
|\\((6210\leq\text{ChangeSkill}\leq 6219)\\)|\\(3\leq\text{Level}\leq 24\\)|(none)|6210|
|\\(6220\leq\text{ChangeSkill}\leq 6229\\)|\\(\text{Level}\leq 7\\)|reset|0|
|\\((6220\leq\text{ChangeSkill}\leq 6229)\\)|\\(8\leq\text{Level}\leq 27\\)|(none)|6220|
|\\(6220\leq\text{ChangeSkill}\leq 6228\\)|\\(28\leq\text{Level}\leq 47\\)|+1|6221|
|同上|\\(48\leq\text{Level}\\)|+2|6222|
|\\(6230\leq\text{ChangeSkill}\leq 6239\\)|\\(\text{Level}\leq 14\\)|reset|0|
|\\((6230\leq\text{ChangeSkill}\leq 6239)\\)|\\(15\leq\text{Level}\leq 34\\)|(none)|6230|
|\\(6230\leq\text{ChangeSkill}\leq 6238\\)|\\(35\leq\text{Level}\\)|+1|6231|
|\\(6240\leq\text{ChangeSkill}\leq 6249\\)|\\(\text{Level}\leq 17\\)|reset|0|
|\\((6240\leq\text{ChangeSkill}\leq 6249)\\)|\\(18\leq\text{Level}\leq 37\\)|(none)|6240|
|\\(6240\leq\text{ChangeSkill}\leq 6248\\)|\\(38\leq\text{Level}\\)|+1|6241|
|\\(6250\leq\text{ChangeSkill}\leq 6259\\)|\\(\text{Level}\leq 22\\)|reset|0|
|\\((6250\leq\text{ChangeSkill}\leq 6259)\\)|\\(23\leq\text{Level}\\)|(none)|6250|
|\\(6260\leq\text{ChangeSkill}\leq 6269\\)|\\(\text{Level}\leq 25\\)|reset|0|
|\\((6260\leq\text{ChangeSkill}\leq 6269)\\)|\\(26\leq\text{Level}\\)|(none)|6260|
|\\(6270\leq\text{ChangeSkill}\leq 6279\\)|\\(\text{Level}\leq 36\\)|reset|0|
|\\((6270\leq\text{ChangeSkill}\leq 6279)\\)|\\(37\leq\text{Level}\\)|(none)|6270|
|\\(6280\leq\text{ChangeSkill}\leq 6289\\)|\\(\text{Level}\leq 38\\)|reset|0|
|\\((6280\leq\text{ChangeSkill}\leq 6289)\\)|\\(39\leq\text{Level}\\)|(none)|6280|
|\\(6290\leq\text{ChangeSkill}\leq 6299\\)|\\(\text{Level}\leq 42\\)|reset|0|
|\\((6290\leq\text{ChangeSkill}\leq 6299)\\)|\\(43\leq\text{Level}\\)|(none)|6290|
|\\(6300\leq\text{ChangeSkill}\leq 6309\\)|\\(\text{Level}\leq 49\\)|reset|0|
|\\((6300\leq\text{ChangeSkill}\leq 6309)\\)|\\(50\leq\text{Level}\\)|(none)|6300|
|\\(6310\leq\text{ChangeSkill}\leq 6999\\)|(none)|reset|0|

## ChangeSkillCost代入(剣士)

### コマンド群

<span class="tagYellow">位置</span> (-1920,10,-177)

<span class="expandButton" onClick="openCloseBE(`openHere8-begin`)">+</span>コマンド

<div class="openHere-begin openHere8-begin"></div>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players operation @a[score_ChangeSkill_min=1000,score_ChangeSkill=1009] ChangeSkillCost = #100 MPCost|
|2|/scoreboard players operation @a[score_ChangeSkill_min=1010,score_ChangeSkill=1019] ChangeSkillCost = #101 MPCost|
|3|/scoreboard players operation @a[score_ChangeSkill_min=1020,score_ChangeSkill=1029] ChangeSkillCost = #102 MPCost|
|4|/scoreboard players operation @a[score_ChangeSkill_min=1030,score_ChangeSkill=1039] ChangeSkillCost = #103 MPCost|
|5|/scoreboard players operation @a[score_ChangeSkill_min=1040,score_ChangeSkill=1049] ChangeSkillCost = #104 MPCost|
|6|/scoreboard players operation @a[score_ChangeSkill_min=1200,score_ChangeSkill=1209] ChangeSkillCost = #120 MPCost|
|7|/scoreboard players operation @a[score_ChangeSkill_min=1210,score_ChangeSkill=1219] ChangeSkillCost = #121 MPCost|
|8|/scoreboard players operation @a[score_ChangeSkill_min=1220,score_ChangeSkill=1229] ChangeSkillCost = #122 MPCost|
|9|/scoreboard players operation @a[score_ChangeSkill_min=1230,score_ChangeSkill=1239] ChangeSkillCost = #123 MPCost|
|10|/scoreboard players operation @a[score_ChangeSkill_min=1240,score_ChangeSkill=1249] ChangeSkillCost = #124 MPCost|
|11|/scoreboard players operation @a[score_ChangeSkill_min=1250,score_ChangeSkill=1259] ChangeSkillCost = #125 MPCost|

<div class="datatable3c-end"></div>

<div class="openHere-end openHere8-end"></div>

### 詳細

すべてのプレイヤーに対して、`ChangeSkill`の上位三桁に対応した`MPCost`を`ChangeSkillCost`に代入する

例: `ChangeSkill` = 1301のとき、`ChangeSkillCost` = `#130 MPCost`

## ChangeSkillCost代入(忍者)

### コマンド群

<span class="tagYellow">位置</span> (-1920,11,-177)

<span class="expandButton" onClick="openCloseBE(`openHere9-begin`)">+</span>コマンド

<div class="openHere-begin openHere9-begin"></div>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players operation @a[score_ChangeSkill_min=2000,score_ChangeSkill=2009] ChangeSkillCost = #200 MPCost|
|2|/scoreboard players operation @a[score_ChangeSkill_min=2010,score_ChangeSkill=2019] ChangeSkillCost = #201 MPCost|
|3|/scoreboard players operation @a[score_ChangeSkill_min=2020,score_ChangeSkill=2029] ChangeSkillCost = #202 MPCost|
|4|/scoreboard players operation @a[score_ChangeSkill_min=2030,score_ChangeSkill=2039] ChangeSkillCost = #203 MPCost|
|5|/scoreboard players operation @a[score_ChangeSkill_min=2040,score_ChangeSkill=2049] ChangeSkillCost = #204 MPCost|
|6|/scoreboard players operation @a[score_ChangeSkill_min=2050,score_ChangeSkill=2059] ChangeSkillCost = #205 MPCost|
|7|/scoreboard players operation @a[score_ChangeSkill_min=2060,score_ChangeSkill=2069] ChangeSkillCost = #206 MPCost|
|8|/scoreboard players operation @a[score_ChangeSkill_min=2070,score_ChangeSkill=2079] ChangeSkillCost = #207 MPCost|
|9|/scoreboard players operation @a[score_ChangeSkill_min=2080,score_ChangeSkill=2089] ChangeSkillCost = #208 MPCost|
|10|/scoreboard players operation @a[score_ChangeSkill_min=2200,score_ChangeSkill=2209] ChangeSkillCost = #220 MPCost|
|11|/scoreboard players operation @a[score_ChangeSkill_min=2210,score_ChangeSkill=2219] ChangeSkillCost = #221 MPCost|
|12|/scoreboard players operation @a[score_ChangeSkill_min=2220,score_ChangeSkill=2229] ChangeSkillCost = #222 MPCost|
|13|/scoreboard players operation @a[score_ChangeSkill_min=2230,score_ChangeSkill=2239] ChangeSkillCost = #223 MPCost|
|14|/scoreboard players operation @a[score_ChangeSkill_min=2230,score_ChangeSkill=2239] ChangeSkillCost = #223 MPCost|

<div class="datatable3c-end"></div>

<div class="openHere-end openHere9-end"></div>

### 詳細

すべてのプレイヤーに対して、`ChangeSkill`の上位三桁に対応した`MPCost`を`ChangeSkillCost`に代入する

## ChangeSkillCost代入(狩人)

### コマンド群

<span class="tagYellow">位置</span> (-1920,12,-177)

<span class="expandButton" onClick="openCloseBE(`openHere10-begin`)">+</span>コマンド

<div class="openHere-begin openHere10-begin"></div>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players operation @a[score_ChangeSkill_min=3000,score_ChangeSkill=3009] ChangeSkillCost = #300 MPCost|
|2|/scoreboard players operation @a[score_ChangeSkill_min=3010,score_ChangeSkill=3019] ChangeSkillCost = #301 MPCost|
|3|/scoreboard players operation @a[score_ChangeSkill_min=3020,score_ChangeSkill=3029] ChangeSkillCost = #302 MPCost|
|4|/scoreboard players operation @a[score_ChangeSkill_min=3030,score_ChangeSkill=3039] ChangeSkillCost = #303 MPCost|
|5|/scoreboard players operation @a[score_ChangeSkill_min=3040,score_ChangeSkill=3049] ChangeSkillCost = #304 MPCost|
|6|/scoreboard players operation @a[score_ChangeSkill_min=3050,score_ChangeSkill=3059] ChangeSkillCost = #305 MPCost|
|7|/scoreboard players operation @a[score_ChangeSkill_min=3060,score_ChangeSkill=3069] ChangeSkillCost = #306 MPCost|
|8|/scoreboard players operation @a[score_ChangeSkill_min=3070,score_ChangeSkill=3079] ChangeSkillCost = #307 MPCost|
|9|/scoreboard players operation @a[score_ChangeSkill_min=3200,score_ChangeSkill=3209] ChangeSkillCost = #320 MPCost|
|10|/scoreboard players operation @a[score_ChangeSkill_min=3210,score_ChangeSkill=3219] ChangeSkillCost = #321 MPCost|
|11|/scoreboard players operation @a[score_ChangeSkill_min=3220,score_ChangeSkill=3229] ChangeSkillCost = #322 MPCost|
|12|/scoreboard players operation @a[score_ChangeSkill_min=3230,score_ChangeSkill=3239] ChangeSkillCost = #323 MPCost|
|13|/scoreboard players operation @a[score_ChangeSkill_min=3240,score_ChangeSkill=3249] ChangeSkillCost = #324 MPCost|
|14|/scoreboard players operation @a[score_ChangeSkill_min=3250,score_ChangeSkill=3259] ChangeSkillCost = #325 MPCost|
|15|/scoreboard players operation @a[score_ChangeSkill_min=3260,score_ChangeSkill=3269] ChangeSkillCost = #326 MPCost|

<div class="datatable3c-end"></div>

<div class="openHere-end openHere10-end"></div>

### 詳細

すべてのプレイヤーに対して、`ChangeSkill`の上位三桁に対応した`MPCost`を`ChangeSkillCost`に代入する

## ChangeSkillCost代入(白魔導士)

### コマンド群

<span class="tagYellow">位置</span> (-1920,13,-177)

<span class="expandButton" onClick="openCloseBE(`openHere11-begin`)">+</span>コマンド

<div class="openHere-begin openHere11-begin"></div>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players operation @a[score_ChangeSkill_min=4000,score_ChangeSkill=4009] ChangeSkillCost = #400 MPCost|
|2|/scoreboard players operation @a[score_ChangeSkill_min=4010,score_ChangeSkill=4019] ChangeSkillCost = #401 MPCost|
|3|/scoreboard players operation @a[score_ChangeSkill_min=4020,score_ChangeSkill=4029] ChangeSkillCost = #402 MPCost|
|4|/scoreboard players operation @a[score_ChangeSkill_min=4030,score_ChangeSkill=4039] ChangeSkillCost = #403 MPCost|
|5|/scoreboard players operation @a[score_ChangeSkill_min=4040,score_ChangeSkill=4049] ChangeSkillCost = #404 MPCost|
|6|/scoreboard players operation @a[score_ChangeSkill_min=4050,score_ChangeSkill=4059] ChangeSkillCost = #405 MPCost|
|7|/scoreboard players operation @a[score_ChangeSkill_min=4200,score_ChangeSkill=4209] ChangeSkillCost = #420 MPCost|
|8|/scoreboard players operation @a[score_ChangeSkill_min=4210,score_ChangeSkill=4219] ChangeSkillCost = #421 MPCost|
|9|/scoreboard players operation @a[score_ChangeSkill_min=4220,score_ChangeSkill=4229] ChangeSkillCost = #422 MPCost|
|10|/scoreboard players operation @a[score_ChangeSkill_min=4230,score_ChangeSkill=4239] ChangeSkillCost = #423 MPCost|

<div class="datatable3c-end"></div>

<div class="openHere-end openHere11-end"></div>

### 詳細

すべてのプレイヤーに対して、`ChangeSkill`の上位三桁に対応した`MPCost`を`ChangeSkillCost`に代入する

## ChangeSkillCost代入(黒魔導士)

### コマンド群

<span class="tagYellow">位置</span> (-1920,14,-177)

<span class="expandButton" onClick="openCloseBE(`openHere12-begin`)">+</span>コマンド

<div class="openHere-begin openHere12-begin"></div>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players operation @a[score_ChangeSkill_min=5000,score_ChangeSkill=5009] ChangeSkillCost = #500 MPCost|
|2|/scoreboard players operation @a[score_ChangeSkill_min=5010,score_ChangeSkill=5019] ChangeSkillCost = #501 MPCost|
|3|/scoreboard players operation @a[score_ChangeSkill_min=5020,score_ChangeSkill=5029] ChangeSkillCost = #502 MPCost|
|4|/scoreboard players operation @a[score_ChangeSkill_min=5030,score_ChangeSkill=5039] ChangeSkillCost = #503 MPCost|
|5|/scoreboard players operation @a[score_ChangeSkill_min=5040,score_ChangeSkill=5049] ChangeSkillCost = #504 MPCost|
|6|/scoreboard players operation @a[score_ChangeSkill_min=5050,score_ChangeSkill=5059] ChangeSkillCost = #505 MPCost|
|7|/scoreboard players operation @a[score_ChangeSkill_min=5060,score_ChangeSkill=5069] ChangeSkillCost = #506 MPCost|
|8|/scoreboard players operation @a[score_ChangeSkill_min=5070,score_ChangeSkill=5079] ChangeSkillCost = #507 MPCost|
|9|/scoreboard players operation @a[score_ChangeSkill_min=5080,score_ChangeSkill=5089] ChangeSkillCost = #508 MPCost|
|10|/scoreboard players operation @a[score_ChangeSkill_min=5090,score_ChangeSkill=5099] ChangeSkillCost = #509 MPCost|
|11|/scoreboard players operation @a[score_ChangeSkill_min=5200,score_ChangeSkill=5209] ChangeSkillCost = #520 MPCost|
|12|/scoreboard players operation @a[score_ChangeSkill_min=5210,score_ChangeSkill=5219] ChangeSkillCost = #521 MPCost|
|13|/scoreboard players operation @a[score_ChangeSkill_min=5220,score_ChangeSkill=5229] ChangeSkillCost = #522 MPCost|
|14|/scoreboard players operation @a[score_ChangeSkill_min=5230,score_ChangeSkill=5239] ChangeSkillCost = #523 MPCost|
|15|/scoreboard players operation @a[score_ChangeSkill_min=5240,score_ChangeSkill=5249] ChangeSkillCost = #524 MPCost|
|16|/scoreboard players operation @a[score_ChangeSkill_min=5250,score_ChangeSkill=5259] ChangeSkillCost = #525 MPCost|

<div class="datatable3c-end"></div>

<div class="openHere-end openHere12-end"></div>

### 詳細

すべてのプレイヤーに対して、`ChangeSkill`の上位三桁に対応した`MPCost`を`ChangeSkillCost`に代入する

## ChangeSkillCost代入(召喚士)

### コマンド群

<span class="tagYellow">位置</span> (-1920,15,-177)

<span class="expandButton" onClick="openCloseBE(`openHere13-begin`)">+</span>コマンド

<div class="openHere-begin openHere13-begin"></div>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players operation @a[score_ChangeSkill_min=6000,score_ChangeSkill=6009] ChangeSkillCost = #600 MPCost|
|2|/scoreboard players operation @a[score_ChangeSkill_min=6010,score_ChangeSkill=6019] ChangeSkillCost = #601 MPCost|
|3|/scoreboard players operation @a[score_ChangeSkill_min=6020,score_ChangeSkill=6029] ChangeSkillCost = #602 MPCost|
|4|/scoreboard players operation @a[score_ChangeSkill_min=6030,score_ChangeSkill=6039] ChangeSkillCost = #603 MPCost|
|5|/scoreboard players operation @a[score_ChangeSkill_min=6040,score_ChangeSkill=6049] ChangeSkillCost = #604 MPCost|
|6|/scoreboard players operation @a[score_ChangeSkill_min=6050,score_ChangeSkill=6059] ChangeSkillCost = #605 MPCost|
|7|/scoreboard players operation @a[score_ChangeSkill_min=6060,score_ChangeSkill=6069] ChangeSkillCost = #606 MPCost|
|8|/scoreboard players operation @a[score_ChangeSkill_min=6070,score_ChangeSkill=6079] ChangeSkillCost = #607 MPCost|
|9|/scoreboard players operation @a[score_ChangeSkill_min=6080,score_ChangeSkill=6089] ChangeSkillCost = #608 MPCost|
|10|/scoreboard players operation @a[score_ChangeSkill_min=6200,score_ChangeSkill=6209] ChangeSkillCost = #620 MPCost|
|11|/scoreboard players operation @a[score_ChangeSkill_min=6210,score_ChangeSkill=6219] ChangeSkillCost = #621 MPCost|
|12|/scoreboard players operation @a[score_ChangeSkill_min=6220,score_ChangeSkill=6229] ChangeSkillCost = #622 MPCost|
|13|/scoreboard players operation @a[score_ChangeSkill_min=6230,score_ChangeSkill=6239] ChangeSkillCost = #623 MPCost|
|14|/scoreboard players operation @a[score_ChangeSkill_min=6240,score_ChangeSkill=6249] ChangeSkillCost = #624 MPCost|
|15|/scoreboard players operation @a[score_ChangeSkill_min=6250,score_ChangeSkill=6259] ChangeSkillCost = #625 MPCost|
|16|/scoreboard players operation @a[score_ChangeSkill_min=6260,score_ChangeSkill=6269] ChangeSkillCost = #626 MPCost|
|17|/scoreboard players operation @a[score_ChangeSkill_min=6270,score_ChangeSkill=6279] ChangeSkillCost = #627 MPCost|
|18|/scoreboard players operation @a[score_ChangeSkill_min=6280,score_ChangeSkill=6289] ChangeSkillCost = #628 MPCost|
|19|/scoreboard players operation @a[score_ChangeSkill_min=6290,score_ChangeSkill=6299] ChangeSkillCost = #629 MPCost|
|20|/scoreboard players operation @a[score_ChangeSkill_min=6300,score_ChangeSkill=6309] ChangeSkillCost = #630 MPCost|

<div class="datatable3c-end"></div>

<div class="openHere-end openHere13-end"></div>

### 詳細

すべてのプレイヤーに対して、`ChangeSkill`の上位三桁に対応した`MPCost`を`ChangeSkillCost`に代入する

## コマンド群N

### コマンド群

<span class="tagYellow">位置</span> (-1920,16,-177)

<span class="expandButton" onClick="openCloseBE(`openHere14-begin`)">+</span>コマンド

<div class="openHere-begin openHere14-begin"></div>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players add @a[tag=SkillChanging] ChangeSkill 0|
|2|/scoreboard players add @a[tag=SkillChanging] ChangeSkillCost 0|条件付き|
|3|/execute @a[tag=SkillChanging] ~ ~ ~ /playsound item.flintandsteel.use master @a[c=1] ~ ~ ~ 1 0.65 0|条件付き|
|4|/execute @a[score_ModeChangeB_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] ModeSkillB = @a[c=1] ChangeSkill|
|5|/execute @a[score_ModeChangeB_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] ModeCostB = @a[c=1] ChangeSkillCost|条件付き|
|6|/tellraw @a[score_ModeChangeB_min=0] [{"text":"スキルを"},{"text":"モードスキル","color":"light_purple"},{"text":"-サファイア-","color":"dark_aqua"},{"text":"に設定しました。"}]|条件付き|
|7|/scoreboard players tag @a[score_ModeChangeB_min=0] remove SkillChanging|条件付き|
|8|/execute @a[score_ModeChangeB_min=0,score_ModeState=-1] ~ ~ ~ /scoreboard players operation @a[c=1] CurrentMode = @a[c=1] ModeSkillB|条件付き|
|9|/execute @a[score_ModeChangeB_min=0,score_ModeState=-1] ~ ~ ~ /scoreboard players operation @a[c=1] CurrentModeCost = @a[c=1] ModeCostB|条件付き|
|10|/scoreboard players reset @a[score_ModeChangeB_min=0] ModeChangeB|
|11|/scoreboard players reset @a[score_ModeChangeA_min=0,tag=!SkillChanging] ModeChangeA|
|12|/execute @a[score_ModeChangeA_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] ModeSkillA = @a[c=1] ChangeSkill|
|13|/execute @a[score_ModeChangeA_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] ModeCostA = @a[c=1] ChangeSkillCost|条件付き|
|14|/tellraw @a[score_ModeChangeA_min=0] [{"text":"スキルを"},{"text":"モードスキル","color":"light_purple"},{"text":"-ルビー-","color":"red"},{"text":"に設定しました。"}]|条件付き|
|15|/scoreboard players tag @a[score_ModeChangeA_min=0] remove SkillChanging|条件付き|
|16|/execute @a[score_ModeChangeA_min=0,score_ModeState_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] CurrentMode = @a[c=1] ModeSkillA|条件付き|
|17|/execute @a[score_ModeChangeA_min=0,score_ModeState_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] CurrentModeCost = @a[c=1] ModeCostA|条件付き|
|18|/scoreboard players reset @a[score_ModeChangeA_min=0] ModeChangeA|
|19|/scoreboard players reset @a[score_InstantChangeB_min=0,tag=!SkillChanging] InstantChangeB|
|20|/execute @a[score_InstantChangeB_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] InstantSkillB = @a[c=1] ChangeSkill|
|21|/execute @a[score_InstantChangeB_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] InstantCostB = @a[c=1] ChangeSkillCost|条件付き|
|22|/tellraw @a[score_InstantChangeB_min=0] [{"text":"スキルを"},{"text":"サポートスキル","color":"gold"},{"text":"-サファイア-","color":"dark_aqua"},{"text":"に設定しました。"}]|条件付き|
|23|/scoreboard players tag @a[score_InstantChangeB_min=0] remove SkillChanging|条件付き|
|24|/scoreboard players reset @a[score_InstantChangeB_min=0] InstantChangeB|条件付き|
|25|/scoreboard players reset @a[score_InstantChangeA_min=0,tag=!SkillChanging] InstantChangeA|
|26|/execute @a[score_InstantChangeA_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] InstantSkillA = @a[c=1] ChangeSkill|
|27|/execute @a[score_InstantChangeA_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] InstantCostA = @a[c=1] ChangeSkillCost|条件付き|
|28|/tellraw @a[score_InstantChangeA_min=0] [{"text":"スキルを"},{"text":"サポートスキル","color":"gold"},{"text":"-ルビー-","color":"red"},{"text":"に設定しました。"}]|条件付き|
|29|/scoreboard players tag @a[score_InstantChangeA_min=0] remove SkillChanging|条件付き|
|30|/scoreboard players reset @a[score_InstantChangeA_min=0] InstantChangeA|条件付き|
|31|/execute @a[score_ChangeSkill_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] ShowSkill = @a[c=1] ChangeSkill|
|32|/scoreboard players reset @a[score_ChangeSkill_min=0] ChangeSkill|条件付き|
|33|/scoreboard players reset @a[score_ChangeSkillCost_min=0] ChangeSkillCost|条件付き|

<div class="datatable3c-end"></div>

<div class="openHere-end openHere14-end"></div>

### 詳細

1. `SkillChangeing`を持ち、`ChangeSkill`と`ChangeSkillCost`に値が代入されているすべてのプレイヤーに対し、効果音を鳴らす
2. `ModeChangeB`が0以上であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象の`ModeSkillB`に`ChangeSkill`を、`ModeCostB`に`ChangeSkillCost`をそれぞれ代入
   2. 対象に「スキルを<span style="color:#FF55FF;">モードスキル</span><span style="color:#00AAAA;">-サファイア-</span>に設定しました。」とのメッセージを表示
   3. 対象から`SkillChanging`を削除
   4. 対象の`ModeState`が-1以下であるとき`CurrentMode`に`ModeSkillB`を、`CurrentModeCost`に`ModeChangeB`をそれぞれ代入
   5. 対象から`ModeChangeB`を削除
3. `ModeChangeA`が0以上であり、`SkillChanging`を持っていないすべてのプレイヤーの`ModeChangeA`を0に設定
4. `ModeChangeA`が0以上であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象の`ModeSkillA`に`ChangeSkill`を、`ModeCostA`に`ChangeSkillCost`をそれぞれ代入
   2. 対象に「スキルを<span style="color:#FF55FF;">モードスキル</span><span style="color:red;">-ルビー-</span>に設定しました。」とのメッセージを表示
   3. 対象から`SkillChanging`を削除
   4. 対象の`ModeState`が-1以下であるとき`CurrentMode`に`ModeSkillA`を、`CurrentModeCost`に`ModeChangeA`をそれぞれ代入
   5. 対象から`ModeChangeA`を削除
5. `InstantChangeB`が0以上であり、`SkillChanging`を持っていないすべてのプレイヤーの`InstantChangeB`を0に設定
6. `InstantChangeB`が0以上であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象の`InstantSkillB`に`ChangeSkill`を、`InstantCostB`に`ChangeSkillCost`をそれぞれ代入
   2. 対象に「スキルを<span style="color:gold;">サポートスキル</span><span style="color:#00AAAA;">-サファイア-</span>に設定しました。」とのメッセージを表示
   3. 対象から`SkillChanging`を削除
   4. 対象から`InstantChangeB`を削除
7. `InstantChangeA`が0以上であり、`SkillChanging`を持っていないすべてのプレイヤーの`InstantChangeA`を0に設定
8. `InstantChangeA`が0以上であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象の`InstantSkillA`に`ChangeSkill`を、`InstantCostA`に`ChangeSkillCost`をそれぞれ代入
   2. 対象に「スキルを<span style="color:gold;">サポートスキル</span><span style="color:red;">-ルビー-</span>に設定しました。」とのメッセージを表示
   3. 対象から`SkillChanging`を削除
   4. 対象から`InstantChangeA`を削除
9. `ChangeSkill`が0以上であるすべてのプレイヤーの`ShowSkill`に`ChangeSkill`を代入し、実行で来たら以下の事柄を実行
   1. `ChangeSkill`が0以上であるすべてのプレイヤーの`ChangeSkill`を0に設定
   2. `ChangeSkillCost`が0以上であるすべてのプレイヤーの`ChangeSkillCost`を0に設定
