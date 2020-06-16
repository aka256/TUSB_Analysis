# ワープ処理ジョブ島・通常世界

- 位置(-1920,15,-192)
- 初回ログイン時から通常世界に行くまでのTP処理

## コマンド群

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

## 詳細

1. `WarpByJob`を持つプレイヤーの`TutorialRead`を0に設定
2. `WarpByJob`を持ち、`TutorialRead`が524286以下であるプレイヤーにチュートリアルが読めていない旨のメッセージを表示し、(-1911.0 114.0 -136.0)(初期リス地点)に移動させ、`WarpByJob`を削除
3. `WarpBuJob`を持ち、`Job`が0以下であるプレイヤーにジョブ変更申請書を与え、(-1786,113,-137,-90,0)(職業島入口)に移動
4. `WarpBuJob`を持ち、`Job`が1以上であるプレイヤーを(0,5,2,-90,-30)(通常世界)に移動
5. `WarpByJob`を持つプレイヤーから`WarpByJob`を削除

[CommonGM]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[エンダーマイト]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[SystemKeeper]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[地下世界]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[クラウディア]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[テーブルマウンテン]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[ガリバーランド]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[トカルトコルデ]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[お試しセットの印玉]:/TUSB_Analysis/entity/TUSB_Analysis_Item.html
[ViewPoint(仮)]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[秒針]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[分針]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html
[時針]:/TUSB_Analysis/entity/TUSB_Analysis_Entity.html

[jobSave]:/TUSB_Analysis/others/TUSB_Analysis_Data.html
[jobLoad]:/TUSB_Analysis/others/TUSB_Analysis_Data.html

[お試しセットの印玉]:/TUSB_Analysis/others/TUSB_Analysis_Item.html

[メインクロック開始時リセットするもの]:/TUSB_Analysis/command/rest.html
[初回ログイン時処理]:/TUSB_Analysis/command/firstLoginProcessing.html
[ログイン時処理]:/TUSB_Analysis/command/loginProcessing.html
[ジョブチェンジ先判定]:/TUSB_Analysis/command/jobChangeJudgemnt.html
[ジョブセーブ]:/TUSB_Analysis/command/jobSave.html
[ジョブロード]:/TUSB_Analysis/command/jobLoad.html
[ステータス表示]:/TUSB_Analysis/command/statusDisplay.html
[攻略率表示]:/TUSB_Analysis/command/conquerDisplay.html
[ワープ処理ジョブ島・通常世界]:/TUSB_Analysis/command/warpProcessing.html
[KeepInventory確認]:/TUSB_Analysis/command/keepInventoryCheck.html
[満腹度修正]:/TUSB_Analysis/command/satietyFix.html
[経験値取得処理]:/TUSB_Analysis/command/expProcessing.html
[レベルアップ処理]:/TUSB_Analysis/command/leveliupProcessing.html
[最大HP調整処理]:/TUSB_Analysis/command/hpFix.html
[難易度調整]:/TUSB_Analysis/command/difficultyAdjustment.html
[島攻略処理]:/TUSB_Analysis/command/conquerProcessing.html
[習得スキル取得]:/TUSB_Analysis/command/jobChangeJudgement.html
[時計島]:/TUSB_Analysis/command/clockIslandProcessing.html
[マクラウェル内部]:/TUSB_Analysis/command/insideMcLawell.html
[スコアボードの設定]:/TUSB_Analysis/command/setScoreboard.html
[メインクロック処理]:/TUSB_Analysis/command/mainclockProcessing.html
[SystemKeeper処理]:/TUSB_Analysis/command/systemKeeperProcessing.html
[かまど再設定]:/TUSB_Analysis/command/furnaceProcessing.html
[毎tick必ず最初に実行したいコマンド群]:/TUSB_Analysis/command/runFirst.html
[エリア侵入記録]:/TUSB_Analysis/command/areaRecord.html
