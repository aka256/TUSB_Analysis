# TUSBAnalysis

- [TUSBAnalysis](#tusbanalysis)
  - [はじめに](#はじめに)
  - [メインクロック開始時リセットするもの](#メインクロック開始時リセットするもの)
    - [コマンド群](#コマンド群)
    - [詳細](#詳細)
  - [初回ログイン時処理](#初回ログイン時処理)
    - [コマンド群](#コマンド群-1)
    - [詳細](#詳細-1)
  - [ログイン時処理](#ログイン時処理)
    - [コマンド群](#コマンド群-2)
    - [詳細](#詳細-2)
  - [ジョブチェンジ先判定](#ジョブチェンジ先判定)
    - [コマンド群](#コマンド群-3)
    - [詳細](#詳細-3)
  - [ジョブセーブ](#ジョブセーブ)
    - [コマンド群](#コマンド群-4)
    - [詳細](#詳細-4)
  - [ジョブロード](#ジョブロード)
    - [コマンド群](#コマンド群-5)
    - [詳細](#詳細-5)
  - [ステータス表示](#ステータス表示)
    - [コマンド群](#コマンド群-6)
  - [攻略率表示](#攻略率表示)
    - [コマンド群](#コマンド群-7)
  - [ワープ処理ジョブ島・通常世界](#ワープ処理ジョブ島通常世界)
    - [コマンド群](#コマンド群-8)
    - [詳細](#詳細-6)
  - [KeepInventory確認](#keepinventory確認)
    - [コマンド群](#コマンド群-9)
    - [詳細](#詳細-7)
  - [満腹度修正](#満腹度修正)
    - [コマンド群](#コマンド群-10)
    - [詳細](#詳細-8)
  - [経験値取得処理](#経験値取得処理)
    - [コマンド群](#コマンド群-11)
    - [詳細](#詳細-9)
  - [レベルアップ処理](#レベルアップ処理)
    - [コマンド群](#コマンド群-12)
    - [詳細](#詳細-10)
  - [最大HP調整処理](#最大hp調整処理)
    - [コマンド群](#コマンド群-13)
    - [詳細](#詳細-11)
  - [難易度調整](#難易度調整)
    - [コマンド群](#コマンド群-14)
    - [詳細](#詳細-12)
  - [島攻略処理](#島攻略処理)
    - [コマンド群](#コマンド群-15)
    - [詳細](#詳細-13)
  - [習得スキル取得](#習得スキル取得)
    - [コマンド群](#コマンド群-16)
    - [詳細](#詳細-14)
  - [時計島](#時計島)
    - [コマンド群](#コマンド群-17)
    - [詳細](#詳細-15)
    - [時計島のアラーム](#時計島のアラーム)

- [Entity](TUSB_Analysis_Entity.html)
- [その他](TUSB_Analysis_Data.html)

---

## はじめに

これはThe Unusual Skyblock v12.0.9 の主にX回路区域内にあるコマンド群について簡単にまとめたものです。なので、実際にX回路区域を飛び回りながらこれを読むことをおススメします。また、何か間違い等がありましたらtwitterにてご連絡をお願いします(<https://twitter.com/Re16d5>)。

---

## メインクロック開始時リセットするもの

- 位置(-1920,4,-192)

### コマンド群

|No.|コマンド|コメント|状態|
|:-:|:-|:-|:-|
|1|/scoreboard players reset @a[score_MPConsumption_min=0] MPConsumption|||
|2|/scoreboard players reset @a[score_ActivatedSkill_min=0] ActivatedSkill||条件付き|
|3|/scoreboard players tag @a[tag=Sneaking] remove Sneaking||条件付き|
|4|/execute @a[team=,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 8 -192 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###初回ログイン時|**初回ログイン時 最低限の初期設定 team=**||
|5|/execute @a[score_LeaveGame_min=1,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 9 -192 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ログイン時|**ログイン時 LeaveGame ≧ 1**||
|6|/execute @a[score_PickupPaper_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] TradedVillager >< @a[c=1] PickupPaper|**職業申請処理他 JobChangeタグ TradedVillager PickupPaper**||
|7|scoreboard players reset @a[score_TradedVillager_min=1] TradedVillager|||
|8|/clone -1920 10 ~ -1920 10 ~ -1920 10 ~ filtered force minecraft:command_block 5 ###ジョブチェンジ||条件付き|
|9|/execute @a[tag=ShowStatus] ~ ~ ~ /scoreboard players operation @a[c=1] SaveJob = @a[c=1] Job|**セーブ・ロード・表示 SaveJobスコア LoadJobスコア ShowStatusタグ**||
|10|/execute @a[score_LoadJob_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] SaveJob = @a[c=1] Job|||
|11|/execute @a[score_SaveJob_min=0,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 11 -192 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###セーブ|||
|12|/execute @a[score_LoadJob_min=0,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 12 -192 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ロード|||
|13|/execute @a[tag=ShowStatus,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 14 -192 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###ステータス表示|||
|14|/execute @a[tag=ShowConquest,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 18 -192 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###攻略率表示|**エリア攻略表示 タグ ShowConquest**||
|15|/scoreboard players tag @a[-1755,98,-153,dx=32,dy=9,dz=32] add WarpByJob|**初期ゲートやブラジルからの職業有無によるTP処理 WarpByJobタグ**||
|16|/clone -1920 15 ~ -1920 15 ~ -1920 15 ~ filtered force minecraft:command_block 5 ###ジョブ別ワープ処理||条件付き|
|17|/execute @a[score_HP=0,score_Hunger=-1] ~ ~ ~ /scoreboard players operation @a[c=1] Hunger = @a[c=1] Food|**リスポ満腹度維持処理**||
|18|/clone -1920 16 ~ -1920 16 ~ -1920 16 ~ filtered force minecraft:command_block 5 ###keepInventoryチェック||条件付き|
|19|/execute @a[score_HP_min=1,score_Hunger_min=0,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 17 -192 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###満腹度修正|||
|20|/scoreboard players set @a[score_HP_min=1] GotExpFlag -1 {Inventory:[{id:"minecraft:nether_star"}]}|**経験値取得処理**|ガラスあり|
|21|/clone -1920 8 ~1 -1920 8 ~1 -1920 8 ~1 filtered force minecraft:command_block 5 ###経験値取得||条件付き|
|22|/execute @a[score_ExpToLevel=0,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 9 -191 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###レベルアップ|**レベルアップ処理**||
|23|/execute @a[score_RefreshHPMax_min=1,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 16 -191 /clone ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered force minecraft:command_block 5 ###最大HP設定|**最大HP調整処理**||
|24|/execute @a[score_CoolTickCounter_min=1,score_MPMaxFlag=0,score_ManaRefresh_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP += @a[c=1] MPIncrement|**マナリフレッシュ MP回復 ManaRefresh**|
|25|/execute @a[score_CoolTickCounter_min=1,score_MPMaxFlag=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP += @a[c=1] MPIncrement|**MP自然回復 CoolTickCounter MP/MPMaxFlag**||
|26|/execute @a[score_CoolTickCounter_min=1,score_MPMaxFlag=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP -= @a[c=1] MPMax||条件付き|
|27|/execute @a[score_CoolTickCounter_min=1,score_MPMaxFlag=0,score_MP_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP = @a[c=1] MPMax||条件付き|
|28|/scoreboard players set @a[score_CoolTickCounter_min=1,score_MPMaxFlag=0,score_MP_min=0] MPMaxFlag 1||条件付き|
|29|/execute @a[score_CoolTickCounter_min=1,score_MPMaxFlag=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP += @a[c=1] MPMax|||
|30|/execute @a[score_CoolTickCounter_min=1,score_MPMaxFlag=0] ~ ~ ~ /scoreboard players operation @a[c=1] CoolTickCounter = @a[c=1] CoolTickSpan||条件付き|
|31|/execute @a[score_UseEnderEye_min=1,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~ 17 -191 /clone ~ ~ ~ ~ ~1 ~ ~ ~ ~ filtered force minecraft:command_block 5 ###島攻略|**島攻略処理 村人追加スキップ防止のため一人ずつ処理 UseEnderEye ≧ 1**||
|32|/scoreboard players tag @a[score_UseChorus_min=1] add Pray|**コーラスフルーツ**||
|33|/tp @a[-2827,57,-410,dx=9,dy=123,dz=9,score_UseChorus_min=1] -2811 75 -396 -53 0||条件付き|
|34|/execute @a[score_UseChorus_min=1] ~ ~ ~ /summon Endermite ~ ~ ~ {CustomName:"コーラスマイト",Health:200f,Lifetime:1900,Attributes:[{Name:"generic.maxHealth",Base:200d},{Name:"generic.movementSpeed",Base:0.3d},{Name:"generic.attackDamage",Base:1d},{Name:"generic.knockbackResistance",Base:0.3d},{Name:"generic.followRange",Base:32d}],HandItems:[{tag:{ench:[{id:19s,lvl:20s}]},id:"minecraft:iron_sword",Count:0b,Damage:0s},{}]}|||
|35|/scoreboard players reset @a[score_UseChorus_min=1] UseChorus||条件付き|
|36|/effect @a[score_Deaths_min=1,score_HP_min=1] clear|**緩衝付き死亡修正**||

### 詳細

1. `MPConsumption`が0以上のプレイヤーの`MPConsumption`を0とし、`ActivatedSkill`が0以上のプレイヤーの`ActivatedSkill`を0とする。そして`Sneaking`を削除
2. チームに属していないプレイヤー(team=)を一人選択し、[CommonGM]から(~,8,-192)にある[**初回ログイン時処理**](#初回ログイン時処理)を実行
3. `LeaveGame`が1以上のプレイヤーを一人選択し、[CommonGM]から(~,9,-192)にある[**ログイン時処理**](#ログイン時処理)を実行
4. `PickerPaper`が1以上のプレイヤーの`TradedVillager`と`PickerPaper`の値を入れ替える
5. `TradedVillager`が1以上のプレイヤーの`TradedVillager`を0にし、(-1920,10,-192)にある[**ジョブチェンジ先判定**](#ジョブチェンジ先判定)を実行
6. `ShowStatus`を持っているプレイヤーを一人選択し、`SaveJob`に`Job`を代入する
7. `LoadJob`が0以上であるプレイヤーを一人選択し、`SaveJob`に`Job`を代入する
8. `SaveJob`が0以上であるプレイヤーを一人選択し、(-1920,11,-192)にある[**ジョブセーブ**](#ジョブセーブ)を実行
9. `LoadJob`が0以上であるプレイヤーを一人選択し、(-1920,12,-192)にある[**ジョブロード**](#ジョブロード)を実行
10. `ShowStatus`のプレイヤーを一人選択し、(-1920,14,-192)にある[**ステータス表示**](#ステータス表示)を実行
11. `ShowConquest`のプレイヤーを一人選択し、(-1920,18,-192)にある[**攻略率表示?**]を実行
12. (-1755,98,-153)からdx=32,dy=9,dz=32(ブラジル行きの穴)にいるプレイヤーに`WarpByJob`を付与し、(-1920,15,-192)にある[**ワープ処理_ジョブ島/通常世界**]を実行
13. `HP`が0以下,`Hunger`が-1以下であるプレイヤーを一人選択し、`Hunger`に`Food`を代入し、(-1920,16,-192)にある[**KeepInventory確認**](#keepinventory確認)を実行
14. `HP`が1以上,`Hunger`が0以上であるプレイヤーを一人選択し、[CommonGM]から(~,17,-192)にある[**満腹度修正**](#満腹度修正)を実行
15. `HP`が1以上かつインベントリにネザースターのあるプレイヤーの`GotExpFlag`を-1にし、(-1920,8,-191)にある[**経験値取得処理**](#経験値取得処理)を実行
16. `ExpToLevel`が0以下であるプレイヤーを一人選択し、[CommonGM]から(~,9,-191)にある[**レベルアップ処理**](#レベルアップ処理)を実行
17. `RefreshHPMax`が1以上であるプレイヤーを一人選択し、[CommonGM]から(~,16,-191)にある[**最大HP調整処理**](#最大hp調整処理)を実行
18. `CoolTickCounter`が1以上,`MPMaxFlag`が0以下,`ManaRefresh`が0以上であるプレイヤーを一人選択し、`MP`に`MPIncrement`を足し合わせる
19. `CoolTickCounter`が1以上,`MPMaxFlag`が0以下であるプレイヤーを一人選択し、`MP`に`MPIncrement`を足し合わせ、`MP`から`MPMax`を引く。そして、`CoolTickCounter`が1以上,`MPMaxFlag`が0以下,`MP`が0以上であるプレイヤーを一人選択し、`MP`に`MPMax`を代入し、`score_CoolTickCounter_min=1`,`score_MPMaxFlag=0`,`score_MP_min=0`であるプレイヤーの`MPMaxFlag`を1にする
20. `CoolTickCounter`が1以上,`MPMaxFlag`が0以下であるプレイヤーを一人選択し、`MP`に`MPMax`を足し合わせ、`CoolTickCounter`が1以上,`MPMaxFlag`が0以下であるプレイヤーを一人選択し、`CoolTickCounter`に`CoolTickSpan`を代入する
21. `UseEnderEye`が1以上であるプレイヤーを一人選択し、[CommonGM]から(~,17,-191)と(~,18,-191)にある[**島攻略処理**](#島攻略処理)と[**島攻略処理_その2?**](#島攻略処理)をそれぞれ実行
22. `UseChorus`が1以上であるプレイヤーに`Pray`を追加。(-2827,57,-410)から(dx=9,dy=123,dz=9)(タワーバンク内)にいてかつ`Use_Chorus`が1以上であるプレイヤーを(-2811,75,-396,-53,0)(タワーバンク入口)に移動させる
23. `UseChorus`が1以上であるプレイヤーのところに[コーラスマイト](#コーラスマイト)を出現させ、`UseChorus`が1以上であるプレイヤーの`UseChorus`を0にする
24. `Deaths`が1以上,`HP`が1以上であるプレイヤーのエフェクトをすべて消去する

---

## 初回ログイン時処理

- 位置(-1920,8,-192)
- 初回ログイン時にスコアやタグ、チーム分けそして乱数の設定を行う

### コマンド群

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players add @a[team=] USBDimension 0|
|2|/scoreboard players set @a[team=,tag=!Resolved] Job 0|
|3|/scoreboard players set @a[team=] Hunger -1|
|4|/scoreboard players set @a[team=,tag=!Resolved] HP 20|
|5|/scoreboard players set @a[team=,tag=!Resolved] Food 20|
|6|/scoreboard players set @a[team=,tag=!Resolved] MPMax 100|
|7|/scoreboard players set @a[team=,tag=!Resolved] ModeState 0|
|8|/scoreboard players set @a[team=,tag=!Resolved] KnightLevel 0|
|9|/scoreboard players set @a[team=,tag=!Resolved] NinjaLevel 0|
|10|/scoreboard players set @a[team=,tag=!Resolved] ArcherLevel 0|
|11|/scoreboard players set @a[team=,tag=!Resolved] WhiteMageLevel 0|
|12|/scoreboard players set @a[team=,tag=!Resolved] BlackMageLevel 0|
|13|/scoreboard players set @a[team=,tag=!Resolved] SummonerLevel 0|
|14|/scoreboard players set @a[team=,tag=!Resolved] KnightToLevel 0|
|15|/scoreboard players set @a[team=,tag=!Resolved] NinjaToLevel 0|
|16|/scoreboard players set @a[team=,tag=!Resolved] ArcherToLevel 0|
|17|/scoreboard players set @a[team=,tag=!Resolved] WhiteMageToLevel 0|
|18|/scoreboard players set @a[team=,tag=!Resolved] BlackMageToLevel 0|
|19|/scoreboard players set @a[team=,tag=!Resolved] SummonerToLevel 0|
|20|/scoreboard players set @a[team=] LeaveGame 1|
|21|/time query gametime|
|22|/scoreboard players operation @a[team=,tag=!Resolved] RndMWC = #GameTime Global|
|23|/scoreboard players operation @a[team=,tag=!Resolved] RndMWCCarry = #GameTime Global|
|24|/scoreboard players operation @a[team=,tag=!Resolved] RndMWC %= #MWCBase Const|
|25|/scoreboard players operation @a[team=,tag=!Resolved] RndMWCCarry /= #MWCBase Const|
|26|/scoreboard players tag @a[team=,tag=!Resolved] add TrialSet|
|27|/scoreboard players tag @a[team=,tag=!Resolved] add ISFUnreached|
|28|/scoreboard players set @a[team=,tag=!Resolved] EventRank -1|
|29|/scoreboard players set @a[team=,tag=!Resolved] PersonalLocker 0|
|30|/effect @a[team=,tag=!Resolved] minecraft:absorption 1 0 true|
|31|/scoreboard teams join FriendlyTeam @a[team=]|

### 詳細

1. `team=`であるプレイヤーの`USBDimension`を0、`Hunger`を-1、`LeaveGame`を1にする
2. `team=`かつ`Resolved`を持っていないプレイヤーのスコアをそれぞれ`HP=20`、`Food=20`、`MPMax=100`、`ModeState=0`、`KnightLevel=0`、`NinjaLevel=0`、`ArcherLevel=0`、`WhiteMageLevel=0`、`BlackMageLevel=0`、`SummonerLevel=0`、`KnightToLevel=0`、`NinjaToLevel=0`、`ArcherToLevel=0`、`WhiteMageToLevel=0`、`BlackMageToLevel=0`、`SummonerToLevel=0`に設定する
3. ワールドが作られてからの時間を表示
4. `team=`かつ`Resolved`を持っていないプレイヤーの`RndMWC`と`RndMWCCarry`にそれぞれ`#GameTime`の`Global`を代入
5. `team=`かつ`Resolved`を持っていないプレイヤーの`RndMWC`に`#MWCBase`の`Const`との剰余を代入
6. `team=`かつ`Resolved`を持っていないプレイヤーの`RndMWCCarry`に`#MWCBase`の`Const`との商を代入
7. `team=`かつ`Resolved`を持っていないプレイヤーに`TrialSet`と`ISFUnreached`を付与
8. `team=`かつ`Resolved`を持っていないプレイヤーのスコアをそれぞれ`eventRank=-1`、`PersonalLocker=0`に設定する
9. `team=`かつ`Resolved`を持っていないプレイヤーに衝撃吸収Lv.0を1秒間付与
10. `team=`であるプレイヤーを`FriendlyTeam`に追加

---

## ログイン時処理

- 位置(-1920,9,-192)
- 通常ログイン時の処理

### コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/difficulty hard|
|2|/scoreboard players tag @a[score_LeaveGame_min=1,tag=Resolved,score_Job=2147483647] remove Resolved|
|3|/execute @a[score_LeaveGame_min=1,tag=Resolved,c=1] ~ ~ ~ /tellraw @a [{"text":"[INFO]\n プレイヤー名の変更を検知しました。ステータスが引き継がれていません。\n以下のページを参考にワールドデータのスコアボードファイルを修正してください。\n"},{"text":"http://ch.nicovideo.jp/akaishi_ai/blomaga/ar970627\n","clickEvent":{"action":"open_url","value":"http://ch.nicovideo.jp/akaishi_ai/blomaga/ar970627"}},{"translate":"修正が必要なプレイヤー : ","with":[{"selector":"@a[score_LeaveGame_min=1,tag=Resolved]"}]}]|
|4|/scoreboard players reset @a[score_LeaveGame_min=1,tag=Resolved] LeaveGame|条件付き|
|5|/scoreboard players tag @a[score_LeaveGame_min=1] add Resolved|
|6|/scoreboard players add @a[score_LeaveGame_min=1] MP 0|
|7|/scoreboard players set @a[score_LeaveGame_min=1,score_MP=0,score_MPMaxFlag_min=1] MPMaxFlag 0|
|8|/scoreboard players reset @a[score_LeaveGame_min=1,score_MP=0] CoolTickCounter|条件付き|
|9|/scoreboard players tag @a[score_LeaveGame_min=1] add ShowVote|
|10|/scoreboard players set @a[score_LeaveGame_min=1,score_Job_min=1] ShowSkillSlot 4|
|11|/scoreboard players tag @a[score_LeaveGame_min=1] add Pray|
|12|/scoreboard players reset @a[score_LeaveGame_min=1] LeaveGame|
|13|/clone -1920 17 -200 -1920 17 -200 -1920 17 -200 filtered force minecraft:command_block 5 ###難易度調整|

### 詳細

1. 難易度をhardに設定
2. `LeaveGame`が1以上,`Job`が2147483647以下かつ`Resolved`であるプレイヤーの`Resolved`を削除
3. `LeaveGame`が1以上かつ`Resolved`であるプレイヤーにプレイヤー名変更時の通知を出し、`LeaveGame`を削除
4. `LeaveGame`が1以上であるプレイヤーに`Resolved`を付与
5. `LeaveGame`が1以上であるプレイヤーの`MP`を0に設定
6. `LeaveGame`が1以上,`MP`が0以下,`MPMaxFlag`が1以上であるプレイヤーの`MPMaxFlag`を0に設定
7. `LeaveGame`が1以上,`MP`が0以下であるプレイヤーの`CoolTickCounter`を0に設定
8. `LeaveGame`が1以上であるプレイヤーに`ShowVote`を付与
9. `LeaveGame`が1以上,`Job`が1以上であるプレイヤーの`ShowSkillSlot`を4に設定
10. `LeaveGame`が1以上であるプレイヤーに`Pray`を付与
11. `LeaveGame`が1以上であるプレイヤーの`LeaveGame`を0に設定
12. (-1920,17,-200)にある[**難易度調整**](#難易度調整)を起動

---

## ジョブチェンジ先判定

- 位置(-1920,10,-192)
- 職業変更許可書や釣りチケなどの処理

### コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/clear @a[score_Job_min=1] minecraft:paper 0 -1 {display:{Name:"§r§lジョブ変更申請書"},初回:true}|
|2|/scoreboard players set @a ItemCount -1|
|3|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l剣士変更許可証"}}|
|4|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 1|条件付き|
|5|/scoreboard players set @a ItemCount -1|
|6|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l忍者変更許可証"}}|
|7|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 2|条件付き|
|8|/scoreboard players set @a ItemCount -1|
|9|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l狩人変更許可証"}}|
|10|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 3|条件付き|
|11|/scoreboard players set @a ItemCount -1|
|12|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l白魔導士変更許可証"}}|
|13|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 4|条件付き|
|14|/scoreboard players set @a ItemCount -1|
|15|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l黒魔導士変更許可証"}}|
|16|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 5|条件付き|
|17|/scoreboard players set @a ItemCount -1|
|18|/clear @a minecraft:paper -1 1 {display:{Lore:["§r§nUSB職業安定所発行"],Name:"§r§l召喚士変更許可証"}}|
|19|/scoreboard players set @a[score_ItemCount_min=1] LoadJob 6|条件付き|
|20|/scoreboard players set @a ItemCount -1|
|21|/clear @a minecraft:paper -1 -1 {display:{Lore:["§r§n釣り堀-海幸彦-"],Name:"§r§l釣りチケ3分"}}|
|22|/effect @a[score_ItemCount_min=1] minecraft:unluck 180 20|条件付き|
|23|/tellraw @a[score_ItemCount_min=1] {"text":"今なら変わったものが釣れそうだ！","color":"green"}|条件付き|

### 詳細

1. `Job`が1以上であるプレイヤーからジョブ変更申請書や各職業の変更許可書を削除し、職業変更許可書の場合はプレイヤーの`LoadJob`を各職業ごとに設定
2. プレイヤーの`ItemCount`を-1に設定
3. プレイヤーから釣りチケ3分を削除し、`ItemCount`が1以上であるプレイヤーに不幸Lv.20を180秒間とテキストを表示

---

## ジョブセーブ

- 位置(-1920,11,-192)
- `(Job)Level`や`(Job)ToLevel`の保存

### コマンド群

|No.|コマンド|
|:-:|:-|
|1|/execute @a[score_SaveJob_min=1,score_SaveJob=1] ~ ~ ~ /scoreboard players operation @a[c=1] KnightLevel = @a[c=1] Level|
|2|/execute @a[score_SaveJob_min=1,score_SaveJob=1] ~ ~ ~ /scoreboard players operation @a[c=1] KnightToLevel = @a[c=1] ExpToLevel|
|3|/execute @a[score_SaveJob_min=2,score_SaveJob=2] ~ ~ ~ /scoreboard players operation @a[c=1] NinjaLevel = @a[c=1] Level|
|4|/execute @a[score_SaveJob_min=2,score_SaveJob=2] ~ ~ ~ /scoreboard players operation @a[c=1] NinjaToLevel = @a[c=1] ExpToLevel|
|5|/execute @a[score_SaveJob_min=3,score_SaveJob=3] ~ ~ ~ /scoreboard players operation @a[c=1] ArcherLevel = @a[c=1] Level|
|6|/execute @a[score_SaveJob_min=3,score_SaveJob=3] ~ ~ ~ /scoreboard players operation @a[c=1] ArcherToLevel = @a[c=1] ExpToLevel|
|7|/execute @a[score_SaveJob_min=4,score_SaveJob=4] ~ ~ ~ /scoreboard players operation @a[c=1] WhiteMageLevel = @a[c=1] Level|
|8|/execute @a[score_SaveJob_min=4,score_SaveJob=4] ~ ~ ~ /scoreboard players operation @a[c=1] WhiteMageToLevel = @a[c=1] ExpToLevel|
|9|/execute @a[score_SaveJob_min=5,score_SaveJob=5] ~ ~ ~ /scoreboard players operation @a[c=1] BlackMageLevel = @a[c=1] Level|
|10|/execute @a[score_SaveJob_min=5,score_SaveJob=5] ~ ~ ~ /scoreboard players operation @a[c=1] BlackMageToLevel = @a[c=1] ExpToLevel|
|11|/execute @a[score_SaveJob_min=6,score_SaveJob=6] ~ ~ ~ /scoreboard players operation @a[c=1] SummonerLevel = @a[c=1] Level|
|12|/execute @a[score_SaveJob_min=6,score_SaveJob=6] ~ ~ ~ /scoreboard players operation @a[c=1] SummonerToLevel = @a[c=1] ExpToLevel|
|13|/scoreboard players reset @a[score_SaveJob_min=0] SaveJob|

### 詳細

1. `SaveJob`がそれぞれの職業のものと等しいプレイヤーの`(Job)Level`に`Level`を、`(Job)ToLevel`に`ExpToLevel`をそれぞれ代入
2. `SaveJob`が0以上のプレイヤーの`SaveJob`を0に設定

---

## ジョブロード

- 位置(-1920,12,-192)
- 現在ロードしている職業のスコアへの代入

### コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/execute @a[score_LoadJob_min=1,score_LoadJob=1] ~ ~ ~ /scoreboard players operation @a[c=1] Level = @a[c=1] KnightLevel|
|2|/execute @a[score_LoadJob_min=1,score_LoadJob=1] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel = @a[c=1] KnightToLevel|条件付き|
|3|/execute @a[score_LoadJob_min=1,score_LoadJob=1] ~ ~ ~ /playsound block.anvil.use master @a[r=16] ~ ~ ~ 1 0.78 0|条件付き|
|4|/execute @a[score_LoadJob_min=1,score_LoadJob=1] ~ ~ ~ /particle happyVillager ~ ~1 ~ 1 1 1 0 200 force|条件付き|
|5|/execute @a[score_LoadJob_min=2,score_LoadJob=2] ~ ~ ~ /scoreboard players operation @a[c=1] Level = @a[c=1] NinjaLevel|
|6|/execute @a[score_LoadJob_min=2,score_LoadJob=2] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel = @a[c=1] NinjaToLevel|条件付き|
|7|/execute @a[score_LoadJob_min=2,score_LoadJob=2] ~ ~ ~ /playsound entity.firework.large_blast_far master @a[r=16] ~ ~ ~ 1 0.7 0|条件付き|
|8|/execute @a[score_LoadJob_min=2,score_LoadJob=2] ~ ~ ~ /particle explode ~ ~1 ~ 1 1 1 0.1 200 force|条件付き|
|9|/execute @a[score_LoadJob_min=3,score_LoadJob=3] ~ ~ ~ /scoreboard players operation @a[c=1] Level = @a[c=1] ArcherLevel|
|10|/execute @a[score_LoadJob_min=3,score_LoadJob=3] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel = @a[c=1] ArcherToLevel|条件付き|
|11|/execute @a[score_LoadJob_min=3,score_LoadJob=3] ~ ~ ~ /playsound entity.arrow.hit master @a[r=16] ~ ~ ~ 1 0.7 0|条件付き|
|12|/execute @a[score_LoadJob_min=3,score_LoadJob=3] ~ ~ ~ /particle crit ~ ~1 ~ 1 1 1 1 200 force|条件付き|
|13|/execute @a[score_LoadJob_min=4,score_LoadJob=4] ~ ~ ~ /scoreboard players operation @a[c=1] Level = @a[c=1] WhiteMageLevel|
|14|/execute @a[score_LoadJob_min=4,score_LoadJob=4] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel = @a[c=1] WhiteMageToLevel|条件付き|
|15|/execute @a[score_LoadJob_min=4,score_LoadJob=4] ~ ~ ~ /playsound entity.experience_orb.pickup master @a[r=16] ~ ~ ~ 1 1.08 0|条件付き|
|16|/execute @a[score_LoadJob_min=4,score_LoadJob=4] ~ ~ ~ /particle fireworksSpark ~ ~1 ~ 1 1 1 0.1 200 force|条件付き|
|17|/execute @a[score_LoadJob_min=5,score_LoadJob=5] ~ ~ ~ /scoreboard players operation @a[c=1] Level = @a[c=1] BlackMageLevel|
|18|/execute @a[score_LoadJob_min=5,score_LoadJob=5] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel = @a[c=1] BlackMageToLevel|条件付き|
|19|/execute @a[score_LoadJob_min=5,score_LoadJob=5] ~ ~ ~ /playsound entity.blaze.shoot master @a[r=16] ~ ~ ~ 1 0.65 0|条件付き|
|20|/execute @a[score_LoadJob_min=5,score_LoadJob=5] ~ ~ ~ /particle witchMagic ~ ~1 ~ 0.5 1 0.5 0.1 200 force|条件付き|
|21|/execute @a[score_LoadJob_min=6,score_LoadJob=6] ~ ~ ~ /scoreboard players operation @a[c=1] Level = @a[c=1] SummonerLevel|
|22|/execute @a[score_LoadJob_min=6,score_LoadJob=6] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel = @a[c=1] SummonerToLevel|条件付き|
|23|/execute @a[score_LoadJob_min=6,score_LoadJob=6] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel = @a[c=1] SummonerToLevel|条件付き|
|24|/execute @a[score_LoadJob_min=6,score_LoadJob=6] ~ ~ ~ /particle enchantmenttable ~ ~1.5 ~ 0.1 0.6 0.1 4 300 force|条件付き|
|25|/execute @a[score_LoadJob_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] NextExp = @a[c=1] Level|
|26|/scoreboard players operation @a[score_LoadJob_min=0] NextExp *= #ExpMul Const|
|27|/scoreboard players set @a[score_LoadJob_min=0] CoolTickSpan -100|
|28|/execute @a[score_LoadJob_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] CoolTickSpan += @a[c=1] Level|
|29|/execute @a[score_LoadJob_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] CoolTickCounter = @a[c=1] CoolTickSpan|
|30|/scoreboard players add @a[score_LoadJob_min=0] MPMaxFlag 0|
|31|/execute @a[score_LoadJob_min=0] ~ ~ ~ /scoreboard players operation @a[c=1] Job = @a[c=1] LoadJob|
|32|/scoreboard players set @a[score_LoadJob_min=0] ModeSkillA 0|
|33|/scoreboard players set @a[score_LoadJob_min=0] ModeSkillB 0|
|34|/scoreboard players set @a[score_LoadJob_min=0] InstantSkillA 0|
|35|/scoreboard players set @a[score_LoadJob_min=0] InstantSkillB 0|
|36|/scoreboard players set @a[score_LoadJob_min=0] CurrentMode 0|
|37|/scoreboard players set @a[score_LoadJob_min=0] CurrentModeCost 0|
|38|/scoreboard players reset @a[score_LoadJob_min=0] LoadJob|

### 詳細

1. 各職業に対応する`LoadJob`の値であるプレイヤーの`Level`に`(Job)Level`を、`ExpToLevel`に`(Job)ToLevel`をそれぞれ代入し、職業にごとの音やパーティクルを表示
2. `LoadJob`が0以上であるプレイヤーを一人選択し、その`NextExp`に`Level`を代入
3. `LoadJob`が0以上であるプレイヤーの`NextExp`に`#ExpMul`の`Const`=7との積を代入、`CoolTickSpan`を-100に設定
4. `LoadJob`が0以上であるプレイヤーを一人選択し、`CoolTickSpan`に`Level`を足し合わせ、`CoolTickCounter`に`CoolTickSpan`を代入
5. `LoadJob`が0以上であるプレイヤーの`MPMaxFlag`を0に設定
6. `LoadJob`が0以上であるプレイヤーを一人選択し、`Job`に`LoadJob`を代入
7. `LoadJob`が0以上であるプレイヤーの`ModeSkillA`,`ModeSkillB`,`InstantSkillA`,`InstantSkillB`,`CurrentMode`,`CurrentModeCost`をそれぞれ0に設定
8. `LoadJob`が0以上であるプレイヤーの`LoadJob`を0に設定

---

## ステータス表示

- 位置(-1920,14,-192)
- 交易島の教会でのステータス表示?

### コマンド群

|No.|コマンド|
|:-:|:-|
|1|/tellraw @a[tag=ShowStatus] {"text":"---- ステータス ----","color":"white","bold":"true"}|
|2|/tellraw @a[tag=ShowStatus,score_Job_min=1,score_Job=1] [{"text":"選択している職業: ","color":"white"},{"text":"剣士","color":"blue","bold":"true"}]|
|3|/tellraw @a[tag=ShowStatus,score_Job_min=2,score_Job=2] [{"text":"選択している職業: ","color":"white"},{"text":"忍者","color":"dark_green","bold":"true"}]|
|4|/tellraw @a[tag=ShowStatus,score_Job_min=3,score_Job=3] [{"text":"選択している職業: ","color":"white"},{"text":"狩人","color":"red","bold":"true"}]|
|5|/tellraw @a[tag=ShowStatus,score_Job_min=4,score_Job=4] [{"text":"選択している職業: ","color":"white"},{"text":"白魔導士","color":"white","bold":"true"}]|
|6|/tellraw @a[tag=ShowStatus,score_Job_min=5,score_Job=5] [{"text":"選択している職業: ","color":"white"},{"text":"黒魔導士","color":"dark_purple","bold":"true"}]|
|7|/tellraw @a[tag=ShowStatus,score_Job_min=6,score_Job=6] [{"text":"選択している職業: ","color":"white"},{"text":"召喚士","color":"gold","bold":"true"}]|
|8|/tellraw @a[tag=ShowStatus,score_Job_min=6,score_Job=6] [{"text":"選択している職業: ","color":"white"},{"text":"召喚士","color":"gold","bold":"true"}]|
|9|/tellraw @a[tag=ShowStatus,score_Job_min=7] [{"text":"選択している職業: ","color":"white"},{"text":"不明","color":"dark_red","bold":"true","underlined":"true"}]|
|10|/tellraw @a[tag=ShowStatus] [{"translate":"レベル: %1\$s     次のレベルアップまで: \%2\$s EXP\n\n","color":"white","with":[{"score":{"name":"\*","objective":"Level"},"color":"aqua"},{"score":{"name":"\*","objective":"ExpToLevel"},"color":"aqua"}]},{"text":"レベル/残り必要経験値\n","color":"gray"},{"translate":"剣士: %1\$sLV/\%2\$sEXP        忍者: %3\$sLV/\%4\$sEXP        狩人: %5\$sLV/\%6\$sEXP\n","color":"gray","with":[{"score":{"name":"\*","objective":"KnightLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"KnightToLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"NinjaLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"NinjaToLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"ArcherLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"ArcherToLevel"},"color":"aqua"}]},{"translate":"白魔導士: %1\$sLV/\%2\$sEXP    黒魔導士: %3\$sLV/\%4\$sEXP    召喚士: %5\$sLV/\%6$sEXP","color":"gray","with":[{"score":{"name":"\*","objective":"WhiteMageLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"WhiteMageToLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"BlackMageLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"BlackMageToLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"SummonerLevel"},"color":"aqua"},{"score":{"name":"\*","objective":"SummonerToLevel"},"color":"aqua"}]}]|
|11|/scoreboard players tag @a[tag=ShowStatus] remove ShowStatus|

---

## 攻略率表示

[**攻略率表示?**]:#攻略率表示

- 看板がないため名前は仮のもの
- 位置(-1920,18,-192)
- 交易島の教会での攻略率表示?

### コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/scoreboard players test Sightseeing Settings * 0|
|2|/time query gametime|条件付き|
|3|/scoreboard players operation #ConqTimeSec Global -= #StartTime Global|条件付き|
|4|/scoreboard players operation #ConqTimeSec Global /= #20 Const|条件付き|
|5|/scoreboard players operation #ConqTimeMin Global = #ConqTimeSec Global|条件付き|
|6|/scoreboard players operation #ConqTimeSec Global %= #60 Const|条件付き|
|7|/scoreboard players operation #ConqTimeMin Global /= #60 Const|条件付き|
|8|/scoreboard players operation #ConqTimeHour Global = #ConqTimeMin Global|条件付き|
|9|/scoreboard players operation #ConqTimeMin Global %= #60 Const|条件付き|
|10|/scoreboard players operation #ConqTimeHour Global /= #60 Const|条件付き|
|11|/tellraw @a[tag=ShowConquest] [{"text":"---- 攻略率 ----\n","color":"white","bold":"true"},{"translate":"全エリア %1\$s/%2\$s (%3\$s.%4\$s%%)   %5\$s経過\n","bold":"false","with":[{"score":{"name":"#ConquerCount","objective":"Global"}},{"score":{"name":"#ConquerMax","objective":"Const"}},{"score":{"name":"#ConquerPctInt","objective":"Global"}},{"score":{"name":"#ConquerPctDec","objective":"Global"}},{"translate":"%1\$s","italic":false,"bold":false,"color":"white","with":[{"translate":"%1\$s時間%2\$s分%3\$s秒","italic":"false","with":[{"score":{"name":"#ConqTimeHour","objective":"Global"}},{"score":{"name":"#ConqTimeMin","objective":"Global"}},{"score":{"name":"#ConqTimeSec","objective":"Global"}}]}]}]},{"translate":"通常世界: %1\$s/43  ネザー: %2\$s/1  エンド: %3\$s/1\n","color":"gray","with":[{"score":{"name":"#ConqCntSkylands","objective":"Global"},"color":"aqua"},{"score":{"name":"#ConqCntNether","objective":"Global"},"color":"aqua"},{"score":{"name":"#ConqCntEnd","objective":"Global"},"color":"aqua"}]},{"translate":"%1\$s: %2\$s/1  %3\$s: %4\$s/1  %5\$s: %6\$s/1  %7\$s: %8\$s/1  %9\$s: %10\$s/1","color":"gray","with":[{"selector":"@e[-1920,6,-193,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntUnderworld","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-194,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntCloudia","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-195,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntMtTable","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-196,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntGLand","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-197,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntIce","objective":"Global"},"color":"aqua"}]}]|条件付き|
|12|/scoreboard players test Sightseeing Settings 1 *|
|13|/tellraw @a[tag=ShowConquest] [{"text":"---- 攻略率 ----\n","color":"white","bold":"true"},{"translate":"全エリア %1\$s/%2\$s (%3\$s.%4\$s%%)   %5\$s経過\n","bold":"false","with":[{"score":{"name":"#ConquerCount","objective":"Global"}},{"score":{"name":"#ConquerMax","objective":"Const"}},{"score":{"name":"#ConquerPctInt","objective":"Global"}},{"score":{"name":"#ConquerPctDec","objective":"Global"}},{"text":"観光モードにつき非表示","color":"aqua"}]},{"translate":"通常世界: %1\$s/43  ネザー: %2\$s/1  エンド: %3\$s/1\n","color":"gray","with":[{"score":{"name":"#ConqCntSkylands","objective":"Global"},"color":"aqua"},{"score":{"name":"#ConqCntNether","objective":"Global"},"color":"aqua"},{"score":{"name":"#ConqCntEnd","objective":"Global"},"color":"aqua"}]},{"translate":"%1\$s: %2\$s/1  %3\$s: %4\$s/1  %5\$s: %6\$s/1  %7\$s: %8\$s/1  %9\$s: %10\$s/1","color":"gray","with":[{"selector":"@e[-1920,6,-193,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntUnderworld","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-194,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntCloudia","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-195,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntMtTable","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-196,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntGLand","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-197,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntIce","objective":"Global"},"color":"aqua"}]}]|条件付き|
|14|/tellraw @a[tag=ShowConquest] [{"text":"---- 攻略率 ----\n","color":"white","bold":"true"},{"translate":"全エリア %1\$s/%2\$s (%3\$s.%4\$s%%)   %5\$s経過\n","bold":"false","with":[{"score":{"name":"#ConquerCount","objective":"Global"}},{"score":{"name":"#ConquerMax","objective":"Const"}},{"score":{"name":"#ConquerPctInt","objective":"Global"}},{"score":{"name":"#ConquerPctDec","objective":"Global"}},{"text":"観光モードにつき非表示","color":"aqua"}]},{"translate":"通常世界: %1\$s/43  ネザー: %2\$s/1  エンド: %3\$s/1\n","color":"gray","with":[{"score":{"name":"#ConqCntSkylands","objective":"Global"},"color":"aqua"},{"score":{"name":"#ConqCntNether","objective":"Global"},"color":"aqua"},{"score":{"name":"#ConqCntEnd","objective":"Global"},"color":"aqua"}]},{"translate":"%1\$s: %2\$s/1  %3\$s: %4\$s/1  %5\$s: %6\$s/1  %7\$s: %8\$s/1  %9\$s: %10\$s/1","color":"gray","with":[{"selector":"@e[-1920,6,-193,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntUnderworld","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-194,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntCloudia","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-195,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntMtTable","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-196,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntGLand","objective":"Global"},"color":"aqua"},{"selector":"@e[-1920,6,-197,dy=1,tag=Enter,c=1]"},{"score":{"name":"#ConqCntIce","objective":"Global"},"color":"aqua"}]}]|

---

## ワープ処理ジョブ島・通常世界

[**ワープ処理_ジョブ島/通常世界**]:#ワープ処理ジョブ島・通常世界

- 位置(-1920,15,-192)
- 初回ログイン時から通常世界に行くまでのTP処理

### コマンド群

|No.|コマンド|状態|
|:-|:-|:-|
|1|/scoreboard players add @a[tag=WarpByJob] TutorialRead 0|
|2|/tellraw @a[tag=WarpByJob,score_TutorialRead=524286] {"text":"まだ読めていないチュートリアルがあるようだ。"}|
|3|/tp @a[tag=WarpByJob,score_TutorialRead=524286] -1911.0 114.0 -136.0|条件付き|
|4|/scoreboard players tag @a[tag=WarpByJob,score_TutorialRead=524286] remove WarpByJob|条件付き|
|5|/give @a[tag=WarpByJob,score_Job=0] minecraft:paper 1 0 {display:{Lore:["§7就職に必要な申請書。","§7無職のプレイヤーには無料で交付される。","§7紛失した場合は、職業島の中央に飛び込もう。"],Name:"§r§lジョブ変更申請書"},初回:true}|
|6|/tp @a[tag=WarpByJob,score_Job=0] -1786 113 -137 -90 0|
|7|/tp @a[tag=WarpByJob,score_Job_min=1] 0 5 2 -90 -30|
|8|/scoreboard players tag @a[tag=WarpByJob] remove WarpByJob|

### 詳細

1. `WarpByJob`を持つプレイヤーの`TutorialRead`を0に設定
2. `WarpByJob`を持ち、`TutorialRead`が524286以下であるプレイヤーにチュートリアルが読めていない旨のメッセージを表示し、(-1911.0 114.0 -136.0)(初期リス地点)に移動させ、`WarpByJob`を削除
3. `WarpBuJob`を持ち、`Job`が0以下であるプレイヤーにジョブ変更申請書を与え、(-1786,113,-137,-90,0)(職業島入口)に移動
4. `WarpBuJob`を持ち、`Job`が1以上であるプレイヤーを(0,5,2,-90,-30)(通常世界)に移動
5. `WarpByJob`を持つプレイヤーから`WarpByJob`を削除

---

## KeepInventory確認

- 位置(-1920,16,-192)

### コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/scoreboard players test Sightseeing Settings * 0|
|2|/gamerule keepInventory false|条件付き|
|3|/clear @a[score_HP=0]|条件付き|
|4|/scoreboard players tag @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90] add Raise|
|5|/scoreboard players set @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90] RaisedArea -90|条件付き|
|6|/scoreboard players set @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90] Hunger 21|条件付き|
|7|/gamemode spectator @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90]|条件付き|
|8|/scoreboard players tag @a[score_HP=0,score_USBDimension_min=-90,score_USBDimension=-90] add TrialItemClear {Inventory:[{tag:{TrialItem:true}}]}|
|9|/clear @a[tag=TrialItemClear]|条件付き|
|10|/scoreboard players tag @a[tag=TrialItemClear] remove TrialItemClear|条件付き|
|11|/scoreboard players tag @a[score_HP=0,tag=Doom] remove Doom|
|12|/scoreboard players tag @a[tag=ReRaise,score_HP=0] add CastRaise|
|13|/scoreboard players tag @a[tag=ReRaise,score_HP=0] remove ReRaise|条件付き|
|14|/scoreboard players reset @a[score_Deaths_min=1,score_HP=0] Deaths|

### 詳細

1. `Sightseeing`の`Settings`が0以下の時、`keepInventory`を`false`にし、`HP`が0以下のプレイヤーのインベントリ内アイテムを消去する
2. `HP`が0以下、`USBDimension`が-90であるプレイヤーに`Raise`を付与、`Raisearea`を-90に設定、`Hunger`を21に設定、スペクターモードに切り替える。
3. `HP`が0以下、`USBDimension`が-90であり、尚且つインベントリ内に`TrialItem:true`を持つプレイヤーに`TrialItemClear`を付与し、インベントリ内アイテムを消去、`TrialItemClear`を消去
4. `HP`が0以下、`Doom`を持つプレイヤーから`Doom`を消去
5. `HP`が0以下、`ReRaise`を持つプレイヤーに`CastRaise`を付与し、`ReRaise`を消去
6. `Deaths`が1以上、`HP`が0以下であるプレイヤーの`Deaths`を0に設定

---

## 満腹度修正

- 位置(-1920,17,-192)
- リスポーン時での死亡前の空腹度の再現

### コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/tellraw @a[score_HP_min=1,score_Hunger_min=0,score_Hunger=3] [{"text":"どこからか声が聞こえる…。\n「腹が減っては探索できぬぞ。」\n"},{"text":"お腹が少し満たされた。\n","color":"aqua"},{"text":"目の前が真っ暗になった。","color":"light_purple"}]|
|2|/effect @a[score_HP_min=1,score_Hunger_min=0,score_Hunger=4] minecraft:hunger 1 174|
|3|/effect @a[score_HP_min=1,score_Hunger_min=0,score_Hunger=0] minecraft:blindness 80 0 true|
|4|/effect @a[score_HP_min=1,score_Hunger_min=1,score_Hunger=1] minecraft:blindness 60 0 true|
|5|/effect @a[score_HP_min=1,score_Hunger_min=2,score_Hunger=2] minecraft:blindness 40 0 true|
|6|/effect @a[score_HP_min=1,score_Hunger_min=3,score_Hunger=3] minecraft:blindness 20 0 true|
|7|/effect @a[score_HP_min=1,score_Hunger_min=5,score_Hunger=5] minecraft:hunger 1 166|
|8|/effect @a[score_HP_min=1,score_Hunger_min=6,score_Hunger=6] minecraft:hunger 1 158|
|9|/effect @a[score_HP_min=1,score_Hunger_min=7,score_Hunger=7] minecraft:hunger 1 150|
|10|/effect @a[score_HP_min=1,score_Hunger_min=8,score_Hunger=8] minecraft:hunger 1 142|
|11|/effect @a[score_HP_min=1,score_Hunger_min=9,score_Hunger=9] minecraft:hunger 1 134|
|12|/effect @a[score_HP_min=1,score_Hunger_min=10,score_Hunger=10] minecraft:hunger 1 126|
|13|/effect @a[score_HP_min=1,score_Hunger_min=11,score_Hunger=11] minecraft:hunger 1 118|
|14|/effect @a[score_HP_min=1,score_Hunger_min=12,score_Hunger=12] minecraft:hunger 1 110|
|15|/effect @a[score_HP_min=1,score_Hunger_min=13,score_Hunger=13] minecraft:hunger 1 102|
|16|/effect @a[score_HP_min=1,score_Hunger_min=14,score_Hunger=14] minecraft:hunger 1 94|
|17|/effect @a[score_HP_min=1,score_Hunger_min=15,score_Hunger=15] minecraft:hunger 1 86|
|18|/effect @a[score_HP_min=1,score_Hunger_min=16,score_Hunger=16] minecraft:hunger 1 78|
|19|/effect @a[score_HP_min=1,score_Hunger_min=17,score_Hunger=17] minecraft:hunger 1 70|
|20|/effect @a[score_HP_min=1,score_Hunger_min=18,score_Hunger=18] minecraft:hunger 1 62|
|21|/effect @a[score_HP_min=1,score_Hunger_min=19,score_Hunger=19] minecraft:hunger 1 54|
|22|/effect @a[score_HP_min=1,score_Hunger_min=20,score_Hunger=20] minecraft:hunger 1 46|
|23|/scoreboard players set @a[score_HP_min=1,score_Hunger_min=0] RefreshHPMax 3|
|24|/scoreboard players enable @a[score_HP_min=1,score_Hunger_min=0] kill|
|25|/scoreboard players tag @a[tag=Raise,score_HP_min=1] add RaiseEnd|
|26|/scoreboard players tag @a[tag=Raise,score_HP_min=1] remove Raise|条件付き|
|27|/scoreboard players set @a[score_HP_min=1,score_Hunger_min=0] Hunger -1|

### 詳細

1. `HP`が1以上、`Hunger`が0以上3以下であるプレイヤーに空腹時のメッセージを出す
2. 以下のような一覧のエフェクトを付与
3. `HP`が1以上、`Hunger`が0以上のプレイヤーの`RefreshHPMax`を3に設定
4. `HP`が1以上、`Hunger`が0以上のプレイヤーに`kill`への書き込みを許可
5. `Raise`を持ち、`HP`が1以上のプレイヤーに`RaiseEnd`を付与し、`Raise`を消去
6. `HP`が1以上で`Hunger`が0以上であるプレイヤーの`Hunger`を-1に設定

エフェクト一覧
|Hunger|Effect|
|:-:|:-|
|0|盲目Lv.0 80秒間, 空腹Lv.174 1秒間|
|1|盲目Lv.0 60秒間, 空腹Lv.174 1秒間|
|2|盲目Lv.0 40秒間, 空腹Lv.174 1秒間|
|3|盲目Lv.0 20秒間, 空腹Lv.174 1秒間|
|4|空腹Lv.174 1秒間|
|5|空腹Lv.166 1秒間|
|6|空腹Lv.158 1秒間|
|7|空腹Lv.150 1秒間|
|8|空腹Lv.142 1秒間|
|9|空腹Lv.134 1秒間|
|10|空腹Lv.126 1秒間|
|11|空腹Lv.118 1秒間|
|12|空腹Lv.110 1秒間|
|13|空腹Lv.102 1秒間|
|14|空腹Lv.94 1秒間|
|15|空腹Lv.86 1秒間|
|16|空腹Lv.78 1秒間|
|17|空腹Lv.70 1秒間|
|18|空腹Lv.62 1秒間|
|19|空腹Lv.54 1秒間|
|20|空腹Lv.46 1秒間|

---

## 経験値取得処理

- 位置(-1920,8,-191)
- ネザースターの取得処理、スコアへの代入

### コマンド群

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set @a[score_GotExpFlag_min=1] GotExpFlag 0|
|2|/clear @a[score_GotExpFlag=-1] minecraft:nether_star|
|3|/execute @a[score_GotExpFlag_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] ExpMessageFlag = @a[r=50,score_HP_min=1,score_Level_min=1,c=1] Level|
|4|/execute @a[score_GotExpFlag_min=1,score_ExpMessageFlag_min=1] ~ ~ ~ /scoreboard players operation @a[r=50,score_HP_min=1,score_Level_min=1] ExpToLevel -= @a[c=1] GotExpFlag|
|5|/execute @a[score_GotExpFlag_min=1,score_ExpMessageFlag_min=1] ~ ~ ~ /tellraw @a {"translate":"%1\$sは%2\$sEXPの経験値を得た。","color":"yellow","with":[{"selector":"@a[r=50,score_HP_min=1,score_Level_min=1]"},{"score":{"name":"@a[c=1]","objective":"GotExpFlag"},"color":"white","bold":"true"}]}|
|6|/scoreboard players reset @a[score_ExpMessageFlag_min=1] ExpMessageFlag|
|7|/execute @a[score_GotExpFlag_min=1] ~ ~ ~ /scoreboard players operation @a[c=1] ExpMessageFlag = @a[rm=50,score_HP_min=1,score_Level_min=1,c=1] Level|
|8|/execute @a[score_GotExpFlag_min=1,score_ExpMessageFlag_min=1] ~ ~ ~ /tellraw @a {"translate":"%1$sは離れ過ぎていたため、経験値を得られなかった。","color":"red","with":[{"selector":"@a[rm=50,score_HP_min=1,score_Level_min=1]"}]}|
|9|/execute @a[score_GotExpFlag_min=1] ~ ~ ~ /execute @a[r=50,score_HP_min=1,score_Level_min=1] ~ ~ ~ /playsound entity.player.levelup master @a[c=1] ~ ~ ~ 0.3 2|
|10|/scoreboard players reset @a[score_ExpMessageFlag_min=1] ExpMessageFlag|

### 詳細

1. `GotExpFlag`が1以上であるプレイヤーの`GotExpFlag`を0に設定
2. `GotExpFlag`が-1以下であるプレイヤーのインベントリ内のネザースターを消去し、`ExpMessageFlag`に半径50m以内、`HP`が1以上、`Level`が1以上であるプレイヤーの`Level`を代入
3. `GotExpFlag`が1以上、`ExpMessageFlag`が1以上であるプレイヤーから半径50m以内、`HP`が1以上、`Level`が1以上であるプレイヤーの`ExpToLevel`から`GotExpFlag`を引く
4. `GotExpFlag`が1以上、`ExpMessageFlag`が1以上であるプレイヤーに経験値取得時のメッセージを出す
5. `ExpMessageFlag`が1以上であるプレイヤーの`ExpMessageFlag`を0に設定
6. `GotExpFlag`が1以上であるプレイヤーの`ExpMessageFlag`から半径50m以上離れていて、`HP`が1以上、`Level`が1以上であるプレイヤーの`Level`を引く
7. `GotExpFlag`が1以上で`ExpMessageFlag`が1以上であるプレイヤーに経験値取得失敗時のメッセージを表示
8. `GotExpFlag`が1以上であるプレイヤーから半径50m以内、`HP`が1以上、`Level`が1以上であるプレイヤーいる座標で音を鳴らす
9. `ExpMessageFlag`が1以上であるプレイヤーの`ExpMessageFlag`を0に設定

---

## レベルアップ処理

- 位置(-1920,9,-191)
- レベルアップ処理

### コマンド群

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players add @a[score_ExpToLevel=0,score_Level=49] Level 1|
|2|/scoreboard players add @a[score_ExpToLevel=0] MPMax 1|
|3|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] MP = @a[c=1] MPMax|
|4|/scoreboard players set @a[score_ExpToLevel=0] MPMaxFlag 1|
|5|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] HPMax = @a[c=1] MPMax|
|6|/scoreboard players operation @a[score_ExpToLevel=0] HPMax /= #8 Const|
|7|/scoreboard players set @a[score_HPMax_min=51] HPMax 50|
|8|/scoreboard players set @a[score_ExpToLevel=0] CoolTickSpan -100|
|9|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] CoolTickSpan += @a[c=1] Level|
|10|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] MPIncrement = @a[c=1] MPMax|
|11|/scoreboard players operation @a[score_ExpToLevel=0] MPIncrement /= #50 Const|
|12|/scoreboard players operation @a[score_ExpToLevel=0] MPIncrement += #3 Const|
|13|/execute @a[score_ExpToLevel=0] ~ ~ ~ /playsound entity.player.levelup master @a[r=16] ~ ~ ~ 2 0.7 0|
|14|/execute @a[score_ExpToLevel=0] ~ ~ ~ /particle happyVillager ~ ~ ~ 1 2 1 0.001 100 normal|
|15|/execute @a[score_ExpToLevel=0] ~ ~ ~ /summon FireworksRocketEntity ~ ~ ~ {LifeTime:10,FireworksItem:{id:minecraft:fireworks,Count:1b,tag:{Fireworks:{Explosions:[{Type:1b,Flicker:true,Trail:true,Colors:[16752934],FadeColors:[16777215]},{Type:0b,Flicker:false,Trail:false,Colors:[16715021,16777215],FadeColors:[16777215]}]}}}}|
|16|/title @a[score_ExpToLevel=0] times 5 100 20|
|17|/title @a[score_ExpToLevel=0] subtitle [{"text":"現在のレベル : ","italic":"true"},{"score":{"name":"*","objective":"Level"},"bold":"true","italic":"false"}]|
|18|/title @a[score_ExpToLevel=0] title {"text":"LEVEL UP ！","color":"green","bold":"true"}|
|19|/scoreboard players tag @a[score_ExpToLevel=0,score_Level_min=1,score_Level=50,score_NextExp=349] add ShowNewSkill|
|20|/clone -1920 ~1 ~ -1920 ~6 ~ -1920 ~1 ~ filtered force minecraft:command_block 5 #習得スキル取得|
|21|/scoreboard players set #ReserveShowSkill Global 1|
|22|/scoreboard players set @a[score_ExpToLevel=0] RefreshHPMax 3|
|23|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] NextExp = @a[c=1] Level|
|24|/scoreboard players operation @a[score_ExpToLevel=0] NextExp *= #ExpMul Const|
|25|/execute @a[score_ExpToLevel=0] ~ ~ ~ /scoreboard players operation @a[c=1] ExpToLevel += @a[c=1] NextExp|

### 詳細

1. `ExpToLevel`が0以下で、`Level`が49以下であるプレイヤーの`Level`を1に設定
2. `ExpToLevel`が0以下であるプレイヤーの`MPMax`を1に設定、`MP`に`MPMax`を代入、`MPMaxFlag`を1に設定、`HPMax`に`MPMax`を代入、`HPMax`に8で割った時の商を代入
3. `HPMax`が51以上であるプレイヤーの`HPMax`を50に設定
4. `ExpTolevel`が0以下であるプレイヤーの`CoolTickSpan`を-100に設定、`CoolTickSpan`に`Level`を足し合わせ、`MPInvrement`に`MPMax`を代入
5. `ExpTolevel`が0以下であるプレイヤーの`MPIncrement`に50で割った時の商を代入、`MPIncrement`に3を足す
6. `ExpTolevel`が0以下であるプレイヤーの座標で演出の実行
7. `ExpToLevel`が0以上、`Level`が1以上50以下、`NextExp`が349以下であるプレイヤーに`ShowNewSkill`を付与
8. (-1920,10,-191)から(-1920,15,-191)にある[**習得スキル取得**](#習得スキル取得)を実行
9. `#ReserveShowSkill`の`Global`を1に設定
10. `ExpToLevel`が0以下であるプレイヤーの`RefreshHPMax`を3に設定、`NextExp`に`Level`を代入、`NextExp`に7との積を代入、`ExpToLevel`に`NextExp`を足し合わせる

---

## 最大HP調整処理

- 位置(-1920,16,-191)
- 基礎体力増加によるHP増加処理

### コマンド群

|No.|コマンド|
|:-:|:-|
|1|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=12,score_HPMax=13] minecraft:health_boost 1000000 0 true|
|2|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=14,score_HPMax=15] minecraft:health_boost 1000000 1 true|
|3|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=16,score_HPMax=17] minecraft:health_boost 1000000 2 true|
|4|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=18,score_HPMax=19] minecraft:health_boost 1000000 3 true|
|5|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=20,score_HPMax=21] minecraft:health_boost 1000000 4 true|
|6|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=22,score_HPMax=23] minecraft:health_boost 1000000 5 true|
|7|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=24,score_HPMax=25] minecraft:health_boost 1000000 6 true|
|8|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=26,score_HPMax=27] minecraft:health_boost 1000000 7 true|
|9|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=28,score_HPMax=29] minecraft:health_boost 1000000 8 true|
|10|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=30,score_HPMax=31] minecraft:health_boost 1000000 9 true|
|11|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=32,score_HPMax=33] minecraft:health_boost 1000000 10 true|
|12|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=34,score_HPMax=35] minecraft:health_boost 1000000 11 true|
|13|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=36,score_HPMax=37] minecraft:health_boost 1000000 12 true|
|14|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=38,score_HPMax=39] minecraft:health_boost 1000000 13 true|
|15|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=40,score_HPMax=41] minecraft:health_boost 1000000 14 true|
|16|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=42,score_HPMax=43] minecraft:health_boost 1000000 15 true|
|17|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=44,score_HPMax=45] minecraft:health_boost 1000000 16 true|
|18|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=46,score_HPMax=47] minecraft:health_boost 1000000 17 true|
|19|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=48,score_HPMax=49] minecraft:health_boost 1000000 18 true|
|20|/effect @a[score_RefreshHPMax_min=2,score_HPMax_min=50] minecraft:health_boost 1000000 19 true|
|21|/effect @a[score_RefreshHPMax_min=3] minecraft:instant_health 1 6 true|
|22|/scoreboard players reset @a[score_RefreshHPMax_min=2] RefreshHPMax|

### 詳細

1. `RefreshHPMax`が2以上のプレイヤーで`HPMax`の値に対応した基礎体力増加を1000000秒間付与(Lvについては以下の表を参照)
2. `RefreshHPMax`が3以上であるプレイヤーに即時回復Lv.6を1秒間付与(増加分のHPを回復させるため)
3. `RefreshHPMax`が2以上であるプレイヤーの`RefreshHPMax`を0に設定

|HPMax|health_boost Lv.|
|:-:|:-:|
|12,13|0|
|14,15|1|
|16,17|2|
|18,19|3|
|20,21|4|
|22,23|5|
|24,25|6|
|26,27|7|
|28,29|8|
|30,31|9|
|32,33|10|
|34,35|11|
|36,37|12|
|38,39|13|
|40,41|14|
|42,43|15|
|44,45|16|
|46,47|17|
|48,40|18|
|50~|19|

---

## 難易度調整

- 位置(-1920,17,-200)

### コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/testfor @a|
|2|/scoreboard players operation Difficulty Settings *= Difficulty Settings|
|3|/scoreboard players test Sightseeing Settings * 0|
|4|/scoreboard players operation Difficulty Settings += #ConquerPctInt Global|条件付き|
|5|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1 0 true"}|
|6|/blockdata -1885 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:resistance 1 0 true"}|条件付き|
|7|/scoreboard players test Difficulty Settings 30 *|
|8|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 0 true"}|条件付き|
|9|/blockdata -1885 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:resistance 1000000 0 true"}|条件付き|
|10|/scoreboard players test Difficulty Settings 70 *|条件付き|
|11|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 1 true"}|条件付き|
|12|/blockdata -1885 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:resistance 1000000 1 true"}|条件付き|
|13|/scoreboard players test Difficulty Settings 110 *|条件付き|
|14|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 2 true"}|条件付き|
|15|/scoreboard players test Difficulty Settings 150 *|条件付き|
|16|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 3 true"}|条件付き|
|17|/blockdata -1885 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:resistance 1000000 2 true"}|条件付き|
|18|/scoreboard players test Difficulty Settings 190 *|条件付き|
|19|/blockdata -1886 14 -188 {Command:"/effect @e[tag=TypeCheck,team=,type=!Player] minecraft:speed 1000000 4 true"}|条件付き|

### 詳細

1. プレイヤーが一人でも生きているときに以下の事柄を実行
2. `Difficulty`の`Settings`を2乗
3. `Sightseeing`の`Settings`が0以下であるとき、`Difficulty`の`Settings`に`#ConquerPcInt`の`Global`を足し合わせる
4. (-1886,14,-188)([**タイプ設定**](#タイプ設定)の強さ補正)のコマンドブロックに{Command:"/effect @e[tag=TypeCheck,team=,type=!Player]minecraft:speed 1 0 true"}を上書きできたとき、(-1885,14,-188)のコマンドブロックに{Command:"/effect @e[tag=TypeCheck,team=,type=!Player]minecraft:resistance 1 0 true"}を上書きする
5. `Difficulty`の`Settings`が30以上の時、`Settings`の値によって(-1886,14,-188)と(-1885,14,-188)にあるコマンドブロックを書き換える(以下参考)

|Setting|(-1886,14,-188)への書き換え内容|(-1885,14,-188)への書き換え内容|
|:-:|:-|:-|
|~30|スピードLv.0 1秒間|耐性Lv.0 1秒間|
|30~|スピードLv.0 1000000秒間|耐性Lv.0 1000000秒間|
|70~|スピードLv.1 1000000秒間|耐性Lv.1 1000000秒間|
|110~|スピードLv.2 1000000秒間|耐性Lv.1 1000000秒間 (書き換えなし)|
|150~|スピードLv.3 1000000秒間|耐性Lv.2 1000000秒間|
|190~|スピードLv.4 1000000秒間|耐性Lv.2 1000000秒間 (書き換えなし)|

---

## 島攻略処理

- 位置(-1920,17,-191),(-1920,18,-191)

### コマンド群

- (-1920,17,-191)にあるコマンド群 (島攻略処理という看板がついているもの)

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

- (-1920,18,-191)にあるコマンド群 (島攻略処理という看板がついているものの上のやつ)

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

### 詳細

- (-1920,17,-191)にあるコマンド群 (島攻略処理という看板がついているもの)

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
12. `#ConquerCount`の`Global`を1に設定
13. `#ConquerPctInt`の`Global`に`#ConquerCount`の`Global`を代入し、1000を掛け、`#ConquerMax`の`Const`=50で割る(`#ConquerPctInt`'s`Global`=1*1000/50)
14. `#ConquerPctDec`の`Global`に`#ConquerPctInt`の`Const`を代入
15. `#ConquerPctInt`の`Global`を10で割る
16. `#ConquerPctDec`の`Global`を10との剰余を代入
17. `#ConquerCountResidue`の`Global`に`#ConquerCount`の`Global`を代入し、`#AddStuffSpan`の`Const`=4で割る
18. すべてのプレイヤーの座標で演出を実行し、即時回復Lv.6を1秒間、満腹Lv.19を1秒間付与
19. `Sightseeing`の`Setting`が0以下の時、以下の事柄を実行
    1. ワールドが作られてからの時間を表示
    2. `StartTime`から攻略時間を計算し、`ConqTimeSec`、`ConqTimeMin`、`ConqTimeHour`にそれぞれに対応する値を代入
    3. 攻略タイムの表示

- (-1920,18,-191)にあるコマンド群 (島攻略処理という看板がついているものの上のやつ)

1. `#ConquerCountResidue`の`Global`が0の時、以下の事柄を実行
    - (-1899,3,-82)付近にいる製作者村人に{NoAI:false,Silent:false,Tags:[ShopStaff,TypeChecked]}を付与
2. `Prayable`の`Settings`が0以下の時、以下の事柄を実行
    - (-70,15,32)(交易島)の東向きでエンダーアイがはめられているエンドポータルフレームが存在する時、`Prayable`の`Settings`を1に設定
3. `ForceNight`の`Settings`が0以下の時、以下の事柄を実行
    - [CommonGM]が(-1920,4,-96)にある[**時計島**](#時計島)を実行
4. `ForceNight`の`Settings`が1以上であり、(3,77,87)にある南向きでエンダーアイがはめられたエンドポータルフレームが存在する時、以下の事柄を実行
    1. 時間をdayに設定し、`doDaylightCycle`をtrueに変更
    2. `#PastorMax`の`Global`から2引く
    3. `ForceNight`の`Settings`を0に設定

---

## 習得スキル取得

- 位置(-1920,10,-191)から(-1920,15,-191)

### コマンド群

- 剣士(-1920,10,-191)

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=1,score_Level=1,score_Job_min=1,score_Job=1] ShowSkill 1000|
|2|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=3,score_Level=3,score_Job_min=1,score_Job=1] ShowSkill 1200|
|3|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=5,score_Level=5,score_Job_min=1,score_Job=1] ShowSkill 1010|
|4|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=8,score_Level=8,score_Job_min=1,score_Job=1] ShowSkill 1210|
|5|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=10,score_Level=10,score_Job_min=1,score_Job=1] ShowSkill 1020|
|6|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=13,score_Level=13,score_Job_min=1,score_Job=1] ShowSkill 1220|
|7|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=15,score_Level=15,score_Job_min=1,score_Job=1] ShowSkill 1001|
|8|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=17,score_Level=17,score_Job_min=1,score_Job=1] ShowSkill 1230|
|9|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=18,score_Level=18,score_Job_min=1,score_Job=1] ShowSkill 1030|
|10|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=20,score_Level=20,score_Job_min=1,score_Job=1] ShowSkill 1201|
|11|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=23,score_Level=23,score_Job_min=1,score_Job=1] ShowSkill 1240|
|12|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=25,score_Level=25,score_Job_min=1,score_Job=1] ShowSkill 1021|
|13|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=26,score_Level=26,score_Job_min=1,score_Job=1] ShowSkill 1221|
|14|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=28,score_Level=28,score_Job_min=1,score_Job=1] ShowSkill 1211|
|15|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=30,score_Level=30,score_Job_min=1,score_Job=1] ShowSkill 1002|
|16|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=33,score_Level=33,score_Job_min=1,score_Job=1] ShowSkill 1231|
|17|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=35,score_Level=35,score_Job_min=1,score_Job=1] ShowSkill 1011|
|18|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=37,score_Level=37,score_Job_min=1,score_Job=1] ShowSkill 1202|
|19|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=38,score_Level=38,score_Job_min=1,score_Job=1] ShowSkill 1031|
|20|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=39,score_Level=39,score_Job_min=1,score_Job=1] ShowSkill 1222|
|21|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=40,score_Level=40,score_Job_min=1,score_Job=1] ShowSkill 1022|
|22|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=43,score_Level=43,score_Job_min=1,score_Job=1] ShowSkill 1040|
|23|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=45,score_Level=45,score_Job_min=1,score_Job=1] ShowSkill 1003|
|24|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=46,score_Level=46,score_Job_min=1,score_Job=1] ShowSkill 1241|
|25|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=48,score_Level=48,score_Job_min=1,score_Job=1] ShowSkill 1212|
|26|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=49,score_Level=49,score_Job_min=1,score_Job=1] ShowSkill 1232|
|27|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=50,score_Level=50,score_Job_min=1,score_Job=1] ShowSkill 1250|

- 忍者(-1920,11,-191)

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=1,score_Level=1,score_Job_min=2,score_Job=2] ShowSkill 2000|
|2|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=3,score_Level=3,score_Job_min=2,score_Job=2] ShowSkill 2200|
|3|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=5,score_Level=5,score_Job_min=2,score_Job=2] ShowSkill 2210|
|4|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=8,score_Level=8,score_Job_min=2,score_Job=2] ShowSkill 2010|
|5|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=10,score_Level=10,score_Job_min=2,score_Job=2] ShowSkill 2020|
|6|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=13,score_Level=13,score_Job_min=2,score_Job=2] ShowSkill 2220|
|7|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=15,score_Level=15,score_Job_min=2,score_Job=2] ShowSkill 2030|
|8|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=17,score_Level=17,score_Job_min=2,score_Job=2] ShowSkill 2040|
|9|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=18,score_Level=18,score_Job_min=2,score_Job=2] ShowSkill 2201|
|10|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=20,score_Level=20,score_Job_min=2,score_Job=2] ShowSkill 2050|
|11|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=23,score_Level=23,score_Job_min=2,score_Job=2] ShowSkill 2011|
|12|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=25,score_Level=25,score_Job_min=2,score_Job=2] ShowSkill 2211|
|13|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=26,score_Level=26,score_Job_min=2,score_Job=2] ShowSkill 2221|
|14|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=28,score_Level=28,score_Job_min=2,score_Job=2] ShowSkill 2230|
|15|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=30,score_Level=30,score_Job_min=2,score_Job=2] ShowSkill 2060|
|16|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=33,score_Level=33,score_Job_min=2,score_Job=2] ShowSkill 2202|
|17|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=35,score_Level=35,score_Job_min=2,score_Job=2] ShowSkill 2031|
|18|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=37,score_Level=37,score_Job_min=2,score_Job=2] ShowSkill 2070|
|19|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=38,score_Level=38,score_Job_min=2,score_Job=2] ShowSkill 2012|
|20|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=39,score_Level=39,score_Job_min=2,score_Job=2] ShowSkill 2222|
|21|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=40,score_Level=40,score_Job_min=2,score_Job=2] ShowSkill 2080|
|22|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=43,score_Level=43,score_Job_min=2,score_Job=2] ShowSkill 2041|
|23|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=45,score_Level=45,score_Job_min=2,score_Job=2] ShowSkill 2212|
|24|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=46,score_Level=46,score_Job_min=2,score_Job=2] ShowSkill 2231|
|25|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=48,score_Level=48,score_Job_min=2,score_Job=2] ShowSkill 2203|
|26|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=49,score_Level=49,score_Job_min=2,score_Job=2] ShowSkill 2071|
|27|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=50,score_Level=50,score_Job_min=2,score_Job=2] ShowSkill 2240

- 狩人(-1920,12,-191)

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=1,score_Level=1,score_Job_min=3,score_Job=3] ShowSkill 3200|
|2|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=3,score_Level=3,score_Job_min=3,score_Job=3] ShowSkill 3000|
|3|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=5,score_Level=5,score_Job_min=3,score_Job=3] ShowSkill 3010|
|4|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=8,score_Level=8,score_Job_min=3,score_Job=3] ShowSkill 3210|
|5|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=10,score_Level=10,score_Job_min=3,score_Job=3] ShowSkill 3220|
|6|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=13,score_Level=13,score_Job_min=3,score_Job=3] ShowSkill 3020|
|7|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=15,score_Level=15,score_Job_min=3,score_Job=3] ShowSkill 3030|
|8|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=17,score_Level=17,score_Job_min=3,score_Job=3] ShowSkill 3040|
|9|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=18,score_Level=18,score_Job_min=3,score_Job=3] ShowSkill 3050|
|10|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=20,score_Level=20,score_Job_min=3,score_Job=3] ShowSkill 3201|
|11|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=23,score_Level=23,score_Job_min=3,score_Job=3] ShowSkill 3001|
|12|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=25,score_Level=25,score_Job_min=3,score_Job=3] ShowSkill 3230|
|13|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=26,score_Level=26,score_Job_min=3,score_Job=3] ShowSkill 3240|
|14|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=28,score_Level=28,score_Job_min=3,score_Job=3] ShowSkill 3211|
|15|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=30,score_Level=30,score_Job_min=3,score_Job=3] ShowSkill 3221|
|16|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=33,score_Level=33,score_Job_min=3,score_Job=3] ShowSkill 3021|
|17|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=35,score_Level=35,score_Job_min=3,score_Job=3] ShowSkill 3060|
|18|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=37,score_Level=37,score_Job_min=3,score_Job=3] ShowSkill 3041|
|19|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=38,score_Level=38,score_Job_min=3,score_Job=3] ShowSkill 3051|
|20|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=39,score_Level=39,score_Job_min=3,score_Job=3] ShowSkill 3250|
|21|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=40,score_Level=40,score_Job_min=3,score_Job=3] ShowSkill 3202|
|22|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=43,score_Level=43,score_Job_min=3,score_Job=3] ShowSkill 3002|
|23|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=45,score_Level=45,score_Job_min=3,score_Job=3] ShowSkill 3231|
|24|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=46,score_Level=46,score_Job_min=3,score_Job=3] ShowSkill 3070|
|25|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=48,score_Level=48,score_Job_min=3,score_Job=3] ShowSkill 3212|
|26|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=49,score_Level=49,score_Job_min=3,score_Job=3] ShowSkill 3251|
|27|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=50,score_Level=50,score_Job_min=3,score_Job=3] ShowSkill 3260|

