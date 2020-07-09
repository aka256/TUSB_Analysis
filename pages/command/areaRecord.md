---
title: エリア侵入記録
tags: [コマンド,アイテム,表示,ディメンション,スキル,地下世界,テーブルマウンテン,ガリバーランド,トカルトコルデ]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域,お試しセットの印玉,地下世界,テーブルマウンテン,ガリバーランド,トカルトコルデ,ディメンション
last_updated: 2020/6/19
update: 2020-06-19 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: areaRecord.html
folder: command
datatable4cnp: true
---

<span class="label label-primary">位置 (-1920,9,-200)</span>

## About

Overworld内のディメンション移動の際の侵入記録を行う。また、その際にスキルの設定を変える、[お試しセットの印玉](TUSB_Analysis_Item.html#お試しセットの印玉)を渡すなどの処理も行っている。

## コマンド群

<div class="datatable4cnp-begin"></div>

|No.|コマンド|コメント|状態|
|:-:|:-|:-|:-|
|1|/execute @a[score_AreaTitleFlag_min=1,score_AreaTitleFlag=1,c=1] ~ ~ ~ /scoreboard players tag @e[-1920,6,-193,dx=0,type=AreaEffectCloud,tag=!Enter] add Enter|エリア侵入記録||
|2|/execute @a[score_AreaTitleFlag_min=10,score_AreaTitleFlag=10,c=1] ~ ~ ~ /scoreboard players tag @e[-1920,6,-194,dx=0,type=AreaEffectCloud,tag=!Enter] add Enter|||
|3|/execute @a[score_AreaTitleFlag_min=11,score_AreaTitleFlag=11,c=1] ~ ~ ~ /scoreboard players tag @e[-1920,6,-195,dx=0,type=AreaEffectCloud,tag=!Enter] add Enter|||
|4|/execute @a[score_AreaTitleFlag_min=12,score_AreaTitleFlag=12,c=1] ~ ~ ~ /scoreboard players tag @e[-1920,6,-196,dx=0,type=AreaEffectCloud,tag=!Enter] add Enter|||
|5|/execute @a[score_AreaTitleFlag_min=13,score_AreaTitleFlag=13,c=1] ~ ~ ~ /scoreboard players tag @e[-1920,6,-197,dx=0,type=AreaEffectCloud,tag=!Enter] add Enter|||
|6|/execute @a[score_AreaTitleFlag_min=-100] ~ ~1 ~ /tp @a[c=1] @e[r=4,tag=ViewPoint,c=1]|||
|7|/scoreboard players reset @a[score_AreaTitleFlag_min=-100] InstantChangeA|エリア移動時スキル設定無効化||
|8|/scoreboard players reset @a[score_AreaTitleFlag_min=-100] InstantChangeB|||
|9|/scoreboard players reset @a[score_AreaTitleFlag_min=-100] ModeChangeA|||
|10|/scoreboard players reset @a[score_AreaTitleFlag_min=-100] ModeChangeB|||
|11|長いので下に移動|||
|12|/tellraw @a[-2725,88,-382,r=2,score_AreaTitleFlag_min=10,score_AreaTitleFlag=10,tag=TrialSet] {"translate":"* %1\$s を受け取った。","with":[{"text":"お試しセットの印玉","color":"aqua"}]}||条件付き|
|13|/scoreboard players tag @a[-2725,88,-382,r=2,score_AreaTitleFlag_min=10,score_AreaTitleFlag=10,tag=TrialSet] remove TrialSet||条件付き|
|14|/scoreboard players set @a[score_AreaTitleFlag_min=-100] AreaTitleFlag -999|||

<div class="datatable4cnp-end"></div>

No.11

```minecraftcommand
/give @a[-2725,88,-382,r=2,score_AreaTitleFlag_min=10,score_AreaTitleFlag=10,tag=TrialSet] minecraft:spawn_egg 1 0 {display:{Name:"§bお試しセットの印玉",Lore:["§rモードスキル用お試しセットが入っている。","§rなくなったら交易島のアルバイトから買おう。"]},ench:[],EntityTag:{id:Bat,DeathTime:19s,ActiveEffects:[{Id:7b,Duration:100,Amplifier:5b,ShowParticles:false},{Id:14b,Duration:100,Amplifier:0b,ShowParticles:false}],Tags:[RewardEgg,TypeChecked],DeathLootTable:"usb:signs/skillkit"},CanPlaceOn:["minecraft:stone","minecraft:grass","minecraft:dirt","minecraft:cobblestone","minecraft:planks","minecraft:sapling","minecraft:bedrock","minecraft:flowing_water","minecraft:water","minecraft:flowing_lava","minecraft:lava","minecraft:sand","minecraft:gravel","minecraft:gold_ore","minecraft:iron_ore","minecraft:coal_ore","minecraft:log","minecraft:leaves","minecraft:sponge","minecraft:glass","minecraft:lapis_ore","minecraft:lapis_block","minecraft:dispenser","minecraft:sandstone","minecraft:noteblock","minecraft:bed","minecraft:golden_rail","minecraft:detector_rail","minecraft:sticky_piston","minecraft:web","minecraft:tallgrass","minecraft:deadbush","minecraft:piston","minecraft:piston_head","minecraft:wool","minecraft:piston_extension","minecraft:yellow_flower","minecraft:red_flower","minecraft:brown_mushroom","minecraft:red_mushroom","minecraft:gold_block","minecraft:iron_block","minecraft:double_stone_slab","minecraft:stone_slab","minecraft:brick_block","minecraft:tnt","minecraft:bookshelf","minecraft:mossy_cobblestone","minecraft:obsidian","minecraft:torch","minecraft:fire","minecraft:mob_spawner","minecraft:oak_stairs","minecraft:chest","minecraft:redstone_wire","minecraft:diamond_ore","minecraft:diamond_block","minecraft:crafting_table","minecraft:wheat","minecraft:farmland","minecraft:furnace","minecraft:lit_furnace","minecraft:standing_sign","minecraft:wooden_door","minecraft:ladder","minecraft:rail","minecraft:stone_stairs","minecraft:wall_sign","minecraft:lever","minecraft:stone_pressure_plate","minecraft:iron_door","minecraft:wooden_pressure_plate","minecraft:redstone_ore","minecraft:lit_redstone_ore","minecraft:unlit_redstone_torch","minecraft:redstone_torch","minecraft:stone_button","minecraft:snow_layer","minecraft:ice","minecraft:snow","minecraft:cactus","minecraft:clay","minecraft:reeds","minecraft:jukebox","minecraft:fence","minecraft:pumpkin","minecraft:netherrack","minecraft:soul_sand","minecraft:glowstone","minecraft:portal","minecraft:lit_pumpkin","minecraft:cake","minecraft:unpowered_repeater","minecraft:powered_repeater","minecraft:stained_glass","minecraft:trapdoor","minecraft:monster_egg","minecraft:stonebrick","minecraft:brown_mushroom_block","minecraft:red_mushroom_block","minecraft:iron_bars","minecraft:glass_pane","minecraft:melon_block","minecraft:pumpkin_stem","minecraft:melon_stem","minecraft:vine","minecraft:fence_gate","minecraft:brick_stairs","minecraft:stone_brick_stairs","minecraft:mycelium","minecraft:waterlily","minecraft:nether_brick","minecraft:nether_brick_fence","minecraft:nether_brick_stairs","minecraft:nether_wart","minecraft:enchanting_table","minecraft:brewing_stand","minecraft:cauldron","minecraft:end_portal","minecraft:end_portal_frame","minecraft:end_stone","minecraft:dragon_egg","minecraft:redstone_lamp","minecraft:lit_redstone_lamp","minecraft:double_wooden_slab","minecraft:wooden_slab","minecraft:cocoa","minecraft:sandstone_stairs","minecraft:emerald_ore","minecraft:ender_chest","minecraft:tripwire_hook","minecraft:tripwire","minecraft:emerald_block","minecraft:spruce_stairs","minecraft:birch_stairs","minecraft:jungle_stairs","minecraft:command_block","minecraft:beacon","minecraft:cobblestone_wall","minecraft:flower_pot","minecraft:carrots","minecraft:potatoes","minecraft:wooden_button","minecraft:skull","minecraft:anvil","minecraft:trapped_chest","minecraft:light_weighted_pressure_plate","minecraft:heavy_weighted_pressure_plate","minecraft:unpowered_comparator","minecraft:powered_comparator","minecraft:daylight_detector","minecraft:redstone_block","minecraft:quartz_ore","minecraft:hopper","minecraft:quartz_block","minecraft:quartz_stairs","minecraft:activator_rail","minecraft:dropper","minecraft:stained_hardened_clay","minecraft:stained_glass_pane","minecraft:leaves2","minecraft:log2","minecraft:acacia_stairs","minecraft:dark_oak_stairs","minecraft:slime","minecraft:barrier","minecraft:iron_trapdoor","minecraft:prismarine","minecraft:sea_lantern","minecraft:hay_block","minecraft:carpet","minecraft:hardened_clay","minecraft:coal_block","minecraft:packed_ice","minecraft:double_plant","minecraft:standing_banner","minecraft:wall_banner","minecraft:daylight_detector_inverted","minecraft:red_sandstone","minecraft:red_sandstone_stairs","minecraft:double_stone_slab2","minecraft:stone_slab2","minecraft:spruce_fence_gate","minecraft:birch_fence_gate","minecraft:jungle_fence_gate","minecraft:dark_oak_fence_gate","minecraft:acacia_fence_gate","minecraft:spruce_fence","minecraft:birch_fence","minecraft:jungle_fence","minecraft:dark_oak_fence","minecraft:acacia_fence","minecraft:spruce_door","minecraft:birch_door","minecraft:jungle_door","minecraft:acacia_door","minecraft:dark_oak_door","minecraft:end_rod","minecraft:chorus_plant","minecraft:chorus_flower","minecraft:purpur_block","minecraft:purpur_pillar","minecraft:purpur_stairs","minecraft:purpur_double_slab","minecraft:purpur_slab","minecraft:end_bricks","minecraft:grass_path","minecraft:end_gateway","minecraft:structure_block"],HideFlags:16}
```

## 詳細

1. `AreaTitleFlag`の値に対応した`Enter`の持っていないエリアエフェクトクラウドに`Enter`を付与(以下の表参照)
2. `AreaTitleFlag`が-100以上であるプレイヤー一人選択し、プレイヤーの1m上に4m以内にいる`ViewPoint`を持つエンティティ([ViewPoint(仮)](TUSB_Analysis_Entity.html#viewpoint(仮)))を移動
3. `AreaTitleFlag`が-100以上であるプレイヤーの`InstantChangeA`、`InstantChangeB`、`ModeChangeA`、`ModeChangeB`をそれぞれ0に設定
4. (-2725,88,-382)から2m以内(スキル設定所入口)にいて`AreaTitleFlag`が10であり、`TrialSet`を持つプレイヤーが存在したら、[お試しセットの印玉](TUSB_Analysis_Item.html#お試しセットの印玉)を与え以下の事柄を実行
   1. [お試しセットの印玉](TUSB_Analysis_Item.html#お試しセットの印玉)を受け取ったというメッセージを表示
   2. `TrialSet`を削除
5. `AreaTitleFlag`が-100以上であるプレイヤーの`AreaTitleFlag`を-999に設定

|AreaTitleFlag|AreaEffectCloudName|
|:-:|:-:|
|1|[地下世界](TUSB_Analysis_Entity.html#地下世界)|
|10|[クラウディア](TUSB_Analysis_Entity.html#クラウディア)|
|11|[テーブルマウンテン](TUSB_Analysis_Entity.html#テーブルマウンテン)|
|12|[ガリバーランド](TUSB_Analysis_Entity.html#ガリバーランド)|
|13|[トカルトコルデ](TUSB_Analysis_Entity.html#トカルトコルデ)|
