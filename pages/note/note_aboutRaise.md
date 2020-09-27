---
title: レイズ解説
tags: [解説,スキル,白魔導士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-11 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: note/note_aboutRaise.html
datatable3c: true
summary: レイズは白魔導士のスキルの1つであり、さらにネザーアスレでのリスポーン処理にも用いられているスキルであるが、処理が非常に煩雑であるのでここにまとめる。
summaryDisable: true
---

## レイズについて

レイズは白魔導士のスキルの1つであり、さらにネザーアスレでのリスポーン処理にも用いられているスキルであるが、処理が非常に煩雑であるのでここにまとめる。

(~~ネザーアスレでのリスポーン処理にも用いられているということは、最も使用されたスキルである可能性があるかも?~~)

## Raise系タグ、スコアのについて

Raise系のタグやスコアは多くあり、混乱しやすいので軽くまとめる。なお、`RaiseEndN`系のタグについては後にまとめる。

### Raise系タグ(プレイヤー用)

#### CastRaise

**レイズを唱えたとき、もしくは死亡したプレイヤーが`ReRaise`を持っていた時、付与されるタグ。**[レイズ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_raise.html)を実行するために必要であり、そこで`CastingRaise`に置き換えられる。また、[KeepInventory確認]({{site.baseurl}}/command/xCircuit2/xCircuit2_keepInventoryCheck.html)と[毎tick実行するコマンド群10]({{site.baseurl}}/command/xCircuit10/xCircuit10_command.html)で付与される。

#### CastingRaise

**レイズを実行したプレイヤーに与えられるタグ。**[レイズ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_raise.html)で付与される。

#### ReRaise

**リレイズの効果を受けるプレイヤーに付与されるタグ。**[レイズ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_raise.html)で付与され、[KeepInventory確認]({{site.baseurl}}/command/xCircuit2/xCircuit2_keepInventoryCheck.html)や[満腹度修正]({{site.baseurl}}/command/xCircuit2/xCircuit2_satietyFix.html)で削除されることがある。

#### NeedRaise

**レイズの対象となる予定のプレイヤーに付与するタグ。**[レイズ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_raise.html)で用いられ、諸々の設定の終了後、`Raise`に置き換えられる。

#### Raise

**レイズの対象となるプレイヤーに付与されるタグ。**[レイズ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_raise.html)や[KeepInventory確認]({{site.baseurl}}/command/xCircuit2/xCircuit2_keepInventoryCheck.html)で付与され、プレイヤーの死亡後[満腹度修正]({{site.baseurl}}/command/xCircuit2/xCircuit2_satietyFix.html)で`RaiseEnd`に置き換えられる。

### Raise系タグ(エンティティ用)

#### RaisePoint

レイズによって復活するときにリスポーン地点となるアンカーとして設置されている**[RaisePoint]({{site.baseurl}}/entity/entity_entity.html#raisepoint)に付与されているタグ。**[レイズ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_raise.html)で召喚され、31秒後に消滅する。

#### RaiseTPMarker

`RaiseSyncCount`により、**[RaisePoint]({{site.baseurl}}/entity/entity_entity.html#raisepoint)とプレイヤーとの同期ができた時に召喚される[RaiseTPMarker]({{site.baseurl}}/entity/entity_entity.html#raisetpmarker)に付与されているタグ。**[レイズリスポーン処理]({{site.baseurl}}/command/xCircuit10/xCircuit10_raiseWarp.html)で召喚される。

### Raise系スコア

#### RaiseSyncCount

**レイズによるリスポーン地点の同期を行うためのスコア。**[RaisePoint]({{site.baseurl}}/entity/entity_entity.html#raisepoint)と`NeedRaise`を持つプレイヤーに与えられ、プレイヤーは`RaiseSyncCount`の同じ[RaisePoint]({{site.baseurl}}/entity/entity_entity.html#raisepoint)にリスポーンする。また、最新の`RaiseSyncCount`は`#RaisePointCount`の`RaiseSyncCount`で管理され、レイズを実行するごとに、0から1ずつ増えていく。[RaisePoint]({{site.baseurl}}/entity/entity_entity.html#raisepoint)とプレイヤーには[レイズ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_raise.html)で付与され、`#RaisePointCount`の`RaiseSyncCount`の宣言は[初期化処理]({{site.baseurl}}/command/xCircuitCore/xCircuitCore_initializeProcessing.html)で、カウントアップは[レイズ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_raise.html)でそれぞれ行われる。

#### RaisedArea

**レイズが付与されたときに、プレイヤーがいるディメンションを記録するスコア。**[レイズ実行]({{site.baseurl}}/command/xCircuit10/xCircuit10_raise.html)で設定される。

## ネザーアスレでのリスポーンについて

[KeepInventory確認]({{site.baseurl}}/command/xCircuit2/xCircuit2_keepInventoryCheck.html)にてネザーアスレ内で死亡した場合、`Raise`を付与し、`RaisedArea`をネザーアスレに設定する事によって、**レイズリスポーン処理の処理を用いてネザーアスレのリスポーン地点に移動させている。**

## レイズリスポーン処理について

[レイズリスポーン処理]({{site.baseurl}}/command/xCircuit10/xCircuit10_raiseWarp.html)では、`RaiseEndN`系のタグに沿って処理が行われるので、ここでもそれに従う。

`RaiseEndN`系のタグは`RaiseEnd`、`RaiseEnd2`、`RaiseEnd3`、`RaiseEnd4`とあり、レイズによるリスポーン時の処理に用いられる。また、**`RaiseEnd` → `RaiseEnd2` → `RaiseEnd3` → `RaiseEnd4`へと遷移しながら処理を行う。**詳しくは[レイズリスポーン処理]({{site.baseurl}}/command/xCircuit10/xCircuit10_raiseWarp.html)にて。

まずプレイヤーが死亡した際、[満腹度修正]({{site.baseurl}}/command/xCircuit2/xCircuit2_satietyFix.html)にて**`RaiseEnd`が`Raise`と置き換えられる。**これによって、[レイズリスポーン処理]({{site.baseurl}}/command/xCircuit10/xCircuit10_raiseWarp.html)が実行される。

### RaiseEnd

`RaiseEnd`を付与された段階では、プレイヤーは通常世界のリスポーン地点にいるので**ネザーやエンドに`RaisedArea`がある場合は、プレイヤーをそれぞれのディメンションへと送る必要がある。**

- `RaisedArea`がジ・エンドを示しているプレイヤーは通常世界のエンドポータル内に移動
- `RaisedArea`がネザーを示しているプレイヤーは通常世界のネザーポータル内に移動

### RaiseEnd2

エンドポータルは触れただけで即ワープされるが、**ネザーポータルはサバイバルやアドベンチャーモードではワープまでに時間がある。**これを解決するために、`RaisedArea`がネザーを指しているプレイヤーは**クリエイティブに変更させ、即ネザーにワープできるようにする。**

(時々、ネザーアスレへのリスポーン時にクリエイティブのまま担ってしまうプレイヤーがいるが、ここが原因。かといって、ネザーポータル内でワープされるまでプレイヤーを待機させるわけにもいかないので、致し方ない。1.13以降はexecuteの登場によりこれは解決できるので、次期バージョンでは無くなるだろう)

### RaiseEnd3

前述した通り、ネザーポータルでのワープには時間がかかるので、**プレイヤーがポータル内にいるときは`RaiseEnd2`に戻る。**
他のプレイヤーは、スペクテイターモードに変更し、ネザーもしくはエンド内にいる場合は指定の位置に移動する。

### RaiseEnd4

`RaiseArea`がネザーアスレを示しているとき、**ネザーアスレリスポーン地点に移動させる。**それ以外のときは、**[RaisePoint]({{site.baseurl}}/entity/entity_entity.html#raisepoint)の`RaiseSyncCount`とプレイヤーの`RaiseSyncCount`が等しい場所**にプレイヤーを移動させ、`RaiseSyncCount`が一致しないプレイヤーは「<span style="color:yellow;background-color:gray;">復帰地点が見つからなかった！</span>」とのメッセージを表示。
最後にプレイヤーをアドベンチャーモードに変更して終了する。
