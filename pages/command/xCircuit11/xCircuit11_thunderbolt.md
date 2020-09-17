---
title: サンダーボルト実行
tags: [コマンド,スキル,黒魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-17 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_thunderbolt.html
datatable3c: true
summary: 黒魔導士のスキルの1つであるサンダーボルトを実行する。スキル範囲内の敵Mobへの矢を用いたダメージの付与、火のついた矢TestWeatherによる雨、もしくは水の判定処理などを行う。
summaryDisable: true
---

## About

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるサンダーボルトを実行する。スキル範囲内の敵Mobへの矢を用いたダメージの付与、火のついた矢[TestWeather](#testweather)による雨、もしくは水の判定処理などを行う。

## コマンド群

### サンダーボルト初期処理部コマンド群

<span class="tagYellow">位置</span> (-1920,8,-154)

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[score_ActivatedSkill_min=5220,score_ActivatedSkill=5229] ~ ~ ~ /summon Arrow ~ ~ ~ {Fire:10s,life:1190s,damage:0d,Tags:[TestWeather,SystemEntity,CooldownRequired,TypeChecked],PortalCooldown:2}|
|2|/execute @a[score_ActivatedSkill_min=5220,score_ActivatedSkill=5229] ~ ~ ~ /scoreboard players operation @a[c=1] ThunderBolt = @a[c=1] ActivatedSkill|
|3|/clone -1920 ~1 ~ -1920 ~1 ~ -1920 ~1 ~ filtered force minecraft:command_block 5 ###サンダーボルト発生|

<div class="datatable3c-end"></div>

### サンダーボルト発生処理部コマンド群

<span class="tagYellow">位置</span> (-1920,9,-154)

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[score_ThunderBolt_min=0] ~-5 ~-5 ~-5 /scoreboard players set @e[dx=10,dy=20,dz=10,tag=Enemy] TargetCheck 1|
|2|/execute @a[score_ThunderBolt_min=0] ~ ~20 ~ /scoreboard players operation @e[r=28,score_TargetCheck_min=1,c=1] TargetCheck > @a[c=1] ThunderBolt|
|3|/execute @a[score_ThunderBolt_min=0] ~ ~ ~ /scoreboard players tag @e[r=1,tag=TestWeather] add Rain {Fire:0s}|
|4|/execute @a[score_ThunderBolt_min=0] ~ ~ ~ /execute @e[r=1,tag=Rain,c=1] ~ ~ ~ /execute @a[r=1,score_ThunderBolt_min=0] ~-5 ~-5 ~-5 /scoreboard players operation @e[dx=10,dy=20,dz=10,tag=Enemy] TargetCheck > @a[c=1] ThunderBolt|条件付き|
|5|/execute @a[score_ThunderBolt_min=0] ~-5 ~-5 ~-5 /scoreboard players tag @e[dx=10,dy=20,dz=10,score_TargetCheck_min=5220] add SkillTarget|
|6|/execute @a[score_ThunderBolt_min=5220,score_ThunderBolt=5220] ~-5 ~-5 ~-5 /execute @e[dx=10,dy=20,dz=10,score_TargetCheck_min=5220,score_TargetCheck=5220] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"サンダーボルト",damage:150d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,ThunderBolt,TypeChecked]}|
|7|/execute @a[score_ThunderBolt_min=5221,score_ThunderBolt=5221] ~-5 ~-5 ~-5 /execute @e[dx=10,dy=20,dz=10,score_TargetCheck_min=5221,score_TargetCheck=5221] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"サンダーボルト",damage:250d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,ThunderBolt,TypeChecked]}|
|8|/execute @a[score_ThunderBolt_min=5222,score_ThunderBolt=5229] ~-5 ~-5 ~-5 /execute @e[dx=10,dy=20,dz=10,score_TargetCheck_min=5222,score_TargetCheck=5229] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"サンダーボルト",damage:400d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,ThunderBolt,TypeChecked]}|
|9|/execute @a[score_ThunderBolt_min=0] ~-5 ~-5 ~-5 /scoreboard players reset @e[dx=10,dy=20,dz=10,score_TargetCheck_min=0] TargetCheck|
|10|/scoreboard players reset @a[score_ThunderBolt_min=0] ThunderBolt|
|11|/execute @r[type=!Player,tag=ThunderBolt,c=10] ~ ~ ~ /playsound entity.lightning.thunder master @a[r=32] ~ ~ ~ 2 1.8 0.1|
|12|/execute @e[tag=ThunderBolt] ~ ~ ~ /particle iconcrack ~ ~2 ~ 0 0.1 0 2 30 force @a[r=64] 175|条件付き|
|13|/execute @e[tag=ThunderBolt] ~ ~ ~ /particle crit ~ ~4 ~ 0.1 2 0.1 0.0 90 force|条件付き|

