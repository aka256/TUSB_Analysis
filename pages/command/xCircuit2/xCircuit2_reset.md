---
title: 毎tick実行するコマンド群2
tags: [コマンド,敵Mob,職業]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,メインクロック
last_updated: 2020/6/19
update: 2020-06-19 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit2/xCircuit2_reset.html
folder: command
datatable4c: true
summary: 毎tick実行するコマンド群の1つであり、TUSBにログインした際にジョブやHP、満腹度修正など、様々な処理への分岐を行う。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,4,-192)

<span class="tagBlack">呼び出し元</span> [初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html), [村人像]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_mainclockProcessing.html)

<span class="tagBlue">分岐先</span> [初回ログイン時処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_firstLoginProcessing.html), [ログイン時処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_loginProcessing.html), [ジョブチェンジ先判定]({{site.baseurl}}/command/xCircuit2/xCircuit2_jobChangeJudgement.html), [ジョブセーブ]({{site.baseurl}}/command/xCircuit2/xCircuit2_jobSave.html), [ジョブロード]({{site.baseurl}}/command/xCircuit2/xCircuit2_jobLoad.html), [ステータス表示]({{site.baseurl}}/command/xCircuit2/xCircuit2_statusDisplay.html), [攻略率表示]({{site.baseurl}}/command/xCircuit2/xCircuit2_conquerDisplay.html), [ワープ処理_ジョブ島/通常世界]({{site.baseurl}}/command/xCircuit2/xCircuit2_warpProcessing.html), [KeepInventory確認]({{site.baseurl}}/command/xCircuit2/xCircuit2_keepinventoryCheck.html), [満腹度修正]({{site.baseurl}}/command/xCircuit2/xCircuit2_satietyFix.html), [経験値取得処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_expProcessing.html), [レベルアップ処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_levelupProcessing.html), [最大HP調整処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_hpFix.html), [島攻略処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_conquerProcessing.html)

毎tick実行するコマンド群の1つであり、TUSBにログインした際にジョブやHP、満腹度修正など、様々な処理への分岐を行う。

## コマンド群

<div class="datatable4c-begin"></div>

