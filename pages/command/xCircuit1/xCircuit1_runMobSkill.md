---
title: 敵スキル実行
tags: [コマンド,敵Mob,嫌な予感]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,深淵様,ホワイトライダー,ブラックライダー,レッドライダー,ペイルライダー
last_updated: 2020/6/20
update: 2020-06-20 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit1/xCircuit1_runMobSkill.html
folder: xCircuit1
datatable4c: true
summary: 深淵様やライダー系などの敵のスキルやワープなどを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,14,-197)

<span class="tagBlack">呼び出し元</span> [時間経過]({{site.baseurl}}/command/xCircuit1/xCircuit1_timeElapsed.html)

深淵様やライダー系などの敵のスキルやワープなどを実行する。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|コメント|状態|
|:-:|-|-|-|
|1|/execute @e[tag=Shinen] ~ ~ ~ /execute @e[dx=0,tag=Shinen,score_MobCastTime_min=0,score_MobCastTime=4,c=1] ~ ~ ~ /me はテレポートを唱えた！|敵スキル実行 MobCastTime|
|2|/execute @e[tag=Shinen] ~ ~ ~ /execute @e[dx=0,tag=Shinen,score_MobCastTime_min=0,score_MobCastTime=4,c=1] ~ ~ ~ /tp @e[dx=0,c=1] @p[r=80]||条件付き|
|3|/execute @e[tag=Shinen] ~ ~ ~ /execute @e[dx=0,tag=Shinen,score_MobCastTime_min=5,score_MobCastTime=7,c=1] ~ ~ ~ /me はポリュートを唱えた！|
|4|/execute @e[tag=Shinen] ~ ~ ~ /execute @e[dx=0,tag=Shinen,score_MobCastTime_min=5,score_MobCastTime=7,c=1] ~ ~ ~ /summon AreaEffectCloud ~ ~0.5 ~ {ReapplicantDelay:20,Radius:0.5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:1200,RadiusPerTick:0.005f,WaitTime:0,Age:0,CustomNameVisible:true,Particle:mobSpell,Effects:[{Id:17b,Duration:40,Amplifier:9b,ShowParticles:true}],CustomName:" §d§l☣"}||条件付き|
|5|/execute @e[tag=Shinen] ~ ~ ~ /execute @e[dx=0,tag=Shinen,score_MobCastTime_min=8,score_MobCastTime=10,c=1] ~ ~ ~ /me はアビスセデュースを唱えた！|
|6|/execute @e[tag=Shinen] ~ ~ ~ /execute @e[dx=0,tag=Shinen,score_MobCastTime_min=8,score_MobCastTime=10,c=1] ~ ~ ~ /execute @a[r=32] ~ ~ ~ /summon AreaEffectCloud ~ ~1 ~ {Effects:[{Id:25b,Duration:400,Amplifier:-19b,ShowParticles:true}],ReapplicantDelay:0,Radius:1f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2,RadiusPerTick:0f,WaitTime:5,Age:0,Particle:take,Tags:[TypeChecked]}||条件付き|
|7|/execute @e[tag=Shinen] ~ ~ ~ /execute @e[dx=0,tag=Shinen,score_MobCastTime_min=11,score_MobCastTime=14,c=1] ~ ~ ~ /me はアシッドスプレッドを唱えた！|
|8|/execute @e[tag=Shinen] ~ ~ ~ /execute @e[dx=0,tag=Shinen,score_MobCastTime_min=11,score_MobCastTime=14,c=1] ~ ~ ~ /effect @a[r=16] minecraft:instant_damage 200||条件付き|
|9|/execute @e[tag=Shinen] ~ ~ ~ /execute @e[dx=0,tag=Shinen,score_MobCastTime_min=15,score_MobCastTime=19,c=1] ~ ~ ~ /me はリーンカーネイトを唱えた！|
|10|長いので下に移動||条件付き|
|11|/execute @e[tag=Magma] ~ ~ ~ /execute @e[dx=0,tag=Magma,score_MobCastTime_min=0,score_MobCastTime=7,c=1] ~ ~ ~ /me はベキラマを唱えた！|
|12|/execute @e[tag=Magma] ~ ~ ~ /execute @e[dx=0,tag=Magma,score_MobCastTime_min=0,score_MobCastTime=7,c=1] ~ ~ ~ /summon MinecartSpawner ~ ~1 ~ {Invulnerable:true,MinSpawnDelay:32000s,MaxSpawnDelay:32000s,SpawnCount:5s,SpawnRange:10s,RequiredPlayerRange:99s,MaxNearbyEntities:999s,SpawnPotentials:[{Weight:1}],Motion:[0d,0.05d,0d],SpawnData:{id:Fireball,direction:[0d,1d,0d],ExplosionPower:1,Passengers:[{id:Endermite,Health:0f,DeathTime:19s}]},Tags:[CooldownRequired,TypeChecked],PortalCooldown:1,Delay:0s}||条件付き|
|13|/execute @e[tag=Magma] ~ ~ ~ /execute @e[dx=0,tag=Magma,score_MobCastTime_min=8,score_MobCastTime=19,c=1] ~ ~ ~ /me は逃げ出した！|
|14|/execute @e[tag=Magma] ~ ~ ~ /entitydata @e[dx=0,tag=Magma,score_MobCastTime_min=8,score_MobCastTime=19,c=1] {AbsorptionAmount:0f,DeathLootTable:"minecraft:empty"}||条件付き|
|15|/execute @e[tag=WarpOnly] ~ ~ ~ /execute @e[dx=0,tag=WarpOnly,score_MobCastTime_min=0,score_MobCastTime=19,c=1] ~ ~ ~ /me はワープした！|Mobtp メッセージ|
|16|/execute @e[tag=WarpOnly] ~ ~ ~ /execute @e[dx=0,tag=WarpOnly,score_MobCastTime_min=0,score_MobCastTime=19,c=1] ~ ~ ~ /tp @e[dx=0,c=1] @p[r=80]||条件付き|
|17|/execute @e[tag=WhiteRider] ~ ~ ~ /execute @e[dx=0,tag=WhiteRider,score_MobCastTime_min=0,score_MobCastTime=11,c=1] ~ ~ ~ /me は死天召喚を唱えた！|
|18|長いので下に移動||条件付き|
|19|/execute @e[tag=WhiteRider] ~ ~ ~ /execute @e[dx=0,tag=WhiteRider,score_MobCastTime_min=8,score_MobCastTime=19,c=1] ~ ~ ~ /me は勝利の上の支配を唱えた！|
|20|/execute @e[tag=WhiteRider] ~ ~ ~ /execute @e[dx=0,tag=WhiteRider,score_MobCastTime_min=8,score_MobCastTime=19,c=1] ~ ~ ~ /execute @a[r=32] ~ ~ ~ /summon Endermite ~ ~1.8 ~ {Lifetime:2398,NoAI:true,Passengers:[{id:XPOrb,Age:6000s,Passengers:[{id:ThrownPotion,Potion:{id:splash_potion,tag:{CustomPotionEffects:[{Id:2b,Duration:400,Amplifier:9b},{Id:4b,Duration:400,Amplifier:9b},{Id:8b,Duration:400,Amplifier:-11b}]}},Motion:[0d,0.7d,0d]}]}]}||条件付き|
|21|/execute @e[tag=RedRider] ~ ~ ~ /execute @e[dx=0,tag=RedRider,score_MobCastTime_min=0,score_MobCastTime=11,c=1] ~ ~ ~ /me は死兵召喚を唱えた！|
|22|長いので下に移動||条件付き|
|23|/execute @e[tag=RedRider] ~ ~ ~ /execute @e[dx=0,tag=RedRider,score_MobCastTime_min=8,score_MobCastTime=19,c=1] ~ ~ ~ /me は更なる戦を唱えた！|
|24|/execute @e[tag=RedRider] ~ ~ ~ /execute @e[dx=0,tag=RedRider,score_MobCastTime_min=8,score_MobCastTime=19,c=1] ~ ~ ~ /tp @e[r=32,type=PigZombie,tag=!SkillMob] @e[dx=0,c=1]||条件付き|
|25|/execute @e[tag=RedRider] ~ ~ ~ /execute @e[dx=0,tag=RedRider,score_MobCastTime_min=8,score_MobCastTime=19,c=1] ~ ~ ~ /summon Endermite ~ ~1.8 ~ {Lifetime:2398,NoAI:true,Passengers:[{id:XPOrb,Age:6000s,Passengers:[{id:ThrownPotion,Potion:{id:splash_potion,tag:{CustomPotionEffects:[{Id:1b,Duration:200,Amplifier:9b},{Id:5b,Duration:200,Amplifier:9b},{Id:19b,Duration:40,Amplifier:7b}]}},Motion:[0d,0.7d,0d]}]}]}||条件付き|
|26|/execute @e[tag=BlackRider] ~ ~ ~ /execute @e[dx=0,tag=BlackRider,score_MobCastTime_min=0,score_MobCastTime=11,c=1] ~ ~ ~ /me は死霊召喚を唱えた！|
|27|長いので下に移動||条件付き|
|28|/execute @e[tag=BlackRider] ~ ~ ~ /execute @e[dx=0,tag=BlackRider,score_MobCastTime_min=8,score_MobCastTime=19,c=1] ~ ~ ~ /me はソウルバランスを唱えた！|
|29|/execute @e[tag=BlackRider] ~ ~ ~ /execute @e[dx=0,tag=BlackRider,score_MobCastTime_min=8,score_MobCastTime=19,c=1] ~ ~ ~ /scoreboard players operation @a[r=32] MP /= #10 Const||条件付き|
|30|/execute @e[tag=BlackRider] ~ ~ ~ /execute @e[dx=0,tag=BlackRider,score_MobCastTime_min=8,score_MobCastTime=19,c=1] ~ ~ ~ /scoreboard players set @a[r=32] MPMaxFlag 0||条件付き|
|31|/execute @e[tag=PaleRider] ~ ~ ~ /execute @e[dx=0,tag=PaleRider,score_MobCastTime_min=0,score_MobCastTime=11,c=1] ~ ~ ~ /me は死魔召喚を唱えた！|
|32|長いので下に移動||条件付き|
|33|/execute @e[tag=PaleRider] ~ ~ ~ /execute @e[dx=0,tag=PaleRider,score_MobCastTime_min=8,score_MobCastTime=19,c=1] ~ ~ ~ /me はペストクロップを唱えた！|
|34|/execute @e[tag=PaleRider] ~ ~ ~ /execute @e[dx=0,tag=PaleRider,score_MobCastTime_min=8,score_MobCastTime=19,c=1] ~ ~ ~ /scoreboard players set @a[r=32] kill 2 {ActiveEffects:[{Id:19b}]}||条件付き|
|35|/scoreboard players operation #Random Global = @a[c=1] RndMWC|
|36|/scoreboard players tag @a[c=1] add UpdateRandom|
|37|/scoreboard players operation #Random Global %= #100 Const|
|38|/execute @e[tag=SkillMob] ~ ~ ~ /scoreboard players set @e[dx=0,tag=SkillMob,score_MobCastTime=19,c=1] MobCastTime 1|
|39|/execute @e[tag=FastCast] ~ ~ ~ /scoreboard players set @e[dx=0,tag=FastCast,score_MobCastTime=19,c=1] MobCastTime 3||条件付き|
|40|/execute @e[tag=SkillMob] ~ ~ ~ /scoreboard players operation @e[dx=0,tag=SkillMob,score_MobCastTime=19,c=1] MobCastTime *= #Random Global|

