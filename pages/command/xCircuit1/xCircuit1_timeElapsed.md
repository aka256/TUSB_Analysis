---
title: 時間経過
tags: [コマンド,スキル,表示,忍者,狩人,黒魔導士,嫌な予感,トカルトコルデ]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,トカルトコルデ,スキル,ガーディアン
update: 2020-10-29 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit1/xCircuit1_timeElapsed.html
folder: xCircuit1
datatable4c: true
summary: スキルやイベント、トカルトコルデなどでの時間経過により変化するものの処理、分岐を行っている。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,11,-200)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群1]({{site.baseurl}}/command/xCircuit1/xCircuit1_runFirst.html)

<span class="tagBlue">分岐先</span> [風切更新]({{site.baseurl}}/command/xCircuit1/xCircuit1_kazakiriUpdata.html), [狩人レーダーヴィジョン終了処理]({{site.baseurl}}/command/xCircuit10/xCircuit10_RadarVisionFinProcessing.html), [約1分処理]({{site.baseurl}}/command/xCircuit1/xCircuit1_oneMinProcessing.html), [Tick停止飛翔物削除]({{site.baseurl}}/command/xCircuit1/xCircuit1_tickStopDelete.html), [敵スキル実行]({{site.baseurl}}/command/xCircuit1/xCircuit1_runMobSkill.html), [嫌な予感実行]({{site.baseurl}}/command/xCircuit1/xCircuit1_eventFulfill.html), [トカルト処理]({{site.baseurl}}/command/xCircuit1/xCircuit1_iceProcessing.html), [動物誘導イベント]({{site.baseurl}}/command/xCircuit1/xCircuit1_animalGuideEvent.html)

