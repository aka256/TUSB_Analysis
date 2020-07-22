---
title: 毎tick実行するコマンド群4
tags: [コマンド,スキル,剣士,忍者,黒魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-20 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit4/xCircuit4_command.html
datatable4c: true
summary: 黙想やウィンドウォール、マジックシールド、跳躍、アイアンウィルなど継続して発動するスキルの継続もしくは終了処理、または分岐を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,4,-184)

<span class="tagBlack">呼び出し元</span> [初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html), [村人像]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_mainclockProcessing.html)

<span class="tagBlue">分岐先</span> [黙想終了処理]({{site.baseurl}}/command/xCircuit4/xCircuit4_mokusoEndProcessing.html), [マジックシールド終了処理]({{site.baseurl}}/command/xCircuit4/xCircuit4_magicShieldEndProcessing.html), [アイアンウィル継続判定]({{site.baseurl}}/command/xCircuit4/xCircuit4_ironWillContinueJudgment.html)

黙想やウィンドウォール、マジックシールド、跳躍、アイアンウィルなど継続して発動するスキルの継続もしくは終了処理、または分岐を行う。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|状態|コメント|
|:-:|-|-|-|
|1|/scoreboard players tag @a[tag=Mokuso,score_WalkOneCm_min=5] add MokusoEnd||黙想終了処理 Mokuso|
|2|/scoreboard players tag @a[tag=Mokuso,score_SprintOneCm_min=5] add MokusoEnd|
|3|/scoreboard players tag @a[tag=Mokuso,score_CrouchOneCm_min=5] add MokusoEnd|
|4|/execute @a[tag=MokusoEnd,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -184 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###黙想終了処理|
|5|/execute @a[score_WindWall_min=0] ~ ~ ~ /particle sweepAttack ~ ~1 ~ 2 2 2 0 1 true||ウィンドウォール WindWallスコア|
|6|/execute @a[score_WindWall_min=0] ~ ~ ~ /entitydata @e[r=6,tag=Driftable] {direction:[0d,-0.1d,0d]}|条件付き|
|7|/execute @a[score_WindWall_min=0] ~ ~ ~ /execute @e[r=6,tag=Driftable] ~ ~ ~ /summon Endermite ~ ~ ~ {Silent:true,NoAI:true,Invulnerable:true,Lifetime:2395,ActiveEffects:[{Id:14b,Duration:10,Amplifier:0b,ShowParticles:false}],Tags:[SystemEntity,TypeChecked,WindWallMite]}|条件付き|
|8|/execute @a[score_WindWall_min=0] ~ ~ ~ /scoreboard players tag @e[r=6,tag=Driftable] remove Driftable|条件付き|
|9|/execute @a[score_WindWall_min=0] ~ ~ ~ /execute @e[r=6,tag=DriftableA] ~ ~ ~ /entitydata @e[r=0,tag=WindWallMite] {Lifetime:2400}|条件付き|
|10|/execute @a[score_WindWall_min=0] ~ ~ ~ /execute @e[r=6,tag=DriftableA] ~ ~ ~ /summon ArmorStand ~ ~ ~ {Invisible:true,NoGravity:true,Invulnerable:true,Tags:[SystemEntity,Garbage,TypeChecked]}|条件付き|
|11|/execute @a[score_WindWall_min=0] ~ ~ ~ /scoreboard players tag @e[r=6,tag=DriftableA] remove DriftableA|条件付き|
|12|/scoreboard players tag @a[tag=MagicShield] add MagicShieldEnd|マジックシールドチェック MagicShield MagicShieldCheck|
|13|/scoreboard players tag @a[tag=MagicShield] remove MagicShieldEnd {HurtTime:0s}|条件付き|
|14|/execute @a[tag=MagicShieldEnd,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 9 -184 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###マジックシールド終了処理|
|15|/scoreboard players set @a[score_Jump_min=1] WalkOneCm 0||ジャンプ Jump|
|16|/scoreboard players set @a[score_Jump_min=1] FlyOneCm 0|条件付き|
|17|/scoreboard players tag @a[score_Choyaku_min=2,score_Jump_min=1] add ChoyakuJump {ActiveEffects:[{Id:8b}]}|条件付き|跳躍ダメージ Shiyaku Jump|
|18|/execute @a[tag=ChoyakuJump] ~ ~ ~ /playsound entity.enderdragon.flap master @a[r=16] ~ ~ ~ 8 0.8 0|条件付き|
|19|/execute @a[tag=ChoyakuJump] ~ ~ ~ /particle explode ~ ~ ~ 2.0 0 2.0 0 30 force|条件付き|
|20|/fill ~2 ~-1 ~ ~5 ~-1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 #跳躍ダメージ処理開始|条件付き|
|21|/execute @a[tag=ChoyakuJump] ~ ~ ~ /scoreboard players tag @e[r=9,tag=Enemy] add SkillTarget|条件付き|
|22|/execute @a[tag=ChoyakuJump,score_Choyaku_min=2,score_Choyaku=7] ~ ~ ~ /execute @e[r=3,tag=Enemy] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"旋風",damage:15d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}|動力が必要|
|23|/execute @a[tag=ChoyakuJump,score_Choyaku_min=8,score_Choyaku=12] ~ ~ ~ /execute @e[r=6,tag=Enemy] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"旋風",damage:35d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}|動力が必要|
|24|/execute @a[tag=ChoyakuJump,score_Choyaku_min=13] ~ ~ ~ /execute @e[r=9,tag=Enemy] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"旋風",damage:60d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}|動力が必要|
|25|/fill ~-3 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block|
|26|/scoreboard players tag @a[tag=ChoyakuJump] remove ChoyakuJump|条件付き|
|27|/scoreboard players reset @a[score_Jump_min=1] Jump|
|28|/scoreboard players tag @a[score_HPChanging_min=0] add Damaged||緩衝体力用被ダメージ補正処理|
|29|/scoreboard players tag @a[tag=Damaged] remove Damaged {AbsorptionAmount:0f}|条件付き|
|30|/execute @a[tag=Damaged] ~ ~ ~ /scoreboard players operation @a[c=1] DamageTaken = @a[c=1] HP|
|31|/execute @a[tag=Damaged] ~ ~ ~ /scoreboard players operation @a[c=1] DamageTaken -= @a[c=1] HPChanging|条件付き|
|32|/scoreboard players operation @a[tag=Damaged] DamageTaken < #0 Const|条件付き|
|33|/scoreboard players tag @a[tag=Damaged] remove Damaged|条件付き|
|34|/execute @a[score_DamageTaken_min=0] ~ -200 ~ /kill @a[dy=-40]||奈落介錯|
|35|/scoreboard players tag @a[score_IronWill_min=1,score_DamageTaken_min=0] add IronWill||アイアンウィル発動 DamageTaken IronWill|
|36|/clone -1920 11 ~ -1920 11 ~ -1920 11 ~ filtered force minecraft:command_block 5 ###アイアンウィル継続判定|条件付き|
|37|/execute @a[tag=IronWill] ~ ~ ~ /summon AreaEffectCloud ~ ~ ~ {Invulnerable:true,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:0,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:take,Tags:[IronWillPoint,SystemEntity,TypeChecked]}|条件付き|
|38|/execute @a[tag=IronWill] ~ ~ ~ /tp @e[dx=0,tag=IronWillPoint,c=1] @a[c=1]|条件付き|
|39|/execute @a[tag=IronWill] ~ ~ ~ /tp @a[c=1] @e[r=4,tag=IronWillPoint,c=1]|条件付き|