<div class="datatable4c-end"></div>

### No.10

```minecraftcommand
/execute @e[tag=Shinen] ~ ~ ~ /execute @e[dx=0,tag=Shinen,score_MobCastTime_min=15,score_MobCastTime=19,c=1] ~ ~ ~ /summon MinecartSpawner ~ ~1 ~ {Invulnerable:true,MinSpawnDelay:0s,MaxSpawnDelay:0s,SpawnCount:3s,SpawnRange:3s,RequiredPlayerRange:99s,MaxNearbyEntities:16s,Motion:[0d,0.05d,0d],SpawnPotentials:[ {Weight:1,Entity:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Skeleton,SkeletonType:1b,CustomName:"Superbia",CustomNameVisible:true,ActiveEffects:[{Id:8b,Amplifier:4b,Duration:2147483647}],HandItems:[{id:"minecraft:iron_sword",Count:0b,tag:{ench:[{id:20s,lvl:25s}]}}],ArmorItems:[{},{},{id:minecraft:leather_chestplate,Count:0b,tag:{display:{color:0}}},{id:minecraft:chorus_flower,Count:0b}],Health:270f,Attributes:[{Name:"generic.maxHealth",Base:270d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.movementSpeed",Base:0.2d},{Name:"generic.attackDamage",Base:30.0d}]}]}}, {Weight:1,Entity:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Skeleton,CustomName:"Ira",CustomNameVisible:true,HandItems:[{id:minecraft:bow,Count:0b,tag:{ench:[{id:50s,lvl:25s}]}}],ArmorItems:[{},{},{id:minecraft:leather_chestplate,Count:0b,tag:{display:{color:8388608}}},{id:minecraft:chorus_flower,Count:0b}],Health:210f,Attributes:[{Name:"generic.maxHealth",Base:210d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0d},{Name:"generic.movementSpeed",Base:0.45d},{Name:"generic.attackDamage",Base:10.0d}]}]}}, {Weight:1,Entity:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Skeleton,CustomName:"Invidia",CustomNameVisible:true,HandItems:[{id:minecraft:stone_sword,Count:0b}],ArmorItems:[{},{},{id:minecraft:leather_chestplate,Count:0b,tag:{display:{color:32835}}},{id:minecraft:chorus_flower,Count:0b}],Health:180f,Attributes:[{Name:"generic.maxHealth",Base:180d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.5d},{Name:"generic.movementSpeed",Base:0.4d},{Name:"generic.attackDamage",Base:10.0d}],Passengers:[{id:AreaEffectCloud,CustomName:"Invidia",Effects:[{Id:19b,Amplifier:4b,Duration:25}],ReapplicantDelay:0,Radius:2f,RadiusOnUse:0,DurationOnUse:0f,Duration:25,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:mobSpell}]}]}}, {Weight:1,Entity:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Skeleton,CustomName:"Pigritia",CustomNameVisible:true,HandItems:[{id:minecraft:bow,Count:0b,tag:{ench:[{id:49s,lvl:5s}]}}],ArmorItems:[{},{},{id:minecraft:leather_chestplate,Count:0b,tag:{ench:[{id:7s,lvl:3s}],display:{color:32896}}},{id:minecraft:chorus_flower,Count:0b}],Health:150f,Attributes:[{Name:"generic.maxHealth",Base:150d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.movementSpeed",Base:0.05d},{Name:"generic.attackDamage",Base:5.0d}],Passengers:[{id:Skeleton,CustomName:"Acedia",CustomNameVisible:true,HandItems:[{id:minecraft:bow,Count:0b,tag:{ench:[{id:49s,lvl:5s}]}}],ArmorItems:[{},{},{id:minecraft:leather_chestplate,Count:0b,tag:{ench:[{id:7s,lvl:3s}],display:{color:32896}}},{id:minecraft:chorus_flower,Count:0b}],Health:150f,Attributes:[{Name:"generic.maxHealth",Base:150d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.movementSpeed",Base:0.05d},{Name:"generic.attackDamage",Base:5.0d}]}]}]}}, {Weight:1,Entity:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Skeleton,CanPickUpLoot:1b,CustomName:"Avaritia",CustomNameVisible:true,HandItems:[{id:minecraft:diamond_sword,Count:0b}],ArmorItems:[{},{},{id:minecraft:leather_chestplate,Count:0b,tag:{display:{color:13952}}},{id:minecraft:chorus_flower,Count:0b}],Health:180f,Attributes:[{Name:"generic.maxHealth",Base:180d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.movementSpeed",Base:0.25d},{Name:"generic.attackDamage",Base:20.0d}]}]}}, {Weight:1,Entity:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Skeleton,CustomName:"Gula",CustomNameVisible:true,HandItems:[{id:minecraft:cake,Count:0b}],ArmorItems:[{},{},{id:minecraft:leather_chestplate,Count:0b,tag:{display:{color:8413952}}},{id:minecraft:chorus_flower,Count:0b}],Health:60f,Attributes:[{Name:"generic.maxHealth",Base:60d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.movementSpeed",Base:0.25d},{Name:"generic.attackDamage",Base:25.0d}],Passengers:[{id:Guardian,CustomName:"Piscis",CustomNameVisible:true,Silent:true,Health:90f,Attributes:[{Name:generic.maxHealth,Base:90.0d},{Name:"generic.followRange",Base:80d}],ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647}]}]}]}}, {Weight:1,Entity:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Skeleton,CustomName:"Luxuria",CustomNameVisible:true,HandItems:[{id:minecraft:red_flower,Count:0b}],ArmorItems:[{},{},{id:minecraft:leather_chestplate,Count:0b,tag:{display:{color:8388704}}},{id:minecraft:chorus_flower,Count:0b}],Health:5f,Attributes:[{Name:"generic.maxHealth",Base:5d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.movementSpeed",Base:0.5d},{Name:"generic.attackDamage",Base:20.0d}],Passengers:[{id:AreaEffectCloud,CustomName:"Luxuria",Effects:[{Id:7b,Amplifier:4b,Duration:25},{Id:9b,Amplifier:0b,Duration:25},{Id:15b,Amplifier:0b,Duration:25},{Id:17b,Amplifier:9b,Duration:25}],ReapplicantDelay:0,Radius:2f,RadiusOnUse:0,DurationOnUse:0f,Duration:25,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:mobSpell}]}]}}], Tags:[CooldownRequired,TypeChecked],PortalCooldown:1,Delay:-1s}
```

