---
title: About GMBook
tags: []
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-07-10 09:00:00 +0000
sidebar: mydoc_sidebar
permalink: command/note/note_GMBook.html
search: exclude
---

This is GMBook data.

```minecraftcommand
{Motion:[0:-5.944105349618759E-150d,1:-0.0d,2:-2.2567945239087242E-150d],UUIDLeast:-6782892726351715483L,Health:5s,Invulnerable:0b,Air:300s,OnGround:1b,Dimension:0,PortalCooldown:0,Rotation:[0:159.55319f,1:0.0f],Thrower:"aka_12",FallDistance:0.0f,Item:{
  id:"minecraft:written_book",
  Count:1b,
  tag:{pages:[0:"
  {
    \"color\":\"black\",
    \"extra\":[
    {
      \"bold\":true,
      \"color\":\"dark_aqua\",
      \"clickEvent\":
      {
        \"action\":\"run_command\",
        \"value\":\"/scoreboard players set @p SkillLockFlag 100\"
      },
      \"hoverEvent\":
      {
        \"action\":\"show_text\",
        \"value\":
        {
          \"text\":\"３秒間スペクテイターモードになる\"
        }
      },
      \"text\":\"SP \"
    },
    {
      \"bold\":true,
      \"color\":\"dark_gray\",
      \"clickEvent\":
      {
        \"action\":\"run_command\",
        \"value\":\"/tp @p ~ ~10 ~\"
      },
      \"hoverEvent\":
      {
        \"action\":\"show_text\",
        \"value\":
        {
          \"text\":\"10ブロック上へ行く\"
        }
      },
      \"text\":\"↑ \"
    },
    {
      \"bold\":true,
      \"color\":\"dark_gray\",
      \"clickEvent\":
      {
        \"action\":\"run_command\",
        \"value\":\"/tp @p ~ ~-10 ~\"
      },
      \"hoverEvent\":
      {
        \"action\":\"show_text\",
        \"value\":
        {
          \"text\":\"10ブロック下へ行く\"
        }
      },
      \"text\":\"↓\n\"
    },
    {
      \"color\":\"green\",
      \"clickEvent\":
      {
        \"action\":\"run_command\",
        \"value\":\"/spawnpoint\"
      },
      \"hoverEvent\":
      {
        \"action\":\"show_text\",
        \"value\":
        {
          \"text\":\"今いる座標をﾘｽﾎﾟｰﾝ地点に設定する\"
        }
      },
      \"text\":\"[ﾘｽﾎﾟｰﾝ地点設定]\"
    },
    {
      \"bold\":true,
      \"color\":\"black\",
      \"hoverEvent\":
      {
        \"action\":\"show_text\",\"value\":
        {
          \"text\":\"ゲームモードを変える\"
        }
      },
      \"text\":\" GM \"
    },
    {
      \"bold\":true,
      \"color\":\"black\",
      \"clickEvent\":
      {
        \"action\":\"run_command\",
        \"value\":\"/tellraw @p 
        {
          \\"text\\":\\"-S\\",
          \\"color\\":\\"gold\\",
          \\"clickEvent\\":
          {
            \\"action\\":\\"run_command\\",
            \\"value\\":\\"/gamemode 0\\"
          }
        }
        \"
      },
      \"hoverEvent\":
      {
        \"action\":\"show_text\",
        \"value\":
        {
          \"text\":\"サバイバル\"
        }
      },
      \"text\":\"0\"
    },
    {
      \"color\":\"black\",
      \"text\":\"/\"
    },
    {
      \"bold\":true,
      \"color\":\"black\",
      \"clickEvent\":
      {
        \"action\":\"run_command\",
        \"value\":\"/tellraw @p 
        {
          \\"text\\":\\"-C\\",
          \\"color\\":\\"aqua\\",
          \\"clickEvent\\":
          {
            \\"action\\":\\"run_command\\",
            \\"value\\":\\"/gamemode 1\\"
          }
        }\"
      },
      \"hoverEvent\":
      {
        \"action\":\"show_text\",
        \"value\":
        {
          \"text\":\"クリエイティブ\"
        }
      },
      \"text\":\"1\"
    },
    {
      \"color\":\"black\",
      \"text\":\"/\"
    },
    {
      \"bold\":true,
      \"color\":\"black\",
      \"clickEvent\":
      {
        \"action\":\"run_command\",
        \"value\":\"/tellraw @p 
        {
          \\"text\\":\\"-A\\",
          \\"color\\":\\"blue\\",
          \\"clickEvent\\":
          {
            \\"action\\":\\"run_command\\",
            \\"value\\":\\"/gamemode 2\\"
          }
        }\"
      },
      \"hoverEvent\":
      {
        \"action\":\"show_text\",
        \"value\":
        {
          \"text\":\"アドベンチャー\"
        }
      },
      \"text\":\"2\"
    },
    {
      \"color\":\"black\",
      \"text\":\"/\"
    },
    {
      \"bold\":true,
      \"color\":\"black\",
      \"clickEvent\":
      {
        \"action\":\"run_command\",
        \"value\":\"/tellraw @p 
        {
          \\"text\\":\\"-SP\\",
          \\"color\\":\\"red\\",
          \\"clickEvent\\":
          {
            \\"action\\":\\"run_command\\",
            \\"value\\":\\"/gamemode 3\\"
          }
        }
        \"
      },
      \"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"スペクテイター\"}},\"text\":\"3\n\"},{\"color\":\"dark_red\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] -1910 14 -80 180 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"全システムの中枢\n絶対破壊禁止区域\"}},\"text\":\"X回路区域\n\"},{\"color\":\"blue\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"方角等を解析する際に\"}},\"text\":\"[方角変更] \"},{\"bold\":true,\"color\":\"dark_gray\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p ~ ~ ~ 0 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"South方角:0\"}},\"text\":\"+Z\"},{\"color\":\"black\",\"text\":\"/\"},{\"bold\":true,\"color\":\"dark_gray\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p ~ ~ ~ 90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"West方角:90\"}},\"text\":\"-X\"},{\"color\":\"black\",\"text\":\"/\"},{\"bold\":true,\"color\":\"dark_gray\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p ~ ~ ~ 180 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"North方角:180\"}},\"text\":\"-Z\"},{\"color\":\"black\",\"text\":\"/\"},{\"bold\":true,\"color\":\"dark_gray\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p ~ ~ ~ 270 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"East方角:270\"}},\"text\":\"+X\n\"},{\"color\":\"gray\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] -1906 113 -137 90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"最初に訪れる島\"}},\"text\":\"△チュートリアル島\n\"},{\"color\":\"gray\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] -1780 113 -137 -90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"職業を決める旅立ちの島\"}},\"text\":\"△職業島\n\"},{\"color\":\"dark_gray\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] 0 5 2 -90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"スカイブロックのメインワールド\"}},\"text\":\"○通常世界\n\"},{\"color\":\"dark_gray\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] -59 15 19 270 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"多くの村人が住む島\"}},\"text\":\"○交易島\n\"},{\"color\":\"red\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] -2725 89 -382 90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"スキルを設定する為の部屋\"}},\"text\":\"△スキル設定所\n\"},{\"color\":\"dark_blue\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] 882 21 -226 -45 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"きのこ島から行ける\n非常に暗い地下世界\"}},\"text\":\"○地下世界\n\"},{\"color\":\"gold\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] -40 70 755 -90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"自分の体が縮み\n周りの物が大きく見える世界\"}},\"text\":\"△ガリバーランド\n\"},{\"color\":\"green\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] 24 19 -1829 180 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"とても大きな岩の中に出来た\nアドベンチャーダンジョンマップ\"}},\"text\":\"△テーブルマウンテン\n\"},{\"color\":\"aqua\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] 1317 213 1561 0 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"旧文明の遺産が残る\n極寒の土地\"}},\"text\":\"△トカルトコルデ\n\"},{\"color\":\"gray\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] -2480 7 -140 -90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"雲の上に浮かぶ\n天空の世界\"}},\"text\":\"△クラウディア\n\"}],\"text\":\"\u003d通常ﾃﾞｨﾒﾝｼﾞｮﾝ間\u003d  \"}",
  1:"{\"color\":\"black\",\"extra\":[{\"bold\":true,\"color\":\"dark_blue\",\"text\":\"地下世界\n\"},{\"color\":\"dark_blue\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] 1050 4 34 -90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"地下世界最大のダンジョン\"}},\"text\":\" ダンジョン\n\"},{\"color\":\"dark_blue\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] 1252 4 213 -90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"中に小さな集落のある\nとても大きなキノコ\"}},\"text\":\" 巨大キノコ\n\"},{\"bold\":true,\"color\":\"green\",\"text\":\"テーブルマウンテン\n\"},{\"color\":\"green\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] 24 5 -2154 180 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"テーブルマウンテンへの入り口\"}},\"text\":\" 麓\n\"},{\"color\":\"green\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] 5 248 -2145 180 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"テーブルマウンテンの頂上\"}},\"text\":\" 頂上\n\"},{\"bold\":true,\"color\":\"aqua\",\"text\":\"トカルト\n\"},{\"color\":\"aqua\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] 1970 96 1560 180 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"虫の巣食う採掘跡地\"}},\"text\":\" 氷鉄蟻塚\n\"},{\"color\":\"aqua\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] 1932 97 2400 0 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"洞窟に出来た大きな街\"}},\"text\":\" ねじ巻きの村\n\"},{\"color\":\"aqua\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] 2400 240 1500 90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"貴重な資源が眠っている地\"}},\"text\":\" 採掘所\n\"},{\"color\":\"aqua\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] 1350 70 2295 0 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"湖にそびえ立つ機械の城\"}},\"text\":\" トカルト城\n\"}],\"text\":\"\u003d別ﾃﾞｨﾒﾝｼﾞｮﾝ間\u003d\n\n\"}",
  2:"{\"color\":\"black\",\"extra\":[{\"color\":\"gray\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] 36 47 7 0 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"地獄へと続くネザーポータル\"}},\"text\":\"○通常\u003eネザーポータル\n\"},{\"color\":\"red\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension\u003d-1] -302 23 879 -90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"地獄のアスレチック\"}},\"text\":\"▲ネザーアスレ\n\"},{\"color\":\"red\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension\u003d-1] -513 139 803 90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"アスレクリア後に訪れる場所\"}},\"text\":\"▲ネザーアスレ報酬地点\n\"},{\"color\":\"dark_red\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension\u003d-1] -1935 117.5 -66.5 -90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"地獄の迷宮\"}},\"text\":\"●ネザーダンジョン\n\"},{\"color\":\"dark_red\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension\u003d-1] -1859.5 79 -53 0 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"ボス部屋\"}},\"text\":\"●ネザーダンジョン 最深部\n\"},{\"color\":\"red\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension\u003d-1] 0 30 -5 0 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"通常世界帰還用\"}},\"text\":\"●ネザー\u003e通常 ポータル\n\n\"},{\"color\":\"gray\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d0,score_USBDimension\u003d99] 21.5 215 -40.5 0 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"終焉へと続くエンドポータル\"}},\"text\":\"○通常\u003eエンド ポータル\n\"},{\"color\":\"black\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d100] 100 50 0 90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"最終ディメンジョン\"}},\"text\":\"▲ジ・エンド\n\"},{\"color\":\"black\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d100] -1183 70 9 90 0\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"最終ダンジョン\"}},\"text\":\"▲ジ・エンド 城\n\"},{\"color\":\"black\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/tp @p[r\u003d2,score_USBDimension_min\u003d100] -1378 198 9 -90 45\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"通常世界帰還用\"}},\"text\":\"▲エンド\u003e通常 ポータル\n\"}],\"text\":\"\u003dﾈｻﾞｰ・ｴﾝﾄﾞ間\u003d\n\n\"}"],
  HideFlags:63,
  author:"製作者用",
  title:"GM本 =移動の書=",
  resolved:1b},
Damage:0s},
UUIDMost:-895564721097718785L,Pos:[0:-1871.881952625867d,1:4.0625d,2:-81.45397864954136d],PickupDelay:0s,Fire:-1s,Tags:[0:"TypeChecked"],Age:650s}
```