- 白魔導士(-1920,13,-191)

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=1,score_Level=1,score_Job_min=4,score_Job=4] ShowSkill 4200|
|2|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=3,score_Level=3,score_Job_min=4,score_Job=4] ShowSkill 4210|
|3|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=5,score_Level=5,score_Job_min=4,score_Job=4] ShowSkill 4000|
|4|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=8,score_Level=8,score_Job_min=4,score_Job=4] ShowSkill 4010|
|5|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=10,score_Level=10,score_Job_min=4,score_Job=4] ShowSkill 4201|
|6|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=13,score_Level=13,score_Job_min=4,score_Job=4] ShowSkill 4211|
|7|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=15,score_Level=15,score_Job_min=4,score_Job=4] ShowSkill 4220|
|8|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=17,score_Level=17,score_Job_min=4,score_Job=4] ShowSkill 4020|
|9|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=18,score_Level=18,score_Job_min=4,score_Job=4] ShowSkill 4011|
|10|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=20,score_Level=20,score_Job_min=4,score_Job=4] ShowSkill 4030|
|11|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=23,score_Level=23,score_Job_min=4,score_Job=4] ShowSkill 4212|
|12|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=25,score_Level=25,score_Job_min=4,score_Job=4] ShowSkill 4202|
|13|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=26,score_Level=26,score_Job_min=4,score_Job=4] ShowSkill 4040|
|14|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=28,score_Level=28,score_Job_min=4,score_Job=4] ShowSkill 4012|
|15|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=30,score_Level=30,score_Job_min=4,score_Job=4] ShowSkill 4221|
|16|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=33,score_Level=33,score_Job_min=4,score_Job=4] ShowSkill 4213|
|17|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=35,score_Level=35,score_Job_min=4,score_Job=4] ShowSkill 4031|
|18|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=37,score_Level=37,score_Job_min=4,score_Job=4] ShowSkill 4021|
|19|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=38,score_Level=38,score_Job_min=4,score_Job=4] ShowSkill 4013|
|20|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=39,score_Level=39,score_Job_min=4,score_Job=4] ShowSkill 4050|
|21|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=40,score_Level=40,score_Job_min=4,score_Job=4] ShowSkill 4203|
|22|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=43,score_Level=43,score_Job_min=4,score_Job=4] ShowSkill 4214|
|23|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=45,score_Level=45,score_Job_min=4,score_Job=4] ShowSkill 4222|
|24|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=46,score_Level=46,score_Job_min=4,score_Job=4] ShowSkill 4022|
|25|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=48,score_Level=48,score_Job_min=4,score_Job=4] ShowSkill 4014|
|26|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=49,score_Level=49,score_Job_min=4,score_Job=4] ShowSkill 4204|
|27|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=50,score_Level=50,score_Job_min=4,score_Job=4] ShowSkill 4230|