### No.18

```minecraftcommand
/execute @e[tag=WhiteRider] ~ ~ ~ /execute @e[dx=0,tag=WhiteRider,score_MobCastTime_min=0,score_MobCastTime=11,c=1] ~ ~ ~ /summon MinecartSpawner ~ ~1 ~ {Invulnerable:true,MinSpawnDelay:0s,MaxSpawnDelay:0s,SpawnCount:1s,SpawnRange:3s,RequiredPlayerRange:99s,MaxNearbyEntities:16s,Motion:[0d,0.05d,0d],SpawnPotentials:[{Weight:1,Entity:{id:"Villager",Health:0f,DeathTime:19s,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Passengers:[{id:Skeleton,SkeletonType:0b,CustomName:"ﾎﾜｲﾄｼｭｰﾀｰ",Motion:[0d,2d,0d],ActiveEffects:[{Id:25b,Amplifier:-1b,Duration:10000,ShowParticles:false}],HandItems:[{id:"minecraft:bow",Count:0b,tag:{ench:[{id:50s,lvl:1s}]}},{}],ArmorItems:[{},{},{},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"a75928d1-3fd1-4696-bc0d-bcc2c0f1b241",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvM2JkMmUxOTllMjc5ZWRjNDgxMThjMTg1OTdhYjgwMWNhMmJhMmY3OGM5NzExNTVkNGQ2MGYxZmI0MGRlNjY0OSJ9fX0="}]}}}}],Health:40f,Attributes:[{Name:"generic.maxHealth",Base:40d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0d},{Name:"generic.movementSpeed",Base:1d},{Name:"generic.attackDamage",Base:60.0d}]}]}} , {Weight:1,Entity:{id:"Villager",Health:0f,DeathTime:19s,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Passengers:[{id:Skeleton,SkeletonType:1b,CustomName:"ﾎﾜｲﾄｱﾀｯｶｰ",ActiveEffects:[{Id:25b,Amplifier:-2b,Duration:100000,ShowParticles:false},{Id:8b,Amplifier:1b,Duration:100000,ShowParticles:false}],HandItems:[{id:"minecraft:stone_sword",Count:0b,tag:{ench:[{id:20s,lvl:1s}]}},{}],ArmorItems:[{},{},{},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"29ebbfac-94b1-4f08-86ea-7f2838e1a5bd",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvY2FmMTEwMjRlY2Y5YWM5Yjc4OTQ3NWZmNGExMzVmNzFkYTA0MzJlYTlmZjY0YzE3ZWZlMzViMjkzMzRmZCJ9fX0="}]}}}}],Health:40f,Attributes:[{Name:"generic.maxHealth",Base:40d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0d},{Name:"generic.movementSpeed",Base:0.4d},{Name:"generic.attackDamage",Base:20.0d}]}]}}],PortalCooldown:4,Delay:-1s}
```