スキルやイベント、トカルトコルデなどでの時間経過により変化するものの処理、分岐を行っている。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|コメント|状態|
|:-:|:-|:-|:-|
|1|/scoreboard players remove @a[score_ManaRefresh_min=0] ManaRefresh 1|時間経過<br>マナリフレッシュ|
|2|/tellraw @a[score_ManaRefresh=-1] {"text":"マナリフレッシュの効果が切れた。","color":"gold"}||条件付き|
|3|/scoreboard players reset @a[score_ManaRefresh=-1] ManaRefresh||条件付き|
|4|/scoreboard players remove @a[score_WindWall_min=0] WindWall 1|時間経過<br>ウィンドウォール|
|5|/tellraw @a[score_WindWall=-1] {"text":"ウィンドウォールの効果が切れた。","color":"gold"}||条件付き|
|6|/scoreboard players reset @a[score_WindWall=-1] WindWall||条件付き|
|7|/execute @a[score_WindWall_min=0] ~ ~ ~ /playsound block.fire.extinguish master @a[r=16] ~ ~-100 ~ 0 0.5 0.1|
|8|/scoreboard players remove @a[score_NinjaTime_min=0] NinjaTime 1|時間経過<br>連舞<br>跳躍|
|9|/scoreboard players set @a[score_NinjaTime=-1] Tsuremai 0||条件付き|
|10|/scoreboard players set @a[score_NinjaTime=-1] Choyaku 0||条件付き|
|11|/scoreboard players reset @a[score_NinjaTime=-1] NinjaTime||条件付き|
|12|/effect @a[tag=MagicShield] minecraft:resistance 15 4 true|マジックシールド継続|
|13|/effect @a[tag=Mokuso] minecraft:regeneration 15 1 true|瞑想継続|
|14|/effect @a[tag=Mokuso,score_Level_min=43] minecraft:regeneration 15 2 true||条件付き|
|15|/scoreboard players remove @a[score_Kazakiri_min=0] Kazakiri 1|風切|
|16|/clone -1920 ~ ~2 -1920 ~ ~2 -1920 ~ ~2 filtered force minecraft:command_block 5 ###風切更新||条件付き|
|17|/scoreboard players remove @a[score_RadarVision_min=0] RadarVision 1|時間経過<br>レーダーヴィジョン|
|18|/scoreboard players tag @a[score_RadarVision=-1] add RadarEnd||条件付き|
|19|/tp @a[score_RadarVision=-1] ~ ~15 ~||条件付き|
|20|/scoreboard players reset @a[score_RadarVision=-1] RadarVision||条件付き|
|21|/execute 0-0-1-0-1 ~ 12 -166 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###レーダーヴィジョン終了処理予約||条件付き|
|22|/scoreboard players add #SecCount Global 1|約1分処理<br>イベント時伸びる|
|23|/scoreboard players test #SecCount Global 0 0|
|24|/worldborder warning distance 0||条件付き|
|25|/scoreboard players test #SecCount Global 61 *|
|26|/clone -1920 14 ~ -1920 14 ~ -1920 14 ~ filtered force minecraft:command_block 5 ###１分クロック||条件付き|
|27|/scoreboard players tag @e[tag=FlyingObject] add TestingTick {inTile:"minecraft:air"}|Tick停止飛翔物判定|
|28|/entitydata @e[tag=TestingTick] {PortalCooldown:1}||条件付き|
|29|/clone -1920 15 ~ -1920 15 ~ -1920 15 ~ filtered force minecraft:command_block 5 ###tick停止判定予約||条件付き|
|30|/execute @e[tag=CanSpin] ~-0.5 ~ ~-0.5 /fill ~ ~ ~ ~1 ~1 ~1 minecraft:web 0 keep|毒蜘蛛蜘蛛の巣設置<br>タグ<br>CanSpin|
|31|/scoreboard players tag @e[tag=Freeze] add Melt {PortalCooldown:0}|NoAI解除<br>Freeze<br>Melt|
|32|/entitydata @e[tag=Melt] {:,NoAI:false}||条件付き|
|33|/scoreboard players tag @e[tag=Melt] remove Freeze||条件付き|
|34|/scoreboard players tag @e[tag=Melt] remove Melt||条件付き|
|35|/scoreboard players add @e[tag=SkillMob] MobCastTime 20|敵スキル<br>SkillMob<br>CastingMob<br>MobCastTime|
|36|/execute @r[type=!Player,tag=SkillMob,c=1] ~ ~ ~ /scoreboard players operation @e[dx=0,tag=SkillMob,score_MobCastTime_min=400,c=1] MobCastTime %= #20 Const||条件付き|
|37|/clone -1920 ~3 ~3 -1920 ~3 ~3 -1920 ~3 ~3 filtered force minecraft:command_block 5 ###敵スキル実行||条件付き ガラスあり|
|38|/testfor @a[tag=CauseEvent,score_USBDimension_min=0,score_USBDimension=0]|イベント履行|
|39|/scoreboard players test #SecCount Global 0 *||条件付き|
|40|/clone -1920 ~ ~3 -1920 ~ ~3 -1920 ~ ~3 filtered force minecraft:command_block 5 ###嫌な予感実行||条件付き|
|41|/tp 0-0-2-0-2 ~ 10 ~|クロック正常入力|
|42|/scoreboard players tag @a[score_USBDimension_min=13,score_USBDimension=13,tag=!SaveTorch,m=!spectator] add RemoveTorch|トカルト処理|
|43|/clone -1920 ~1 ~3 -1920 ~1 ~3 -1920 ~1 ~3 filtered force minecraft:command_block 5 ###トカルト処理||条件付き|
|44|/scoreboard players tag @a[tag=SaveTorch] remove SaveTorch|
|45|/execute 0-0-1-0-3 ~ ~ ~ /scoreboard players operation @e[r=5,tag=VillagerMeal] Freshness *= #-1 Const|動物誘導イベント|
|46|/clone -1920 ~2 ~3 -1920 ~2 ~3 -1920 ~2 ~3 filtered force minecraft:command_block 5 ###動物誘導イベント||条件付き|
|47|/scoreboard players tag @a add ReduceCurse {ActiveEffects:[{Id:4b,Amplifier:2b}]}|ガーディアン<br>呪い短縮|
|48|/effect @a[tag=ReduceCurse] minecraft:mining_fatigue 15 3||条件付き|
|49|/effect @a[tag=ReduceCurse] minecraft:weakness 15 3||条件付き|
|50|/effect @a[tag=ReduceCurse] minecraft:hunger 15 3||条件付き|
|51|/scoreboard players tag @a[tag=ReduceCurse] remove ReduceCurse||条件付き|

