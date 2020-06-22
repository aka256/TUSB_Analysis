---
title: エンティティ
tags: [entity]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,エンティティ
last_updated: 2020/6/21
update: 2020-06-21 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: TUSB_Analysis_Entity.html
folder: entity
---

## SystemEntity

- コマンドの管理をする上で使用されているエンティティ
- `SystemEntity`を持っていないエンティティもここでは含めている

### CommonGM

- コマンド実行時の基準となっているアーマースタンド

|||
|-|-|
|Name|CommonGM|
|Type|ArmorStand|
|Tag|SystemEntity|
|UUID|0-0-1-0-1|

#### summonコマンド

- 位置(-1921,6,-192)

```minecraftcommand
/summon ArmorStand ~1 ~ ~ {CustomName:"CommonGM", CustomNameVisible:true, Invulnerable:true, Small:true, Invisible:true, DisabledSlots:31, Marker:true, NoGravity:true, NoBasePlate:true, UUIDMost:1l, UUIDLeast:1l, Tags:[SystemEntity]}
```

---

### SystemKeeper

- メインクロックが不具合を起こした際に、復旧を図るアーマースタンド
- "秩序を取り戻した"というメッセージを出しているのはコイツ

|||
|-|-|
|Name|SystemKeeper|
|Type|ArmorStnad|
|Tag|SystemEntity, TypeChecked|
|UUID|0-0-2-0-2|

#### summonコマンド

- 位置(-1870,6-194)
- メインクロックをONにした際、召喚される

```minecraftcommand
/summon ArmorStand -1870 10 -197 {Invulnerable:true,Tags:[SystemEntity,TypeChecked],Rotation:[90f,0f],CustomNameVisible:true,CustomName:"SystemKeeper",UUIDMost:2l,UUIDLeast:2l}
```

---

### ViewPoint(仮)

- CustomNameが""となっているので仮としてViewPoint(仮)としておく

|||
|-|-|
|Name|(None)|
|Type|ArmorStand|
|Tag|ViewPoint, SystemEntity|

#### summonコマンド

- 位置(-1921,6,-190)

```minecraftcommand
/summon ArmorStand ~1 ~ ~ {CustomName:"", Invulnerable:true, Small:true, Invisible:true, DisabledSlots:31, Marker:true, NoGravity:true, NoBasePlate:true, Tags:[ViewPoint,SystemEntity]}
```

---

### 地下世界

|||
|-|-|
|Name|地下世界|
|Type|AreaEffectCloud|
|Tag|(None)|

#### summonコマンド

- 位置(-1921,6,-193)

```minecraftcommand
/summon AreaEffectCloud ~1 ~ ~ {ReapplicantDelay:2147483647,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2147483647,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:take,CustomName:地下世界,CustomNameVisible:true}
```

---

### クラウディア

|||
|-|-|
|Name|クラウディア|
|Type|AreaEffectCloud|
|Tag|(None)|

#### summonコマンド

- 位置(-1921,6,-194)

```minecraftcommand
/summon AreaEffectCloud ~1 ~ ~ {ReapplicantDelay:2147483647,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2147483647,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:take,CustomName:クラウディア,CustomNameVisible:true}
```

---

### テーブルマウンテン

|||
|-|-|
|Name|クラウディア|
|Type|AreaEffectCloud|
|Tag|(None)|

#### summonコマンド

- 位置(-1921,6,-195)

```minecraftcommand
/summon AreaEffectCloud ~1 ~ ~ {ReapplicantDelay:2147483647,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2147483647,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:take,CustomName:テーブルマウンテン,CustomNameVisible:true}
```

---

### ガリバーランド

|||
|-|-|
|Name|クラウディア|
|Type|AreaEffectCloud|
|Tag|(None)|

#### summonコマンド

- 位置(-1921,6,-196)

```minecraftcommand
/summon AreaEffectCloud ~1 ~ ~ {ReapplicantDelay:2147483647,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2147483647,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:take,CustomName:ガリバーランド,CustomNameVisible:true}
```

