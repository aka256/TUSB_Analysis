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

[CommonGM]:/entity/TUSB_Analysis_Entity.html
[エンダーマイト]:/entity/TUSB_Analysis_Entity.html
[SystemKeeper]:/entity/TUSB_Analysis_Entity.html
[地下世界]:/entity/TUSB_Analysis_Entity.html
[クラウディア]:/entity/TUSB_Analysis_Entity.html
[テーブルマウンテン]:/entity/TUSB_Analysis_Entity.html
[ガリバーランド]:/entity/TUSB_Analysis_Entity.html
[トカルトコルデ]:/entity/TUSB_Analysis_Entity.html
[お試しセットの印玉]:/entity/TUSB_Analysis_Item.html
[ViewPoint(仮)]:/entity/TUSB_Analysis_Entity.html
[秒針]:/entity/TUSB_Analysis_Entity.html
[分針]:/entity/TUSB_Analysis_Entity.html
[時針]:/entity/TUSB_Analysis_Entity.html

[jobSave]:/others/TUSB_Analysis_Data.html
[jobLoad]:/others/TUSB_Analysis_Data.html

[お試しセットの印玉]:/others/TUSB_Analysis_Item.html

[メインクロック開始時リセットするもの]:/command/rest.html
[初回ログイン時処理]:/command/firstLoginProcessing.html
[ログイン時処理]:/command/loginProcessing.html
[ジョブチェンジ先判定]:/command/jobChangeJudgemnt.html
[ジョブセーブ]:/command/jobSave.html
[ジョブロード]:/command/jobLoad.html
[ステータス表示]:/command/statusDisplay.html
[攻略率表示]:/command/conquerDisplay.html
[ワープ処理ジョブ島・通常世界]:/command/warpProcessing.html
[KeepInventory確認]:/command/keepInventoryCheck.html
[満腹度修正]:/command/satietyFix.html
[経験値取得処理]:/command/expProcessing.html
[レベルアップ処理]:/command/leveliupProcessing.html
[最大HP調整処理]:/command/hpFix.html
[難易度調整]:/command/difficultyAdjustment.html
[島攻略処理]:/command/conquerProcessing.html
[習得スキル取得]:/command/jobChangeJudgement.html
[時計島]:/command/clockIslandProcessing.html
[マクラウェル内部]:/command/insideMcLawell.html
[スコアボードの設定]:/command/setScoreboard.html
[メインクロック処理]:/command/mainclockProcessing.html
[SystemKeeper処理]:/command/systemKeeperProcessing.html
[かまど再設定]:/command/furnaceProcessing.html
[毎tick必ず最初に実行したいコマンド群]:/command/runFirst.html
[エリア侵入記録]:/command/areaRecord.html
