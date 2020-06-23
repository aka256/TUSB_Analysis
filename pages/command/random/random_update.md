---
title: 乱数更新
tags: [command]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/23
update: 2020/6/23
sidebar: mydoc_sidebar
permalink: random_update.html
folder: random
datatable4cnp: false
search: exclude
---

/scoreboard players operation @a[tag=UpdateRandom] RndMWC *= #MWCMultiplier Const
/execute @a[tag=UpdateRandom] ~ ~ ~ /scoreboard players operation @a[c=1] RndMWC += @a[c=1] RndMWCCarry
/execute @a[tag=UpdateRandom] ~ ~ ~ /scoreboard players operation @a[c=1] RndMWCCarry = @a[c=1] RndMWC
/scoreboard players operation @a[tag=UpdateRandom] RndMWC %= #MWCBase Const
/scoreboard players operation @a[tag=UpdateRandom] RndMWCCarry /= #MWCBase Const
/scoreboard players tag @a[tag=UpdateRandom] remove UpdateRandom

RndMWC = (RndMWC * #MWCMultiplier + RndMWCCarry) % #MWCBase
RndMWCCarry = RndMWC / #MWCBase

```math
RndMWC = x_n
#MWCMultuplier = a = 31743
RndMWCCarry = c_(n-1)
#MWCBase = b = 2^16
```

r = 1