---

### トカルトコルデ

|||
|-|-|
|Name|クラウディア|
|Type|AreaEffectCloud|
|Tag|(None)|

#### summonコマンド

- 位置(-1921,6,-197)

```minecraftcommand
/summon AreaEffectCloud ~1 ~ ~ {ReapplicantDelay:2147483647,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2147483647,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:take,CustomName:トカルトコルデ,CustomNameVisible:true}
```

---

### はてな(???)

- 正しくは???という名前

|||
|-|-|
|Name|???|
|Type|AreaEffectCloud|
|Tag|Enter|

#### summonコマンド

- 位置(-1921,7,-195)

```minecraftcommand
/summon AreaEffectCloud ~1 ~ ~ {ReapplicantDelay:2147483647,Radius:2f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2147483647,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:take,CustomName:???,CustomNameVisible:true,Tags:[Enter]}
```

### NetherBossPoint

- 煉獄の最下層部にいるボスの処理のための起点となっているエンティティ

|||
|-|-|
|Name|NetherBossPoint|
|Type|ArmorStand|
|Tag|SystemEntity,TypeChecked|
|UUID|0-0-1-0-4|

```minecraftcommand
{NoGravity:1b,HurtByTimestamp:0,Attributes:[0:{Base:20.0d,Name:"generic.maxHealth"},1:{Base:0.0d,Name:"generic.knockbackResistance"},2:{Base:0.699999988079071d,Name:"generic.movementSpeed"},3:{Base:0.0d,Name:"generic.armor"},4:{Base:0.0d,Name:"generic.armorToughness"}],Invulnerable:1b,FallFlying:0b,ShowArms:0b,PortalCooldown:0,AbsorptionAmount:0.0f,FallDistance:0.0f,DisabledSlots:31,DeathTime:0s,Pose:{},Invisible:1b,Tags:[0:"TypeChecked",1:"SystemEntity"],Motion:[0:0.0d,1:0.0d,2:0.0d],Small:1b,UUIDLeast:4L,Health:20.0f,Air:300s,OnGround:0b,Dimension:0,Marker:1b,Rotation:[0:0.0f,1:0.0f],HandItems:[0:{},1:{}],UUIDMost:1L,CustomName:"NetherBossPoint",Pos:[0:-1859.0d,1:31.0d,2:-124.0d],Fire:0s,ArmorItems:[0:{},1:{},2:{},3:{}],NoBasePlate:1b,HurtTime:0s}
```

### 雷

|||
|-|-|
|Name|雷|
|Type|ArmorStand|
|Tag|SystemEntity,TypeChecked,FrontWaterBolt|
|UUID|0-0-1-0-7|

```minecraftcommand
{NoGravity:1b,HurtByTimestamp:0,Attributes:[0:{Base:20.0d,Name:"generic.maxHealth"},1:{Base:0.0d,Name:"generic.knockbackResistance"},2:{Base:0.699999988079071d,Name:"generic.movementSpeed"},3:{Base:0.0d,Name:"generic.armor"},4:{Base:0.0d,Name:"generic.armorToughness"}],Invulnerable:1b,FallFlying:0b,ShowArms:0b,PortalCooldown:0,AbsorptionAmount:0.0f,FallDistance:0.0f,DisabledSlots:31,DeathTime:0s,Pose:{},Invisible:1b,Tags:[0:"TypeChecked",1:"SystemEntity",2:"FrontWaterBolt"],Motion:[0:0.0d,1:0.0d,2:0.0d],Small:1b,UUIDLeast:7L,Health:20.0f,Air:300s,OnGround:0b,Dimension:0,Marker:1b,Rotation:[0:0.0f,1:0.0f],HandItems:[0:{},1:{}],UUIDMost:1L,CustomName:"雷",Pos:[0:-1859.0d,1:31.0d,2:-124.0d],Fire:0s,ArmorItems:[0:{},1:{},2:{},3:{}],NoBasePlate:1b,HurtTime:0s}
```

