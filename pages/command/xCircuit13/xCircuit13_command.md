---
title: 毎tick実行するコマンド群13
tags: [コマンド,スキル,忍者,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-10-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit13/xCircuit13_command.html
datatable4c: true
summary: 雪玉や矢などの投擲物を用いたスキルやアイテムエンティティを用いたスキルなどの攻撃処理や演出、他のコマンド群への分岐などを行う。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,4,-143)

<span class="tagBlack">呼び出し元</span> [初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html), [村人像]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_mainclockProcessing.html)

<span class="tagBlue">分岐先</span> [手裏剣クロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_syurikenClock.html), [居縮クロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_isyukuClock.html), [サヨナラ処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_sayonara.html), [ステークス負け演出]({{site.baseurl}}/command/xCircuit13/xCircuit13_staksLosePerform.html), [ステークス勝ち反映]({{site.baseurl}}/command/xCircuit13/xCircuit13_staksWinProcessing.html), [ステークス勝ち演出]({{site.baseurl}}/command/xCircuit13/xCircuit13_staksWinPerform.html), [チェインアロークロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_chainArrowClock.html), [ブラストショットクロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_blastShotClock.html), [バードストライクロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_birdStrikeClock.html), [フェイタルショットロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_fatalShotClock.html)

