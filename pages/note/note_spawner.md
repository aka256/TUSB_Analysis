---
title: About spawner
tags: []
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-10 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: note/note_spawner.html
search: exclude
---

```minecraft
{NoGravity:1b,
HurtByTimestamp:0,
Attributes:[0:{Base:20.0d,Name:"generic.maxHealth"},1:{Base:0.0d,Name:"generic.knockbackResistance"},2:{Base:0.699999988079071d,Name:"generic.movementSpeed"},3:{Base:0.0d,Name:"generic.armor"},4:{Base:0.0d,Name:"generic.armorToughness"}],
Invulnerable:1b,
FallFlying:0b,
ShowArms:0b,
PortalCooldown:0,
AbsorptionAmount:0.0f,
FallDistance:0.0f,
DisabledSlots:0,
DeathTime:0s,
Pose:{},
Invisible:1b,
Tags:[0:"TypeChecked",1:"SystemEntity",2:"Spawner"],
Motion:[0:0.0d,1:0.0d,2:0.0d],
Small:1b,
UUIDLeast:-6767062386268429416L,
Health:20.0f,
Air:300s,
OnGround:0b,
Dimension:0,
Marker:1b,
Rotation:[0:0.0f,1:0.0f],
HandItems:[0:{},1:{}],
UUIDMost:-1060489431397350663L,
Passengers:[0:{
  CustomDisplayTile:1b,
  SpawnCount:1s,
  Invulnerable:1b,
  SpawnData:{
    FallDistance:1.0f,
    Motion:[0:0.0f,1:1.0f,2:0.0f],
    Block:"minecraft:gravel",
    Data:0b,
    Time:1,
    id:"FallingSand",
    DropItem:0b},
  MaxSpawnDelay:300s,
  PortalCooldown:0,
  Delay:197s,
  FallDistance:789099.9f,
  id:"MinecartSpawner",
  SpawnRange:3s,
  Tags:[0:"TypeChecked",1:"SystemEntity",2:"SpawnerCore",3:"Spawner"],
  MinSpawnDelay:100s,
  Motion:[0:0.0d,1:-0.037999998673796664d,2:0.0d],
  MaxNearbyEntities:6s,
  RequiredPlayerRange:32s,
  UUIDLeast:-1369723820L,
  DisplayTile:"minecraft:air",
  Air:0s,
  OnGround:0b,
  Dimension:0,
  Rotation:[0:0.0f,1:0.0f],
  DisplayOffset:0,
  UUIDMost:-1369723819L,
  Pos:[0:-12.5d,1:11.0001d,2:2.5d],
  Fire:-1s,
  DisplayData:0,
  SpawnPotentials:[0:{
    Entity:{
      FallDistance:1.0f,
      Motion:[0:0.0f,1:1.0f,2:0.0f],
      Block:"minecraft:gravel",
      Data:0b,
      Time:1,
      id:"FallingSand",
      DropItem:0b},
    Weight:1}]}],
Pos:[0:-12.5d,1:11.0001d,2:2.5d],
Fire:0s,
ArmorItems:[0:{},1:{},2:{},3:{}],
NoBasePlate:1b,
HurtTime:0s}
```

|Type|ArmorStand|
|Tag|TypeChecked,systemEntity,Spawner|
|Passengers|MinecartSpawner|

|Type|MinecartSpawner|
|Tag|TypeChecked,SystemEntity,SpawnerCore,Spawner|

```minecraft
{CustomDisplayTile:1b,SpawnCount:1s,Invulnerable:1b,SpawnData:{FallDistance:1.0f,Motion:[0:0.0f,1:1.0f,2:0.0f],Block:"minecraft:gravel",Data:0b,Time:1,id:"FallingSand",DropItem:0b},MaxSpawnDelay:300s,PortalCooldown:0,Delay:197s,FallDistance:789099.9f,SpawnRange:3s,Tags:[0:"TypeChecked",1:"SystemEntity",2:"SpawnerCore",3:"Spawner"],MinSpawnDelay:100s,Motion:[0:0.0d,1:-0.037999998673796664d,2:0.0d],MaxNearbyEntities:6s,RequiredPlayerRange:32s,UUIDLeast:-1369723820L,DisplayTile:"minecraft:air",Air:0s,OnGround:0b,Dimension:0,Rotation:[0:0.0f,1:0.0f],DisplayOffset:0,UUIDMost:-1369723819L,Pos:[0:-12.5d,1:11.0001d,2:2.5d],Fire:-1s,DisplayData:0,SpawnPotentials:[0:{Entity:{FallDistance:1.0f,Motion:[0:0.0f,1:1.0f,2:0.0f],Block:"minecraft:gravel",Data:0b,Time:1,id:"FallingSand",DropItem:0b},Weight:1}]}
```
