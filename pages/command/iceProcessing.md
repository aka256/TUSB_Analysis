---
title: トカルト処理
tags: [コマンド,ディメンション,トカルトコルデ,敵Mob]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,トカルトコルデ,トカルト,トカルトエンカウント
last_updated: 2020/6/22
update: 2020/6/22
sidebar: mydoc_sidebar
permalink: iceProcessing.html
folder: command
datatable3c: true
---

<span class="label label-primary">位置 (-1920,12,-197)</span>

## About

トカルトコルデでの松明減少やトカルトエンカウントなどの処理を行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/tellraw @a[score_USBDimension_min=13,score_USBDimension=13,tag=ISFUnreached] [{"text":"[辺境調査員] おや？ 他の島からかい？ 珍しいねぇ。\n これを持ってお行き。\n ここは寒さが厳しいからね。凍え死んじまうよ。\n"},{"translate":"* %1\$s を64個受け取った。","with":[{"text":"松明","color":"aqua"}]},{"translate":"\n[辺境調査員] %2\$sは%1\$sで付け直せるからね。\n %3\$sが減ったら%1\$sのあるところまで戻るんだよ。","with":[{"text":"篝火","color":"gold"},{"text":"消えた松明","color":"aqua"},{"text":"松明","color":"aqua"}]}]|
|2|/give @a[score_USBDimension_min=13,score_USBDimension=13,tag=ISFUnreached] minecraft:torch 64|条件付き|
|3|/scoreboard players tag @a[score_USBDimension_min=13,score_USBDimension=13,tag=ISFUnreached] remove ISFUnreached|条件付き|
|4|/execute @a[tag=RemoveTorch] ~ ~ ~ detect ~ ~0.5 ~ minecraft:water -1 /scoreboard players tag @a[c=1] add RemoveTorchInWater|
|5|/scoreboard players tag @a[tag=RemoveTorchInWater] remove RemoveTorchInWater {RootVehicle:{Entity:{id:Boat}}}|条件付き|
|6|/clear @a[tag=RemoveTorchInWater] minecraft:torch 0 49|
|7|/scoreboard players set @a[tag=RemoveTorch] ItemCount -1|
|8|/clear @a[score_ItemCount=-1] minecraft:torch 0 1|条件付き|
|9|/effect @a[tag=RemoveTorch,score_ItemCount=0] minecraft:instant_damage 1 1 true|
|10|/execute @a[tag=RemoveTorch,score_ItemCount_min=1] ~ ~ ~ /summon Item ~ ~ ~ {Item:{id:minecraft:lever,Count:1b,tag:{display:{Name:"§7消えた松明",Lore:["§r火が消えてしまった松明。","§r篝火で火を付け直せる。"]}}},Tags:[OffTorch,TypeChecked]}|
|11|/scoreboard players tag @a[tag=RemoveTorch,score_ItemCount_min=1] add SaveTorch|条件付き|
|12|/execute @a[tag=RemoveTorchInWater,score_ItemCount_min=1] ~ ~ ~ /entitydata @e[dx=0,type=Item,tag=OffTorch,c=1] {Item:{Count:50b}}|条件付き|
|13|/scoreboard players tag @a[tag=RemoveTorchInWater,score_ItemCount_min=1] remove SaveTorch|条件付き|
|14|/scoreboard players tag @a[tag=RemoveTorchInWater] remove RemoveTorchInWater|
|15|/execute @a[tag=RemoveTorch] ~ ~ ~ /execute @e[r=16,type=Villager,tag=!Enemy,c=1] ~ ~ ~ /scoreboard players tag @a[r=16,tag=RemoveTorch] remove RemoveTorch|
|16|/execute @a[tag=RemoveTorch] ~ ~ ~ detect ~ ~8 ~ minecraft:air 0 /scoreboard players remove @a[c=1] ISFEncount 1|
|17|/execute @a[tag=RemoveTorch,score_ISFEncount=0] ~ ~ ~ detect ~ ~8 ~ minecraft:air 0 /stats entity @a[c=1] set AffectedBlocks @a[c=1] ISFEncount|条件付き|
|18|/execute @a[tag=RemoveTorch,score_ISFEncount=0] ~ ~ ~ detect ~ ~8 ~ minecraft:air 0 /testforblocks ~-1 ~1 ~-1 ~1 ~8 ~1 ~-1 ~1 ~-1 masked|条件付き|
|19|/stats entity @a[tag=RemoveTorch] clear AffectedBlocks|条件付き|
|20|/execute @a[tag=RemoveTorch,score_ISFEncount=0] ~ ~ ~ /scoreboard players operation @a[c=1] ISFEncount -= @a[c=1] RndMWC|条件付き|
|21|/scoreboard players tag @a[tag=RemoveTorch,score_ISFEncount=0] add UpdateRandom|条件付き|
|22|/scoreboard players operation @a[tag=RemoveTorch,score_ISFEncount=0] ISFEncount %= #60 Const|条件付き|
|23|/scoreboard players operation @a[tag=RemoveTorch,score_ISFEncount=0] ISFEncount -= #60 Const|条件付き|
|24|/scoreboard players tag @a[tag=RemoveTorch,score_ISFEncount=0] add ISFEncount|条件付き|
|25|/scoreboard players operation @a[tag=RemoveTorch,score_ISFEncount=0] ISFEncount *= #-1 Const|条件付き|
|26|/scoreboard players tag @a[tag=RemoveTorch] remove RemoveTorch|
|27|/execute @a[tag=ISFEncount] ~ ~7 ~ /summon MinecartSpawner ~ ~ ~ {MinSpawnDelay:0s,MaxSpawnDelay:0s,Delay:-1s,SpawnRange:0s,SpawnCount:2s,MaxNearbyEntities:999s,RequiredPlayerRange:16s,PortalCooldown:1,Tags:[CooldownRequired,TypeChecked],SpawnPotentials:[{Weight:6,Entity:{Age:6000s,id:"XPOrb",Passengers:[{CustomName:"ﾗﾝﾀﾞﾑﾑｰﾊﾞｰ",DeathTime:19s,NoGravity:1b,Size:1,Silent:1b,DeathLootTable:"empty",AbsorptionAmount:4f,Attributes:[{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.followRange",Base:0d}],ActiveEffects:[{Id:1b,Amplifier:127b,Duration:999},{Id:14b,Amplifier:127b,Duration:999},{Id:20b,Amplifier:127b,Duration:999}],id:"Slime",Passengers:[{id:"PigZombie",Silent:true,CustomName:フローズン,DeathLootTable:"usb:entities/ice/mob1",Anger:100s,IsBaby:true,Health:20f,Attributes:[{Name:generic.maxHealth,Base:20d},{Name:generic.movementSpeed,Base:0.35d},{Name:generic.attackDamage,Base:4d},{Name:generic.knockbackResistance,Base:0.3d},{Name:generic.followRange,Base:48d}],ActiveEffects:[{Id:8b,Amplifier:3b,Duration:2147483647,ShowParticles:false},{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false}],HandItems:[{id:"minecraft:ice",Damage:0s,Count:0b,tag:{ench:[{id:19s,lvl:2s}]}},{id:"minecraft:ice",Damage:0s,Count:0b,tag:{ench:[{id:19s,lvl:2s}]}}],ArmorItems:[{},{},{},{id:"minecraft:ice",Damage:0s,Count:0b,tag:{ench:[{id:7s,lvl:1s}]}}],Passengers:[{id:Guardian,Silent:true,DeathLootTable:"minecraft:empty",CustomName:"シャーベット",Health:100.00f,Attributes:[{Name:generic.maxHealth,Base:100.00d},{Name:generic.attackDamage,Base:4.00d},{Name:generic.followRange,Base:48.00d}],ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647}]}]}]}]}},{Weight:5,Entity:{Age:6000s,id:"XPOrb",Passengers:[{CustomName:"ﾗﾝﾀﾞﾑﾑｰﾊﾞｰ",DeathTime:19s,NoGravity:1b,Size:1,Silent:1b,DeathLootTable:"empty",AbsorptionAmount:4f,Attributes:[{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.followRange",Base:0d}],ActiveEffects:[{Id:1b,Amplifier:127b,Duration:999},{Id:14b,Amplifier:127b,Duration:999},{Id:20b,Amplifier:127b,Duration:999}],id:"Slime",Passengers:[{CustomName:"ピンクフロスト",Silent:1b,Health:150f,Attributes:[{Name:"generic.maxHealth",Base:150d},{Name:"generic.movementSpeed",Base:-0.2d,Modifiers:[{UUIDMost:8144722948526719024l,UUIDLeast:-7778190119041365872l,Amount:-2.1000000834465d,Operation:2,Name:"effect.moveSlowdown 13"}]},{Name:"generic.attackDamage",Base:5d},{Name:"generic.knockbackResistance",Base:0.1d},{Name:"generic.followRange",Base:64d}],ActiveEffects:[{Id:1b,Amplifier:2b,Duration:2147483647},{Id:8b,Amplifier:5b,Duration:2147483647},{Id:14b,Amplifier:127b,Duration:2147483647}],Lifetime:1400,id:"Endermite",ArmorItems:[{},{},{},{tag:{ench:[{id:2s,lvl:50s},{id:7s,lvl:1s}]},id:"minecraft:iron_helmet",Count:0b,Damage:0s}],ArmorDropChances:[0f,0f,0f,0f],Passengers:[{CustomName:"フリーザー",Potion:{id:"minecraft:lingering_potion",Count:1b,tag:{CustomPotionEffects:[{Id:8b,Amplifier:-10b,Duration:200,ShowParticles:1b},{Id:2b,Amplifier:10b,Duration:200,ShowParticles:1b},{Id:20b,Amplifier:2b,Duration:200,ShowParticles:1b}]}},id:"ThrownPotion",Passengers:[{WaitTime:1000,Particle:"snowshovel",CustomName:"DEATHCOUNT",Duration:150,Radius:0.1f,RadiusOnUse:0f,ReapplicationDelay:0,Effects:[{Id:7b,Amplifier:50b,Duration:20}],id:"AreaEffectCloud"}]},{CustomName:"フロストベアー",DeathLootTable:"usb:entities/ice/mob1",Health:350f,Attributes:[{Name:"generic.maxHealth",Base:350d},{Name:"generic.movementSpeed",Base:-0.36d,Modifiers:[{UUIDMost:8144722948526719024l,UUIDLeast:-7778190119041365872l,Amount:-2.1000000834465d,Operation:2,Name:"effect.moveSlowdown 13"}]},{Name:"generic.attackDamage",Base:15d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.followRange",Base:64d}],ActiveEffects:[{Id:1b,Amplifier:2b,Duration:2147483647},{Id:8b,Amplifier:5b,Duration:2147483647}],ArmorItems:[{},{},{},{tag:{ench:[{id:2s,lvl:50s},{id:7s,lvl:1s}]},id:"minecraft:iron_helmet",Count:0b,Damage:0s}],ArmorDropChances:[0f,0f,0f,0f],id:"PolarBear",Passengers:[{CustomName:"フリーザー",Potion:{id:"minecraft:lingering_potion",Count:1b,tag:{CustomPotionEffects:[{Id:8b,Amplifier:-10b,Duration:200,ShowParticles:1b},{Id:2b,Amplifier:10b,Duration:200,ShowParticles:1b},{Id:20b,Amplifier:2b,Duration:200,ShowParticles:1b}]}},id:"ThrownPotion",Passengers:[{WaitTime:1000,Particle:"snowshovel",CustomName:"DEATHCOUNT",Duration:150,Radius:0.1f,RadiusOnUse:0f,ReapplicationDelay:0,Effects:[{Id:7b,Amplifier:50b,Duration:20}],id:"AreaEffectCloud"},{Particle:"snowshovel",CustomName:"吹雪のオーラー",Duration:1020,Radius:1.5f,RadiusOnUse:0f,ReapplicationDelay:0,Effects:[],id:"AreaEffectCloud"}]}]}]}]}]}},{Weight:4,Entity:{Age:6000sid:"XPOrb",Passengers:[{CustomName:"ﾗﾝﾀﾞﾑﾑｰﾊﾞｰ",DeathTime:19s,NoGravity:1b,Size:1,Silent:1b,DeathLootTable:"empty",AbsorptionAmount:4f,Attributes:[{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.followRange",Base:0d}],ActiveEffects:[{Id:1b,Amplifier:127b,Duration:999},{Id:14b,Amplifier:127b,Duration:999},{Id:20b,Amplifier:127b,Duration:999}],id:"Slime",Passengers:[{id:Zombie,CustomName:"鉄を貪る者:弱",Silent:true,DeathLootTable:"usb:entities/ice/mob1",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false},{Id:25b,Amplifier:-128b,Duration:2147483647,ShowParticles:false}],HandItems:[{},{}],ArmorItems:[{},{},{id:minecraft:iron_chestplate,Damage:0s,Count:0b},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"e49a7f35-e644-476d-bd3d-ce2aca71455f",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZmFhMTc1MGY2ZWYzMTRiYjM2Njg2YTlmN2VjNzdkOTgzNzgzZjZhM2VjZGEyZTMyYzJmYWViMDM4M2Y3N2EzIn19fQ=="}]}}}}],Health:40f,Attributes:[{Name:"generic.maxHealth",Base:40d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.0d},{Name:"generic.movementSpeed",Base:0.4d},{Name:"generic.attackDamage",Base:2.0d}],Passengers:[{id:Guardian,Health:10f,Silent:true,DeathLootTable:"empty",CustomName:"照射装置",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false}],Attributes:[{Name:"generic.maxHealth",Base:10d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.0d},{Name:"generic.movementSpeed",Base:0.0d},{Name:"generic.attackDamage",Base:3.0d}],Passengers:[{id:AreaEffectCloud,Particle:"magicCrit",Duration:999,Radius:0.01f,CustomName:"プロテクト"}]}]}]}]}},{Weight:3,Entity:{Age:6000s,id:"XPOrb",Passengers:[{CustomName:"ﾗﾝﾀﾞﾑﾑｰﾊﾞｰ",DeathTime:19s,NoGravity:1b,Size:1,Silent:1b,DeathLootTable:"empty",AbsorptionAmount:4f,Attributes:[{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.followRange",Base:0d}],ActiveEffects:[{Id:1b,Amplifier:127b,Duration:999},{Id:14b,Amplifier:127b,Duration:999},{Id:20b,Amplifier:127b,Duration:999}],id:"Slime",Passengers:[{id:Zombie,CustomName:"鉄を貪る者",Silent:true,DeathLootTable:"usb:entities/ice/mob2",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false},{Id:25b,Amplifier:-128b,Duration:2147483647,ShowParticles:false}],HandItems:[{id:minecraft:diamond_hoe,Damage:0s,Count:0b},{id:minecraft:diamond_hoe,Damage:0s,Count:0b}],ArmorItems:[{},{},{id:minecraft:diamond_chestplate,Damage:0s,Count:0b},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"5421d342-fb73-4e7c-9be5-8a523a4da8fb",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWYzOTQ5Mjk4OTExZGQzZjEwYjc2NmYxMTJkOWFjNzkzMmQ5ZDVhN2Q4YWNhZjU4ZjQyODVjYTdmM2FhIn19fQ=="}]}}}}],Health:60f,Attributes:[{Name:"generic.maxHealth",Base:60d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.4d},{Name:"generic.movementSpeed",Base:0.3d},{Name:"generic.attackDamage",Base:4.0d}],Passengers:[{id:Guardian,Health:10f,Silent:true,DeathLootTable:"empty",CustomName:"照射装置",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false}],Attributes:[{Name:"generic.maxHealth",Base:10d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.0d},{Name:"generic.movementSpeed",Base:0.0d},{Name:"generic.attackDamage",Base:3.0d}],Passengers:[{id:AreaEffectCloud,Particle:"magicCrit",Duration:999,Radius:0.01f,CustomName:"プロテクト"}]}]}]}]}},{Weight:2,Entity:{Age:6000s,id:"XPOrb",Passengers:[{CustomName:"ﾗﾝﾀﾞﾑﾑｰﾊﾞｰ",DeathTime:19s,NoGravity:1b,Size:1,Silent:1b,DeathLootTable:"empty",AbsorptionAmount:4f,Attributes:[{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.followRange",Base:0d}],ActiveEffects:[{Id:1b,Amplifier:127b,Duration:999},{Id:14b,Amplifier:127b,Duration:999},{Id:20b,Amplifier:127b,Duration:999}],id:"Slime",Passengers:[{id:Zombie,CustomName:"鉄を貪る者:強",Silent:true,DeathLootTable:"usb:entities/ice/mob3",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false},{Id:25b,Amplifier:-128b,Duration:2147483647,ShowParticles:false}],HandItems:[{id:minecraft:iron_axe,Damage:0s,Count:0b},{id:minecraft:iron_axe,Damage:0s,Count:0b}],ArmorItems:[{},{id:minecraft:chainmail_leggings,Damage:0s,Count:0b},{id:minecraft:leather_chestplate,Damage:0s,Count:0b,tag:{display:{color:3749712}}},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"058673a2-6a98-4392-a7b5-5a44f4543f91",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTkwMjRkNmQ4MjYxOWYyN2YyNTk1NmRmMGJkNWI0NGE2ZDc2N2VlYjNmNmM2NGRkOTZjMWVhNzI1Y2RjZmIifX19"}]}}}}],Health:100f,Attributes:[{Name:"generic.maxHealth",Base:100d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.6d},{Name:"generic.movementSpeed",Base:0.2d},{Name:"generic.attackDamage",Base:10.0d}],Passengers:[{id:Guardian,Health:10f,Silent:true,DeathLootTable:"empty",CustomName:"照射装置",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false}],Attributes:[{Name:"generic.maxHealth",Base:10d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.0d},{Name:"generic.movementSpeed",Base:0.0d},{Name:"generic.attackDamage",Base:3.0d}],Passengers:[{id:AreaEffectCloud,Particle:"magicCrit",Duration:999,Radius:0.01f,CustomName:"プロテクト"}]}]}]}]}},{Weight:1,Entity:{Age:6000s,id:"XPOrb",Passengers:[{CustomName:"ﾗﾝﾀﾞﾑﾑｰﾊﾞｰ",DeathTime:19s,NoGravity:1b,Size:1,Silent:1b,DeathLootTable:"empty",AbsorptionAmount:4f,Attributes:[{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.followRange",Base:0d}],ActiveEffects:[{Id:1b,Amplifier:127b,Duration:999},{Id:14b,Amplifier:127b,Duration:999},{Id:20b,Amplifier:127b,Duration:999}],id:"Slime",Passengers:[{id:Zombie,CustomName:"鉄を貪る者:凶",Silent:true,DeathLootTable:"usb:entities/ice/mob4",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false},{Id:25b,Amplifier:-128b,Duration:2147483647,ShowParticles:false}],HandItems:[{id:minecraft:diamond_sword,Damage:0s,Count:0b},{id:minecraft:diamond_sword,Damage:0s,Count:0b}],ArmorItems:[{},{id:minecraft:diamond_leggings,Damage:0s,Count:0b},{id:minecraft:diamond_chestplate,Damage:0s,Count:0b},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"e10c2555-b690-4ece-90f0-155ddf1a79f7",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTlkMmM2ZWJmOGRhYzI1N2MzZTIyN2M5MWQ4ZTVlZDQwMzQ1ZWYyODQ2YzY3NWY4NmE4N2ViMjNkOGMxMiJ9fX0="}]}}}}],Health:200f,Attributes:[{Name:"generic.maxHealth",Base:200d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.8d},{Name:"generic.movementSpeed",Base:0.35d},{Name:"generic.attackDamage",Base:20.0d}],Passengers:[{id:Guardian,Health:10f,Silent:true,DeathLootTable:"empty",CustomName:"照射装置",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false}],Attributes:[{Name:"generic.maxHealth",Base:10d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.0d},{Name:"generic.movementSpeed",Base:0.0d},{Name:"generic.attackDamage",Base:3.0d}],Passengers:[{id:AreaEffectCloud,Particle:"magicCrit",Duration:999,Radius:0.01f,CustomName:"プロテクト"}]}]}]}]}}]}|
|28|/scoreboard players tag @a[tag=ISFEncount] remove ISFEncount|

<div class="datatable3c-end"></div>

## 詳細

1. `USBDimension`が13であり、`ISFUnreached`を持つプレイヤーが存在したとき、すべての対象のプレイヤーに辺境調査員からのメッセージを表示し、以下の事柄を実行
   - 1スタックの松明を与え、`ISFUnreached`を削除
2. `RemoveTorch`を持つプレイヤーの0.5m下に水があるとき、ボートに乗っていないとき`RemoveTorchInWater`を付与
3. `RemoveTorchInWater`を持つすべてのプレイヤーから松明を49本取り上げる
4. `RemoveTorch`を持つすべてのプレイヤーの`ItemCount`を-1に設定し、`ItemCount`が-1以上であるプレイヤーから松明を1本取り上げる
5. `RemoveTorch`を持ち、`ItemCount`が0以下であるすべてのプレイヤーに即時ダメージLv.1を付与
6. `RemoveTorch`を持ち、`ItemCount`が1以上であるプレイヤーが存在したら、すべての対象に[消えた松明](TUSB_Analysis_Item.html#消えた松明)を与え、以下の事柄を実行
   1. `SaveTorch`を付与
   2. `RemoveTorchInWater`を持つすべてのプレイヤーの同一座標上の`OffTorch`([消えた松明](TUSB_Analysis_Item.html#消えた松明)のタグ)を持つアイテムエンティティの個数を50個に設定
   3. `RemoveTorchInWater`を持つすべてのプレイヤーから`SaveTorch`を削除
7. `RemoveTorchInWater`を持つすべてのプレイヤーから`RemoveTorchInWater`を削除
8. `RemoveTorch`を持つすべてのプレイヤーから半径16m以内に`Enemy`を持たない村人一人が存在したら、その村人から半径16m以内で`RemoveTorch`を持つすべてのプレイヤーから`RemoveTorch`を削除
9. `RemoveTorch`を持つプレイヤーの8m上が空気ブロックの時、そのプレイヤーの`ISFEncount`から1を引いて以下の事柄を実行
   1. `RemoveTorch`を持ち、`ISFEncount`が0以下のすべてのプレイヤーの8m上が空気ブロックの時、そのプレイヤーの`ISFEncount`を1に設定
   2. `RemoveTorch`を持ち、`ISFEncount`が0以下のすべてのプレイヤーの8m上が空気ブロックであり、そのプレイヤーから相対座標で(-1,1,-1)から(1,8,1)の範囲の空気ブロック以外のブロックが(-1,1,-1)を起点とする範囲のブロックと一致するとき、以下の事柄を実行
      1. `RemoveTorch`を持つすべてのプレイヤーを対象としてコマンドによって書き換えられたブロック数をクリアする
      2. `RemoveTorch`を持ち、`ISFEncount`が0以下であるプレイヤーを一人選択し、`ISFEncount`から`RndMWC`を引く
      3. `RemoveTorch`を持ち、`ISFEncount`が0以下であるすべてのプレイヤーに対して以下の事柄を実行
         1. `UpdateRandom`を付与
         2. `ISFEnount`=(`ISFEncount`%60)-60
         3. `ISFEncount`が0以下の時、`ISEEncount`(タグ)を付与
         4. `ISFEncount`が0以下の時、`ISFEncount`の符号を反転
10. `RemoveTorch`を持つすべてのプレイヤーから`RemoveTorch`を削除
11. `ISFEncount`を持つすべてのプレイヤーの7m上に様々なモンスターを召喚するスポナー付きマインカートを召喚(以下の表を参考)
12. `ISFEncount`を持つすべてのプレイヤーから`ISFEncount`を削除

### エンカウントするモンスター

|モンスター名|Weight|
|-|-|
|シャーベット|6|
|フロストベアー|5|
|鉄を貪る者:弱|4|
|鉄を貪る者|3|
|鉄を貪る者:強|2|
|鉄を貪る者:凶|1|