- 黒魔導士(-1920,14,-191)

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=1,score_Level=1,score_Job_min=5,score_Job=5] ShowSkill 5200|
|2|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=3,score_Level=3,score_Job_min=5,score_Job=5] ShowSkill 5000|
|3|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=5,score_Level=5,score_Job_min=5,score_Job=5] ShowSkill 5210|
|4|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=8,score_Level=8,score_Job_min=5,score_Job=5] ShowSkill 5010|
|5|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=10,score_Level=10,score_Job_min=5,score_Job=5] ShowSkill 5220|
|6|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=13,score_Level=13,score_Job_min=5,score_Job=5] ShowSkill 5020|
|7|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=15,score_Level=15,score_Job_min=5,score_Job=5] ShowSkill 5230|
|8|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=17,score_Level=17,score_Job_min=5,score_Job=5] ShowSkill 5240|
|9|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=18,score_Level=18,score_Job_min=5,score_Job=5] ShowSkill 5030|
|10|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=20,score_Level=20,score_Job_min=5,score_Job=5] ShowSkill 5201|
|11|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=23,score_Level=23,score_Job_min=5,score_Job=5] ShowSkill 5040|
|12|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=25,score_Level=25,score_Job_min=5,score_Job=5] ShowSkill 5211|
|13|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=26,score_Level=26,score_Job_min=5,score_Job=5] ShowSkill 5050|
|14|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=28,score_Level=28,score_Job_min=5,score_Job=5] ShowSkill 5060|
|15|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=30,score_Level=30,score_Job_min=5,score_Job=5] ShowSkill 5221|
|16|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=33,score_Level=33,score_Job_min=5,score_Job=5] ShowSkill 5070|
|17|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=35,score_Level=35,score_Job_min=5,score_Job=5] ShowSkill 5231|
|18|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=37,score_Level=37,score_Job_min=5,score_Job=5] ShowSkill 5241|
|19|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=38,score_Level=38,score_Job_min=5,score_Job=5] ShowSkill 5080|
|20|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=39,score_Level=39,score_Job_min=5,score_Job=5] ShowSkill 5051|
|21|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=40,score_Level=40,score_Job_min=5,score_Job=5] ShowSkill 5090|
|22|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=43,score_Level=43,score_Job_min=5,score_Job=5] ShowSkill 5041|
|23|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=45,score_Level=45,score_Job_min=5,score_Job=5] ShowSkill 5202|
|24|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=46,score_Level=46,score_Job_min=5,score_Job=5] ShowSkill 5212|
|25|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=48,score_Level=48,score_Job_min=5,score_Job=5] ShowSkill 5222|
|26|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=49,score_Level=49,score_Job_min=5,score_Job=5] ShowSkill 5232|
|27|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=50,score_Level=50,score_Job_min=5,score_Job=5] ShowSkill 5250|

