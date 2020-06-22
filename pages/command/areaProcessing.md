---
title: エリア処理
tags: [command,dimension]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/20
update: 2020-06-20 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: areaProcessing.html
folder: command
datatable4c: true
---

<span class="label label-primary">位置 (-1920,8,-200)</span>

## About

エリア侵入時の演出やテーブルマウンテン、ネザーアスレ侵入時のエンダーチェスト処理を行う。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|コメント|状態|
|:-:|-|-|-|
|1|/scoreboard players set @a[score_AreaTitleFlag_min=-100,tag=IgnoreEnderChest] EnderChestOpened 0|エリア処理 持ち込み判定 BringItemError アドべ処理 Adv|
|2|/scoreboard players tag @a[score_AreaTitleFlag_min=-100,tag=IgnoreEnderChest] remove IgnoreEnderChest||条件付き|
|3|/scoreboard players tag @a[score_AreaTitleFlag_min=11,score_AreaTitleFlag=11] add BringItemError {Inventory:[{}]}|
|4|/scoreboard players tag @a[score_AreaTitleFlag_min=11,score_AreaTitleFlag=11,score_EnderChestOpened_min=1] add BringItemError {EnderItems:[{}]}|
|5|/tellraw @a[score_AreaTitleFlag_min=11,score_AreaTitleFlag=11,tag=BringItemError] {"text":"エンダーチェスト内を含む","color":"red","bold":"true"}|
|6|/tp @a[score_AreaTitleFlag_min=11,score_AreaTitleFlag=11,tag=BringItemError] -95.0 13.5 54.5 -180 0||条件付き|
|7|/scoreboard players tag @a[score_AreaTitleFlag_min=-90,score_AreaTitleFlag=-90] add BringItemError {Inventory:[{}]}|
|8|/tp @a[score_AreaTitleFlag_min=-90,score_AreaTitleFlag=-90,tag=BringItemError] 1.0 22.5 27.5 180 -20||条件付き|
|9|/tellraw @a[tag=BringItemError] {"text":"アイテム持ち込み禁止エリアです！","color":"red","bold":"true"}|
|10|/scoreboard players set @a[tag=BringItemError] AreaTitleFlag -999||条件付き|
|11|/scoreboard players tag @a[tag=BringItemError] remove BringItemError||条件付き|
|12|/scoreboard players tag @a[score_AreaTitleFlag_min=11,score_AreaTitleFlag=11] add IgnoreEnderChest|
|13|/scoreboard players tag @a[score_AreaTitleFlag_min=-100] remove Adv|Adv設定更新|
|14|/scoreboard players tag @a[score_AreaTitleFlag_min=-90,score_AreaTitleFlag=-89] add Adv|
|15|/scoreboard players tag @a[score_AreaTitleFlag_min=10] add Adv|
|16|/title @a[score_AreaTitleFlag_min=-100] times 30 40 40|エリアタイトル表示|
|17|/execute @a[-53,23,34,rm=3,score_AreaTitleFlag_min=0,score_AreaTitleFlag=0,SKYLANDS] ~ ~ ~ /playsound entity.firework.launch master @a[c=1] ~ ~ ~ 4 0.5 0|
|18|/title @a[-53,23,34,rm=3,score_AreaTitleFlag_min=0,score_AreaTitleFlag=0,SKYLANDS] subtitle {"text":"= The Skylands =","italic":"true","color":"white"}||条件付き|
|19|/title @a[-53,23,34,rm=3,score_AreaTitleFlag_min=0,score_AreaTitleFlag=0,SKYLANDS] title {"text":"通常世界","color":"gray","bold":"true","underlined":"true"}||条件付き|
|20|/execute @a[score_AreaTitleFlag_min=1,score_AreaTitleFlag=1,UNDERWORLD] ~ ~ ~ /playsound entity.wither.spawn master @a[c=1] ~ ~ ~ 0.6 0.7 0|
|21|/title @a[score_AreaTitleFlag_min=1,score_AreaTitleFlag=1,UNDERWORLD] subtitle {"text":"= The Underworld =","italic":"true","color":"dark_gray"}||条件付き|
|22|/title @a[score_AreaTitleFlag_min=1,score_AreaTitleFlag=1,UNDERWORLD] title {"text":"地下世界","color":"dark_blue","bold":"true","underlined":"true"}||条件付き|
|23|/execute @a[-2725,88,-382,rm=3,score_AreaTitleFlag_min=10,score_AreaTitleFlag=10,CLOUDIA] ~ ~ ~ /playsound entity.player.levelup master @a[c=1] ~ ~ ~ 4 0.5 0|
|24|/title @a[-2725,88,-382,rm=3,score_AreaTitleFlag_min=10,score_AreaTitleFlag=10,CLOUDIA] subtitle {"text":"= Cloudia =","italic":"true","color":"gray"}||条件付き|
|25|/title @a[-2725,88,-382,rm=3,score_AreaTitleFlag_min=10,score_AreaTitleFlag=10,CLOUDIA] title {"text":"クラウディア","color":"white","bold":"true","underlined":"true"}||条件付き|
|26|/execute @a[score_AreaTitleFlag_min=11,score_AreaTitleFlag=11,TABLE_MOUNTAIN] ~ ~ ~ /playsound entity.elder_guardian.ambient master @a[c=1] ~ ~ ~ 4 0.5 0|
|27|/title @a[score_AreaTitleFlag_min=11,score_AreaTitleFlag=11,TABLE_MOUNTAIN] subtitle {"text":"= Table Mountain =","italic":"true","color":"dark_green"}||条件付き|
|28|/title @a[score_AreaTitleFlag_min=11,score_AreaTitleFlag=11,TABLE_MOUNTAIN] title {"text":"テーブルマウンテン","color":"green","bold":"true","underlined":"true"}||条件付き|
|29|/execute @a[score_AreaTitleFlag_min=12,score_AreaTitleFlag=12,GULLIVERS_LAND] ~ ~ ~ /playsound entity.firework.twinkle_far master @a[c=1] ~ ~ ~ 4 0.5 0|
|30|/title @a[score_AreaTitleFlag_min=12,score_AreaTitleFlag=12,GULLIVERS_LAND] subtitle {"text":"= Gulliver's Land =","italic":"true","color":"gold"}||条件付き|
|31|/title @a[score_AreaTitleFlag_min=12,score_AreaTitleFlag=12,GULLIVERS_LAND] title {"text":"ガリバーランド","color":"yellow","bold":"true","underlined":"true"}||条件付き|
|32|/execute @a[score_AreaTitleFlag_min=13,score_AreaTitleFlag=13,ICE_SHEET_FLOAT] ~ ~ ~ /playsound entity.zombie_horse.death master @a[c=1] ~ ~ ~ 4 0.5 0|
|33|/title @a[score_AreaTitleFlag_min=13,score_AreaTitleFlag=13,ICE_SHEET_FLOAT] subtitle {"text":"= Ice Sheet Float =","italic":"true","color":"dark_aqua"}||条件付き|
|34|/title @a[score_AreaTitleFlag_min=13,score_AreaTitleFlag=13,ICE_SHEET_FLOAT] title {"text":"トカルトコルデ","color":"aqua","bold":"true","underlined":"true"}||条件付き|
|35|/execute @a[score_AreaTitleFlag_min=-100,score_AreaTitleFlag=-100,NETHER] ~ ~ ~ /playsound entity.blaze.shoot master @a[c=1] ~ ~ ~ 4 0.5 0|
|36|/title @a[score_AreaTitleFlag_min=-100,score_AreaTitleFlag=-100,NETHER] subtitle {"text":"= The Nether =","italic":"true","color":"dark_red"}||条件付き|
|37|/title @a[score_AreaTitleFlag_min=-100,score_AreaTitleFlag=-100,NETHER] title {"text":"ネザー","color":"red","bold":"true","underlined":"true"}||条件付き|
|38|/execute @a[score_AreaTitleFlag_min=-90,score_AreaTitleFlag=-90,NETHER_TRIAL] ~ ~ ~ /playsound block.portal.trigger master @a[c=1] ~ ~ ~ 0.6 0.8 0|
|39|/title @a[score_AreaTitleFlag_min=-90,score_AreaTitleFlag=-90,NETHER_TRIAL] subtitle {"text":"= Nether Trial =","italic":"true","color":"black"}||条件付き|
|40|/title @a[score_AreaTitleFlag_min=-90,score_AreaTitleFlag=-90,NETHER_TRIAL] title {"text":"ネザーアスレ","color":"dark_red","bold":"true","underlined":"true"}||条件付き|
|41|/execute @a[score_AreaTitleFlag_min=-89,score_AreaTitleFlag=-89,NETHER_DUNGEON] ~ ~ ~ /playsound entity.wither.death master @a[c=1] ~ ~ ~ 0.6 0.5 0|
|42|/title @a[score_AreaTitleFlag_min=-89,score_AreaTitleFlag=-89,NETHER_DUNGEON] subtitle {"text":"= Purgatory =","italic":"true","color":"black"}||条件付き|
|43|/title @a[score_AreaTitleFlag_min=-89,score_AreaTitleFlag=-89,NETHER_DUNGEON] title {"text":" 煉  獄 ","color":"dark_red","bold":"true","underlined":"true"}||条件付き|
|44|/execute @a[score_AreaTitleFlag_min=110,score_AreaTitleFlag=110,END] ~ ~ ~ /playsound entity.zombie.unfect master @a[c=1] ~ ~ ~ 4 0.5 0|
|45|/title @a[score_AreaTitleFlag_min=110,score_AreaTitleFlag=110,END] subtitle {"text":"= The End =","italic":"true","color":"gray"}||条件付き|
|46|/title @a[score_AreaTitleFlag_min=110,score_AreaTitleFlag=110,END] title {"text":"ジ・エンド","color":"black","bold":"true","underlined":"true"}||条件付き|

