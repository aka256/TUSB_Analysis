---
title: 毎tick実行するコマンド群14
tags: [コマンド,スキル,狩人,白魔導士,黒魔導士,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-14 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit14/xCircuit14_command.html
datatable4c: true
summary: 雪玉や矢などの投擲物を用いたスキルやアイテムエンティティを用いたスキルなどの攻撃処理や演出、他のコマンド群への分岐などを行う。また、The Unusual SkyBlockでの狩人のスキルの一つであるエンチェイス実行時のタグを付与したり、やスキル効果切れのメッセージを表示したりする。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,4,-138)

<span class="tagBlack">呼び出し元</span> [初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html), [村人像]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_mainclockProcessing.html)

<span class="tagBlue">分岐先</span> [ディアクロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_diaClock.html), [フラワーギフトクロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_flowerGiftClock.html), [ホーリークロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_holyClock.html), [アイスストームクロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_iceStormClock.html), [クロスファイアークロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_crossFireClock.html)

雪玉や矢などの投擲物を用いたスキルやアイテムエンティティを用いたスキルなどの攻撃処理や演出、他のコマンド群への分岐などを行う。また、The Unusual SkyBlockでの狩人のスキルの一つであるエンチェイス実行時のタグを付与したり、やスキル効果切れのメッセージを表示したりする。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|状態|コメント|
|:-:|-|-|-|
|1|(空白)|
|2|/execute @a[score_ActivatedSkill_min=4210,score_ActivatedSkill=4219] ~ ~1.52 ~ /entitydata @e[r=2,type=Snowball,c=1] {Tags:[Dia,Projectile,FlyingObject,Driftable,TypeChecked]}|動力が必要|白魔導士<br>ディア|
|3|/execute @a[score_ActivatedSkill_min=4210,score_ActivatedSkill=4219] ~ ~1.52 ~ /scoreboard players operation @e[r=2,type=Snowball,c=1] ProjectileSkill = @a[c=1] ActivatedSkill|条件付き|
|4|/fill -1921 8 ~ -1921 8 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ディアクロック|条件付き|
|5|/fill ~-3 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|6|/execute @a[score_ActivatedSkill_min=4220,score_ActivatedSkill=4220] ~ ~1.52 ~ /entitydata @e[r=2,type=Snowball,c=1] {Tags:[FlowerGift,FlowerGift1,FlyingObject,Driftable,TypeChecked]}|動力が必要|白魔導士<br>フラワーギフト|
|7|/execute @a[score_ActivatedSkill_min=4221,score_ActivatedSkill=4221] ~ ~1.52 ~ /entitydata @e[r=2,type=Snowball,c=1] {Tags:[FlowerGift,FlowerGift2,FlyingObject,Driftable,TypeChecked]}|動力が必要|
|8|/execute @a[score_ActivatedSkill_min=4222,score_ActivatedSkill=4229] ~ ~1.52 ~ /entitydata @e[r=2,type=Snowball,c=1] {Tags:[FlowerGift,FlowerGift3,FlyingObject,Driftable,TypeChecked]}|動力が必要|
|9|/fill -1921 11 ~ -1921 11 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###フラワーギフトクロック|動力が必要|
|10|/fill ~-4 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|11|/execute @a[score_ActivatedSkill_min=4230,score_ActivatedSkill=4239] ~ ~1.52 ~ /entitydata @e[r=2,type=Snowball,c=1] {Tags:[Holy,FlyingObject,Driftable,TypeChecked]}|動力が必要|白魔導士<br>ホーリー|
|12|/fill -1921 14 ~ -1921 14 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ホーリークロック|条件付き|
|13|/fill ~-2 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|14|/execute @a[score_ActivatedSkill_min=5200,score_ActivatedSkill=5200] ~ ~1.52 ~ /entitydata @e[r=2,type=Snowball,c=1] {Tags:[IceStorm,IceStorm1,FlyingObject,Driftable,TypeChecked]}|動力が必要|黒魔導士<br>アイスストーム|
|15|/execute @a[score_ActivatedSkill_min=5201,score_ActivatedSkill=5201] ~ ~1.52 ~ /entitydata @e[r=2,type=Snowball,c=1] {Tags:[IceStorm,IceStorm2,FlyingObject,Driftable,TypeChecked]}|動力が必要|
|16|/execute @a[score_ActivatedSkill_min=5202,score_ActivatedSkill=5209] ~ ~1.52 ~ /entitydata @e[r=2,type=Snowball,c=1] {Tags:[IceStorm,IceStorm3,FlyingObject,Driftable,TypeChecked]}|動力が必要|
|17|/fill -1921 8 ~1 -1921 8 ~1 minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###アイスストームクロック|動力が必要|
|18|/fill ~-4 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|19|/execute @a[score_ActivatedSkill_min=5210,score_ActivatedSkill=5210] ~ ~1.52 ~ /entitydata @e[r=2,type=Snowball,c=1] {Tags:[CrossFire,CrossFire1,FlyingObject,Driftable,TypeChecked]}|動力が必要|黒魔導士<br>クロスファイアー|
|20|/execute @a[score_ActivatedSkill_min=5211,score_ActivatedSkill=5211] ~ ~1.52 ~ /entitydata @e[r=2,type=Snowball,c=1] {Tags:[CrossFire,CrossFire2,FlyingObject,Driftable,TypeChecked]}|動力が必要|
|21|/execute @a[score_ActivatedSkill_min=5212,score_ActivatedSkill=5219] ~ ~1.52 ~ /entitydata @e[r=2,type=Snowball,c=1] {Tags:[CrossFire,CrossFire3,FlyingObject,Driftable,TypeChecked]}|動力が必要|
|22|/fill -1921 11 ~1 -1921 11 ~1 minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###クロスファイアークロック|動力が必要|
|23|/fill ~-4 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|24|/tellraw @a[tag=EnChase] {"text":"エンチェイスの効果が切れた。","color":"gold"}||エンチェイス付与処理<br>EnChase|
|25|/fill ~2 ~-1 ~ ~4 ~-1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0|条件付き|
|26|/execute @a[tag=EnChase] ~ ~1.52 ~ /scoreboard players tag @e[r=2,tag=Arrow,c=1] add Chaser|条件付き|
|27|/execute @a[tag=EnChase,score_EnChase=1] ~ ~1.52 ~ /scoreboard players tag @e[r=2,tag=Arrow,c=1] add Chaser1|動力が必要|
|28|/execute @a[tag=EnChase,score_EnChase_min=2] ~ ~1.52 ~ /scoreboard players tag @e[r=2,tag=Arrow,c=1] add Chaser2|動力が必要|
|29|/fill ~-2 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|30|/scoreboard players reset @a[tag=EnChase] EnChase|条件付き|
|31|/scoreboard players tag @a[tag=EnChase] remove EnChase|条件付き|