### No.22

```minecraftcommand
/execute @e[tag=RedRider] ~ ~ ~ /execute @e[dx=0,tag=RedRider,score_MobCastTime_min=0,score_MobCastTime=11,c=1] ~ ~ ~ /summon MinecartSpawner ~ ~1 ~ {Invulnerable:true,MinSpawnDelay:0s,MaxSpawnDelay:0s,SpawnCount:1s,SpawnRange:3s,RequiredPlayerRange:99s,MaxNearbyEntities:16s,Motion:[0d,0.05d,0d],SpawnPotentials:[{Weight:1,Entity:{id:"Villager",Health:0f,DeathTime:19s,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Passengers:[{id:PigZombie,CustomName:"ﾚｯﾄﾞﾋﾟｯｸﾞﾏﾝ",Anger:32767s,HandItems:[{id:"minecraft:golden_sword",Count:0b,tag:{ench:[{id:20s,lvl:3s}]}},{id:"minecraft:shield",Count:0b,tag:{BlockEntityTag:{Base:4,Patterns:[{Pattern:gra,Color:1},{Pattern:ss,Color:0},{Pattern:cbo,Color:0}]}}}],ArmorItems:[{},{},{id:minecraft:leather_chestplate,Count:0b,tag:{display:{color:0}}},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"e49cc289-5e35-4a37-9b08-98ef5cf05382",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTg5OTk5YjRkODE0NWJhNjc3YjY5ZmI5MTNiOWE2YTY3MTlkMWM2ZDE3ZWM0ZDNlMjRiZThiMjIxZDY3MjQzIn19fQ=="}]}}}}],Health:40f,Attributes:[{Name:"generic.maxHealth",Base:40d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.5d},{Name:"generic.movementSpeed",Base:0.5d},{Name:"generic.attackDamage",Base:10.0d}]}]}} , {Weight:1,Entity:{id:"Villager",Health:0f,DeathTime:19s,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Passengers:[{id:PigZombie,CustomName:"ﾚｯﾄﾞﾍﾞｲﾋﾞｰ",Anger:32767s,IsBaby:true,HandItems:[{id:"minecraft:bone",Count:0b,tag:{ench:[{id:20s,lvl:3s}]}},{id:"minecraft:skull",Damage:3s,Count:0b,tag:{SkullOwner:{Id:"c892c147-37db-45ef-88d5-980173fc72f8",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNGIyNjY3YTc1YzJjODNiODVjNzBlYjA3YjQ4MzNmZjY3MjEzMmUxZWNhNGFmNjk4NjI0NjVmN2EzYmYzOWE2In19fQ=="}]}}}}],ArmorItems:[{},{},{id:minecraft:leather_chestplate,Count:0b,tag:{display:{color:0}}},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"e49cc289-5e35-4a37-9b08-98ef5cf05382",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTg5OTk5YjRkODE0NWJhNjc3YjY5ZmI5MTNiOWE2YTY3MTlkMWM2ZDE3ZWM0ZDNlMjRiZThiMjIxZDY3MjQzIn19fQ=="}]}}}}],Health:40f,Attributes:[{Name:"generic.maxHealth",Base:40d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.movementSpeed",Base:0.1d},{Name:"generic.attackDamage",Base:25.0d}]}]}}],Tags:[CooldownRequired,TypeChecked],PortalCooldown:3,Delay:-1s}
```

