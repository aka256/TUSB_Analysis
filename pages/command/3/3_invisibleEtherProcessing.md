---
title: 透明化&エーテル処理
tags: [command]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,死の宣告,エーテル,エリクサー
last_updated: 2020/6/26
update: 2020/7/8
sidebar: mydoc_sidebar
permalink: 3_invisibleEtherProcessing.html
folder: command/3
datatable3c: true
---

<span class="label label-primary">位置 (-1920,17,-188)</span>

## About

TUSBでは透明化のレベルに応じて死の宣告やエーテル、エリクサー効果などの処理を行っている。ここではそれらの処理が行われている。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @a[tag=Invisible] add Ether {ActiveEffects:[{Id:14b,Amplifier:3b}]}|
|2|/scoreboard players add @a[tag=Ether] MP 100|条件付き|
|3|/scoreboard players tag @a[tag=Invisible] add Ether {ActiveEffects:[{Id:14b,Amplifier:2b}]}|
|4|/scoreboard players add @a[tag=Ether] MP 50|
|5|/scoreboard players tag @a[tag=Invisible] add Ether {ActiveEffects:[{Id:14b,Amplifier:1b}]}|
|6|/scoreboard players add @a[tag=Ether] MP 50|
|7|/execute @a[tag=Ether] ~ ~ ~ /scoreboard players operation @a[c=1] MP < @a[c=1] MPMax|条件付き|
|8|/scoreboard players tag @a[tag=Ether] remove Ether|条件付き|
|9|/scoreboard players tag @a[tag=Invisible] add Elixir {ActiveEffects:[{Id:14b,Amplifier:5b}]}|
|10|/execute @a[tag=Elixir] ~ ~ ~ /scoreboard players operation @a[c=1] HealCount += @a[c=1] HPMax|条件付き|
|11|/execute @a[tag=Elixir] ~ ~ ~ /scoreboard players operation @a[c=1] MP = @a[c=1] MPMax|条件付き|
|12|/scoreboard players tag @a[tag=Invisible] add Elixir {ActiveEffects:[{Id:14b,Amplifier:4b}]}|
|13|/execute @a[tag=Elixir] ~ ~ ~ /scoreboard players operation @a[c=1] HealCount += @a[c=1] HPMax|
|14|/scoreboard players operation @a[tag=Elixir] MP *= #2 Const|条件付き|
|15|/execute @a[tag=Elixir] ~ ~ ~ /scoreboard players operation @a[c=1] MP += @a[c=1] MPMax|条件付き|
|16|/scoreboard players operation @a[tag=Elixir] MP /= #2 Const|条件付き|
|17|/execute @a[tag=Elixir] ~ ~ ~ /scoreboard players operation @a[c=1] MP < @a[c=1] MPMax|条件付き|
|18|/scoreboard players tag @a[tag=Elixir] remove Elixir|条件付き|
|19|/scoreboard players tag @a[tag=Invisible] add DoomStart {ActiveEffects:[{Id:14b,Amplifier:-1b}]}|
|20|/scoreboard players tag @a[tag=DoomStart] remove DoomStart {Tags:[Doom]}|条件付き|
|21|/execute @a[tag=DoomStart] ~ ~ ~ /me は死の宣告の効果を受けた！|
|22|/scoreboard players set @a[tag=DoomStart] Doom 11|条件付き|
|23|/scoreboard players set @a[tag=DoomStart] DoomSecond 1|条件付き|
|24|/scoreboard players tag @a[tag=DoomStart] add Doom|条件付き|
|25|/scoreboard players tag @a[tag=DoomStart] remove DoomStart|条件付き|
|26|/scoreboard players tag @a[tag=Invisible] add HolyWater {ActiveEffects:[{Id:14b,Amplifier:6b}],Tags:[Doom]}|
|27|/execute @a[tag=HolyWater] ~ ~ ~ /me は死の宣告から逃れた！|条件付き|
|28|/scoreboard players tag @a[tag=HolyWater] remove Doom|条件付き|
|29|/scoreboard players tag @a[tag=HolyWater] remove HolyWater|条件付き|
|30|/effect @a[tag=Invisible] minecraft:invisibility 0|
|31|/scoreboard players tag @a[tag=Invisible] remove Invisible|

<div class="datatable3c-end"></div>

## 詳細

1. `Invisible`を持ち、透明化のレベルがLv.2 ~ 4のプレイヤーに`Ether`を付与し、透明化のレベルに応じて`MP`に値を足す。([以下](#etherタグ付与時の透明化のレベルと足されるmpの値の関係について)参照)
2. `Ether`を持つすべてのプレイヤーの`MP`が`MPMax`より大きいとき、`MP`に`MPMax`を代入し、`Ether`をすべてのプレイヤーから削除
3. `Invisible`を持ち、透明化のレベルがLv.5 ~ 6のプレイヤーに`Elixir`を付与し、透明化のレベルに応じて`MP`と`HP`の値を変更する([以下](#elixirタグ付与時の透明化のレベルと足されるmphpの値の関係について)参照)
4. `Elixir`を持つすべてのプレイヤーから`Elixir`を削除
5. `Invisible`を持ち、`Doom`(タグ)を持ない透明化のレベルがLv.0のプレイヤーに`DoomStart`を付与
6. `DoomStart`を持つすべてのプレイヤーに「[PlayerName]は死の宣告の効果を受けた！」とのメッセージを送り、以下の事柄を実行
   1. `DoomStart`を持つすべてのプレイヤーの`Doom`(スコア)を11に、`DoomSecond`を1に設定
   2. `DoomStart`を持つすべてのプレイヤーに`Doom`(タグ)を付与し、`DoomStart`を削除
7. `Invisible`と`Doom`を持ち、透明化のレベルがLv.7のプレイヤーに`HolyWater`を付与し、以下の事柄を実行
   1. `HolyWater`を持つすべてのプレイヤーに「[PlayerName]は死の宣告から逃れた！」とのメッセージを送る
   2. `HolyWater`を持つすべてのプレイヤーから`Doom`と`HolyWater`を削除
8. `Invisible`を持つすべてのプレイヤーに透明化を0秒付与 (透明化の削除)
9. `Invisible`を持つすべてのプレイヤーから`Invisible`を削除

### TUSBにおける透明化のレベルに対する扱い

|透明化レベル|処理|関連するタグ|
|:-:|-|-|
|0|死の宣告|`DoomStart`|
|2|MP回復1(エーテル効果)|`Ether`|
|3|MP回復2(エーテル効果)|`Ether`|
|4|MP回復3(エーテル効果)|`Ether`|
|5|HP回復(エリクサー効果)|`Elixir`|
|6|MP&HP回復(エリクサー効果)|`Elixir`|
|7|死の宣告からの回復|`HolyWater`|

### Etherタグ付与時の透明化のレベルと足されるMPの値の関係について

|透明化のLv|足されるMPの値|
|:-:|:-:|
|2|50|
|3|100|
|4|200|

### Elixirタグ付与時の透明化のレベルと足されるMP,HPの値の関係について

|透明化のLv|計算内容|
|:-:|-|
|5|`HealCount`+=2*`HPMax`, `MP`=`MPMax`|
|6|`HealCount`+=`HPMax`,`MP`=(`MP`*2+`MPMax`)/2 (`MP`が`MPMax`より大きくなってしまったら`MP`=`MPMax`とする)|
