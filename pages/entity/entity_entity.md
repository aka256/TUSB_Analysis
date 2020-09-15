---
title: エンティティ
tags: [敵Mob,SystemEntity,村人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,エンティティ
update: 2020-09-14 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: entity/entity_entity.html
summary: コマンドに関係するエンティティについてまとめる。
summaryDisable: true
tocLimit: h3
---

## SystemEntity

- コマンドの管理をする上で使用されているエンティティ
- `SystemEntity`を持っていないエンティティもここでは含めている

### CommonGM

- コマンド実行時の基準となっているアーマースタンド

|-|-|
|Name|CommonGM|
|Type|ArmorStand|
|Tag|SystemEntity|
|UUID|0-0-1-0-1|

#### summonコマンド

- 位置(-1921,6,-192)

```mcfunction
/summon ArmorStand ~1 ~ ~ {CustomName:"CommonGM", CustomNameVisible:true, Invulnerable:true, Small:true, Invisible:true, DisabledSlots:31, Marker:true, NoGravity:true, NoBasePlate:true, UUIDMost:1l, UUIDLeast:1l, Tags:[SystemEntity]}
```

---

### SystemKeeper

- メインクロックが不具合を起こした際に、復旧を図るアーマースタンド
- "秩序を取り戻した"というメッセージを出しているのはコイツ

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

|-|-|
|Name|NetherBossPoint|
|Type|ArmorStand|
|Tag|SystemEntity,TypeChecked|
|UUID|0-0-1-0-4|

```minecraftcommand
{NoGravity:1b,HurtByTimestamp:0,Attributes:[0:{Base:20.0d,Name:"generic.maxHealth"},1:{Base:0.0d,Name:"generic.knockbackResistance"},2:{Base:0.699999988079071d,Name:"generic.movementSpeed"},3:{Base:0.0d,Name:"generic.armor"},4:{Base:0.0d,Name:"generic.armorToughness"}],Invulnerable:1b,FallFlying:0b,ShowArms:0b,PortalCooldown:0,AbsorptionAmount:0.0f,FallDistance:0.0f,DisabledSlots:31,DeathTime:0s,Pose:{},Invisible:1b,Tags:[0:"TypeChecked",1:"SystemEntity"],Motion:[0:0.0d,1:0.0d,2:0.0d],Small:1b,UUIDLeast:4L,Health:20.0f,Air:300s,OnGround:0b,Dimension:0,Marker:1b,Rotation:[0:0.0f,1:0.0f],HandItems:[0:{},1:{}],UUIDMost:1L,CustomName:"NetherBossPoint",Pos:[0:-1859.0d,1:31.0d,2:-124.0d],Fire:0s,ArmorItems:[0:{},1:{},2:{},3:{}],NoBasePlate:1b,HurtTime:0s}
```

### 雷

|-|-|
|Name|雷|
|Type|ArmorStand|
|Tag|SystemEntity,TypeChecked,FrontWaterBolt|
|UUID|0-0-1-0-7|

```minecraftcommand
{NoGravity:1b,HurtByTimestamp:0,Attributes:[0:{Base:20.0d,Name:"generic.maxHealth"},1:{Base:0.0d,Name:"generic.knockbackResistance"},2:{Base:0.699999988079071d,Name:"generic.movementSpeed"},3:{Base:0.0d,Name:"generic.armor"},4:{Base:0.0d,Name:"generic.armorToughness"}],Invulnerable:1b,FallFlying:0b,ShowArms:0b,PortalCooldown:0,AbsorptionAmount:0.0f,FallDistance:0.0f,DisabledSlots:31,DeathTime:0s,Pose:{},Invisible:1b,Tags:[0:"TypeChecked",1:"SystemEntity",2:"FrontWaterBolt"],Motion:[0:0.0d,1:0.0d,2:0.0d],Small:1b,UUIDLeast:7L,Health:20.0f,Air:300s,OnGround:0b,Dimension:0,Marker:1b,Rotation:[0:0.0f,1:0.0f],HandItems:[0:{},1:{}],UUIDMost:1L,CustomName:"雷",Pos:[0:-1859.0d,1:31.0d,2:-124.0d],Fire:0s,ArmorItems:[0:{},1:{},2:{},3:{}],NoBasePlate:1b,HurtTime:0s}
```

### 雷

|-|-|
|Name|雷|
|Type|ArmorStand|
|Tag|SystemEntity,TypeChecked,FrontPoisonBolt|
|UUID|0-0-1-0-8|

```minecraftcommand
{NoGravity:1b,HurtByTimestamp:0,Attributes:[0:{Base:20.0d,Name:"generic.maxHealth"},1:{Base:0.0d,Name:"generic.knockbackResistance"},2:{Base:0.699999988079071d,Name:"generic.movementSpeed"},3:{Base:0.0d,Name:"generic.armor"},4:{Base:0.0d,Name:"generic.armorToughness"}],Invulnerable:1b,FallFlying:0b,ShowArms:0b,PortalCooldown:0,AbsorptionAmount:0.0f,FallDistance:0.0f,DisabledSlots:31,DeathTime:0s,Pose:{},Invisible:1b,Tags:[0:"FrontPoisonBolt",1:"TypeChecked",2:"SystemEntity"],Motion:[0:0.0d,1:0.0d,2:0.0d],Small:1b,UUIDLeast:8L,Health:20.0f,Air:300s,OnGround:0b,Dimension:0,Marker:1b,Rotation:[0:0.0f,1:0.0f],HandItems:[0:{},1:{}],UUIDMost:1L,CustomName:"雷",Pos:[0:-1859.0d,1:31.0d,2:-124.0d],Fire:0s,ArmorItems:[0:{},1:{},2:{},3:{}],NoBasePlate:1b,HurtTime:0s}
```

### 農業家

|-|-|
|Name|農業家|
|UUID|0-0-1-0-3|
|Tag|ShopStaff|

```minecraftcommand
{HurtByTimestamp:0,Attributes:[0:{Base:100.0d,Name:"generic.maxHealth"},1:{Base:0.0d,Name:"generic.knockbackResistance"},2:{Base:0.03d,Name:"generic.movementSpeed"},3:{Base:0.0d,Name:"generic.armor"},4:{Base:0.0d,Name:"generic.armorToughness"},5:{Base:16.0d,Name:"generic.followRange"}],Riches:12,Invulnerable:1b,FallFlying:0b,ForcedAge:0,PortalCooldown:0,AbsorptionAmount:0.0f,FallDistance:0.0f,DeathTime:0s,HandDropChances:[0:0.085f,1:0.085f],PersistenceRequired:0b,Tags:[0:"TypeChecked",1:"ShopStaff"],Age:0,Motion:[0:0.0d,1:-0.0784000015258789d,2:0.0d],Leashed:0b,UUIDLeast:3L,Health:100.0f,LeftHanded:0b,Air:300s,OnGround:1b,Dimension:0,Offers:{Recipes:[0:{maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b,Damage:0s},sell:{id:"minecraft:wheat_seeds",Count:4b,Damage:0s},uses:0,rewardExp:0b},1:{maxUses:2147483647,buy:{id:"minecraft:hay_block",Count:4b,Damage:0s},sell:{id:"minecraft:pumpkin_seeds",Count:4b,Damage:0s},uses:0,rewardExp:0b},2:{maxUses:2147483647,buy:{id:"minecraft:pumpkin",Count:16b,Damage:0s},sell:{id:"minecraft:melon_seeds",Count:4b,Damage:0s},uses:0,rewardExp:0b},3:{maxUses:2147483647,buy:{id:"minecraft:melon_block",Count:16b,Damage:0s},sell:{id:"minecraft:beetroot_seeds",Count:4b,Damage:0s},uses:0,rewardExp:0b},4:{maxUses:2147483647,buy:{id:"minecraft:vine",Count:8b,Damage:0s},sell:{id:"minecraft:reeds",Count:2b,Damage:0s},uses:0,rewardExp:0b},5:{maxUses:2147483647,buy:{id:"minecraft:reeds",Count:8b,Damage:0s},sell:{id:"minecraft:cactus",Count:2b,Damage:0s},uses:0,rewardExp:0b},6:{maxUses:2147483647,buy:{id:"minecraft:cactus",Count:8b,Damage:0s},sell:{id:"minecraft:dye",Count:64b,Damage:15s},uses:0,rewardExp:0b},7:{maxUses:2147483647,buy:{id:"minecraft:emerald_block",Count:1b,Damage:0s},sell:{id:"minecraft:carrot",Count:1b,Damage:0s},uses:0,rewardExp:0b},8:{maxUses:2147483647,buy:{id:"minecraft:carrot",Count:16b,Damage:0s},sell:{id:"minecraft:potato",Count:4b,Damage:0s},uses:0,rewardExp:0b},9:{maxUses:2147483647,buy:{id:"minecraft:potato",Count:16b,Damage:0s},sell:{id:"minecraft:nether_wart",Count:4b,Damage:0s},uses:0,rewardExp:0b},10:{maxUses:2147483647,buy:{id:"minecraft:nether_wart",Count:16b,Damage:0s},sell:{id:"minecraft:chorus_flower",Count:1b,Damage:0s},uses:0,rewardExp:0b},11:{maxUses:2147483647,buy:{id:"minecraft:snow",Count:16b,Damage:0s},sell:{id:"minecraft:soul_sand",Count:1b,Damage:0s},uses:0,rewardExp:0b},12:{maxUses:2147483647,buy:{id:"minecraft:cobblestone",Count:16b,Damage:0s},sell:{id:"minecraft:end_stone",Count:1b,Damage:0s},uses:0,rewardExp:0b},13:{maxUses:2147483647,buy:{id:"minecraft:tnt",Count:1b,Damage:0s},sell:{id:"minecraft:sand",Count:4b,Damage:0s},uses:0,rewardExp:0b},14:{maxUses:2147483647,buy:{id:"minecraft:hay_block",Count:1b,Damage:0s},sell:{id:"minecraft:emerald",Count:5b,Damage:0s},uses:0,rewardExp:0b},15:{maxUses:2147483647,buy:{id:"minecraft:pumpkin",Count:1b,Damage:0s},sell:{id:"minecraft:emerald",Count:2b,Damage:0s},uses:0,rewardExp:0b},16:{maxUses:2147483647,buy:{id:"minecraft:melon_block",Count:1b,Damage:0s},sell:{id:"minecraft:emerald",Count:2b,Damage:0s},uses:0,rewardExp:0b},17:{maxUses:2147483647,buy:{id:"minecraft:carrot",Count:4b,Damage:0s},sell:{id:"minecraft:emerald",Count:2b,Damage:0s},uses:0,rewardExp:0b},18:{maxUses:2147483647,buy:{id:"minecraft:potato",Count:4b,Damage:0s},sell:{id:"minecraft:emerald",Count:2b,Damage:0s},uses:0,rewardExp:0b},19:{maxUses:2147483647,buy:{id:"minecraft:beetroot",Count:4b,Damage:0s},sell:{id:"minecraft:emerald",Count:2b,Damage:0s},uses:0,rewardExp:0b},20:{maxUses:2147483647,buy:{id:"minecraft:nether_wart",Count:4b,Damage:0s},sell:{id:"minecraft:emerald",Count:2b,Damage:0s},uses:0,rewardExp:0b},21:{maxUses:2147483647,buy:{id:"minecraft:chorus_fruit",Count:4b,Damage:0s},sell:{id:"minecraft:emerald",Count:2b,Damage:0s},uses:0,rewardExp:0b},22:{maxUses:2147483647,buy:{id:"minecraft:cactus",Count:4b,Damage:0s},sell:{id:"minecraft:emerald",Count:2b,Damage:0s},uses:0,rewardExp:0b},23:{maxUses:2147483647,buy:{id:"minecraft:reeds",Count:4b,Damage:0s},sell:{id:"minecraft:emerald",Count:2b,Damage:0s},uses:0,rewardExp:0b},24:{maxUses:2147483647,buy:{id:"minecraft:wheat_seeds",Count:64b,Damage:0s},sell:{id:"minecraft:emerald",Count:1b,Damage:0s},uses:0,rewardExp:0b},25:{maxUses:2147483647,buy:{id:"minecraft:pumpkin_seeds",Count:64b,Damage:0s},sell:{id:"minecraft:emerald",Count:1b,Damage:0s},uses:0,rewardExp:0b},26:{maxUses:2147483647,buy:{id:"minecraft:melon_seeds",Count:64b,Damage:0s},sell:{id:"minecraft:emerald",Count:1b,Damage:0s},uses:0,rewardExp:0b},27:{maxUses:2147483647,buy:{id:"minecraft:beetroot_seeds",Count:64b,Damage:0s},sell:{id:"minecraft:emerald",Count:1b,Damage:0s},uses:0,rewardExp:0b},28:{maxUses:2147483647,buyB:{id:"minecraft:chorus_flower",Count:1b,Damage:0s},buy:{id:"minecraft:wheat",Count:64b,Damage:0s},sell:{id:"minecraft:armor_stand",Count:1b,tag:{NoGravity:1b,ench:[],RepairCost:1000000000,display:{Lore:[0:"§r§e設置して使用すると、看板から",1:"§c§lけっこうな§e範囲にある§2§l麦作物§eを",2:"§a収穫§eできる。看板が壊れない限り",3:"§d§n半永久的§eに使用できる。",4:"§e§o※§c§oネザー§e§oや§5§oエンド§e§oでは使用出来ない。"],Name:"§r§a§l収穫の印板：§2§l麦"},EntityTag:{Tags:[0:"SignStand",1:"PermanentStand",2:"WheatBreaker",3:"OverOnly",4:"TypeChecked"]},Invulnerable:1b,Invisible:1b},Damage:0s},uses:0,rewardExp:0b},29:{maxUses:2147483647,buyB:{id:"minecraft:chorus_flower",Count:1b,Damage:0s},buy:{id:"minecraft:carrot",Count:64b,Damage:0s},sell:{id:"minecraft:armor_stand",Count:1b,tag:{NoGravity:1b,ench:[],RepairCost:1000000000,display:{Lore:[0:"§r§e設置して使用すると、看板から",1:"§c§lけっこうな§e範囲にある§c§l人参作物§eを",2:"§a収穫§eできる。看板が壊れない限り",3:"§d§n半永久的§eに使用できる。",4:"§e§o※§c§oネザー§e§oや§5§oエンド§e§oでは使用出来ない。"],Name:"§r§a§l収穫の印板：§c§l人参"},EntityTag:{Tags:[0:"SignStand",1:"PermanentStand",2:"CarrotBreaker",3:"OverOnly",4:"TypeChecked"]},Invulnerable:1b,Invisible:1b},Damage:0s},uses:0,rewardExp:0b},30:{maxUses:2147483647,buyB:{id:"minecraft:chorus_flower",Count:1b,Damage:0s},buy:{id:"minecraft:potato",Count:64b,Damage:0s},sell:{id:"minecraft:armor_stand",Count:1b,tag:{NoGravity:1b,ench:[],RepairCost:1000000000,display:{Lore:[0:"§r§e設置して使用すると、看板から",1:"§c§lけっこうな§e範囲にある§6§l芋作物§eを",2:"§a収穫§eできる。看板が壊れない限り",3:"§d§n半永久的§eに使用できる。",4:"§e§o※§c§oネザー§e§oや§5§oエンド§e§oでは使用出来ない。"],Name:"§r§a§l収穫の印板：§6§l芋"},EntityTag:{Tags:[0:"SignStand",1:"PermanentStand",2:"PotatoBreaker",3:"OverOnly",4:"TypeChecked"]},Invulnerable:1b,Invisible:1b},Damage:0s},uses:0,rewardExp:0b},31:{maxUses:2147483647,buyB:{id:"minecraft:chorus_flower",Count:1b,Damage:0s},buy:{id:"minecraft:beetroot",Count:64b,Damage:0s},sell:{id:"minecraft:armor_stand",Count:1b,tag:{NoGravity:1b,ench:[],RepairCost:1000000000,display:{Lore:[0:"§r§e設置して使用すると、看板から",1:"§c§lけっこうな§e範囲にある§c§4ビートルート作物§eを",2:"§a収穫§eできる。看板が壊れない限り",3:"§d§n半永久的§eに使用できる。",4:"§e§o※§c§oネザー§e§oや§5§oエンド§e§oでは使用出来ない。"],Name:"§r§a§l収穫の印板：§c§4ビートルート"},EntityTag:{Tags:[0:"SignStand",1:"PermanentStand",2:"BeetBreaker",3:"OverOnly",4:"TypeChecked"]},Invulnerable:1b,Invisible:1b},Damage:0s},uses:0,rewardExp:0b},32:{maxUses:2147483647,buy:{id:"minecraft:flower_pot",Count:1b,Damage:0s},sell:{id:"minecraft:emerald",Count:16b,Damage:0s},uses:0,rewardExp:0b},33:{maxUses:2147483647,buy:{id:"minecraft:poisonous_potato",Count:1b,Damage:0s},sell:{id:"minecraft:potion",Count:1b,tag:{CustomPotionEffects:[0:{ShowParticles:1b,Duration:5,Id:19b,Amplifier:99b},1:{ShowParticles:1b,Duration:120,Id:9b,Amplifier:99b},2:{ShowParticles:1b,Duration:120,Id:9b,Amplifier:-99b},3:{ShowParticles:1b,Duration:1,Id:23b,Amplifier:2b},4:{ShowParticles:1b,Duration:120,Id:8b,Amplifier:-10b},5:{ShowParticles:1b,Duration:0,Id:26b,Amplifier:0b}],HideFlags:32,Potion:"minecraft:empty",display:{Lore:[0:"§e飲むと§2毒状態等§eになるが、",1:"§a体内の毒§eを中和し、",2:"§eわずかに§c腹が満たされる",3:"§eケンコー飲料である。",4:"§7尚、味は薄い。"],Name:"§2§lドクダヨ茶"}},Damage:0s},uses:0,rewardExp:0b},34:{maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b,Damage:0s},sell:{id:"minecraft:potion",Count:1b,tag:{CustomPotionEffects:[0:{ShowParticles:1b,Duration:5,Id:19b,Amplifier:99b},1:{ShowParticles:1b,Duration:120,Id:9b,Amplifier:99b},2:{ShowParticles:1b,Duration:120,Id:9b,Amplifier:-99b},3:{ShowParticles:1b,Duration:1,Id:23b,Amplifier:2b},4:{ShowParticles:1b,Duration:120,Id:8b,Amplifier:-10b},5:{ShowParticles:1b,Duration:0,Id:26b,Amplifier:0b}],HideFlags:32,Potion:"minecraft:empty",display:{Lore:[0:"§e飲むと§2毒状態等§eになるが、",1:"§a体内の毒§eを中和し、",2:"§eわずかに§c腹が満たされる",3:"§eケンコー飲料である。",4:"§7尚、味は薄い。"],Name:"§2§lドクダヨ茶"}},Damage:0s},uses:0,rewardExp:0b},35:{maxUses:2147483647,buyB:{id:"minecraft:sugar",Count:16b,Damage:0s},buy:{id:"minecraft:melon",Count:32b,Damage:0s},sell:{id:"minecraft:potion",Count:1b,tag:{CustomPotionEffects:[0:{ShowParticles:1b,Duration:0,Id:25b,Amplifier:-128b},1:{ShowParticles:1b,Duration:0,Id:26b,Amplifier:105b},2:{ShowParticles:0b,Duration:1,Id:17b,Amplifier:127b},3:{ShowParticles:0b,Duration:600,Id:23b,Amplifier:0b}],HideFlags:32,display:{Lore:[0:"§c§lスイカ§dの成分を凝縮したジュース。",1:"§6腹を満たす§d他、",2:"§b空腹を治す§d効能がある。"],Name:"§c§lスイカジュース"}},Damage:0s},uses:0,rewardExp:0b},36:{maxUses:2147483647,buy:{id:"minecraft:beetroot",Count:3b,Damage:0s},sell:{id:"minecraft:potion",Count:1b,tag:{CustomPotionEffects:[0:{ShowParticles:1b,Duration:4820,Id:11b,Amplifier:0b},1:{ShowParticles:1b,Duration:100,Id:16b,Amplifier:0b},2:{ShowParticles:1b,Duration:4820,Id:22b,Amplifier:1b},3:{ShowParticles:1b,Duration:0,Id:5b,Amplifier:0b},4:{ShowParticles:1b,Duration:0,Id:5b,Amplifier:0b},5:{ShowParticles:1b,Duration:0,Id:5b,Amplifier:0b},6:{ShowParticles:1b,Duration:0,Id:5b,Amplifier:0b},7:{ShowParticles:1b,Duration:0,Id:5b,Amplifier:0b},8:{ShowParticles:1b,Duration:0,Id:5b,Amplifier:0b},9:{ShowParticles:1b,Duration:0,Id:5b,Amplifier:0b},10:{ShowParticles:1b,Duration:0,Id:5b,Amplifier:0b}],HideFlags:32,display:{Lore:[0:"§c滋養強壮に効くお薬。",1:"§c飲むと体が丈夫になる。"],Name:"§4§lレッドビート"}},Damage:0s},uses:0,rewardExp:0b},37:{maxUses:2147483647,buyB:{id:"minecraft:apple",Count:1b,Damage:0s},buy:{id:"minecraft:beetroot",Count:3b,Damage:0s},sell:{id:"minecraft:potion",Count:1b,tag:{CustomPotionEffects:[0:{ShowParticles:1b,Duration:2420,Id:11b,Amplifier:1b},1:{ShowParticles:1b,Duration:100,Id:16b,Amplifier:0b},2:{ShowParticles:1b,Duration:2420,Id:22b,Amplifier:3b},3:{ShowParticles:1b,Duration:0,Id:5b,Amplifier:-128b}],HideFlags:32,display:{Lore:[0:"§cレッドビートに果汁を加え、",1:"§c吸収を早めたもの。"],Name:"§4§lレッドビート§6§lカオス"}},Damage:0s},uses:0,rewardExp:0b},38:{maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b,Damage:0s},sell:{id:"minecraft:bread",Count:2b,tag:{display:{Lore:[0:"§f腹が減ったらお互い様。",1:"§aお金§fは頂きますが、",2:"§fお裾分けします。"],Name:"§f今日の昼食"}},Damage:0s},uses:0,rewardExp:0b}]},Rotation:[0:105.77106f,1:0.0f],HandItems:[0:{},1:{}],ArmorDropChances:[0:0.085f,1:0.085f,2:0.085f,3:0.085f],Profession:0,UUIDMost:1L,CustomName:"§2§l農業家",Pos:[0:-55.633137766872636d,1:35.0d,2:8.744824082698884d],Fire:-1s,ArmorItems:[0:{},1:{},2:{},3:{id:"minecraft:grass",Count:1b,Damage:0s}],CanPickUpLoot:1b,HurtTime:0s,CareerLevel:101,Career:1,Inventory:[],CustomNameVisible:1b,Willing:1b}
```

### ShopGM

交易島の灯篭的な構造物の中にいる。

|-|-|
|Name|ShopGM|
|UUID|0-0-1-0-2|
|Tag|SystemKeeper,TypeChecked|
|Pos|(-57.5,23.5,22.5)|

```minecraftcommand
{NoGravity:1b,HurtByTimestamp:0,Attributes:[0:{Base:20.0d,Name:"generic.maxHealth"},1:{Base:0.0d,Name:"generic.knockbackResistance"},2:{Base:0.699999988079071d,Name:"generic.movementSpeed"},3:{Base:0.0d,Name:"generic.armor"},4:{Base:0.0d,Name:"generic.armorToughness"}],Invulnerable:1b,FallFlying:0b,ShowArms:0b,PortalCooldown:0,AbsorptionAmount:0.0f,FallDistance:0.0f,DisabledSlots:31,DeathTime:0s,Pose:{},Invisible:1b,Tags:[0:"TypeChecked",1:"SystemEntity"],Motion:[0:0.0d,1:0.0d,2:0.0d],Small:1b,UUIDLeast:2L,Health:20.0f,Air:300s,OnGround:0b,Dimension:0,Marker:1b,Rotation:[0:0.0f,1:0.0f],HandItems:[0:{},1:{}],UUIDMost:1L,CustomName:"ShopGM",Pos:[0:-57.5d,1:23.5d,2:22.5d],Fire:0s,ArmorItems:[0:{},1:{},2:{},3:{}],NoBasePlate:1b,HurtTime:0s}
```

### WindWallMite

|-|-|
|Name|(None)|
|Type|Endermite|
|Tags|SystemEntity,TypeChecked,WindWallMite|
|ActiveEffect|透明化Lv.1 0.5秒間|
|LifeTime|2395 (0.25秒で消滅)|

```minecraftcommand
/summon Endermite ~ ~ ~ {Silent:true,NoAI:true,Invulnerable:true,Lifetime:2395,ActiveEffects:[{Id:14b,Duration:10,Amplifier:0b,ShowParticles:false}],Tags:[SystemEntity,TypeChecked,WindWallMite]}
```

### WindWall用ArmorStand

|-|-|
|Name|(None)|
|Type|ArmorStand|
|Tags|SystemEntity,Garbage,TypeChecked|

```minecraftcommand
/summon ArmorStand ~ ~ ~ {Invisible:true,NoGravity:true,Invulnerable:true,Tags:[SystemEntity,Garbage,TypeChecked]}
```

### IronWillPoint

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|IronWillPoint,SystemEntity,TypeChecked|

```minecraftcommand
/summon AreaEffectCloud ~ ~ ~ {Invulnerable:true,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:0,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:take,Tags:[IronWillPoint,SystemEntity,TypeChecked]}
```

### TrapPoint

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|TrapPoint,SystemEntity,TypeChecked|

```minecraftcommand
/summon AreaEffectCloud ~ ~ ~ {Invulnerable:true,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:take,Tags:[TrapPoint,SystemEntity,TypeChecked]}
```

### ZantetsuPoint

|Name|(None)|
|Type|AEC|
|Tags|ZantetsuPoint,SystemEntity,TypeChecked|

```minecraftcommand
/summon AreaEffectCloud ~ ~ ~ {Invulnerable:true,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:1,RadiusPerTick:0f,WaitTime:0,Age:-9,Particle:take,Tags:[ZantetsuPoint,SystemEntity,TypeChecked]}
```

### RaiseTPMarker

```mcfunction
/summon ArmorStand ~ ~0.5 ~ {Invisible:true,Invulnerable:true,Marker:true,NoBasePlate:true,NoGravity:true,Small:true,DisabledSlots:31,Tags:[RaiseTPMarker,Garbage,SystemEntity,TypeChecked]}
```

|-|-|
|Name|(None)|
|Type|ArmorStand|
|Tags|**RaiseTPMarker**,Garbage,SystemEntity,TypeChecked|

### Candle

```mcfunction
/summon ArmorStand ~ ~ ~ {Marker:true,Small:true,Invisible:true,Invulnerable:true,NoGravity:true,NoBasePlate:true,DisabledSlots:31,PortalCooldown:390,Tags:[SystemEntity,CooldownRequired,TypeChecked],Passengers:[{id:Endermite,CustomName:”キャンドル”,Attributes:[{Name:”generic.attackDamage”,Base:0d}],ActiveEffects:[{Id:14b,Amplifier:0b,Duration:1200,ShowParticles:true}],Fire:1200s,Invulnerable:true,Silent:true,NoAI:true,Lifetime:2000,PortalCooldown:390,Tags:[Candle,TypeChecked]}]}
```

|Name|(None)|
|Type|ArmorStand|
|Tags|SystemEntity,CooldownRequired,TypeChecked|
|Passengers|キャンドル|

- キャンドル

|Name|キャンドル|
|Type|Endermite|
|Tags|Candle,TypeChecked|
|Lifetime|2000 (20秒後に消滅)|
|ActiveEffects|透明化Lv.0 60秒間|


## MOB

### 敵MOB

#### コーラスマイト

コーラスマイトが実際に召喚されるのは[毎tick実行するコマンド群2]({{site.baseurl}}/command/xCircuit2/xCircuit2_reset.html)で行われる。

```minecraftcommand
Endermite ~ ~ ~ {CustomName:"コーラスマイト",Health:200f,Lifetime:1900,Attributes:[{Name:"generic.maxHealth",Base:200d},{Name:"generic.movementSpeed",Base:0.3d},{Name:"generic.attackDamage",Base:1d},{Name:"generic.knockbackResistance",Base:0.3d},{Name:"generic.followRange",Base:32d}],HandItems:[{tag:{ench:[{id:19s,lvl:20s}]},id:"minecraft:iron_sword",Count:0b,Damage:0s},{}]}
```

### 嫌な予感

嫌な予感によって召喚されるエンティティは、すべてスポナー付きマインカートによって召喚される。詳しくは[嫌な予感実行]({{site.baseurl}}/command/xCircuit1/xCircuit1_eventFullfill.html)を参照。

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

深淵様のスキル実行などについては[敵スキル実行]({{site.baseurl}}/command/xCircuit1/xCircuit1_runMobSkill.html)を参照

```minecraftcommand
/summon MinecartSpawner ~ ~ ~ {Invulnerable:true,MinSpawnDelay:32000s,MaxSpawnDelay:32000s,SpawnCount:1s,SpawnRange:0s,RequiredPlayerRange:99s,MaxNearbyEntities:999s,SpawnPotentials:[{Weight:1}],Motion:[0d,1d,0d],SpawnData:{id:XPOrb,Age:6000s,Passengers:[{id:Zombie,DeathLootTable:"usb:events/shinen",Tags:[AbyssWarp,SkillMob,Shinen],CustomName:"深淵様",CustomNameVisible:true, HandItems:[{id:minecraft:diamond_pickaxe,Count:0b,tag:{display:{Name:"全能ノ一"},ench:[{id:16s,lvl:5s},{id:19s,lvl:5s},{id:20s,lvl:5s},{id:32s,lvl:5s},{id:34s,lvl:5s},{id:35s,lvl:5s}]}}], ArmorItems:[{id:"minecraft:leather_boots",Count:0b,tag:{display:{Name:"終焉ヲ告ゲル者",color:8339378},ench:[{id:0s,lvl:0s},{id:1s,lvl:1s},{id:2s,lvl:2s},{id:3s,lvl:3s},{id:4s,lvl:4s},{id:5s,lvl:5s},{id:6s,lvl:6s},{id:7s,lvl:7s},{id:8s,lvl:8s}]}},{id:"minecraft:leather_leggings",Count:0b,tag:{display:{Name:"終焉ヲ告ゲル者",color:8339378},ench:[{id:0s,lvl:0s},{id:1s,lvl:1s},{id:2s,lvl:2s},{id:3s,lvl:3s},{id:4s,lvl:4s},{id:5s,lvl:5s},{id:6s,lvl:6s},{id:7s,lvl:7s},{id:8s,lvl:8s}]}},{id:"minecraft:leather_chestplate",Count:0b,tag:{display:{Name:"終焉ヲ告ゲル者",color:8339378},ench:[{id:0s,lvl:0s},{id:1s,lvl:1s},{id:2s,lvl:2s},{id:3s,lvl:3s},{id:4s,lvl:4s},{id:5s,lvl:5s},{id:6s,lvl:6s},{id:7s,lvl:7s},{id:8s,lvl:8s}]}},{id:"minecraft:chorus_flower",Count:0b,tag:{display:{Name:"終焉ヲ告ゲル者",color:8339378},ench:[{id:0s,lvl:15s},{id:1s,lvl:1s},{id:2s,lvl:2s},{id:3s,lvl:3s},{id:4s,lvl:4s},{id:5s,lvl:5s},{id:6s,lvl:6s},{id:7s,lvl:7s},{id:8s,lvl:8s}]}}],ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,Ambient:false,ShowParticles:false},{Id:11b,Amplifier:1b,Duration:2147483647,Ambient:false,ShowParticles:false},{Id:8b,Amplifier:4b,Duration:2147483647,Ambient:false,ShowParticles:false}],Health:1000f,Attributes:[{Name:"generic.maxHealth",Base:1000d},{Name:"generic.followRange",Base:60d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.movementSpeed",Base:0.33d}]}]},Tags:[CooldownRequired,TypeChecked],PortalCooldown:4,Delay:3s}
```

#### 「クモだー！」

SATの蜘蛛の巣設置については[時間経過]({{site.baseurl}}/command/xCircuit1/xCircuit1_timeElapsed.html)を参照

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

ライダー達のスキル実行などについては[敵スキル実行]({{site.baseurl}}/command/xCircuit1/xCircuit1_runMobSkill.html)を参照

```minecraftcommand
/summon MinecartSpawner ~ ~1 ~ {Invulnerable:true,MinSpawnDelay:0s,MaxSpawnDelay:0s,SpawnCount:1s,SpawnRange:0s,RequiredPlayerRange:10s,MaxNearbyEntities:999s,Motion:[0d,0.05d,0d],SpawnPotentials:[{Weight:1,Entity:{id:XPOrb,Age:6000s,Passengers:[{id:EntityHorse,Tags:[AbyssWarp],NoAI:false,Type:4,Variant:0,Saddle:1b,ArmorItem:{id:iron_horse_armor,Count:0b,Damage:0s},Tame:1b,Health:400.0f,Attributes:[{Name:generic.maxHealth,Base:400.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.knockbackResistance,Base:0.35d},{Name:horse.jumpStrength,Base:5d}],ActiveEffects:[{Id:11b,Amplifier:0b,Duration:2147483647,ShowParticles:false}],Passengers:[{NoAI:false,CustomName:"ホワイトライダー",CustomNameVisible:true,Tags:[WhiteRider,SkillMob],DeathLootTable:"usb:events/goddess",id:Skeleton,Health:450.0f,Attributes:[{Name:generic.maxHealth,Base:450.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.attackDamage,Base:4d},{Name:generic.knockbackResistance,Base:0.35d},{Name:generic.followRange,Base:32d}],ActiveEffects:[{Id:11b,Amplifier:1b,Duration:2147483647,ShowParticles:false},{Id:8b,Amplifier:3b,Duration:2147483647,ShowParticles:false}],ArmorItems:[{id:chainmail_boots},{id:chainmail_leggings},{id:chainmail_chestplate},{id:skull,Damage:3s,tag:{SkullOwner:{Id:"84720d0e-6555-4a13-8482-9adbc4a92630",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjhmYzEwZjkzNjRhY2U1MzFhMDJjNmNmZTg5MjcxOWFiMzFiZDQzMjkzZmQ0ZWVkOWNlODdjYzFiNWM3MTIifX19"}]}}}}],HandItems:[{id:bow,tag:{ench:[]}},{}]}]}]}},{Weight:1,Entity:{id:XPOrb,Age:6000s,Passengers:[{id:EntityHorse,Tags:[AbyssWarp],NoAI:false,Fire:0s,Type:0,Variant:2,Saddle:1b,ArmorItem:{id:golden_horse_armor,Count:0b,Damage:0s},Tame:1b,Health:400.0f,Attributes:[{Name:generic.maxHealth,Base:400.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.knockbackResistance,Base:0.35d},{Name:horse.jumpStrength,Base:5d}],ActiveEffects:[{Id:11b,Amplifier:0b,Duration:2147483647,ShowParticles:false},{Id:12b,Amplifier:0b,Duration:2147483647,ShowParticles:false}],Passengers:[{NoAI:false,CustomName:"レッドライダー",CustomNameVisible:true,Tags:[RedRider,SkillMob],DeathLootTable:"usb:events/goddess",id:PigZombie,ArmorItems:[{id:leather_boots,tag:{display:{color:16711680}}},{id:leather_leggings,tag:{display:{color:16711680}}},{id:leather_chestplate,tag:{display:{color:16711680}}},{id:skull,Damage:3s,tag:{SkullOwner:{Id:"9fc4ed7d-f92d-4cfb-95fe-8609954c2208",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTE0YWZiMWIzYmZiMGZmYjg0OTgxM2U2YTEyNjhlMmM1ZWVhN2RlNGNhMDQzYmVmYjBjNjZhNGI4MzM4NiJ9fX0="}]}}}}],HandItems:[{id:iron_sword,tag:{ench:[]}},{}],Health:450.0f,Attributes:[{Name:generic.maxHealth,Base:450.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.attackDamage,Base:10d},{Name:generic.knockbackResistance,Base:0.35d},{Name:generic.followRange,Base:32d}],ActiveEffects:[{Id:11b,Amplifier:1b,Duration:2147483647,ShowParticles:false},{Id:8b,Amplifier:3b,Duration:2147483647,ShowParticles:false}]}]}]}},{Weight:1,Entity:{id:XPOrb,Age:6000s,Passengers:[{id:EntityHorse,Tags:[AbyssWarp],NoAI:false,Type:0,Variant:1028,Saddle:1b,Tame:1b,Health:400.0f,Attributes:[{Name:generic.maxHealth,Base:400.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.knockbackResistance,Base:0.35d},{Name:horse.jumpStrength,Base:5d}],ActiveEffects:[{Id:11b,Amplifier:1b,Duration:2147483647,ShowParticles:false},{Id:12b,Amplifier:0b,Duration:2147483647,ShowParticles:false}],Passengers:[{NoAI:false,CustomName:"ブラックライダー",CustomNameVisible:true,Tags:[BlackRider,SkillMob],DeathLootTable:"usb:events/goddess",id:Skeleton,SkeletonType:1b,ArmorItems:[{id:leather_boots,tag:{display:{color:0}}},{id:leather_leggings,tag:{display:{color:0}}},{id:leather_chestplate,tag:{display:{color:0}}},{id:skull,Damage:3s,tag:{SkullOwner:{Id:"16dcd66d-df16-4fc5-a038-db6248c6bb70",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWQ4NDdjMzdiNTMxZmE5MmJiOTVkNGMwNzBlNWQ4N2IzMjU2YTljNjVhZTUyMWE1OTgxMzMyOTBjN2NiYiJ9fX0="}]}}}}],HandItems:[{id:brewing_stand,tag:{ench:[]}},{}],Health:300.0f,Attributes:[{Name:generic.maxHealth,Base:300.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.attackDamage,Base:4d},{Name:generic.knockbackResistance,Base:0.35d},{Name:generic.followRange,Base:32d}],ActiveEffects:[{Id:11b,Amplifier:2b,Duration:2147483647,ShowParticles:false},{Id:8b,Amplifier:3b,Duration:2147483647,ShowParticles:false}]}]}]}},{Weight:1,Entity:{id:XPOrb,Age:6000s,Passengers:[{id:EntityHorse,Tags:[AbyssWarp],NoAI:false,Type:3,Variant:0,Saddle:1b,ArmorItem:{id:iron_horse_armor,Count:0b,Damage:0s},Tame:1b,Health:400.0f,Attributes:[{Name:generic.maxHealth,Base:400.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.knockbackResistance,Base:0.35d},{Name:horse.jumpStrength,Base:5d}],ActiveEffects:[{Id:11b,Amplifier:1b,Duration:2147483647,ShowParticles:false}],Passengers:[{NoAI:false,CustomName:"ペイルライダー",CustomNameVisible:true,Tags:[PaleRider,SkillMob],DeathLootTable:"usb:events/goddess",id:Zombie,ArmorItems:[{id:leather_boots,tag:{display:{color:4814131}}},{id:leather_leggings,tag:{display:{color:4814131}}},{id:leather_chestplate,tag:{display:{color:4814131}}},{id:skull,Damage:3s,tag:{SkullOwner:{Id:"c84e47fa-4492-4281-ab2f-0b53f15e8f55",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjJlNzljYmNlMTdiZmY4YTdiMjQ4NjRmYmMzZDNkOTc3ZWVhNTQ0YmRjMmJiODY3ODU4YjM1ZDUwMWI0NTY3In19fQ=="}]}}}}],HandItems:[{id:diamond_hoe,tag:{ench:[]}},{}],Health:300.0f,Attributes:[{Name:generic.maxHealth,Base:300.0d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.attackDamage,Base:10d},{Name:generic.knockbackResistance,Base:0.35d},{Name:generic.followRange,Base:32d}],ActiveEffects:[{Id:11b,Amplifier:2b,Duration:2147483647,ShowParticles:false},{Id:8b,Amplifier:3b,Duration:2147483647,ShowParticles:false}]}]}]}}],Tags:[CooldownRequired,TypeChecked],PortalCooldown:1,Delay:-1s}
```

#### 「空に何か浮かんでる！」

```minecraftcommand
/summon MinecartSpawner ~ ~ ~ {Invulnerable:true,MinSpawnDelay:32767s,MaxSpawnDelay:32767s,SpawnCount:3s,SpawnRange:80s,RequiredPlayerRange:99s,MaxNearbyEntities:999s,SpawnPotentials:[{Weight:1}],Motion:[0d,1d,0d],SpawnData:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Shulker,DeathLootTable:"usb:events/box",Glowing:true,NoAI:true,CustomName:玉手箱,CustomNameVisible:true,Health:100f,Attributes:[{Name:generic.maxHealth,Base:100d},{Name:generic.followRange,Base:16d}]}]},Tags:[CooldownRequired,TypeChecked],PortalCooldown:11,Delay:10s}
```

### トカルトコルデエンカウント

- トカルトコルデでランダムにエンカウントするモンスターを発生させるスポナー付きマインカート
- 詳しくは[トカルト処理]({{site.baseurl}}/command/xCircuit1/xCircuit1_iceProcessing.html)

#### summonコマンド

```minecraftcommand
/summon MinecartSpawner ~ ~ ~ {MinSpawnDelay:0s,MaxSpawnDelay:0s,Delay:-1s,SpawnRange:0s,SpawnCount:2s,MaxNearbyEntities:999s,RequiredPlayerRange:16s,PortalCooldown:1,Tags:[CooldownRequired,TypeChecked],SpawnPotentials:[{Weight:6,Entity:{Age:6000s,id:"XPOrb",Passengers:[{CustomName:"ﾗﾝﾀﾞﾑﾑｰﾊﾞｰ",DeathTime:19s,NoGravity:1b,Size:1,Silent:1b,DeathLootTable:"empty",AbsorptionAmount:4f,Attributes:[{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.followRange",Base:0d}],ActiveEffects:[{Id:1b,Amplifier:127b,Duration:999},{Id:14b,Amplifier:127b,Duration:999},{Id:20b,Amplifier:127b,Duration:999}],id:"Slime",Passengers:[{id:"PigZombie",Silent:true,CustomName:フローズン,DeathLootTable:"usb:entities/ice/mob1",Anger:100s,IsBaby:true,Health:20f,Attributes:[{Name:generic.maxHealth,Base:20d},{Name:generic.movementSpeed,Base:0.35d},{Name:generic.attackDamage,Base:4d},{Name:generic.knockbackResistance,Base:0.3d},{Name:generic.followRange,Base:48d}],ActiveEffects:[{Id:8b,Amplifier:3b,Duration:2147483647,ShowParticles:false},{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false}],HandItems:[{id:"minecraft:ice",Damage:0s,Count:0b,tag:{ench:[{id:19s,lvl:2s}]}},{id:"minecraft:ice",Damage:0s,Count:0b,tag:{ench:[{id:19s,lvl:2s}]}}],ArmorItems:[{},{},{},{id:"minecraft:ice",Damage:0s,Count:0b,tag:{ench:[{id:7s,lvl:1s}]}}],Passengers:[{id:Guardian,Silent:true,DeathLootTable:"minecraft:empty",CustomName:"シャーベット",Health:100.00f,Attributes:[{Name:generic.maxHealth,Base:100.00d},{Name:generic.attackDamage,Base:4.00d},{Name:generic.followRange,Base:48.00d}],ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647}]}]}]}]}},{Weight:5,Entity:{Age:6000s,id:"XPOrb",Passengers:[{CustomName:"ﾗﾝﾀﾞﾑﾑｰﾊﾞｰ",DeathTime:19s,NoGravity:1b,Size:1,Silent:1b,DeathLootTable:"empty",AbsorptionAmount:4f,Attributes:[{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.followRange",Base:0d}],ActiveEffects:[{Id:1b,Amplifier:127b,Duration:999},{Id:14b,Amplifier:127b,Duration:999},{Id:20b,Amplifier:127b,Duration:999}],id:"Slime",Passengers:[{CustomName:"ピンクフロスト",Silent:1b,Health:150f,Attributes:[{Name:"generic.maxHealth",Base:150d},{Name:"generic.movementSpeed",Base:-0.2d,Modifiers:[{UUIDMost:8144722948526719024l,UUIDLeast:-7778190119041365872l,Amount:-2.1000000834465d,Operation:2,Name:"effect.moveSlowdown 13"}]},{Name:"generic.attackDamage",Base:5d},{Name:"generic.knockbackResistance",Base:0.1d},{Name:"generic.followRange",Base:64d}],ActiveEffects:[{Id:1b,Amplifier:2b,Duration:2147483647},{Id:8b,Amplifier:5b,Duration:2147483647},{Id:14b,Amplifier:127b,Duration:2147483647}],Lifetime:1400,id:"Endermite",ArmorItems:[{},{},{},{tag:{ench:[{id:2s,lvl:50s},{id:7s,lvl:1s}]},id:"minecraft:iron_helmet",Count:0b,Damage:0s}],ArmorDropChances:[0f,0f,0f,0f],Passengers:[{CustomName:"フリーザー",Potion:{id:"minecraft:lingering_potion",Count:1b,tag:{CustomPotionEffects:[{Id:8b,Amplifier:-10b,Duration:200,ShowParticles:1b},{Id:2b,Amplifier:10b,Duration:200,ShowParticles:1b},{Id:20b,Amplifier:2b,Duration:200,ShowParticles:1b}]}},id:"ThrownPotion",Passengers:[{WaitTime:1000,Particle:"snowshovel",CustomName:"DEATHCOUNT",Duration:150,Radius:0.1f,RadiusOnUse:0f,ReapplicationDelay:0,Effects:[{Id:7b,Amplifier:50b,Duration:20}],id:"AreaEffectCloud"}]},{CustomName:"フロストベアー",DeathLootTable:"usb:entities/ice/mob1",Health:350f,Attributes:[{Name:"generic.maxHealth",Base:350d},{Name:"generic.movementSpeed",Base:-0.36d,Modifiers:[{UUIDMost:8144722948526719024l,UUIDLeast:-7778190119041365872l,Amount:-2.1000000834465d,Operation:2,Name:"effect.moveSlowdown 13"}]},{Name:"generic.attackDamage",Base:15d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.followRange",Base:64d}],ActiveEffects:[{Id:1b,Amplifier:2b,Duration:2147483647},{Id:8b,Amplifier:5b,Duration:2147483647}],ArmorItems:[{},{},{},{tag:{ench:[{id:2s,lvl:50s},{id:7s,lvl:1s}]},id:"minecraft:iron_helmet",Count:0b,Damage:0s}],ArmorDropChances:[0f,0f,0f,0f],id:"PolarBear",Passengers:[{CustomName:"フリーザー",Potion:{id:"minecraft:lingering_potion",Count:1b,tag:{CustomPotionEffects:[{Id:8b,Amplifier:-10b,Duration:200,ShowParticles:1b},{Id:2b,Amplifier:10b,Duration:200,ShowParticles:1b},{Id:20b,Amplifier:2b,Duration:200,ShowParticles:1b}]}},id:"ThrownPotion",Passengers:[{WaitTime:1000,Particle:"snowshovel",CustomName:"DEATHCOUNT",Duration:150,Radius:0.1f,RadiusOnUse:0f,ReapplicationDelay:0,Effects:[{Id:7b,Amplifier:50b,Duration:20}],id:"AreaEffectCloud"},{Particle:"snowshovel",CustomName:"吹雪のオーラー",Duration:1020,Radius:1.5f,RadiusOnUse:0f,ReapplicationDelay:0,Effects:[],id:"AreaEffectCloud"}]}]}]}]}]}},{Weight:4,Entity:{Age:6000sid:"XPOrb",Passengers:[{CustomName:"ﾗﾝﾀﾞﾑﾑｰﾊﾞｰ",DeathTime:19s,NoGravity:1b,Size:1,Silent:1b,DeathLootTable:"empty",AbsorptionAmount:4f,Attributes:[{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.followRange",Base:0d}],ActiveEffects:[{Id:1b,Amplifier:127b,Duration:999},{Id:14b,Amplifier:127b,Duration:999},{Id:20b,Amplifier:127b,Duration:999}],id:"Slime",Passengers:[{id:Zombie,CustomName:"鉄を貪る者:弱",Silent:true,DeathLootTable:"usb:entities/ice/mob1",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false},{Id:25b,Amplifier:-128b,Duration:2147483647,ShowParticles:false}],HandItems:[{},{}],ArmorItems:[{},{},{id:minecraft:iron_chestplate,Damage:0s,Count:0b},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"e49a7f35-e644-476d-bd3d-ce2aca71455f",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZmFhMTc1MGY2ZWYzMTRiYjM2Njg2YTlmN2VjNzdkOTgzNzgzZjZhM2VjZGEyZTMyYzJmYWViMDM4M2Y3N2EzIn19fQ=="}]}}}}],Health:40f,Attributes:[{Name:"generic.maxHealth",Base:40d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.0d},{Name:"generic.movementSpeed",Base:0.4d},{Name:"generic.attackDamage",Base:2.0d}],Passengers:[{id:Guardian,Health:10f,Silent:true,DeathLootTable:"empty",CustomName:"照射装置",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false}],Attributes:[{Name:"generic.maxHealth",Base:10d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.0d},{Name:"generic.movementSpeed",Base:0.0d},{Name:"generic.attackDamage",Base:3.0d}],Passengers:[{id:AreaEffectCloud,Particle:"magicCrit",Duration:999,Radius:0.01f,CustomName:"プロテクト"}]}]}]}]}},{Weight:3,Entity:{Age:6000s,id:"XPOrb",Passengers:[{CustomName:"ﾗﾝﾀﾞﾑﾑｰﾊﾞｰ",DeathTime:19s,NoGravity:1b,Size:1,Silent:1b,DeathLootTable:"empty",AbsorptionAmount:4f,Attributes:[{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.followRange",Base:0d}],ActiveEffects:[{Id:1b,Amplifier:127b,Duration:999},{Id:14b,Amplifier:127b,Duration:999},{Id:20b,Amplifier:127b,Duration:999}],id:"Slime",Passengers:[{id:Zombie,CustomName:"鉄を貪る者",Silent:true,DeathLootTable:"usb:entities/ice/mob2",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false},{Id:25b,Amplifier:-128b,Duration:2147483647,ShowParticles:false}],HandItems:[{id:minecraft:diamond_hoe,Damage:0s,Count:0b},{id:minecraft:diamond_hoe,Damage:0s,Count:0b}],ArmorItems:[{},{},{id:minecraft:diamond_chestplate,Damage:0s,Count:0b},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"5421d342-fb73-4e7c-9be5-8a523a4da8fb",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWYzOTQ5Mjk4OTExZGQzZjEwYjc2NmYxMTJkOWFjNzkzMmQ5ZDVhN2Q4YWNhZjU4ZjQyODVjYTdmM2FhIn19fQ=="}]}}}}],Health:60f,Attributes:[{Name:"generic.maxHealth",Base:60d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.4d},{Name:"generic.movementSpeed",Base:0.3d},{Name:"generic.attackDamage",Base:4.0d}],Passengers:[{id:Guardian,Health:10f,Silent:true,DeathLootTable:"empty",CustomName:"照射装置",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false}],Attributes:[{Name:"generic.maxHealth",Base:10d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.0d},{Name:"generic.movementSpeed",Base:0.0d},{Name:"generic.attackDamage",Base:3.0d}],Passengers:[{id:AreaEffectCloud,Particle:"magicCrit",Duration:999,Radius:0.01f,CustomName:"プロテクト"}]}]}]}]}},{Weight:2,Entity:{Age:6000s,id:"XPOrb",Passengers:[{CustomName:"ﾗﾝﾀﾞﾑﾑｰﾊﾞｰ",DeathTime:19s,NoGravity:1b,Size:1,Silent:1b,DeathLootTable:"empty",AbsorptionAmount:4f,Attributes:[{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.followRange",Base:0d}],ActiveEffects:[{Id:1b,Amplifier:127b,Duration:999},{Id:14b,Amplifier:127b,Duration:999},{Id:20b,Amplifier:127b,Duration:999}],id:"Slime",Passengers:[{id:Zombie,CustomName:"鉄を貪る者:強",Silent:true,DeathLootTable:"usb:entities/ice/mob3",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false},{Id:25b,Amplifier:-128b,Duration:2147483647,ShowParticles:false}],HandItems:[{id:minecraft:iron_axe,Damage:0s,Count:0b},{id:minecraft:iron_axe,Damage:0s,Count:0b}],ArmorItems:[{},{id:minecraft:chainmail_leggings,Damage:0s,Count:0b},{id:minecraft:leather_chestplate,Damage:0s,Count:0b,tag:{display:{color:3749712}}},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"058673a2-6a98-4392-a7b5-5a44f4543f91",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTkwMjRkNmQ4MjYxOWYyN2YyNTk1NmRmMGJkNWI0NGE2ZDc2N2VlYjNmNmM2NGRkOTZjMWVhNzI1Y2RjZmIifX19"}]}}}}],Health:100f,Attributes:[{Name:"generic.maxHealth",Base:100d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.6d},{Name:"generic.movementSpeed",Base:0.2d},{Name:"generic.attackDamage",Base:10.0d}],Passengers:[{id:Guardian,Health:10f,Silent:true,DeathLootTable:"empty",CustomName:"照射装置",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false}],Attributes:[{Name:"generic.maxHealth",Base:10d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.0d},{Name:"generic.movementSpeed",Base:0.0d},{Name:"generic.attackDamage",Base:3.0d}],Passengers:[{id:AreaEffectCloud,Particle:"magicCrit",Duration:999,Radius:0.01f,CustomName:"プロテクト"}]}]}]}]}},{Weight:1,Entity:{Age:6000s,id:"XPOrb",Passengers:[{CustomName:"ﾗﾝﾀﾞﾑﾑｰﾊﾞｰ",DeathTime:19s,NoGravity:1b,Size:1,Silent:1b,DeathLootTable:"empty",AbsorptionAmount:4f,Attributes:[{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.followRange",Base:0d}],ActiveEffects:[{Id:1b,Amplifier:127b,Duration:999},{Id:14b,Amplifier:127b,Duration:999},{Id:20b,Amplifier:127b,Duration:999}],id:"Slime",Passengers:[{id:Zombie,CustomName:"鉄を貪る者:凶",Silent:true,DeathLootTable:"usb:entities/ice/mob4",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false},{Id:25b,Amplifier:-128b,Duration:2147483647,ShowParticles:false}],HandItems:[{id:minecraft:diamond_sword,Damage:0s,Count:0b},{id:minecraft:diamond_sword,Damage:0s,Count:0b}],ArmorItems:[{},{id:minecraft:diamond_leggings,Damage:0s,Count:0b},{id:minecraft:diamond_chestplate,Damage:0s,Count:0b},{id:minecraft:skull,Damage:3s,Count:0b,tag:{SkullOwner:{Id:"e10c2555-b690-4ece-90f0-155ddf1a79f7",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTlkMmM2ZWJmOGRhYzI1N2MzZTIyN2M5MWQ4ZTVlZDQwMzQ1ZWYyODQ2YzY3NWY4NmE4N2ViMjNkOGMxMiJ9fX0="}]}}}}],Health:200f,Attributes:[{Name:"generic.maxHealth",Base:200d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.8d},{Name:"generic.movementSpeed",Base:0.35d},{Name:"generic.attackDamage",Base:20.0d}],Passengers:[{id:Guardian,Health:10f,Silent:true,DeathLootTable:"empty",CustomName:"照射装置",ActiveEffects:[{Id:14b,Amplifier:127b,Duration:2147483647,ShowParticles:false}],Attributes:[{Name:"generic.maxHealth",Base:10d},{Name:"generic.followRange",Base:48d},{Name:"generic.knockbackResistance",Base:0.0d},{Name:"generic.movementSpeed",Base:0.0d},{Name:"generic.attackDamage",Base:3.0d}],Passengers:[{id:AreaEffectCloud,Particle:"magicCrit",Duration:999,Radius:0.01f,CustomName:"プロテクト"}]}]}]}]}}]}
```

## その他

### 旋風1

跳躍でのダメージ付与用エンティティその1

|-|-|
|Name|旋風|
|Type|Arrow|
|Tags|Garbage|
|damage|15(ハート7.5個分)|

```minecraftcommand
/summon Arrow ~ ~0.02 ~ {CustomName:”旋風”,damage:15d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}
```

### 旋風2

跳躍でのダメージ付与用エンティティその2

|-|-|
|Name|旋風|
|Type|Arrow|
|Tags|Garbage|
|damage|35(ハート17.5個分)|

```minecraftcommand
/summon Arrow ~ ~0.02 ~ {CustomName:”旋風”,damage:35d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}
```

### 旋風3

跳躍でのダメージ付与用エンティティその3

|-|-|
|Name|旋風|
|Type|Arrow|
|Tags|Garbage|
|damage|60(ハート30個分)|

```minecraftcommand
/summon Arrow ~ ~0.02 ~ {CustomName:”旋風”,damage:60d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}
```

### AerialShockwave

|-|-|
|Name|(None)|
|Type|Fireball|
|Tags|AerialShockwave,CooldownRequired,TypeChecked|

```minecraft
/summon Fireball ~ ~ ~ {direction:[0d,0d,0d],ExplosionPower:0,Tags:[AerialShockwave,CooldownRequired,TypeChecked],PortalCooldown:5}
```

### 斬鉄剣

|Name|斬鉄剣|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|650|
|life|1200(即デスポーンする)|

```minecraftcommand
/summon Arrow ~ ~0.02 ~ {CustomName:"斬鉄剣",damage:650d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

### Kasap1

```mcfunction
/summon Arrow ~ ~ ~{Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:smoke,CustomName:"⇩DEF⇩",CustomNameVisible:true,Tags:[Kasap,Kasap1,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|FlyingObject, TypeChecked|
|life|800 (20秒後に消滅)|

- Passengers

|-|-|
|Name|**⇩DEF⇩**|
|Type|AEC|
|Tags|Kasap, **Kasap1**, TypeChecked|
|Radius|5|
|Duration|400 (20sec)|

### Kasap2

```mcfunction
/summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:smoke,CustomName:"⇩⇩DEF⇩⇩",CustomNameVisible:true,Tags:[Kasap,Kasap2,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|FlyingObject, TypeChecked|
|life|800 (20秒後に消滅)|

- Passengers

|-|-|
|Name|**⇩⇩DEF⇩⇩**|
|Type|AEC|
|Tags|Kasap, **Kasap2**, TypeChecked|
|Radius|5|
|Duration|400 (20sec)|

### Kasap3

```mcfunction
/summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:smoke,CustomName:"⇩⇩⇩DEF⇩⇩⇩",CustomNameVisible:true,Tags:[Kasap,Kasap3,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|FlyingObject, TypeChecked|
|life|800 (20秒後に消滅)|

- Passengers

|-|-|
|Name|**⇩⇩⇩DEF⇩⇩⇩**|
|Type|AEC|
|Tags|Kasap, **Kasap3**, TypeChecked|
|Radius|5|
|Duration|400 (20sec)|

### Decelerate1

```mcfunction
/summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:wake,CustomName:"⇩SPD⇩",CustomNameVisible:true,Tags:[Decelerate,Decelerate1,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|FlyingObject, TypeChecked|
|life|800 (20秒後に消滅)|

- Passengers

|-|-|
|Name|**⇩SPD⇩**|
|Type|AEC|
|Tags|Decelerate, **Decelerate1**, TypeChecked|
|Radius|5|
|Duration|400 (20sec)|

### Decelerate2

```mcfunction
/summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:wake,CustomName:"⇩⇩SPD⇩⇩",CustomNameVisible:true,Tags:[Decelerate,Decelerate2,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|FlyingObject, TypeChecked|
|life|800 (20秒後に消滅)|

- Passengers

|-|-|
|Name|**⇩⇩SPD⇩⇩**|
|Type|AEC|
|Tags|Decelerate, **Decelerate2**, TypeChecked|
|Radius|5|
|Duration|400 (20sec)|

### レーダーサイト

```mcfunction
/summon ArmorStand ~ ~ ~ {Invulnerable:true, Small:true, NoGravity:true, NoBasePlate:true, Invisible:true, DisabledSlots:31, Pose:{Body:[180f,0f,0f],LeftLeg:[180f,0f,-10f],RightLeg:[180f,0f,10f]}, CustomName:"レーダーサイト", CustomNameVisible:true, ArmorItems:[{},{},{},{id:"minecraft:beacon",Count:0b,Damage:0s}], Tags:[PreRadarSite,RadarSite,CooldownRequired,TypeChecked], PortalCooldown:200}
```

|-|-|
|Name|レーダーサイト|
|Type|ArmorStand|
|Tags|**PreRadarSite**,RadarSite,CooldownRequired,TypeChecked|
|ArmorItems|{},{},{},{id:"minecraft:**beacon**",Count:0b,Damage:0s}|

### ニフラムトラップポイント

```mcfunction
/summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:800s,Tags:[FlyingObject,TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:400,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:witchMagic,CustomName:"☠",CustomNameVisible:true,Tags:[Poof,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|FlyingObject, TypeChecked|
|life|800 (20秒後に消滅)

- Passengers

|-|-|
|Name|☠|
|Type|AEC|
|Tags|Poof,TypeChecked|
|Duration|400 (20sec)|

### RaisePoint

```mcfunction
/summon Arrow ~ ~ ~ {Silent:true,damage:0d,life:580s,Tags:[TypeChecked],Passengers:[{id:AreaEffectCloud,Radius:0.5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:620,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:endRod,CustomName:”✟”,CustomNameVisible:true,Tags:[RaisePoint,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|TypeChecked|
|life|580 (**31秒後に消滅**)|

- Passengers

|-|-|
|Name|**✟**|
|Type|AEC|
|Tags|**RaisePoint**,TypeChecked|

### スノウ用雪壁

```mcfunction
/summon ArmorStand ~ ~ ~ {Invulnerable:true,Small:true,Invisible:true,DisabledSlots:31,Marker:true,NoGravity:true, Health:0f, Passengers:[{id:FallingSand,Block:minecraft:snow,Time:1b,DropItem:false,Tags:[Snow], Passengers:[{id:FallingSand,Block:minecraft:snow_layer,Data:7b,Time:1,DropItem:false}]}]}
```

|-|-|
|Name|(None)|
|Type|ArmorStand|
|Passengers|Snow|

- Snow

|-|-|
|Name|(None)|
|Type|FallingSand|
|Tags|Snow|
|Block|minecraft:snow|
|Time|1|
|Passengers|Snow Layer|

- Snow Layer

|-|-|
|Name|(None)|
|Type|FallingSand|
|Type|FallingSand|
|Block|minecraft:snow_layer|
|Time|1|
