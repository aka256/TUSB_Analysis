---
title: つんつん実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_tsuntsun.html
datatable3c: true
summary: 召喚士のスキルの1つであるつんつんを実行する。FriendlyTeamを持ったプレイヤー以外のエンティティである召喚士のペットに対応した効果や、敵Mobへのペットのテレポート、一時的なペットの強化処理などを行う。
summaryDisable: true
---

## About

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

召喚士のスキルの1つであるつんつんを実行する。`FriendlyTeam`を持ったプレイヤー以外のエンティティである召喚士のペットに対応した効果や、敵Mobへのペットのテレポート、一時的なペットの強化処理などを行う。

{% include note.html content="つんつんの`ActivatedSkill`は他のスキルと異なり、値の割り当て方が異なるので注意が必要。" %}

## コマンド群

### つんつん実行部コマンド群

<span class="tagYellow">位置</span> (-1920,17,-149)

<div class="datatable3c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=6240,score_ActivatedSkill=6241] ~ ~ ~ /execute @e[r=15,type=SnowMan,team=FriendlyTeam] ~ ~ ~ /playsound block.snow.break master @a[r=16] ~ ~ ~ 1 1.44 0|
|2|/execute @a[score_ActivatedSkill_min=6240,score_ActivatedSkill=6241] ~ ~ ~ /execute @e[r=15,type=SnowMan,team=FriendlyTeam] ~ ~ ~ /execute @a[r=10] ~ ~ ~ /particle snowshovel ~ ~1 ~ 0.5 0.5 0.5 0 20 force|条件付き|
|3|/execute @a[score_ActivatedSkill_min=6240,score_ActivatedSkill=6240] ~ ~ ~ /execute @e[r=15,type=SnowMan,team=FriendlyTeam] ~ ~ ~ /effect @a[r=10] minecraft:haste 20 1 true|
|4|/execute @a[score_ActivatedSkill_min=6241,score_ActivatedSkill=6241] ~ ~ ~ /execute @e[r=15,type=SnowMan,team=FriendlyTeam] ~ ~ ~ /effect @a[r=10] minecraft:haste 20 3 true|
|5|/execute @a[score_ActivatedSkill_min=6240,score_ActivatedSkill=6241] ~ ~ ~ /execute @e[r=15,type=Wolf,team=FriendlyTeam] ~ ~ ~ /playsound entity.wolf.growl master @a[r=16] ~ ~ ~ 1 0.8 0|
|6|/execute @a[score_ActivatedSkill_min=6240,score_ActivatedSkill=6241] ~ ~ ~ /execute @e[r=15,type=Wolf,team=FriendlyTeam] ~ ~ ~ /execute @a[r=10] ~ ~ ~ /particle angryVillager ~ ~0.5 ~ 0.5 0.5 0.5 0 5 force|条件付き|
|7|/execute @a[score_ActivatedSkill_min=6240,score_ActivatedSkill=6240] ~ ~ ~ /execute @e[r=15,type=Wolf,team=FriendlyTeam] ~ ~ ~ /effect @a[r=10] minecraft:strength 20 1 true|
|8|/execute @a[score_ActivatedSkill_min=6241,score_ActivatedSkill=6241] ~ ~ ~ /execute @e[r=15,type=Wolf,team=FriendlyTeam] ~ ~ ~ /effect @a[r=10] minecraft:strength 20 3 true|
|9|/execute @a[score_ActivatedSkill_min=6240,score_ActivatedSkill=6241] ~ ~ ~ /execute @e[r=15,type=VillagerGolem,team=FriendlyTeam] ~ ~ ~ /playsound entity.irongolem.death master @a[r=16] ~ ~ ~ 2 1.8 0|
|10|/execute @a[score_ActivatedSkill_min=6240,score_ActivatedSkill=6241] ~ ~ ~ /execute @e[r=15,type=VillagerGolem,team=FriendlyTeam] ~ ~ ~ /execute @a[r=10] ~ ~ ~ /particle magicCrit ~ ~1 ~ 0.5 1 0.5 0.1 30 force|条件付き|
|11|/execute @a[score_ActivatedSkill_min=6240,score_ActivatedSkill=6240] ~ ~ ~ /execute @e[r=15,type=VillagerGolem,team=FriendlyTeam] ~ ~ ~ /effect @a[r=10] minecraft:resistance 20 1 true|
|12|/execute @a[score_ActivatedSkill_min=6241,score_ActivatedSkill=6241] ~ ~ ~ /execute @e[r=15,type=VillagerGolem,team=FriendlyTeam] ~ ~ ~ /effect @a[r=10] minecraft:resistance 20 2 true|
|13|/execute @a[score_ActivatedSkill_min=6242,score_ActivatedSkill=6243] ~ ~ ~ /execute @e[r=15,type=!Player,team=FriendlyTeam] ~ ~ ~ /playsound entity.endermen.teleport master @a[r=16] ~ ~ ~ 1 2 0|
|14|/execute @a[score_ActivatedSkill_min=6242,score_ActivatedSkill=6243] ~ ~ ~ /execute @e[r=15,type=!Player,team=FriendlyTeam] ~ ~ ~ /particle portal ~ ~1 ~ 0.2 0.5 0.2 0 90 force|条件付き|
|15|/execute @a[score_ActivatedSkill_min=6242,score_ActivatedSkill=6243] ~ ~ ~ /entitydata @e[r=15,type=!Player,team=FriendlyTeam] {HandItems:[{id:minecraft:wool,Damage:0s,Count:0b,tag:{AttributeModifiers:[{Name:"ResetTarget",AttributeName:"generic.followRange",Operation:2,Amount:-1d,UUIDMost:101l,UUIDLeast:2l,Slot:"mainhand"}]}}]}|
|16|/clone -1920 ~2 ~ -1920 ~-1 ~ -1920 ~-1 ~ filtered force minecraft:command_block 5 ###ターゲットリセット解除|条件付き|
|17|/execute @a[score_ActivatedSkill_min=6242,score_ActivatedSkill=6242] ~ ~ ~ /execute @e[r=15,type=!Player,team=FriendlyTeam] ~ ~ ~ /tp @e[dx=0,c=1] @e[r=10,type=!Player,team=!FriendlyTeam,tag=Enemy,c=1]|
|18|/execute @a[score_ActivatedSkill_min=6243,score_ActivatedSkill=6243] ~ ~ ~ /execute @e[r=15,type=!Player,team=FriendlyTeam] ~ ~ ~ /tp @e[dx=0,c=1] @e[r=20,type=!Player,team=!FriendlyTeam,tag=Enemy,c=1]|
|19|/execute @a[score_ActivatedSkill_min=6244,score_ActivatedSkill=6249] ~ ~ ~ /execute @e[r=15,type=!Player,team=FriendlyTeam,tag=!CooldownRequiredLong] ~ ~ ~ /playsound entity.guardian.attack master @a[r=16] ~ ~ ~ 1 1.682 0|
|20|/execute @a[score_ActivatedSkill_min=6244,score_ActivatedSkill=6249] ~ ~ ~ /execute @e[r=15,type=!Player,team=FriendlyTeam,tag=!CooldownRequiredLong] ~ ~ ~ /particle endRod ~ ~1 ~ 0.2 0.5 0.2 0.1 30 force|条件付き|
|21|/execute @a[score_ActivatedSkill_min=6244,score_ActivatedSkill=6249] ~ ~ ~ /entitydata @e[r=15,type=!Player,team=FriendlyTeam,tag=!CooldownRequiredLong] {HandItems:[{id:minecraft:wool,Damage:0s,Count:0b,tag:{AttributeModifiers:[{Name:"PetFollow+",AttributeName:"generic.followRange",Operation:1,Amount:0.5d,UUIDMost:101l,UUIDLeast:3l,Slot:"mainhand"},{Name:"PetAttack+",AttributeName:"generic.attackDamage",Operation:1,Amount:0.5d,UUIDMost:101l,UUIDLeast:4l,Slot:"mainhand"},{Name:"PetHealth+",AttributeName:"generic.maxHealth",Operation:1,Amount:0.5d,UUIDMost:101l,UUIDLeast:5l,Slot:"mainhand"},{Name:"PetSpeed+",AttributeName:"generic.movementSpeed",Operation:1,Amount:0.5d,UUIDMost:101l,UUIDLeast:6l,Slot:"mainhand"},{Name:"PetDef+",AttributeName:"generic.armor",Operation:1,Amount:0.5d,UUIDMost:101l,UUIDLeast:7l,Slot:"mainhand"}]}}],ActiveEffects:[{Id:10b,Duration:1200,Amplifier:4b,ShowParticles:true},{Id:11b,Duration:1200,Amplifier:2b,ShowParticles:true},{Id:12b,Duration:1200,Amplifier:1b,ShowParticles:true},{Id:13b,Duration:1200,Amplifier:1b,ShowParticles:true}]}|
|22|/execute @a[score_ActivatedSkill_min=6244,score_ActivatedSkill=6249] ~ ~ ~ /effect @e[r=15,type=!Player,team=FriendlyTeam,tag=!CooldownRequiredLong] minecraft:instant_health 1 3 false|
|23|/execute @a[score_ActivatedSkill_min=6244,score_ActivatedSkill=6244] ~ ~ ~ /entitydata @e[r=15,type=!Player,team=FriendlyTeam,tag=!CooldownRequiredLong] {PortalCooldown:900}|
|24|/execute @a[score_ActivatedSkill_min=6245,score_ActivatedSkill=6249] ~ ~ ~ /entitydata @e[r=15,type=!Player,team=FriendlyTeam,tag=!CooldownRequiredLong] {PortalCooldown:1800}|
|25|/execute @a[score_ActivatedSkill_min=6244,score_ActivatedSkill=6249] ~ ~ ~ /scoreboard players tag @e[r=15,type=!Player,team=FriendlyTeam,tag=!CooldownRequiredLong] add CooldownRequiredLong|

