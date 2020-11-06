---
title: フェイタルショットクロック処理
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-06 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit13/xCircuit13_fatalShotClock.html
datatable3c: true
summary: 狩人のスキルの一つであるフェイタルショットの演出やスキルターゲットへのFatalTargetの付与、FatalTargetを持つ敵Mobへの効果の付与や削除などを行う。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,16,-140)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)

狩人のスキルの一つであるフェイタルショットの演出やスキルターゲットへの`FatalTarget`の付与、`FatalTarget`を持つ敵Mobへの効果の付与や削除などを行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=FatalShot] ~ ~ ~ /playsound block.glass.break master @a[r=32] ~ ~ ~ 0.6 1.8 0.1|リピート<br>動力が必要|
|2|/execute @e[tag=FatalShot] ~ ~ ~ /particle witchMagic ~ ~0.2 ~ 0 0 0 0.1 2 force|条件付き|
|3|/execute @e[tag=ProjectileHit] ~ ~ ~ /execute @e[dx=0,tag=ProjectileHit,score_PotentialSkill_min=3260,score_PotentialSkill=3269,c=1] ~ ~ ~ /scoreboard players tag @e[r=10,tag=Enemy] add FatalTarget|動力が必要|
|4|/execute @r[type=!Player,tag=FatalTarget,c=10] ~ ~ ~ /playsound block.fire.extinguish master @a[r=32] ~ ~ ~ 2 0.6 0.1|条件付き|
|5|/execute @r[type=!Player,tag=FatalTarget,c=10] ~ ~ ~ /particle witchMagic ~ ~1 ~ 5 1 5 0.1 90 force|条件付き|
|6|/entitydata @e[tag=FatalTarget] {ActiveEffects:[{Id:8b,Amplifier:-21b,Duration:400,ShowParticles:true},{Id:11b,Amplifier:-21b,Duration:400,ShowParticles:true},{Id:5b,Duration:0},{Id:12b,Duration:0},{Id:13b,Duration:0}]}|条件付き|
|7|/effect @e[tag=FatalTarget] minecraft:slowness 20 19|条件付き|
|8|/effect @e[tag=FatalTarget] minecraft:weakness 20 19|条件付き|
|9|/scoreboard players tag @e[tag=FatalTarget] remove FatalTarget|条件付き|
|10|/fill ~-10 ~1 ~ ~ ~1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|11|/scoreboard players test #EntityCount Global * 0|
|12|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. `FatalShot`を持つすべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
   2. 対象エンティティの数を`#EntityCount`の`Global`に代入
   3. 対象エンティティの座標上にパーティクルを表示
2. [フェイタルショットHIT処理部](#フェイタルショットhit処理部)が起動されているとき、これを実行
3. **`#EntityCount`の`Global`が0以下であるとき**、[フェイタルショットクロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_fatalShotClock.html)を停止

### フェイタルショットHIT処理部

- [NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html)で起動される

1. **`ProjectileHit`を持つすべてのエンティティと同座標上にある、`ProjectileHit`を持ち`PotentialSkill`が3260 ~ 3269であるエンティティを一体選び、そのエンティティから半径10m以内の`Enemy`を持った**すべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティに**`FatalTarget`を付与**
   2. `FatalTarget`を持つプレイヤー以外のエンティティをランダムに10体選び、以下の事柄を実行
      1. 対象エンティティから半径32m以内のすべてのプレイヤーに効果音を鳴らす
      2. 対象エンティティの座標上にパーティクルを表示
   3. **`FatalTarget`を持つ**すべてのエンティティに対し、以下の事柄を実行
      1. 対象エンティティに**[フェイタルショット付与タグ](#フェイタルショット付与タグ)を付与**
      2. 対象エンティティに**移動速度低下Lv.19と弱体化Lv.19を20秒間付与**
      3. 対象エンティティから`FatalTarget`を削除
2. [フェイタルショットHIT処理部](#フェイタルショットhit処理部)を停止

### フェイタルショット付与タグ

効果としては、跳躍力上昇Lv.235 20秒間、耐性Lv.235 20秒間と、攻撃力上昇、火炎体制、水中呼吸の3つの効果の打ち消しである。

```mcfunction
{
  ActiveEffects:[
  {
    Id:8b,
    Amplifier:-21b,
    Duration:400,
    ShowParticles:true
  },{
    Id:11b,
    Amplifier:-21b,
    Duration:400,
    ShowParticles:true
  },{
    Id:5b,
    Duration:0
  },{
    Id:12b,
    Duration:0
  },{
    Id:13b,
    Duration:0
  }]
}
```
