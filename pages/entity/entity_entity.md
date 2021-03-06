---
title: エンティティ
tags: [敵Mob,SystemEntity,村人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,エンティティ
update: 2020-11-20 09:00:00 +0000
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
|Tags|**Candle**,TypeChecked|
|Lifetime|**2000 (20秒後に消滅)**|
|ActiveEffects|透明化Lv.0 60秒間|

### TestWeather

```mcfunction
/summon Arrow ~ ~ ~ {Fire:10s,life:1190s,damage:0d,Tags:[TestWeather,SystemEntity,CooldownRequired,TypeChecked],PortalCooldown:2}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|**TestWeather**,SystemEntity,CooldownRequired,TypeChecked|
|life|**1190 (0.5秒後に消滅)**|
|Fire|**10**|

### 重力

```mcfunction
/summon FallingSand ~ ~0.03 ~ {CustomName:”重力”,Block:”minecraft:piston_extension”,Time:1,DropItem:false,HurtEntities:true,FallHurtMax:18,FallHurtAmount:18f,FallDistance:10f,Tags:[SystemEntity]}
```

|-|-|
|Name|重力|
|Type|FallingSand (piston_extension)|
|Tags|SystemEntity|
|HurtEntities|true|
|FallHurtMax|**18**|

### PomPom

```mcfunction
/summon AreaEffectCloud ~ ~ ~ {ReapplicantDelay:20,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:0,RadiusPerTick:0f,WaitTime:10,Age:0,Particle:take,Tags:[SystemEntity,TypeChecked],Passengers:[{id:FireworksRocketEntity,Life:-10,LifeTime:25,Tags:[PomPom,SystemEntity,TypeChecked],FireworksItem:{id:minecraft:fireworks,Count:1,tag:{Fireworks:{Explosions:[{Type:1b,Flicker:trueTrail:false,Colors:[16777215],FadeColors:[16752934]},{Type:3b,Flicker:trueTrail:false,Colors:[3361970],FadeColors:[8375321]}]}}}}]}
```

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|SystemEntity,TypeChecked|
|Passengers|PomPom|

- PomPom

|-|-|
|Name|(None)|
|Type|FireworksRocketEntity|
|Tags|**PomPom**,SystemEntity,TypeChecked|
|Life|**-10**|

### ぽむぽむハナビ

```mcfunction
/summon Creeper ~ ~ ~ {CustomName:”ぽむぽむハナビ”,ExplosionRadius:6b,Fuse:0s,ignited:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ぽむぽむハナビ|
|Type|Creeper|
|Tags|TypeChecked|

### KiraTarai

```mcfunction
/summon ArmorStand ~ ~3.5 ~ {Marker:true,Invulnerable:true,Invisible:true,Small:true,NoBasePlate:true,DisabledSlots:31,FallDistance:1f,Tags:[KiraTnt,Tarai,SystemEntity,TypeChecked],Passengers:[{id:FallingSand,Block:"minecraft:chorus_flower",Time:1,DropItem:false,HurtEntities:true,FallHurtMax:25,FallHurtAmount:25f,FallDistance:1f,Tags:[KiraTarai,Tarai]}]}
```

|-|-|
|Name|(None)|
|Type|ArmorStand|
|Tags|**KiraTnt**,**Tarai**,SystemEntity,TypeChecked|
|Passengers|KiraTarai|

- KiraTarai

|-|-|
|Name|(None)|
|Type|FallingSand (chorus_flower)|
|Tags|**KiraTarai**,**Tarai**|
|HurtEntities|true|
|FallHurtMax|**25**|

### MagicObsidian

```mcfunctino
/summon AreaEffectCloud ~ ~ ~ {ReapplicantDelay:20,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:0,RadiusPerTick:0f,WaitTime:1,Age:-100,Particle:take,Tags:[MagicBlock,MagicObsidian,SystemEntity,TypeChecked]}
```

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|**MagicBlock**,**MagicObsidian**,SystemEntity,TypeChecked|
|Age|**-100**|

### MagicEnderChest

```mcfunction
/summon AreaEffectCloud ~ ~ ~ {ReapplicantDelay:20,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:0,RadiusPerTick:0f,WaitTime:1,Age:-100,Particle:take,Tags:[MagicBlock,MagicEnderChest,SystemEntity,TypeChecked]}
```

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|**MagicBlock**,**MagicEnderChest**,SystemEntity,TypeChecked|
|Age|**-100**|

### MagicBlack

```mcfunction
/summon AreaEffectCloud ~ ~ ~ {ReapplicantDelay:20,Radius:0f,RadiusOnUse:0f,DurationOnUse:0,Duration:0,RadiusPerTick:0f,WaitTime:1,Age:-300,Particle:take,Tags:[MagicBlock,MagicBlack,SystemEntity,TypeChecked],Passengers:[{id:AreaEffectCloud,Rotation:[0f,90f],ReapplicantDelay:20,Radius:0f,RadiusOnUse:0f,DurationOnUse:0,Duration:180,RadiusPerTick:0f,WaitTime:1,Age:-100,Particle:take,Tags:[PrePetitBlack,SystemEntity,TypeChecked]},{id:AreaEffectCloud,ReapplicantDelay:0,Radius:10f,RadiusOnUse:0f,DurationOnUse:0,Duration:10,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:dragonbreath,Tags:[SystemEntity,TypeChecked]}]}
```

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|**MagicBlock**,**MagicBlack**,SystemEntity,TypeChecked|
|Age|**-300**|
|Passengers|PrePetitBlack,dragonbreathAEC|

- PrePetitBlack

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|**PrePetitBlack**,SystemEntity,TypeChecked|

- dragonbreathAEC

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|SystemEntity,TypeChecked|

### SayonaraPoint

```mcfunction
/summon AreaEffectCloud ~ ~ ~ {Invulnerable:true,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:take,Tags:[SayonaraPoint,SystemEntity,TypeChecked]}
```

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|SayonaraPoint,SystemEntity,TypeChecked|
|Duration|2|

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

### サンダーボルト1

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:"サンダーボルト",damage:150d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,ThunderBolt,TypeChecked]}
```

|-|-|
|Name|サンダーボルト|
|Type|Arrow|
|Tags|Garbage,**ThunderBolt**,TypeChecked|
|damage|**150**|

### サンダーボルト2

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:"サンダーボルト",damage:250d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,ThunderBolt,TypeChecked]}
```

