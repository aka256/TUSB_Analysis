---
title: アイアンウィル実行
tags: [コマンド,スキル,剣士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-24 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_ironWill.html
datatable4c: true
summary: 剣士のスキルの1つであるアイアンウィルの実行準備を行う。なお、防具や盾によるボーナス処理や終了処理はアイアンウィル継続処理を、スキル実行部は毎tick実行するコマンド群4をそれぞれ参照。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-175)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

剣士のスキルの1つであるアイアンウィルの実行準備を行う。

なお、防具や盾によるボーナス処理や終了処理は[アイアンウィル継続処理]({{site.baseurl}}/command/xCircuit4/xCircuit4_ironWillContinueJudgment.html)を、スキル実行部は[毎tick実行するコマンド群4]({{site.baseurl}}/command/xCircuit4/xCircuit4_command.html)をそれぞれ参照。

## コマンド群

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=1010,score_ActivatedSkill=1019] ~ ~ ~ /playsound block.anvil.land master @a[r=16] ~ ~ ~ 1 1.4 0|
|2|/execute @a[score_ActivatedSkill_min=1010,score_ActivatedSkill=1019] ~ ~ ~ /particle crit ~ ~1 ~ 0.5 0.5 0.5 0.5 30 force|
|3|/tellraw @a[score_ActivatedSkill_min=1010,score_ActivatedSkill=1019] {"text":"アイアンウィルの効果がかかった。","color":"green","hoverEvent":{"action":"show_text","value":"次のノックバックを軽減する。一定確率で効果が継続する。\n装備：継続確率にボーナス。"}}|
|4|/execute @a[score_ActivatedSkill_min=1010,score_ActivatedSkill=1019] ~ ~ ~ /scoreboard players operation @a[c=1] IronWill = @a[c=1] RndMWC|
|5|/scoreboard players tag @a[score_ActivatedSkill_min=1010,score_ActivatedSkill=1019] add UpdateRandom|
|6|/scoreboard players operation @a[score_ActivatedSkill_min=1010,score_ActivatedSkill=1019] IronWill %= #50 Const|
|7|/scoreboard players add @a[score_ActivatedSkill_min=1010,score_ActivatedSkill=1019] IronWill 75|
|8|/scoreboard players operation @a[score_ActivatedSkill_min=1011,score_ActivatedSkill=1019] IronWill *= #2 Const|

## 詳細

- `ActivatedSkill`が1010~1019であるプレイヤーを対象として、以下の事柄を実行

1. 対象のプレイヤーから半径16m以内のすべてのプレイヤーに効果音を鳴らし、対象の座標上でパーティクルを発生させる
2. 対象に「<span style="color:green" data-toggle="tooltip" data-original-title="{{site.data.glossary.ironWillMesage}}">アイアンウィルの効果がかかった。</span>」とのメッセージを表示
3. 対象に`UpdateRandom`を付与
4. 対象の`IronWill`に以下の計算結果を代入

$$
\text{IronWill} =
\begin{cases}
(\text{RndMWC}\bmod 50)+75 & (\text{ActivatedSkill}=1010)\\
\{(\text{RndMWC}\bmod 50)+75\}\times 2 & (1011\leq\text{ActivatedSkill}\leq1019)
\end{cases}
$$

要は、以下のようになる。

$$
\text{IronWill}=
\begin{cases}
n & (n\in\{50,51,\dots ,125\}) & (\text{ActivatedSkill}=1010)\\
n & (n\in\{100,102,\dots ,250\}) & (1011\leq\text{ActivatedSkill}\leq1019)
\end{cases}
$$

### スキル実行から終了までの大まかな流れ

かなり大雑把であるが、以下のようにアイアンウィルは実行される。

- [アイアンウィル実行]({{site.baseurl}}/command/xCircuit9/xCircuit9_ironWill.html)での処理
   1. プレイヤーによるスキル実行
   2. 対象プレイヤーのアイアンウィルのレベル(`ActivatedSkill`の値)によって`IronWill`(スコア)に乱数を代入

