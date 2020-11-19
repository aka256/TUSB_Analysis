---
title: アイスストームクロック処理
tags: [コマンド,スキル,黒魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-20 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit14/xCircuit14_iceStormClock.html
datatable3c: true
summary: The Unusual SkyBlockでの黒魔導士のスキルの一つであるアイスストームの実行時の演出や、敵MOBへ満腹や移動速度低下の付与、ターゲットへの攻撃処理などを行う。なお、満腹ステータスの付与は敵MOBに対するスキルのクールダウン処理のためのものであると考えられる。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,18,-137)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群14]({{site.baseurl}}/command/xCircuit14/xCircuit14_command.html)

The Unusual SkyBlockでの黒魔導士のスキルの一つであるアイスストームの実行時の演出や、敵MOBへ満腹や移動速度低下の付与、ターゲットへの攻撃処理などを行う。なお、満腹ステータスの付与は敵MOBに対するスキルのクールダウン処理のためのものであると考えられる。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=IceStorm] ~ ~ ~ /playsound block.anvil.land master @a[r=32] ~ ~100 ~ 0.05 2 0.05|リピート<br>動力が必要|
|2|/execute @e[tag=IceStorm] ~ ~ ~ /particle blockcrack ~ ~ ~ 0.5 0.5 0.5 0.1 10 force @a[r=64] 174|条件付き|
|3|/execute @e[tag=IceStorm] ~ ~ ~ /scoreboard players tag @e[r=5,type=!SnowMan,tag=Enemy] add Icing|
|4|/scoreboard players tag @e[tag=Icing] remove Icing {ActiveEffects:[{Id:23b,Amplifier:-1b,ShowParticles:false}]}|条件付き|
|5|/scoreboard players tag @e[tag=Icing] add SkillTarget|
|6|/fill ~5 ~1 ~ ~8 ~1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0|条件付き|
|7|/effect @e[tag=Icing] minecraft:saturation 6 255 true|条件付き|
|8|/effect @e[tag=Icing] minecraft:slowness 10 1 false|条件付き|
|9|/execute @e[tag=Icing] ~ ~ ~ /playsound entity.item.break master @a[r=32] ~ ~ ~ 2 1.6 0.1|条件付き|
|10|/execute @e[tag=Icing] ~ ~ ~ /particle blockcrack_174 ~ ~1 ~ 0.1 0.5 0.1 0.1 30 force|条件付き|
|11|/execute @e[tag=IceStorm1] ~ ~ ~ /execute @e[r=5,tag=Icing] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"アイスストーム",damage:10d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|動力が必要|
|12|/execute @e[tag=IceStorm2] ~ ~ ~ /execute @e[r=5,tag=Icing] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"アイスストーム",damage:20d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|動力が必要|
|13|/execute @e[tag=IceStorm3] ~ ~ ~ /execute @e[r=5,tag=Icing] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"アイスストーム",damage:35d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}|動力が必要|
|14|/fill ~-3 ~1 ~ ~ ~1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|15|/scoreboard players tag @e[tag=Icing] remove Icing|条件付き|
|16|/execute @e[tag=IceStorm] ~ ~ ~ /fill ~-2 ~-2 ~-2 ~2 ~2 ~2 minecraft:frosted_ice 0 replace minecraft:water 0|
|17|/scoreboard players test #EntityCount Global * 0|
|18|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`IceStorm`を持つ**すべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
   2. 対象エンティティの数を`#EntityCount`の`Global`に代入
   3. 対象エンティティから半径64m以内のすべてのプレイヤーの座標上にパーティクルを表示
2. **`IceStorm`を持つすべてのエンティティから半径5m以内の`Enemy`を持った`SnowMan`以外のすべてのエンティティ**に対し、以下の事柄を実行
   1. 対象エンティティに**`Icing`を付与**
   2. `Icing`を持ち、[Icing削除対象タグ](#icing削除対象タグ)(満腹Lv.255を持つエンティティ)を持つすべてのエンティティから`Icing`を削除
3. **`Icing`を持つ**すべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティに**`SkillTarget`を付与**
   2. [アイスストーム攻撃実行部](#アイスストーム攻撃実行部)を起動
   3. 対象エンティティに**満腹Lv.255を6秒間付与**
   4. 対象エンティティに**移動速度低下Lv.1を10秒間付与**
   5. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
   6. 対象エンティティの座標上にパーティクルを表示
4. **[アイスストーム攻撃実行部](#アイスストーム攻撃実行部)が起動されているとき、それを実行**
5. **`IceStorm`を持つすべてのエンティティからxyz軸方向にそれぞれ2mの範囲内の水を薄氷に置き換える**
6. `#EntityCount`の`Global`が0以下であるとき、[アイスストームクロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_iceStormClock.html)を停止

### アイスストーム攻撃実行部

1. **`IceStorm1`を持つ**すべてのエンティティから、半径5m以内の`Icing`を持ったすべてのエンティティから0.02m上に**[アイスストーム1](#アイスストーム1)を召喚**
2. **`IceStorm2`を持つ**すべてのエンティティから、半径5m以内の`Icing`を持ったすべてのエンティティから0.02m上に**[アイスストーム2](#アイスストーム2)を召喚**
3. **`IceStorm3`を持つ**すべてのエンティティから、半径5m以内の`Icing`を持ったすべてのエンティティから0.02m上に**[アイスストーム3](#アイスストーム3)を召喚**
4. [アイスストーム攻撃実行部](#アイスストーム攻撃実行部)を停止し、以下の事柄を実行
   - `Icing`を持つすべてのエンティティから`Icing`を削除

### Icing削除対象タグ

```mcfunction
{
  ActiveEffects:
  [{
    Id:23b,
    Amplifier:-1b,
    ShowParticles:false
  }]
}
```

### アイスストーム1

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”アイスストーム”,damage:10d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|アイスストーム|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|10|
|life|1200(即消滅)|

### アイスストーム2

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”アイスストーム”,damage:20d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|アイスストーム|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|20|
|life|1200(即消滅)|

### アイスストーム3

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”アイスストーム”,damage:35d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|アイスストーム|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|35|
|life|1200(即消滅)|
