---
title: タグ
tags: [タグ]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-10-28 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: others/others_tags.html
folder: others
#search: exclude
summary: コマンドに関係するタグについてまとめる。
summaryDisable: true
---

**編集中**
情報の抜け漏れについてはご容赦を...

## TagList

|TagName|対象|説明|
|-|-|-|
|AbyssWarp|Entity|
|Adv|Player|
|Agent|エージェント|
|AgentItemRefused|Player|
|AgentOK|Player|
|AgentYes|Player|
|Arrow|Entity|タイプ|
|Augur|占い師|
|AugurYes|Player|
|BedCheck|Player|ベッドバグ判定|
|BlackRider|ブラックライダー|
|BringItemError|Player|
|burnableEnemy|Entity|タイプ|
|CanFire||周囲に炎を設置|
|CanSpin|Entity|周囲に蜘蛛の巣を設置|
|CastRaise|Player|
|CauseEvent|Player|嫌な予感フラグ|
|Conquer|Player|島攻略時フラグ|
|CooldownRequired|Entity|
|CooldownReauiredLong|
|CoolTickCounter|
|Doom|Player|死の宣告|
|DoomStart|Player|死の宣告開始フラグ|
|Driftable|Entity|タイプ|
|DriftableA|Entity|タイプ|
|Elixir|Player|エリクサー処理|
|Enemy|すべての敵Mob|
|Enter|AEC|
|Ether|Player|エーテル処理|
|FallingSand|
|FastCast|Entity|
|FlayingObject|Entity|
|FloatingRequired|Entity|
|Freeze|Entity|
|Garbage|消去するエンティティ|
|HasCloud|Entity|タイプ|
|HolyWater|Player|聖水使用フラグ|
|IgnoreEnderChest|Player|
|InGround|Entity|
|Invisible|Player|
|ISFEncount|Player|トカルトエンカウントフラグ|
|ISFUnreached|Player|トカルトコルデ未侵入フラグ|
|Kazakiri|Player|風切|
|LivingEnemy|Entity|タイプ|
|LongFuse|Entity|
|MagicShield|Player|マジックシールド|
|Magma|はぐれマグマ|
|Melt|Entity|
|MobCloud|AEC|AECに付与される|
|Mokuso|Player|黙想|
|PaleRider|ペイルライダー|
|Pastor|牧師|
|PastorNo|Player|
|PastorResume|Player|
|PastorYes|Player|
|Poofable|Entity|タイプ|
|Pray|Player|お祈り|
|RadarEnd|Player|レーダーヴィジョン終了フラグ|
|Raise|Player|
|RaiseEnd|Player|
|RedRider|レッドライダー|
|ReduceCurse|Player|エルダーガーディアンの呪いフラグ|
|RemoveReRaise|Player|
|RemoveTorch|Player|トカルトコルデ松明フラグ|
|RemoveTorchInWater|Player|トカルトコルデ入水時松明フラグ|
|ReRaise|Player|観光モード関連|
|Resolved|Player|
|SaveTorch|Player|トカルトコルデ入水時松明回収フラグ|
|Shinen|深淵様|
|ShopHomePoint|Entity|
|ShopStaff|Villager|交易島の村人|
|ShowConquest|Player|攻略率表示フラグ|
|ShowNewSkill|Player|新規取得スキル表示フラグ|
|ShowStatus|Player|ステータス表示フラグ|
|ShowVote|Player|観光モード関連(のはず)|
|SkillMob|Entity|
|SkillTarget|Entity|
|Slimy|Slime,LavaSlime|タイプ|
|Sneaking|Player|
|Spawner|ArmorStand,MinecartSpawner|特殊スポナーの処理|
|SpawnerCore|MinecartSpawner|特殊スポナーの処理|
|SuggestSightseeing|Player|
|SystemEntity||TUSBを管理するエンティティ群|
|TalkToAgent|Player|
|TalkToAgent2|Player|
|TalkToAugur|Player|
|TalkToPastor|Player|
|TestingTick|Enity|
|TrialItemClear|Player|観光モード関連|
|TrialSet|Player|お試しセットの印玉|
|TypeCheck|Enityt|タイプ未設定のエンティティ|
|TypeChecked|Entity|タイプ設定のしてあるエンティティ|
|UpdataRandom|Player|
|Vanillager|Entity|
|ViewPoint|ArmorStand|
|VillagerMeal|動物誘導イベントの動物|
|WarpByJob|Player|職業島から通常世界へのワープ時のフラグ|
|WarpOnly|Entity|敵Mobのワープ処理|
|WhiteRider|ホワイトライダー|

## 個別詳細

### 飛び道具系タグ

#### Projectile

スキルで用いられる雪玉や矢に付与されるタグである。[Projectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_projectileProcessing.html)にて半径5m以内の敵MOBに、`NearProjectile`を付与する。このタグが削除される時は無い<span style="color:gray;">はず</span>。

#### NearProjectile

`Projectile`を持つ飛び道具から半径5m以内の敵MOBに付与されるタグである。要は飛び道具系スキルが当たる可能性のあるターゲットへ付与されるタグである。[NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html)にて、このタグを持つ敵MOBがダメージを受けた時そのMOBに`ProjectileHit`を付与し、すべてのエンティティからこのタグを削除する。

#### ProjectileHit

`NearProjectile`を持った敵MOBがダメージを受けた時に付与されるタグである。[NearProjectile処理]({{site.baseurl}}/command/xCircuit12/xCircuit12_nearProjectileProcessing.html)にて、`PotentialSkill`の値に応じHIT処理部を起動し、同じコマンド群にて削除される。
