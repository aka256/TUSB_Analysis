---
title: バードストライク効果クロック処理
tags: [コマンド,スキル,狩人]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-11-06 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit13/xCircuit13_birdStrikeEffectClock.html
datatable3c: true
summary: 狩人のスキルの一つであるバードストライクの敵の落下処理をMotionの変更によって行う。
summaryDisable: true
tocLimit: h3
---

## About

<span class="tagYellow">位置</span> (-1920,11,-140)

<span class="tagBlack">呼び出し元</span> [バードストライククロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_birdStrikeClock.html)

狩人のスキルの一つであるバードストライクの敵の落下処理を`Motion`の変更によって行う。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @e[tag=FallDown] remove FallDown {OnGround:true}|リピート<br>動力が必要|
|2|/entitydata @e[tag=FallDown] {Motion:[0d,-1d,0d]}|
|3|/scoreboard players test #EntityCount Global * 0|
|4|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###ストップ|条件付き|

<div class="datatable3c-end"></div>

### No.1のコマンドブロックについて

No.1のコマンドブロックには以下のタグが付与されている。

```mcfunction
CommandStats:{AffectedEntitiesObjective:"Global",AffectedEntitiesName:"#EntityCount"}
```

## 詳細

1. **`FallDown`を持ち、`OnGround`が`true`である**すべてのエンティティに対し、以下の事柄を実行
   1. 対象エンティティから`FallDown`を削除
   2. `FallDown`を削除した数を`#EntityCount`の`Global`に代入
2. **`FallDown`を持つすべてのエンティティに[バードストライク付与タグ](#バードストライク付与タグ)を付与**
3. `#EntityCount`の`Global`が0以下であるとき、[バードストライク効果クロック処理]({{site.baseurl}}/command/xCircuit13/xCircuit13_birdStrikeEffectClock.html)

### バードストライク付与タグ

```mcfunction
{
  Motion:[0d,-1d,0d]
}
```