- 召喚士(-1920,15,-191)&その他

|No.|コマンド|
|:-:|:-|
|1|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=1,score_Level=1,score_Job_min=6,score_Job=6] ShowSkill 6200|
|2|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=3,score_Level=3,score_Job_min=6,score_Job=6] ShowSkill 6210|
|3|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=5,score_Level=5,score_Job_min=6,score_Job=6] ShowSkill 6000|
|4|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=8,score_Level=8,score_Job_min=6,score_Job=6] ShowSkill 6220|
|5|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=10,score_Level=10,score_Job_min=6,score_Job=6] ShowSkill 6010|
|6|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=13,score_Level=13,score_Job_min=6,score_Job=6] ShowSkill 6020|
|7|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=15,score_Level=15,score_Job_min=6,score_Job=6] ShowSkill 6230|
|8|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=17,score_Level=17,score_Job_min=6,score_Job=6] ShowSkill 6030|
|9|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=18,score_Level=18,score_Job_min=6,score_Job=6] ShowSkill 6240|
|10|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=20,score_Level=20,score_Job_min=6,score_Job=6] ShowSkill 6201|
|11|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=23,score_Level=23,score_Job_min=6,score_Job=6] ShowSkill 6250|
|12|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=25,score_Level=25,score_Job_min=6,score_Job=6] ShowSkill 6040|
|13|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=26,score_Level=26,score_Job_min=6,score_Job=6] ShowSkill 6260|
|14|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=28,score_Level=28,score_Job_min=6,score_Job=6] ShowSkill 6221|
|15|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=30,score_Level=30,score_Job_min=6,score_Job=6] ShowSkill 6050|
|16|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=33,score_Level=33,score_Job_min=6,score_Job=6] ShowSkill 6021|
|17|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=35,score_Level=35,score_Job_min=6,score_Job=6] ShowSkill 6231|
|18|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=37,score_Level=37,score_Job_min=6,score_Job=6] ShowSkill 6270|
|19|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=38,score_Level=38,score_Job_min=6,score_Job=6] ShowSkill 6241|
|20|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=39,score_Level=39,score_Job_min=6,score_Job=6] ShowSkill 6280|
|21|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=40,score_Level=40,score_Job_min=6,score_Job=6] ShowSkill 6202|
|22|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=43,score_Level=43,score_Job_min=6,score_Job=6] ShowSkill 6290|
|23|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=45,score_Level=45,score_Job_min=6,score_Job=6] ShowSkill 6060|
|24|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=46,score_Level=46,score_Job_min=6,score_Job=6] ShowSkill 6070|
|25|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=48,score_Level=48,score_Job_min=6,score_Job=6] ShowSkill 6222|
|26|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=49,score_Level=49,score_Job_min=6,score_Job=6] ShowSkill 6080|
|27|/scoreboard players set @a[tag=ShowNewSkill,score_Level_min=50,score_Level=50,score_Job_min=6,score_Job=6] ShowSkill 6300|
|28|/tellraw @a[tag=ShowNewSkill,score_ShowSkill_min=0] {"text":"新しいスキルを覚えた！"}|
|29|/scoreboard players tag @a[tag=ShowNewSkill] remove ShowNewSkill|