### No.27

```minecraftcommand
/execute @e[tag=BlackRider] ~ ~ ~ /execute @e[dx=0,tag=BlackRider,score_MobCastTime_min=0,score_MobCastTime=11,c=1] ~ ~ ~ /summon MinecartSpawner ~ ~1 ~ {Invulnerable:true,MinSpawnDelay:0s,MaxSpawnDelay:0s,SpawnCount:1s,SpawnRange:3s,RequiredPlayerRange:99s,MaxNearbyEntities:16s,Motion:[0d,0.05d,0d],SpawnPotentials:[{Weight:1,Entity:{id:"Villager",Health:0f,DeathTime:19s,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Passengers:[{id:Zombie,CustomName:"レギオン",IsBaby:true,IsVillager:true,VillagerProfession:5,ActiveEffects:[{Id:25b,Amplifier:-127b,Duration:100000,ShowParticles:false},{Id:8b,Amplifier:4b,Duration:100000,ShowParticles:false}],HandItems:[{},{}],ArmorItems:[{},{},{},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"b622d670-e628-4476-a206-d0c05f76797d",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjJjNThhMTQ4N2JjOTUzZmFhNjg3ODk2YWFhZWFjZTI3MWI0YTEyMGUyNzZmYTlkMmQ2ZWE4YjY2NTYxMmMifX19"}]}}}}],Health:40f,Attributes:[{Name:"generic.maxHealth",Base:40d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0d},{Name:"generic.movementSpeed",Base:0.2d},{Name:"generic.attackDamage",Base:20.0d}],Passengers:[{id:AreaEffectCloud,Particle:"portal",Duration:1000,Radius:1.5f,CustomName:"リョウ",Effects:[{Id:17b,Amplifier:10b,Duration:120,ShowParticles:true},{Id:9b,Amplifier:0b,Duration:120,ShowParticles:true}]}]}]}},{Weight:1,Entity:{id:"Villager",Health:0f,DeathTime:19s,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Passengers:[{id:Zombie,CustomName:"ギーガ",IsVillager:true,VillagerProfession:3,HandItems:[{},{}],ArmorItems:[{},{},{},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"670dcff0-1f67-4c9e-a440-d9d98facbdd3",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNGEzNmYxOWMzMDVjY2RiMzZlNDdiMmRhZGNmNTllNmFkOGRkOTNjZGY0NzQ4Nzc1ZDVhNmVjNDFlZDk3ZiJ9fX0="}]}}}}],Health:40f,Attributes:[{Name:"generic.maxHealth",Base:40d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.movementSpeed",Base:1d},{Name:"generic.attackDamage",Base:30.0d}],Passengers:[{id:AreaEffectCloud,Particle:"portal",Duration:1000,Radius:1.5f,CustomName:"メン",Effects:[{Id:17b,Amplifier:3b,Duration:120,ShowParticles:true},{Id:2b,Amplifier:4b,Duration:120,ShowParticles:true}]}]}]}},{Weight:1,Entity:{id:"Villager",Health:0f,DeathTime:19s,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Passengers:[{id:Zombie,CustomName:"メーガ",HandItems:[{},{}],ArmorItems:[{},{id:minecraft:leather_leggings,tag:{display:{color:4473924}}},{id:leather_chestplate,tag:{display:{color:4473924}}},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"90e51213-80fc-4183-9d5c-ec9cfa03ff16",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMmFlZjIzM2NkNmZkOTE4NzhkNTEzNzY2ZWRjMjNkZjMwODI3OGMwY2U4MDU5NzZlOTY5YzM5NDUxNjRkNmM4In19fQ=="}]}}}}],Health:40f,Attributes:[{Name:"generic.maxHealth",Base:40d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.movementSpeed",Base:0.3d},{Name:"generic.attackDamage",Base:30.0d}],Passengers:[{id:AreaEffectCloud,Particle:"portal",Duration:1000,Radius:1.5f,CustomName:"スクナ",Effects:[{Id:17b,Amplifier:3b,Duration:120,ShowParticles:true},{Id:15b,Amplifier:0b,Duration:120,ShowParticles:true}]}]}]}}],Tags:[CooldownRequired,TypeChecked],PortalCooldown:3,Delay:-1s}
```

