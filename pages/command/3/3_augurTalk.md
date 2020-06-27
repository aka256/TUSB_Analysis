---
title: 占い師会話選択時処理
tags: [command]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/26
update: 2020/6/27
sidebar: mydoc_sidebar
permalink: 3_augurTalk.html
folder: command/3
datatable3c: true
---

<span class="label label-primary">位置 (-1920,13,-189)</span>

## About

交易島にいる占い師との会話処理を行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute 0-0-1-0-2 ~ ~ ~ /execute @e[r=24,type=Villager,tag=Augur,c=1] ~ ~ ~ /scoreboard players tag @a[r=5,score_AugurFlag_min=1] add AugurYes|
|2|/scoreboard players enable @a[score_AugurFlag_min=1,tag=!AugurYes] AugurFlag|
|3|/scoreboard players set @a[score_AugurFlag_min=1] AugurFlag 0|
|4|/scoreboard players set @a[tag=AugurYes] ItemCount -1|
|5|/clear @a[tag=AugurYes] minecraft:emerald 0 0|条件付き|
|6|/tellraw @a[tag=AugurYes,score_ItemCount=0] {"text":"[占い師] ふむむ……。金運に陰りが見られます。羊狩りがオススメです。"}|
|7|/scoreboard players add @a[tag=AugurYes,score_ItemCount_min=1] Payment 1|
|8|/tellraw @a[tag=AugurYes,score_ItemCount_min=1,score_EventRank=-1] {"text":"[占い師] むむッ…。遠ざかる赤い光が見えます。\n災いはあなたを避けていくようです。"}|
|9|/tellraw @a[tag=AugurYes,score_ItemCount_min=1,score_EventRank_min=0,score_EventRank=9] {"text":"[占い師] むむッ…。あなたから伸びる幾筋かの光が見えます。\n日除けが災いを避けるカギとなるでしょう。"}|
|10|/tellraw @a[tag=AugurYes,score_ItemCount_min=1,score_EventRank_min=10,score_EventRank=19] {"text":"[占い師] むむッ…。煙立ち込める泉が見えます。\n幸運は自ずと訪れるでしょう。"}|
|11|/tellraw @a[tag=AugurYes,score_ItemCount_min=1,score_EventRank_min=20,score_EventRank=29] {"text":"[占い師] むむッ…。揺らめき動く蜃気楼が見えます。\n明滅する光が災いを避けるカギとなるでしょう。"}|
|12|/tellraw @a[tag=AugurYes,score_ItemCount_min=1,score_EventRank_min=30,score_EventRank=39] {"text":"[占い師] むむッ…。喜ぶ村人が見えます。\n飼料が幸運を招き入れるカギとなるでしょう。"}|
|13|/tellraw @a[tag=AugurYes,score_ItemCount_min=1,score_EventRank_min=40,score_EventRank=49] {"text":"[占い師] むむッ…。手招くツルハシが見えます。\nあなたが災いから逃れられますように…。"}|
|14|/tellraw @a[tag=AugurYes,score_ItemCount_min=1,score_EventRank_min=50,score_EventRank=59] {"text":"[占い師] むむッ…。立ち昇る白煙が見えます。\n刃物が災いを避けるカギとなるでしょう。"}|
|15|/tellraw @a[tag=AugurYes,score_ItemCount_min=1,score_EventRank_min=60,score_EventRank=69] {"text":"[占い師] むむッ…。逃げ惑う炎が見えます。\n柵が幸運を招き入れるカギとなるでしょう。"}|
|16|/tellraw @a[tag=AugurYes,score_ItemCount_min=1,score_EventRank_min=70,score_EventRank=79] {"text":"[占い師] むむッ…。飛行機雲が見えます。\n平らな土地が幸運を招き入れるカギとなるでしょう。"}|
|17|/tellraw @a[tag=AugurYes,score_ItemCount_min=1,score_EventRank_min=80,score_EventRank=89] {"text":"[占い師] むむッ…。彷徨える騎士が見えます。\n薬が災いを避けるカギとなるでしょう。"}|
|18|/tellraw @a[tag=AugurYes,score_ItemCount_min=1,score_EventRank_min=90] {"text":"[占い師] むむッ…。風船が見えます。\n足場が幸運を招き入れるカギとなるでしょう。"}|
|19|/scoreboard players tag @a[tag=AugurYes] remove AugurYes|

<div class="datatable3c-end"></div>

## 詳細

1. [ShopGM](TUSB_Analysis_Entity.html#shopgm)から半径24m以内の`Augur`を持つ村人(占い師)を一人選択し、その村人から半径5m以内にいる`AugurFlag`が1以上であるすべてのプレイヤーに`AugurYes`を付与
2. `AugurFlag`が1以上、`AugurYes`を持っていないすべてのプレイヤーに`AugurFlag`への書き込みを許可
3. `AugurFlag`が1以上であるすべてのプレイヤーの`AugurFlag`を0に設定
4. `AugurYes`を持つすべてのプレイヤーの`ItemCount`を-1に設定
5. `AugurYes`を持ち、`ItemCount`が0以下であるすべてのプレイヤーに「[占い師] ふむむ……。金運に陰りが見られます。羊狩りがオススメです。」を表示
6. `AugurYes`を持ち、`ItemCount`が1以上であるすべてのプレイヤーの`Payment`に1を足す
7. `AugurYes`を持ち、`ItemCount`が1以上であるすべてのプレイヤーに`EventRank`の値に対応した[以下](#占い師の予言一覧)のようなメッセージを表示
8. `AugurYes`を持つすべてのプレイヤーから`AugurYes`を削除

### 占い師の予言一覧

|EventRank|メッセージ|
|:-:|-|
|~-1|[占い師] むむッ…。遠ざかる赤い光が見えます。災いはあなたを避けていくようです。|
|0~9|[占い師] むむッ…。あなたから伸びる幾筋かの光が見えます。日除けが災いを避けるカギとなるでしょう。|
|10~19|[占い師] むむッ…。煙立ち込める泉が見えます。幸運は自ずと訪れるでしょう。|
|20~29|[占い師] むむッ…。揺らめき動く蜃気楼が見えます。明滅する光が災いを避けるカギとなるでしょう。|
|30~39|[占い師] むむッ…。喜ぶ村人が見えます。飼料が幸運を招き入れるカギとなるでしょう。|
|40~49|[占い師] むむッ…。手招くツルハシが見えます。あなたが災いから逃れられますように…。|
|50~59|[占い師] むむッ…。立ち昇る白煙が見えます。刃物が災いを避けるカギとなるでしょう。|
|60~69|[占い師] むむッ…。逃げ惑う炎が見えます。柵が幸運を招き入れるカギとなるでしょう。|
|70~79|[占い師] むむッ…。飛行機雲が見えます。平らな土地が幸運を招き入れるカギとなるでしょう。|
|80~89|[占い師] むむッ…。彷徨える騎士が見えます。薬が災いを避けるカギとなるでしょう。|
|90~|[占い師] むむッ…。風船が見えます。足場が幸運を招き入れるカギとなるでしょう。|