雪玉や矢などの投擲物を用いたスキルやアイテムエンティティを用いたスキルなどの攻撃処理や演出、他のコマンド群への分岐などを行う。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|状態|コメント|
|:-:|-|-|-|
|1|||(空白)|
|2|/execute @a[score_ActivatedSkill_min=2200,score_ActivatedSkill=2209] ~ ~1.52 ~ /entitydata @e[r=2,type=Snowball,c=1] {Tags:[Suriken,Projectile,SurikenIn10,FlyingObject,Driftable,TypeChecked],PortalCooldown:10}|動力が必要|忍者<br>手裏剣|
|3|/execute @a[score_ActivatedSkill_min=2200,score_ActivatedSkill=2209] ~ ~1.52 ~ /scoreboard players operation @e[r=2,type=Snowball,c=1] ProjectileSkill = @a[c=1] ActivatedSkill|条件付き|
|4|/fill -1921 11 ~ -1921 11 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###手裏剣クロック|条件付き|
|5|/fill ~-3 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|6|/execute @a[score_ActivatedSkill_min=2230,score_ActivatedSkill=2239] ~ ~1.52 ~ /entitydata @e[r=2,type=Snowball,c=1] {Tags:[Isukumi,Projectile,FlyingObject,Driftable,TypeChecked]}|動力が必要|忍者<br>居縮|
|7|/execute @a[score_ActivatedSkill_min=2230,score_ActivatedSkill=2239] ~ ~1.52 ~ /scoreboard players operation @e[r=2,type=Snowball,c=1] ProjectileSkill = @a[c=1] ActivatedSkill|条件付き|
|8|/fill -1921 14 ~ -1921 14 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###居縮クロック|条件付き|
|9|/fill ~-3 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|10|/clone -1920 17 ~ -1920 17 ~ -1920 17 ~ filtered force minecraft:command_block 5 ###サヨナラ予約|動力が必要|忍者<br>サヨナラ|
|11|/execute @a[score_ActivatedSkill_min=2240,score_ActivatedSkill=2249] ~ ~1.32 ~ /summon AreaEffectCloud ~ ~ ~ {Invulnerable:true,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:take,Tags:[SayonaraPoint,SystemEntity,TypeChecked]}|条件付き|
|12|/execute @a[score_ActivatedSkill_min=2240,score_ActivatedSkill=2249] ~ ~1.32 ~ /entitydata @e[r=35,type=Item,tag=!SystemEntity] {Invulnerable:true,Motion:[0d,0d,0d],Tags:[TypeChecked]}|条件付き|
|13|/execute @a[score_ActivatedSkill_min=2240,score_ActivatedSkill=2249] ~ ~1.32 ~ /tp @e[r=5,type=Item,tag=!SystemEntity] @a[c=1]|条件付き|
|14|/fill ~-4 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|15|/scoreboard players operation @a[score_ActivatedSkill_min=3200,score_ActivatedSkill=3209] Random %= #20 Const|動力が必要|狩人<br>ステークスファイア|
|16|/scoreboard players add @a[score_ActivatedSkill_min=3200,score_ActivatedSkill=3209] Random 8|条件付き|
|17|/scoreboard players add @a[score_ActivatedSkill_min=3201,score_ActivatedSkill=3209] Random 4|条件付き|
|18|/scoreboard players add @a[score_ActivatedSkill_min=3202,score_ActivatedSkill=3209] Random 4|条件付き|
|19|/execute @a[score_ActivatedSkill_min=3200,score_ActivatedSkill=3209,score_Random=19] ~ ~1.52 ~ /entitydata @e[r=2,tag=Arrow,c=1] {Tags:[Arrow,StakesLose,FlyingObject,Driftable,TypeChecked],damage:0d}|動力が必要|
|20|/fill -1921 9 ~2 -1921 9 ~2 minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ステークス負け演出|条件付き|
|21|/execute @a[score_ActivatedSkill_min=3200,score_ActivatedSkill=3209,score_Random_min=20] ~ ~1.52 ~ /entitydata @e[r=2,tag=Arrow,c=1] {Tags:[Arrow,StakesWin,StakesChange,FlyingObject,Driftable,TypeChecked]}|動力が必要|
|22|/execute 0-0-1-0-1 ~ 8 -141 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ステークス勝ち反映|条件付き|
|23|/fill -1921 11 ~2 -1921 11 ~2 minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ステークス勝ち演出|条件付き|
|24|/fill ~-9 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|25|/execute @a[score_ActivatedSkill_min=3210,score_ActivatedSkill=3219] ~ ~1.52 ~ /entitydata @e[r=2,tag=Arrow,c=1] {Tags:[Arrow,ChainArrow,Projectile,FlyingObject,Driftable,TypeChecked]}|動力が必要|狩人<br>チェインアロー|
|26|/execute @a[score_ActivatedSkill_min=3210,score_ActivatedSkill=3219] ~ ~1.52 ~ /scoreboard players operation @e[r=2,type=Arrow,c=1] ProjectileSkill = @a[c=1] ActivatedSkill|条件付き|
|27|/fill -1921 13 ~2 -1921 13 ~2 minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###チェインアロークロック|条件付き|
|28|/fill ~-3 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|29|/execute @a[score_ActivatedSkill_min=3230,score_ActivatedSkill=3239] ~ ~ ~ /playsound item.flintandsteel.use master @a[r=16] ~ ~ ~ 1 1.2 0|動力が必要|狩人<br>ブラストショット|
|30|/execute @a[score_ActivatedSkill_min=3230,score_ActivatedSkill=3239] ~ ~1.52 ~ /entitydata @e[r=2,tag=Arrow,c=1] {Tags:[BlastShot,Arrow,Projectile,FlyingObject,Driftable,TypeChecked]}|条件付き|
|31|/execute @a[score_ActivatedSkill_min=3230,score_ActivatedSkill=3239] ~ ~1.52 ~ /scoreboard players operation @e[r=2,type=Arrow,c=1] ProjectileSkill = @a[c=1] ActivatedSkill|条件付き|
|32|/fill -1921 16 ~2 -1921 16 ~2 minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###ブラストショットクロック|条件付き|
|33|/fill ~-4 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|34|/execute @a[score_ActivatedSkill_min=3240,score_ActivatedSkill=3249] ~ ~1.52 ~ /entitydata @e[r=2,tag=Arrow,c=1] {Tags:[BirdStrike,Arrow,Projectile,FlyingObject,Driftable,TypeChecked]}|動力が必要|狩人<br>バードストライク|
|35|/execute @a[score_ActivatedSkill_min=3240,score_ActivatedSkill=3249] ~ ~1.52 ~ /scoreboard players operation @e[r=2,type=Arrow,c=1] ProjectileSkill = @a[c=1] ActivatedSkill|条件付き|
|36|/fill -1921 13 ~3 -1921 13 ~3 minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###バードストライククロック|条件付き|
|37|/fill ~-3 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|38|/execute @a[score_ActivatedSkill_min=3250,score_ActivatedSkill=3259] ~ ~ ~ /playsound entity.blaze.shoot master @a[r=16] ~ ~ ~ 1 0.85 0|動力が必要|狩人<br>ガストキャノン|
|39|/execute @a[score_ActivatedSkill_min=3250,score_ActivatedSkill=3259] ~ ~ ~ /particle lava ~ ~ ~ 0.5 0.5 0.5 0.1 30 force|条件付き|
|40|/execute @a[score_ActivatedSkill_min=3250,score_ActivatedSkill=3250] ~ ~1.52 ~ /execute @e[r=2,tag=Arrow,c=1] ~ ~ ~ /summon Fireball ~ ~ ~ {CustomName:"ガストキャノン",ExplosionPower:1b,direction:[0d,0d,0d],Tags:[FlyingObject,Driftable,TypeChecked]}|動力が必要|
|41|/execute @a[score_ActivatedSkill_min=3251,score_ActivatedSkill=3259] ~ ~1.52 ~ /execute @e[r=2,tag=Arrow,c=1] ~ ~ ~ /summon Fireball ~ ~ ~ {CustomName:"ガストキャノン",ExplosionPower:2b,direction:[0d,0d,0d],Tags:[FlyingObject,Driftable,TypeChecked]}|動力が必要|
|42|/fill ~-4 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|
|43|/execute @a[score_ActivatedSkill_min=3260,score_ActivatedSkill=3269] ~ ~1.52 ~ /entitydata @e[r=2,tag=Arrow,c=1] {Tags:[FatalShot,Arrow,Projectile,FlyingObject,Driftable,TypeChecked]}|動力が必要|狩人<br>フェイタルショット|
|44|/execute @a[score_ActivatedSkill_min=3260,score_ActivatedSkill=3269] ~ ~1.52 ~ /scoreboard players operation @e[r=2,type=Arrow,c=1] ProjectileSkill = @a[c=1] ActivatedSkill|条件付き|
|45|/fill -1921 16 ~3 -1921 16 ~3 minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###フェイタルショットクロック|条件付き|
|46|/fill ~-3 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0|動力が必要|

