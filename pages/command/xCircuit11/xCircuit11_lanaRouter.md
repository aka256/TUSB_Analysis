---
title: ラナルータ実行
tags: [コマンド,スキル,黒魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-14 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_lanaRouter.html
datatable3cnp: true
summary: 黒魔導士のスキルの1つであるラナルータを実行する。Minecraft内の時間の変更やスキル実行時のメッセージの表示、ForceNightが1以上の時、つまり夜を司る島の攻略前でのスキル実行失敗メッセージの表示などの処理を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,14,-156)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

黒魔導士のスキルの1つであるラナルータを実行する。Minecraft内の時間の変更やスキル実行時のメッセージの表示、`ForceNight`が1以上の時、つまり夜を司る島の攻略前でのスキル実行失敗メッセージの表示などの処理を行う。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players test ForceNight Settings * 0|
|2|/time add 12000|条件付き|
|3|/execute @a[score_ActivatedSkill_min=5090,score_ActivatedSkill=5099] ~ ~ ~ /me の魔法で昼夜が入れ替わった。|条件付き|
|4|/execute @a[score_ActivatedSkill_min=5090,score_ActivatedSkill=5099] ~ ~ ~ /particle dragonbreath ~ ~5 ~ 0.5 2 0.5 2 90 force|条件付き|
|5|/execute @a ~ ~ ~ /playsound block.portal.ambient master @a[c=1] ~ ~ ~ 1 2 1|条件付き|
|6|/scoreboard players test ForceNight Settings 1 *|
|7|/tellraw @a[score_ActivatedSkill_min=5090,score_ActivatedSkill=5099] {"text":"先に昼を取り戻さなくては…。","color":"light_purple"}|条件付き|

<div class="datatable3cnp-end"></div>

## 詳細

1. **`ForceNight`の`Settings`が0以下であるとき**、以下の事柄を実行
   1. **現在の時間に12000を足す** (Minecraft内の1日の時間は24000)
   2. **`ActivatedSkill`が5090 ~ 5099**であるすべてのプレイヤーに対し、以下の事柄を実行
      1. 「(対象プレイヤーの名前) の魔法で昼夜が入れ替わった。」とのメッセージを表示
      2. 対象プレイヤーの座標上で**パーティクルを表示**
   3. **すべてのプレイヤーに効果音を鳴らす**
2. **`ForceNight`の`Settings`が1以上であるとき**、以下の事柄を実行
   1. **`ActivatedSkill`が5090 ~ 5099**であるすべてのプレイヤーに対し、「<span style="color:#FF55FF;">先に昼を取り戻さなくては…。</span>」とのメッセージを表示