### 雷

|||
|-|-|
|Name|雷|
|Type|ArmorStand|
|Tag|SystemEntity,TypeChecked,FrontPoisonBolt|
|UUID|0-0-1-0-8|

```minecraftcommand
{NoGravity:1b,HurtByTimestamp:0,Attributes:[0:{Base:20.0d,Name:"generic.maxHealth"},1:{Base:0.0d,Name:"generic.knockbackResistance"},2:{Base:0.699999988079071d,Name:"generic.movementSpeed"},3:{Base:0.0d,Name:"generic.armor"},4:{Base:0.0d,Name:"generic.armorToughness"}],Invulnerable:1b,FallFlying:0b,ShowArms:0b,PortalCooldown:0,AbsorptionAmount:0.0f,FallDistance:0.0f,DisabledSlots:31,DeathTime:0s,Pose:{},Invisible:1b,Tags:[0:"FrontPoisonBolt",1:"TypeChecked",2:"SystemEntity"],Motion:[0:0.0d,1:0.0d,2:0.0d],Small:1b,UUIDLeast:8L,Health:20.0f,Air:300s,OnGround:0b,Dimension:0,Marker:1b,Rotation:[0:0.0f,1:0.0f],HandItems:[0:{},1:{}],UUIDMost:1L,CustomName:"雷",Pos:[0:-1859.0d,1:31.0d,2:-124.0d],Fire:0s,ArmorItems:[0:{},1:{},2:{},3:{}],NoBasePlate:1b,HurtTime:0s}
```

## MOB

### 敵MOB

#### コーラスマイト

コーラスマイトが実際に召喚されるのは[メインクロック開始時リセットするもの]で行われる。

```minecraftcommand
Endermite ~ ~ ~ {CustomName:"コーラスマイト",Health:200f,Lifetime:1900,Attributes:[{Name:"generic.maxHealth",Base:200d},{Name:"generic.movementSpeed",Base:0.3d},{Name:"generic.attackDamage",Base:1d},{Name:"generic.knockbackResistance",Base:0.3d},{Name:"generic.followRange",Base:32d}],HandItems:[{tag:{ench:[{id:19s,lvl:20s}]},id:"minecraft:iron_sword",Count:0b,Damage:0s},{}]}
```

### 嫌な予感

嫌な予感によって召喚されるエンティティは、すべてスポナー付きマインカートによって召喚される。詳しくは[嫌な予感実行](eventFullfill.html)を参照。

#### 「…何かに狙われてる！」

  ```minecraftcommand
/summon MinecartSpawner ~ ~ ~ {Invulnerable:true,MinSpawnDelay:32000s,MaxSpawnDelay:32000s,SpawnCount:3s,SpawnRange:30s,RequiredPlayerRange:99s,MaxNearbyEntities:999s,SpawnPotentials:[{Weight:1}],Motion:[0d,1d,0d],SpawnData:{Health:0f,DeathTime:19s,id:"Villager",Passengers:[{id:"Bat",Health:100f,Attributes:[{Name:"generic.followRange",Base:32d},{Name:"generic.maxHealth",Base:100d}],Passengers:[{id:"Guardian",Elder:1b,DeathLootTable:"usb:events/sniper",CustomName:"好撃球",Attributes:[{Name:"generic.followRange",Base:60d}],ActiveEffects:[{Id:14b,Amplifier:127b,ShowParticles:1b,Duration:2147483647}],Passengers:[{CustomName:"エルダーパール",id:"ThrownEnderpearl",Passengers:[{WaitTime:6000,Particle:"take",CustomName:"DEATHCOUNT",Duration:150,Radius:0.1f,RadiusOnUse:0f,ReapplicationDelay:0,Effects:[{Id:7b,Amplifier:50b,Duration:20}],id:"AreaEffectCloud"}]}]}]}]},Tags:[CooldownRequired,TypeChecked],PortalCooldown:11,Delay:10s}
```

