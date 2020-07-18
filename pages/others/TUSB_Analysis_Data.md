---
title: チーム、スコアボード
#tags: [チーム,スコアボード]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
update: 2020-06-17 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: TUSB_Analysis_Data.html
folder: others
---

## Team

- (空白):最初にログインしたときのチーム
- FriendlyTeam:通常プレイ時のチーム

---

## Scoreboard

### ScoreboardList

#### Const

スコアの計算等に用いられる定数群

|Objective|Criterion|
|-|-|
|Const|dummy|

|Target|Score|備考|
|-|-|-|
|#0|0|
|#-1|-1|
|#2|2|
|#3|3|
|#5|5|
|#8|8|
|#9|9|
|#10|10|
|#15|15|
|#20|20|
|#30|30|
|#50|50|
|#60|60|
|#100|100|
|#1000|1000|
|#12000|12000|
|#18000|18000|
|#24000|24000|
|#ExpMul|7|経験値取得時に使用する定数|
|#ConquerMax|50|攻略すべきエンドポータルフレームの数|
|#AddStaffSpan|4|製作者村人が追加される間隔|
|#MWCMultiplier|31743|乱数生成時の定数。詳しくは[キャリー付き乗算](https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%A3%E3%83%AA%E3%83%BC%E4%BB%98%E3%81%8D%E4%B9%97%E7%AE%97)を参照|
|#MWCBase|65536|同上|
|#LegacyWeight|7|レガシーアイテムの破壊されるかの重み|

---

#### Setting

様々な設定を管理しているスコア

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

##### Sightseeing

観光モードの適応状況を示すスコア。当然だが観光モードをONにすると、書き換えられる。詳しくは[観光モード提案開始](3_suggestSightseeing.html)

|値|説明|
|-|-|
|0(初期値)|観光モードOFF|
|1|観光モードON|

##### ForceNight

強制的に夜にするかどうかを示すスコア。月島のエンドポータルフレームにエンダーアイをはめることにより、書き換えられる。詳しくは[島攻略処理](conquerProcessing.html)

|値|説明|
|-|-|
|0|通常のサイクル|
|1(初期値)|常に夜|

##### Debug

デバッグ時のスコアであり、通常は変化することはない

|値|説明|
|-|-|
|0(初期値)|デバッグモードOFF|
|1|デバッグモードON|

##### Prayable

お祈りをすることができるか、管理するスコア。交易島の教会内にあるエンドポータルフレームにエンダーアイをはめることにより、書き換えられる。詳しくは[島攻略処理](conquerProcessing.html)

|値|説明|
|-|-|
|0(初期値)|お祈り不可|
|1|お祈り許可|

##### MobGriefing

ゲームルールのmobGriefingの値を保存するスコア。[毎tick必ず最初に実行したいコマンド群](runFirst.html)で書き換えられる。

|値|説明|
|-|-|
|0(初期値)|Mobによる地形破壊を許可|

##### Difficulty

攻略率による難易度を数値化したもの。`TypeCheck`を持つエンティティ(すべての敵Mob)へのバフのレベルに影響を与える。詳しくは[難易度調整](difficultyAdjustment.html)と[タイプ設定](3_typeSetting.html)

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

---

#### Global

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

##### ConquerCount

これまでに攻略した島、もしくはディメンションの数を保存するスコア。[島攻略処理](conquerProcessing.html)で加算される。

##### ConquerPctInt\ConquerPctDec

現在の攻略率の整数値(ConquerPercentInteger)と小数値(CoonquerPersentDecimal)を保存するスコア。[島攻略処理](conquerProcessing.html)で計算される。

##### ConquerSkylands/Nether/End/Underworld/Cloudia/MtTable/GLand/CntIse

それぞれのディメンションでの攻略数を保存するスコア。[島攻略処理](conquerProcessing.html)で加算される。

##### GameTime

TUSB開始時のワールドが作られてからの時間を保存するスコア。初回ログイン時に書きこまれる。詳しくは[初回ログイン時処理](firstLoginProcessing.html)

##### Random

乱数列を一時的に保存している`RndMWC`は、次の乱数の生成時に用いるのでその余剰をそのまま計算することができない。なので`Random`を一時バッファとして使用している。また、ゲーム内時間を代入して乱数を得ることもある。

##### ProgectileUpdate

**編集中**

##### PastorMax

牧師のアドバイスで用いられるスコア。月島のエンドポータルフレームにエンダーアイをはめることにより、値が6に書き変わり「もう長い間夜が続いていますが、...」のメッセージが表示されないようにしている。牧師からのアドバイスについての詳細は[牧師会話選択時処理](3_pastorTalk.html)で管理されている。

##### StartTime

TUSB開始時のワールドが作られてからの時間を保存するスコア。[初期化処理](initializeProcessing.html)で書きこまれる。

##### ConquerTimeSec

**編集中**

##### EntityCount

**編集中**

##### BlockCount

**編集中**

##### SkillTargetCount

**編集中**

##### NetherBossWaitCount

**編集中**

---

### LoadJob/SaveJob

|値|職業|
|:-:|:-:|
|1|剣士|
|2|忍者|
|3|狩人|
|4|白魔導士|
|5|黒魔導士|
|6|召喚士|