|No.|コマンド|コメント|状態|
|:-:|:-|:-|:-|
|1|/scoreboard players reset @a[score_MPConsumption_min=0] MPConsumption|||
|2|/scoreboard players reset @a[score_ActivatedSkill_min=0] ActivatedSkill||条件付き|
|3|/scoreboard players tag @a[tag=Sneaking] remove Sneaking||条件付き|
|4|/execute @a[team=,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -192 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###初回ログイン時|初回ログイン時 最低限の初期設定 team=||
|5|/execute @a[score_LeaveGame_min=1,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 9 -192 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ログイン時|ログイン時 LeaveGame ≧ 1||
|6|/execute @a[score_PickupPaper_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] TradedVillager >< @a[c=1] PickupPaper|職業申請処理他 JobChangeタグ TradedVillager PickupPaper||
|7|scoreboard players reset @a[score_TradedVillager_min=1] TradedVillager|||
|8|/clone -1920 10 ~ -1920 10 ~ -1920 10 ~ filtered force minecraft:command_block 5 ###ジョブチェンジ||条件付き|
|9|/execute @a[tag=ShowStatus] ~ ~ ~ /scoreboard players operation @a[c=1] SaveJob = @a[c=1] Job|セーブ・ロード・表示 SaveJobスコア LoadJobスコア ShowStatusタグ||
|10|/execute @a[score_LoadJob_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] SaveJob = @a[c=1] Job|||
|11|/execute @a[score_SaveJob_min=0,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 11 -192 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###セーブ|||
|12|/execute @a[score_LoadJob_min=0,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 12 -192 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ロード|||
|13|/execute @a[tag=ShowStatus,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 14 -192 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ステータス表示|||
|14|/execute @a[tag=ShowConquest,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 18 -192 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###攻略率表示|エリア攻略表示 タグ ShowConquest||
|15|/scoreboard players tag @a[-1755,98,-153,dx=32,dy=9,dz=32] add WarpByJob|初期ゲートやブラジルからの職業有無によるTP処理 WarpByJobタグ||
|16|/clone -1920 15 ~ -1920 15 ~ -1920 15 ~ filtered force minecraft:command_block 5 ###ジョブ別ワープ処理||条件付き|
|17|/execute @a[score_HP=0,score_Hunger=-1] ~ ~ ~ /scoreboard players operation @a[c=1] Hunger = @a[c=1] Food|リスポ満腹度維持処理||
|18|/clone -1920 16 ~ -1920 16 ~ -1920 16 ~ filtered force minecraft:command_block 5 ###keepInventoryチェック||条件付き|
|19|/execute @a[score_HP_min=1,score_Hunger_min=0,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 17 -192 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###満腹度修正|||
|20|/scoreboard players set @a[score_HP_min=1] GotExpFlag -1 {Inventory:[{id:"minecraft:nether_star"}]}|経験値取得処理|ガラスあり|
|21|/clone -1920 8 ~1 -1920 8 ~1 -1920 8 ~1 filtered force minecraft:command_block 5 ###経験値取得||条件付き|
|22|/execute @a[score_ExpToLevel=0,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 9 -191 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###レベルアップ|レベルアップ処理||
|23|/execute @a[score_RefreshHPMax_min=1,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 16 -191 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###最大HP設定|最大HP調整処理||
|24|/execute @a[score_CoolTickCounter_min=1,score_MPMaxFlag=0,score_ManaRefresh_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP += @a[c=1] MPIncrement|マナリフレッシュ MP回復 ManaRefresh|
|25|/execute @a[score_CoolTickCounter_min=1,score_MPMaxFlag=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP += @a[c=1] MPIncrement|MP自然回復 CoolTickCounter MP/MPMaxFlag||
|26|/execute @a[score_CoolTickCounter_min=1,score_MPMaxFlag=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP -= @a[c=1] MPMax||条件付き|
|27|/execute @a[score_CoolTickCounter_min=1,score_MPMaxFlag=0,score_MP_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP = @a[c=1] MPMax||条件付き|
|28|/scoreboard players set @a[score_CoolTickCounter_min=1,score_MPMaxFlag=0,score_MP_min=0] MPMaxFlag 1||条件付き|
|29|/execute @a[score_CoolTickCounter_min=1,score_MPMaxFlag=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP += @a[c=1] MPMax|||
|30|/execute @a[score_CoolTickCounter_min=1,score_MPMaxFlag=0] ~ ~ ~ /scoreboard players operation @a[c=1] CoolTickCounter = @a[c=1] CoolTickSpan||条件付き|
|31|/execute @a[score_UseEnderEye_min=1,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 17 -191 /clone ~ ~ ~ ~ ~1 ~ ~ ~ ~ filtered force minecraft:command_block 5 ###島攻略|島攻略処理 村人追加スキップ防止のため一人ずつ処理 UseEnderEye ≧ 1||
|32|/scoreboard players tag @a[score_UseChorus_min=1] add Pray|コーラスフルーツ||
|33|/tp @a[-2827,57,-410,dx=9,dy=123,dz=9,score_UseChorus_min=1] -2811 75 -396 -53 0||条件付き|
|34|/execute @a[score_UseChorus_min=1] ~ ~ ~ /summon Endermite ~ ~ ~ {CustomName:"コーラスマイト",Health:200f,Lifetime:1900,Attributes:[{Name:"generic.maxHealth",Base:200d},{Name:"generic.movementSpeed",Base:0.3d},{Name:"generic.attackDamage",Base:1d},{Name:"generic.knockbackResistance",Base:0.3d},{Name:"generic.followRange",Base:32d}],HandItems:[{tag:{ench:[{id:19s,lvl:20s}]},id:"minecraft:iron_sword",Count:0b,Damage:0s},{}]}|||
|35|/scoreboard players reset @a[score_UseChorus_min=1] UseChorus||条件付き|
|36|/effect @a[score_Deaths_min=1,score_HP_min=1] clear|緩衝付き死亡修正||

<div class="datatable4c-end"></div>

## 詳細

1. `MPConsumption`が0以上のプレイヤーの`MPConsumption`を0とし、`ActivatedSkill`が0以上のプレイヤーの`ActivatedSkill`を0とする。そして`Sneaking`を削除
2. チームに属していないプレイヤー(team=)を一人選択し、[CommonGM]({{site.baseurl}}/entity/entity_entity.html#commongm)から(~,8,-192)にある[初回ログイン時処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_firstLoginProcessing.html)を実行
3. `LeaveGame`が1以上のプレイヤーを一人選択し、[CommonGM]({{site.baseurl}}/entity/entity_entity.html#commongm)から(~,9,-192)にある[ログイン時処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_loginProcessing.html)を実行
4. `PickerPaper`が1以上のプレイヤーの`TradedVillager`と`PickerPaper`の値を入れ替える
5. `TradedVillager`が1以上のプレイヤーの`TradedVillager`を0にし、(-1920,10,-192)にある[ジョブチェンジ先判定]({{site.baseurl}}/command/xCircuit2/xCircuit2_jobChangeJudgement.html)を実行
6. `ShowStatus`を持っているプレイヤーを一人選択し、`SaveJob`に`Job`を代入する
7. `LoadJob`が0以上であるプレイヤーを一人選択し、`SaveJob`に`Job`を代入する
8. `SaveJob`が0以上であるプレイヤーを一人選択し、(-1920,11,-192)にある[ジョブセーブ]({{site.baseurl}}/command/xCircuit2/xCircuit2_jobSave.html)を実行
9. `LoadJob`が0以上であるプレイヤーを一人選択し、(-1920,12,-192)にある[ジョブロード]({{site.baseurl}}/command/xCircuit2/xCircuit2_jobLoad.html)を実行
10. `ShowStatus`のプレイヤーを一人選択し、(-1920,14,-192)にある[ステータス表示]({{site.baseurl}}/command/xCircuit2/xCircuit2_statusDisplay.html)を実行
11. `ShowConquest`のプレイヤーを一人選択し、(-1920,18,-192)にある[攻略率表示]({{site.baseurl}}/command/xCircuit2/xCircuit2_conquerDisplay.html)を実行
12. (-1755,98,-153)からdx=32,dy=9,dz=32(ブラジル行きの穴)にいるプレイヤーに`WarpByJob`を付与し、(-1920,15,-192)にある[ワープ処理_ジョブ島/通常世界]({{site.baseurl}}/command/xCircuit2/xCircuit2_warpProcessing.html)を実行
13. `HP`が0以下,`Hunger`が-1以下であるプレイヤーを一人選択し、`Hunger`に`Food`を代入し、(-1920,16,-192)にある[KeepInventory確認]({{site.baseurl}}/command/xCircuit2/xCircuit2_keepinventoryCheck.html)を実行
14. `HP`が1以上,`Hunger`が0以上であるプレイヤーを一人選択し、[CommonGM]({{site.baseurl}}/entity/entity_entity.html#commongm)から(~,17,-192)にある[満腹度修正]({{site.baseurl}}/command/xCircuit2/xCircuit2_satietyFix.html)を実行
15. `HP`が1以上かつインベントリにネザースターのあるプレイヤーの`GotExpFlag`を-1にし、(-1920,8,-191)にある[経験値取得処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_expProcessing.html)を実行
16. `ExpToLevel`が0以下であるプレイヤーを一人選択し、[CommonGM]({{site.baseurl}}/entity/entity_entity.html#commongm)から(~,9,-191)にある[レベルアップ処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_levelupProcessing.html)を実行
17. `RefreshHPMax`が1以上であるプレイヤーを一人選択し、[CommonGM]({{site.baseurl}}/entity/entity_entity.html#commongm)から(~,16,-191)にある[最大HP調整処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_hpFix.html)を実行
18. `CoolTickCounter`が1以上,`MPMaxFlag`が0以下,`ManaRefresh`が0以上であるプレイヤーを一人選択し、`MP`に`MPIncrement`を足し合わせる
19. `CoolTickCounter`が1以上,`MPMaxFlag`が0以下であるプレイヤーを一人選択し、`MP`に`MPIncrement`を足し合わせ、`MP`から`MPMax`を引く。そして、`CoolTickCounter`が1以上,`MPMaxFlag`が0以下,`MP`が0以上であるプレイヤーを一人選択し、`MP`に`MPMax`を代入し、`score_CoolTickCounter_min=1`,`score_MPMaxFlag=0`,`score_MP_min=0`であるプレイヤーの`MPMaxFlag`を1にする
20. `CoolTickCounter`が1以上,`MPMaxFlag`が0以下であるプレイヤーを一人選択し、`MP`に`MPMax`を足し合わせ、`CoolTickCounter`が1以上,`MPMaxFlag`が0以下であるプレイヤーを一人選択し、`CoolTickCounter`に`CoolTickSpan`を代入する
21. `UseEnderEye`が1以上であるプレイヤーを一人選択し、[CommonGM]({{site.baseurl}}/entity/entity_entity.html#commongm)から(~,17,-191)と(~,18,-191)にある[島攻略処理]({{site.baseurl}}/command/xCircuit2/xCircuit2_conquerProcessing.html)を実行
22. `UseChorus`が1以上であるプレイヤーに`Pray`を追加。(-2827,57,-410)から(dx=9,dy=123,dz=9)(タワーバンク内)にいてかつ`Use_Chorus`が1以上であるプレイヤーを(-2811,75,-396,-53,0)(タワーバンク入口)に移動させる
23. `UseChorus`が1以上であるプレイヤーのところに[コーラスマイト]({{site.baseurl}}/entity/entity_entity.html#コーラスマイト)を出現させ、`UseChorus`が1以上であるプレイヤーの`UseChorus`を0にする
24. `Deaths`が1以上,`HP`が1以上であるプレイヤーのエフェクトをすべて消去する