<div class="datatable4c-end"></div>

## 詳細

1. `AreaTitleFlag`が-100以上であり、`IgnoreEnderChest`を持つプレイヤーが存在したら、条件に該当するすべてのプレイヤーの`EnderChestOpened`を0に設定し、`IgnoreEnderChest`を削除
2. `AreaTitleFlag`が11であり、インベントリ内に何かしらアイテムがあるすべてのプレイヤーに、`BringItemError`を付与
3. `AreaTitleFlag`が11であり、エンダーチェスト内に何かしらアイテムがあり、`EnderChestOpened`が1以上であるすべてのプレイヤーに`BringItemError`を付与
4. `AreaTitleFlag`が11であり、かつ`BringItemError`を持つプレイヤーが存在したら、「エンダーチェスト内を含む」というメッセージを表示し、(-95,13.5,54.5)の通常世界内のテーブルマウンテンへのゲート前に移動させる
5. `AreaTitleFlag`が-90であり、インベントリ内に何かしらアイテムがあるすべてのプレイヤーに`BringItemError`を付与し、ネザー内の(1,22.5,27.5)のネザーアスレのゲート前に移動させる
6. `BringItemError`を持つすべてのプレイヤーが存在したら、そのプレイヤーを対象として「アイテム持ち込み禁止エリアです!」との警告を表示し、以下の事柄を実行
   1. `AreaTitleFlag`を-999に設定
   2. `BringItemError`を削除
7. `AreaTitleFlga`が11であるすべてのプレイヤーに`IgnoreEnderChest`を付与
8. `AreaTitleFlag`が-100以上であるプレイヤーから`Adv`を削除
9. `AreaTitleFlag`が-90,-89,10以上であるすべてのプレイヤーに`Adv`を付与
10. `AreaTitleFlag`が-100以上であるすべてのプレイヤーへのタイトル表示設定をフェードイン1.5秒、表示時間2秒、フェードアウト2秒に設定
11. 以下のように`AreaTitleFlag`の値に対応したエリア侵入時のタイトルを表示

|AreaTitleFlag|Dimension|備考|
|-|-|
|0|通常世界|(-53,23,34)から3m以内(スキル設定所からの帰還時)は除外される|
|1|地下世界|
|10|クラウディア|(-2725,88,-382)から3m以内(スキル設定所への侵入時)は除外される|
|11|テーブルマウンテン|
|12|ガリバーランド|
|13|トカルトコルデ|
|-100|ネザー|
|-90|ネザーアスレ|
|-89|煉獄|
|110|ジ・エンド|
