---
title: 牧師会話選択時処理
tags: [コマンド,村人,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,牧師,教会
last_updated: 2020/6/26
update: 2020/7/14
sidebar: mydoc_sidebar
permalink: command/xCircuit3/xCircuit3_pastorTalk.html
folder: command/3
datatable3c: true
summary: 交易島の教会にいる牧師との会話処理を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,11,-189)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群3]({{site.baseurl}}/command/xCircuit3/xCircuit3_command.html)

交易島の教会にいる牧師との会話処理を行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute 0-0-1-0-2 ~ ~ ~ /execute @e[r=24,type=Villager,tag=Pastor,c=1] ~ ~ ~ /scoreboard players tag @a[r=5,score_PastorFlag_min=1] add PastorResume|
|2|/scoreboard players enable @a[score_PastorFlag_min=1,tag=!PastorResume] PastorFlag|
|3|/scoreboard players set @a[score_PastorFlag_min=1,tag=!PastorResume] PastorFlag 0|条件付き|
|4|/scoreboard players tag @a[score_PastorFlag_min=1,score_PastorFlag=1,tag=PastorResume] add PastorNo|
|5|/scoreboard players tag @a[score_PastorFlag_min=2,tag=PastorResume] add PastorYes|
|6|/scoreboard players set @a[tag=PastorResume] PastorFlag -1|
|7|/scoreboard players tag @a[tag=PastorResume] remove PastorResume|条件付き|
|8|/tellraw @a[tag=PastorYes] {"text":"[牧師] これは失礼しました。どうかお気をつけて。"}|
|9|/scoreboard players tag @a[tag=PastorYes] remove PastorYes|条件付き|
|10|/time query gametime|[補足](#no10のコマンドブロックについて)あり|
|11|/scoreboard players operation #Random Global %= #PastorMax Global|条件付き|
|12|/scoreboard players operation @a[tag=PastorNo] Random = #Random Global|
|13|/tellraw @a[tag=PastorNo,score_Random_min=0,score_Random=0] {"text":"[牧師] サバイバルエリアではベッドで寝ると元気になれます。\nアドベンチャーエリアではとても寝てはいられませんが…"}|
|14|/tellraw @a[tag=PastorNo,score_Random_min=1,score_Random=1] {"text":"[牧師] ネザー火山内にある迷宮には多くの宝が眠っているとの噂ですが、\n熱さで何人も寄せ付けません。"}|
|15|/tellraw @a[tag=PastorNo,score_Random_min=2,score_Random=2] {"text":"[牧師] MPの表示が溢れた時は、\nスキル設定所にある黒い電話ボックスを使うと良いでしょう。"}|
|16|/tellraw @a[tag=PastorNo,score_Random_min=3,score_Random=3] {"text":"[牧師] 土と砂利で荒れた土をクラフトできますが、\n荒れた土は一度耕すことで普通の土に変えられます。"}|
|17|/tellraw @a[tag=PastorNo,score_Random_min=4,score_Random=4] {"text":"[牧師] ポーションの中には火薬を混ぜると\n効果が消えてしまうものもあります。"}|
|18|/tellraw @a[tag=PastorNo,score_Random_min=5,score_Random=5] {"text":"[牧師] 干草の俵はクラフトすることで小麦に戻せます。"}|
|19|/tellraw @a[tag=PastorNo,score_Random_min=6,score_Random=7] {"text":"[牧師] もう長い間夜が続いていますが、明けない夜はないといいます。お月様の機嫌が良くなれば、夜明けはきっと来るでしょう。"}|
|20|/scoreboard players tag @a[tag=PastorNo] remove PastorNo|

<div class="datatable3c-end"></div>

### No.10のコマンドブロックについて

No.10 のコマンドブロックには、以下のデータタグが付与されている。

```minecraft
CommandStats:{QueryResultName:"#Random",QueryResultObjective:"Global"}
```

## 詳細

1. [ShopGM]({{site.baseurl}}/entity/entity_entity.html#shopgm)から半径24m以内にいる`Pastor`を持つ村人(牧師)を一人選択し、その村人から5m以内にいる`PastorFlag`が1以上であるすべてのプレイヤーに`PastorResume`を付与
2. `PastorFlag`が1以上であり、`PastorResume`を持たないすべてのプレイヤーに`PastorFlag`への書き込みを許可し、それを0に設定
3. `PastorFlag`が1であり、`PastorResume`を持つすべてのプレイヤーに`PastorNo`を付与
4. `PastorFlag`が2以上であり、`PastorResume`を持つすべてのプレイヤーに`PastorYes`を付与
5. `PastorResume`を持つすべてのプレイヤーの`PastorFlag`を-1に設定し、`PastorResume`を削除
6. `PastorYes`を持つすべてのプレイヤーに「[牧師] これは失礼しました。どうかお気をつけて。」とのメッセージを表示し、`PastorYes`を削除
7. `#Random`の`Global`にゲーム内時間を代入し、`#PastorMax`の`Global`との剰余を代入
8. `PastorNo`を持つすべてのプレイヤーの`Random`に`#Random`の`Global`を代入
9. `PastorNo`を持つすべてのプレイヤーの`Random`の値に対して以下のメッセージを送信

### 牧師のメッセージ

|Randomの値|牧師のメッセージ|
|-|-|
|0|[牧師] サバイバルエリアではベッドで寝ると元気になれます。アドベンチャーエリアではとても寝てはいられませんが…|
|1|[牧師] ネザー火山内にある迷宮には多くの宝が眠っているとの噂ですが、熱さで何人も寄せ付けません。|
|2|[牧師] MPの表示が溢れた時は、スキル設定所にある黒い電話ボックスを使うと良いでしょう。|
|3|[牧師] 土と砂利で荒れた土をクラフトできますが、荒れた土は一度耕すことで普通の土に変えられます。|
|4|[牧師] ポーションの中には火薬を混ぜると効果が消えてしまうものもあります。|
|5|[牧師] 干草の俵はクラフトすることで小麦に戻せます。|
|6~7|[牧師] もう長い間夜が続いていますが、明けない夜はないといいます。お月様の機嫌が良くなれば、夜明けはきっと来るでしょう。|