<div class="datatable4c-end"></div>

## 詳細

1. `Mokuso`を持ち、`WalkOneCm`が5以上であるすべてのプレイヤーに`MokusoEnd`、`SprintOneCm`、`CrouchOneCm`を付与
2. `MokusoEnd`を持つプレイヤーが一人存在するとき、(-1920,8,-184)にある[黙想終了処理]({{site.baseurl}}/command/xCircuit4/xCircuit4_mokusoEndProcessing.html)を実行
3. `WindWall`が0以上であるプレイヤーが存在するとき、そのプレイヤーの座標上でパーティクルを表示し以下の事柄を実行
   1. `WindWall`が0以上であるプレイヤーから6m以内にいる`Driftable`を持つすべてのエンティティに{direction:[0d,-0.1d,0d]}を付与し、[WindWallMite]({{site.baseurl}}/entity/entity_entity.html#windwallmite)をそのエンティティと同座標上に召喚し、`Driftable`を削除
   2. `WindWall`が0以上であるプレイヤーから6m以内にいる`DriftableA`を持つすべてのエンティティの同座標上にいる`WindWallMite`を持つすべてのエンティティの`Lifetime`を2400にし、キルする
   3. `WindWall`が0以上であるプレイヤーから6m以内にいる`DriftableA`を持つすべてのエンティティの位置に[WindWall用ArmorStand]({{site.baseurl}}/entity/entity_entity.html#windwall用armorstand)を召喚し、`DriftableA`を削除
4. `MagicShield`を持ち、HurtTimeが0でないすべてのプレイヤーに`MagicSheildEnd`を付与
5. `MagicShield`を持つプレイヤーを一人選択し、(-1920,9,-184)にある[マジックシールド終了処理]({{site.baseurl}}/command/xCircuit4/xCircuit4_magicShieldEndProcessing.html)を実行
6. `Jump`が1以上であるすべてのプレイヤーの`WalkOneCm`と`FlyOneCm`を0に設定し、以下の事柄を実行
   1. `Choyaku`が2以上、`Jump`が1以上であり、跳躍エフェクトを持つすべてのプレイヤーに`ChoyakuJump`を付与
   2. `ChoyakuJump`を持つすべてのプレイヤーの座標上で演出を実行
   3. (-1899,4,-184)~(-1896,4,-184)にあるNo.22 ~ No.24のコマンドを実行可能状態に変更
   4. `ChoyakuJump`を持つすべてのプレイヤーから9m以内にいる`Enemy`を持つすべてのエンティティに`AddSkillTarget`を付与
7. (No.22 ~ No.24のコマンド)`ChoyakuJump`を持ち、`Choyaku`の値によってそのプレイヤーからある半径にいる`Enemy`を持つエンティティの座標上に、矢を召喚しダメージ与える。詳細は[跳躍によるダメージ処理](#跳躍によるダメージ処理)を参考
8. No.22 ~ No.24のコマンドブロックを実行不可状態に変更し、変更できたら`ChoyakuJump`を持つすべてのプレイヤーから`ChoyakuJump`を削除
9. `Jump`が1以上であるすべてのプレイヤーの`Jump`を0に設定
10. `HPChanging`が0以上であり、追加体力(AbsorptionAmount)が0より大きいすべてのプレイヤーに`Damaged`を付与
11. `Damaged`を持つプレイヤーを一人選択し、`DamageTaken`に以下の計算結果を代入、その後`Damaged`を削除

$$
\text{DamageTaken} = \begin{cases}
   \text{HP} - \text{HPChanging} & (\text{HP} \geq \text{HPChanging})\\
   0 & (\text{HP} < \text{HPChanging})
   \end{cases}
$$

11. `DamageTaken`が0以上であるプレイヤーから下に200 ~ 240 m の範囲にいるすべてのプレイヤーをキルする
12. `IronWill`(スコア)が1以上であり、`DamageTaken`が0以上であるすべてのプレイヤーに`IronWill`(タグ)を付与し、以下の事柄を実行
    1. (-1920,11,-184)にある[アイアンウィル継続判定]({{site.baseurl}}/command/xCircuit4/xCircuit4_ironWillContinueJudgment.html)を実行
    2. `IronWill`を持つすべてのプレイヤーの同座標上に`IronWillPoint`を持つAEC、[IronWillPoint]({{site.baseurl}}/entity/entity_entity.html#ironwillpoint)を召喚
    3. `IronWill`を持つプレイヤーと同座標上にいて、かつ最も近い`IronWillPoint`を持つエンティティをプレイヤーの座標上に移動
    4. `IronWill`を持つプレイヤーを半径4m以内にいて、かつ最も近い`IronWillPoint`を持つエンティティの座標上に移動

### 跳躍によるダメージ処理

|`Choyaku`の値|半径[m]|ダメージ|召喚される矢|
|:-:|:-:|-|:-:|
|2 ~ 7|3|15 (ハート7.5個分)|[旋風1]({{site.baseurl}}/entity/entity_entity.html#旋風1)|
|8 ~ 12|6|35 (ハート17.5個分)|[旋風2]({{site.baseurl}}/entity/entity_entity.html#旋風2)|
|13 ~|9|60 (ハート30個分)|[旋風3]({{site.baseurl}}/entity/entity_entity.html#旋風3)|
