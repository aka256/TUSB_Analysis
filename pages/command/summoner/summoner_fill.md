---
title: フィール
tags: [command]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/23
update: 2020/6/23
sidebar: mydoc_sidebar
permalink: command/summoner/summoner_fill.html
datatable4cnp: false
search: exclude
---

## About

## コマンド群

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209] ~ ~ ~ /summon ItemFrame ~ ~ ~ {Invulnerable:true,Facing:0b,Tags:[FillOffset]}|
|2|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209,tag=Sneaking] ~ ~ ~ /execute @a[rm=1,r=15] ~ ~ ~ /summon ItemFrame ~ ~ ~ {Invulnerable:true,Facing:0b,Tags:[FillOffset]}|
|3|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209] ~ ~ ~ /entitydata @e[r=15,tag=FillOffset] {:}|
|4|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209] ~ ~ ~ /playsound entity.bat.takeoff master @a[r=32] ~ ~ ~ 2 0.6 0|
|5|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /particle footstep ~ ~-0.5 ~ 2 0 2 0.1 60 force|
|6|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~-1 ~-1 ~-0.53125 /fill ~ ~ ~ ~2 ~ ~2 minecraft:wool 0 keep|
|7|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6200] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~1.2 {Motion:[0d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|8|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6200] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~1.2 {Motion:[0d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|9|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6200] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~-1.2 {Motion:[0d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|10|/execute @a[score_ActivatedSkill_min=6200,score_ActivatedSkill=6200] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~-1.2 {Motion:[0d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|11|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~ {Motion:[1d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|12|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~ ~-0.5 ~1.2 {Motion:[0d,0.1d,1d],Tags:[Fill,TypeChecked]}|
|13|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~ {Motion:[-1d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|14|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~ ~-0.5 ~-1.2 {Motion:[0d,0.1d,-1d],Tags:[Fill,TypeChecked]}|
|15|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~1.2 {Motion:[1d,0.1d,1d],Tags:[Fill,TypeChecked]}|
|16|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~1.2 {Motion:[-1d,0.1d,1d],Tags:[Fill,TypeChecked]}|
|17|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~-1.2 {Motion:[-1d,0.1d,-1d],Tags:[Fill,TypeChecked]}|
|18|/execute @a[score_ActivatedSkill_min=6201,score_ActivatedSkill=6201] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~-1.2 {Motion:[1d,0.1d,-1d],Tags:[Fill,TypeChecked]}|
|19|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~ {Motion:[2d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|20|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~ ~-0.5 ~1.2 {Motion:[0d,0.1d,2d],Tags:[Fill,TypeChecked]}|
|21|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~ {Motion:[-2d,0.1d,0d],Tags:[Fill,TypeChecked]}|
|22|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~ ~-0.5 ~-1.2 {Motion:[0d,0.1d,-2d],Tags:[Fill,TypeChecked]}|
|23|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~1.2 {Motion:[2d,0.1d,2d],Tags:[Fill,TypeChecked]}|
|24|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~1.2 {Motion:[-2d,0.1d,2d],Tags:[Fill,TypeChecked]}|
|25|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~-1.2 ~-0.5 ~-1.2 {Motion:[-2d,0.1d,-2d],Tags:[Fill,TypeChecked]}|
|26|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~-1.2 {Motion:[2d,0.1d,-2d],Tags:[Fill,TypeChecked]}|
|27|/execute @a[score_ActivatedSkill_min=6202,score_ActivatedSkill=6209] ~ ~ ~ /execute @e[r=15,tag=FillOffset] ~ ~ ~0.46875 /summon Snowball ~1.2 ~-0.5 ~-1.2 {Motion:[2d,0.1d,-2d],Tags:[Fill,TypeChecked]}|
|28|/clone -1920 ~2 ~ -1920 ~2 ~ -1920 ~2 ~ filtered force minecraft:command_block 5 ###周囲フィール予約|

|No.|コマンド|
|:-:|-|
|1|/execute @e[tag=Fill] ~ ~ ~ /playsound block.cloth.break master @a[r=32] ~ ~ ~ 2 0.6 0|
|2|/execute @e[tag=Fill] ~ ~ ~ /particle instantSpell ~ ~-1 ~ 1 0.1 1 0.1 10 force|
|3|/execute @e[tag=Fill] ~-1 ~-1 ~-1 /fill ~ ~ ~ ~2 ~ ~2 minecraft:wool 0 keep|
|4|/kill @e[tag=Fill]|

## 詳細
