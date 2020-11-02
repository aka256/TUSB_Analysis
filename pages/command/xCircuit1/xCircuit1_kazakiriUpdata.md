---
title: 風切更新
tags: [コマンド,スキル,忍者,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,忍者,風切
update: 2020-10-29 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit1/xCircuit1_kazakiriUpdata.html
datatable3cnp: true
summary: 忍者のスキルの1つである風切の演出やスキル実行者の上昇、下降処理、スキル効果切れメッセージの表示などを行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,11,-198)

<span class="tagBlack">呼び出し元</span> [時間経過]({{site.baseurl}}/command/xCircuit1/xCircuit1_timeElapsed.html)

忍者のスキルの1つである風切の演出やスキル実行者の上昇、下降処理、スキル効果切れメッセージの表示などを行う。

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

1. `Kazakiri`が0以上であるすべてのプレイヤーから半径16m以内のすべてのプレイヤーに効果音を鳴らす
2. **`Kazakiri`が0以上かつ`Sneaking`が1以上**であるすべてのプレイヤーから0.5m上に、**[KazakiriDown](#kazakiridown)を召喚**
3. **`Kazakiri`が0以上かつ`Sneaking`が0以下**であるすべてのプレイヤーから0.5m上に、**[KazakiriUp](#kazakiriup)を召喚**
4. `Kazakiri`が-1以下であるすべてのプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーに「<span style="color:gold;background-color:gray">風切の効果が切れた。</span>」というメッセージを表示
   2. 対象プレイヤーの`Kazakiri`を0に設定

### KazakiriDown

```mcfunction
/summon AreaEffectCloud ~ ~0.5 ~ {Effects:[{Id:25b,Duration:20,Amplifier:-3b,ShowParticles:false}],ReapplicantDelay:0,Radius:2f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2,RadiusPerTick:0f,WaitTime:5,Age:4,Particle:cloud,Tags:[TypeChecked]}
```

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|TypeChecked|
|Effects|透明化Lv.253,1秒間|

### KazakiriUp

```mcfunction
/summon AreaEffectCloud ~ ~0.5 ~ {Effects:[{Id:25b,Duration:20,Amplifier:1b,ShowParticles:false}],ReapplicantDelay:0,Radius:2f,RadiusOnUse:0f,DurationOnUse:0f,Duration:2,RadiusPerTick:0f,WaitTime:5,Age:4,Particle:cloud,Tags:[TypeChecked]}
```

|-|-|
|Name|(None)|
|Type|AEC|
|Tags|TypeChecked|
|Effects|透明化Lv.1,1秒間|
