---
title: 夜駆実行
tags: [コマンド,スキル,忍者]
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-08-28 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: command/xCircuit9/xCircuit9_yogake.html
datatable3c: true
summary: 忍者のスキルの1つである夜駆を実行する。
summaryDisable: true
---

## About

<span class="tagYellow">位置</span> (-1920,14,-171)

<span class="tagBlack">呼び出し元</span> [毎tick実行するコマンド群9]({{site.baseurl}}/command/xCircuit9/xCircuit9_command.html)

忍者のスキルの1つである夜駆を実行する。

## コマンド群

<div class="datatable3c-begin"></div>

|No.|コマンド|状態|
|:-:|-|-|
|1|/scoreboard players tag @a[score_ActivatedSkill_min=2080,score_ActivatedSkill=2089] add Yogake|
|2|/execute @a[tag=Yogake] ~ ~ ~ /playsound entity.zombie.unfect master @a[r=16] ~ ~ ~ 1 2 0|
|3|/execute @a[tag=Yogake] ~ ~ ~ /particle explode ~ ~1.6 ~ 0 0.1 0 0.1 30 force|
|4|/time query daytime|
|5|/scoreboard players operation #Random Global += #18000 Const|
|6|/scoreboard players operation #Random Global %= #24000 Const|
|7|/scoreboard players operation #Random Global -= #12000 Const|
|8|/effect @a[tag=Yogake] minecraft:night_vision 60 0|
|9|/scoreboard players test #Random Global -9500 9500|条件付き|
|10|/effect @a[tag=Yogake] minecraft:night_vision 60 1|条件付き|
|11|/scoreboard players test #Random Global -8500 8500|条件付き|
|12|/effect @a[tag=Yogake] minecraft:absorption 60 0|条件付き|
|13|/scoreboard players test #Random Global -7500 7500|条件付き|
|14|/effect @a[tag=Yogake] minecraft:absorption 60 1|条件付き|
|15|/effect @a[tag=Yogake] minecraft:haste 60 0|条件付き|
|16|/scoreboard players test #Random Global -6500 6500|条件付き|
|17|/effect @a[tag=Yogake] minecraft:night_vision 60 2|条件付き|
|18|/effect @a[tag=Yogake] minecraft:haste 60 1|条件付き|
|19|/effect @a[tag=Yogake] minecraft:resistance 60 0|条件付き|
|20|/scoreboard players test #Random Global -5500 5500|条件付き|
|21|/effect @a[tag=Yogake] minecraft:absorption 60 2|条件付き|
|22|/effect @a[tag=Yogake] minecraft:resistance 60 1|条件付き|
|23|/scoreboard players test #Random Global -4500 4500|条件付き|
|24|/effect @a[tag=Yogake] minecraft:haste 60 2|条件付き|
|25|/scoreboard players test #Random Global -3500 3500|条件付き|
|26|/effect @a[tag=Yogake] minecraft:night_vision 60 3|条件付き|
|27|/effect @a[tag=Yogake] minecraft:resistance 60 2|条件付き|
|28|/scoreboard players test #Random Global -2500 2500|条件付き|
|29|/effect @a[tag=Yogake] minecraft:absorption 60 3|条件付き|
|30|/scoreboard players test #Random Global -1500 1500|条件付き|
|31|/effect @a[tag=Yogake] minecraft:haste 60 3|条件付き|
|32|/scoreboard players test #Random Global -500 500|条件付き|
|33|/effect @a[tag=Yogake] minecraft:resistance 60 3|条件付き|
|34|/scoreboard players tag @a[tag=Yogake] remove Yogake|

<div class="datatable3c-end"></div>

### No.4のコマンドブロックについて

No.4 のコマンドブロックには、以下のデータタグが付与されている。

```mcfunction
CommandStats:{QueryResultName:"#Random",QueryResultObjective:"Global"}
```

## 詳細

