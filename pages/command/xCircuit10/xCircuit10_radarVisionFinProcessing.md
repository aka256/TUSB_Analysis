---
title: レーダーヴィジョン終了処理
tags: [コマンド,スキル,狩人,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-10 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_radarVisionFinProcessing.html
datatable3c: true
summary: 狩人のスキルの1つであるレーダーヴィジョンの終了処理を実行する。なお、`RadarVision`のカウントダウン処理は時間経過、レーダーヴィジョンの初期化処理はレーダーヴィジョン実行でそれぞれ行われる。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,12,-166)

<span class="tagBlack">呼び出し元</span> [時間経過]({{site.baseurl}}/command/xCircuit1/xCircuit1_timeElapsed.html)

狩人のスキルの1つであるレーダーヴィジョンの終了処理を実行する。なお、`RadarVision`のカウントダウン処理は[時間経過]({{site.baseurl}}/command/xCircuit1/xCircuit1_timeElapsed.html)、レーダーヴィジョンの初期化処理は[レーダーヴィジョン実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_radarVision.html)でそれぞれ行われる。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/gamemode survival @a[tag=RadarEnd,c=1]|
|2|/effect @a[tag=RadarEnd,m=survival] minecraft:resistance 1 4 true|
|3|/effect @a[tag=RadarEnd,m=survival] minecraft:water_breathing 0|
|4|/effect @a[tag=RadarEnd,m=survival] minecraft:night_vision 0|
|5|/execute @a[tag=RadarEnd,m=survival] ~ ~ ~ /scoreboard players operation @a[c=1] RadarAreaCheck -= @a[c=1] USBDimension|
|6|/execute @a[tag=RadarEnd,m=survival] ~ ~ ~ /scoreboard players operation @e[tag=RadarSite] RadarSyncCount -= @a[c=1] RadarSyncCount|
|7|/execute @a[tag=RadarEnd,m=survival] ~ ~ ~ /entitydata @e[tag=RadarSite,score_RadarSyncCount_min=0,score_RadarSyncCount=0,c=1] {Tags:[PostRadarSite,Garbage,TypeChecked]}|
|8|/execute @a[tag=RadarEnd,m=survival] ~ ~ ~ /scoreboard players operation @e[tag=RadarSite] RadarSyncCount += @a[c=1] RadarSyncCount|
|9|/tp @a[tag=RadarEnd,m=survival,score_RadarAreaCheck_min=0,score_RadarAreaCheck=0] @e[tag=PostRadarSite,c=1]|
|10|/scoreboard players tag @a[tag=RadarEnd,m=survival] remove RadarEnd|条件付き|
|11|/tellraw @a[tag=RadarEnd,m=survival] {"text":"スキル発動地点を見失ってしまった！","color":"yellow"}|
|12|/tp @a[tag=RadarEnd,m=survival] ~ -100 ~|条件付き|
|13|/scoreboard players tag @a[tag=RadarEnd,m=survival] remove RadarEnd|条件付き|
|14|/testfor @a[tag=RadarEnd,c=1]|
|15|/clone -1920 ~ ~ -1920 ~ ~ -1920 ~ ~ filtered force minecraft:command_block 5 ###リピート|条件付き|

<div class="datatable3c-end"></div>

## 詳細

1. **`RadarEnd`を持つプレイヤーをサバイバルに変更**
2. **`RadarEnd`を持ち、サバイバルであるすべてのプレイヤー**に以下の事柄を実行
   1. **耐性Lv.4を1秒間付与**
   2. **水中呼吸と暗視を削除**
   3. `RadarAreaCheck`から`USBDimension`を引く
   4. `RadarSite`を持つ[レーダーサイト]({{site.baseurl}}/entity/entity_entity.html#レーダーサイト)の`RadarSyncCount`から`RadarSyncCount`を引く
   5. `RadarSyncCount`が0である[レーダーサイト]({{site.baseurl}}/entity/entity_entity.html#レーダーサイト)の**タグを[`PostRadarSite`,`Garbage`,`TypeChecked`]に書き換える**
   6. `RadarSite`を持つ[レーダーサイト]({{site.baseurl}}/entity/entity_entity.html#レーダーサイト)の`RadarSyncCount`から`RadarSyncCount`を足す
3. `RadarEnd`を持ち、サバイバルであり、`RadarAreaCheck`が0である(<u>レーダーサイト使用前後に同じディメンション内にいる</u>)プレイヤーを、**`PostRadarSite`を持つ[レーダーサイト]({{site.baseurl}}/entity/entity_entity.html#レーダーサイト)の位置に移動し、`RadarEnd`を削除**
4. `RadarEnd`を持ち、サバイバルであるすべてのプレイヤー(**前述のtp処理が実行できなかったプレイヤー**)に以下の事柄を実行
   1. 「<span style="color:yellow;background-color:gray;">スキル発動地点を見失ってしまった！</span>」とのメッセージを表示
   2. **100m下に移動**
   3. **`RadarEnd`を削除**
5. `RadarEnd`を持っているプレイヤーが存在するとき、[レーダーヴィジョン終了処理]({{site.baseurl}}/command/xCircuit10/xCircuit10_radarVisionFinProcessing.html)を再び実行