<div class="datatable3c-end"></div>

### ターゲットリセットコマンド群

<span class="tagYellow">位置</span> (-1920,16,-149)

<div class="datatable3c-begin"></div>

|No.|コマンド群||
|:-:|-|-|
|1|/entitydata @e[type=!Player,team=FriendlyTeam,tag=!CooldownRequired] {HandItems:[]}|
|2|/entitydata @e[type=!Player,team=FriendlyTeam,tag=CooldownRequired] {HandItems:[{id:minecraft:wool,Damage:0s,Count:0b,tag:{AttributeModifiers:[{Name:"PetFollow+",AttributeName:"generic.followRange",Operation:1,Amount:0.5d,UUIDMost:101l,UUIDLeast:3l,Slot:"mainhand"},{Name:"PetAttack+",AttributeName:"generic.attackDamage",Operation:1,Amount:0.5d,UUIDMost:101l,UUIDLeast:4l,Slot:"mainhand"},{Name:"PetHealth+",AttributeName:"generic.maxHealth",Operation:1,Amount:0.5d,UUIDMost:101l,UUIDLeast:5l,Slot:"mainhand"},{Name:"PetSpeed+",AttributeName:"generic.movementSpeed",Operation:1,Amount:0.5d,UUIDMost:101l,UUIDLeast:6l,Slot:"mainhand"}]}}]}|

