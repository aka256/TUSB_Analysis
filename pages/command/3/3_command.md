---
title: 毎tick実行するコマンド群3
tags: [command]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/26
update: 2020/6/26
sidebar: mydoc_sidebar
permalink: 3_command.html
folder: 3
datatable4c: true
---

<span class="label label-primary">位置 (-1920,4,-189)</span>

## About

村人関係の処理やそれぞれのディメンションでの特殊処理(ネザーラック破壊時の処理など)などへの分岐を行う。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|コメント|状態|
|:-:|-|-|-|
|1|/execute @a[score_SleepInBed_min=1,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -189 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ベッド処理|ベッド処理|
|2|/execute @a[score_kill_min=1,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 9 -189 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###お祈り処理|お祈り処理|
|3|/execute 0-0-1-0-2 ~ ~ ~ detect -55 14 8 minecraft:bedrock 0 /tp @e[rm=25,type=Villager,tag=ShopStaff] @e[-54,24,9,2,type=ArmorStand,tag=ShopHomePoint,c=1]|交易島落下防止兼追加 ShopStaffタグ|
|4|/execute @a[score_TalkToVillager_min=1,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 10 -189 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###村人会話|村人会話 牧師 エージェント 占い師|
|5|/execute @a[score_PastorFlag_min=1,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 11 -189 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###牧師会話|
|6|/execute @a[score_AgentFlag_min=1,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 12 -189 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###エージェント会話|
|7|/execute @a[score_AugurFlag_min=1,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 13 -189 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###占い師会話|
|8|/testfor @a[score_Payment_min=1] {Inventory:[{id:minecraft:emerald}]}|エメラルド支払い|
|9|/clone -1920 14 ~ -1920 14 ~ -1920 14 ~ filtered force minecraft:command_block 5 ###エメラルド支払い||条件付き|
|10|/execute @a[score_ShowSkillSlot_min=1,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 16 -189 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###設定スキル表示|設定スキル表示 スコアShowSkillSlot|
|11|/scoreboard players set #ReserveShowSkill Global 1||条件付き|
|12|/execute @a[tag=SuggestSightseeing,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -188 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###観光モード提案|観光モード提案 タグSuggestShightSeeing|
|13|/execute @a[-2827,57,-410,dx=9,dy=123,dz=9,m=adventure] ~ ~ ~ detect ~ ~ ~ minecraft:iron_trapdoor -1 /tp @a[c=1] ~ ~-1 ~|個人ロッカーエンパ対策|
|14|/tellraw @a[-6,65,-2148,dx=64,dy=135,dz=48,m=adventure] {"text":"不思議な力で押し戻された。","color":"dark_purple"}|テーブルマウンテン 不思議な力|
|15|/tp @a[-6,65,-2148,dx=64,dy=135,dz=48,m=adventure] ~ 37 ~||条件付き|
|16|/execute @a[score_MineNetherrack_min=1,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 13 -188 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ネザー火山噴火|ネザー火山噴火|
|17|/execute @a[39,7,67,10,c=1] ~ ~ ~ detect 39 6 67 minecraft:air 0 /execute @a[c=1] ~ ~ ~ detect 39 7 67 minecraft:monster_egg -1 /setblock 39 7 67 minecraft:mob_spawner 0 destroy {SpawnCount:1s,SpawnRange:5s,MaxNearbyEntities:16s,Delay:1s,MaxSpawnDelay:10s,MinSpawnDelay:10s,RequiredPlayerRange:32s,SpawnData:{id:Silverfish,CustomName:お知らせ,CustomNameVisible:true,ArmorItems:[{},{},{},{id:minecraft:wool,Count:1b}],ArmorDropChances:[0f,0f,0f,2f]}}|サボテン島の罠(封印島の間違えでは?)|
|18|/scoreboard players test Debug Settings * 0||条件付き|
|19|/summon Bat 8 26 4 {NoAI:true,Passengers:[{id:PrimedTnt,Fuse:5s},{id:MinecartSpawner,PortalCooldown:1,Tags:[CooldownRequired,TypeChecked],Delay:0s,MaxSpawnDelay:32000s,MinSpawnDelay:32000s,SpawnCount:200s,SpawnRange:64s,MaxNearbyEntities:300s,RequiredPlayerRange:120s,SpawnData:{id:FallingSand,Block:minecraft:fire,Data:0b,Time:1b,DropItem:false},SpawnPotentials:[{Weight:1}]}]}||条件付き|
|20|/execute @a[39,7,67,10,c=1] ~ ~ ~ detect 39 6 67 minecraft:chest -1 /setblock 39 7 67 minecraft:monster_egg 0 keep|
|21|/scoreboard players tag @e[type=!FallingSand,tag=!TypeChecked] add TypeCheck|タイプ設定 TypeCheck TypeChecked|
|22|/clone -1920 14 ~1 -1920 14 ~1 -1920 14 ~1 filtered force minecraft:command_block 5 ###タイプ設定||条件付き|
|23|/scoreboard players tag @e[tag=Arrow] add InGround {inGround:true}|接地矢無効化|
|24|/entitydata @e[tag=InGround] {Tags:[TypeChecked]}||条件付き|
|25|/scoreboard players tag @a add Invisible {ActiveEffects:[{Id:14b}]}|透明化&エーテル Invisible|
|26|/clone -1920 17 ~1 -1920 17 ~1 -1920 17 ~1 filtered force minecraft:command_block 5 ###エーテル処理||条件付き|
|27|/execute @e[tag=AbyssWarp] ~ -1 ~ /tp @e[dy=-29,tag=AbyssWarp] @a[r=80,c=1]|奈落防止|
|28|/execute @a ~ -30 ~ /tp @a[dy=32] ~ ~ ~||条件付き|
|29|/entitydata @e[tag=Freeze] {Motion:[0d,0d,0d]}|NoAI停止処理 Freeze **もやんのせい**|

<div class="datatable4c-end"></div>

## 詳細

1. `SleepInBed`が1以上のプレイヤーを一人選択し、(-1920,8,-189)にある[ベッド処理](3_bedProcessing.html)を実行
2. `kill`が1以上であるプレイヤーを一人選択し、(-1920,9,-189)にある[お祈りkill](3_prayProcessing.html)を実行
3. (-55,14,8)にある岩盤(交易島のドラッグストアの下辺り)が存在するとき、そこから25m外側に`ShopStaff`を持つ村人を(-54,24,9)にいる`ShopHomePoint`を持つアーマースタンドの所に移動 (つまり、岩盤がなければ村人はTPされない)
4. `TalkToVillager`が1以上であるプレイヤーを一人選択し、(-1920,10,-189)にある[村人会話処理](3_villagerTalkProcessing.html)を実行
5. `PastorFlag`が1以上であるプレイヤーを一人選択し、(-1920,11,-189)にある[牧師会話](3_pastorTalk.html)を実行
6. `AgentFlag`が1以上であるプレイヤーを一人選択し、(-1920,12,-189)にある[エージェント会話](3_agentTalk.html)を実行
7. `AugurFlag`が1以上であるプレイヤーを一人選択し、(-1920,13,-189)にある[占い師会話](3_augurTalk.html)を実行
8. `Payment`が1以上であるすべてのプレイヤーのインベントリ内にエメラルドが存在するとき、(-1920,14,-189)にある[エメラルド支払い](3_paymentProcessing.html)を実行
9. `ShowSkillSlot`が1以上であるプレイヤーを一人選択し、(-1920,16,-189)にある[設定スキル表示](3_skillDisplay.html)を実行し、`#ReserveShowSkill`の`Global`を1に設定
10. `SuggestSightseeing`を持つプレイヤーを一人選択し、(-1920,8,-188)にある[観光モード提案開始](3_suggestSightseeing.html)を実行
11. (-2827,57,-410)からdx=9,dy=123,dz=9の範囲(個人ロッカー内)にある鉄のトラップドアの座標上にアドベンチャーモードであるプレイヤーが存在するとき、1m下に移動させる
12. (-6,65,-2148)からdx=64,dy=135,dz=48の範囲(テーブルマウンテンの滝)にアドベンチャーモードであるプレイヤーがいるとき、「不思議な力で押し戻された」とのメッセジーを流し、y=37に移動させる
13. `MineNetherrack`が1以上であるプレイヤーを一人選択し、(-1920,13,-188)にある[ネザーラック破壊時火山噴火処理](3_volcanoProcessing.html)を実行
14. (39,6,67)が空気ブロックであり、(39,7,67)がシミ入り石ブロックであるとき、(39,7,67)にお知らせのスポナーを設置し、以下の事柄を実行
    - `Debug`の`Setting`が0以下であるとき(8,26,4)に着火されたTNTと炎をまき散らすスポナー付きマインカートを乗せたコウモリを召喚
15. (39,6,67)がチェストであるとき(39,7,67)にシミ入り石ブロックを設置
16. `FallingSand`と`TypeChecked`を持っていないすべてのエンティティに`TypeCheck`を付与し、(-1920,14,-188)にある[タイプ設定](3_typeSetting.html)を実行
17. `Arrow`を持ち、`inGround`がtrueであるすべてのエンティティ(矢)に`InGround`と`TypeChecked`を付与
18. 透明化を付与されているすべてのプレイヤーに`Invisible`を付与し、(-1920,17,-188)にある[透明化&エーテル処理](3_invisibleEtherProcessing.html)を実行
19. `AbyssWarp`を持つエンティティの1m下から29m下いる`AbyssWarp`を持つエンティティを80m以内にいる一人のプレイヤーの座標に移動し、すべてのプレイヤーから30m下を起点として32m上までの範囲にいるすべてのプレイヤーをその場に移動
20. `Freeze`を持つエンティの`Motion`を[0,0,0]に設定
