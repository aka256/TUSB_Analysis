---
title: 風切更新
tags: [コマンド,スキル,職業,忍者]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,忍者,風切
last_updated: 2020/6/20
update: 2020-06-20 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: kazakiriUpdata.html
folder: command
datatable3cnp: true
---

<span class="label label-primary">位置 (-1920,11,-198)</span>

## About

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @a[score_Kazakiri_min=0] ~ ~ ~ /playsound entity.enderdragon.flap master @a[r=16] ~ ~ ~ 0.5 1.6 0|
|2|/execute @a[score_Kazakiri_min=0,score_Sneaking_min=1] ~ ~ ~ /summon AreaEffectCloud ~ ~0.5 ~ {Effects:[{Id:25b,Duration:20,Amplifier:-3b,ShowParticles:false}],ReapplicantDelay:0,Radius:2f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2,RadiusPerTick:0f,WaitTime:5,Age:4,Particle:cloud,Tags:[TypeChecked]}|
|3|/execute @a[score_Kazakiri_min=0,score_Sneaking=0] ~ ~ ~ /summon AreaEffectCloud ~ ~0.5 ~ {Effects:[{Id:25b,Duration:20,Amplifier:1b,ShowParticles:false}],ReapplicantDelay:0,Radius:2f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2,RadiusPerTick:0f,WaitTime:5,Age:4,Particle:cloud,Tags:[TypeChecked]}|
|4|/tellraw @a[score_Kazakiri=-1] {"text":"風切の効果が切れた。","color":"gold"}|
|5|/scoreboard players reset @a[score_Kazakiri=-1] Kazakiri|条件付き|

<div class="datatable3cnp-end"></div>

## 詳細

1. `Kazzakiri`が0以上であるすべてのプレイヤーの座標上で効果音を鳴らす
2. `Kazakiri`が0以上、`Sneaking`が1以上であるすべてのプレイヤーの座標上で、浮遊Lv.-3で効果時間1秒であり、`TypeChecked`を持つAECを召喚
3. `Kazakiri`が-1以下であるプレイヤーが存在したら、すべての対象に「風切の効果が切れた。」というメッセージを送り、`Kazakiri`を0に設定