<div class="datatable2c-end"></div>

## 詳細

### サンダーボルト初期処理部

1. **`ActivatedSkill`が5220 ~ 5229**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーの座標上に**[TestWeather](#testweather)を召喚**
   2. `TunderBolt`に`ActivatedSkill`を代入
2. [サンダーボルト発生処理部](#サンダーボルト発生処理部)を実行

### サンダーボルト発生処理部

- **サンダーボルトの効果範囲**を、スキル実行プレイヤーの足元のブロックから**左右に5m、下に4m、上に16mの範囲とする。**

1. **`TunderBolt`が0以上**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. サンダーボルトの効果範囲内にいる`Enemy`を持ったエンティティの`TargetCheck`を1に設定
   2. 対象プレイヤーから**20m上の座標を中心とし、そこから半径28m以内の最も近い`TargetCheck`が1以上である1体のエンティティ**の`TargetCheck`に、対象プレイヤーの`ThunderBolt`を代入
   3. **火が消えている[TestWeather](#testweather)に`Rain`を付与** (雨である、もしくは足元に水があるかの判定を行っている)
   4. 対象プレイヤーから半径1m以内に**`Rain`を持つ[TestWeather](#testweather)が存在するとき**、サンダーボルトの効果範囲内の`TargetCheck`が1以上である**すべてのエンティティの`TargetCheck`に、対象プレイヤーの`ThunderBolt`を代入**
   5. サンダーボルトの効果範囲内にいる`TargetCheck`が5220以上であるすべてのエンティティに、`SkillTarget`を付与
2. **`ThunderBolt`が5220**であるすべてのプレイヤーから見た、サンダーボルトの効果範囲内にいる**`TargetCheck`が5220**であるエンティティの座標上に、**[サンダーボルト1](#サンダーボルト1)を召喚**
3. **`ThunderBolt`が5221**であるすべてのプレイヤーから見た、サンダーボルトの効果範囲内にいる**`TargetCheck`が5221**であるエンティティの座標上に、**[サンダーボルト2](#サンダーボルト2)を召喚**
4. **`ThunderBolt`が5222 ~ 5229**であるすべてのプレイヤーから見た、サンダーボルトの効果範囲内にいる**`TargetCheck`が5222 ~ 5229**であるエンティティの座標上に、**[サンダーボルト3](#サンダーボルト3)を召喚**
5. `ThunderBolt`が0以上であるすべてのプレイヤーから見た、サンダーボルトの効果範囲内の`TargetCheck`が0以上であるすべてのエンティティの`TargetCheck`を0に設定
6. `ThunderBolt`が0以上であるすべてのプレイヤーの`ThunderBolt`を0に設定
7. `ThunderBolt`を持つプレイヤーでないエンティティをランダムに選び(上限10体)、そこから半径32m以内のすべてのプレイヤーに効果音を鳴らす
8. `ThunderBolt`を持つすべてのエンティティに、パーティクルを表示

### TestWeather

```mcfunction
/summon Arrow ~ ~ ~ {Fire:10s,life:1190s,damage:0d,Tags:[TestWeather,SystemEntity,CooldownRequired,TypeChecked],PortalCooldown:2}
```

|-|-|
|Name|(None)|
|Type|Arrow|
|Tags|TestWeather,SystemEntity,CooldownRequired,TypeChecked|
|life|1190 (0.5秒後に消滅)|
|Fire|10|

### サンダーボルト1

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:"サンダーボルト",damage:150d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,ThunderBolt,TypeChecked]}
```

|-|-|
|Name|サンダーボルト|
|Type|Arrow|
|Tags|Garbage,ThunderBolt,TypeChecked|
|damage|150|

### サンダーボルト2

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:"サンダーボルト",damage:250d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,ThunderBolt,TypeChecked]}
```

|-|-|
|Name|サンダーボルト|
|Type|Arrow|
|Tags|Garbage,ThunderBolt,TypeChecked|
|damage|250|

### サンダーボルト3

```mcfunction
/summon Arrow ~ ~0.02 ~ {CustomName:"サンダーボルト",damage:400d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage,ThunderBolt,TypeChecked]}
```

|-|-|
|Name|サンダーボルト|
|Type|Arrow|
|Tags|Garbage,ThunderBolt,TypeChecked|
|damage|400|