### No.32

```minecraftcommand
/execute @e[tag=PaleRider] ~ ~ ~ /execute @e[dx=0,tag=PaleRider,score_MobCastTime_min=0,score_MobCastTime=11,c=1] ~ ~ ~ /summon MinecartSpawner ~ ~1 ~ {Invulnerable:true,MinSpawnDelay:0s,MaxSpawnDelay:0s,SpawnCount:4s,SpawnRange:3s,RequiredPlayerRange:99s,MaxNearbyEntities:16s,Motion:[0d,0.05d,0d],SpawnPotentials:[{Weight:1,Entity:{id:"Villager",Health:0f,DeathTime:19s,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Passengers:[{id:CaveSpider,CustomName:"ﾍﾟｲﾙｽﾊﾟｲﾀﾞｰ",Health:70f,Attributes:[{Name:"generic.maxHealth",Base:70d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.movementSpeed",Base:0.4d},{Name:"generic.attackDamage",Base:1.0d}],Passengers:[{id:ThrownPotion,Potion:{id:"minecraft:lingering_potion",tag:{CustomPotionEffects:[{Id:19b,Amplifier:4b,Duration:200,ShowParticles:true}]}}}]},{id:"Silverfish",CustomName:"ｳﾞｪﾉﾑ",Silent:true,Health:250.0f,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:2147483647,ShowParticles:false},{Id:8b,Amplifier:17b,Duration:2147483647,ShowParticles:false},{Id:25b,Amplifier:-2b,Duration:2147483647,ShowParticles:false}],Attributes:[{Name:"generic.maxHealth",Base:250d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:1.0d},{Name:"generic.movementSpeed",Base:0.29d},{Name:"generic.attackDamage",Base:0.00d}],Passengers:[{id:"ThrownEnderpearl"},{id:AreaEffectCloud,CustomName:"ｳﾞｪﾉﾑﾐｽﾄ",Particle:"mobSpell",Color:52312,Duration:999,Radius:1.55f,ReapplicationDelay:10,Effects:[{Id:19b,Amplifier:60b,Duration:200,ShowParticles:true},{Id:4b,Amplifier:10b,Duration:200,ShowParticles:true}]}]},{id:Creeper,ExplosionRadius:0b,Fuse:5s,CustomName:"ﾍﾟｲﾙｸﾘｰﾊﾟｰ",Silent:true,Health:100.0f,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:2147483647,ShowParticles:true},{Id:10b,Amplifier:2b,Duration:1200,ShowParticles:true}],Attributes:[{Name:"generic.maxHealth",Base:100d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.movementSpeed",Base:0.3d},{Name:"generic.attackDamage",Base:1.0d}],Passengers:[{id:AreaEffectCloud,CustomName:"飾",Particle:"happyVillager",Duration:999,Radius:0.001f,Effects:[]},{id:ThrownPotion,Potion:{id:"minecraft:lingering_potion",tag:{CustomPotionEffects:[{Id:19b,Amplifier:4b,Duration:200,ShowParticles:true}]}}}]}]}}],Tags:[CooldownRequired,TypeChecked],PortalCooldown:1,Delay:-1s}
```

