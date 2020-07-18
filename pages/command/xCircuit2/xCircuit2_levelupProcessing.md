---
title: レベルアップ処理
tags: [コマンド,表示,経験値,職業]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,レベルアップ
last_updated: 2020/6/19
update: 2020-06-19 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit2/xCircuit2_levelupProcessing.html
folder: command
datatable2c: true
summary: レベルアップ時のスコアボードの書き換えや、新しいスキルの取得への分岐などを行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,9,-191)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群2](/command/xCircuit2/xCircuit2_reset.html)

<span class="tagBlue">分岐先</span> [習得スキル取得](/command/xCircuit2/xCircuit2_skillAcquisition.html)

レベルアップ時のスコアボードの書き換えや、新しいスキルの取得への分岐などを行う。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players add @a[score_ExpToLevel=0,score_Level=49] Level 1|
|2|/scoreboard players add @a[score_ExpToLevel=0] MPMax 1|
|3|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP = @a[c=1] MPMax|
|4|/scoreboard players set @a[score_ExpToLevel=0] MPMaxFlag 1|
|5|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] HPMax = @a[c=1] MPMax|
|6|/scoreboard players operation @a[score_ExpToLevel=0] HPMax /= #8 Const|
|7|/scoreboard players set @a[score_HPMax_min=51] HPMax 50|
|8|/scoreboard players set @a[score_ExpToLevel=0] CoolTickSpan -100|
|9|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] CoolTickSpan += @a[c=1] Level|
|10|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] MPIncrement = @a[c=1] MPMax|
|11|/scoreboard players operation @a[score_ExpToLevel=0] MPIncrement /= #50 Const|
|12|/scoreboard players operation @a[score_ExpToLevel=0] MPIncrement += #3 Const|
|13|/execute @a[score_ExpToLevel=0] ~ ~ ~ /playsound entity.player.levelup master @a[r=16] ~ ~ ~ 2 0.7 0|
|14|/execute @a[score_ExpToLevel=0] ~ ~ ~ /particle happyVillager ~ ~ ~ 1 2 1 0.001 100 normal|
|15|/execute @a[score_ExpToLevel=0] ~ ~ ~ /summon FireworksRocketEntity ~ ~ ~ {LifeTime:10,FireworksItem:{id:minecraft:fireworks,Count:1b,tag:{Fireworks:{Explosions:[{Type:1b,Flicker:true,Trail:true,Colors:[16752934],FadeColors:[16777215]},{Type:0b,Flicker:false,Trail:false,Colors:[16715021,16777215],FadeColors:[16777215]}]}}}}|
|16|/title @a[score_ExpToLevel=0] times 5 100 20|
|17|/title @a[score_ExpToLevel=0] subtitle [{"text":"現在のレベル : ","italic":"true"},{"score":{"name":"*","objective":"Level"},"bold":"true","italic":"false"}]|
|18|/title @a[score_ExpToLevel=0] title {"text":"LEVEL UP ！","color":"green","bold":"true"}|
|19|/scoreboard players tag @a[score_ExpToLevel=0,score_Level_min=1,score_Level=50,score_NextExp=349] add ShowNewSkill|
|20|/clone -1920 ~1 ~ -1920 ~6 ~ -1920 ~1 ~ filtered force minecraft:command_block 5 #習得スキル取得|
|21|/scoreboard players set #ReserveShowSkill Global 1|
|22|/scoreboard players set @a[score_ExpToLevel=0] RefreshHPMax 3|
|23|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] NextExp = @a[c=1] Level|
|24|/scoreboard players operation @a[score_ExpToLevel=0] NextExp *= #ExpMul Const|
|25|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel += @a[c=1] NextExp|

<div class="datatable2c-end"></div>

## 詳細

1. `ExpToLevel`が0以下で、`Level`が49以下であるプレイヤーの`Level`を1に設定
2. `ExpToLevel`が0以下であるプレイヤーの`MPMax`を1に設定、`MP`に`MPMax`を代入、`MPMaxFlag`を1に設定、`HPMax`に`MPMax`を代入、`HPMax`に8で割った時の商を代入
3. `HPMax`が51以上であるプレイヤーの`HPMax`を50に設定
4. `ExpTolevel`が0以下であるプレイヤーの`CoolTickSpan`を-100に設定、`CoolTickSpan`に`Level`を足し合わせ、`MPInvrement`に`MPMax`を代入
5. `ExpTolevel`が0以下であるプレイヤーの`MPIncrement`に50で割った時の商を代入、`MPIncrement`に3を足す
6. `ExpTolevel`が0以下であるプレイヤーの座標で演出の実行
7. `ExpToLevel`が0以上、`Level`が1以上50以下、`NextExp`が349以下であるプレイヤーに`ShowNewSkill`を付与
8. (-1920,10,-191)から(-1920,15,-191)にある[習得スキル取得](/command/xCircuit2/xCircuit2_skillAcquisition.html)を実行
9. `#ReserveShowSkill`の`Global`を1に設定
10. `ExpToLevel`が0以下であるプレイヤーの`RefreshHPMax`を3に設定、`NextExp`に`Level`を代入、`NextExp`に7との積を代入、`ExpToLevel`に`NextExp`を足し合わせる
