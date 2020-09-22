---
title: ヘイカモン実行
tags: [コマンド,スキル,召喚士,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_heyComeOn.html
datatable3c: true
summary: 召喚士のスキルの1つであるヘイカモンを実行する。FriendlyTeamであるエンティティ(召喚士のペット)とプレイヤーテレポート処理、タワーバンク内からのプレイヤーの引き寄せ処理の除外、スキル実行時のメッセージの表示などを行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,12,-152)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

召喚士のスキルの1つであるヘイカモンを実行する。`FriendlyTeam`であるエンティティ(召喚士のペット)とプレイヤーテレポート処理、タワーバンク内からのプレイヤーの引き寄せ処理の除外、スキル実行時のメッセージの表示などを行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[-2827,57,-410,dx=9,dy=123,dz=9,score_ActivatedSkill_min=6020,score_ActivatedSkill=6029,tag=Sneaking] ~ ~ ~ detect ~ 60 ~ minecraft:iron_trapdoor -1 /tellraw @a[c=1] {"text":"ここにプレイヤーを引き寄せるわけにはいかない…。","color":"light_purple"}|
|2|/execute @a[-2827,57,-410,dx=9,dy=123,dz=9,score_ActivatedSkill_min=6020,score_ActivatedSkill=6029,tag=Sneaking] ~ ~ ~ detect ~ 60 ~ minecraft:iron_trapdoor -1 /scoreboard players tag @a[c=1] remove Sneaking|
|3|/execute @a[score_ActivatedSkill_min=6020,score_ActivatedSkill=6029] ~ ~ ~ /playsound entity.endermen.teleport master @a[r=32] ~ ~ ~ 2 1.4 0|
|4|/execute @a[score_ActivatedSkill_min=6020,score_ActivatedSkill=6020] ~ ~ ~ /execute @e[r=15,type=!Player,team=FriendlyTeam,c=-5] ~ ~ ~ /particle witchMagic ~ ~1 ~ 0.5 0.5 0.5 0 30 force|
|5|/execute @a[score_ActivatedSkill_min=6020,score_ActivatedSkill=6020] ~ ~ ~ /tp @e[r=15,type=!Player,team=FriendlyTeam,c=-5] @a[c=1]|条件付き|
|6|/execute @a[score_ActivatedSkill_min=6020,score_ActivatedSkill=6020,tag=Sneaking] ~ ~ ~ /execute @a[rm=1,r=15,c=-1] ~ ~ ~ /particle witchMagic ~ ~1 ~ 0.5 0.5 0.5 0 30 force|
|7|/execute @a[score_ActivatedSkill_min=6020,score_ActivatedSkill=6020,tag=Sneaking] ~ ~ ~ /tellraw @a[rm=1,r=15,c=-1] {"translate":"* %1$s の魔法で引き寄せられた！","with":[{"selector":"@a[c=1]"}]}|条件付き|
|8|/execute @a[score_ActivatedSkill_min=6020,score_ActivatedSkill=6020,tag=Sneaking] ~ ~ ~ /tp @a[rm=1,r=15,c=-1] @a[c=1]|条件付き|
|9|/execute @a[score_ActivatedSkill_min=6021,score_ActivatedSkill=6029] ~ ~ ~ /execute @e[r=15,type=!Player,team=FriendlyTeam,c=-10] ~ ~ ~ /particle witchMagic ~ ~1 ~ 0.5 0.5 0.5 0 30 force|
|10|/execute @a[score_ActivatedSkill_min=6021,score_ActivatedSkill=6029] ~ ~ ~ /tp @e[r=15,type=!Player,team=FriendlyTeam,c=-10] @a[c=1]|条件付き|
|11|/execute @a[score_ActivatedSkill_min=6021,score_ActivatedSkill=6029,tag=Sneaking] ~ ~ ~ /execute @a[rm=1,r=15,c=-2] ~ ~ ~ /particle witchMagic ~ ~1 ~ 0.5 0.5 0.5 0 30 force|
|12|/execute @a[score_ActivatedSkill_min=6021,score_ActivatedSkill=6029,tag=Sneaking] ~ ~ ~ /tellraw @a[rm=1,r=15,c=-2] {"translate":"* %1$s の魔法で引き寄せられた！","with":[{"selector":"@a[c=1]"}]}|条件付き|
|13|/execute @a[score_ActivatedSkill_min=6021,score_ActivatedSkill=6029,tag=Sneaking] ~ ~ ~ /tp @a[rm=1,r=15,c=-2] @a[c=1]|条件付き|

<div class="datatable3c-end"></div>

## 詳細

1. **`ActivatedSkill`が6020 ~ 6029**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. **タワーバンク内に居て、かつ`Sneaking`を持つ対象プレイヤー**に対し、以下の事柄を実行
      1. 「<span style="color:#FF55FF;">ここにプレイヤーを引き寄せるわけにはいかない…。</span>」とのメッセージを表示
      2. `Sneaking`を削除
   2. 対象プレイヤーから半径32m以内のすべてのプレイヤーに、効果音を鳴らす
2. **`ActivatedSkill`が6020**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. **対象プレイヤーから半径15m以内のプレイヤーでない`FriendlyTeam`を遠い所から5体選び**、以下の事柄を実行
      1. パーティクルを表示
      2. **対象エンティティを対象プレイヤーの座標上にテレポート**
   2. **`Sneaking`を持つ、対象プレイヤーから半径1 ~ 15m以内のプレイヤーを遠い所から1体選び**、以下の事柄を実行
      1. パーティクルを表示
      2. 「*(`ActivatedSkill`が6020であるプレイヤーの名前)の魔法で引き寄せられた！」とのメッセージを表示
      3. **対象プレイヤーを`ActivatedSkill`が6020であるプレイヤーの座標上にテレポート**
3. **`ActivatedSkill`が6021 ~ 6029**であるすべてのプレイヤーに対し、以下の事柄を実行
   1. **対象プレイヤーから半径15m以内のプレイヤーでない`FriendlyTeam`を遠い所から10体選び**、以下の事柄を実行
      1. パーティクルを表示
      2. **対象エンティティを対象プレイヤーの座標上にテレポート**
   2. **`Sneaking`を持つ、対象プレイヤーから半径1 ~ 15m以内のプレイヤーを遠い所から2体選び**、以下の事柄を実行
      1. パーティクルを表示
      2. 「*(`ActivatedSkill`が6021 ~ 6029であるプレイヤーの名前)の魔法で引き寄せられた！」とのメッセージを表示
      3. **対象プレイヤーを`ActivatedSkill`が6021 ~ 6029であるプレイヤーの座標上にテレポート**
