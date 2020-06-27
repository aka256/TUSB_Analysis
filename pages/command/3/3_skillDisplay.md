---
title: 設定スキル表示
tags: [command]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/26
update: 2020/6/27
sidebar: mydoc_sidebar
permalink: 3_skillDisplay.html
folder: command/3
datatable3cnp: true
---

<span class="label label-primary">位置 (-1920,16,-189)</span>

## About

現在設定されているスキルについて表示を行う。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/tellraw @a[score_ShowSkillSlot_min=4,score_ShowSkillSlot=4,score_ModeState_min=1] {"translate":"現在のモードスキル設定(%1\$s中) %2\$s/%3\$s","bold":true,"with":[{"text":"ルビーモード","color":"red"},{"text":"↑","color":"red"},{"text":"↓","color":"blue"}]}|
|2|/tellraw @a[score_ShowSkillSlot_min=4,score_ShowSkillSlot=4,score_ModeState=-1] {"translate":"現在のモードスキル設定(%1\$s中) %2\$s/%3$s","bold":true,"with":[{"text":"サファイアモード","color":"blue"},{"text":"↑","color":"red"},{"text":"↓","color":"blue"}]}|
|3|/tellraw @a[score_ShowSkillSlot_min=4,score_ShowSkillSlot=4,score_ModeState_min=0,score_ModeState=0] {"translate":"現在のモードスキル設定(%1\$s中) %2\$s/%3\$s","bold":true,"with":[{"text":"モード未設定","color":"gray"},{"text":"↑","color":"red"},{"text":"↓","color":"blue"}]}|
|4|/execute @a[score_ShowSkillSlot_min=4,score_ShowSkillSlot=4] ~ ~ ~ /scoreboard players operation @a[c=1] ShowSkill = @a[c=1] ModeSkillA|
|5|/execute @a[score_ShowSkillSlot_min=3,score_ShowSkillSlot=3] ~ ~ ~ /scoreboard players operation @a[c=1] ShowSkill = @a[c=1] ModeSkillB|
|6|/tellraw @a[score_ShowSkillSlot_min=2,score_ShowSkillSlot=2] {"translate":"現在のサポートスキル設定 %1\$s/%2\$s","bold":true,"with":[{"text":"↑","color":"red"},{"text":"↓","color":"blue"}]}|
|7|/execute @a[score_ShowSkillSlot_min=2,score_ShowSkillSlot=2] ~ ~ ~ /scoreboard players operation @a[c=1] ShowSkill = @a[c=1] InstantSkillA|条件付き|
|8|/execute @a[score_ShowSkillSlot_min=1,score_ShowSkillSlot=1] ~ ~ ~ /scoreboard players operation @a[c=1] ShowSkill = @a[c=1] InstantSkillB|
|9|/scoreboard players remove @a[score_ShowSkillSlot_min=1] ShowSkillSlot 1|

<div class="datatable3cnp-end"></div>

## 詳細

1. `ShowSkillSlot`が4であり、`ModeState`が1以上であるすべてのプレイヤーに現在のルビーのモードスキル設定を表示
2. `ShowSkillSlot`が4であり、`ModeState`が-1以下であるすべてのプレイヤーに現在のサファイアのモードスキル設定を表示
3. `ShowSkillSlot`が4であり、`ModeState`が0であるすべてのプレイヤーにモード未設定時の現在のモードスキル設定を表示
4. `ShowSkillSlot`が4であるプレイヤーの`ShowSkill`に`ModeSkillA`を代入
5. `ShowSkillSlot`が3であるプレイヤーの`ShowSkill`に`ModeSkillB`を代入
6. `ShowSkillSlot`が2であるすべてのプレイヤー現在のサポートスキル設定を表示
7. `ShowSkillSlot`が2であるプレイヤーの`ShowSkill`に`InstantSkillA`を代入
8. `ShowSkillSlot`が1であるプレイヤーの`ShowSkill`に`InstantSkillB`を代入
9. `ShowSkillSlot`が1以上であるすべてのプレイヤーの`ShowSkillSlot`から1を引く