<div class="datatable3c-end"></div>

## 詳細

### つんつん実行部

1. **`ActivatedSkill`が6240 ~ 6241**であるすべてのプレイヤーから**半径15m以内の`FriendlyTeam`であるスノーゴーレム**に対し、以下の事柄を実行
   1. 対象エンティティから半径16m以内のすべてのプレイヤーに、効果音を鳴らす
   2. 対象エンティティから半径10m以内のすべてのプレイヤーの座標上で、パーティクルを表示
2. **`ActivatedSkill`が6240**であるすべてのプレイヤーから半径15m以内の`FriendlyTeam`であるスノーゴーレムから、更に**10m以内のすべてのプレイヤーに採掘速度上昇Lv.2を20秒間付与**
3. **`ActivatedSkill`が6241**であるすべてのプレイヤーから半径15m以内の`FriendlyTeam`であるスノーゴーレムから、更に**10m以内のすべてのプレイヤーに採掘速度上昇Lv.4を20秒間付与**
4. **`ActivatedSkill`が6240 ~ 6241**であるすべてのプレイヤーから**半径15m以内の`FriendlyTeam`であるオオカミ**に対し、以下の事柄を実行
   1. 対象エンティティから半径16m以内のすべてのプレイヤーに、効果音を鳴らす
   2. 対象エンティティから半径10m以内のすべてのプレイヤーの座標上で、パーティクルを表示