|-|-|
|Name|サンダーボルト|
|Type|Arrow|
|Tags|Garbage,**ThunderBolt**,TypeChecked|
|damage|**250**|

### サンダーボルト3

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:"サンダーボルト",damage:400d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,ThunderBolt,TypeChecked]}
```

|-|-|
|Name|サンダーボルト|
|Type|Arrow|
|Tags|Garbage,**ThunderBolt**,TypeChecked|
|damage|**400**|

### ジオクラッシュ1

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:"ジオクラッシュ",damage:30d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|ジオクラッシュ|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**30**|

### ジオクラッシュ2

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:"ジオクラッシュ",damage:50d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|ジオクラッシュ|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**50**|

### ジオクラッシュ3

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:"ジオクラッシュ",damage:75d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|ジオクラッシュ|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**75**|

### (ペット)スノー

```mcfunction
/summon SnowMan ~ ~ ~ {CustomName:"(ペット)スノー",CustomNameVisible:true,ArmorItems:[{id:"minecraft:snowball",Count:0b,Damage:0s,tag:{ench:[{id:2s,lvl:32767s},{id:3s,lvl:10s}]}},{},{},{id:minecraft:snowball,Count:0b}], Attributes:[{Name:"generic.followRange",Base:32d},{Name:"generic.movementSpeed",Base:0.32d},{Name:"generic.armor",Base:10d},{Name:"generic.maxHealth",Base:30d}],Health:30f,Team:FriendlyTeam,DeathLootTable:"minecraft:empty"}
```

|-|-|
|Name|(ペット)スノー|
|Type|SnowMan|
|Team|**FriendlyTeam**|
|Health|30|
|ArmorItems|落下耐性Lv.32767、爆破耐性Lv.10の雪玉|

### ネコキャッチ

<span class="expandButton" onClick="openCloseBE(`openHere1-begin`)">+</span>summonコマンド

<div class="openHere-begin openHere1-begin"></div>

```mcfunction
/summon Villager ~ ~ ~ {ArmorItems:[{},{},{},{id:minecraft:skull,Damage:3s,Count:0b}],CustomName:"ネコキャッチ",CustomNameVisible:true,Health:0.1f,Attributes:[{Name:"generic.maxHealth",Base:0.1d},{Name:"generic.movementSpeed",Base:0.2d}],CanPickUpLoot:false,Profession:2,Career:1,CareerLevel:100, Offers:{Recipes:[{maxUses:2147483647,rewardExp:false,buy:{id:wool,Count:4b,Damage:0s},sell:{id:torch,Count:1b,tag:{ench:[],HideFlags:16,display:{Lore:["§rアドベンチャーエリアでも設置できる。"],Name:"§4§lAdv.§f§l松明"},CanPlaceOn:["minecraft:stone","minecraft:grass","minecraft:dirt","minecraft:cobblestone","minecraft:planks","minecraft:sapling","minecraft:bedrock","minecraft:flowing_water","minecraft:water","minecraft:flowing_lava","minecraft:lava","minecraft:sand","minecraft:gravel","minecraft:gold_ore","minecraft:iron_ore","minecraft:coal_ore","minecraft:log","minecraft:leaves","minecraft:sponge","minecraft:glass","minecraft:lapis_ore","minecraft:lapis_block","minecraft:dispenser","minecraft:sandstone","minecraft:noteblock","minecraft:bed","minecraft:golden_rail","minecraft:detector_rail","minecraft:sticky_piston","minecraft:web","minecraft:tallgrass","minecraft:deadbush","minecraft:piston","minecraft:piston_head","minecraft:wool","minecraft:piston_extension","minecraft:yellow_flower","minecraft:red_flower","minecraft:brown_mushroom","minecraft:red_mushroom","minecraft:gold_block","minecraft:iron_block","minecraft:double_stone_slab","minecraft:stone_slab","minecraft:brick_block","minecraft:tnt","minecraft:bookshelf","minecraft:mossy_cobblestone","minecraft:obsidian","minecraft:torch","minecraft:fire","minecraft:mob_spawner","minecraft:oak_stairs","minecraft:chest","minecraft:redstone_wire","minecraft:diamond_ore","minecraft:diamond_block","minecraft:crafting_table","minecraft:wheat","minecraft:farmland","minecraft:furnace","minecraft:lit_furnace","minecraft:standing_sign","minecraft:wooden_door","minecraft:ladder","minecraft:rail","minecraft:stone_stairs","minecraft:wall_sign","minecraft:lever","minecraft:stone_pressure_plate","minecraft:iron_door","minecraft:wooden_pressure_plate","minecraft:redstone_ore","minecraft:lit_redstone_ore","minecraft:unlit_redstone_torch","minecraft:redstone_torch","minecraft:stone_button","minecraft:snow_layer","minecraft:ice","minecraft:snow","minecraft:cactus","minecraft:clay","minecraft:reeds","minecraft:jukebox","minecraft:fence","minecraft:pumpkin","minecraft:netherrack","minecraft:soul_sand","minecraft:glowstone","minecraft:portal","minecraft:lit_pumpkin","minecraft:cake","minecraft:unpowered_repeater","minecraft:powered_repeater","minecraft:stained_glass","minecraft:trapdoor","minecraft:monster_egg","minecraft:stonebrick","minecraft:brown_mushroom_block","minecraft:red_mushroom_block","minecraft:iron_bars","minecraft:glass_pane","minecraft:melon_block","minecraft:pumpkin_stem","minecraft:melon_stem","minecraft:vine","minecraft:fence_gate","minecraft:brick_stairs","minecraft:stone_brick_stairs","minecraft:mycelium","minecraft:waterlily","minecraft:nether_brick","minecraft:nether_brick_fence","minecraft:nether_brick_stairs","minecraft:nether_wart","minecraft:enchanting_table","minecraft:brewing_stand","minecraft:cauldron","minecraft:end_portal","minecraft:end_portal_frame","minecraft:end_stone","minecraft:dragon_egg","minecraft:redstone_lamp","minecraft:lit_redstone_lamp","minecraft:double_wooden_slab","minecraft:wooden_slab","minecraft:cocoa","minecraft:sandstone_stairs","minecraft:emerald_ore","minecraft:ender_chest","minecraft:tripwire_hook","minecraft:tripwire","minecraft:emerald_block","minecraft:spruce_stairs","minecraft:birch_stairs","minecraft:jungle_stairs","minecraft:command_block","minecraft:beacon","minecraft:cobblestone_wall","minecraft:flower_pot","minecraft:carrots","minecraft:potatoes","minecraft:wooden_button","minecraft:skull","minecraft:anvil","minecraft:trapped_chest","minecraft:light_weighted_pressure_plate","minecraft:heavy_weighted_pressure_plate","minecraft:unpowered_comparator","minecraft:powered_comparator","minecraft:daylight_detector","minecraft:redstone_block","minecraft:quartz_ore","minecraft:hopper","minecraft:quartz_block","minecraft:quartz_stairs","minecraft:activator_rail","minecraft:dropper","minecraft:stained_hardened_clay","minecraft:stained_glass_pane","minecraft:leaves2","minecraft:log2","minecraft:acacia_stairs","minecraft:dark_oak_stairs","minecraft:slime","minecraft:barrier","minecraft:iron_trapdoor","minecraft:prismarine","minecraft:sea_lantern","minecraft:hay_block","minecraft:carpet","minecraft:hardened_clay","minecraft:coal_block","minecraft:packed_ice","minecraft:double_plant","minecraft:standing_banner","minecraft:wall_banner","minecraft:daylight_detector_inverted","minecraft:red_sandstone","minecraft:red_sandstone_stairs","minecraft:double_stone_slab2","minecraft:stone_slab2","minecraft:spruce_fence_gate","minecraft:birch_fence_gate","minecraft:jungle_fence_gate","minecraft:dark_oak_fence_gate","minecraft:acacia_fence_gate","minecraft:spruce_fence","minecraft:birch_fence","minecraft:jungle_fence","minecraft:dark_oak_fence","minecraft:acacia_fence","minecraft:spruce_door","minecraft:birch_door","minecraft:jungle_door","minecraft:acacia_door","minecraft:dark_oak_door","minecraft:end_rod","minecraft:chorus_plant","minecraft:chorus_flower","minecraft:purpur_block","minecraft:purpur_pillar","minecraft:purpur_stairs","minecraft:purpur_double_slab","minecraft:purpur_slab","minecraft:end_bricks","minecraft:grass_path","minecraft:end_gateway","minecraft:structure_block"]},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:1b,Damage:0s},sell:{id:vine,Count:1b,tag:{ench:[],HideFlags:16,display:{Lore:["§rアドベンチャーエリアでも設置できる。"],Name:"§4§lAdv.§f§lつる"},CanPlaceOn:["minecraft:stone","minecraft:grass","minecraft:dirt","minecraft:cobblestone","minecraft:planks","minecraft:sapling","minecraft:bedrock","minecraft:flowing_water","minecraft:water","minecraft:flowing_lava","minecraft:lava","minecraft:sand","minecraft:gravel","minecraft:gold_ore","minecraft:iron_ore","minecraft:coal_ore","minecraft:log","minecraft:leaves","minecraft:sponge","minecraft:glass","minecraft:lapis_ore","minecraft:lapis_block","minecraft:dispenser","minecraft:sandstone","minecraft:noteblock","minecraft:bed","minecraft:golden_rail","minecraft:detector_rail","minecraft:sticky_piston","minecraft:web","minecraft:tallgrass","minecraft:deadbush","minecraft:piston","minecraft:piston_head","minecraft:wool","minecraft:piston_extension","minecraft:yellow_flower","minecraft:red_flower","minecraft:brown_mushroom","minecraft:red_mushroom","minecraft:gold_block","minecraft:iron_block","minecraft:double_stone_slab","minecraft:stone_slab","minecraft:brick_block","minecraft:tnt","minecraft:bookshelf","minecraft:mossy_cobblestone","minecraft:obsidian","minecraft:torch","minecraft:fire","minecraft:mob_spawner","minecraft:oak_stairs","minecraft:chest","minecraft:redstone_wire","minecraft:diamond_ore","minecraft:diamond_block","minecraft:crafting_table","minecraft:wheat","minecraft:farmland","minecraft:furnace","minecraft:lit_furnace","minecraft:standing_sign","minecraft:wooden_door","minecraft:ladder","minecraft:rail","minecraft:stone_stairs","minecraft:wall_sign","minecraft:lever","minecraft:stone_pressure_plate","minecraft:iron_door","minecraft:wooden_pressure_plate","minecraft:redstone_ore","minecraft:lit_redstone_ore","minecraft:unlit_redstone_torch","minecraft:redstone_torch","minecraft:stone_button","minecraft:snow_layer","minecraft:ice","minecraft:snow","minecraft:cactus","minecraft:clay","minecraft:reeds","minecraft:jukebox","minecraft:fence","minecraft:pumpkin","minecraft:netherrack","minecraft:soul_sand","minecraft:glowstone","minecraft:portal","minecraft:lit_pumpkin","minecraft:cake","minecraft:unpowered_repeater","minecraft:powered_repeater","minecraft:stained_glass","minecraft:trapdoor","minecraft:monster_egg","minecraft:stonebrick","minecraft:brown_mushroom_block","minecraft:red_mushroom_block","minecraft:iron_bars","minecraft:glass_pane","minecraft:melon_block","minecraft:pumpkin_stem","minecraft:melon_stem","minecraft:vine","minecraft:fence_gate","minecraft:brick_stairs","minecraft:stone_brick_stairs","minecraft:mycelium","minecraft:waterlily","minecraft:nether_brick","minecraft:nether_brick_fence","minecraft:nether_brick_stairs","minecraft:nether_wart","minecraft:enchanting_table","minecraft:brewing_stand","minecraft:cauldron","minecraft:end_portal","minecraft:end_portal_frame","minecraft:end_stone","minecraft:dragon_egg","minecraft:redstone_lamp","minecraft:lit_redstone_lamp","minecraft:double_wooden_slab","minecraft:wooden_slab","minecraft:cocoa","minecraft:sandstone_stairs","minecraft:emerald_ore","minecraft:ender_chest","minecraft:tripwire_hook","minecraft:tripwire","minecraft:emerald_block","minecraft:spruce_stairs","minecraft:birch_stairs","minecraft:jungle_stairs","minecraft:command_block","minecraft:beacon","minecraft:cobblestone_wall","minecraft:flower_pot","minecraft:carrots","minecraft:potatoes","minecraft:wooden_button","minecraft:skull","minecraft:anvil","minecraft:trapped_chest","minecraft:light_weighted_pressure_plate","minecraft:heavy_weighted_pressure_plate","minecraft:unpowered_comparator","minecraft:powered_comparator","minecraft:daylight_detector","minecraft:redstone_block","minecraft:quartz_ore","minecraft:hopper","minecraft:quartz_block","minecraft:quartz_stairs","minecraft:activator_rail","minecraft:dropper","minecraft:stained_hardened_clay","minecraft:stained_glass_pane","minecraft:leaves2","minecraft:log2","minecraft:acacia_stairs","minecraft:dark_oak_stairs","minecraft:slime","minecraft:barrier","minecraft:iron_trapdoor","minecraft:prismarine","minecraft:sea_lantern","minecraft:hay_block","minecraft:carpet","minecraft:hardened_clay","minecraft:coal_block","minecraft:packed_ice","minecraft:double_plant","minecraft:standing_banner","minecraft:wall_banner","minecraft:daylight_detector_inverted","minecraft:red_sandstone","minecraft:red_sandstone_stairs","minecraft:double_stone_slab2","minecraft:stone_slab2","minecraft:spruce_fence_gate","minecraft:birch_fence_gate","minecraft:jungle_fence_gate","minecraft:dark_oak_fence_gate","minecraft:acacia_fence_gate","minecraft:spruce_fence","minecraft:birch_fence","minecraft:jungle_fence","minecraft:dark_oak_fence","minecraft:acacia_fence","minecraft:spruce_door","minecraft:birch_door","minecraft:jungle_door","minecraft:acacia_door","minecraft:dark_oak_door","minecraft:end_rod","minecraft:chorus_plant","minecraft:chorus_flower","minecraft:purpur_block","minecraft:purpur_pillar","minecraft:purpur_stairs","minecraft:purpur_double_slab","minecraft:purpur_slab","minecraft:end_bricks","minecraft:grass_path","minecraft:end_gateway","minecraft:structure_block"]},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:16b,Damage:0s},sell:{id:ender_eye,Count:1b,tag:{ench:[],display:{Lore:["§rアドベンチャーエリアでも設置できる。"],Name:"§4§lAdv.§f§lエンダーアイ"},CanPlaceOn:["minecraft:end_portal_frame"]},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:4b,Damage:0s},sell:{id:wooden_sword,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:2b,Damage:0s},sell:{id:snowball,Count:16b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:4b,Damage:0s},sell:{id:carrot_on_a_stick,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:4b,Damage:0s},sell:{id:arrow,Count:32b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:8b,Damage:0s},sell:{id:bow,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:bone,Count:2b,Damage:0s},sell:{id:bread,Count:1b,tag:{display:{Name:"§r§l大きなパン"}},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:gunpowder,Count:1b,Damage:0s},buyB:{id:rotten_flesh,Count:1b,Damage:0s},sell:{id:potion,Count:1b,tag:{Potion:healing,HideFlags:32,display:{Name:"§a§l薬草エキス"}},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:spider_eye,Count:2b,Damage:0s},sell:{id:potion,Count:1b,tag:{CustomPotionEffects:[{Duration:0,Id:19b,Amplifier:127b}],HideFlags:32,display:{Name:"§d§l毒消草エキス"}},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:ghast_tear,Count:1b,Damage:0s},buyB:{id:rabbit_foot,Count:1b,Damage:0s},sell:{id:dye,Count:1b,tag:{display:{Name:"§b§lすばやさの種"},AttributeModifiers:[{UUIDMost:2L,UUIDLeast:1L,Amount:0.8d,Slot:offhand,AttributeName:generic.movementSpeed,Operation:1,Name:SpeedSeed}]},Damage:3s}},{maxUses:2147483647,rewardExp:false,buy:{id:bone,Count:2b,Damage:0s},buyB:{id:slime_ball,Count:2b,Damage:0s},sell:{id:leather_helmet,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:gunpowder,Count:6b,Damage:0s},buyB:{id:slime_ball,Count:6b,Damage:0s},sell:{id:leather_chestplate,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:rotten_flesh,Count:4b,Damage:0s},buyB:{id:slime_ball,Count:4b,Damage:0s},sell:{id:leather_leggings,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:spider_eye,Count:2b,Damage:0s},buyB:{id:slime_ball,Count:2b,Damage:0s},sell:{id:leather_boots,Count:1b,Damage:0s}}]}}
```

<div class="openHere-end openHere1-end"></div>

|-|-|
|Name|ネコキャッチ|
|Type|Villager|
|Health|0.1|

### Super Dragon

```mcfunction
/summon EntityHorse ~ ~ ~ {CustomName:”Super Dragon”,CustomNameVisible:true,Tags:[TypeChecked],Attributes:[{Name:”generic.maxHealth”,Base:0.1d},{Name:”generic.movementSpeed”,Base:0.45d},{Name:”horse.jumpStrength”,Base:2.0d}],Health:0.1f,ActiveEffects:[{Id:8b,Amplifier:10b,Duration:2147483647,ShowParticles:false}],Tame:true,SaddleItem:{id:minecraft:saddle,Count:0b,tag:{display:{Name:”夢のサドル”}}},DeathLootTable:”minecraft:empty”}
```

|-|-|
|Name|Super Dragon|
|Type|EntityHorse|
|Tags|TypeChecked|
|Health|**0.1**|
|ActiveEffects|**跳躍力上昇Lv.11 107,374,182.35秒間**|
|SaddleItem|夢のサドル|

### ほねちょーだい

```mcfunction
/summon Wolf ~ ~ ~ {CustomName:"ほねちょーだい！",CustomNameVisible:true,ArmorItems:[{id:"minecraft:bone",Count:0b,Damage:0s,tag:{ench:[{id:2s,lvl:32767s},{id:1s,lvl:10s}],AttributeModifiers:[{Name:"WolfAttack+",AttributeName:"generic.attackDamage",Operation:0,Amount:21d,UUIDMost:101l,UUIDLeast:1l,Slot:"feet"}]}},{},{},{id:minecraft:snowball,Count:0b}], Attributes:[{Name:"generic.followRange",Base:0d},{Name:"generic.movementSpeed",Base:0.1d},{Name:"generic.armor",Base:15d},{Name:"generic.attackDamage",Base:22d},{Name:"generic.maxHealth",Base:30d}],Health:30f,Team:FriendlyTeam,PortalCooldown:600,Tags:[GimmeBone],CollarColor:0b,Passengers:[{id:Item,Item:{id:minecraft:bone,Count:3b}}],DeathLootTable:"minecraft:empty"}
```

|-|-|
|Name|ほねちょーだい！|
|Type|Wolf|
|Tags|**GimmeBone**|
|Team|**FriendlyTeam**|
|Health|30|
|ArmorItem|落下耐性Lv.32767の骨|
|PortalCooldown|**600**|

### ぬこ

```mcfunction
/summon Ozelot ~ ~1 ~ {Attributes:[{Name:"generic.movementSpeed",Base:0.4d}],CustomName:"ぬこ",CustomNameVisible:true,Invulnerable:true,Silent:true,DeathTime:19s,PortalCooldown:260,Tags:[CooldownRequiredLong,TypeChecked],Passengers:[{id:AreaEffectCloud,Effects:[{Id:10b,Duration:1,Amplifier:5b,ShowParticles:true}],ReapplicantDelay:0,Radius:1.5f,RadiusOnUse:0f,DurationOnUse:0f,Duration:200,RadiusPerTick:0f,WaitTime:60,Age:0,Particle:heart,Tags:[SystemEntity,TypeChecked]}],DeathLootTable:"minecraft:empty"}
```

|-|-|
|Name|ぬこ|
|Type|Ozelot|
|Tags|CooldownRequiredLong,TypeChecked|
|PortalCooldown|**260**|
|Passengers|ぬこのAEC|

- ぬこのAEC

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|SystemEntity,TypeChecked|
|Effects|**再生能力Lv.6**|
|Radius|**1.5**|
|Duration|**200**|

### (ペット)ゴーレム

```mcfunction
/summon VillagerGolem ~ ~ ~ {CustomName:"(ペット)ゴーレム",CustomNameVisible:true,ArmorItems:[{id:"minecraft:iron_ingot",Count:0b,Damage:0s,tag:{ench:[{id:2s,lvl:32767s},{id:4s,lvl:10s}]}},{},{},{id:minecraft:snowball,Count:0b}], Attributes:[{Name:"generic.followRange",Base:32d},{Name:"generic.movementSpeed",Base:0.32d},{Name:"generic.armor",Base:20d},{Name:"generic.knockbackResistance",Base:1d},{Name:"generic.maxHealth",Base:50d}],Health:50f,Team:FriendlyTeam,PlayerCreated:true,DeathLootTable:"minecraft:empty"}
```

|-|-|
|Name|(ペット)ゴーレム|
|Type|VillagerGolem|
|Team|**FriendlyTeam**|

### 熱気球

```mcfunction
/summon Arrow ~ ~0.1 ~ {Silent:true,life:1140s,Tags:[YouCanFly,TypeChecked],Passengers:[{id:Chicken,Invulnerable:true,Silent:true,ActiveEffects:[{Id:25b,Duration:360,Amplifier:7b,ShowParticles:false},{Id:14b,Duration:2147483647,Amplifier:127b,ShowParticles:false}],Tags:[FloatingRequired,SystemEntity,TypeChecked],Passengers:[{id:Boat,CustomName:”熱気球”,CustomNameVisible:true,FallDistance:-10000000f,Tags:[FloatingRequired,TypeChecked],Passengers:[{id:Pig,Saddle:true,Silent:true,Invulnerable:true,ActiveEffects:[{Id:14b,Duration:2147483647,Amplifier:127b,ShowParticles:false}],Tags:[FloatingRequired,SystemEntity,TypeChecked]},{id:ArmorStand,Marker:true,Invulnerable:true,Invisible:true,DisabledSlots:31,Small:true,NoBasePlate:true,Tags:[FloatingRequired,SystemEntity,TypeChecked]}]}]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|**YouCanFly**,TypeChecked|
|life|**1140 (1.5秒後に消滅)**|
|Passengers|FloatingChicken|

- FloatingChicken

|-|-|
|Name|(None)|
|Type|Chicken|
|Tags|**FloatingRequired**,SystemEntity,TypeChecked|
|ActiveEffects|**浮遊Lv.8を18秒間**、透明化Lv.128を107,374,182.35秒間|
|Passengers|熱気球|

- 熱気球

|-|-|
|Name|熱気球|
|Type|Boat|
|Tags|**FloatingRequired**,TypeChecked|
|Passengers|FloatingPig,FloatingArmorStand|

- FloatingPig

|-|-|
|Name|(None)|
|Type|Pig|
|Tags|**FloatingRequired**,SystemEntity,TypeChecked|
|ActiveEffects|透明化Lv.128を107,374,182.35秒間|

- FloatingArmorStand

|-|-|
|Name|(None)|
|Type|Armor|
|Tags|**FloatingRequired**,SystemEntity,TypeChecked|
|ActiveEffects|透明化Lv.128を107,374,182.35秒間|

### グライダー

```mcfunction
/summon Arrow ~ ~0.1 ~ {Silent:true,life:1140s,Tags:[YouCanFly,TypeChecked],Passengers:[{id:Snowball,Tags:[TypeChecked],Passengers:[{id:Snowball,Tags:[TypeChecked],Passengers:[{id:ArmorStand,Invulnerable:true,Invisible:true,Marker:true,Small:true,NoBasePlate:true,DisabledSlots:31,ActiveEffects:[{Id:25b,Duration:100,Amplifier:7b,ShowParticles:false}],Tags:[FloatingRequired,SystemEntity,FoldGlider,TypeChecked],PortalCooldown:100,ArmorItems:[{},{},{id:minecraft:elytra,Count:0b}],Passengers:[{id:Boat,CustomName:”グライダー”,CustomNameVisible:true,FallDistance:-10000000f,Tags:[FloatingRequired,TypeChecked],Passengers:[{id:Pig,Saddle:true,Silent:true,Invulnerable:true,ActiveEffects:[{Id:14b,Duration:2147483647,Amplifier:127b,ShowParticles:false}],Tags:[FloatingRequired,SystemEntity,TypeChecked]},{id:ArmorStand,Marker:true,Invulnerable:true,Invisible:true,DisabledSlots:31,Small:true,NoBasePlate:true,Tags:[FloatingRequired,SystemEntity,TypeChecked]}]}]}]}]}]}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|**YouCanFly**,TypeChecked|
|life|**1140 (1.5秒後に消滅)**|
|Passengers|Snowball1|

- Snowball1

|-|-|
|Name|(None)|
|Type|Snowball|
|Tags|TypeChecked|
|Passengers|Snowball2|

- Snowball2

|-|-|
|Name|(None)|
|Type|Snowball|
|Tags|TypeChecked|
|Passengers|FoldGlider|

- FoldGlider

|-|-|
|Name|(None)|
|Type|ArmorStand|
|Tags|**FloatingRequired**,SystemEntity,FoldGlider,TypeChecked|
|ActiveEffects|**浮遊Lv.8を5秒間**|
|PortalCooldown|**100 (5秒)**|
|Passengers|グライダー|

- グライダー

|-|-|
|Name|グライダー|
|Type|Boat|
|Tags|**FloatingRequired**,TypeChecked|
|Passengers|FloatingPig,FloatingArmorStand|

- FloatingPig

|-|-|
|Name|(None)|
|Type|Pig|
|Tags|**FloatingRequired**,SystemEntity,TypeChecked|
|ActiveEffects|透明化Lv.128を107,374,182.35秒間|

- FlaotingArmorStand

|-|-|
|Name|(None)|
|Type|ArmorStand|
|Tags|**FloatingRequired**,SystemEntity,TypeChecked|

### FillOffset

```mcfunction
/summon ItemFrame ~ ~ ~ {Invulnerable:true,Facing:0b,Tags:[FillOffset]}
```

|-|-|
|Name|(None)|
|Type|ItemFrame|
|Tags|**FillOffset**|

### FillSnowball

```mcfunction
/summon Snowball ~ ~ ~ {Motion:[0d,0.1d,0d],Tags:[Fill,TypeChecked]}
```

|-|-|
|Name|(None)|
|Type|Snowball|
|Tags|**Fill**,TypeChecked|
|Motion|0,0.1,0|

### きらきらタライ

```mcfunction
/summon Creeper ~ ~0.5 ~ {CustomName:"きらきらタライ",ExplosionRadius:4b,Fuse:0s,ignited:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|きらきらタライ|
|Type|Creeper|
|Tags|TypeChecked|
|ExplosionRadius|4|
|Fuse|0|

### PreKanaTarai

```mcfunction
/summon FallingSand ~ ~2.5 ~ {Block:"minecraft:light_weighted_pressure_plate",Time:1,DropItem:false,HurtEntities:true,FallHurtMax:25,FallHurtAmount:25f,FallDistance:1f,Tags:[PreKanaTarai,Tarai]}
```

|-|-|
|Name|(None)|
|Type|FallingSand (light_weighted_pressure_plate)|
|Tags|**PreKanaTarai**,**Tarai**|
|HurtEntities|true|
|FallHurtMax|**25**|

### PreDeal1

```mcfunction
/summon FallingSand ~ ~0.2 ~ {Block:”minecraft:wool”,Time:1b,DropItem:false,HurtEntities:true,FallHurtMax:100,FallHurtAmount:100f,FallDistance:1f,Tags:[PreDeal]}
```

|-|-|
|Name|(None)|
|Type|FallingSand| (wool)|
|Tags|**PreDeal**|
|HurtEntities|true|
|FallHurtMax|**100**|

### PreDeal2

```mcfunction
/summon FallingSand ~ ~0.2 ~ {Block:”minecraft:wool”,Time:1b,DropItem:false,HurtEntities:true,FallHurtMax:180,FallHurtAmount:180f,FallDistance:1f,Tags:[PreDeal]
```

|-|-|
|Name|(None)|
|Type|FallingSand| (wool)|
|Tags|**PreDeal**|
|HurtEntities|true|
|FallHurtMax|**180**|

### PreDeal3

```mcfunction
/summon FallingSand ~ ~0.2 ~ {Block:”minecraft:wool”,Time:1b,DropItem:false,HurtEntities:true,FallHurtMax:270,FallHurtAmount:270f,FallDistance:1f,Tags:[PreDeal]}
```

|-|-|
|Name|(None)|
|Type|FallingSand| (wool)|
|Tags|**PreDeal**|
|HurtEntities|true|
|FallHurtMax|**270**|

### AtsuTarai

```mcfunction
/summon FallingSand ~ ~2.5 ~ {Block:"minecraft:flowing_lava",Data:7b,Time:1,DropItem:false,HurtEntities:true,FallHurtMax:50,FallHurtAmount:50f,FallDistance:1f,Tags:[AtsuTarai,Tarai]}
```

|-|-|
|Name|(None)|
|Type|FallingSand (flowing_lava)|
|Tags|**AtsuTarai**,**Tarai**|
|HurtEntities|true|
|FallHurtMax|**50**|

### 魔人斬り1

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”魔神斬り”,damage:200d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}
```

|-|-|
|Name|魔人斬り|
|Type|Arrow|
|Tags|Garbage|
|damage|**200**|
|life|1200 (即消滅)|

### 魔人斬り2

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”魔神斬り”,damage:400d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}
```

|-|-|
|Name|魔人斬り|
|Type|Arrow|
|Tags|Garbage|
|damage|**400**|
|life|1200 (即消滅)|

### 真空斬り1

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”真空斬り”,damage:50d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|真空斬り|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|life|1200 (即消滅)|
|damage|**50**|

### 真空斬り2

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”真空斬り”,damage:100d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|真空斬り|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|life|1200 (即消滅)|
|damage|**100**|

### 真空斬り3

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”真空斬り”,damage:150d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|真空斬り|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|life|1200 (即消滅)|
|damage|**150**|

### ガストキャノン1

```mcfunction
/summon Fireball ~ ~ ~ {CustomName:”ガストキャノン”,ExplosionPower:1b,direction:[0d,0d,0d],Tags:[FlyingObject,Driftable,TypeChecked]}
```

|-|-|
|Name|ガストキャノン|
|Type|Fireball|
|Tags|FlyingObject,Driftable,TypeChecked|
|ExplosionPower|1|

### ガストキャノン2

```mcfunction
/summon Fireball ~ ~ ~ {CustomName:”ガストキャノン”,ExplosionPower:2b,direction:[0d,0d,0d],Tags:[FlyingObject,Driftable,TypeChecked]}
```

|-|-|
|Name|ガストキャノン|
|Type|Fireball|
|Tags|FlyingObject,Driftable,TypeChecked|
|ExplosionPower|2|

#### スリケン1

|-|-|
|Name|スリケン|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**30**|
|life|1200(即消滅)|

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”スリケン”,damage:30d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

#### スリケン2

|-|-|
|Name|スリケン|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**45**|
|life|1200(即消滅)|

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”スリケン”,damage:45d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

#### スリケン3

|-|-|
|Name|スリケン|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**60**|
|life|1200(即消滅)|

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”スリケン”,damage:60d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

#### スリケン4

|-|-|
|Name|スリケン|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**75**|
|life|1200(即消滅)|

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”スリケン”,damage:75d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

#### スリケン5

|-|-|
|Name|スリケン|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**105**|
|life|1200(即消滅)|

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”スリケン”,damage:105d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

#### スリケン6

|-|-|
|Name|スリケン|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**150**|
|life|1200(即消滅)|

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”スリケン”,damage:150d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

### KazakiriDown

```mcfunction
/summon AreaEffectCloud ~ ~0.5 ~ {Effects:[{Id:25b,Duration:20,Amplifier:-3b,ShowParticles:false}],ReapplicantDelay:0,Radius:2f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2,RadiusPerTick:0f,WaitTime:5,Age:4,Particle:cloud,Tags:[TypeChecked]}
```

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|TypeChecked|
|Effects|透明化Lv.253,1秒間|

### KazakiriUp

```mcfunction
/summon AreaEffectCloud ~ ~0.5 ~ {Effects:[{Id:25b,Duration:20,Amplifier:1b,ShowParticles:false}],ReapplicantDelay:0,Radius:2f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2,RadiusPerTick:0f,WaitTime:5,Age:4,Particle:cloud,Tags:[TypeChecked]}
```

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|TypeChecked|
|Effects|透明化Lv.1,1秒間|

### ニンジャソウル1

```mcfunction
/summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:1b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ニンジャソウル|
|Type|Creeper|
|Tags|TypeChecked|
|Fuse|0|
|ExplosionRadius|1|
|ActiveEffects|透明化Lv.0 1秒間|

### ニンジャソウル2

```mcfunction
/summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:2b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ニンジャソウル|
|Type|Creeper|
|Tags|TypeChecked|
|Fuse|0|
|ExplosionRadius|2|
|ActiveEffects|透明化Lv.0 1秒間|

### ニンジャソウル3

```mcfunction
/summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:4b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ニンジャソウル|
|Type|Creeper|
|Tags|TypeChecked|
|Fuse|0|
|ExplosionRadius|4|
|ActiveEffects|透明化Lv.0 1秒間|

### ニンジャソウル4

```mcfunction
/summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:7b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ニンジャソウル|
|Type|Creeper|
|Tags|TypeChecked|
|Fuse|0|
|ExplosionRadius|7|
|ActiveEffects|透明化Lv.0 1秒間|

### ニンジャソウル5

```mcfunction
/summon Creeper ~ ~ ~ {CustomName:"ニンジャソウル",ExplosionRadius:10b,Fuse:0s,ignited:true,powered:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ニンジャソウル|
|Type|Creeper|
|Tags|TypeChecked|
|Fuse|0|
|ExplosionRadius|10|
|ActiveEffects|透明化Lv.0 1秒間|

### 魔法の矢

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:"魔法の矢",damage:40d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,ChainedArrow,TypeChecked]}
```

|-|-|
|Name|魔法の矢|
|Type|Arrow|
|Tags|Garbage,ChainedArrow,TypeChecked|
|damage|**40**|
|life|1200 (即消滅)|

### ブラストショット1

```mcfunction
/summon Creeper ~ ~0.5 ~ {CustomName:"ブラストショット",ExplosionRadius:3b,Fuse:0s,ignited:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ブラストショット|
|Type|Creeper|
|Tags|TypeChecked|
|ExplosionRadius|**3**|
|ActiveEffects|透明化Lv.0 1秒間|

### ブラストショット2

```mcfunction
/summon Creeper ~ ~0.5 ~ {CustomName:"ブラストショット",ExplosionRadius:7b,Fuse:0s,ignited:true,Invulnerable:true,NoAI:true,ActiveEffects:[{Id:14b,Amplifier:0b,Duration:20,ShowParticles:false}],Tags:[TypeChecked]}
```

|-|-|
|Name|ブラストショット|
|Type|Creeper|
|Tags|TypeChecked|
|ExplosionRadius|**7**|
|ActiveEffects|透明化Lv.0 1秒間|

### アイスストーム1

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”アイスストーム”,damage:10d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|アイスストーム|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|10|
|life|1200(即消滅)|

### アイスストーム2

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”アイスストーム”,damage:20d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|アイスストーム|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|20|
|life|1200(即消滅)|

### アイスストーム3

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”アイスストーム”,damage:35d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked]}
```

|-|-|
|Name|アイスストーム|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|35|
|life|1200(即消滅)|

### クロスファイアー1

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”クロスファイアー”,damage:10d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}
```

|-|-|
|Name|クロスファイアー|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**10**|
|life|1200 (即消滅)|
|Fire|40|

### クロスファイアー2

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”クロスファイアー”,damage:20d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}
```

|-|-|
|Name|クロスファイアー|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**20**|
|life|1200 (即消滅)|
|Fire|40|

### クロスファイアー3

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”クロスファイアー”,damage:30d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}
```

|-|-|
|Name|クロスファイアー|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**30**|
|life|1200 (即消滅)|
|Fire|40|

### クロスファイアー4

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”クロスファイアー”,damage:30d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}
```

|-|-|
|Name|クロスファイアー|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**30**|
|life|1200 (即消滅)|
|Fire|40|

### クロスファイアー5

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”クロスファイアー”,damage:60d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}
```

|-|-|
|Name|クロスファイアー|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**60**|
|life|1200 (即消滅)|
|Fire|40|

### クロスファイアー6

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:”クロスファイアー”,damage:90d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,TypeChecked],Fire:40s}
```

|-|-|
|Name|クロスファイアー|
|Type|Arrow|
|Tags|Garbage,TypeChecked|
|damage|**90**|
|life|1200 (即消滅)|
|Fire|40|
