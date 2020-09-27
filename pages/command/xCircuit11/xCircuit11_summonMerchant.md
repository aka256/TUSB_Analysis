---
title: サモンE：マーチャント実行
tags: [コマンド,スキル,召喚士]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-22 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit11/xCircuit11_summonMerchant.html
datatable2c: true
summary: 召喚士のスキルの1つであるサモンE：マーチャントを実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,10,-152)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群11]({{site.baseurl}}/command/xCircuit11/xCircuit11_command.html)

召喚士のスキルの1つであるサモンE：マーチャントを実行する。[TarpPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に[ネコキャッチ](#ネコキャッチ)を召喚する。

## コマンド群

<div class="datatable2c-begin"></div>

|No.|コマンド|
|:-:|-|
|1|/execute @a[score_ActivatedSkill_min=6010,score_ActivatedSkill=6019] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /playsound entity.villager.hurt master @a[r=16] ~ ~ ~ 1 0.5 0|
|2|/execute @a[score_ActivatedSkill_min=6010,score_ActivatedSkill=6019] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /particle happyVillager ~ ~1 ~ 0.5 0.5 0.5 0 30 force|
|3|(省略)|

<div class="datatable2c-end"></div>

<span class="expandButton" onClick="openCloseBE(`openHere1-begin`)">+</span>No.3のコマンド

<div class="openHere-begin openHere1-begin"></div>

```mcfunction
/execute @a[score_ActivatedSkill_min=6010,score_ActivatedSkill=6019] ~ ~ ~ /execute @e[r=6,tag=TrapPoint,c=1] ~ ~ ~ /summon Villager ~ ~ ~ {ArmorItems:[{},{},{},{id:minecraft:skull,Damage:3s,Count:0b}],CustomName:"ネコキャッチ",CustomNameVisible:true,Health:0.1f,Attributes:[{Name:"generic.maxHealth",Base:0.1d},{Name:"generic.movementSpeed",Base:0.2d}],CanPickUpLoot:false,Profession:2,Career:1,CareerLevel:100, Offers:{Recipes:[{maxUses:2147483647,rewardExp:false,buy:{id:wool,Count:4b,Damage:0s},sell:{id:torch,Count:1b,tag:{ench:[],HideFlags:16,display:{Lore:["§rアドベンチャーエリアでも設置できる。"],Name:"§4§lAdv.§f§l松明"},CanPlaceOn:["minecraft:stone","minecraft:grass","minecraft:dirt","minecraft:cobblestone","minecraft:planks","minecraft:sapling","minecraft:bedrock","minecraft:flowing_water","minecraft:water","minecraft:flowing_lava","minecraft:lava","minecraft:sand","minecraft:gravel","minecraft:gold_ore","minecraft:iron_ore","minecraft:coal_ore","minecraft:log","minecraft:leaves","minecraft:sponge","minecraft:glass","minecraft:lapis_ore","minecraft:lapis_block","minecraft:dispenser","minecraft:sandstone","minecraft:noteblock","minecraft:bed","minecraft:golden_rail","minecraft:detector_rail","minecraft:sticky_piston","minecraft:web","minecraft:tallgrass","minecraft:deadbush","minecraft:piston","minecraft:piston_head","minecraft:wool","minecraft:piston_extension","minecraft:yellow_flower","minecraft:red_flower","minecraft:brown_mushroom","minecraft:red_mushroom","minecraft:gold_block","minecraft:iron_block","minecraft:double_stone_slab","minecraft:stone_slab","minecraft:brick_block","minecraft:tnt","minecraft:bookshelf","minecraft:mossy_cobblestone","minecraft:obsidian","minecraft:torch","minecraft:fire","minecraft:mob_spawner","minecraft:oak_stairs","minecraft:chest","minecraft:redstone_wire","minecraft:diamond_ore","minecraft:diamond_block","minecraft:crafting_table","minecraft:wheat","minecraft:farmland","minecraft:furnace","minecraft:lit_furnace","minecraft:standing_sign","minecraft:wooden_door","minecraft:ladder","minecraft:rail","minecraft:stone_stairs","minecraft:wall_sign","minecraft:lever","minecraft:stone_pressure_plate","minecraft:iron_door","minecraft:wooden_pressure_plate","minecraft:redstone_ore","minecraft:lit_redstone_ore","minecraft:unlit_redstone_torch","minecraft:redstone_torch","minecraft:stone_button","minecraft:snow_layer","minecraft:ice","minecraft:snow","minecraft:cactus","minecraft:clay","minecraft:reeds","minecraft:jukebox","minecraft:fence","minecraft:pumpkin","minecraft:netherrack","minecraft:soul_sand","minecraft:glowstone","minecraft:portal","minecraft:lit_pumpkin","minecraft:cake","minecraft:unpowered_repeater","minecraft:powered_repeater","minecraft:stained_glass","minecraft:trapdoor","minecraft:monster_egg","minecraft:stonebrick","minecraft:brown_mushroom_block","minecraft:red_mushroom_block","minecraft:iron_bars","minecraft:glass_pane","minecraft:melon_block","minecraft:pumpkin_stem","minecraft:melon_stem","minecraft:vine","minecraft:fence_gate","minecraft:brick_stairs","minecraft:stone_brick_stairs","minecraft:mycelium","minecraft:waterlily","minecraft:nether_brick","minecraft:nether_brick_fence","minecraft:nether_brick_stairs","minecraft:nether_wart","minecraft:enchanting_table","minecraft:brewing_stand","minecraft:cauldron","minecraft:end_portal","minecraft:end_portal_frame","minecraft:end_stone","minecraft:dragon_egg","minecraft:redstone_lamp","minecraft:lit_redstone_lamp","minecraft:double_wooden_slab","minecraft:wooden_slab","minecraft:cocoa","minecraft:sandstone_stairs","minecraft:emerald_ore","minecraft:ender_chest","minecraft:tripwire_hook","minecraft:tripwire","minecraft:emerald_block","minecraft:spruce_stairs","minecraft:birch_stairs","minecraft:jungle_stairs","minecraft:command_block","minecraft:beacon","minecraft:cobblestone_wall","minecraft:flower_pot","minecraft:carrots","minecraft:potatoes","minecraft:wooden_button","minecraft:skull","minecraft:anvil","minecraft:trapped_chest","minecraft:light_weighted_pressure_plate","minecraft:heavy_weighted_pressure_plate","minecraft:unpowered_comparator","minecraft:powered_comparator","minecraft:daylight_detector","minecraft:redstone_block","minecraft:quartz_ore","minecraft:hopper","minecraft:quartz_block","minecraft:quartz_stairs","minecraft:activator_rail","minecraft:dropper","minecraft:stained_hardened_clay","minecraft:stained_glass_pane","minecraft:leaves2","minecraft:log2","minecraft:acacia_stairs","minecraft:dark_oak_stairs","minecraft:slime","minecraft:barrier","minecraft:iron_trapdoor","minecraft:prismarine","minecraft:sea_lantern","minecraft:hay_block","minecraft:carpet","minecraft:hardened_clay","minecraft:coal_block","minecraft:packed_ice","minecraft:double_plant","minecraft:standing_banner","minecraft:wall_banner","minecraft:daylight_detector_inverted","minecraft:red_sandstone","minecraft:red_sandstone_stairs","minecraft:double_stone_slab2","minecraft:stone_slab2","minecraft:spruce_fence_gate","minecraft:birch_fence_gate","minecraft:jungle_fence_gate","minecraft:dark_oak_fence_gate","minecraft:acacia_fence_gate","minecraft:spruce_fence","minecraft:birch_fence","minecraft:jungle_fence","minecraft:dark_oak_fence","minecraft:acacia_fence","minecraft:spruce_door","minecraft:birch_door","minecraft:jungle_door","minecraft:acacia_door","minecraft:dark_oak_door","minecraft:end_rod","minecraft:chorus_plant","minecraft:chorus_flower","minecraft:purpur_block","minecraft:purpur_pillar","minecraft:purpur_stairs","minecraft:purpur_double_slab","minecraft:purpur_slab","minecraft:end_bricks","minecraft:grass_path","minecraft:end_gateway","minecraft:structure_block"]},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:1b,Damage:0s},sell:{id:vine,Count:1b,tag:{ench:[],HideFlags:16,display:{Lore:["§rアドベンチャーエリアでも設置できる。"],Name:"§4§lAdv.§f§lつる"},CanPlaceOn:["minecraft:stone","minecraft:grass","minecraft:dirt","minecraft:cobblestone","minecraft:planks","minecraft:sapling","minecraft:bedrock","minecraft:flowing_water","minecraft:water","minecraft:flowing_lava","minecraft:lava","minecraft:sand","minecraft:gravel","minecraft:gold_ore","minecraft:iron_ore","minecraft:coal_ore","minecraft:log","minecraft:leaves","minecraft:sponge","minecraft:glass","minecraft:lapis_ore","minecraft:lapis_block","minecraft:dispenser","minecraft:sandstone","minecraft:noteblock","minecraft:bed","minecraft:golden_rail","minecraft:detector_rail","minecraft:sticky_piston","minecraft:web","minecraft:tallgrass","minecraft:deadbush","minecraft:piston","minecraft:piston_head","minecraft:wool","minecraft:piston_extension","minecraft:yellow_flower","minecraft:red_flower","minecraft:brown_mushroom","minecraft:red_mushroom","minecraft:gold_block","minecraft:iron_block","minecraft:double_stone_slab","minecraft:stone_slab","minecraft:brick_block","minecraft:tnt","minecraft:bookshelf","minecraft:mossy_cobblestone","minecraft:obsidian","minecraft:torch","minecraft:fire","minecraft:mob_spawner","minecraft:oak_stairs","minecraft:chest","minecraft:redstone_wire","minecraft:diamond_ore","minecraft:diamond_block","minecraft:crafting_table","minecraft:wheat","minecraft:farmland","minecraft:furnace","minecraft:lit_furnace","minecraft:standing_sign","minecraft:wooden_door","minecraft:ladder","minecraft:rail","minecraft:stone_stairs","minecraft:wall_sign","minecraft:lever","minecraft:stone_pressure_plate","minecraft:iron_door","minecraft:wooden_pressure_plate","minecraft:redstone_ore","minecraft:lit_redstone_ore","minecraft:unlit_redstone_torch","minecraft:redstone_torch","minecraft:stone_button","minecraft:snow_layer","minecraft:ice","minecraft:snow","minecraft:cactus","minecraft:clay","minecraft:reeds","minecraft:jukebox","minecraft:fence","minecraft:pumpkin","minecraft:netherrack","minecraft:soul_sand","minecraft:glowstone","minecraft:portal","minecraft:lit_pumpkin","minecraft:cake","minecraft:unpowered_repeater","minecraft:powered_repeater","minecraft:stained_glass","minecraft:trapdoor","minecraft:monster_egg","minecraft:stonebrick","minecraft:brown_mushroom_block","minecraft:red_mushroom_block","minecraft:iron_bars","minecraft:glass_pane","minecraft:melon_block","minecraft:pumpkin_stem","minecraft:melon_stem","minecraft:vine","minecraft:fence_gate","minecraft:brick_stairs","minecraft:stone_brick_stairs","minecraft:mycelium","minecraft:waterlily","minecraft:nether_brick","minecraft:nether_brick_fence","minecraft:nether_brick_stairs","minecraft:nether_wart","minecraft:enchanting_table","minecraft:brewing_stand","minecraft:cauldron","minecraft:end_portal","minecraft:end_portal_frame","minecraft:end_stone","minecraft:dragon_egg","minecraft:redstone_lamp","minecraft:lit_redstone_lamp","minecraft:double_wooden_slab","minecraft:wooden_slab","minecraft:cocoa","minecraft:sandstone_stairs","minecraft:emerald_ore","minecraft:ender_chest","minecraft:tripwire_hook","minecraft:tripwire","minecraft:emerald_block","minecraft:spruce_stairs","minecraft:birch_stairs","minecraft:jungle_stairs","minecraft:command_block","minecraft:beacon","minecraft:cobblestone_wall","minecraft:flower_pot","minecraft:carrots","minecraft:potatoes","minecraft:wooden_button","minecraft:skull","minecraft:anvil","minecraft:trapped_chest","minecraft:light_weighted_pressure_plate","minecraft:heavy_weighted_pressure_plate","minecraft:unpowered_comparator","minecraft:powered_comparator","minecraft:daylight_detector","minecraft:redstone_block","minecraft:quartz_ore","minecraft:hopper","minecraft:quartz_block","minecraft:quartz_stairs","minecraft:activator_rail","minecraft:dropper","minecraft:stained_hardened_clay","minecraft:stained_glass_pane","minecraft:leaves2","minecraft:log2","minecraft:acacia_stairs","minecraft:dark_oak_stairs","minecraft:slime","minecraft:barrier","minecraft:iron_trapdoor","minecraft:prismarine","minecraft:sea_lantern","minecraft:hay_block","minecraft:carpet","minecraft:hardened_clay","minecraft:coal_block","minecraft:packed_ice","minecraft:double_plant","minecraft:standing_banner","minecraft:wall_banner","minecraft:daylight_detector_inverted","minecraft:red_sandstone","minecraft:red_sandstone_stairs","minecraft:double_stone_slab2","minecraft:stone_slab2","minecraft:spruce_fence_gate","minecraft:birch_fence_gate","minecraft:jungle_fence_gate","minecraft:dark_oak_fence_gate","minecraft:acacia_fence_gate","minecraft:spruce_fence","minecraft:birch_fence","minecraft:jungle_fence","minecraft:dark_oak_fence","minecraft:acacia_fence","minecraft:spruce_door","minecraft:birch_door","minecraft:jungle_door","minecraft:acacia_door","minecraft:dark_oak_door","minecraft:end_rod","minecraft:chorus_plant","minecraft:chorus_flower","minecraft:purpur_block","minecraft:purpur_pillar","minecraft:purpur_stairs","minecraft:purpur_double_slab","minecraft:purpur_slab","minecraft:end_bricks","minecraft:grass_path","minecraft:end_gateway","minecraft:structure_block"]},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:16b,Damage:0s},sell:{id:ender_eye,Count:1b,tag:{ench:[],display:{Lore:["§rアドベンチャーエリアでも設置できる。"],Name:"§4§lAdv.§f§lエンダーアイ"},CanPlaceOn:["minecraft:end_portal_frame"]},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:4b,Damage:0s},sell:{id:wooden_sword,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:2b,Damage:0s},sell:{id:snowball,Count:16b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:4b,Damage:0s},sell:{id:carrot_on_a_stick,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:4b,Damage:0s},sell:{id:arrow,Count:32b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:8b,Damage:0s},sell:{id:bow,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:bone,Count:2b,Damage:0s},sell:{id:bread,Count:1b,tag:{display:{Name:"§r§l大きなパン"}},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:gunpowder,Count:1b,Damage:0s},buyB:{id:rotten_flesh,Count:1b,Damage:0s},sell:{id:potion,Count:1b,tag:{Potion:healing,HideFlags:32,display:{Name:"§a§l薬草エキス"}},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:spider_eye,Count:2b,Damage:0s},sell:{id:potion,Count:1b,tag:{CustomPotionEffects:[{Duration:0,Id:19b,Amplifier:127b}],HideFlags:32,display:{Name:"§d§l毒消草エキス"}},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:ghast_tear,Count:1b,Damage:0s},buyB:{id:rabbit_foot,Count:1b,Damage:0s},sell:{id:dye,Count:1b,tag:{display:{Name:"§b§lすばやさの種"},AttributeModifiers:[{UUIDMost:2L,UUIDLeast:1L,Amount:0.8d,Slot:offhand,AttributeName:generic.movementSpeed,Operation:1,Name:SpeedSeed}]},Damage:3s}},{maxUses:2147483647,rewardExp:false,buy:{id:bone,Count:2b,Damage:0s},buyB:{id:slime_ball,Count:2b,Damage:0s},sell:{id:leather_helmet,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:gunpowder,Count:6b,Damage:0s},buyB:{id:slime_ball,Count:6b,Damage:0s},sell:{id:leather_chestplate,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:rotten_flesh,Count:4b,Damage:0s},buyB:{id:slime_ball,Count:4b,Damage:0s},sell:{id:leather_leggings,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:spider_eye,Count:2b,Damage:0s},buyB:{id:slime_ball,Count:2b,Damage:0s},sell:{id:leather_boots,Count:1b,Damage:0s}}]}}
```

<div class="openHere-end openHere1-end"></div>

## 詳細

- **`ActivatedSkill`が6010 ~ 6019**であるすべてのプレイヤーから、**半径6m以内の1体の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)に対し**、以下の事柄を実行

1. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)から半径16m以内のすべてのプレイヤーに、効果音を鳴らす
2. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に、パーティクルを表示
3. 対象の[TrapPoint]({{site.baseurl}}/entity/entity_entity.html#trappoint)の座標上に、**[ネコキャッチ](#ネコキャッチ)を召喚**

### ネコキャッチ

<span class="expandButton" onClick="openCloseBE(`openHere2-begin`)">+</span>summonコマンド

<div class="openHere-begin openHere2-begin"></div>

```mcfunction
/summon Villager ~ ~ ~ {ArmorItems:[{},{},{},{id:minecraft:skull,Damage:3s,Count:0b}],CustomName:"ネコキャッチ",CustomNameVisible:true,Health:0.1f,Attributes:[{Name:"generic.maxHealth",Base:0.1d},{Name:"generic.movementSpeed",Base:0.2d}],CanPickUpLoot:false,Profession:2,Career:1,CareerLevel:100, Offers:{Recipes:[{maxUses:2147483647,rewardExp:false,buy:{id:wool,Count:4b,Damage:0s},sell:{id:torch,Count:1b,tag:{ench:[],HideFlags:16,display:{Lore:["§rアドベンチャーエリアでも設置できる。"],Name:"§4§lAdv.§f§l松明"},CanPlaceOn:["minecraft:stone","minecraft:grass","minecraft:dirt","minecraft:cobblestone","minecraft:planks","minecraft:sapling","minecraft:bedrock","minecraft:flowing_water","minecraft:water","minecraft:flowing_lava","minecraft:lava","minecraft:sand","minecraft:gravel","minecraft:gold_ore","minecraft:iron_ore","minecraft:coal_ore","minecraft:log","minecraft:leaves","minecraft:sponge","minecraft:glass","minecraft:lapis_ore","minecraft:lapis_block","minecraft:dispenser","minecraft:sandstone","minecraft:noteblock","minecraft:bed","minecraft:golden_rail","minecraft:detector_rail","minecraft:sticky_piston","minecraft:web","minecraft:tallgrass","minecraft:deadbush","minecraft:piston","minecraft:piston_head","minecraft:wool","minecraft:piston_extension","minecraft:yellow_flower","minecraft:red_flower","minecraft:brown_mushroom","minecraft:red_mushroom","minecraft:gold_block","minecraft:iron_block","minecraft:double_stone_slab","minecraft:stone_slab","minecraft:brick_block","minecraft:tnt","minecraft:bookshelf","minecraft:mossy_cobblestone","minecraft:obsidian","minecraft:torch","minecraft:fire","minecraft:mob_spawner","minecraft:oak_stairs","minecraft:chest","minecraft:redstone_wire","minecraft:diamond_ore","minecraft:diamond_block","minecraft:crafting_table","minecraft:wheat","minecraft:farmland","minecraft:furnace","minecraft:lit_furnace","minecraft:standing_sign","minecraft:wooden_door","minecraft:ladder","minecraft:rail","minecraft:stone_stairs","minecraft:wall_sign","minecraft:lever","minecraft:stone_pressure_plate","minecraft:iron_door","minecraft:wooden_pressure_plate","minecraft:redstone_ore","minecraft:lit_redstone_ore","minecraft:unlit_redstone_torch","minecraft:redstone_torch","minecraft:stone_button","minecraft:snow_layer","minecraft:ice","minecraft:snow","minecraft:cactus","minecraft:clay","minecraft:reeds","minecraft:jukebox","minecraft:fence","minecraft:pumpkin","minecraft:netherrack","minecraft:soul_sand","minecraft:glowstone","minecraft:portal","minecraft:lit_pumpkin","minecraft:cake","minecraft:unpowered_repeater","minecraft:powered_repeater","minecraft:stained_glass","minecraft:trapdoor","minecraft:monster_egg","minecraft:stonebrick","minecraft:brown_mushroom_block","minecraft:red_mushroom_block","minecraft:iron_bars","minecraft:glass_pane","minecraft:melon_block","minecraft:pumpkin_stem","minecraft:melon_stem","minecraft:vine","minecraft:fence_gate","minecraft:brick_stairs","minecraft:stone_brick_stairs","minecraft:mycelium","minecraft:waterlily","minecraft:nether_brick","minecraft:nether_brick_fence","minecraft:nether_brick_stairs","minecraft:nether_wart","minecraft:enchanting_table","minecraft:brewing_stand","minecraft:cauldron","minecraft:end_portal","minecraft:end_portal_frame","minecraft:end_stone","minecraft:dragon_egg","minecraft:redstone_lamp","minecraft:lit_redstone_lamp","minecraft:double_wooden_slab","minecraft:wooden_slab","minecraft:cocoa","minecraft:sandstone_stairs","minecraft:emerald_ore","minecraft:ender_chest","minecraft:tripwire_hook","minecraft:tripwire","minecraft:emerald_block","minecraft:spruce_stairs","minecraft:birch_stairs","minecraft:jungle_stairs","minecraft:command_block","minecraft:beacon","minecraft:cobblestone_wall","minecraft:flower_pot","minecraft:carrots","minecraft:potatoes","minecraft:wooden_button","minecraft:skull","minecraft:anvil","minecraft:trapped_chest","minecraft:light_weighted_pressure_plate","minecraft:heavy_weighted_pressure_plate","minecraft:unpowered_comparator","minecraft:powered_comparator","minecraft:daylight_detector","minecraft:redstone_block","minecraft:quartz_ore","minecraft:hopper","minecraft:quartz_block","minecraft:quartz_stairs","minecraft:activator_rail","minecraft:dropper","minecraft:stained_hardened_clay","minecraft:stained_glass_pane","minecraft:leaves2","minecraft:log2","minecraft:acacia_stairs","minecraft:dark_oak_stairs","minecraft:slime","minecraft:barrier","minecraft:iron_trapdoor","minecraft:prismarine","minecraft:sea_lantern","minecraft:hay_block","minecraft:carpet","minecraft:hardened_clay","minecraft:coal_block","minecraft:packed_ice","minecraft:double_plant","minecraft:standing_banner","minecraft:wall_banner","minecraft:daylight_detector_inverted","minecraft:red_sandstone","minecraft:red_sandstone_stairs","minecraft:double_stone_slab2","minecraft:stone_slab2","minecraft:spruce_fence_gate","minecraft:birch_fence_gate","minecraft:jungle_fence_gate","minecraft:dark_oak_fence_gate","minecraft:acacia_fence_gate","minecraft:spruce_fence","minecraft:birch_fence","minecraft:jungle_fence","minecraft:dark_oak_fence","minecraft:acacia_fence","minecraft:spruce_door","minecraft:birch_door","minecraft:jungle_door","minecraft:acacia_door","minecraft:dark_oak_door","minecraft:end_rod","minecraft:chorus_plant","minecraft:chorus_flower","minecraft:purpur_block","minecraft:purpur_pillar","minecraft:purpur_stairs","minecraft:purpur_double_slab","minecraft:purpur_slab","minecraft:end_bricks","minecraft:grass_path","minecraft:end_gateway","minecraft:structure_block"]},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:1b,Damage:0s},sell:{id:vine,Count:1b,tag:{ench:[],HideFlags:16,display:{Lore:["§rアドベンチャーエリアでも設置できる。"],Name:"§4§lAdv.§f§lつる"},CanPlaceOn:["minecraft:stone","minecraft:grass","minecraft:dirt","minecraft:cobblestone","minecraft:planks","minecraft:sapling","minecraft:bedrock","minecraft:flowing_water","minecraft:water","minecraft:flowing_lava","minecraft:lava","minecraft:sand","minecraft:gravel","minecraft:gold_ore","minecraft:iron_ore","minecraft:coal_ore","minecraft:log","minecraft:leaves","minecraft:sponge","minecraft:glass","minecraft:lapis_ore","minecraft:lapis_block","minecraft:dispenser","minecraft:sandstone","minecraft:noteblock","minecraft:bed","minecraft:golden_rail","minecraft:detector_rail","minecraft:sticky_piston","minecraft:web","minecraft:tallgrass","minecraft:deadbush","minecraft:piston","minecraft:piston_head","minecraft:wool","minecraft:piston_extension","minecraft:yellow_flower","minecraft:red_flower","minecraft:brown_mushroom","minecraft:red_mushroom","minecraft:gold_block","minecraft:iron_block","minecraft:double_stone_slab","minecraft:stone_slab","minecraft:brick_block","minecraft:tnt","minecraft:bookshelf","minecraft:mossy_cobblestone","minecraft:obsidian","minecraft:torch","minecraft:fire","minecraft:mob_spawner","minecraft:oak_stairs","minecraft:chest","minecraft:redstone_wire","minecraft:diamond_ore","minecraft:diamond_block","minecraft:crafting_table","minecraft:wheat","minecraft:farmland","minecraft:furnace","minecraft:lit_furnace","minecraft:standing_sign","minecraft:wooden_door","minecraft:ladder","minecraft:rail","minecraft:stone_stairs","minecraft:wall_sign","minecraft:lever","minecraft:stone_pressure_plate","minecraft:iron_door","minecraft:wooden_pressure_plate","minecraft:redstone_ore","minecraft:lit_redstone_ore","minecraft:unlit_redstone_torch","minecraft:redstone_torch","minecraft:stone_button","minecraft:snow_layer","minecraft:ice","minecraft:snow","minecraft:cactus","minecraft:clay","minecraft:reeds","minecraft:jukebox","minecraft:fence","minecraft:pumpkin","minecraft:netherrack","minecraft:soul_sand","minecraft:glowstone","minecraft:portal","minecraft:lit_pumpkin","minecraft:cake","minecraft:unpowered_repeater","minecraft:powered_repeater","minecraft:stained_glass","minecraft:trapdoor","minecraft:monster_egg","minecraft:stonebrick","minecraft:brown_mushroom_block","minecraft:red_mushroom_block","minecraft:iron_bars","minecraft:glass_pane","minecraft:melon_block","minecraft:pumpkin_stem","minecraft:melon_stem","minecraft:vine","minecraft:fence_gate","minecraft:brick_stairs","minecraft:stone_brick_stairs","minecraft:mycelium","minecraft:waterlily","minecraft:nether_brick","minecraft:nether_brick_fence","minecraft:nether_brick_stairs","minecraft:nether_wart","minecraft:enchanting_table","minecraft:brewing_stand","minecraft:cauldron","minecraft:end_portal","minecraft:end_portal_frame","minecraft:end_stone","minecraft:dragon_egg","minecraft:redstone_lamp","minecraft:lit_redstone_lamp","minecraft:double_wooden_slab","minecraft:wooden_slab","minecraft:cocoa","minecraft:sandstone_stairs","minecraft:emerald_ore","minecraft:ender_chest","minecraft:tripwire_hook","minecraft:tripwire","minecraft:emerald_block","minecraft:spruce_stairs","minecraft:birch_stairs","minecraft:jungle_stairs","minecraft:command_block","minecraft:beacon","minecraft:cobblestone_wall","minecraft:flower_pot","minecraft:carrots","minecraft:potatoes","minecraft:wooden_button","minecraft:skull","minecraft:anvil","minecraft:trapped_chest","minecraft:light_weighted_pressure_plate","minecraft:heavy_weighted_pressure_plate","minecraft:unpowered_comparator","minecraft:powered_comparator","minecraft:daylight_detector","minecraft:redstone_block","minecraft:quartz_ore","minecraft:hopper","minecraft:quartz_block","minecraft:quartz_stairs","minecraft:activator_rail","minecraft:dropper","minecraft:stained_hardened_clay","minecraft:stained_glass_pane","minecraft:leaves2","minecraft:log2","minecraft:acacia_stairs","minecraft:dark_oak_stairs","minecraft:slime","minecraft:barrier","minecraft:iron_trapdoor","minecraft:prismarine","minecraft:sea_lantern","minecraft:hay_block","minecraft:carpet","minecraft:hardened_clay","minecraft:coal_block","minecraft:packed_ice","minecraft:double_plant","minecraft:standing_banner","minecraft:wall_banner","minecraft:daylight_detector_inverted","minecraft:red_sandstone","minecraft:red_sandstone_stairs","minecraft:double_stone_slab2","minecraft:stone_slab2","minecraft:spruce_fence_gate","minecraft:birch_fence_gate","minecraft:jungle_fence_gate","minecraft:dark_oak_fence_gate","minecraft:acacia_fence_gate","minecraft:spruce_fence","minecraft:birch_fence","minecraft:jungle_fence","minecraft:dark_oak_fence","minecraft:acacia_fence","minecraft:spruce_door","minecraft:birch_door","minecraft:jungle_door","minecraft:acacia_door","minecraft:dark_oak_door","minecraft:end_rod","minecraft:chorus_plant","minecraft:chorus_flower","minecraft:purpur_block","minecraft:purpur_pillar","minecraft:purpur_stairs","minecraft:purpur_double_slab","minecraft:purpur_slab","minecraft:end_bricks","minecraft:grass_path","minecraft:end_gateway","minecraft:structure_block"]},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:16b,Damage:0s},sell:{id:ender_eye,Count:1b,tag:{ench:[],display:{Lore:["§rアドベンチャーエリアでも設置できる。"],Name:"§4§lAdv.§f§lエンダーアイ"},CanPlaceOn:["minecraft:end_portal_frame"]},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:4b,Damage:0s},sell:{id:wooden_sword,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:2b,Damage:0s},sell:{id:snowball,Count:16b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:4b,Damage:0s},sell:{id:carrot_on_a_stick,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:4b,Damage:0s},sell:{id:arrow,Count:32b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:torch,Count:8b,Damage:0s},sell:{id:bow,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:bone,Count:2b,Damage:0s},sell:{id:bread,Count:1b,tag:{display:{Name:"§r§l大きなパン"}},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:gunpowder,Count:1b,Damage:0s},buyB:{id:rotten_flesh,Count:1b,Damage:0s},sell:{id:potion,Count:1b,tag:{Potion:healing,HideFlags:32,display:{Name:"§a§l薬草エキス"}},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:spider_eye,Count:2b,Damage:0s},sell:{id:potion,Count:1b,tag:{CustomPotionEffects:[{Duration:0,Id:19b,Amplifier:127b}],HideFlags:32,display:{Name:"§d§l毒消草エキス"}},Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:ghast_tear,Count:1b,Damage:0s},buyB:{id:rabbit_foot,Count:1b,Damage:0s},sell:{id:dye,Count:1b,tag:{display:{Name:"§b§lすばやさの種"},AttributeModifiers:[{UUIDMost:2L,UUIDLeast:1L,Amount:0.8d,Slot:offhand,AttributeName:generic.movementSpeed,Operation:1,Name:SpeedSeed}]},Damage:3s}},{maxUses:2147483647,rewardExp:false,buy:{id:bone,Count:2b,Damage:0s},buyB:{id:slime_ball,Count:2b,Damage:0s},sell:{id:leather_helmet,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:gunpowder,Count:6b,Damage:0s},buyB:{id:slime_ball,Count:6b,Damage:0s},sell:{id:leather_chestplate,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:rotten_flesh,Count:4b,Damage:0s},buyB:{id:slime_ball,Count:4b,Damage:0s},sell:{id:leather_leggings,Count:1b,Damage:0s}},{maxUses:2147483647,rewardExp:false,buy:{id:spider_eye,Count:2b,Damage:0s},buyB:{id:slime_ball,Count:2b,Damage:0s},sell:{id:leather_boots,Count:1b,Damage:0s}}]}}
```

<div class="openHere-end openHere2-end"></div>

|-|-|
|Name|ネコキャッチ|
|Type|Villager|
|Health|0.1|