<div class="datatable4c-end"></div>

## 詳細

### スキル系処理

- 各スキルのカウンター用スコアのデクリメントなどを行う。

<div style="height:4px;"></div>

1. **`ManaRefresh`が0以上**であるプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーの**`ManaRefresh`から1を引く**
   2. **`ManaRefresh`が-1以下**である対象プレイヤーに対し、以下の事柄を実行
      1. 対象プレイヤーに「<span style="color:gold;background-color:gray">マナリフレッシュの効果が切れた。</span>」とのメッセージを表示
      2. 対象プレイヤーの`ManaRefresh`を0に設定
2. **`WindWall`が0以上**であるプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーの**`WindWall`から1を引く**
   2. **`WindWall`が-1以上**である対象プレイヤーに対し、以下の事柄を実行
      1. 「<span style="color:gold;background-color:gray">ウィンドウォールの効果が切れた。</span>」とのメッセージを表示
      2. 対象プレイヤーの`WindWall`を0に設定
3. `WindWall`が0以上であるすべてのプレイヤーから、半径16m以内のすべてのプレイヤーに効果音を鳴らす。
4. **`NinjaTime`が0以上**であるプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーの**`NinjaTime`から1を引く**
   2. **`NinjaTime`が-1以下**である対象プレイヤーに対し、以下の事柄を実行
      1. 対象プレイヤーの`Tsuremai`と`Choyaku`をそれぞれ0に設定
      2. 対象プレイヤーの`NinjaTime`を0に設定
5. **`MagicShield`を持つ**すべてのプレイヤーに**耐性Lv.4を15秒間付与**
6. **`Mokuso`を持つ**プレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーに**再生能力Lv.1を15秒間付与**
   2. **`Level`が43以上**である対象プレイヤーに**再生能力Lv.2を15秒間付与**
7. **`Kazakiri`が0以上**であるプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーの**`Kazakiri`から1を引く**
   2. [風切更新]({{site.baseurl}}/command/xCircuit1/xCircuit1_kazakiriUpdata.html)を実行
8. **`RadarVision`が0以上**であるプレイヤーに対し、以下の事柄を実行
   1. 対象プレイヤーの**`RadarVision`から1を引く**
   2. **`RadarVision`が-1以下**である対象プレイヤーに対し、以下の事柄を実行
      1. 対象プレイヤーに**`RadarEnd`を付与**
      2. 対象プレイヤーを15m下に移動
      3. 対象プレイヤーの`RadarVision`を0に設定
      4. [狩人レーダーヴィジョン終了処理]({{site.baseurl}}/command/xCircuit10/xCircuit10_radarVisionFinProcessing.html)を実行

### 1分カウント

- 1分置きに実行される[約1分処理]({{site.baseurl}}/command/xCircuit1/xCircuit1_oneMinProcessing.html)用カウンタスコアのデクリメントなどを行う。

<div style="height:4px;"></div>

1. **`#SecCount`の`Global`に1を足す**
2. `#SecCount`の`Global`が0であるとき、ワールドの境界線から0m近づいたとき警告を出す (`\worldborder waring distance`のリセット)
3. **`#SecCount`の`Global`が61以上であるとき**、[約1分処理]({{site.baseurl}}/command/xCircuit1/xCircuit1_oneMinProcessing.html)を実行

### Tick停止飛翔物削除処理

- 空中で停止している投擲物の判定のための`PortalCooldown`の設定などを行う。

<div style="height:4px;"></div>

- **`FlyingObject`を持ち、`inTile`が`minecraft:air`である**(空気中で停止している)エンティティに対し、以下の事柄を実行
    1. 対象エンティティに`TestingTick`を付与
    2. **`TestingTick`を持つすべてのエンティティの`PortalCooldown`を1に設定**
    3. [Tick停止飛翔物削除]({{site.baseurl}}/command/xCircuit1/xCircuit1_tickStopDelete.html)を実行

### 敵Mobによる蜘蛛の巣設置

- SATなどの移動するたびに蜘蛛の巣を設置するMobの処理を行う。

<div style="height:4px;"></div>

