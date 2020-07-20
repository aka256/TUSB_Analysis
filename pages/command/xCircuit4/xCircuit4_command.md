---
title: 毎tick実行するコマンド群4
tags: [コマンド]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-20 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit4/xCircuit4_command.html
datatable4c: true
summary: 村人関係の処理やそれぞれのディメンションでの特殊処理(ネザーラック破壊時の処理など)などへの分岐を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,4,-184)

<span class="tagBlack">呼び出し元</span> [初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html), [村人像]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_mainclockProcessing.html)

<span class="tagBlue">分岐先</span>

## コマンド群

|No.|コマンド|状態|コメント|
|:-:|-|-|-|
|1|/scoreboard players tag @a[tag=Mokuso,score_WalkOneCm_min=5] add MokusoEnd||黙想終了処理 Mokuso|
|2|/scoreboard players tag @a[tag=Mokuso,score_WalkOneCm_min=5] add MokusoEnd|
|3|/scoreboard players tag @a[tag=Mokuso,score_CrouchOneCm_min=5] add MokusoEnd|
|4|/execute @a[tag=MokusoEnd,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -184 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###黙想終了処理|
|5|/execute @a[score_WindWall_min=0] ~ ~ ~ /particle sweepAttack ~ ~1 ~ 2 2 2 0 1 true||ウィンドウォール WindWallスコア|
|6|/execute @a[score_WindWall_min=0] ~ ~ ~ /entitydata @e[r=6,tag=Driftable] {direction:[0d,-0.1d,0d]}|条件付き|
|7|/execute @a[score_WindWall_min=0] ~ ~ ~ /execute @e[r=6,tag=Driftable] ~ ~ ~ /summon Endermite ~ ~ ~ {Silent:true,NoAI:true,Invulnerable:true,Lifetime:2395,ActiveEffects:[{Id:14b,Duration:10,Amplifier:0b,ShowParticles:false}],Tags:[SystemEntity,TypeChecked,WindWallMite]}|条件付き|
|8|/execute @a[score_WindWall_min=0] ~ ~ ~ /scoreboard players tag @e[r=6,tag=Driftable] remove Driftable|条件付き|
|9|/execute @a[score_WindWall_min=0] ~ ~ ~ /execute @e[r=6,tag=DriftableA] ~ ~ ~ /entitydata @e[r=0,tag=WindWallMite] {Lifetime:2400}|条件付き|
|10|/execute @a[score_WindWall_min=0] ~ ~ ~ /execute @e[r=6,tag=DriftableA] ~ ~ ~ /summon ArmorStand ~ ~ ~ {Invisible:true,NoGravity:true,Invulnerable:true,Tags:[SystemEntity,Garbage,TypeChecked]}|条件付き|
|11|/execute @a[score_WindWall_min=0] ~ ~ ~ /scoreboard players tag @e[r=6,tag=DriftableA] remove DriftableA|条件付き|
|12|/scoreboard players tag @a[tag=MagicShield] add MagicShieldEnd|マジックシールドチェック MagicShield MagicShieldCheck|
|13|/scoreboard players tag @a[tag=MagicShield] remove MagicShieldEnd {HurtTime:0s}|条件付き|
|14|/execute @a[tag=MagicShieldEnd,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 9 -184 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###マジックシールド終了処理|
|15|/scoreboard players set @a[score_Jump_min=1] WalkOneCm 0||ジャンプ Jump|
|16|/scoreboard players set @a[score_Jump_min=1] FlyOneCm 0|条件付き|
|17|/scoreboard players tag @a[score_Choyaku_min=2,score_Jump_min=1] add ChoyakuJump {ActiveEffects:[{Id:8b}]}|条件付き|跳躍ダメージ Shiyaku Jump|
|18|/execute @a[tag=ChoyakuJump] ~ ~ ~ /playsound entity.enderdragon.flap master @a[r=16] ~ ~ ~ 8 0.8 0|条件付き|
|19|/execute @a[tag=ChoyakuJump] ~ ~ ~ /particle explode ~ ~ ~ 2.0 0 2.0 0 30 force|条件付き|
|20|/fill ~2 ~-1 ~ ~5 ~-1 ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 #跳躍ダメージ処理開始|条件付き|
|21|/execute @a[tag=ChoyakuJump] ~ ~ ~ /scoreboard players tag @e[r=9,tag=Enemy] add SkillTarget|条件付き|
|22|/execute @a[tag=ChoyakuJump,score_Choyaku_min=2,score_Choyaku=7] ~ ~ ~ /execute @e[r=3,tag=Enemy] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"旋風",damage:15d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}|動力が必要|
|23|/execute @a[tag=ChoyakuJump,score_Choyaku_min=8,score_Choyaku=12] ~ ~ ~ /execute @e[r=6,tag=Enemy] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"旋風",damage:35d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}|動力が必要|
|24|/execute @a[tag=ChoyakuJump,score_Choyaku_min=13] ~ ~ ~ /execute @e[r=9,tag=Enemy] ~ ~ ~ /summon Arrow ~ ~0.02 ~ {CustomName:"旋風",damage:60d,Motion:[0d,1d,0d],Silent:true,life:1200s,Tags:[Garbage]}|動力が必要|
|25|/fill ~-3 ~-1 ~ ~ ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block|
|26|/scoreboard players tag @a[tag=ChoyakuJump] remove ChoyakuJump|条件付き|
|27|/scoreboard players reset @a[score_Jump_min=1] Jump|
|28|/scoreboard players tag @a[score_HPChanging_min=0] add Damaged||緩衝体力用被ダメージ補正処理|
|29|/scoreboard players tag @a[tag=Damaged] remove Damaged {AbsorptionAmount:0f}|条件付き|
|30|/execute @a[tag=Damaged] ~ ~ ~ /scoreboard players operation @a[c=1] DamageTaken = @a[c=1] HP|
|31|/execute @a[tag=Damaged] ~ ~ ~ /scoreboard players operation @a[c=1] DamageTaken -= @a[c=1] HPChanging|条件付き|
|32|/scoreboard players operation @a[tag=Damaged] DamageTaken < #0 Const|条件付き|
|33|/scoreboard players tag @a[tag=Damaged] remove Damaged|条件付き|
|34|/execute @a[score_DamageTaken_min=0] ~ -200 ~ /kill @a[dy=-40]||奈落介錯|
|35|/scoreboard players tag @a[score_IronWill_min=1,score_DamageTaken_min=0] add IronWill||アイアンウィル発動 DamageTaken IronWill|
|36|/clone -1920 11 ~ -1920 11 ~ -1920 11 ~ filtered force minecraft:command_block 5 ###アイアンウィル継続判定|条件付き|
|37|/execute @a[tag=IronWill] ~ ~ ~ /summon AreaEffectCloud ~ ~ ~ {Invulnerable:true,Radius:0f,RadiusOnUse:0f,DurationOnUse:0f,Duration:0,RadiusPerTick:0f,WaitTime:0,Age:0,Particle:take,Tags:[IronWillPoint,SystemEntity,TypeChecked]}|条件付き|
|38|/execute @a[tag=IronWill] ~ ~ ~ /tp @e[dx=0,tag=IronWillPoint,c=1] @a[c=1]|条件付き|
|39|/execute @a[tag=IronWill] ~ ~ ~ /tp @a[c=1] @e[r=4,tag=IronWillPoint,c=1]|条件付き|

## 詳細
