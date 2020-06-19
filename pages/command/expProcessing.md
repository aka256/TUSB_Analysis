---
title: 経験値取得処理
tags: [command,exp,display]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,ネザースター,経験値,マルチ
last_updated: 2020/6/19
sidebar: mydoc_sidebar
permalink: expProcessing.html
folder: command
---

<span class="label label-primary">位置 (-1920,8,-191)</span>

## About

ネザースターの取得時の処理や、マルチプレイ時の距離による経験値取得制限を行う。

## コマンド群

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set @a[score_GotExpFlag_min=1] GotExpFlag 0|
|2|/clear @a[score_GotExpFlag=-1] minecraft:nether_star|
|3|/execute @a[score_GotExpFlag_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] ExpMessageFlag = @a[r=50,score_HP_min=1,score_Level_min=1,c=1] Level|
|4|/execute @a[score_GotExpFlag_min=1,score_ExpMessageFlag_min=1] ~ ~ ~ /scoreboard players operation @a[r=50,score_HP_min=1,score_Level_min=1] ExpToLevel -= @a[c=1] GotExpFlag|
|5|/execute @a[score_GotExpFlag_min=1,score_ExpMessageFlag_min=1] ~ ~ ~ /tellraw @a {"translate":"%1\$sは%2\$sEXPの経験値を得た。","color":"yellow","with":[{"selector":"@a[r=50,score_HP_min=1,score_Level_min=1]"},{"score":{"name":"@a[c=1]","objective":"GotExpFlag"},"color":"white","bold":"true"}]}|
|6|/scoreboard players reset @a[score_ExpMessageFlag_min=1] ExpMessageFlag|
|7|/execute @a[score_GotExpFlag_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] ExpMessageFlag = @a[rm=50,score_HP_min=1,score_Level_min=1,c=1] Level|
|8|/execute @a[score_GotExpFlag_min=1,score_ExpMessageFlag_min=1] ~ ~ ~ /tellraw @a {"translate":"%1$sは離れ過ぎていたため、経験値を得られなかった。","color":"red","with":[{"selector":"@a[rm=50,score_HP_min=1,score_Level_min=1]"}]}|
|9|/execute @a[score_GotExpFlag_min=1] ~ ~ ~ /execute @a[r=50,score_HP_min=1,score_Level_min=1] ~ ~ ~ /playsound entity.player.levelup master @a[c=1] ~ ~ ~ 0.3 2|
|10|/scoreboard players reset @a[score_ExpMessageFlag_min=1] ExpMessageFlag|

## 詳細

1. `GotExpFlag`が1以上であるプレイヤーの`GotExpFlag`を0に設定
2. `GotExpFlag`が-1以下であるプレイヤーのインベントリ内のネザースターを消去し、`ExpMessageFlag`に半径50m以内、`HP`が1以上、`Level`が1以上であるプレイヤーの`Level`を代入
3. `GotExpFlag`が1以上、`ExpMessageFlag`が1以上であるプレイヤーから半径50m以内、`HP`が1以上、`Level`が1以上であるプレイヤーの`ExpToLevel`から`GotExpFlag`を引く
4. `GotExpFlag`が1以上、`ExpMessageFlag`が1以上であるプレイヤーに経験値取得時のメッセージを出す
5. `ExpMessageFlag`が1以上であるプレイヤーの`ExpMessageFlag`を0に設定
6. `GotExpFlag`が1以上であるプレイヤーの`ExpMessageFlag`から半径50m以上離れていて、`HP`が1以上、`Level`が1以上であるプレイヤーの`Level`を引く
7. `GotExpFlag`が1以上で`ExpMessageFlag`が1以上であるプレイヤーに経験値取得失敗時のメッセージを表示
8. `GotExpFlag`が1以上であるプレイヤーから半径50m以内、`HP`が1以上、`Level`が1以上であるプレイヤーいる座標で音を鳴らす
9. `ExpMessageFlag`が1以上であるプレイヤーの`ExpMessageFlag`を0に設定