#### 「…心地いい風が吹いてる。」

```minecraftcommand
/summon MinecartSpawner ~ ~1 ~ {Invulnerable:true,MinSpawnDelay:0s,MaxSpawnDelay:0s,SpawnCount:1s,SpawnRange:0s,RequiredPlayerRange:10s,MaxNearbyEntities:999s,Motion:[0d,0.05d,0d],SpawnPotentials:[{Weight:1,Entity:{id:AreaEffectCloud,ReapplicantDelay:0,Radius:2f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:mobSpell,Effects:[{Id:6b,Duration:3,Amplifier:0b,ShowParticles:true}]}},{Weight:1,Entity:{id:AreaEffectCloud,ReapplicantDelay:0,Radius:2f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:mobSpell,Effects:[{Id:14b,Duration:3,Amplifier:1b,ShowParticles:true}]}}],Tags:[CooldownRequired,TypeChecked],PortalCooldown:1,Delay:-1s}
```

#### 「あの影…。怪しい！」

```minecraftcommand
/summon MinecartSpawner ~ ~ ~ {Invulnerable:true,MinSpawnDelay:32000s,MaxSpawnDelay:32000s,SpawnCount:3s,SpawnRange:30s,RequiredPlayerRange:99s,MaxNearbyEntities:999s,SpawnPotentials:[{Weight:1}],Motion:[0d,1d,0d],SpawnData:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Creeper,DeathLootTable:"usb:events/shadow",CustomName:"スプリッツァガイスト",Silent:true,ExplosionRadius:4b,Fuse:1s,FallDistance:-100f,ActiveEffects:[{Id:14b,Amplifier:127b,ShowParticles:false,Duration:2147483647}],Passengers:[{id:XPOrb}]}]},Tags:[CooldownRequired,TypeChecked],PortalCooldown:11,Delay:10s}
```

#### 「…こんな動物いた？」

```minecraftcommand
/summon Villager ~ ~ ~ {Health:0f,DeathTime:19s,Passengers:[{id:Sheep,CustomName:"村人のごはん",CustomNameVisible:true,DeathLootTable:"usb:events/meal/sheep",Tags:[VillagerMeal]},{id:Cow,CustomName:"村人のごはんじゃない",CustomNameVisible:true},{id:Pig,CustomName:"村人のごはんじゃない",CustomNameVisible:true}]}
```

#### 「…深淵様！？」

深淵様のスキル実行などについては[敵スキル実行](runMobSkill.html)を参照

