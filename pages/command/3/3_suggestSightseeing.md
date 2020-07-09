---
title: 観光モード提案開始
tags: [コマンド,観光モード,表示]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,観光モード
last_updated: 2020/6/26
update: 2020/6/27
sidebar: mydoc_sidebar
permalink: 3_suggestSightseeing.html
folder: command/3
datatable3c: true
---

## About

観光モードの提案から、変更までの処理を行う。

## コマンド群

### コマンド群A

<span class="label label-primary">位置 (-1920,8,-188)</span>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players test Sightseeing Settings 1 \*|
|2|/tellraw @a[tag=SuggestSightseeing] {"text":"既に観光モードに移行済みです。"}|条件付き|
|3|/scoreboard players test Sightseeing Settings \* 0|
|4|/execute @a[tag=SuggestSightseeing,c=1] ~ ~ ~ /execute 0-0-1-0-1 ~-1 9 -188 /fill ~ ~ ~ ~ ~ ~ minecraft:redstone_block 0 replace minecraft:lapis_block 0 ###観光モード提案タイマー起動 ###executeは提案tick鯖落ち時等誤承認回避|条件付き|
|5|/execute @a[tag=SuggestSightseeing] ~ ~ ~ /me によって観光モードへの移行が提案されました。|条件付き|
|6|/scoreboard players tag @a add ShowVote|条件付き|
|7|/scoreboard players set #SSModeVoteSec Global 61|条件付き|
|8|/list|条件付き|
|9|/scoreboard players set #SSModeVoteSec Global 181|条件付き|
|10|/scoreboard players tag @a[tag=SuggestSightseeing] remove SuggestSightseeing|

<div class="datatable3c-end"></div>

### コマンド群B

<span class="label label-primary">位置 (-1920,9,-188)</span>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players add #SSModeVoteTimer Global 1|リピート|
|2|/tellraw @a[tag=ShowVote] [{"text":""},{"text":"観光モードへの移行が提案されています。\n","bold":true,"color":"gold"},{"text":"観光モードに移行すると次のようになります。\n・死んでもアイテムがなくならない\n・プレイヤー名が緑色になる\n・島攻略時にクリアタイムが表示されない\n"},{"text":"一度移行すると、戻すことはできません！\n","color":"red","bold":true},{"text":"クリックで"},{"text":"提案を拒否する","underlined":true,"color":"yellow","clickEvent":{"action":"run_command","value":"/trigger DenySightSeeing set 1"}}]|
|3|/scoreboard players enable @a[tag=ShowVote] DenySightSeeing|条件付き|
|4|/scoreboard players tag @a[tag=ShowVote] remove ShowVote|条件付き|
|5|/execute @a[score_DenySightSeeing_min=1,c=1] ~ ~ ~ /scoreboard players reset #SSModeVoteSec Global|
|6|/tellraw @a {"text":"観光モード移行の提案は否決されました。","color":"yellow","bold":true}|条件付き|
|7|/scoreboard players reset @a[score_DenySightSeeing_min=1] DenySightSeeing|条件付き|
|8|/fill -1921 ~ ~ -1921 ~ ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###観光モード提案タイマー停止|条件付き|
|9|/scoreboard players test #SSModeVoteTimer Global 20 *|
|10|/scoreboard players set #SSModeVoteTimer Global 0|条件付き|
|11|/execute @a ~ ~ ~ /playsound block.comparator.click master @a[c=1] ~ ~ ~ 0.25 1.782 0|条件付き|
|12|/clone -1920 ~1 ~ -1920 ~1 ~ -1920 ~1 ~ filtered force minecraft:command_block 5 ###観光モード提案時間経過|条件付き|

<div class="datatable3c-end"></div>

### コマンド群C

