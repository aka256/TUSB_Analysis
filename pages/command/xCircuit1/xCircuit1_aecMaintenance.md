---
title: AEC維持
tags: [コマンド,煉獄,クラウディア,ディメンション,死の宣告, スポナー]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,煉獄,スポナー,死の宣告
update: 2020-06-21 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit1/xCircuit1_aecMaintenance.html
folder: xCircuit1
datatable4c: true
summary: 敵MobのAEC(ルナティックアイのデバフなど)の延長処理や煉獄のボスの実行や死の宣告、特殊スポナー処理、不正対策等が行われているコマンド群である。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,12,-200)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群1]({{site.baseurl}}/command/xCircuit1/xCircuit1_runFirst.html)

<span class="tagBlue">分岐先</span> [ネザーボス戦闘中]({{site.baseurl}}/command/netherBoss/netherBoss_processing.html)

敵MobのAEC(ルナティックアイのデバフなど)の延長処理や煉獄のボスの実行、死の宣告、特殊スポナー処理、不正対策等が行われているコマンド群である。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|コメント|状態|
|:-:|-|-|-|
|1|/execute @e[tag=MobCloud] ~ ~ ~ /execute @e[dx=0,tag=Enemy,c=1] ~ ~ ~ /entitydata @e[dy=10,tag=MobCloud] {Age:5}|AEC維持MobCloud|
|2|/execute 0-0-1-0-4 ~ ~-19 ~74 detect -1860 20 -51 minecraft:slime 0 /testfor @p[r=65]|ネザーボス戦闘中|
|3|/clone -1920 ~-1 ~5 -1920 ~-1 ~5 -1920 ~-1 ~5 filtered force minecraft:command_block 5 ###ネザーボス戦闘中処理||条件付き|
|4|/scoreboard players remove @a[tag=Doom] DoomSecond 1|死の宣告処理|
|5|/scoreboard players remove @a[tag=Doom,score_DoomSecond=0] Doom 1||条件付き|
|6|/tellraw @a[tag=Doom,score_DoomSecond=0] {"score":{"name":"*","objective":"Doom"},"color":"dark_red","bold":true}||条件付き|
|7|/scoreboard players set @a[tag=Doom,score_DoomSecond=0] DoomSecond 3||条件付き|
|8|/kill @a[tag=Doom,score_Doom=0]||条件付き|
|9|/execute @e[tag=SpawnerCore] ~ ~ ~ detect ~ ~ ~ minecraft:air 0 /kill @e[dx=0,tag=Spawner]|サバイバルスポナー処理|
|10|/scoreboard players tag @e[tag=CooldownRequiredLong] add Garbage {PortalCooldown:0}|CooldownRequiredLong誤差許容長期用|
|11|/scoreboard players tag @e[type=MinecartSpawner,tag=CooldownRequired] add Garbage {PortalCooldown:300}|トカルトスポナーポータルin対策|
|12|/scoreboard players test Prayable Settings 1 *|祈り|
|13|/scoreboard players enable @a[tag=Pray,score_Job_min=1] kill||条件付き|
|14|/tellraw @a[tag=Pray,score_Job_min=1] [{"text":"[最終手段] ","bold":true,"color":"gray"},{"text":"祈りを捧げる","color":"dark_aqua","bold":true,"underlined":true,"clickEvent":{"action":"run_command","value":"/trigger kill set 1"},"hoverEvent":{"action":"show_text","value":{"text":"/kill","color":"red"}}}]||条件付き|
|15|/scoreboard players tag @a[tag=Pray,score_Job_min=1] remove Pray||条件付き|
|16|/scoreboard players tag @a add BedCheck {Sleeping:true}|ベッドバグチェック|
|17|/execute @a[tag=BedCheck] ~ ~ ~ detect ~ ~ ~ minecraft:bed -1 /scoreboard players tag @a[c=1] remove BedCheck||条件付き|
|18|/execute @a[tag=BedCheck] ~ ~1.2001 ~ /summon Snowball ~ ~ ~ {Tags:[TypeChecked]}|
|19|/scoreboard players tag @a[tag=BedCheck] remove BedCheck||条件付き|
|20|/tp @a[-1923,3,-202,dx=53,dy=16,dz=133,m=adventure] -1896.0 25 -136.0|
|21|/execute @e[tag=CanFire] ~-0.5 ~ ~-0.5 /fill ~ ~ ~ ~1 ~1 ~1 minecraft:fire 0 keep|炎|
|22|/execute @a[m=!spectator] ~ ~ ~ detect ~ ~ ~ minecraft:structure_void 0 /kill @a[c=1]|void死|

<div class="datatable4c-end"></div>

## 詳細

1. `MobCloud`を持つエンティティの座標から、x座標が同一であり`Enemy`を持つエンティティを一つ選択し、その座標から上に10mで`MobCloud`を持つエンティティに{Age:5}を付与
2. ネザーの(-1859,31,-124)にいる[NetherBossPoint]({{site.baseurl}}/entity/entity_entity.html#netherbosspoint)から(-1860,20,-51)(煉獄最下層のボス部屋の中心)がスライムブロックであり、(-1859,12,-50)から65m以内にプレイヤーがいる場合、OverWorldの(-1920,11,-195)にある[ネザーボス戦闘中]({{site.baseurl}}/command/netherBoss/netherBoss_Processing.html)を実行
3. `Doom`(tag)を持つプレイヤーが存在したら、`DoomSecond`から1を引き、以下の事柄を実行 (死の宣告処理)
   1. `Doom`(tag)を持ち、`DoomSecond`が0以下であるプレイヤーの`Doom`(score)から1を引き、`Doom`(score)の値を表示、`DoomSecond`を3に設定
   2. `Doom`(tag)を持ち、`Doom`(score)が0以下であるプレイヤーをキル
4. `SpawnerCore`を持つエンティティの座標に空気があったら同一x座標上にある`Spawner`を持つエンティティをキル (特殊スポナー処理)
5. `CooldownRequiredLong`を持ち、{PortalCooldown:0}であるエンティティに`Garbage`を付与
6. `CooldownRequired`を持ち、{PortalCooldown:300}であるスポーンブロック付きマインカートに`Garbage`を付与
7. `Prayable`の`Settings`が1以上であるとき以下の事柄を実行
   1. `Pray`を持ち、`Job`が1以上であるプレイヤーの`kill`への書き込みを許可し、祈りを捧げることができるテキストを表示
   2. `Pray`を持ち、`Job`が1以上であるプレイヤーから`Pray`を削除
8. ベッドで寝ているプレイヤーが存在したら、`BedCheck`を付与し、以下の事柄を実行
   - `BedCheck`を持つプレイヤーの位置にベッドがあるとき、そのプレイヤーから`BedCheck`を削除
9. `BedCheck`を持つプレイヤーから1.2001m上に`TypeChecked`を持つ雪玉を召喚し、`BedCheck`を削除
10. (-1923,3,-202)からdx=53,dy=16,dz=133内にいて、かつアドベンチャーモードであるプレイヤーを(-1896,25,-136)へ移動させる (X回路区域からプレイヤーを追い出す)
11. `CanFire`を持つエンティティの座標から一辺2mの範囲を炎で埋める
12. スペクテイターモードではないプレイヤーの座標にストラクチャーブロックがあるとき対象を排除 (Overworld内で直接ディメンション間移動できないようするための対策)