```minecraftcommand
/summon MinecartSpawner ~ ~ ~ {Invulnerable:true,MinSpawnDelay:32000s,MaxSpawnDelay:32000s,SpawnCount:1s,SpawnRange:0s,RequiredPlayerRange:99s,MaxNearbyEntities:999s,SpawnPotentials:[{Weight:1}],Motion:[0d,1d,0d],SpawnData:{id:XPOrb,Age:6000s,Passengers:[{id:Zombie,DeathLootTable:"usb:events/shinen",Tags:[AbyssWarp,SkillMob,Shinen],CustomName:"深淵様",CustomNameVisible:true, HandItems:[{id:minecraft:diamond_pickaxe,Count:0b,tag:{display:{Name:"全能ノ一"},ench:[{id:16s,lvl:5s},{id:19s,lvl:5s},{id:20s,lvl:5s},{id:32s,lvl:5s},{id:34s,lvl:5s},{id:35s,lvl:5s}]}}], ArmorItems:[{id:"minecraft:leather_boots",Count:0b,tag:{display:{Name:"終焉ヲ告ゲル者",color:8339378},ench:[{id:0s,lvl:0s},{id:1s,lvl:1s},{id:2s,lvl:2s},{id:3s,lvl:3s},{id:4s,lvl:4s},{id:5s,lvl:5s},{id:6s,lvl:6s},{id:7s,lvl:7s},{id:8s,lvl:8s}]}},{id:"minecraft:leather_leggings",Count:0b,tag:{display:{Name:"終焉ヲ告ゲル者",color:8339378},ench:[{id:0s,lvl:0s},{id:1s,lvl:1s},{id:2s,lvl:2s},{id:3s,lvl:3s},{id:4s,lvl:4s},{id:5s,lvl:5s},{id:6s,lvl:6s},{id:7s,lvl:7s},{id:8s,lvl:8s}]}},{id:"minecraft:leather_chestplate",Count:0b,tag:{display:{Name:"終焉ヲ告ゲル者",color:8339378},ench:[{id:0s,lvl:0s},{id:1s,lvl:1s},{id:2s,lvl:2s},{id:3s,lvl:3s},{id:4s,lvl:4s},{id:5s,lvl:5s},{id:6s,lvl:6s},{id:7s,lvl:7s},{id:8s,lvl:8s}]}},{id:"minecraft:chorus_flower",Count:0b,tag:{display:{Name:"終焉ヲ告ゲル者",color:8339378},ench:[{id:0s,lvl:15s},{id:1s,lvl:1s},{id:2s,lvl:2s},{id:3s,lvl:3s},{id:4s,lvl:4s},{id:5s,lvl:5s},{id:6s,lvl:6s},{id:7s,lvl:7s},{id:8s,lvl:8s}]}}],ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,Ambient:false,ShowParticles:false},{Id:11b,Amplifier:1b,Duration:2147483647,Ambient:false,ShowParticles:false},{Id:8b,Amplifier:4b,Duration:2147483647,Ambient:false,ShowParticles:false}],Health:1000f,Attributes:[{Name:"generic.maxHealth",Base:1000d},{Name:"generic.followRange",Base:60d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.movementSpeed",Base:0.33d}]}]},Tags:[CooldownRequired,TypeChecked],PortalCooldown:4,Delay:3s}
```

#### 「クモだー！」

SATの蜘蛛の巣設置については[時間経過](timeElapsed.html)を参照

```minecraftcommand
/summon MinecartSpawner ~ ~ ~ {Invulnerable:true,MinSpawnDelay:32000s,MaxSpawnDelay:32000s,SpawnCount:2s,SpawnRange:5s,RequiredPlayerRange:99s,MaxNearbyEntities:999s,SpawnPotentials:[{Weight:1}],Motion:[0d,1d,0d],SpawnData:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:CaveSpider,DeathLootTable:"usb:events/sat",Tags:[CanSpin],CustomName:SAT,CustomNameVisible:true,Health:300f,Attributes:[{Name:generic.maxHealth,Base:300d},{Name:generic.followRange,Base:32d},{Name:generic.attackDamage,Base:15d},{Name:generic.movementSpeed,Base:0.4d},{Name:generic.knockbackResistance,Base:0.5d},{Name:generic.armor,Base:12d}],Passengers:[{id:Guardian,Silent:true,CustomName:10式0.3m小銃,Health:100f,Attributes:[{Name:generic.maxHealth,Base:100d},{Name:generic.followRange,Base:32d},{Name:generic.attackDamage,Base:30d}],ActiveEffects:[{Id:12b,Amplifier:0b,Duration:2147483647,ShowParticles:false},{Id:14b,Amplifier:0b,Duration:2147483647,ShowParticles:false}]}]}]},Tags:[CooldownRequired,TypeChecked],PortalCooldown:4,Delay:3s}
```

#### 「…あれは幻の！？」

