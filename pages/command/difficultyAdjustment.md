---
title: 難易度調整
tags: [command]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
sidebar: mydoc_sidebar
permalink: difficultyAdjustment.html
folder: command
datatable3cnp: true
---

- 位置(-1920,17,-200)

## コマンド群

<div clase="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/testfor @a|
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

<div clase="datatable3cnp-end"></div>

## 詳細

1. プレイヤーが一人でも生きているときに以下の事柄を実行
2. `Difficulty`の`Settings`を2乗
3. `Sightseeing`の`Settings`が0以下であるとき、`Difficulty`の`Settings`に`#ConquerPcInt`の`Global`を足し合わせる
4. (-1886,14,-188)([タイプ設定](typeSetting.html)の強さ補正)のコマンドブロックに{Command:"/effect @e[tag=TypeCheck,team=,type=!Player]minecraft:speed 1 0 true"}を上書きできたとき、(-1885,14,-188)のコマンドブロックに{Command:"/effect @e[tag=TypeCheck,team=,type=!Player]minecraft:resistance 1 0 true"}を上書きする
5. `Difficulty`の`Settings`が30以上の時、`Settings`の値によって(-1886,14,-188)と(-1885,14,-188)にあるコマンドブロックを書き換える(以下参考)

### コマンド書き換え

|Setting|(-1886,14,-188)への書き換え内容|(-1885,14,-188)への書き換え内容|
|:-:|:-|:-|
|~30|スピードLv.0 1秒間|耐性Lv.0 1秒間|
|30~|スピードLv.0 1000000秒間|耐性Lv.0 1000000秒間|
|70~|スピードLv.1 1000000秒間|耐性Lv.1 1000000秒間|
|110~|スピードLv.2 1000000秒間|耐性Lv.1 1000000秒間 (書き換えなし)|
|150~|スピードLv.3 1000000秒間|耐性Lv.2 1000000秒間|
|190~|スピードLv.4 1000000秒間|耐性Lv.2 1000000秒間 (書き換えなし)|
