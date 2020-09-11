---
title: KeepInventory確認
tags: [コマンド,クラウディア,死の宣告]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,keepinventory,キープインベントリ,観光モード
last_updated: 2020/6/19
update: 2020-06-19 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit2/xCircuit2_keepInventoryCheck.html
folder: command
datatable3cnp: true
summary: 観光モード関係の処理と思われるが、確証がまだ得られていない。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,16,-192)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群2]({{site.baseurl}}/command/xCircuit2/xCircuit2_reset.html)

観光モード関係の処理と思われるが、確証がまだ得られていない。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/scoreboard players test Sightseeing Settings * 0|
|2|/gamerule keepInventory false|条件付き|
|3|/clear @a[score_HP=0]|条件付き|
|4|/scoreboard players tag @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90] add Raise|
|5|/scoreboard players set @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90] RaisedArea -90|条件付き|
|6|/scoreboard players set @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90] Hunger 21|条件付き|
|7|/gamemode spectator @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90]|条件付き|
|8|/scoreboard players tag @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90] add TrialItemClear {Inventory:[{tag:{TrialItem:true}}]}|
|9|/clear @a[tag=TrialItemClear]|条件付き|
|10|/scoreboard players tag @a[tag=TrialItemClear] remove TrialItemClear|条件付き|
|11|/scoreboard players tag @a[score_HP=0,tag=Doom] remove Doom|
|12|/scoreboard players tag @a[tag=ReRaise,score_HP=0] add CastRaise|
|13|/scoreboard players tag @a[tag=ReRaise,score_HP=0] remove ReRaise|条件付き|
|14|/scoreboard players reset @a[score_Deaths_min=1,score_HP=0] Deaths|

<div class="datatable3cnp-end"></div>

## 詳細

1. `Sightseeing`の`Settings`が0以下の時、`keepInventory`を`false`にし、`HP`が0以下のプレイヤーのインベントリ内アイテムを消去する
2. `HP`が0以下、`USBDimension`が-90であるプレイヤーに`Raise`を付与、`RaisedArea`を-90に設定、`Hunger`を21に設定、スペクテイターモードに切り替える。
3. `HP`が0以下、`USBDimension`が-90であり、尚且つインベントリ内に`TrialItem:true`を持つプレイヤーに`TrialItemClear`を付与し、インベントリ内アイテムを消去、`TrialItemClear`を消去
4. `HP`が0以下、`Doom`を持つプレイヤーから`Doom`を消去
5. `HP`が0以下、`ReRaise`を持つプレイヤーに`CastRaise`を付与し、`ReRaise`を消去
6. `Deaths`が1以上、`HP`が0以下であるプレイヤーの`Deaths`を0に設定