```minecraftcommand
/summon MinecartSpawner ~ ~ ~ {Invulnerable:true,MinSpawnDelay:32000s,MaxSpawnDelay:32000s,SpawnCount:1s,SpawnRange:10s,RequiredPlayerRange:99s,MaxNearbyEntities:999s,SpawnPotentials:[{Weight:1}],Motion:[0d,1d,0d],SpawnData:{id:XPOrb,Age:6000s,Passengers:[{id:Ozelot,Silent:true,Health:300f,Attributes:[{Name:generic.movementSpeed,Base:1.0d},{Name:generic.followRange,Base:80d},{Name:generic.maxHealth,Base:300d}],ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false}],Passengers:[{id:LavaSlime,Size:0,DeathLootTable:"usb:events/magma",Tags:[SkillMob,Magma],CustomName:はぐれマグマ,CustomNameVisible:true,ActiveEffects:[{Id:11b,Amplifier:3b,Duration:2147483647,ShowParticles:true,Ambient:false}],ArmorItems:[{},{},{id:minecraft:diamond_chestplate,Count:0b,tag:{ench:[{id:10s,lvl:0s},{id:10s,lvl:1s}]}}],AbsorptionAmount:40f,Attributes:[{Name:generic.armor,Base:30d}]}]}]},Tags:[CooldownRequired,TypeChecked],PortalCooldown:4,Delay:3s}
```

#### 「こちらポイント・ブラボー。支援班、補給物資を要請する。」

```minecraftcommand
/summon MinecartSpawner ~ ~1 ~40 {MaxNearbyEntities:999s,MaxSpawnDelay:32767s,MinSpawnDelay:32767s,SpawnRange:20s,SpawnCount:3s,RequiredPlayerRange:80s,Motion:[0d,2d,0d],SpawnData:{id:ShulkerBullet,Steps:0,Target:{X:-1920,Y:6,Z:-192,L:1L,M:1L},TZD:-0.1d,Tags:[RequiredCooldown],PortalCooldown:160,Passengers:[{id:XPOrb,Age:5840s,Passengers:[{id:MinecartSpawner,MaxNearbyEntities:999s,MaxSpawnDelay:20s,MinSpawnDelay:20s,Delay:40s,SpawnRange:3s,SpawnCount:1s,RequiredPlayerRange:80s,SpawnData:{id:FallingSand,Time:1,FallDistance:1f,Block:minecraft:chest,FallHurtMax:10,FallHurtAmount:10f,HurtEntities:true,TileEntityData:{LootTable:"usb:events/supply"},Passengers:[{id:FallingSand,DropItem:false,Time:1,FallDistance:1f,Block:minecraft:planks}]},SpawnPotentials:[{Weight:4,Entity:{id:FallingSand,Time:1,FallDistance:1f,Block:minecraft:chest,FallHurtMax:10,FallHurtAmount:10f,HurtEntities:true,TileEntityData:{LootTable:"usb:events/supply"},Passengers:[{id:FallingSand,DropItem:false,Time:1,FallDistance:1f,Block:minecraft:planks}]}},{Weight:1}]}]}]},SpawnPotentials:[{Weight:1}],Tags:[CooldownRequired,TypeChecked],PortalCooldown:21,Delay:20s}
```

#### 「恐ろしい気配がする…！」

ライダー達のスキル実行などについては[敵スキル実行](runMobSkill.html)を参照