- **`CanSpin`を持つ**エンティティを中心として一辺2mの範囲に蜘蛛の巣を設置

### NoAI停止処理

- `Freeze`を持ち、`PortalCooldown`が0になったMobの`NoAI`を解除する。(もやんのせい)

<div style="height:4px;"></div>

- **`Freeze`を持ち、`PortalCooldown`が0である**エンティティに対し、以下の事柄を実行
    1. 対象エンティティに`Melt`を付与
    2. `Melt`を持つ対象エンティティに対し、以下の事柄を実行
       1. 対象エンティティの**`NoAI`をfalseに設定**
       2. 対象エンティティから`Freeze`と`Melt`を削除

### 敵Mobスキル実行

- `SkillMob`を持つ敵Mobの`MobCastTime`に値を代入し、[敵スキル実行]({{site.baseurl}}/command/xCircuit1/xCircuit1_runMobSkill.html)を実行実行する

<div style="height:4px;"></div>

- **`SkillMob`を持つ**エンティティに対し、以下の事柄を実行
    1. 対象エンティティの**`MobCastTime`に20を足す**
    2. **プレイヤーでない対象エンティティを一人ランダムに選び、その同座標上に`MobCastTime`が400以上であり`SkillMob`を持つ一体のエンティティの`MobCastTime`に20との剰余を代入**
    3. [敵スキル実行]({{site.baseurl}}/command/xCircuit1/xCircuit1_runMobSkill.html)を実行

### 嫌な予感実行

- 条件を満たす場合、嫌な予感を実行する。

<div style="height:4px;"></div>

- **`CauseEvent`を持ち**、**`USBDimension`が0**であるプレイヤーが存在し、**`#SecCount`の`Global`が0以上**であるとき、[嫌な予感実行]({{site.baseurl}}/command/xCircuit1/xCircuit1_eventFulfill.html)を実行

### SystemKeeperテレポート

- [SystemKeeper処理]({{site.baseurl}}/command/xCircuitCore/xCircutitCore_systemKeeperProcessing.html)の[SystemKeeper]({{site.baseurl}}/entity/entity_entity.html#systemkeeper)の復帰処理?を行う。

- [SystemKeeper]({{site.baseurl}}/entity/entity_entity.html#systemkeeper)を今の座標からy=10へ移動

### トカルトコルデ処理

- トカルトでの松明減少やトカルトエンカウントのための分岐を行う。

<div style="height:4px;"></div>

1. **`USBDimension`が13**であり、**`SaveTorch`を持ってなく**、スペクテイターモードでないプレイヤーに対し、以下の事柄を実行
    1. 対象エンティティに**`RemoveTorch`を付与**
    2. [トカルト処理]({{site.baseurl}}/command/xCircuit1/xCircuit1_iceProcessing.html)を実行
2. `SaveTouch`を持つすべてのプレイヤーから`SaveTouch`を消去

### 動物誘導イベント完了検知

- 嫌な予感のうちの1つである、動物誘導イベントでの動物を[農業家]({{site.baseurl}}/entity/entity_entity.html#農業家)の近くに連れてきたときの処理を行う。

<div style="height:4px;"></div>

- **[農業家]({{site.baseurl}}/entity/entity_entity.html#農業家)から半径5m以内で`VillagerMeal`を持つ**エンティティに対し、以下の事柄を実行
    1. 対象エンティティの`Freshness`の符号を反転する
    2. [動物誘導イベント]({{site.baseurl}}/command/xCircuit1/xCircuit1_animalGuideEvent.html)を実行

### エルダーガーディアンの呪い変更

- エルダーガーディアンの呪い(採掘速度低下Lv.2)を受けたプレイヤーに対し、別の効果を上書きする。

<div style="height:4px;"></div>

- **採掘速度低下Lv.2**を持つプレイヤーに対し、以下の事柄を実行
    1. 対象プレイヤーに`ReduceCurse`を付与
    2. `ReduceCurse`を持つプレイヤーに**採掘速度低下Lv.3、弱体化Lv.3、空腹Lv.3をそれぞれ15秒間付与**
    3. `ReduceCurse`を持つプレイヤーから`ResuceCurce`を削除
