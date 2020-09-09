---
title: ワイルドクッキング実行
tags: [コマンド,スキル,狩人,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-09 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit10/xCircuit10_wildCooking.html
datatable3c: true
summary: 狩人のスキルの1つであるワイルドクッキングを実行する。
summaryDisable: true
---

## About

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)

狩人のスキルの1つであるワイルドクッキングを実行する。

## コマンド群

### コマンド群A

<span class="tagYellow">位置</span> (-1920,16,-167)

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @a[score_ActivatedSkill_min=3030,score_ActivatedSkill=3039] add WildCooking|
|2|/scoreboard players set @a[tag=WildCooking,c=1] CookingState 0|
|3|/scoreboard players tag @a[score_CookingState_min=0] remove WildCooking|条件付き|
|4|/clear @a[score_CookingState=0] minecraft:porkchop 0 1|
|5|/give @a[score_CookingState=0] minecraft:cooked_porkchop 1|条件付き<br>補足あり|
|6|/clear @a[score_CookingState=0] minecraft:beef 0 1|
|7|/give @a[score_CookingState=0] minecraft:cooked_beef 1|条件付き<br>補足あり|
|8|/clear @a[score_CookingState=0] minecraft:chicken 0 1|
|9|/give @a[score_CookingState=0] minecraft:cooked_chicken 1|条件付き<br>補足あり|
|10|/clear @a[score_CookingState=0] minecraft:rabbit 0 1|
|11|/give @a[score_CookingState=0] minecraft:cooked_rabbit 1|条件付き<br>補足あり|
|12|/clear @a[score_CookingState=0] minecraft:mutton 0 1|
|13|/give @a[score_CookingState=0] minecraft:cooked_mutton 1|条件付き<br>補足あり|
|14|/clear @a[score_CookingState=0] minecraft:potato 0 1|
|15|/give @a[score_CookingState=0] minecraft:baked_potato 1|条件付き<br>補足あり|
|16|/clear @a[score_CookingState=0] minecraft:fish 0 1|
|17|/give @a[score_CookingState=0] minecraft:cooked_fish 1 0|条件付き<br>補足あり|
|18|/clear @a[score_CookingState=0] minecraft:fish 1 1|
|19|/give @a[score_CookingState=0] minecraft:cooked_fish 1 1|条件付き<br>補足あり|
|20|/scoreboard players set @a[score_CookingState_min=1] CookingState 2|
|21|/clear @a[score_CookingState=0] minecraft:poisonous_potato 0 1|
|22|/give @a[score_CookingState=0] spider_eye 1 0 {display:{Name:"§r毒素"}}|条件付き<br>補足あり|
|23|/clear @a[score_CookingState=0] minecraft:fish 2 1|
|24|/give @a[score_CookingState=0] minecraft:dye 1 14 {display:{Name:"§r天然着色料"}}|条件付き<br>補足あり|
|25|/clear @a[score_CookingState=0] minecraft:fish 3 1|
|26|/give @a[score_CookingState=0] spider_eye 1 0 {display:{Name:"§r毒素"}}|条件付き<br>補足あり|

<div class="datatable3c-end"></div>

#### No.5, 7, 9, 11, 13, 15, 17, 19, 22, 24, 26のコマンドブロックについて

これらのコマンドブロックには、以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedItemsObjective:"CookingState",AffectedItemsName:"@a[score_CookingState=0,c=1]"}
```

### コマンド群B

<span class="tagYellow">位置</span> (-1920,17,-167)

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/clear @a[score_CookingState=0] minecraft:carrot 0 1|
|2|/give @a[score_CookingState=0] minecraft:dye 1 14 {display:{Name:"§r天然着色料"}}|条件付き<br>補足あり|
|3|/clear @a[score_CookingState=0] minecraft:beetroot 0 1|
|4|/give @a[score_CookingState=0] minecraft:dye 1 1 {display:{Name:"§r天然着色料"}}|条件付き<br>補足あり|
|5|/clear @a[score_CookingState=0] minecraft:baked_potato 0 1|
|6|/give @a[score_CookingState=0] dye 1 0 {display:{Name:"§r焦がした芋"}}|条件付き<br>補足あり|
|7|/clear @a[score_CookingState=0] minecraft:cooked_fish -1 1|
|8|/give @a[score_CookingState=0] dye 1 15 {display:{Name:"§r灰"}}|条件付き<br>補足あり|
|9|/scoreboard players set @a[score_CookingState_min=1,score_CookingState=1] CookingState 3|
|10|/clear @a[score_CookingState=0] minecraft:cooked_porkchop 0 1|補足あり|
|11|/clear @a[score_CookingState=0] minecraft:cooked_beef 0 1|補足あり|
|12|/clear @a[score_CookingState=0] minecraft:cooked_chicken 0 1|補足あり|
|13|/clear @a[score_CookingState=0] minecraft:cooked_rabbit 0 1|補足あり|
|14|/clear @a[score_CookingState=0] minecraft:cooked_mutton 0 1|補足あり|
|15|/give @a[score_CookingState_min=1,score_CookingState=1] rotten_flesh 1 0 {display:{Name:"§r焼き過ぎた肉"}}|
|16|/scoreboard players set @a[score_CookingState_min=1,score_CookingState=1] CookingState 3|条件付き|
|17|/execute @a[score_CookingState_min=2,score_CookingState=2] ~ ~ ~ /playsound entity.zombie.infect master @a[r=16] ~ ~ ~ 1 1.6 0|
|18|/execute @a[score_CookingState_min=2,score_CookingState=2] ~ ~ ~ /particle happyVillager ~ ~1 ~ 0.5 0.5 0.5 0 30 force|条件付き|
|19|/title @a[score_CookingState_min=2,score_CookingState=2] times 0 10 10|条件付き|
|20|/title @a[score_CookingState_min=2,score_CookingState=2] subtitle {"text":"上手に焼けましたー！","color":"green"}|条件付き|
|21|/title @a[score_CookingState_min=2,score_CookingState=2] title {"text":""}|条件付き|
|22|/execute @a[score_CookingState_min=3,score_CookingState=3] ~ ~ ~ /playsound entity.generic.extinguish_fire master @a[r=16] ~ ~ ~ 1 2 0|
|23|/execute @a[score_CookingState_min=3,score_CookingState=3] ~ ~ ~ /particle largesmoke ~ ~1 ~ 0.5 0.5 0.5 0.1 30 force|条件付き|
|24|/execute @a[score_CookingState=0] ~ ~ ~ /playsound entity.villager.trading master @a[c=1] ~ ~ ~ 1 1.5 0|
|25|/clear @a[score_CookingState_min=2] minecraft:sponge 1 1|
|26|/give @a[score_CookingState_min=2] minecraft:sponge 1 0|条件付き|
|27|/clear @a[score_CookingState_min=2] minecraft:bucket 0 1|条件付き|
|28|/give @a[score_CookingState_min=2] minecraft:water_bucket 1|条件付き|
|29|/scoreboard players reset @a[score_CookingState_min=0] CookingState|
|30|/testfor @a[tag=WildCooking,c=1]|
|31|/clone -1920 ~-1 ~ -1920 ~ ~ -1920 ~-1 ~ filtered force minecraft:command_block 5 ###リピート|条件付き|

<div class="datatable3c-end"></div>

#### No.2, 4, 6, 8, 10, 11, 12, 13, 14のコマンドブロックについて

これらのコマンドブロックには、以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedItemsObjective:"CookingState",AffectedItemsName:"@a[score_CookingState=0,c=1]"}
```

