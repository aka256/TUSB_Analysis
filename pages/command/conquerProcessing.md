---
title: 島攻略処理
tags: [command,entity,display]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
last_updated: 2020/6/17
sidebar: mydoc_sidebar
permalink: conquerProcessing.html
folder: command
datatable3c: true
---

- 位置(-1920,17,-191),(-1920,18,-191)

## コマンド群

### (-1920,17,-191)にあるコマンド群 (島攻略処理という看板がついているもの)

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/scoreboard players tag @a[score_UseEnderEye_min=1,c=1] add Conquer|
|2|/scoreboard players reset @a[tag=Conquer] UseEnderEye|
|3|/execute @a[tag=Conquer,score_USBDimension=-1] ~ ~ ~ /scoreboard players add #ConqCntNether Global 1|
|4|/execute @a[tag=Conquer,score_USBDimension_min=100] ~ ~ ~ /scoreboard players add #ConqCntEnd Global 1|
|5|/execute @a[tag=Conquer,score_USBDimension_min=0,score_USBDimension=0] ~ ~ ~ /scoreboard players add #ConqCntSkylands Global 1|
|6|/execute @a[tag=Conquer,score_USBDimension_min=1,score_USBDimension=1] ~ ~ ~ /scoreboard players add #ConqCntUnderworld Global 1|
|7|/execute @a[tag=Conquer,score_USBDimension_min=10,score_USBDimension=10] ~ ~ ~ /scoreboard players add #ConqCntCloudia Global 1|
|8|/execute @a[tag=Conquer,score_USBDimension_min=11,score_USBDimension=11] ~ ~ ~ /scoreboard players add #ConqCntMtTable Global 1|
|9|/execute @a[tag=Conquer,score_USBDimension_min=12,score_USBDimension=12] ~ ~ ~ /scoreboard players add #ConqCntGLand Global 1|
|10|/execute @a[tag=Conquer,score_USBDimension_min=13,score_USBDimension=13] ~ ~ ~ /scoreboard players add #ConqCntIce Global 1|
|11|/scoreboard players tag @a[tag=Conquer] remove Conquer|
|12|/scoreboard players add #ConquerCount Global 1|
|13|/scoreboard players operation #ConquerPctInt Global = #ConquerCount Global|
|14|/scoreboard players operation #ConquerPctInt Global *= #1000 Const|
|15|/scoreboard players operation #ConquerPctInt Global /= #ConquerMax Const|
|16|/scoreboard players operation #ConquerPctDec Global = #ConquerPctInt Global|
|17|/scoreboard players operation #ConquerPctInt Global /= #10 Const|
|18|/scoreboard players operation #ConquerPctDec Global %= #10 Const|
|19|/scoreboard players operation #ConquerCountResidue Global = #ConquerCount Global|
|20|/scoreboard players operation #ConquerCountResidue Global %= #AddStuffSpan Const|
|21|/execute @a ~ ~ ~ /playsound entity.enderdragon.death master @a[c=1] ~ ~ ~ 0.3 2 0.3|
|22|/execute @a ~ ~ ~ /particle happyVillager ~ ~ ~ 1 1 1 0 30 normal|
|23|/execute @a ~ ~ ~ /particle instantSpell ~ ~1 ~ 1 1 1 0.1 90 normal|
|24|/execute @a ~ ~1 ~ /summon FireworksRocketEntity ~ ~ ~ {LifeTime:10,FireworksItem:{id:minecraft:fireworks,Count:1b,tag:{Fireworks:{Explosions:[{Type:1b,Flicker:true,Trail:true,Colors:[16774552],FadeColors:[16777215]},{Type:0b,Flicker:false,Trail:false,Colors:[65407,16777215,16777215],FadeColors:[16777215]}]}}}}|
|25|/title @a times 5 150 20|
|26|/title @a subtitle {"translate":"攻略率 : %1\$s/%2\$s (%3\$s.%4\$s%%)","italic":true,"color":"white","with":[{"score":{"name":"#ConquerCount","objective":"Global"},"bold":true,"italic":false},{"score":{"name":"#ConquerMax","objective":"Const"}},{"score":{"name":"#ConquerPctInt","objective":"Global"}},{"score":{"name":"#ConquerPctDec","objective":"Global"}}]}|
|27|/title @a title {"text":"島を攻略した！","color":"gold","bold":true}|
|28|/effect @a minecraft:instant_health 1 6 true|
|29|/effect @a minecraft:saturation 1 19 true|
|30|/scoreboard players test Sightseeing Settings * 0|
|31|/time query gametime|条件付き|
|32|/scoreboard players operation #ConqTimeSec Global -= #StartTime Global|条件付き|
|33|/scoreboard players operation #ConqTimeSec Global /= #20 Const|条件付き|
|34|/scoreboard players operation #ConqTimeMin Global = #ConqTimeSec Global|条件付き|
|35|/scoreboard players operation #ConqTimeSec Global %= #60 Const|条件付き|
|36|/scoreboard players operation #ConqTimeMin Global /= #60 Const|条件付き|
|37|/scoreboard players operation #ConqTimeHour Global = #ConqTimeMin Global|条件付き|
|38|/scoreboard players operation #ConqTimeMin Global %= #60 Const|条件付き|
|39|/scoreboard players operation #ConqTimeHour Global /= #60 Const|条件付き|
|40|/tellraw @a {"translate":"攻略タイム : %1\$s","italic":true,"bold":true,"color":"white","with":[{"translate":"%1\$s時間%2\$s分%3\$s秒","italic":"false","with":[{"score":{"name":"#ConqTimeHour","objective":"Global"}},{"score":{"name":"#ConqTimeMin","objective":"Global"}},{"score":{"name":"#ConqTimeSec","objective":"Global"}}]}]}|条件付き|

