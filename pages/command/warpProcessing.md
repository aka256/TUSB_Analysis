---
title: ワープ処理ジョブ島・通常世界
tags: [コマンド,表示,職業]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,チュートリアル,ジョブ変更申請書,ブラジル
last_updated: 2020/6/19
update: 2020-06-19 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: warpProcessing.html
folder: command
datatable3cnp: true
---

<span class="label label-primary">位置 (-1920,15,-192)</span>

## About

初回ログイン時のチュートリアルの処理、初回に配られるジョブ変更申請用紙、ブラジル行きの穴の処理などを行う。

## コマンド群

<div class="datatable3cnp-begin"></div>

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

<div class="datatable3cnp-end"></div>

## 詳細

1. `WarpByJob`を持つプレイヤーの`TutorialRead`を0に設定
2. `WarpByJob`を持ち、`TutorialRead`が524286以下であるプレイヤーにチュートリアルが読めていない旨のメッセージを表示し、(-1911.0 114.0 -136.0)(初期リス地点)に移動させ、`WarpByJob`を削除
3. `WarpBuJob`を持ち、`Job`が0以下であるプレイヤーにジョブ変更申請書を与え、(-1786,113,-137,-90,0)(職業島入口)に移動
4. `WarpBuJob`を持ち、`Job`が1以上であるプレイヤーを(0,5,2,-90,-30)(通常世界)に移動
5. `WarpByJob`を持つプレイヤーから`WarpByJob`を削除
