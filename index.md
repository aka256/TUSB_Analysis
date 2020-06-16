# はじめに

これはThe Unusual Skyblock v12.0.9 の主にX回路区域内にあるコマンド群について、個人的なメモとして簡単にまとめたものです。なので一応明言しておきますが**非公式なドキュメント**となっていますので、このドキュメントに関して間違えても**TUSBサークルの皆様に連絡をすることがないよう**お願いします。

実際に読む際これだけでは分かりにくいと思うので、X回路区域を飛び回りながら読むことをおススメします。

また、何か間違い等がありましたらtwitterにて連絡をいただけると嬉しいです。(<https://twitter.com/Re16d5>)

(最終更新日:2020/6/15)

---

## 目次

- コマンド群解説
  - [メインクロック開始時リセットするもの]
  - [初回ログイン時処理]
  - [ログイン時処理]
  - [ジョブチェンジ先判定]
  - [ジョブセーブ]
  - [ジョブロード]
  - [ステータス表示]
  - [攻略率表示]
  - [ワープ処理ジョブ島・通常世界]
  - [KeepInventory確認]
  - [満腹度修正]
  - [経験値取得処理]
  - [レベルアップ処理]
  - [最大HP調整処理]
  - [難易度調整]
  - [島攻略処理]
  - [習得スキル取得]
  - [時計島]
  - [マクラウェル内部]
  - [スコアボードの設定]
  - [メインクロック処理]
  - [SystemKeeper処理]
  - [かまど再設定]
  - [毎tick必ず最初に実行したいコマンド群]
  - [エリア侵入記録]
- [エンティティ](entity/TUSB_Analysis_Entity.html)
- [スコア、チーム](others/TUSB_Analysis_Data.html)
- [アイテム](others/TUSB_Analysis_Item.md)

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