<div class="datatable4c-end"></div>

## 詳細

### 手裏剣実行部

- [手裏剣実行部](#手裏剣実行部)では、雪玉へのタグの付与や[手裏剣クロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_syurikenClock.html)への分岐などを行う。
- [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)によって起動される

- **`ActivatedSkill`が2200 ~ 2209**であるすべてのプレイヤーから1.52m上を中心とした、**半径2m以内の1体の雪玉に対し**、以下の事柄を実行
  1. 対象エンティティに[手裏剣付与タグ](#手裏剣付与タグ)を付与
  2. 対象エンティティの`ProjectileSkill`に、最も近くのプレイヤーの`ActivatedSkill`を代入
  3. [手裏剣クロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_syurikenClock.html)を実行

#### 手裏剣付与タグ

```mcfunction
{
  Tags:[Suriken,Projectile,SurikenIn10,FlyingObject,Driftable,TypeChecked],
  PortalCooldown:10
}
```

### 居縮実行部

- [居縮実行部](#居縮実行部)では、雪玉へのタグの付与や[居縮クロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_isyukuClock.html)への分岐などを行う。
- [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)によって起動される

- **`ActivatedSkill`が2230 ~ 2239**であるすべてのプレイヤーから1.52m上を中心とした、**半径2m以内の1体の雪玉に対し**、以下の事柄を実行
  1. 対象エンティティに[居縮付与タグ](#居縮付与タグ)を付与
  2. 対象エンティティの`ProjectileSkill`に、最も近くのプレイヤーの`ActivatedSkill`を代入
  3. [居縮クロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_isyukuClock.html)を実行

#### 居縮付与タグ

```mcfunction
{
  Tags:[Isukumi,Projectile,FlyingObject,Driftable,TypeChecked]
}
```

### サヨナラ実行部

- [サヨナラ実行部](#サヨナラ実行部)では、[サヨナラ処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_sayonara.html)への分岐や[SayonaraPoint](#sayonarapoint)の召喚などを行う。
- [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)によって起動される

1. [サヨナラ処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_sayonara.html)を実行
2. **`ActivatedSkill`が2240 ~ 2249**であるすべてのプレイヤーから1.32m上を中心として、以下の事柄を実行
   1. **[SayonaraPoint](#sayonarapoint)を召喚**
   2. 対象座標から**半径35m以内の`SystemEntity`を持っていないすべてのアイテムエンティティに、[サヨナラ付与タグ](#サヨナラ付与タグ)を付与**
   3. 対象座標から**半径5m以内の`SystemEntity`を持たない最も近いアイテムエンティティを、スキル実行者の座標上に移動**

#### サヨナラ付与タグ

```mcfunction
{
  Invulnerable:true,
  Motion:[0d,0d,0d],
  Tags:[TypeChecked]
}
```

#### SayonaraPoint

```mcfunction
/summon AreaEffectCloud ~ ~ ~ {Invulnerable:true,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:take,Tags:[SayonaraPoint,SystemEntity,TypeChecked]}
```

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|SayonaraPoint,SystemEntity,TypeChecked|
|Duration|2|

### ステークスファイア実行部

- [ステークスファイア実行部](#ステークスファイア実行部)では、スキルの発動確率の計算や[ステークス負け演出]({{site.baseurl}}/command/xCircuit13/xCircuit13_staksLosePerform.html), [ステークス勝ち反映]({{site.baseurl}}/command/xCircuit13/xCircuit13_staksWinProcessing.html), [ステークス勝ち演出]({{site.baseurl}}/command/xCircuit13/xCircuit13_staksWinPerform.html)への分岐などを行う。
- [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)によって起動される

1. `ActivatedSkill`が3200 ~ 3209であるすべてのプレイヤーの`Random`を\\(Random=Random\mod 20\\)とする
2. `ActivatedSkill`が3200であるすべてのプレイヤーの`Random`に8を足す (\\(8\leq Random\leq 28\\))
3. `ActivatedSkill`が3201であるすべてのプレイヤーの`Random`に12を足す (\\(12\leq Random\leq 32\\))
4. `ActivatedSkill`が3202 ~ 3209であるすべてのプレイヤーの`Random`に16を足す (\\(16\leq Random\leq 36\\))
5. `ActivatedSkill`が3200 ~ 3209であるすべてのプレイヤーに対し、以下の事柄を実行
   1. **対象プレイヤーの`Random`が19以下であるとき**、以下の事柄を実行
      1. 対象プレイヤーから1.52m上を中心とした半径2m以内の最も近い矢に、**[ステークス負け付与タグ](#ステークス負け付与タグ)を付与**
      2. [ステークス負け演出]({{site.baseurl}}/command/xCircuit13/xCircuit13_staksLosePerform.html)を実行
   2. **対象プレイヤーの`Random`が20以上であるとき**、以下の事柄を実行
      1. 対象プレイヤーから1.52m上を中心とした半径2m以内の最も近い矢に、**[ステークス勝ち付与タグ](#ステークス勝ち付与タグ)を付与**
      2. [ステークス勝ち反映]({{site.baseurl}}/command/xCircuit13/xCircuit13_staksWinProcessing.html)を実行
      3. [ステークス勝ち演出]({{site.baseurl}}/command/xCircuit13/xCircuit13_staksWinPerform.html)を実行

#### ステークス負け付与タグ

```mcfunction
{
  Tags:[Arrow,StakesLose,FlyingObject,Driftable,TypeChecked],
  damage:0d
}
```

#### ステークス勝ち付与タグ

```mcfunction
{
  Tags:[Arrow,StakesWin,StakesChange,FlyingObject,Driftable,TypeChecked]
}
```

### チェインアロー実行部

- [チェインアロー実行部](#チェインアロー実行部)では、矢へのタグの付与や[チェインアロークロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_chainArrowClock.html)への分岐などを行う。
- [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)によって起動される

- **`ActivatedSkill`が3210 ~ 3219**であるすべてのプレイヤーから1.52m上を中心とした**半径2m以内の最も近い矢に対し**、以下の事柄を実行
   1. 対象エンティティに[チェインアロー付与タグ](#チェインアロー付与タグ)を付与
   2. 対象エンティティの`ProjectileSkill`に、スキル実行者の`ActivatedSkill`を代入
   3. [チェインアロークロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_chainArrowClock.html)を実行

#### チェインアロー付与タグ

```mcfunction
{
  Tags:[Arrow,ChainArrow,Projectile,FlyingObject,Driftable,TypeChecked]
}
```

### ブラストショット実行部

- [ブラストショット実行部](#ブラストショット実行部)では、矢へのタグの付与や[ブラストショットクロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_blastShotClock.html)への分岐などを行う。
- [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)によって起動される

- **`ActivatedSkill`が3230 ~ 3239**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから半径16m以内のすべてのプレイヤーに、効果音を鳴らす
   2. 対象プレイヤーから1.52m上を中心とした**半径2m以内の最も近い矢に対し**、以下の事柄を実行
      1. 対象エンティティに[ブラストショット付与タグ](#ブラストショット付与タグ)を付与
      2. 対象エンティティの`ProjectileSkill`に、スキル実行者の`ActivatedSkill`を代入
      3. [ブラストショットクロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_blastShotClock.html)を実行

#### ブラストショット付与タグ

```mcfunction
{
  Tags:[BlastShot,Arrow,Projectile,FlyingObject,Driftable,TypeChecked]
}
```

### バードストライク実行部

- [バードストライク実行部](#バードストライク実行部)では、矢へのタグの付与や[バードストライククロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_birdStrikeClock.html)への分岐などを行う。
- [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)によって起動される

- **`ActivatedSkill`が3240 ~ 3249**であるすべてのプレイヤーから1.52m上を中心とした**半径2m以内の最も近い矢に対し**、以下の事柄を実行
   1. 対象エンティティに[バードストライク付与タグ](#バードストライク付与タグ)を付与
   2. 対象エンティティの`ProjectileSkill`に、スキル実行者の`ActivatedSkill`を代入
   3. [バードストライクロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_birdStrikeClock.html)を実行

#### バードストライク付与タグ

```mcfunction
{
  Tags:[BirdStrike,Arrow,Projectile,FlyingObject,Driftable,TypeChecked]
}
```

### ガストキャノン実行部

- [ガストキャノン実行部](#ガストキャノン実行部)では、演出や[ガストキャノン1](#ガストキャノン1)、[ガストキャノン2](#ガストキャノン2)の召喚を行う。
- [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)によって起動される

1. **`ActivatedSkill`が3250 ~ 3259**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーから半径16m以内のすべてのプレイヤーに、効果音を鳴らす
   2. 対象プレイヤーの座標上にパーティクルを表示
2. **`ActivatedSkill`が3250**であるすべてのプレイヤーから1.52m上を中心とした、**半径2m以内の最も近い矢の座標上に、[ガストキャノン1](#ガストキャノン1)を召喚**
3. **`ActivatedSkill`が3251 ~ 3259**であるすべてのプレイヤーから1.52m上を中心とした、**半径2m以内の最も近い矢の座標上に、[ガストキャノン2](#ガストキャノン2)を召喚**

#### ガストキャノン1

```mcfunction
/summon Fireball ~ ~ ~ {CustomName:”ガストキャノン”,ExplosionPower:1b,direction:[0d,0d,0d],Tags:[FlyingObject,Driftable,TypeChecked]}
```

|-|-|
|Name|ガストキャノン|
|Type|Fireball|
|Tags|FlyingObject,Driftable,TypeChecked|
|ExplosionPower|1|

#### ガストキャノン2

```mcfunction
/summon Fireball ~ ~ ~ {CustomName:”ガストキャノン”,ExplosionPower:2b,direction:[0d,0d,0d],Tags:[FlyingObject,Driftable,TypeChecked]}
```

|-|-|
|Name|ガストキャノン|
|Type|Fireball|
|Tags|FlyingObject,Driftable,TypeChecked|
|ExplosionPower|2|

### フェイタルショット実行部

- [フェイタルショット実行部](#フェイタルショット実行部)では、矢へのタグの付与や[フェイタルショットクロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_fatalShotClock.html)への分岐などを行う。
- [毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)によって起動される

- **`ActivatedSkill`が3640 ~ 3269**であるすべてのプレイヤーから1.52m上を中心とした**半径2m以内の最も近い矢に対し**、以下の事柄を実行
   1. 対象エンティティに[フェイタルショット付与タグ](#フェイタルショット付与タグ)を付与
   2. 対象エンティティの`ProjectileSkill`に、スキル実行者の`ActivatedSkill`を代入
   3. [フェイタルショットロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_fatalShotClock.html)を実行

#### フェイタルショット付与タグ

```mcfunction
{
  Tags:[FatalShot,Arrow,Projectile,FlyingObject,Driftable,TypeChecked]
}
```
