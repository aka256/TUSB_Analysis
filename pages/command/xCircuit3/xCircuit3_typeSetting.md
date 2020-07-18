---
title: タイプ設定
tags: [コマンド,敵Mob]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/7/7
update: 2020/07/14
sidebar: mydoc_sidebar
permalink: command/xCircuit3/xCircuit3_typeSetting.html
folder: command/3
datatable4c: true
summary: TypeCheckを持ったエンティティに対して、特定のタグの付与や野良の村人の処理、TNT、クリーパーの即爆破処理、そして攻略率に対する難易度上昇処理などを行っている。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,14,-188)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群3](/command/xCircuit3/xCircuit3_command.html)

`TypeCheck`を持ったエンティティに対して、特定のタグの付与や野良の村人の処理、TNT、クリーパーの即爆破処理、そして攻略率に対する難易度上昇処理などを行っている。

{% include important.html content="このコマンド群の中には[難易度調整](/command/xCircuit2/xCircuit2_difficultyAdjustment.html)から**直接コマンドを書き換えられるコマンドがある**ため、ここをいじる場合には注意すべし" %}

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|コメント|状態|
|:-:|-|-|-|
|1|/scoreboard players tag @e[tag=TypeCheck,team=!FriendlyTeam] add Enemy {Attributes:[{Name:generic.followRange}],Invulnerable:false}|タイプ設定 TypeCheck|
|2|/scoreboard players tag @e[tag=TypeCheck] add Poofable {Tags:[Enemy]}||条件付き|
|3|/fill ~1 ~1 ~ ~14 ~1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0||条件付き|
|4|/scoreboard players tag @e[tag=TypeCheck,type=!PigZombie] add BurnableEnemy {Tags:[Enemy]}||動力が必要|
|5|/scoreboard players tag @e[tag=TypeCheck,type=Blaze] remove BurnableEnemy||動力が必要|
|6|/scoreboard players tag @e[tag=TypeCheck,type=Ghast] remove BurnableEnemy||動力が必要|
|7|/scoreboard players tag @e[tag=TypeCheck,type=LavaSlime] remove BurnableEnemy||動力が必要|
|8|/scoreboard players tag @e[tag=TypeCheck,type=WitherBoss] remove BurnableEnemy||動力が必要|
|9|/scoreboard players tag @e[tag=TypeCheck,type=Skeleton] remove BurnableEnemy {SkeletonType:1b}||動力が必要|
|10|/scoreboard players tag @e[tag=TypeCheck,type=!Skeleton] add LivingEnemy {Tags:[Enemy]}||動力が必要|
|11|/scoreboard players tag @e[tag=TypeCheck,type=WitherBoss] remove LivingEnemy||動力が必要|
|12|/scoreboard players tag @e[tag=TypeCheck,type=EntityHorse] remove LivingEnemy {Type:3}||動力が必要|
|13|/scoreboard players tag @e[tag=TypeCheck,type=EntityHorse] remove LivingEnemy {Type:4}||動力が必要|
|13|/scoreboard players tag @e[tag=TypeCheck] remove LivingEnemy {ConversionTime:-1}||動力が必要|
|14|/scoreboard players tag @e[tag=TypeCheck,type=Slime] add Slimy||動力が必要|
|15|/scoreboard players tag @e[tag=TypeCheck,type=LavaSlime] add Slimy||動力が必要|
|16|/fill ~-13 ~1 ~ ~ ~1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0||動力が必要|
|17|/scoreboard players tag @e[tag=TypeCheck] add HasCloud {Tags:[Enemy],Passengers:[{id:AreaEffectCloud}]}||条件付き|
|18|/execute @e[tag=HasCloud] ~ ~ ~ /entitydata @e[dy=10,type=AreaEffectCloud,tag=TypeCheck] {Tags:[MobCloud,TypeChecked],Duration:28,Age:5,WaitTime:5,DurationOnUse:0,RadiusOnUse:0f,RadiusPerTick:0f,ReapplicationDelay:0}||条件付き|
|19|/scoreboard players tag @e[tag=HasCloud] remove HasCloud||条件付き|
|20|/scoreboard players tag @e[tag=TypeCheck] add FlyingObject {inTile:"minecraft:air"}|
|21|/scoreboard players tag @e[tag=TypeCheck] add Driftable {Tags:[FlyingObject]}||条件付き|
|22|/scoreboard players tag @e[tag=TypeCheck] add Arrow {Tags:[FlyingObject],inGround:false,life:0s}||条件付き|
|23|/scoreboard players tag @e[tag=TypeCheck] add DriftableA {Tags:[Arrow]}||条件付き|
|24|/scoreboard players tag @e[tag=TypeCheck,type=ShulkerBullet] add Driftable||条件付き|
|25|/execute @e[tag=TypeCheck,type=ShulkerBullet] ~ ~ ~ /effect @e[r=5,type=Shulker,c=1] minecraft:wither 1 1 true||条件付き|
|26|/scoreboard players tag @e[tag=TypeCheck,type=MinecartSpawner] add CooldownRequired|
|27|/scoreboard players tag @e[tag=TypeCheck,type=MinecartSpawner] remove CooldownRequired {PortalCooldown:0}||条件付き|
|28|/scoreboard players tag @e[tag=TypeCheck,type=MinecartSpawner] add FloatingRequired||条件付き|
|29|/scoreboard players tag @e[tag=TypeCheck,type=MinecartSpawner] remove FloatingRequired {Tags:[CooldownRequired]}||条件付き|
|30|/scoreboard players tag @e[tag=TypeCheck,type=Villager] add Vanillager {CareerLevel:0}|
|31|/entitydata @e[tag=Vanillager] {Profession:0,Career:3,CareerLevel:1,Offers:{Recipes:[{maxUses:7,buy:{id:"minecraft:wool",Count:22b,Damage:0s},sell:{id:"minecraft:emerald",Count:1b,Damage:0s},uses:0,rewardExp:1b},1:{maxUses:7,buy:{id:"minecraft:emerald",Count:4b,Damage:0s},sell:{id:"minecraft:shears",Count:1b,Damage:0s},uses:0,rewardExp:1b}]}}||条件付き|
|32|/scoreboard players tag @e[tag=Vanillager] remove Vanillager||条件付き|
|33|/entitydata @e[tag=TypeCheck,type=PrimedTnt] {Fuse:0s,Motion:[0d,0d,0d]}|
|34|/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1 0 true|強さ補正|
|35|/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:resistance 1 0 true||条件付き|
|36|/entitydata @e[tag=TypeCheck,type=PigZombie] {Anger:32767s}||条件付き|
|37|/scoreboard players tag @e[tag=TypeCheck,type=Creeper] add LongFuse {Fuse:30s}|
|38|/entitydata @e[tag=LongFuse,type=Creeper] {Fuse:15s}||条件付き|
|39|/scoreboard players tag @e[tag=LongFuse,type=Creeper] remove LongFuse||条件付き|
|40|/scoreboard players tag @e[tag=TypeCheck] add TypeChecked|
|41|/scoreboard players tag @e[tag=TypeCheck] remove TypeCheck||条件付き|

