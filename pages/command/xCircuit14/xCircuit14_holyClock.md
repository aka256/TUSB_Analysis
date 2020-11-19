---
title: ホーリークロック処理
tags: [コマンド,スキル,白魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-20 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit14/xCircuit14_holyClock.html
datatable3c: true
summary: The Unusual SkyBlockでの白魔導士のスキルの一つであるホーリーの実行時の演出や、敵MOBへ満腹や即時回復の付与、アンデッド以外への敵MOBへの即時ダメージの付与などを行う。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,14,-138)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群14]({{site.baseurl}}/command/xCircuit14/xCircuit14_command.html)

The Unusual SkyBlockでの白魔導士のスキルの一つであるホーリーの実行時の演出や、敵MOBへ満腹や即時回復の付与、アンデッド以外への敵MOBへの即時ダメージの付与などを行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=Holy] ~ ~ ~ /scoreboard players tag @e[r=8,tag=Enemy] add Holyed|リピート<br>動力が必要|
|2|/scoreboard players tag @e[tag=Holyed] remove Holyed {ActiveEffects:[{Id:23b,Amplifier:-1b,ShowParticles:false}]}|条件付き|
|3|/effect @e[tag=Holyed] minecraft:saturation 6 255 true|
|4|/effect @e[tag=Holyed] minecraft:instant_health 1 6 true|条件付き|
|5|/execute @e[tag=Holyed] ~ ~ ~ /effect @e[r=0,tag=LivingEnemy] minecraft:instant_damage 1 3 true|条件付き|
|6|/execute @e[tag=Holyed] ~ ~ ~ /effect @e[r=0,tag=LivingEnemy] minecraft:instant_health 0|条件付き|
|7|/execute @e[tag=Holyed] ~ ~ ~ /playsound block.fire.extinguish master @a[r=32] ~ ~ ~ 2 2 0|
|8|/execute @e[tag=Holyed] ~ ~ ~ /particle fireworksSpark ~ ~1 ~ 1 1 1 0.25 20 force|条件付き|
|9|/scoreboard players tag @e[tag=Holyed] remove Holyed|条件付き|
|10|/execute @e[tag=Holy] ~ ~ ~ /playsound entity.experience_orb.pickup master @a[r=32] ~ ~ ~ 0.3 2 0.05|
|11|/execute @e[tag=Holy] ~ ~ ~ /particle endRod ~ ~ ~ 1 1 1 0.1 3 force|
|12|/scoreboard players test #EntityCount Global * 0|
|13|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

### No.10のコマンドブロックについて

No.10のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`Holy`を持つすべてのエンティティから半径8m以内の`Enemy`を持つ**すべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティに**`Holyed`を付与**
   2. **`Holyed`を持ち、[Holyed削除対象タグ](#holyed削除対象タグ)(満腹Lv.255を持つエンティティ)を持つすべてのエンティティから`Holyed`を削除**
2. **`Holyed`を持つ**エンティティ対し、以下の事柄を実行
   1. 対象エンティティに**満腹Lv.255を6秒間付与**
   2. 対象エンティティに**即時回復Lv.6を1秒間付与**
   3. 対象エンティティから半径0m以内の**`LivingEnemy`を持った**すべてのエンティティに対し、以下の事柄を実行
      1. 対象エンティティに**即時ダメージLv.3を1秒間付与**
      2. 対象エンティティから**即時回復を削除**
3. `Holyed`を持つすべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
   2. 対象エンティティの座標上にパーティクルを表示
   3. 対象エンティティから`Holyed`を削除
4. `Holy`を持つすべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
   2. 対象エンティティの数を`#EntityCount`の`Global`に代入
   3. 対象エンティティの座標上にパーティクルを表示
5. `#EntityCount`の`Global`が0以下であるとき、[ホーリークロック処理]({{site.baseurl}}/command/xCircuit14/xCircuit14_holyClock.html)を停止

### Holyed削除対象タグ

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
