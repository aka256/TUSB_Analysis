---
title: ステークスファイア勝ち演出
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-05 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit13/xCircuit13_stakesWinPerform.html
datatable3c: true
summary: 狩人のスキルの一つであるステークスファイアの成功時の演出を行う。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,11,-141)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)

狩人のスキルの一つであるステークスファイアの成功時の演出を行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=StakesWin] ~ ~ ~ /playsound entity.mooshroom.shear master @a[r=16] ~ ~ ~ 0.2 1.2 0|リピート<br>動力が必要|
|2|/execute @e[tag=StakesWin] ~ ~ ~ /particle reddust ~ ~-0.3 ~ 0 0 0 0 1 force|
|3|/scoreboard players test #EntityCount Global * 0|
|4|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`StakesWin`を持つ**すべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティから半径16m以内のすべてのプレイヤーに効果音を鳴らす
   2. 対象エンティティの数を`#EntityCount`の`Global`に代入
   3. 対象エンティティの座標上にパーティクルを表示
2. `#EntityCount`の`Global`が0以下であるとき、[ステークスファイア勝ち演出](#about)を停止