### 詳細

1. `ShowNewSkill`がある時、`Level`と`Job`によって`ShowSkill`を以下のように設定する
2. 新規スキル取得時のメッセージを表示
3. `ShowNewSkill`を持つプレイヤーから`ShowNewSkill`を削除

- 剣士(`Job`=1)

|Level|ShowSkill||Level|ShowSkill||Level|ShowSkill|
|:-:|:-:|-|:-:|:-:|-|:-:|:-:|
|1|1000||20|1201||38|1031|
|3|1200||23|1240||39|1222|
|5|1010||25|1021||40|1022|
|8|1210||26|1221||43|1040|
|10|1020||28|1211||45|1003|
|13|1220||30|1002||46|1241|
|15|1001||33|1231||48|1212|
|17|1230||35|1011||49|1232|
|18|1030||37|1202||50|1250|

- 忍者(`Job`=2)

|Level|ShowSkill||Level|ShowSkill||Level|ShowSkill|
|:-:|:-:|-|:-:|:-:|-|:-:|:-:|
|1|2000||20|2050||38|2012|
|3|2200||23|2011||39|2222|
|5|2210||25|2211||40|2080|
|8|2010||26|2221||43|2041|
|10|2020||28|2230||45|2212|
|13|2220||30|2060||46|2231|
|15|2030||33|2202||48|2203|
|17|2040||35|2031||49|2071|
|18|2201||37|2070||50|2240|

