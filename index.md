---
title: トップページ
tags: [目次]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,minecraft,マインクラフト,配布ワールド
last_updated: 2020/6/22
update: 2020-06-22 09:21:00 +0000
sidebar: home_sidebar
permalink: index.html
hide_sidebar: true
---

## はじめに

これはThe Unusual Skyblock v12.0.9 の主にX回路区域内にあるコマンド群について、個人的なメモとして簡単にまとめたものです。

{% include warning.html content="一応明言しておきますが**非公式なドキュメント**となっていますので、このドキュメントに関して間違えても**TUSBサークルの皆様に連絡をすることがないよう**お願いします。" %}

実際に読む際これだけでは分かりにくいと思うので、X回路区域を飛び回りながら読むことをおススメします。

また、何か間違い等がありましたらtwitterにて連絡をいただけると嬉しいです。(<https://twitter.com/Re16d5>)

---

## 目次

- コマンド群解説
  - X回路区域管理コマンド群
    - [マクラエル内部](insideMcLawell.html)
    - [初期化処理](initializeProcessing.html)
    - [メインクロック処理](mainclockProcessing.html)
    - [SystemKeeper処理](systemkeeperProcessing.html)
    - [チャンクローダー設定](furnaceProcessing.html)
  - 毎tick実行するコマンド群1
    - [毎tick必ず最初に実行したいコマンド群](runFirst.html)
    - [エリア侵入記録](areaRecord.html)
    - [エリア処理](areaProcessing.html)
    - [時間経過](timeElapsed.html)
      - [風切更新](kazakiriUpdata.html)
      - [約1分処理](oneMinProcessing.html)
      - [Tick停止飛翔物削除](tickStopDelete.html)
      - [敵スキル実行](runMobSkill.html)
      - [嫌な予感実行](eventFullfill.html)
    - [AEC維持](aecMaintenance.html)
  - 毎tick実行するコマンド群2
    - [メインクロック開始時リセットするもの](reset.html)
    - [初回ログイン時処理](firstLoginProcessing.html)
    - [ログイン時処理](loginProcessing.html)
      - [難易度調整](difficultyAdjustment.html)
    - [ジョブチェンジ先判定](jobChangeJudgement.html)
    - [ジョブセーブ](jobSave.html)
    - [ジョブロード](jobLoad.html)
    - [ステータス表示](statusDisplay.html)
    - [攻略率表示](conquerDisplay.html)
    - [ワープ処理ジョブ島・通常世界](warpProcessing.html)
    - [KeepInventory確認](keepInventoryCheck.html)
    - [満腹度修正](satietyFix.html)
    - [経験値取得処理](expProcessing.html)
    - [レベルアップ処理](levelupProcessing.html)
      - [習得スキル取得](skillAcquisition.html)
    - [最大HP調整処理](hpFix.html)
    - [島攻略処理](conquerProcessing.html)
      - [時計島](clockIslandProcessing.html)
- データ類
  - [エンティティ](TUSB_Analysis_Entity.html)
  - [アイテム](TUSB_Analysis_Item.html)
  - [スコア、チーム](TUSB_Analysis_Data.html)

{% include changelog.html %}