<span class="label label-primary">位置 (-1920,10,-188)</span>

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players remove #SSModeVoteSec Global 1|
|2|/scoreboard players test #SSModeVoteSec Global 180 180|
|3|/tellraw @a {"text":"観光モード移行まであと３分"}|条件付き|
|4|/scoreboard players test #SSModeVoteSec Global 60 60|
|5|/tellraw @a {"text":"観光モード移行まであと１分"}|条件付き|
|6|/scoreboard players test #SSModeVoteSec Global 30 30|
|7|/tellraw @a {"text":"観光モード移行まであと30秒"}|条件付き|
|8|/scoreboard players test #SSModeVoteSec Global 10 10|
|9|/tellraw @a {"text":"観光モード移行まであと10秒"}|条件付き|
|10|/scoreboard players test #SSModeVoteSec Global 1 5|
|11|/tellraw @a {"translate":"観光モード移行まであと%1$s秒","with":[{"score":{"name":"#SSModeVoteSec","objective":"Global"}}]}|条件付き|
|12|/scoreboard players test #SSModeVoteSec Global * 0|
|13|/fill -1921 ~-1 ~ -1921 ~-1 ~ minecraft:lapis_block 0 replace minecraft:redstone_block 0 ###観光モード提案タイマー停止|条件付き|
|14|/scoreboard players test #SSModeVoteSec Global 0 0|条件付き|
|15|/tellraw @a {"text":"観光モードに移行しました。","color":"green","bold":true}|条件付き|
|16|/scoreboard teams option FriendlyTeam color green|条件付き|
|17|/gamerule keepInventory true|条件付き|
|18|/execute @a ~ ~ ~ /playsound entity.firework.twinkle master @a[c=1] ~ ~ ~ 1 1.19 0|条件付き|
|19|/scoreboard players set Sightseeing Settings 1|条件付き|

<div class="datatable3c-end"></div>

## 詳細

### コマンド群A詳細

1. `Sightseeing`の`Settings`が1以上であるとき、`SuggestSightseeing`を持っているすべてのプレイヤーに「既に観光モードに移行済みです。」とのメッセージを表示
2. `Sightseeing`の`Settings`が0以下であるとき、`SuggestSightseeing`を持つプレイヤーを一人選択し、(-1921,9,-188)にあるラピスラズリブロックをレッドストーンブロックに置き換え、[コマンド群B](#コマンド群b詳細)をリピート実行し、以下の事柄を実行
   1. `SuggestSightseeing`を持つすべてのプレイヤーに観光モードへの移行が提案されたとのメッセージを表示
   2. すべてのプレイヤーに`ShowVote`を付与
   3. `#SSModeVoteSec`の`Global`を61に設定
   4. プレイヤーリストを表示
   5. `#SSModeVoteSec`の`Global`を181に設定
3. `SuggestSightseeing`を持つすべてのプレイヤーから`SuggestSughtseeing`を削除

### コマンド群B詳細

1. `#SSModeVoteTimer`の`Global`に1を足す
2. `ShowVote`を持つすべてのプレイヤーに観光モードへの移行が提案されているというメッセージを表示し、以下の事柄を実行
   1. `DenySightSeeing`への書き込みを許可
   2. `ShowVote`を削除
3. `DenySightSeeing`が1以上であるプレイヤーを一人選択し、`#SSModeVoteSec`の`Global`を0に設定し、以下の事柄を実行
   1. すべてのプレイヤーに「観光モード移行の提案は否決されました。」とのメッセージを表示
   2. `DenySightSeeing`が1以上であるすべてのプレイヤーの`DenySightSeeing`を0に設定
   3. (-1921,9,-188)にあるレッドストーンブロックをラピスラズリブロックに置き換え、コマンド群Bのクロックを停止
4. `##SSModeVoteTimer`の`Global`が20以上であるとき、以下の事柄を実行
   1. 一人のプレイヤーを選択し、効果音を鳴らす
   2. (-1920,10,-188)にある[コマンド群C](#コマンド群c詳細)を実行

### コマンド群C詳細

1. `#SSModeVoteSec`の`Global`から1を引く
2. `#SSModeVoteSec`の`Global`の値に対応したメッセージを表示(以下参照)
3. `#SSModeVoteSec`の`Global`が0以下であるとき、以下の事柄を実行
   1. (-1921,9,-188)にあるラピスラズリブロックをレッドストーンブロックに置き換え、[コマンド群B](#コマンド群b詳細)を停止
   2. `#SSModeVoteSec`が0であるとき、「観光モードに移行しました。」とのメッセージを表示し、以下の事柄を実行
      1. `FriendlyTeam`の色を緑に変更
      2. `keepInventory`をtrueに変更
      3. プレイヤーの座標で効果音を鳴らす
      4. `ightseeing`の`settings`を1に設定

#### \#SSModeVoteSecの値とメッセージ

|#SSModeVoteSec|メッセージ|
|:-:|-|
|180|観光モード移行まであと３分|
|60|観光モード移行まであと１分|
|30|観光モード移行まであと30秒|
|10|観光モード移行まであと10秒|
|1~5|観光モード移行まであとn秒|