- 狩人(`Job`=3)

|Level|ShowSkill||Level|ShowSkill||Level|ShowSkill|
|:-:|:-:|-|:-:|:-:|-|:-:|:-:|
|1|3200||20|3201||38|3051|
|3|3000||23|3001||39|3250|
|5|3010||25|3230||40|3202|
|8|3210||26|3240||43|3002|
|10|3220||28|3211||45|3231|
|13|3020||30|3221||46|3070|
|15|3030||33|3021||48|3212|
|17|3040||35|3060||49|3251|
|18|3050||37|3041||50|3260|

- 白魔導士(`Job`=4)

|Level|ShowSkill||Level|ShowSkill||Level|ShowSkill|
|:-:|:-:|-|:-:|:-:|-|:-:|:-:|
|1|4200||20|4030||38|4013|
|3|4210||23|4212||39|4050|
|5|4000||25|4202||40|4203|
|8|4010||26|4040||43|4214|
|10|4201||28|4012||45|4222|
|13|4211||30|4221||46|4022|
|15|4220||33|4213||48|4014|
|17|4020||35|4031||49|4204|
|18|4011||37|4021||50|4230|

- 黒魔導士(`Job`=5)

|Level|ShowSkill||Level|ShowSkill||Level|ShowSkill|
|:-:|:-:|-|:-:|:-:|-|:-:|:-:|
|1|5200||20|5201||38|5080|
|3|5000||23|5040||39|5051|
|5|5210||25|5211||40|5090|
|8|5010||26|5050||43|5041|
|10|5220||28|5060||45|5202|
|13|5020||30|5221||46|5212|
|15|5230||33|5070||48|5222|
|17|5240||35|5231||49|5232|
|18|5030||37|5241||50|5250|

