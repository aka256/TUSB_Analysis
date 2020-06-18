---
title: ステータス表示
tags: [command,display,job]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
sidebar: mydoc_sidebar
permalink: statusDisplay.html
folder: command
datatable: true
---

- 位置(-1920,14,-192)
- 交易島の教会でのステータス表示?

## コマンド群

<div clase="datatable-begin"></div>

|No.|コマンド|
|:-:|:-|
|1|/tellraw @a[tag=ShowStatus] {"text":"---- ステータス ----","color":"white","bold":"true"}|
|2|/tellraw @a[tag=ShowStatus,score_Job_min=1,score_Job=1] [{"text":"選択している職業: ","color":"white"},{"text":"剣士","color":"blue","bold":"true"}]|
|3|/tellraw @a[tag=ShowStatus,score_Job_min=2,score_Job=2] [{"text":"選択している職業: ","color":"white"},{"text":"忍者","color":"dark_green","bold":"true"}]|
|4|/tellraw @a[tag=ShowStatus,score_Job_min=3,score_Job=3] [{"text":"選択している職業: ","color":"white"},{"text":"狩人","color":"red","bold":"true"}]|
|5|/tellraw @a[tag=ShowStatus,score_Job_min=4,score_Job=4] [{"text":"選択している職業: ","color":"white"},{"text":"白魔導士","color":"white","bold":"true"}]|
|6|/tellraw @a[tag=ShowStatus,score_Job_min=5,score_Job=5] [{"text":"選択している職業: ","color":"white"},{"text":"黒魔導士","color":"dark_purple","bold":"true"}]|
|7|/tellraw @a[tag=ShowStatus,score_Job_min=6,score_Job=6] [{"text":"選択している職業: ","color":"white"},{"text":"召喚士","color":"gold","bold":"true"}]|
|8|/tellraw @a[tag=ShowStatus,score_Job_min=6,score_Job=6] [{"text":"選択している職業: ","color":"white"},{"text":"召喚士","color":"gold","bold":"true"}]|
|9|/tellraw @a[tag=ShowStatus,score_Job_min=7] [{"text":"選択している職業: ","color":"white"},{"text":"不明","color":"dark_red","bold":"true","underlined":"true"}]|
|10|/tellraw @a[tag=ShowStatus] [{"translate":"レベル: %1\$s     次のレベルアップまで: \%2\$s EXP\n\n","color":"white","with":[{"score":{"name":"\*","objective":"Level"},"color":"aqua"},{"score":{"name":"\*","objective":"ExpToLevel"},"color":"aqua"}]},{"text":"レベル/残り必要経験値\n","color":"gray"},{"translate":"剣士: %1\$sLV/\%2\$sEXP        忍者: %3\$sLV/\%4\$sEXP        狩人: %5\$sLV/\%6\$sEXP\n","color":"gray","with":[{"score":{"name":"\*","objective":"KnightLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"KnightToLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"NinjaLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"NinjaToLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"ArcherLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"ArcherToLevel"},"color":"aqua"}]},{"translate":"白魔導士: %1\$sLV/\%2\$sEXP    黒魔導士: %3\$sLV/\%4\$sEXP    召喚士: %5\$sLV/\%6$sEXP","color":"gray","with":[{"score":{"name":"\*","objective":"WhiteMageLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"WhiteMageToLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"BlackMageLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"BlackMageToLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"SummonerLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"SummonerToLevel"},"color":"aqua"}]}]|
|11|/scoreboard players tag @a[tag=ShowStatus] remove ShowStatus|

<div clase="datatable-end"></div>
