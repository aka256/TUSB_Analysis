---
title: 超作業台レシピの追加
tags: [超作業台]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,超作業台
last_updated: 2020/6/23
update: 2020/6/23
sidebar: mydoc_sidebar
permalink: scraftingtable/scraftingtable_createRecipe.html
folder: scraftingtable
datatable4cnp: false
summary: 超作業台へのレシピの追加方法について説明していく。超作業台の仕組みについて知りたい場合は超作業台についてを参照。
summaryDisable: true
---

## 超作業台のレシピ追加方法

超作業台へのレシピの追加方法について説明していく。超作業台の仕組みについて知りたい場合は[超作業台について](/scraftingtable/scraftingtable_about.html)を参照。

{% include warning.html content="超作業台へのレシピ追加など、TUSBの改造は公式のサポート範囲外と思われるので実際に行う際は**自己責任で行うように。**" %}

{% include important.html content="作業を始める前に、**ワールドのバックアップを取っておくことを推奨する。**" %}

### コマンドの使用を許可

作業を始める前にコマンドが使える状態にする。方法としてはいろいろあるが、今回は簡単に行える方法を取る。

{% include image.html file="escMenu.png" alt="EscMenu" caption="Escを押したときのメニュー" %}

まず、レシピを追加したいTUSBのワールドに入り、Escを押した際の"LANに公開"を押す。

{% include image.html file="publishedonLAN.jpeg" alt="LANに公開" caption="LANに公開を押したときのメニュー" %}

そして、チートの許可をオンに変更し、LANワールドの開始を選択する。
これにより、コマンドが使用できるようになった。なお、一旦ワールドから抜けるとこの設定は解除され、再びLANワールドを開始する必要がある。

### 超作業台ルームへの侵入

超作業台ルームはスキル設定所の下にある。そこに侵入するには、スペクターモードに変更して行く方法がベストだろう。
スペクターモードに変更したら、スキル設定所の入り口付近の床を下にすり抜けるとすぐに超作業台ルームにたどり着くことができる。しかし、ここはすべてバリアブロック埋もれているのでこれを取り払う必要がある。手動で1つ1つ壊してもいいのだが、専用のコマンドブロックが用意されているので使わせてもらおう。まず、壁沿いのExitという文字のEの下あたりに赤と青の羊毛がある。

{% include image.html file="switch.png" alt="スイッチ" caption="バリアブロックを管理するコマンド" %}

そこにある穴を覗くとボタンがある。青の方がバリアブロック除去、赤がバリアブロック設置するコマンドとなっているので、今回は青の方のボタンを押す。(このときはクリエイティブに変更してバリアブロックを壊してボタンを押す必要がある)すると、バリアブロックが取り払われ、作業がしやすくなる。

### レシピの登録

次にレシピの登録を行う。まず、レシピを登録する場所を決めるのだが、レッドストーンブロックの上が白いガラスブロックである部分が、レシピ未登録部分であるのでその中から一か所を選ぶ。

{% include image.html file="before.png" alt="決定場所" caption="今回はここにレシピを登録する" %}

次に、下側のドロッパーの1ブロック下にレッドストーンブロックを置く。このとき周囲のガラスブロックやマグマブロックなどは壊してしまって構わない。

{% include image.html file="setredstone.png" alt="レッドストーンブロックの設置" caption="レッドストーンブロックはここに設置する" %}

そうしたら、コマンドブロックを図のように置く。

{% include image.html file="setcommand.png" alt="コマンドブロックの設置" caption="コマンドブロックはこの向きに設置する" %}

(向きに注意) コマンドブロックの中には以下のコマンドを書き込み、`動力が必要`から`常時実行`に変更する。

{% include image.html file="recipecommand.png" alt="コマンド設定" caption="コマンドブロックの設定" %}

```minecraftcommand
/testforblocks ~ ~ ~-1 ~ ~ ~-1 -2721 70 -355
```

コマンドブロックを設置したら、反対側に回り込みレシピの登録を行う。下側のドロッパーがレシピ、上側のドロッパーが完成品となっているので、好きな物を登録しよう。

{% include image.html file="recipe.png" alt="レシピ例" caption="下のドロッパーにはこのようにレシピを登録する" %}

{% include image.html file="product.png" alt="完成品例" caption="上のドロッパーにはこのように完成品を登録する" %}

これで超作業台へのレシピ登録は完了する。

{% include image.html file="after.png" alt="完成" caption="最終的にはこのようになっているはず" %}

後は壊したブロックを直し、超作業台ルーム内のバリアブロックを元に戻し外に出ればすべての作業が終了する。
