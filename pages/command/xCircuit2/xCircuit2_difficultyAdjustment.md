---
title: 難易度調整
tags: [コマンド,敵Mob]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,バニラモブ
last_updated: 2020/6/19
update: 2020-07-13 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit2/xCircuit2_difficultyAdjustment.html
folder: command
datatable3cnp: true
summary: 攻略率の値による敵Mobの強化を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,17,-200)

<span class="tagBlack">呼び出し元</span> [約一分処理]({{site.baseurl}}/command/xCircuit1/xCircuit1_oneMinProcessing.html), [ログイン時処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_loginProcessing.html)

攻略率の値による敵Mobの強化を行う。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/testfor @a|[補足](#no1のコマンドブロックについて)あり|
|2|/scoreboard players operation Difficulty Settings *= Difficulty Settings|
|3|/scoreboard players test Sightseeing Settings * 0|
|4|/scoreboard players operation Difficulty Settings += #ConquerPctInt Global|条件付き|
|5|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1 0 true"}|
|6|/blockdata -1885 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:resistance 1 0 true"}|条件付き|
|7|/scoreboard players test Difficulty Settings 30 *|
|8|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 0 true"}|条件付き|
|9|/blockdata -1885 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:resistance 1000000 0 true"}|条件付き|
|10|/scoreboard players test Difficulty Settings 70 *|条件付き|
|11|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 1 true"}|条件付き|
|12|/blockdata -1885 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:resistance 1000000 1 true"}|条件付き|
|13|/scoreboard players test Difficulty Settings 110 *|条件付き|
|14|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 2 true"}|条件付き|
|15|/scoreboard players test Difficulty Settings 150 *|条件付き|
|16|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 3 true"}|条件付き|
|17|/blockdata -1885 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:resistance 1000000 2 true"}|条件付き|
|18|/scoreboard players test Difficulty Settings 190 *|条件付き|
|19|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 4 true"}|条件付き|

<div class="datatable3cnp-end"></div>

### No.1のコマンドブロックについて

No.1 のコマンドブロックには以下のデータタグが付与されている。

```minecarftcommand
CommandStats:{AffectedEntitiesObjective:"Settings",AffectedEntitiesName:"Difficulty"}
```

## 詳細

1. プレイヤーの人数を`Difficulty`に代入
2. `Difficulty`の`Settings`を2乗
3. `Sightseeing`の`Settings`が0以下であるとき、`Difficulty`の`Settings`に`#ConquerPctInt`の`Global`を足し合わせる
4. (-1886,14,-188)([タイプ設定]({{site.baseurl}}/command/xCircuit3/xCircuit3_typeSetting.html)の強さ補正)のコマンドブロック(No.34)に{Command:"/effect @e[tag=TypeCheck,team=,type=!Player]minecraft:speed 1 0 true"}を上書きできたとき、(-1885,14,-188)のコマンドブロック(No.35)に{Command:"/effect @e[tag=TypeCheck,team=,type=!Player]minecraft:resistance 1 0 true"}を上書きする
5. `Difficulty`の`Settings`が30以上の時、`Settings`の値によって(-1886,14,-188)(No.34)と(-1885,14,-188)(No.35)にあるコマンドブロックを書き換える(以下参考)

### コマンド書き換え

|Difficulty|(-1886,14,-188)への書き換え内容|(-1885,14,-188)への書き換え内容|
|:-:|:-|:-|
|~30|スピードLv.0 1秒間|耐性Lv.0 1秒間|
|30~|スピードLv.0 1000000秒間|耐性Lv.0 1000000秒間|
|70~|スピードLv.1 1000000秒間|耐性Lv.1 1000000秒間|
|110~|スピードLv.2 1000000秒間|耐性Lv.1 1000000秒間 (書き換えなし)|
|150~|スピードLv.3 1000000秒間|耐性Lv.2 1000000秒間|
|190~|スピードLv.4 1000000秒間|耐性Lv.2 1000000秒間 (書き換えなし)|