## 詳細

1. 対象タグをもつエンティティと同一x座標上に存在し、`MobCastTime`の値に対して特定の効果とそのメッセージを発動する。具体的な効果は以下の[表](#mobcastの値とその効果)を参照。
2. `#Random`の`Global`に一番近くのプレイヤーの`RndMWC`を代入し、`UpdataRandom`を付与
3. `#Random`の`Global`に100との剰余を代入
4. `SkillMob`を持つエンティティが存在したら、それと同一x座標上に存在する`SkillMob`を持ち、`MobCastTime`が19以上であるエンティティ1体の`MobCastTime`を1に設定し、以下の事柄を実行
   - `FastCast`を持つエンティティと同一x座標上に存在する`SkillMob`を持ち、`MobCastTime`が19以上であるエンティティ1体の`MobCastTime`を3に設定
5. `SkillMob`を持つエンティティと同一x座標上に存在する`SkillMob`を持ち、`MobCastTime`が19以上であるエンティティ1体の`MobCastTime`に`#Random`の`Global`を掛ける

### MobCastの値とその効果

|対象タグ|MobCast|効果|備考|
|-|-|-|
|Shinen|0~4|80m以内のプレイヤーの座標に移動|テレポート|
||5~7|空腹Lv.10 2秒間、半径0.5mから0.1m/sの速さで広がり60秒間展開されるAEC☣を設置|ポリュート(最終的には半径6.5mまで広がる)|
||8~10|半径32m以内のすべてのプレイヤーの座標上に浮遊Lv.-19 20秒間、半径1mに0.1秒間展開されるAECを設置|アビスセデュース|
||11~14|半径16m以内のすべてのプレイヤーに即時ダメージLv.0を10秒間付与|アシッドスプレッド|
||15~19|スポナー付きマインカートを召喚し、プレイヤーが99m以内にいる場合、最大3体の眷属を召喚|リーンカーネイト|
|Magma|0~7|スポナー付きマインカートを召喚し、プレイヤーが99m以内にいる場合、10m以内に最大5体のエンダーマイトを乗せたファイアーボールを召喚|ベギラマ|
||8~19|`Magma`を持つエンティティに{AbsorptionAmount:0f,DeathLootTable:”minecraft:empty”}を設定|逃げ出した!|
|WarpOnly|0~19|80m以内のプレイヤーの座標上に移動|ワープした!|
|WhiteRider|0~11|スポナー付きマインカートを召喚し、半径3m以内に眷属を召喚|死天召喚|
||8~19|半径32m以内のすべてのプレイヤーの座標上に、下から0.1秒で消滅するエンダーマイト、即消滅する経験値、そして移動速度低下Lv.10 20秒間、採掘速度低下Lv.10 20秒間、跳躍力上昇Lv.-11 20秒間を付与するスプラッシュポーションを召喚し、その場ですぐにポーション効果を付与する|勝利の上の支配|
|RedRider|0~11|スポナー付きマインカートを召喚し、半径3m以内に眷属を召喚|死兵召喚|
||8~19|32m以内にいる`SkillMob`を持たないゾンビピッグマンを自身の座標上に移動させ、下から0.1秒で消滅するエンダーマイト、即消滅する経験値、そして移動速度上昇Lv.10 20秒間、攻撃力上昇Lv.10 20秒間、毒Lv.9 2秒間を付与するスプラッシュポーションを召喚し、その場ですぐにポーション効果を付与する|更なる戦い|
|BlackRider|0~11|スポナー付きマインカートを召喚し、半径3m以内に眷属を召喚|死霊召喚|
||8~19|32m以内のプレイヤーの`MP`を10で割り、`MPMaxFlag`を0に設定|ソウルバランス|
|PaleRider|0~11|スポナー付きマインカートを召喚し、半径3m以内に眷属を召喚|死魔召喚|
||8~19|半径32m以内で毒を付与されているすべてのプレイヤーの`kill`を2に設定|ペストクロップ|
