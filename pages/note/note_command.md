---
title: About command
tags: []
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-10 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: note/note_spawner.html
search: exclude
---

## NBTタグ系

### Amplifierと/effect

ステータス効果はLv.0からLv.255まであり、`/effect`ではこの値を代入することによりそれに適応した値のレベルの効果を得られる。しかし、ステータス効果のレベルを保存する`Amplifier`はbyte型であるので0 ~ 127をLv.0 ~ Lv.127とし、-128 ~ -1をLv.128 ~ Lv.255としている。
`Amplifier`をunsigned byteと解釈すればよい。