## 詳細

<u>コマンド群A → コマンド群Bの順に実行される。</u>

1. **`ActivatedSkill`が3030 ~ 3039**であるすべてのプレイヤーに、**`WildCooking`を付与**
2. `WildCooking`を持つプレイヤーの**`CookingState`を0に設定**し、`WildCooking`を削除
3. `CookingState`が0以下であるすべてのプレイヤーに対し、**[タイプA](#タイプa)に対応するアイテムのトレードを1回行い**、成功したとき対象プレイヤーの**`CookingState`を2に設定する**
4. `CookingState`が0以下であるすべてのプレイヤーに対し、**[タイプB](#タイプb)に対応するアイテムのトレードを1回行い**、成功したとき対象プレイヤーの**`CookingState`を3に設定する**
5. **`CookingState`が2**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
   2. 対象プレイヤーの座標上で、**パーティクルを表示**
   3. 「<span style="color:green;">上手に焼けましたー!</span>」とのメッセージを表示
6. **`CookingState`が3**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
   2. 対象プレイヤーの座標上で、**パーティクルを表示**
7. **`CookingState`が0**であるすべてのプレイヤーに、**効果音を鳴らす**
8. **`CookingState`が2であるプレイヤーが濡れたスポンジを持っていた時、スポンジと1つトレードし、さらに空のバケツを持っていた時はそれと水入りバケツをトレードする**
9. `CookingState`が0以上であるすべてのプレイヤーの、**`CookingState`を0に設定**
10. `WildCooking`を持つプレイヤーが存在するとき、再び1から[ワイルドクッキング]({{site.baseurl}}/command/xCircuit10/xCircuit10_wildCooking.html)実行する

### スポンジについて

ワイルドクッキングではスポンジの乾燥を行えるが、他のアイテムのトレードと異なり、**[タイプA](#タイプa)のアイテムと濡れたスポンジ(と空のバケツ)を所持した状態でスキルを実行する必要がある。**

### トレードアイテム対応表

表の上にあるほど優先してトレードが行われる。また、タイプAのアイテムの方がタイプBのアイテムよりも優先してトレードが行われる。

- 例: 生の豚肉、クマノミ、ジャガイモ、生鮭を所持している場合

生の豚肉 → ジャガイモ → 生鮭 → クマノミ
の順にトレードが行われる。

#### タイプA

|削除されるアイテム|配られるアイテム|
|-|-|
|生の豚肉|焼き豚|
|生の牛肉|ステーキ|
|生の鶏肉|焼き鳥|
|生の兎肉|焼き兎肉|
|生の羊肉|焼き羊肉|
|ジャガイモ|ベイクドポテト|
|生魚|焼き魚|
|生鮭|焼き鮭|

#### タイプB

|削除されるアイテム|配られるアイテム|
|-|-|
|青くなったジャガイモ|毒素 (蜘蛛の目)|
|クマノミ|天然着色料 (橙色の染料)|
|フグ|毒素 (蜘蛛の目)|
|ニンジン|天然着色料 (橙色の染料)|
|ビートルート|天然着色料 (赤色の染料)|
|ベイクドポテト|焦がした芋 (イカスミ)|
|焼き魚|灰 (骨粉)|
|焼き鮭|灰 (骨粉)|
|焼き豚|焼き過ぎた肉 (腐った肉)|
|ステーキ|焼き過ぎた肉 (腐った肉)|
|焼き鳥|焼き過ぎた肉 (腐った肉)|
|焼き兎肉|焼き過ぎた肉 (腐った肉)|
|焼き羊肉|焼き過ぎた肉 (腐った肉)|