5. **`ActivatedSkill`が6240**であるすべてのプレイヤーから半径15m以内の`FriendlyTeam`であるオオカミから、更に**10m以内のすべてのプレイヤーに攻撃力上昇Lv.2を20秒間付与**
6. **`ActivatedSkill`が6241**であるすべてのプレイヤーから半径15m以内の`FriendlyTeam`であるオオカミから、更に**10m以内のすべてのプレイヤーに攻撃力上昇Lv.4を20秒間付与**
7. **`ActivatedSkill`が6240 ~ 6241**であるすべてのプレイヤーから**半径15m以内の`FriendlyTeam`であるアイアンゴーレム**に対し、以下の事柄を実行
   1. 対象エンティティから半径16m以内のすべてのプレイヤーに、効果音を鳴らす
   2. 対象エンティティから半径10m以内のすべてのプレイヤーの座標上で、パーティクルを表示
8. **`ActivatedSkill`が6240**であるすべてのプレイヤーから半径15m以内の`FriendlyTeam`であるアイアンゴーレムから、更に**10m以内のすべてのプレイヤーに耐性Lv.2を20秒間付与**
9. **`ActivatedSkill`が6241**であるすべてのプレイヤーから半径15m以内の`FriendlyTeam`であるアイアンゴーレムから、更に**10m以内のすべてのプレイヤーに耐性Lv.3を20秒間付与**
10. **`ActivatedSkill`が6242 ~ 6243**であるすべてのプレイヤーから半径15m以内のプレイヤー以外の`FreindlyTeam`に対し、以下の事柄を実行
    1. 対象エンティティから半径16m以内のすべてのプレイヤーに、効果音を鳴らす
    2. 対象エンティティの座標上で、パーティクルを表示
    3. 対象エンティティのタグを**[骨使用時書き換えタグ](#骨使用時書き換えタグ)へ書き換える**
    4. [ターゲットリセット](#ターゲットリセット)と[つんつん実行部](#つんつん実行部)を実行
11. **`ActivatedSkill`が6242**であるすべてのプレイヤーから半径15m以内のプレイヤー以外の`FreindlyTeam`1体を、**半径10m以内の最も近い`Enemy`を持つエンティティへ移動**
12. **`ActivatedSkill`が6243**であるすべてのプレイヤーから半径15m以内のプレイヤー以外の`FreindlyTeam`1体を、**半径20m以内の最も近い`Enemy`を持つエンティティへ移動**
13. **`ActivatedSkill`が6244 ~ 6249**であるすべてのプレイヤーから**半径15m以内のプレイヤー以外の`CooldownRequired`を持つ`FreindlyTeam`**に対し、以下の事柄を実行
    1. 対象エンティティから半径16m以内のすべてのプレイヤーに、効果音を鳴らす
    2. 対象エンティティの座標上で、パーティクルを表示
    3. 対象エンティティのタグを**[腐った肉使用時書き換えタグ](#腐った肉使用時書き換えタグ)へ書き換える**
    4. **対象エンティティに即時回復Lv.4を付与**
14. **`ActivatedSkill`が6244**であるすべてのプレイヤーから半径15m以内のプレイヤー以外の`CooldownRequired`を持つ`FreindlyTeam`の、**`PortalCooldown`を900に設定**
15. **`ActivatedSkill`が6245 ~ 6249**であるすべてのプレイヤーから半径15m以内のプレイヤー以外の`CooldownRequired`を持つ`FreindlyTeam`の、**`PortalCooldown`を1800に設定**
16. **`ActivatedSkill`が6244 ~ 6249**であるすべてのプレイヤーから半径15m以内のプレイヤー以外の`CooldownRequired`を持つ`FreindlyTeam`に、**`CooldownRequiredLong`を付与**

### ターゲットリセット

1. プレイヤーでなく、`CooldownRequired`を持たない`FriendlyTeam`の`HandItems`を削除
2. プレイヤーでなく、`CooldownRequired`を持つ`FriendlyTeam`の`HandItems`を[HandItems書き換えタグ](#handitems書き換えタグ)の通りに書き換える

### 骨使用時書き換えタグ

```mcfunction
{
  HandItems:[
  {
    id:minecraft:wool,
    Damage:0s,
    Count:0b,
    tag:
    {
      AttributeModifiers:[
      {
        Name:”ResetTarget”,
        AttributeName:”generic.followRange”,
        Operation:2,
        Amount:-1d,
        UUIDMost:101l,
        UUIDLeast:2l,
        Slot:”mainhand”
      }]
    }
  }]
}
```

### 腐った肉使用時書き換えタグ

```mcfunction
{
  HandItems:[
  {
    id:minecraft:wool,
    Damage:0s,
    Count:0b,
    tag:
    {
      AttributeModifiers:[
      {
        Name:”PetFollow+”,
        AttributeName:”generic.followRange”,
        Operation:1,
        Amount:0.5d,
        UUIDMost:101l,
        UUIDLeast:3l,
        Slot:”mainhand”
      },{
        Name:”PetAttack+”,
        AttributeName:”generic.attackDamage”,
        Operation:1,
        Amount:0.5d,
        UUIDMost:101l,
        UUIDLeast:4l,
        Slot:”mainhand”
      },{
        Name:”PetHealth+”,
        AttributeName:”generic.maxHealth”,
        Operation:1,
        Amount:0.5d,
        UUIDMost:101l,
        UUIDLeast:5l,
        Slot:”mainhand”
      },{
        Name:”PetSpeed+”,
        AttributeName:”generic.movementSpeed”,
        Operation:1,
        Amount:0.5d,
        UUIDMost:101l,
        UUIDLeast:6l,
        Slot:”mainhand”
      },{
        Name:”PetDef+”,
        AttributeName:”generic.armor”,
        Operation:1,
        Amount:0.5d,
        UUIDMost:101l,
        UUIDLeast:7l,
        Slot:”mainhand”
      }]
    }
  }],
  ActiveEffects:[
  {
    Id:10b,
    Duration:1200,
    Amplifier:4b,
    ShowParticles:true
  },{
    Id:11b,
    Duration:1200,
    Amplifier:2b,
    ShowParticles:true
  },{
    Id:12b,
    Duration:1200,
    Amplifier:1b,
    ShowParticles:true
  },{
    Id:13b,
    Duration:1200,
    Amplifier:1b,
    ShowParticles:true
  }]
}
```

### HandItems書き換えタグ

```mcfunction
{
  HandItems:[
  {
    id:minecraft:wool,
    Damage:0s,
    Count:0b,
    tag:
    {
      AttributeModifiers:[
      {
        Name:”PetFollow+”,
        AttributeName:”generic.followRange”,
        Operation:1,
        Amount:0.5d,
        UUIDMost:101l,
        UUIDLeast:3l,
        Slot:”mainhand”
      },{
        Name:”PetAttack+”,
        AttributeName:”generic.attackDamage”,
        Operation:1,
        Amount:0.5d,
        UUIDMost:101l,
        UUIDLeast:4l,
        Slot:”mainhand”
      },{
        Name:”PetHealth+”,
        AttributeName:”generic.maxHealth”,
        Operation:1,
        Amount:0.5d,
        UUIDMost:101l,
        UUIDLeast:5l,
        Slot:”mainhand”
      },{
        Name:”PetSpeed+”,
        AttributeName:”generic.movementSpeed”,
        Operation:1,
        Amount:0.5d,
        UUIDMost:101l,
        UUIDLeast:6l,
        Slot:”mainhand”
      },{
        Name:”PetDef+”,
        AttributeName:”generic.armor”,
        Operation:1,
        Amount:0.5d,
        UUIDMost:101l,
        UUIDLeast:7l,
        Slot:”mainhand”
      }]
    }
  }]
}
```
