---
title: キャリー付き乗算シミュレーション
keywords: TUSB,The Unusual Skyblock,スカイブロック,コマンド,解析,X回路区域
update: 2020-09-27 09:21:00 +0000
sidebar: mydoc_sidebar
permalink: note/note_mwc.html
datatable: true
summary: キャリー付き乗算のシミュレーションを行う。
summaryDisable: true
tocLimit: h2
---

## 使い方

乱数列の初項\\(x_1\\)とキャリーの初項\\(c_1\\)を入力することにより、それ以降の乱数列\\(x_n\\)を自動的に計算する。また、\\(m\\)に値を入力することにより、\\(x_n\\)との剰余の列である\\(y_n\\)を計算する。

なお、TUSBでは\\(a=31743\\)、\\(b=65536\\)となる。また、ソロプレイでの初回ログイン時の`#GameTime`の`Global`が\\(7171674\\)であると仮定すると、\\(x_1,c_1=7171674\mod b=28250\\)となる。詳しくは[乱数解説]({{site.baseurl}}/note/note_random.html)を参照。

### 計算式

$$
x_n =(a\times x_{n-1}+c_{n-1})\mod b\\
c_n =\lfloor \frac{a\times x_{n-1}+c_{n-1}}{b}\rfloor\\
y_n = x_n\mod m
$$

<span class="expandButton" onClick="openCloseBE(`openHere1-begin`)">+</span>制限

<div class="openHere-begin openHere1-begin"></div>

\\(
0\leq x_1\leq 100000,~~
0\leq c_1\leq 100000,~~
0\leq a,~~
0\leq b,~~
0\leq m,~~
1\leq \text{表示数}\leq 1000
\\)

<div class="openHere-end openHere1-end"></div>

## キャリー付き乗算シミュレーション

<div class="box-list" style="display: flex; list-style: none; flex-flow: row; padding: 0px; justify-content: space-evenly; border-style: dashed; border-color: gray;border-radius: 10px;background-color: #cccccc;">
  <div style="text-align: left; padding:20px; display: flex; flex-direction: column; justify-content: space-around; order:2;">
    <strong>フィルタ</strong>
    <label style="flex-grow: 1;"><input type="checkbox" name="display" value="mwc" checked onclick="togledisplay('MWCC',this.checked);" style="margin-right:10px;">MWCによる乱数列</label><br>
    <label style="flex-grow: 1;"><input type="checkbox" name="display" value="mod" checked onclick="togledisplay('MWCMC',this.checked);" style="margin-right:10px;">MWC列の剰余</label><br>
    <label style="flex-grow: 1;"><input type="checkbox" name="display" value="modtable" checked onclick="togledisplay('MWCMT',this.checked);" style="margin-right:10px;">MWC列の剰余の表</label>
  </div>
  <div style="padding: 20px; flex-grow:2; order:1; border-right-style:dashed; border-right-color:gray;">
    <strong>パラメータ</strong>
    <div style="display: flex; flex-direction: row; justify-content:space-around;padding-bottom: 20px; height:100%;">
      <div style="padding:0px;display: flex; flex-direction:column; justify-content: space-between;" align="right">
        <div><label for="x0">\(x_1\):</label><input type="number" id="x0" name="x0" value="28250" min="0" max="100000" style="width:5em; margin-left:10px;"></div>
        <div><label for="a">\(a\):</label><input type="number" id="a" name="a" value="31743" min="0" style="width:5em; margin-left:10px;"></div>
        <div><label for="mod">\(m\):</label><input type="number" id="mod" name="mod" value="10" min="0" style="width:5em; margin-left:10px;"></div>
      </div>
      <div style="padding:0px; display: flex; flex-direction:column; justify-content: space-between;" align="right">
        <div><label for="c0">\(c_1\):</label><input type="number" id="c0" name="c0" value="28250" min="0" max="100000" style="width:5em; margin-left:10px;"></div>
        <div><label for="b">\(b\):</label><input type="number" id="b" name="b" value="65536"  min="0" style="width:5em; margin-left:10px;"></div>
        <div><label for="limit">表示数:</label><input type="number" id="limit" name="limit" value="100" max="1000" min="1" style="width:5em; margin-left:10px;"></div>
      </div>
    </div>
  </div>
</div>

<div id="MWCC">
<canvas id="MWCChart"></canvas>
</div>
<div id="MWCMC">
<canvas id="MWCMODChart"></canvas>
</div>
<div id="MWCMT">
<div class="datatable-begin"></div>
<table id="datatable" class="cell-border compact stripe">
<thead>
  <tr><th style="text-align: center;">\(y_n\)</th><th style="text-align: center;">Count</th><th style="text-align: center;">Rate [%]</th></tr>