- 召喚士(`Job`=6)

|Level|ShowSkill||Level|ShowSkill||Level|ShowSkill|
|:-:|:-:|-|:-:|:-:|-|:-:|:-:|
|1|6200||20|6201||38|6241|
|3|6210||23|6250||39|6280|
|5|6000||25|6040||40|6202|
|8|6220||26|6260||43|6290|
|10|6010||28|6221||45|6060|
|13|6020||30|6050||46|6070|
|15|6230||33|6021||48|6222|
|17|6030||35|6231||49|6080|
|18|6240||37|6270||50|6300|

---

## 時計島

- 位置(-1920,4,096)
- 時計島の形態変化の管理、演出の実行

### コマンド群

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/summon XPOrb ~ ~ ~ {Passengers:[{id:Arrow,xTile:-58,yTile:23,zTile:22,life:1200s},{id:Arrow,xTile:35,yTile:0,zTile:6,life:1200s},{id:Arrow,xTile:59,yTile:0,zTile:6,life:1200s},{id:Arrow,xTile:35,yTile:0,zTile:30,life:1200s},{id:Arrow,xTile:59,yTile:0,zTile:30,life:1200s},{id:Arrow,xTile:4000,yTile:255,zTile:4000,life:1200s},{id:Arrow,xTile:4016,yTile:255,zTile:4000,life:1200s},{id:Arrow,xTile:4000,yTile:255,zTile:4016,life:1200s},{id:Arrow,xTile:4016,yTile:255,zTile:4016,life:1200s}],Age:6000s}|
|2|/clone ~1 ~ ~ ~1 ~ ~ ~1 ~ ~ filtered force minecraft:command_block 5|
|3|/scoreboard players test #ConquerPctInt Global 11 40|
|4|/execute 0-0-1-0-1 -58 23 22 detect ~ ~ ~ minecraft:mob_spawner 0 /blockdata ~ ~ ~ {SpawnData:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Enderman,CustomName:"秒針",DeathLootTable:"usb:entities/clock",Health:50f,Attributes:[{Name:generic.maxHealth,Base:50d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.attackDamage,Base:6d}],carried:8}]}}|条件付き|
|5|/execute 0-0-1-0-1 -58 23 22 detect ~ ~ ~ minecraft:mob_spawner 0 /blockdata ~ ~ ~ {RequiredPlayerRange:32s,Delay:100s,SpawnPotentials:}|条件付き|
|6|/execute 0-0-1-0-1 35 0 6 detect ~ ~ ~ minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~24 ~ ~ minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~ ~ ~24 minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~24 ~ ~24 minecraft:bedrock 0 /execute 0-0-1-0-1 4000 255 4000 detect ~16 ~ ~ minecraft:air 0 /execute 0-0-1-0-1 4000 255 4000 detect ~ ~ ~16 minecraft:air 0 /execute 0-0-1-0-1 4000 255 4000 detect ~16 ~ ~16 minecraft:air 0 /execute 0-0-1-0-1 4001 47 4001 detect 4000 255 4000 minecraft:air 0 /clone ~ ~ ~ ~22 ~22 ~22 36 1 7|条件付き|
|7|/summon Item -1920 7 ~ {Item:{id:stone,Count:1b},Age:5820s}|条件付き|
|8|/scoreboard players test #ConquerPctInt Global 41 70|
|9|/execute 0-0-1-0-1 -58 23 22 detect ~ ~ ~ minecraft:mob_spawner 0 /blockdata ~ ~ ~ {SpawnData:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Skeleton,CustomName:"分針",SkeletonType:1b,DeathLootTable:"usb:entities/clock",Health:100f,Attributes:[{Name:generic.maxHealth,Base:100d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.attackDamage,Base:12d}],HandItems:[{id:minecraft:stick,Count:0b}],Passengers:[{id:AreaEffectCloud,Duration:100,DurationOnUse:0,Radius:2f,RadiusPerTick:0f,RadiusOnUse:0f,Effects:[{Id:2b,Duration:100,Amplifier:2b}]}]}]}}|条件付き|
|10|/execute 0-0-1-0-1 -58 23 22 detect ~ ~ ~ minecraft:mob_spawner 0 /blockdata ~ ~ ~ {RequiredPlayerRange:32s,Delay:100s,SpawnPotentials:}|条件付き|
|11|/execute 0-0-1-0-1 35 0 6 detect ~ ~ ~ minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~24 ~ ~ minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~ ~ ~24 minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~24 ~ ~24 minecraft:bedrock 0 /execute 0-0-1-0-1 4000 255 4000 detect ~16 ~ ~ minecraft:air 0 /execute 0-0-1-0-1 4000 255 4000 detect ~ ~ ~16 minecraft:air 0 /execute 0-0-1-0-1 4000 255 4000 detect ~16 ~ ~16 minecraft:air 0 /execute 0-0-1-0-1 4001 24 4001 detect 4000 255 4000 minecraft:air 0 /clone ~ ~ ~ ~22 ~22 ~22 36 1 7|条件付き|
|12|/summon Item -1920 7 ~ {Item:{id:stone,Count:1b},Age:5820s}|条件付き|
|13|/scoreboard players test #ConquerPctInt Global 71 *|
|14|/execute 0-0-1-0-1 -58 23 22 detect ~ ~ ~ minecraft:mob_spawner 0 /blockdata ~ ~ ~ {SpawnData:{id:Villager,Health:0f,DeathTime:19s,Passengers:[{id:Spider,CustomName:"時針",DeathLootTable:"usb:entities/clock",Health:200f,Attributes:[{Name:generic.maxHealth,Base:200d},{Name:generic.movementSpeed,Base:0.45d},{Name:generic.attackDamage,Base:24d}],Passengers:[{id:AreaEffectCloud,Duration:100,DurationOnUse:0,Radius:2f,RadiusPerTick:0f,RadiusOnUse:0f,Effects:[{Id:2b,Duration:100,Amplifier:5b}]}]}]}}|条件付き|
|15|/execute 0-0-1-0-1 -58 23 22 detect ~ ~ ~ minecraft:mob_spawner 0 /blockdata ~ ~ ~ {RequiredPlayerRange:32s,Delay:100s,SpawnPotentials:}|条件付き|
|16|/execute 0-0-1-0-1 35 0 6 detect ~ ~ ~ minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~24 ~ ~ minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~ ~ ~24 minecraft:bedrock 0 /execute 0-0-1-0-1 35 0 6 detect ~24 ~ ~24 minecraft:bedrock 0 /execute 0-0-1-0-1 4000 255 4000 detect ~16 ~ ~ minecraft:air 0 /execute 0-0-1-0-1 4000 255 4000 detect ~ ~ ~16 minecraft:air 0 /execute 0-0-1-0-1 4000 255 4000 detect ~16 ~ ~16 minecraft:air 0 /execute 0-0-1-0-1 4001 1 4001 detect 4000 255 4000 minecraft:air 0 /clone ~ ~ ~ ~22 ~22 ~22 36 1 7|条件付き|
|17|/summon Item -1920 7 ~ {Item:{id:stone,Count:1b},Age:5820s}|条件付き|

