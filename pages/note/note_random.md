---
title: 乱数解説
tags: [解説]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-27 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: note/note_random.html
datatable3c: true
summary: TUSBではキャリー付き乗算(multiply-with-carry, MWC)を用いて乱数の取得を行っている。細かい理論については置いておき、TUSB内でどのように計算が行われているかというと、以下の式を繰り返し計算して乱数列を得ている。
summaryDisable: true
tocLimit: h2
---

## キャリー付き乗算

TUSBではキャリー付き乗算(multiply-with-carry, MWC)を用いて乱数の取得を行っている。

> キャリー付き乗算 (英: multiply-with-carry, MWC) は、George Marsagliaにより開発された整数疑似乱数生成用の手法である。乱数種には2〜数千の値を必要とする。MWC の主な長所は、単純な整数演算からなっており非常に高速に動作するという点と、\\(2^{60\dots 2000000}\\) という非常に長周期であるという点である。
> ([キャリー付き乗算-Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%A3%E3%83%AA%E3%83%BC%E4%BB%98%E3%81%8D%E4%B9%97%E7%AE%97)より引用)

細かい理論については置いておき、TUSB内でどのように計算が行われているかというと、以下の式を繰り返し計算して乱数列を得ている。

$$
x_n =
\begin{cases}
(ax_{n-1}+c_{n-1})\mod b & (n>1)\\
GameTime\mod b & (n=1)
\end{cases}\\
c_n =
\begin{cases}
\lfloor \frac{ax_{n-1}+c_{n-1}}{b}\rfloor & (n>1)\\
GameTime\mod b & (n=1)
\end{cases}
$$

\\(x_n\\)が乱数列で、\\(c_n\\)がキャリーとなっている。
但し、

$$
a = 31743\\
b = 65536\\
GameTime=(\text{#GameTimeのGlobal})
$$

である。\\(x_n\\)を特定の値との剰余を求める事により、ある範囲の乱数を得る。

{% include callout.html content="例えば0 ~ 9までの乱数\\(R\\)を得たいとき、\\(x_{n-1},c_{n-1}\\)から\\(x_n\\)を計算し、\\(R=x_n\mod 10\\)とすることで値\\(R\\)を取得する。" type="info" %}

### 初項\\(x_1,c_1\\)

初項\\(x_1,c_1\\)はどちらも\\(x_1,c_1 = GameTime\mod b\\)である。

`#GameTime`の`Global`(以降、`#GameTime`)はプレイヤーが初めてTUSBにログインしたとき<span style="color:#a9a9a9;">(具体的にはチームに属していないプレイヤーが存在するとき)</span>、その時のワールドが作られてからの時間を記録する。ソロプレイであれば、その時一回限りの更新であり、マルチプレイであれば、新しいプレイヤーがログインするたびに`#GameTime`は更新される。

{% include note.html content="ソロプレイ時の`#GameTime`は基本的に7171674となるが、ラグによってはこれとは異なる値になる**かも**しれない。あくまで参考までに。" %}

### 乱数の更新

乱数の更新は以下の2つの条件に該当するとき、行われる。

1. プレイヤーが初めてTUSBにログインしたとき
2. `UpdateRandom`が付与されたプレイヤーが存在するとき

## 乱数の使い方

TUSBの二次創作等で乱数を使用する方法について記す。

1. プレイヤーの`RndMWC`(これが\\(x_n\\))の値を**`Random`等の一時変数に代入**
2. **プレイヤーに`UpdateRandom`を付与**
3. 取得したい値の範囲(0 ~ 9など)に対応した値(0 ~ 9であれば10)で`Random`との剰余を計算する

{% include warning.html content="強制するまでの事ではないが、`RndMWC`の値を直接変更する行為は避けた方が良いだろう。" %}

## 乱数の特定について

ここでは、乱数が特定することが可能であるか考える。
まずTUSBでは前述したように乱数の更新のほとんどは、`UpdateRandom`によって行われる。これは数はあるが特定は容易である。次に、プレイヤーが初めてTUSBにログインしたときの`#GameTime`の特定だが、ソロプレイでは可能であるかもしれない。しかし、マルチプレイでは2人目以降のプレイヤーの初ログイン時間の特定はコマンドを使わない限り不可能である。

結論としては、ソロプレイならば`#GameTime`が一意に定まり、`UpdateRandom`を付与されるタイミングをすべて把握することができるのなら乱数の特定が可能となり、マルチプレイでははぼ不可能と考えられる。
<span style="color:#a9a9a9;">まぁ、できても人力TAS?に近い状態なので現実的ではないだろう。</span>

### UpdateRandomが付与されるタイミング一覧

後々、書きます。