</thead>
</table>
<div class="datatable-end"></div>
</div>
<script>
//var limit = 100;
var x0 = Number(document.getElementById("x0").value);
var c0 = Number(document.getElementById("c0").value);
var mod = Number(document.getElementById("mod").value);
var limit = Number(document.getElementById("limit").value);
var a = Number(document.getElementById("a").value);
var b = Number(document.getElementById("b").value);
//var a = 31743;
//var b = 65536;
var xs = [];
for(let i=0;i<limit;i++){
  xs.push(i);
}
function calc_MWC(x,c){
  let l = [x];
  for(let i = 1;i<limit;i++){
    l.push((a*l[i-1]+c)%b);
    c = Math.floor((a*l[i-1]+c)/b);
    //console.log(l);
  }
  return l;
}
function calc_MWCMOD(x,c){
  let l = calc_MWC(x,c);
  for(let i = 0;i<limit;i++){
    l[i] = l[i]%mod;
    //console.log(l);
  }
  return l;
}
function drawMWC(){
  var ctx = document.getElementById("MWCChart");
  if (typeof ChartMWC !== 'undefined' && ChartMWC) {
    ChartMWC.destroy();
  }
  window.ChartMWC = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xs,
      datasets: [
      {
        label: 'x_n',
        data: calc_MWC(x0,c0)
      }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'MWCによる乱数列'
      },
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: true,
            min: 0,
            max: limit-1,
            maxTicksLimit: 10
          }
        }],
        yAxes: [{
          ticks: {
            suggestedMax: 70000,
            suggestedMin: 0,
            stepSize: 5000
          }
        }]
      }
    }
  });
}
function drawMWCMOD(){
  var ctx2 = document.getElementById("MWCMODChart");
  if (typeof ChartMOD !== 'undefined' && ChartMOD) {
    ChartMOD.destroy();
  }
  window.ChartMOD = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: xs,
      datasets: [
      {
        label: 'y_n',
        data: calc_MWCMOD(x0,c0)
      }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'MWC列の剰余'
      },
      scales: {
        xAxes: [{
          ticks: {
            min: 0,
            max: limit-1,
            maxTicksLimit: 10
          }
        }],
        yAxes: [{
          ticks: {
            suggestedMin: 0,
            stepSize: 1
          }
        }]
      }
    }
  });
}
drawMWCMOD();
drawMWC();
$('input[id="x0"]').bind('input', function () {
  x0 = Number(document.getElementById("x0").value);
  drawMWC();
  drawMWCMOD();
  genTable()
});
$('input[id="c0"]').bind('input', function () {
  c0 = Number(document.getElementById("c0").value);
  drawMWC();
  drawMWCMOD();
  genTable()
});
$('input[id="a"]').bind('input', function () {
  a = Number(document.getElementById("a").value);
  drawMWC();
  drawMWCMOD();
  genTable()
});
$('input[id="b"]').bind('input', function () {
  b = Number(document.getElementById("b").value);
  drawMWC();
  drawMWCMOD();
  genTable()
});
$('input[id="mod"]').bind('input', function () {
  mod = Number(document.getElementById("mod").value);
  drawMWCMOD();
  genTable()
});
$('input[id="limit"]').bind('input', function () {
  limit = Number(document.getElementById("limit").value);
  if(limit>1000){
    limit = 1000;
    document.getElementById("limit").value = 1000;
  }
  xs = [];
  for(let i=0;i<=limit;i++){
    xs.push(i);
  }
  drawMWC();
  drawMWCMOD();
  genTable()
});
function togledisplay(id, ischecked ) {
  if(ischecked){
    document.getElementById(id).style ="display:block;";
  }
  else{
    document.getElementById(id).style = "display:none;";
  }
}/*
function genTable(){
  var tableEle = document.getElementById('datatable');
  var tbody = document.getElementById('datatablebody');
  if(tbody){
    tbody.remove();
  }
  tbody = document.createElement('tbody');
  tbody.id = "datatablebody";
  x0 = Number(document.getElementById("x0").value);
  c0 = Number(document.getElementById("c0").value);
  mod = Number(document.getElementById("mod").value);
  limit = Number(document.getElementById("limit").value);
  modl = calc_MWCMOD(x0,c0);
  var arr = Array(mod);
  arr.fill(0);
  for(var i = 0;i<limit;i++){
    arr[modl[i]]++;
  }
  for (var i = 0; i < mod; i++) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    td1.innerHTML = i;
    tr.appendChild(td1);
    td2.innerHTML = arr[i];
    tr.appendChild(td2);
    td3.innerHTML = arr[i]/limit*100;
    tr.appendChild(td3);
    tbody.appendChild(tr);
  }
  tableEle.appendChild(tbody);
}
genTable()*/
function genTable(){
  var table =  $('#datatable').DataTable();
  x0 = Number(document.getElementById("x0").value);
  c0 = Number(document.getElementById("c0").value);
  mod = Number(document.getElementById("mod").value);
  limit = Number(document.getElementById("limit").value);
  modl = calc_MWCMOD(x0,c0);
  var arr = Array(mod);
  var l = Array(mod);
  arr.fill(0);
  for(var i = 0;i<limit;i++){
    arr[modl[i]]++;
  }
  for(var i = 0;i<mod;i++){
    var tmparr = Array(3);
    tmparr[0] = i;
    tmparr[1] = arr[i];
    tmparr[2] = Math.round(arr[i]/limit*10000)/100;
    l[i] = tmparr;
  }
  //console.log(l);
  table.clear();
  table.rows.add(l).draw();
  /*
  table({
    "data": l
  });*/
  //table.fixedColumns.update();
  table.rows().invalidate().draw();
  /*$('#datatable').DataTable( {
    "columns": [
      {
        className: 'dt-body-center'
      },{
        className: 'dt-body-center'
      },{
        className: 'dt-body-center'
      }
    ]
  });*/
}
genTable();
</script>
