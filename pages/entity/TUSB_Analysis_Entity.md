---
title: エンティティ
tags: [entity]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,エンティティ
last_updated: 2020/6/19
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

## 敵MOB

### コーラスマイト

```minecraftcommand
Endermite ~ ~ ~ {CustomName:"コーラスマイト",Health:200f,Lifetime:1900,Attributes:[{Name:"generic.maxHealth",Base:200d},{Name:"generic.movementSpeed",Base:0.3d},{Name:"generic.attackDamage",Base:1d},{Name:"generic.knockbackResistance",Base:0.3d},{Name:"generic.followRange",Base:32d}],HandItems:[{tag:{ench:[{id:19s,lvl:20s}]},id:"minecraft:iron_sword",Count:0b,Damage:0s},{}]}
```
