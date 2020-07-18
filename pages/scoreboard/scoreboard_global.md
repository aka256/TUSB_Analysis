---
title: Global
tags: [スコアボード]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
update: 2020-07-14 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: scoreboard/scoreboard_global.html
folder: scoreboard
summary: プレイヤー達の間で共有されるスコアであり、攻略率関係のものが多い。
summaryDisable: true
---

## About

プレイヤー達の間で共有されるスコアであり、攻略率関係のものが多い。

|Objective|Criterion|
|-|-|
|Grobal|dummy|

|Target|初期値|備考|
|-|-|-|
|#ConquerCount|0|攻略した島の数|
|#ConquerPctInt|0|攻略率の整数部|
|#ConquerPctDec|0|攻略率の小数部|
|#ConquerSkylands|0|通常世界の攻略数|
|#ConquerNether|0|ネザーの攻略数|
|#ConquerEnd|0|エンドの攻略数|
|#ConquerUnderworld|0|地下世界の攻略数|
|#ConquerCloudia|0|クラウディアの攻略数|
|#ConquerMtTable|0|テーブルマウンテンの攻略数|
|#ConquerGLand|0|ガリバーランドの攻略数|
|#ConquerCntIce|0|トカルトコルデの攻略数|
|#GameTime|0|
|#Random|0|
|#ProjectileUpdate|0|
|#PastorMax|8|
|#StartTime|0|
|#ConquerTimeSec|0|
|#EntityCount|0|
|#BlockCount|0|
|#SkillTargetCount|0|
|#NeterBossWaitCount|36|

### ConquerCount

これまでに攻略した島、もしくはディメンションの数を保存するスコア。[島攻略処理](/command/xCircuit2/xCircuit2_conquerProcessing.html)で加算される。

### ConquerPctInt / ConquerPctDec

現在の攻略率の整数値(ConquerPercentInteger)と小数値(ConquerPersentDecimal)を保存するスコア。[島攻略処理](/command/xCircuit2/xCircuit2_conquerProcessing.html)で計算される。

### ConquerSkylands / Nether / End / Underworld / Cloudia / MtTable / GLand / CntIse

それぞれのディメンションでの攻略数を保存するスコア。[島攻略処理](/command/xCircuit2/xCircuit2_conquerProcessing.html)で加算される。

### GameTime

TUSB開始時のワールドが作られてからの時間を保存するスコア。初回ログイン時に書きこまれる。詳しくは[初回ログイン時処理](/command/xCircuit2/xCircuit2_firstLoginProcessing.html)

### Random

乱数列を一時的に保存している`RndMWC`は、次の乱数の生成時に用いるのでその余剰をそのまま計算することができない。なので`Random`を一時バッファとして使用している。また、ゲーム内時間を代入して乱数を得ることもある。

### ProgectileUpdate

**編集中**

### PastorMax

牧師のアドバイスで用いられるスコア。月島のエンドポータルフレームにエンダーアイをはめることにより、値が6に書き変わり「もう長い間夜が続いていますが、...」のメッセージが表示されないようにしている。牧師からのアドバイスについての詳細は[牧師会話選択時処理](/command/xCircuit3/xCircuit3_pastorTalk.html)で管理されている。

### StartTime

TUSB開始時のワールドが作られてからの時間を保存するスコア。[初期化処理](/command/xCircuitCore/xCircuitCore_initializeProcessing.html)で書きこまれる。

### ConquerTimeSec

**編集中**

### EntityCount

**編集中**

### BlockCount

**編集中**

### SkillTargetCount

**編集中**

### NetherBossWaitCount

**編集中**