### 詳細

1. 9つの矢を乗せたEXPオーブをその場に召喚 (なんで?)
2. 次のコマンド([時計島](#時計島)のNo.3のコマブロ)を実行
3. `#ConquerPctInt`の`Global`が11以上40以下の時以下の事柄を実行
   1. (-58,23,22)にあるスポーンブロックが0であるとき、このスポーンブロックを[秒針]のものに置き換える
   2. 時計島の底面の4隅の岩盤が存在し、時計島のクローン元(4000,255,4000)のy=255に空気ブロックが存在するとき、(4001,47,4001)にある時計島第二形態を(36,1,7)にコピーする
   3. (-1920,7,-96)に石をドロップし、[**時計島のアラーム**](#時計島のアラーム)を実行
4. `#ConquerPctInt`の`Global`が41以上70以下の時以下の事柄を実行
   1. (-58,23,22)にあるスポーンブロックが0であるとき、このスポーンブロックを[分針]のものに置き換える
   2. 時計島の底面の4隅の岩盤が存在し、時計島のクローン元(4000,255,4000)のy=255に空気ブロックが存在するとき、(4001,24,4001)にある時計島第三形態を(36,1,7)にコピーする
   3. (-1920,7,-96)に石をドロップし、[**時計島のアラーム**](#時計島のアラーム)を実行
5. `#ConquerPctInt`の`Global`が71以上の時以下の事柄を実行
   1. (-58,23,22)にあるスポーンブロックが0であるとき、このスポーンブロックを[時針]のものに置き換える
   2. 時計島の底面の4隅の岩盤が存在し、時計島のクローン元(4000,255,4000)のy=255に空気ブロックが存在するとき、(4001,1,4001)にある時計島第三形態を(36,1,7)にコピーする
   3. (-1920,7,-96)に石をドロップし、[**時計島のアラーム**](#時計島のアラーム)を実行

### 時計島のアラーム

- 位置(-1920,6,096)

|No.|コマンド|状態|
|:-:|:-|:-|
|1|/execute @a ~ ~ ~ /playsound block.anvil.land master @a[c=1] ~ ~100 ~ 0.3 1.414 0.3|リピート|
|2|/time set 23400|

- 音を鳴らし、時間を23400に設定する

[CommonGM]:TUSB_Analysis_Entity.html
[エンダーマイト]:TUSB_Analysis_Entity.html
