---
title: パルプンテ実行
tags: [コマンド,スキル,黒魔導士,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-17 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_pulpunte.html
datatable3c: true
summary: 黒魔導士のスキルの1つであるパルプンテを実行する。Randomの値によって異なるメッセージと効果を与える。効果の一覧はRandomとその効果についてを参照。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,15,-154)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるパルプンテを実行する。`Random`の値によって異なるメッセージと効果を与える。効果の一覧は[Randomとその効果について](#randomとその効果について)を参照。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/scoreboard players tag @a[score_ActivatedSkill_min=5250,score_ActivatedSkill=5259] add ChanceCenter|
|2|/execute @a[tag=ChanceCenter] ~ ~ ~ /me はパルプンテを唱えた！|
|3|/scoreboard players operation @a[tag=ChanceCenter] Random %= #15 Const|
|4|/execute @a[tag=ChanceCenter] ~ ~ ~ /scoreboard players tag @e[r=15,tag=Enemy] add ChanceTarget|
|5|/execute @a[tag=ChanceCenter] ~ ~ ~ /scoreboard players tag @e[r=15,team=FriendlyTeam] add ChanceTarget|
|6|/execute @a[tag=ChanceCenter,score_Random_min=0,score_Random=0] ~ ~ ~ /me 達に何かがぶつかってきた。|
|7|/execute @a[tag=ChanceCenter,score_Random_min=0,score_Random=0] ~ ~ ~ /execute @e[r=15,tag=ChanceTarget] ~ ~ ~ /summon FallingSand ~ ~0.5 ~ {Block:"minecraft:piston_extension",Time:1,DropItem:false,HurtEntities:true,FallHurtMax:20,FallHurtAmount:20f,FallDistance:1f,Tags:[CooldownRequired],PortalCooldown:10}|条件付き|
|8|/execute @a[tag=ChanceCenter,score_Random_min=1,score_Random=1] ~ ~ ~ /me 達は翼を失った。|
|9|/execute @a[tag=ChanceCenter,score_Random_min=1,score_Random=1] ~ ~ ~ /execute @e[r=15,tag=ChanceTarget] ~ ~ ~ /summon ThrownPotion ~ ~0.5 ~ {Potion:{id:minecraft:splash_potion,Count:1b,tag:{display:{Name:"跳躍力低下Ｘ"},CustomPotionEffects:[{Amplifier:-11b,Duration:400,Id:8b}]}},Tags:[SystemEntity,TypeChecked]}|条件付き|
|10|/execute @a[tag=ChanceCenter,score_Random_min=2,score_Random=2] ~ ~ ~ /me 達はおなかが空いてきた。|
|11|/execute @a[tag=ChanceCenter,score_Random_min=2,score_Random=2] ~ ~ ~ /effect @a[r=15,tag=ChanceTarget] minecraft:hunger 3 100 false|条件付き|
|12|/execute @a[tag=ChanceCenter,score_Random_min=3,score_Random=3] ~ ~ ~ /me 達は光を失った。|
|13|/execute @a[tag=ChanceCenter,score_Random_min=3,score_Random=3] ~ ~ ~ /effect @a[r=15,tag=ChanceTarget] minecraft:blindness 30 0 false|条件付き|
|14|/execute @a[tag=ChanceCenter,score_Random_min=4,score_Random=4] ~ ~ ~ /me 達は体が軽くなった。|
|15|/execute @a[tag=ChanceCenter,score_Random_min=4,score_Random=4] ~ ~ ~ /effect @e[r=15,tag=ChanceTarget] minecraft:levitation 30 0 false|条件付き|
|16|/execute @a[tag=ChanceCenter,score_Random_min=5,score_Random=5] ~ ~ ~ /me 達は黒い霧に包まれた。|
|17|/execute @a[tag=ChanceCenter,score_Random_min=5,score_Random=5] ~ ~ ~ /effect @e[r=15,tag=ChanceTarget] clear|条件付き|
|18|/execute @a[tag=ChanceCenter,score_Random_min=5,score_Random=5] ~ ~ ~ /scoreboard players add @a[r=15,tag=ChanceTarget] RefreshHPMax 0|条件付き|
|19|/execute @a[tag=ChanceCenter,score_Random_min=6,score_Random=6] ~ ~ ~ /me 達は翼を授かった。|
|20|/execute @a[tag=ChanceCenter,score_Random_min=6,score_Random=6] ~ ~ ~ /effect @e[r=15,tag=ChanceTarget] minecraft:jump_boost 30 14 false|条件付き|
|21|/execute @a[tag=ChanceCenter,score_Random_min=7,score_Random=7] ~ ~ ~ /me 達の周りのブロックが軟らかくなった。|
|22|/execute @a[tag=ChanceCenter,score_Random_min=7,score_Random=7] ~ ~ ~ /effect @a[r=15,tag=ChanceTarget] minecraft:haste 30 9 false|条件付き|
|23|/execute @a[tag=ChanceCenter,score_Random_min=8,score_Random=8] ~ ~ ~ /me 達の感覚が研ぎ澄まされた。|
|24|/execute @a[tag=ChanceCenter,score_Random_min=8,score_Random=8] ~ ~ ~ /effect @a[r=15,tag=ChanceTarget] minecraft:night_vision 30 4 false|条件付き|
|25|/execute @a[tag=ChanceCenter,score_Random_min=9,score_Random=9] ~ ~ ~ /me 達は風を纏った。|
|26|/execute @a[tag=ChanceCenter,score_Random_min=9,score_Random=9] ~ ~ ~ /scoreboard players set @a[r=15,tag=ChanceTarget] WindWall 20|条件付き|
|27|/execute @a[tag=ChanceCenter,score_Random_min=10,score_Random=10] ~ ~ ~ /me 達のおなかが鳴り止んだ。|
|28|/execute @a[tag=ChanceCenter,score_Random_min=10,score_Random=10] ~ ~ ~ /effect @a[r=15,tag=ChanceTarget] minecraft:saturation 200 0 false|条件付き|
|29|/execute @a[tag=ChanceCenter,score_Random_min=11,score_Random=11] ~ ~ ~ /me 達を癒しの風が包み込む。|
|30|/execute @a[tag=ChanceCenter,score_Random_min=11,score_Random=11] ~ ~ ~ /effect @e[r=15,tag=ChanceTarget] minecraft:instant_health 1 6 false|条件付き|
|31|/execute @a[tag=ChanceCenter,score_Random_min=12,score_Random=12] ~ ~ ~ /me 達の魔力が満ち溢れてきた。|
|32|/execute @a[tag=ChanceCenter,score_Random_min=12,score_Random=12] ~ ~ ~ /execute @a[r=15,tag=ChanceTarget] ~ ~ ~ /scoreboard players operation @a[c=1] MP = @a[c=1] MPMax|条件付き|
|33|/execute @a[tag=ChanceCenter,score_Random_min=12,score_Random=12] ~ ~ ~ /scoreboard players set @a[r=15,tag=ChanceTarget] MPMaxFlag 1|条件付き|
|34|/execute @a[tag=ChanceCenter,score_Random_min=13,score_Random=13] ~ ~ ~ /me 達は見慣れないスターを拾った。|
|35|/execute @a[tag=ChanceCenter,score_Random_min=13,score_Random=13] ~ ~ ~ /effect @e[r=15,tag=ChanceTarget] minecraft:resistance 30 4 false|条件付き|
|36|/execute @a[tag=ChanceCenter,score_Random_min=14,score_Random=14] ~ ~ ~ /me の魔法はイオナズンになった！|
|37|/execute @a[tag=ChanceCenter,score_Random_min=14,score_Random=14] ~ ~ ~ /kill @e[r=15,tag=Enemy]|条件付き|
|38|/execute @a[tag=ChanceCenter] ~ ~ ~ /playsound ambient.cave master @a[r=32] ~ ~ ~ 0.8 2 0.2|
|39|/execute @a[tag=ChanceCenter,score_Random_min=0,score_Random=5] ~ ~ ~ /particle witchMagic ~ ~ ~ 5 2 5 0.1 300 force|
|40|/execute @a[tag=ChanceCenter,score_Random_min=6,score_Random=14] ~ ~ ~ /particle instantSpell ~ ~ ~ 5 2 5 0.1 300 force|
|41|/execute @a[tag=ChanceCenter] ~ ~ ~ /scoreboard players tag @e[r=15,tag=ChanceTarget] remove ChanceTarget|
|42|/scoreboard players tag @a[tag=ChanceCenter] remove ChanceCenter|

<div class="datatable3c-end"></div>

## 詳細

1. **`ActivatedSkill`が5250 ~ 5259**であるすべてのプレイヤーに、**`ChanceCenter`を付与**
2. **`ChanceCenter`を持つ**すべてのプレイヤーに対して、以下の事柄を実行
   1. 「(PlayerName) はパルプンテを唱えた！」とのメッセージを表示
   2. 対象プレイヤーの`Random`を\\(Random = Random\bmod 15\\)とする
   3. 対象プレイヤーから**半径15m以内の`Enemy`を持ったすべてのエンティティに、`ChanceTarget`を付与**
   4. 対象プレイヤーから**半径15m以内の`FriendlyTeam`に`ChanceTarget`を付与**
   5. **`Random`の値に応じて、`ChanceCenter`を対象としたメッセージの表示と、`ChanceCenter`を中心とした半径15m以内の`ChanceTarget`に特定の効果を与える** (効果内容は[Randomとその効果について](#randomとその効果について)を参照)
   6. 対象プレイヤーから半径32m以内のすべてのプレイヤーに、効果音を鳴らす
   7. 対象プレイヤーの座標上にパーティクルを表示
   8. 対象プレイヤーから半径15m以内の`ChanceTarget`を持つすべてのエンティティから、`ChanceTarget`を削除
   9. `ChanceCenter`を削除

### Randomとその効果について

|Random|メッセージ|効果|効果の対象|
|:-:|-|-|:-:|
|0|(PlayerName)達に何かがぶつかってきた。|piston_extnesionの落下|エンティティ|
|1|(PlayerName)達は翼を失った。|跳躍力低下Xの投下|エンティティ|
|2|(PlayerName)達はおなかが空いてきた。|空腹Lv.101を3秒間付与|プレイヤー|
|3|(PlayerName)達は光を失った。|盲目Lv.1を30秒間付与|プレイヤー|
|4|(PlayerName)達は体が軽くなった。|浮遊Lv.1を30秒間付与|エンティティ|
|5|(PlayerName)達は黒い霧に包まれた。|すべてのエフェクトを解除し、`RefreshHPMax`を0に設定|プレイヤー|
|6|(PlayerName)達は翼を授かった。|跳躍力上昇Lv.15を30秒間付与|エンティティ|
|7|(PlayerName)達の周りのブロックが軟らかくなった。|採掘速度上昇Lv.10を30秒間付与|プレイヤー|
|8|(PlayerName)達の感覚が研ぎ澄まされた。|暗視Lv.5を30秒間付与|プレイヤー|
|9|(PlayerName)達は風を纏った。|`WindWall`を20に設定|プレイヤー|
|10|(PlayerName)達のおなかが鳴り止んだ。|満腹Lv.1を200秒間付与|プレイヤー|
|11|(PlayerName)達を癒しの風が包み込む。|即時回復Lv.7を1秒間付与|エンティティ|
|12|(PlayerName)達の魔力が満ち溢れてきた。|`MP`に`MPMax`を代入し、`MPMaxFlag`を1に設定|プレイヤー|
|13|(PlayerName)達は見慣れないスターを拾った。|耐性Lv.5を30秒間付与|エンティティ|
|14|(PlayerName)の魔法はイオナズンになった！|半径15m以内の`Enemy`を持ったエンティティをキル|エンティティ|