<div class="datatable4c-end"></div>

## 詳細

1. 以下のコマンド群が起動されているとき、それぞれを実行する
   1. [ディア実行部](#ディア実行部)
   2. [フラワーギフト](#フラワーギフト実行部)
   3. [ホーリー実行部](#ホーリー実行部)
   4. [アイスストーム実行部](#アイスストーム実行部)
   5. [クロスファイアー実行部](#クロスファイアー実行部)
2. [エンチェイス付与処理部](#エンチェイス付与処理部)を実行

### ディア実行部

- [ディア実行部](#ディア実行部)では、雪玉へのタグの付与や[ディアクロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_diaClock.html)への分岐などを行う。
- [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)によって起動される

1. **`ActivatedSkill`が4210 ~ 4219であるすべてのプレイヤーから1.52m上を中心とした、半径2m以内の最も近い雪玉**に対し、以下の事柄を実行
   1. 対象エンティティに**[ディア付与タグ](#ディア付与タグ)を付与**
   2. **対象エンティティの`ProjectileSkill`に最も近いプレイヤーの`ActivatedSkill`を代入**
   3. [ディアクロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_diaClock.md)の実行を予約
2. [ディア実行部](#ディア実行部)を停止

#### ディア付与タグ

```mcfunction
{
  Tags:[Dia,Projectile,FlyingObject,Driftable,TypeChecked]
}
```

### フラワーギフト実行部

- [フラワーギフト実行部](#フラワーギフト実行部)では、雪玉へのタグの付与や[フラワーギフトクロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_flowerGiftClock.html)への分岐などを行う。
- [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)によって起動される

1. **`ActivatedSkill`が4220であるすべてのプレイヤーから1.52m上を中心とした、半径2m以内の最も近い雪玉に[フラワーギフト付与タグ1](#フラワーギフト付与タグ1)を付与**
2. **`ActivatedSkill`が4221であるすべてのプレイヤーから1.52m上を中心とした、半径2m以内の最も近い雪玉に[フラワーギフト付与タグ2](#フラワーギフト付与タグ2)を付与**
3. **`ActivatedSkill`が4222 ~ 4229であるすべてのプレイヤーから1.52m上を中心とした、半径2m以内の最も近い雪玉に[フラワーギフト付与タグ3](#フラワーギフト付与タグ3)を付与**
4. [フラワーギフトクロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_flowerGiftClock.md)の実行を予約
5. [フラワーギフト実行部](#フラワーギフト実行部)を停止

#### フラワーギフト付与タグ1

```mcfunction
{
  Tags:[FlowerGift,FlowerGift1,FlyingObject,Driftable,TypeChecked]
}
```

#### フラワーギフト付与タグ2

```mcfunction
{
  Tags:[FlowerGift,FlowerGift2,FlyingObject,Driftable,TypeChecked]
}
```

#### フラワーギフト付与タグ3

```mcfunction
{
  Tags:[FlowerGift,FlowerGift3,FlyingObject,Driftable,TypeChecked]
}
```

### ホーリー実行部

- [ホーリー実行部](#ホーリー実行部)では、雪玉へのタグの付与や[ホーリークロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_holyClock.html)への分岐などを行う。
- [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)によって起動される

1. **`ActivatedSkill`が4220であるすべてのプレイヤーから1.52m上を中心とした、半径2m以内の最も近い雪玉**に対し、以下の事柄を実行
   1. 対象エンティティに**[ホーリー付与タグ](#ホーリー付与タグ)を付与**
   2. [ホーリークロック処理]({{site.baseurl}}/command/Xcircuit14/xCircuit14_holyClock.md)の実行を予約
2. [ホーリー実行部](#ホーリー実行部)を停止

#### ホーリー付与タグ

```mcfunctino
{
  Tags:[Holy,FlyingObject,Driftable,TypeChecked]
}
```

### アイスストーム実行部

- [アイスストーム実行部](#アイスストーム実行部)では、雪玉へのタグの付与や[アイスストームクロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_iceStormClock.html)への分岐などを行う。
- [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)によって起動される

1. **`ActivatedSkill`が5200であるすべてのプレイヤーから1.52m上を中心とした、半径2m以内の最も近い雪玉に[アイスストーム付与タグ1](#アイスストーム付与タグ1)を付与**
2. **`ActivatedSkill`が5201であるすべてのプレイヤーから1.52m上を中心とした、半径2m以内の最も近い雪玉に[アイスストーム付与タグ2](#アイスストーム付与タグ2)を付与**
3. **`ActivatedSkill`が5202 ~ 5209であるすべてのプレイヤーから1.52m上を中心とした、半径2m以内の最も近い雪玉に[アイスストーム付与タグ3](#アイスストーム付与タグ3)を付与**
4. [アイスストームクロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_iceStormClock.md)の実行を予約
5. [アイスストーム実行部](#アイスストーム実行部)を停止

#### アイスストーム付与タグ1

```mcfunction
{
  Tags:[IceStorm,IceStorm1,FlyingObject,Driftable,TypeChecked]
}
```

#### アイスストーム付与タグ2

```mcfunction
{
  Tags:[IceStorm,IceStorm2,FlyingObject,Driftable,TypeChecked]
}
```

#### アイスストーム付与タグ

```mcfunction
{
  Tags:[IceStorm,IceStorm3,FlyingObject,Driftable,TypeChecked]
}
```

### クロスファイアー実行部

- [クロスファイアー実行部](#クロスファイアー実行部)では、雪玉へのタグの付与や[クロスファイアークロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_crossFireClock.html)への分岐などを行う。
- [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)によって起動される

1. **`ActivatedSkill`が5210であるすべてのプレイヤーから1.52m上を中心とした、半径2m以内の最も近い雪玉に[クロスファイアー付与タグ1](#クロスファイアー付与タグ1)を付与**
2. **`ActivatedSkill`が5211であるすべてのプレイヤーから1.52m上を中心とした、半径2m以内の最も近い雪玉に[クロスファイアー付与タグ2](#クロスファイアー付与タグ2)を付与**
3. **`ActivatedSkill`が5212 ~ 5219であるすべてのプレイヤーから1.52m上を中心とした、半径2m以内の最も近い雪玉に[クロスファイアー付与タグ3](#クロスファイアー付与タグ3)を付与**
4. [クロスファイアークロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_crossFireClock.md)の実行を予約
5. [クロスファイアー実行部](#クロスファイアー実行部)を停止

#### クロスファイアー付与タグ1

```mcfunction
{
  Tags:[CrossFire,CrossFire1,FlyingObject,Driftable,TypeChecked]
}
```

#### クロスファイアー付与タグ2

```mcfunction
{
  Tags:[CrossFire,CrossFire2,FlyingObject,Driftable,TypeChecked]
}
```

#### クロスファイアー付与タグ3

```mcfunction
{
  Tags:[CrossFire,CrossFire3,FlyingObject,Driftable,TypeChecked]
}
```

### エンチェイス付与処理部

1. **`EnChase`を持つ**すべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーに「<span style="color:gold;background-color:gray;">エンチェイスの効果が切れた。</span>」とのメッセージを表示
   2. [Chaserタグ付与処理部](#chaserタグ付与処理部)を起動
   3. 対象プレイヤーから1.52m上を中心とした、半径2m以内の最も近い矢に**`Chaser`を付与**
2. [Chaserタグ付与処理部](#chaserタグ付与処理部)が起動されていれば、それを実行

### Chaserタグ付与処理部

- [エンチェイス付与処理部](#エンチェイス付与処理部)によって起動される。

1. `EnChase`(タグ)を持ち、`EnChase`(スコア)が1以下であるすべてのプレイヤーから1.52m上を中心とした、半径2m以内の最も近い矢に**`Chaser1`を付与**
2. `EnChase`(タグ)を持ち、`EnChase`(スコア)が2以上であるすべてのプレイヤーから1.52m上を中心とした、半径2m以内の最も近い矢に**`Chaser2`を付与**
3. [Chaserタグ付与処理部](#chaserタグ付与処理部)を停止し、以下の事柄を実行
   1. `EnChase`(タグ)を持つすべてのプレイヤーの`EnChase`(スコア)を0に設定
   2. `EnChase`(タグ)を持つすべてのプレイヤーから、`EnChase`(タグ)を削除