<div class="datatable4c-end"></div>

## 詳細

1. `TypeCheck`を持ち、`FriendlyTeam`に属さず、`generic.followRange`(索敵範囲)を持ち、`Invulnerable`(無敵)がfalseであるすべてのエンティティに`Enemy`を付与し、以下の事柄を実行
   1. `TypeCheck`と`Enemy`を持つすべてのエンティティに`Poofable`を付与
   2. `Enemy`と`TypeCheck`を持ち、[以下の表](#burnableenemyを持たないエンティティ)以外のすべてのエンティティに`BurnableEnemy`を付与
   3. `Enemy`と`TypeCheck`を持ち、[以下の表](#LivingEnemyを持たないエンティティ)以外のすべてのエンティティに`LivingEnemy`を付与
   4. `TypeCheck`を持つSlimeとLavaSlimeに`Slimy`を付与
   5. `TypeCheck`と`Enemy`を持ち、`Passengers`の中にAECが含まれるすべてのエンティティに`HasCloud`を付与
   6. `HasCloud`を持つすべてのエンティティから10m上の範囲に存在する`TypeCheck`を持つAECにデータタグを付与([以下](#aecに付与するデータタグ)参照)
   7. `HasCloud`を持つすべてのエンティティから`HasCloud`を削除
2. `TypeCheck`を持ち、空気中に命中している(凍結されたチャンクに滞留してしまった投擲物?)に`FlyingObject`を付与し、以下の事柄を実行
   1. `TypeCheck`と`FlyingObject`を持つすべてのエンティティに`Driftable`を付与
   2. `TypeCheck`と`FlyingObject`を持ち、地面に刺さっていなく、動いているすべてのエンティティに`Arrow`と`DriftableA`を付与
   3. `TypeCheck`を持つすべてのShulkerBulletに`Driftable`を付与し、そこから半径5m以内にいる一体のShulkerにウィザーLv.1 1tick を付与
3. `TypeCheck`を持つすべてのMinecartSpawnerに`CooldownRequired`を付与し、以下の事柄を実行
   1. `TypeCheck`を持ち、`PortalCooldown`が0であるすべてのMinecartSpawnerから`CooldownRequired`を削除
   2. `TypeCheck`を持ち、`CooldownRequired`を持たないすべてのMinecartSpawnerに`FloatingRequired`を付与
4. `TypeCheck`を持ち、`CareerLevel`(村人の取引レベル)が0であるVillagerに`Vanillager`(VanilaとVillagerを掛けてるんですかね)を付与し、以下の事柄を実行
   1. `Vanillager`を持つすべてのエンティティにデータタグを付与([以下](#vanillagerに付与するデータタグ)参照)
   2. `Vanillager`を持つすべてのエンティティから`Vanillager`を削除
5. `TypeCheck`を持つPrimedTntに{Fuse:0s,Motion:[0d,0d,0d]}を付与(**要は即爆破TNTの処理**)
6. `TypeCheck`を持ち、チームに含まれていないプレイヤー以外のすべてのエンティティに移動速度上昇と耐性をそれぞれ付与。**なお、この二つのステータス効果は[難易度調整](/command/xCircuit2/xCircuit2_difficultyAdjustment.html)によって書き換えられる。**また、以下の事柄を実行
   1. `TypeCheck`を持つPigZombieの`Anger`を32767に設定
7. `TypeCheck`を持ち、`Fuse`が30であるCreeperに`LongFuse`を付与し、以下の事柄を実行
   1. `LongFuse`を持つ`Creeper`の`Fuse`を15に設定
   2. `LongFuse`を持つ`Creeper`から`LongFuse`を削除
8. `TypeCheck`を持つすべてのエンティティに`TypeChecked`を付与し、`TypeCheck`を削除

### BurnableEnemyを持たないエンティティ

|No.|Type|
|:-:|-|
|1|PigZombie|
|2|Blaze|
|3|Ghast|
|4|LavaSlime|
|5|WitherBoss|
|6|WitherSkelton|

### LivingEnemyを持たないエンティティ

|No.|Type|備考|
|:-:|-|-|
|1|Skelton|
|2|WitherBoss|
|3|ZombieHorse|
|4|SkeltonHorse|
|5|Zombie|`ConversionTime`(ゾンビが村人ゾンビに戻るまでのtick)が-1|

### AECに付与するデータタグ

|TagName|Value|
|-|-|
|Tags|MobCloud,TypeChecked|
|Duration|28|
|Age|5|
|WaitTime|5|
|DurationOnUse|0|
|RadiusOnUse|0|
|RadiusPerTick|0|
|ReapplicationDelay|0|

### Vanillagerに付与するデータタグ

|TagName|Value|備考|
|-|-|-|
|Profession|0|農民のスキン|
|Carrer|3|
|CarrerLevel|1|
|Offers|下記参照|取引内容|

#### Vanillagerの取引内容

|買い取るアイテム|個数||売るアイテム|個数|
|-|-|-|-|-|
|羊毛|22|->|エメラルド|1|
|エメラルド|4|->|ハサミ|1|
