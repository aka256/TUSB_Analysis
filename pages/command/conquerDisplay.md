---
title: 攻略率表示
tags: [コマンド,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,交易島,攻略率
update: 2020-07-14 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: conquerDisplay.html
folder: command
datatable3cnp: true
---

<span class="label label-primary">位置 (-1920,18,-192)</span>

## About

交易島の教会での攻略率表示の処理を行う。

## コマンド群

<div class="datatable3cnp-begin"></div>

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/scoreboard players test Sightseeing Settings * 0|
|2|/time query gametime|条件付き [補足](#no2のコマンドブロックについて)あり|
|3|/scoreboard players operation #ConqTimeSec Global -= #StartTime Global|条件付き|
|4|/scoreboard players operation #ConqTimeSec Global /= #20 Const|条件付き|
|5|/scoreboard players operation #ConqTimeMin Global = #ConqTimeSec Global|条件付き|
|6|/scoreboard players operation #ConqTimeSec Global %= #60 Const|条件付き|
|7|/scoreboard players operation #ConqTimeMin Global /= #60 Const|条件付き|
|8|/scoreboard players operation #ConqTimeHour Global = #ConqTimeMin Global|条件付き|
|9|/scoreboard players operation #ConqTimeMin Global %= #60 Const|条件付き|
|10|/scoreboard players operation #ConqTimeHour Global /= #60 Const|条件付き|
|11|/tellraw @a[tag=ShowConquest] [{"text":"---- 攻略率 ----\n","color":"white","bold":"true"},{"translate":"全エリア %1\$s/%2\$s (%3\$s.%4\$s%%)   %5\$s経過\n","bold":"false","with":[{"score":{"name":"#ConquerCount","objective":"Global"}},{"score":{"name":"#ConquerMax","objective":"Const"}},{"score":{"name":"#ConquerPctInt","objective":"Global"}},{"score":{"name":"#ConquerPctDec","objective":"Global"}},{"translate":"%1\$s","italic":false,"bold":false,"color":"white","with":[{"translate":"%1\$s時間%2\$s分%3\$s秒","italic":"false","with":[{"score":{"name":"#ConqTimeHour","objective":"Global"}},{"score":{"name":"#ConqTimeMin","objective":"Global"}},{"score":{"name":"#ConqTimeSec","objective":"Global"}}]}]}]},{"translate":"通常世界: %1\$s/43  ネザー: %2\$s/1  エンド: %3\$s/1\n","color":"gray","with":[{"score":{"name":"#ConqCntSkylands","objective":"Global"},"color":"aqua"},{"score":{"name":"#ConqCntNether","objective":"Global"},"color":"aqua"},{"score":{"name":"#ConqCntEnd","objective":"Global"},"color":"aqua"}]},{"translate":"%1\$s: %2\$s/1  %3\$s: %4\$s/1  %5\$s: %6\$s/1  %7\$s: %8\$s/1  %9\$s: %10\$s/1","color":"gray","with":[{"selector":"@e[-1920,6,-193,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntUnderworld","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-194,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntCloudia","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-195,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntMtTable","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-196,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntGLand","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-197,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntIce","objective":"Global"},"color":"aqua"}]}]|条件付き|
|12|/scoreboard players test Sightseeing Settings 1 *|
|13|/tellraw @a[tag=ShowConquest] [{"text":"---- 攻略率 ----\n","color":"white","bold":"true"},{"translate":"全エリア %1\$s/%2\$s (%3\$s.%4\$s%%)   %5\$s経過\n","bold":"false","with":[{"score":{"name":"#ConquerCount","objective":"Global"}},{"score":{"name":"#ConquerMax","objective":"Const"}},{"score":{"name":"#ConquerPctInt","objective":"Global"}},{"score":{"name":"#ConquerPctDec","objective":"Global"}},{"text":"観光モードにつき非表示","color":"aqua"}]},{"translate":"通常世界: %1\$s/43  ネザー: %2\$s/1  エンド: %3\$s/1\n","color":"gray","with":[{"score":{"name":"#ConqCntSkylands","objective":"Global"},"color":"aqua"},{"score":{"name":"#ConqCntNether","objective":"Global"},"color":"aqua"},{"score":{"name":"#ConqCntEnd","objective":"Global"},"color":"aqua"}]},{"translate":"%1\$s: %2\$s/1  %3\$s: %4\$s/1  %5\$s: %6\$s/1  %7\$s: %8\$s/1  %9\$s: %10\$s/1","color":"gray","with":[{"selector":"@e[-1920,6,-193,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntUnderworld","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-194,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntCloudia","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-195,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntMtTable","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-196,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntGLand","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-197,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntIce","objective":"Global"},"color":"aqua"}]}]|条件付き|
|14|/tellraw @a[tag=ShowConquest] [{"text":"---- 攻略率 ----\n","color":"white","bold":"true"},{"translate":"全エリア %1\$s/%2\$s (%3\$s.%4\$s%%)   %5\$s経過\n","bold":"false","with":[{"score":{"name":"#ConquerCount","objective":"Global"}},{"score":{"name":"#ConquerMax","objective":"Const"}},{"score":{"name":"#ConquerPctInt","objective":"Global"}},{"score":{"name":"#ConquerPctDec","objective":"Global"}},{"text":"観光モードにつき非表示","color":"aqua"}]},{"translate":"通常世界: %1\$s/43  ネザー: %2\$s/1  エンド: %3\$s/1\n","color":"gray","with":[{"score":{"name":"#ConqCntSkylands","objective":"Global"},"color":"aqua"},{"score":{"name":"#ConqCntNether","objective":"Global"},"color":"aqua"},{"score":{"name":"#ConqCntEnd","objective":"Global"},"color":"aqua"}]},{"translate":"%1\$s: %2\$s/1  %3\$s: %4\$s/1  %5\$s: %6\$s/1  %7\$s: %8\$s/1  %9\$s: %10\$s/1","color":"gray","with":[{"selector":"@e[-1920,6,-193,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntUnderworld","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-194,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntCloudia","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-195,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntMtTable","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-196,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntGLand","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-197,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntIce","objective":"Global"},"color":"aqua"}]}]|

<div class="datatable3cnp-end"></div>

### No.2のコマンドブロックについて

No.2 のコマンドブロックには、以下のデータタグが付与されている。

```minecraftcommand
CommandStats:{QueryResultName:"#ConqTimeSec",QueryResultObjective:"Global"}
```
