# Entity

- [Entity](#entity)
  - [SystemEntity](#systementity)
    - [CommonGM](#commongm)
      - [summonコマンド](#summonコマンド)
    - [SystemKeeper](#systemkeeper)
      - [summonコマンド](#summonコマンド-1)
    - [ViewPoint(仮)](#viewpoint仮)
      - [summonコマンド](#summonコマンド-2)
    - [地下世界](#地下世界)
      - [summonコマンド](#summonコマンド-3)
    - [クラウディア](#クラウディア)
      - [summonコマンド](#summonコマンド-4)
    - [テーブルマウンテン](#テーブルマウンテン)
      - [summonコマンド](#summonコマンド-5)
    - [ガリバーランド](#ガリバーランド)
      - [summonコマンド](#summonコマンド-6)
    - [トカルトコルデ](#トカルトコルデ)
      - [summonコマンド](#summonコマンド-7)
    - [はてな](#はてな)
      - [summonコマンド](#summonコマンド-8)
  - [敵MOB](#敵mob)
    - [コーラスマイト](#コーラスマイト)

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

### はてな

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

## 敵MOB

### コーラスマイト

```minecraftcommand
Endermite ~ ~ ~ {CustomName:"コーラスマイト",Health:200f,Lifetime:1900,Attributes:[{Name:"generic.maxHealth",Base:200d},{Name:"generic.movementSpeed",Base:0.3d},{Name:"generic.attackDamage",Base:1d},{Name:"generic.knockbackResistance",Base:0.3d},{Name:"generic.followRange",Base:32d}],HandItems:[{tag:{ench:[{id:19s,lvl:20s}]},id:"minecraft:iron_sword",Count:0b,Damage:0s},{}]}
```

[CommonGM]:/entity/TUSB_Analysis_Entity.html
[エンダーマイト]:/entity/TUSB_Analysis_Entity.html
[SystemKeeper]:/entity/TUSB_Analysis_Entity.html
[地下世界]:/entity/TUSB_Analysis_Entity.html
[クラウディア]:/entity/TUSB_Analysis_Entity.html
[テーブルマウンテン]:/entity/TUSB_Analysis_Entity.html
[ガリバーランド]:/entity/TUSB_Analysis_Entity.html
[トカルトコルデ]:/entity/TUSB_Analysis_Entity.html
[お試しセットの印玉]:/entity/TUSB_Analysis_Item.html
[ViewPoint(仮)]:/entity/TUSB_Analysis_Entity.html
[秒針]:/entity/TUSB_Analysis_Entity.html
[分針]:/entity/TUSB_Analysis_Entity.html
[時針]:/entity/TUSB_Analysis_Entity.html

[jobSave]:/others/TUSB_Analysis_Data.html
[jobLoad]:/others/TUSB_Analysis_Data.html

[お試しセットの印玉]:/others/TUSB_Analysis_Item.html

[メインクロック開始時リセットするもの]:/command/rest.html
[初回ログイン時処理]:/command/firstLoginProcessing.html
[ログイン時処理]:/command/loginProcessing.html
[ジョブチェンジ先判定]:/command/jobChangeJudgemnt.html
[ジョブセーブ]:/command/jobSave.html
[ジョブロード]:/command/jobLoad.html
[ステータス表示]:/command/statusDisplay.html
[攻略率表示]:/command/conquerDisplay.html
[ワープ処理ジョブ島・通常世界]:/command/warpProcessing.html
[KeepInventory確認]:/command/keepInventoryCheck.html
[満腹度修正]:/command/satietyFix.html
[経験値取得処理]:/command/expProcessing.html
[レベルアップ処理]:/command/leveliupProcessing.html
[最大HP調整処理]:/command/hpFix.html
[難易度調整]:/command/difficultyAdjustment.html
[島攻略処理]:/command/conquerProcessing.html
[習得スキル取得]:/command/jobChangeJudgement.html
[時計島]:/command/clockIslandProcessing.html
[マクラウェル内部]:/command/insideMcLawell.html
[スコアボードの設定]:/command/setScoreboard.html
[メインクロック処理]:/command/mainclockProcessing.html
[SystemKeeper処理]:/command/systemKeeperProcessing.html
[かまど再設定]:/command/furnaceProcessing.html
[毎tick必ず最初に実行したいコマンド群]:/command/runFirst.html
[エリア侵入記録]:/command/areaRecord.html