$$
\text{IronWill} =
\begin{cases}
n & (n\in\{50,51,\dots ,125\}) & (\text{Lv.}1)\\
n & (n\in\{100,102,\dots ,250\}) & (\text{Lv.}2)
\end{cases}
$$

(プレイヤーがダメージを受けるまで待機)

ダメージを受けたら...

- [毎tick実行するコマンド群4]({{site.baseurl}}/command/xCircuit4/xCircuit4_command.html)での処理
   1. プレイヤーの同座標上に`IronWillPoint`を持つAEC、[IronWillPoint]({{site.baseurl}}/entity/entity_entity.html#ironwillpoint)を召喚
   2. [IronWillPoint]({{site.baseurl}}/entity/entity_entity.html#ironwillpoint)の向き、視線をプレイヤーに合わせる
   3. (この間にプレイヤーはノックバックされている)
   4. プレイヤーを半径4m以内にいる[IronWillPoint]({{site.baseurl}}/entity/entity_entity.html#ironwillpoint)に移動(半径4m以内に[IronWillPoint]({{site.baseurl}}/entity/entity_entity.html#ironwillpoint)が居なければ、そのまま吹っ飛ばされる)

- [アイアンウィル継続処理]({{site.baseurl}}/command/xCircuit4/xCircuit4_ironWillContinueJudgment.html)での処理
   1. `IronWill`(スコア)にボーナス値を足す
      - プレイヤーの防御点(+0~+20)
        - 例: ダイアモンド防具フル装備で+20
        - 詳しくは[防御点 \| Minecraft wiki](https://minecraft-ja.gamepedia.com/%E9%98%B2%E5%85%B7#.E9.98.B2.E5.BE.A1.E7.82.B9)
      - 盾を持っていれば+10
      - 最大で+30
   2. `IronWill`(スコア)から100を引く
   3. `IronWill`(スコア)が0以上であれば、再び[毎tick実行するコマンド群4]({{site.baseurl}}/command/xCircuit4/xCircuit4_command.html)での処理に移行
   4. `IronWill`(スコア)が0未満であれば、「<span style="color: gold;">アイアンウィルの効果が切れた。</span>」というメッセージを表示し、終了する

---

以下にアイアンウィル効果発動確率の例を示す。なお、乱数列は一様に分布しているものとする。

- **例1: アイアンウィルLv.1 防具なし、盾なし**

防具ボーナス0、盾ボーナス0であるので、**合計ボーナス点は0**である。

よって、`IronWill`は以下の範囲に収まる。

||IronWill|
|:-:|:-:|
|発動前|$$50,51,\dots ,125$$|
|1回目終了判定時|$$-50,-49,\dots ,25$$|
|2回目終了判定時|$$-150,-149,\dots, -75$$|

従って、アイアンウィルの**1回目の発動確率は100%**、**2回目の発動確率は約34.7%**、**3回目の発動確率は0%**である。

- **例2: アイアンウィルLv.2 防具:ダイアフル、盾あり**

防具ボーナス20、盾ボーナス10であるので、**合計ボーナス点は30**である。

よって、`IronWill`は以下の範囲に収まる。

||IronWill|
|:-:|:-:|
|発動前|$$100,102,\dots ,250$$|
|1回目終了判定時|$$30,32,\dots ,180$$|
|2回目終了判定時|$$-40,-38,\dots, 110$$|
|3回目終了判定時|$$-110,-108,\dots, 40$$|
|4回目終了判定時|$$-180,-178,\dots, -30$$|

従って、アイアンウィルの**1回目の発動確率は100%**、**2回目の発動確率は100%**、**3回目の発動確率は約74.7%**、**4回目の発動確率は28%**、**5回目の発動確率は0%**となる。
