---
title: Setting
tags: [スコアボード]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
update: 2020-07-14 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: scoreboard/scoreboard_setting.html
folder: scoreboard
summary: 様々な設定を管理しているスコアである。
summaryDisable: true
---

## About

様々な設定を管理しているスコアである。

|Objective|Criterion|
|-|-|
|Setting|dummy|

|Target|初期値|
|-|-|
|Sightseeing|0|
|ForceNight|1|
|Debug|0|
|Prayable|0|
|MobGriefing|0|
|Diffuculty|0|

### Sightseeing

観光モードの適応状況を示すスコア。当然だが観光モードをONにすると、書き換えられる。詳しくは[観光モード提案開始]({{site.baseurl}}/command/xCircuit3/xCircuit3_suggestSightseeing.html)

|値|説明|
|-|-|
|0(初期値)|観光モードOFF|
|1|観光モードON|

### ForceNight

強制的に夜にするかどうかを示すスコア。月島のエンドポータルフレームにエンダーアイをはめることにより、書き換えられる。詳しくは[島攻略処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_conquerProcessing.html)

|値|説明|
|-|-|
|0|通常のサイクル|
|1(初期値)|常に夜|

### Debug

デバッグ時のスコアであり、通常は変化することはない

|値|説明|
|-|-|
|0(初期値)|デバッグモードOFF|
|1|デバッグモードON|

### Prayable

お祈りをすることができるか、管理するスコア。交易島の教会内にあるエンドポータルフレームにエンダーアイをはめることにより、書き換えられる。詳しくは[島攻略処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_conquerProcessing.html)

|値|説明|
|-|-|
|0(初期値)|お祈り不可|
|1|お祈り許可|

### MobGriefing

ゲームルールのmobGriefingの値を保存するスコア。[毎tick実行するコマンド群1]({{site.baseurl}}/command/xCircuit1/xCircuit1_runFirst.html)で書き換えられる。

|値|説明|
|-|-|
|0(初期値)|Mobによる地形破壊を許可|

### Difficulty

攻略率による難易度を数値化したもの。`TypeCheck`を持つエンティティ(すべての敵Mob)へのバフのレベルに影響を与える。詳しくは[難易度調整]({{site.baseurl}}/command/xCircuit2/xCircuit2_difficultyAdjustment.html)と[タイプ設定]({{site.baseurl}}/command/xCircuit3/xCircuit3_typeSetting.html)

$$
Difficult = (PlayerNum)^2+ConquerPctInt\\
ConquerPctInt: 攻略率の整数部
$$

上記の計算をTUSBログイン時と1分おきに行う。

|値|説明|バフ1|バフ2|
|-|-|-|-|
|0(初期値)~29|強化1段階目|スピードLv.0 1秒間|耐性Lv.0 1秒間|
|30~69|強化2段階目|スピードLv.0 1000000秒間|耐性Lv.0 1000000秒間|
|70~109|強化3段階目|スピードLv.1 1000000秒間|耐性Lv.1 1000000秒間|
|110~149|強化4段階目|スピードLv.2 1000000秒間|耐性Lv.1 1000000秒間|
|150~189|強化5段階目|スピードLv.3 1000000秒間|耐性Lv.2 1000000秒間|
|190~|強化6段階目|スピードLv.4 1000000秒間|耐性Lv.2 1000000秒間|

- 例1: プレイヤーが1人の時

|Difficultyの値|島攻略数|強化段階|
|:-:|:-:|:-:|
|1,3,...,27,29|0~14|1|
|31,33,...,67,69|15~34|2|
|71,73,...,99,101|35~50|3|

- 例2: プレイヤーが10人の時

|Difficultyの値|島攻略数|強化段階|
|:-:|:-:|:-:|
|100,102,...,106,108|0~4|3|
|110,112,...,146,148|5~24|4|
|150,152,...,186,188|25~44|5|
|190,192,...,198,200|45~50|6|
