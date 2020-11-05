---
title: ステークスファイア負け演出
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-05 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit13/xCircuit13_stakesLosePerform.html
datatable3c: true
summary: 狩人のスキルの一つであるステークスファイアの失敗時の演出を行う。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,9,-141)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群13]({{site.baseurl}}/command/xCircuit13/xCircuit13_command.html)

狩人のスキルの一つであるステークスファイアの失敗時の演出を行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/execute @e[tag=StakesLose] ~ ~ ~ /particle smoke ~ ~-0.3 ~ 0 0 0 0 1 force|リピート<br>動力が必要|
|2|/scoreboard players test #EntityCount Global * 0|
|3|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`StakesLose`を持つ**エンティティに対し、以下の事柄を実行
   1. すべての対象エンティティの座標上にパーティクルを表示
   2. 対象エンティティの数を`#EntityCount`の`Global`に代入
2. `#EntityCount`の`Global`が0以下であるとき、[ステークスファイア負け演出](#about)を停止