1. **`ActivatedSkill`が2080 ~ 2089**であるすべてのプレイヤーに、`Yogake`を付与
2. `Yogake`を持つすべてのプレイヤーから、**半径16m以内**のすべてのプレイヤーに、**効果音を鳴らす**
3. `Yogake`を持つすべてのプレイヤーの座標上で、**パーティクルを表示**
4. ゲーム内時間から計算した結果を、`#Random`の`Globla`に保存(計算結果は[夜駆レベルとdaytimeの関係](#夜駆レベルとdaytimeの関係)の`#Random`を参照)

$$
\text{#Random} = (\text{daytime} + 18000)\bmod 24000 -12000
$$

5. `#Random`の値によって、**`Yogake`を持つすべてのプレイヤーに効果を60秒間付与**([#Randomと効果の関係](#randomと効果の関係)を参照)
6. `Yogake`を持つすべてのプレイヤーから`Yogake`を削除

### #Randomと効果の関係

|レベル|#Random|暗視|衝撃吸収|移動速度上昇|耐性|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|-12000 ~ -9501, 9501 ~ 12000|Lv.1|
|2|-9050 ~ -8501, 8501 ~ 9500|Lv.2|
|3|-8500 ~ -7501, 7501 ~ 8500|Lv.2|Lv.1|
|4|-7500 ~ -6501, 6501 ~ 7500|Lv.2|Lv.2|Lv.1|
|5|-6500 ~ -5501, 5501 ~ 6500|Lv.3|Lv.2|Lv.2|Lv.1|
|6|-5500 ~ -4501, 4501 ~ 5500|Lv.3|Lv.3|Lv.2|Lv.2|
|7|-4500 ~ -3501, 3501 ~ 4500|Lv.3|Lv.3|Lv.3|Lv.2|
|8|-3500 ~ -2501, 2501 ~ 3500|Lv.4|Lv.3|Lv.3|Lv.3|
|9|-2500 ~ -1501, 1501 ~ 2500|Lv.4|Lv.4|Lv.4|Lv.3|
|10|-1500 ~ -501, 501 ~ 1500|Lv.4|Lv.4|Lv.4|Lv.3|
|11|-500 ~ 500|Lv.4|Lv.4|Lv.4|Lv.4|

### 夜駆レベルとdaytimeの関係

<canvas id="myLineChart"></canvas>
<script>
const xs = [];
for(let i=0;i<=24000;i+=200){
  xs.push(i);
}
function calc_ys(xs){
  return xs.map(x=>(x+18000)%24000-12000);
}
function calc_daytime(){
  return xs.map(x=>{
    if(x>=0 && x<=12000){
      return 12000;
    }else{
      return ;
    }
  });
}
function calc_sunset(){
  return xs.map(x=>{
    if(x>=12000 && x<=13000){
      return 12000;
    }else{
      return ;
    }
  });
}
function calc_nighttime(){
  return xs.map(x=>{
    if(x>=13000 && x<=23000){
      return 12000;
    }else{
      return ;
    }
  });
}
function calc_sunrise(){
  return xs.map(x=>{
    if(x>=23000 && x<=24000){
      return 12000;
    }else{
      return ;
    }
  });
}
function calc_yogakelevel(){
  return calc_ys(xs).map(x=>{
    if(Math.abs(x)>=9500 && Math.abs(x)<=12000){
      return 1;
    }else if(Math.abs(x)>=8500 && Math.abs(x)<=9500){
      return 2;
    }else if(Math.abs(x)>=7500 && Math.abs(x)<=8500){
      return 3;
    }else if(Math.abs(x)>=6500 && Math.abs(x)<=7500){
      return 4;
    }else if(Math.abs(x)>=5500 && Math.abs(x)<=6500){
      return 5;
    }else if(Math.abs(x)>=4500 && Math.abs(x)<=5500){
      return 6;
    }else if(Math.abs(x)>=3500 && Math.abs(x)<=4500){
      return 7;
    }else if(Math.abs(x)>=2500 && Math.abs(x)<=3500){
      return 8;
    }else if(Math.abs(x)>=1500 && Math.abs(x)<=2500){
      return 9;
    }else if(Math.abs(x)>=500 && Math.abs(x)<=1500){
      return 10;
    }else{
      return 11;
    }
  });
}
var ctx = document.getElementById("myLineChart").getContext('2d');
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: xs,
    datasets: [
    {
      label: `夜駆レベル`,
      data: calc_yogakelevel(),
      yAxisID: "2",
      fill: false,
      borderColor: "rgba(255,0,0,1)",
      pointRadius: 0,
      borderWidth: 2
    },
    {
      label: '#Random',
      data: calc_ys(xs),
      steppedLine: true,
      yAxisID: "1",
      pointRadius: 0,
      borderWidth: 2
    },
    {
      fill: `start`,
      label: `Daytime`,
      data: calc_daytime(),
      lineTension:0,
      borderColor: "rgba(0,191,255,1)", //deepskyblue
      backgroundColor: "rgba(0,191,255,0.2)",
      pointRadius: 0,
      borderWidth: 1,
      yAxisID: "1"
    },
    {
      fill: `start`,
      label: `Sunset`,
      data: calc_sunset(),
      lineTension:0,
      borderColor: "rgba(100,149,237,1)", //cornflowerblue
      backgroundColor: "rgba(100,149,237,0.2)",
      pointRadius: 0,
      borderWidth: 1,
      yAxisID: "1"
    },
    {
      fill: `start`,
      label: `Nighttime`,
      data: calc_nighttime(),
      lineTension:0,
      borderColor: "rgba(112,128,144,1)", //slategray
      backgroundColor: "rgba(112,128,144,0.2)",
      pointRadius: 0,
      borderWidth: 1,
      yAxisID: "1"
    },
    {
      fill: `start`,
      label: `Sunrise`,
      data: calc_sunrise(),
      lineTension:0,
      borderColor: "rgba(70,130,180,1)", //steelblue
      backgroundColor: "rgba(70,130,180,0.2)",
      pointRadius: 0,
      borderWidth: 1,
      yAxisID: "1"
    }
    ]
  },
  options: {
    title: {
      display: false,
      text: 'daytimeと#Random'
    },
    scales: {
      xAxes: [{
        ticks: {
          callback: function(value) {return ((value % 3000) == 0)? value + `tick` : ''},
          min: 0,
          max: 24000,
          maxTicksLimit: 24
        }
      }],
      yAxes: [{
        id: `1`,
        type: `linear`,
        position: `right`,
        ticks: {
          stepSize: 3000
        },
        gridLines: {
          drawOnChartArea: false,
        },
      },{
        id: `2`,
        type: `linear`,
        position: `left`,
        ticks: {
          stepSize: 1,
          callback: function(value) {return `Lv.`+value;}
        }
      }]
    },
    elements: {
      line: {
          tension: 0, // ベジェ曲線を無効にする
      }
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem,data){
          if(tooltipItem.datasetIndex==0){
            return data.datasets[tooltipItem.datasetIndex].label+`: `+`Lv.`+tooltipItem.yLabel;
          }else if(tooltipItem.datasetIndex==1){
            return data.datasets[tooltipItem.datasetIndex].label+`: `+tooltipItem.yLabel + `tick`;
          }else{
            return data.datasets[tooltipItem.datasetIndex].label;
          }
        },
        title: function(array,data){
          return array[0].xLabel+`tick`;
        }
      }
    }
  }
});
</script>
