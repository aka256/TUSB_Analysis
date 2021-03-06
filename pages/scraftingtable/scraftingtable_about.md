---
title: 超作業台
tags: [超作業台]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,超作業台
last_updated: 2020/6/23
update: 2020/6/23
sidebar: mydoc_sidebar
permalink: scraftingtable/scraftingtable_about.html
folder: scraftingtable
datatable4cnp: false
summary: 通常の作業台とは異なるレシピにより、強力な武器などを作ることのできる摩訶不思議な超作業台であるが、その仕組みは至ってシンプルである。流れとしては、超作業台(に見立てたドロッパー)に置かれたアイテムと、超作業台ルーム内に置かれたレシピごとに配置されてあるドロッパーを比較し、一致したらそれに対応した完成品の入ったドロッパーを超作業台の所にコピーするだけである。
summaryDisable: true
---

## 超作業台について

通常の作業台とは異なるレシピにより、強力な武器などを作ることのできる摩訶不思議な超作業台であるが、その仕組みは至ってシンプルである。
流れとしては、超作業台(~~に見立てたドロッパー~~)に置かれたアイテムと、超作業台ルーム内に置かれたレシピごとに配置されてあるドロッパーを比較し、一致したらそれに対応した完成品の入ったドロッパーを超作業台の所にコピーするだけである。実際にレシピを登録する方法は[超作業台レシピの追加]({{site.baseurl}}/scraftingtable/scraftingtable_createRecipe.html)を参照。

{% include note.html content="レシピのドロッパーの中身は完全一致しなければならないため、同じアイテムに見えてもNBTが異なるアイテムでは超作業台によるクラフティングができないことがある。" %}

---

## 超作業台の詳細

### 超作業台付近

{% include image.html file="craftingTable.png" alt="超作業台" caption="超作業台の周り" %}

超作業台の周りには上図のように二つのコマンドブロックがあり、これによって超作業台ルームのコマンド群を起動している。具体的には、以下のような内容のものが記述されている。

#### ドロッパーの横のコマンドブロック

```minecraftcommand
/clone -2737 70 -369 -2721 70 -354 -2737 70 -369 filtered force minecraft:command_block 1
```

- レシピの特定を実行

#### ドロッパーの下のコマンドブロック

```minecraftcommand
- /clone -2738 70 -353 -2738 70 -353 -2738 70 -353 filtered force minecraft:command_block
```

- 超作業台による[クラフティングの実行](#クラフティング実行部)

### 超作業台ルーム内

{% include image.html file="craftingProcessing.png" alt="超作業台ルームの超作業台管理部分" caption="超作業台ルームのレシピ群" %}

超作業台ルーム内の上図が超作業台を管理する部分である。この管理部分は大きく分けて3つに分かれており、クラフティングを実行するコマンド群、超作業台のドロッパーを一時的にコピーしたドロッパー、そして[すべての超作業台レシピを保存している装置群](#レシピ群)となっている。

#### クラフティング実行部

このコマンド群は二つに分かれており、超作業台のボタンを押すことによって実行される部分(コマンド群A)と、そこから起動され演出などを実行する部分(コマンド群B)に分けられる。

##### コマンド群A

<span class="label label-primary">位置 (-2738,70,-353)</span>

|No.|コマンド|
|:-:|-|
|1|/clone -2739 90 -362 -2739 90 -362 -2721 70 -355 filtered normal minecraft:dropper|
|2|/clone -2735 70 -390 -2721 70 -354 -2735 70 -390 filtered force minecraft:command_block|
|3|/clone -2721 70 -353 -2721 70 -353 -2721 70 -353 filtered force minecraft:command_block|

まず、超作業台のドロッパーを(-2721,70,-355)にある一時コピー先ドロッパーにクローンし、[レシピ群](#レシピ群)を実行する。そして、[コマンド群B](#コマンド群b)

##### コマンド群B

<span class="label label-primary">位置 (-2721,70,-353)</span>

|No.|コマンド|状態|
|:-:|-|-|
|1|/testforblocks ~ ~ ~-2 ~ ~ ~-2 -2739 90 -362|
|2|/execute 0-0-1-0-1 -2739 90 -362 /playsound minecraft:entity.item.break master @a[r=12] ~ ~ ~ 1 1.587|条件付き|
|3|/particle smoke -2739 92 -362 1 1 1 0 50 force|条件付き|
|4|/blockdata ~ ~-3 ~ {SuccessCount:1}|
|5|/execute 0-0-1-0-1 -2739 90 -362 /playsound block.anvil.use master @a[r=12] ~ ~ ~ 1 1.587|条件付き|
|6|/particle happyVillager -2739 92 -362 1 1 1 0 50 force|条件付き|
|7|/clone -2721 70 -355 -2721 70 -355 -2739 90 -362|

1. (-2721,70,-355)にある一時コピー先ドロッパーと超作業台のドロッパーを比較し、一致したとき(レシピが間違っているとき)は失敗時の演出を行い、不一致の時は成功時の演出を実行する
2. 一時コピー先ドロッパーを超作業台のドロッパーの座標にクローンする

#### レシピ群

{% include image.html file="recipeset.png" alt="レシピ装置" caption="レシピ装置抜粋" %}

レシピ装置は二つのドロッパーとコマンド、そしてレッドストーンブロックからなり、これを全レシピ分用意されている。ドロッパーの下段には超作業台のレシピ、上段には完成品が入っている。また、コマンドは下段、上段の順に以下のようになっている。

```minecraftcommand
/clone ~ ~ ~-1 ~ ~ ~-1 -2721 70 -355
/testforblocks ~ ~ ~-1 ~ ~ ~-1 -2721 70 -355
```

要はコマンドブロックの隣にある下段のドロッパーと(-2721,70,-355)にある一時コピー先ドロッパーが一致する場合は、上段のドロッパーを一時コピー先ドロッパーにクローンする、というものである。