```minecraftcommand
/summon MinecartSpawner ~ ~1 ~ {Invulnerable:true,MinSpawnDelay:0s,MaxSpawnDelay:0s,SpawnCount:1s,SpawnRange:0s,RequiredPlayerRange:10s,MaxNearbyEntities:999s,Motion:[0d,0.05d,0d],SpawnPotentials:[{Weight:1,Entity:{id:XPOrb,Age:6000s,Passengers:[{id:EntityHorse,Tags:[AbyssWarp],NoAI:false,Type:4,Variant:0,Saddle:1b,ArmorItem:{id:iron_horse_armor,Count:0b,Damage:0s},Tame:1b,Health:400.0f,Attributes:[{Name:generic.maxHealth,Base:400.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.knockbackResistance,Base:0.35d},{Name:horse.jumpStrength,Base:5d}],ActiveEffects:[{Id:11b,Amplifier:0b,Duration:2147483647,ShowParticles:false}],Passengers:[{NoAI:false,CustomName:"ホワイトライダー",CustomNameVisible:true,Tags:[WhiteRider,SkillMob],DeathLootTable:"usb:events/goddess",id:Skeleton,Health:450.0f,Attributes:[{Name:generic.maxHealth,Base:450.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.attackDamage,Base:4d},{Name:generic.knockbackResistance,Base:0.35d},{Name:generic.followRange,Base:32d}],ActiveEffects:[{Id:11b,Amplifier:1b,Duration:2147483647,ShowParticles:false},{Id:8b,Amplifier:3b,Duration:2147483647,ShowParticles:false}],ArmorItems:[{id:chainmail_boots},{id:chainmail_leggings},{id:chainmail_chestplate},{id:skull,Damage:3s,tag:{SkullOwner:{Id:"84720d0e-6555-4a13-8482-9adbc4a92630",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjhmYzEwZjkzNjRhY2U1MzFhMDJjNmNmZTg5MjcxOWFiMzFiZDQzMjkzZmQ0ZWVkOWNlODdjYzFiNWM3MTIifX19"}]}}}}],HandItems:[{id:bow,tag:{ench:[]}},{}]}]}]}},{Weight:1,Entity:{id:XPOrb,Age:6000s,Passengers:[{id:EntityHorse,Tags:[AbyssWarp],NoAI:false,Fire:0s,Type:0,Variant:2,Saddle:1b,ArmorItem:{id:golden_horse_armor,Count:0b,Damage:0s},Tame:1b,Health:400.0f,Attributes:[{Name:generic.maxHealth,Base:400.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.knockbackResistance,Base:0.35d},{Name:horse.jumpStrength,Base:5d}],ActiveEffects:[{Id:11b,Amplifier:0b,Duration:2147483647,ShowParticles:false},{Id:12b,Amplifier:0b,Duration:2147483647,ShowParticles:false}],Passengers:[{NoAI:false,CustomName:"レッドライダー",CustomNameVisible:true,Tags:[RedRider,SkillMob],DeathLootTable:"usb:events/goddess",id:PigZombie,ArmorItems:[{id:leather_boots,tag:{display:{color:16711680}}},{id:leather_leggings,tag:{display:{color:16711680}}},{id:leather_chestplate,tag:{display:{color:16711680}}},{id:skull,Damage:3s,tag:{SkullOwner:{Id:"9fc4ed7d-f92d-4cfb-95fe-8609954c2208",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTE0YWZiMWIzYmZiMGZmYjg0OTgxM2U2YTEyNjhlMmM1ZWVhN2RlNGNhMDQzYmVmYjBjNjZhNGI4MzM4NiJ9fX0="}]}}}}],HandItems:[{id:iron_sword,tag:{ench:[]}},{}],Health:450.0f,Attributes:[{Name:generic.maxHealth,Base:450.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.attackDamage,Base:10d},{Name:generic.knockbackResistance,Base:0.35d},{Name:generic.followRange,Base:32d}],ActiveEffects:[{Id:11b,Amplifier:1b,Duration:2147483647,ShowParticles:false},{Id:8b,Amplifier:3b,Duration:2147483647,ShowParticles:false}]}]}]}},{Weight:1,Entity:{id:XPOrb,Age:6000s,Passengers:[{id:EntityHorse,Tags:[AbyssWarp],NoAI:false,Type:0,Variant:1028,Saddle:1b,Tame:1b,Health:400.0f,Attributes:[{Name:generic.maxHealth,Base:400.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.knockbackResistance,Base:0.35d},{Name:horse.jumpStrength,Base:5d}],ActiveEffects:[{Id:11b,Amplifier:1b,Duration:2147483647,ShowParticles:false},{Id:12b,Amplifier:0b,Duration:2147483647,ShowParticles:false}],Passengers:[{NoAI:false,CustomName:"ブラックライダー",CustomNameVisible:true,Tags:[BlackRider,SkillMob],DeathLootTable:"usb:events/goddess",id:Skeleton,SkeletonType:1b,ArmorItems:[{id:leather_boots,tag:{display:{color:0}}},{id:leather_leggings,tag:{display:{color:0}}},{id:leather_chestplate,tag:{display:{color:0}}},{id:skull,Damage:3s,tag:{SkullOwner:{Id:"16dcd66d-df16-4fc5-a038-db6248c6bb70",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWQ4NDdjMzdiNTMxZmE5MmJiOTVkNGMwNzBlNWQ4N2IzMjU2YTljNjVhZTUyMWE1OTgxMzMyOTBjN2NiYiJ9fX0="}]}}}}],HandItems:[{id:brewing_stand,tag:{ench:[]}},{}],Health:300.0f,Attributes:[{Name:generic.maxHealth,Base:300.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.attackDamage,Base:4d},{Name:generic.knockbackResistance,Base:0.35d},{Name:generic.followRange,Base:32d}],ActiveEffects:[{Id:11b,Amplifier:2b,Duration:2147483647,ShowParticles:false},{Id:8b,Amplifier:3b,Duration:2147483647,ShowParticles:false}]}]}]}},{Weight:1,Entity:{id:XPOrb,Age:6000s,Passengers:[{id:EntityHorse,Tags:[AbyssWarp],NoAI:false,Type:3,Variant:0,Saddle:1b,ArmorItem:{id:iron_horse_armor,Count:0b,Damage:0s},Tame:1b,Health:400.0f,Attributes:[{Name:generic.maxHealth,Base:400.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.knockbackResistance,Base:0.35d},{Name:horse.jumpStrength,Base:5d}],ActiveEffects:[{Id:11b,Amplifier:1b,Duration:2147483647,ShowParticles:false}],Passengers:[{NoAI:false,CustomName:"ペイルライダー",CustomNameVisible:true,Tags:[PaleRider,SkillMob],DeathLootTable:"usb:events/goddess",id:Zombie,ArmorItems:[{id:leather_boots,tag:{display:{color:4814131}}},{id:leather_leggings,tag:{display:{color:4814131}}},{id:leather_chestplate,tag:{display:{color:4814131}}},{id:skull,Damage:3s,tag:{SkullOwner:{Id:"c84e47fa-4492-4281-ab2f-0b53f15e8f55",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjJlNzljYmNlMTdiZmY4YTdiMjQ4NjRmYmMzZDNkOTc3ZWVhNTQ0YmRjMmJiODY3ODU4YjM1ZDUwMWI0NTY3In19fQ=="}]}}}}],HandItems:[{id:diamond_hoe,tag:{ench:[]}},{}],Health:300.0f,Attributes:[{Name:generic.maxHealth,Base:300.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.attackDamage,Base:10d},{Name:generic.knockbackResistance,Base:0.35d},{Name:generic.followRange,Base:32d}],ActiveEffects:[{Id:11b,Amplifier:2b,Duration:2147483647,ShowParticles:false},{Id:8b,Amplifier:3b,Duration:2147483647,ShowParticles:false}]}]}]}}],Tags:[CooldownRequired,TypeChecked],PortalCooldown:1,Delay:-1s}
```

#### 「空に何か浮かんでる！」

```minecraftcommand
/summon MinecartSpawner ~ ~ ~ {Invulnerable:true,MinSpawnDelay:32767s,MaxSpawnDelay:32767s,SpawnCount:3s,SpawnRange:80s,RequiredPlayerRange:99s,MaxNearbyEntities:999s,SpawnPotentials:[{Weight:1}],Motion:[0d,1d,0d],SpawnData:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Shulker,DeathLootTable:"usb:events/box",Glowing:true,NoAI:true,CustomName:玉手箱,CustomNameVisible:true,Health:100f,Attributes:[{Name:generic.maxHealth,Base:100d},{Name:generic.followRange,Base:16d}]}]},Tags:[CooldownRequired,TypeChecked],PortalCooldown:11,Delay:10s}
```