<div class="datatable3c-end"></div>

### (-1920,18,-191)にあるコマンド群 (島攻略処理という看板がついているものの上のやつ)

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/scoreboard players test #ConquerCountResidue Global 0 0|
|2|/entitydata @r[-1899,3,-82,dx=20,dy=2,dz=2,type=Villager,tag=!ShopStaff,c=1] {NoAI:false,Silent:false,Tags:[ShopStaff,TypeChecked]}|条件付き|
|3|/scoreboard players test Prayable Settings * 0|
|4|/testforblock -70 15 32 minecraft:end_portal_frame 7|条件付き|
|5|/scoreboard players set Prayable Settings 1|条件付き|
|6|/scoreboard players test ForceNight Settings * 0|
|7|/execute 0-0-1-0-1 -1920 4 -96 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###時計島|条件付き|
|8|/scoreboard players test ForceNight Settings 1 *|
|9|/testforblock 3 77 87 minecraft:end_portal_frame 4|条件付き|
|10|/time set day|条件付き|
|11|/gamerule doDaylightCycle true|条件付き|
|12|/scoreboard players remove #PastorMax Global 2|条件付き|
|13|/scoreboard players set ForceNight Settings 0|条件付き|

<div class="datatable3c-end"></div>

## 詳細

### (-1920,17,-191)にあるコマンド群 (島攻略処理という看板がついているもの)

1. `UseEnderEye`が1以上であるプレイヤーを一人選択し、`Conquer`を付与
2. `Conquer`を持つプレイヤーの`UseEnderEye`を0に設定
3. `Conquer`を持ち、`USBDimension`が-1以下であるプレイヤーがいるとき、`#ConqCntNether`の`Global`を1に設定
4. `Conquer`を持ち、`USBDimension`が100以上であるプレイヤーがいるとき、`#ConqCntEnd`の`Global`を1に設定
5. `Conquer`を持ち、`USBDimension`が0であるプレイヤーがいるとき、`#ConqCntSkylands`の`Global`を1に設定
6. `Conquer`を持ち、`USBDimension`が1であるプレイヤーがいるとき、`#ConqCntUnderworld`の`Global`を1に設定
7. `Conquer`を持ち、`USBDimension`が10であるプレイヤーがいるとき、`#ConqCntCloudia`の`Global`を1に設定
8. `Conquer`を持ち、`USBDimension`が11であるプレイヤーがいるとき、`#ConqCntMtTable`の`Global`を1に設定
9. `Conquer`を持ち、`USBDimension`が12であるプレイヤーがいるとき、`#ConqCntGLand`の`Global`を1に設定
10. `Conquer`を持ち、`USBDimension`が13であるプレイヤーがいるとき、`#ConqCntIce`の`Global`を1に設定
11. `Conquer`を持つプレイヤーから`Conquer`を消去
12. `#ConquerCount`の`Global`に1を足す
13. `#ConquerPctInt`の`Global`に`#ConquerCount`の`Global`を代入し、1000を掛け、`#ConquerMax`の`Const` = 50で割る
14. `#ConquerPctDec`の`Global`に`#ConquerPctInt`の`Global`を代入
15. `#ConquerPctInt`の`Global`を10で割る
16. `#ConquerPctDec`の`Global`を10との剰余を代入
    - `#ConquerPctInt`'s `Global` = `ConquerCount`'s `Global` \* 1000 / 50 / 10 = `ConquerCount`'s`Global` \* 2
    - `#ConquerPctDec`'s `Global` = `#ConquerPctInt`'s `Global` % 10
    - `#ConquerPctInt`の`Global`が攻略率の整数部、`#ConquerPctDec`の`Global`が攻略率の小数部
17. `#ConquerCountResidue`の`Global`に`#ConquerCount`の`Global`を代入し、`#AddStuffSpan`の`Const`=4で割る
    - `#ConquerCountResidue`'s `Global` = `#ConquerCount`'s `Global` / 4
18. すべてのプレイヤーの座標で演出を実行し、即時回復Lv.6を1秒間、満腹Lv.19を1秒間付与
19. `Sightseeing`の`Setting`が0以下の時、以下の事柄を実行
    1. ワールドが作られてからの時間を表示
    2. `StartTime`から攻略時間を計算し、`ConqTimeSec`、`ConqTimeMin`、`ConqTimeHour`にそれぞれに対応する値を代入
    3. 攻略タイムの表示

### (-1920,18,-191)にあるコマンド群 (島攻略処理という看板がついているものの上のやつ)

1. `#ConquerCountResidue`の`Global`が0の時、以下の事柄を実行
    - (-1899,3,-82)付近にいる製作者村人に{NoAI:false,Silent:false,Tags:[ShopStaff,TypeChecked]}を付与
2. `Prayable`の`Settings`が0以下の時、以下の事柄を実行
    - (-70,15,32)(交易島)の東向きでエンダーアイがはめられているエンドポータルフレームが存在する時、`Prayable`の`Settings`を1に設定
3. `ForceNight`の`Settings`が0以下の時、以下の事柄を実行
    - [CommonGM](TUSB_Analysis_Entity.html)が(-1920,4,-96)にある[時計島](clockIslandProcessing.html)を実行
4. `ForceNight`の`Settings`が1以上であり、(3,77,87)にある南向きでエンダーアイがはめられたエンドポータルフレームが存在する時、以下の事柄を実行
    1. 時間をdayに設定し、`doDaylightCycle`をtrueに変更
    2. `#PastorMax`の`Global`から2引く
    3. `ForceNight`の`Settings`を0に設定
