/**
 * 折り畳み表示
 * 'openHere'というクラスに属するオブジェクトをインライン要素or非表示に変更する。
 */
function openClose(className) {
    var obj = document.getElementsByClassName(className);
    var tar = event.target;
    for (var i = 0; i < obj.length; i++) {
        //非表示ならインライン要素に変更。表示状態なら非表示に変更。
        if (obj[i].style.display == "inline-block") {
            obj[i].style.display = "none";
        } else {
            obj[i].style.display = "inline-block";
        }
    }
    if (tar.innerHTML == "+") {
        tar.innerHTML = "-";
    } else {
        tar.innerHTML = "+";
    }
}

function openCloseBE(className) {
    var obj = document.getElementsByClassName(className);
    var endName = className.replace("-begin", "") + "-end"
    var tar = event.target;
    for (var i = 0; i < obj.length; i++) {
        var next = obj[i].nextElementSibling;
        while (!next.classList.contains(endName)) {
            if (next.style.display == "none" || tar.innerHTML == "+") {
                next.style.display = "inline-block";
            } else if (next.style.display == "inline-block" || tar.innerHTML == "-") {
                next.style.display = "none";
            }
            next = next.nextElementSibling;
        }
    }
    if (tar.innerHTML == "+") {
        tar.innerHTML = "-";
    } else {
        tar.innerHTML = "+";
    }
}

function openCloseBE1(className) {
    var obj = document.getElementsByClassName(className);
    var endName = className.replace("-begin", "") + "-end"
    var tar = event.target;
    for (var i = 0; i < obj.length; i++) {
        var next = obj[i].nextElementSibling;
        childrenPro(next);
    }
    if (tar.innerHTML == "+") {
        tar.innerHTML = "-";
    } else {
        tar.innerHTML = "+";
    }

    function childrenPro(target) {
        /*
          try {
              var a = target.classList;
          } catch (e) {
              return;
          }*/
        var tagList = ["THEAD"];
        for (var i = 0; i < tagList.length; i++) {
            if (target.tagName == tagList[i]) {
                return;
            }
        }
        while (!target.classList.contains(endName)) {
            if (target.style.display == "none" || tar.innerHTML == "+") {
                target.style.display = "inline-block";
            } else if (target.style.display == "inline-block" || tar.innerHTML == "-") {
                target.style.display = "none";
            }
            child = target.children;
            if (child) {
                childrenPro(child[0]);
            }
            target = target.nextElementSibling;
            if (!target) {
                break;
            }
        }
    }
}

/**
 * ロード前にopenHere-BeginからopenHere-End間の要素をdisplay:none;に設定
 */
window.addEventListener('load', function() {
    var open = document.getElementsByClassName("openHere-begin");

    for (var i = 0; i < open.length; i++) {
        var next = open[i].nextElementSibling;
        while (!next.classList.contains("openHere-end")) {
            next.style.display = "none";
            next = next.nextElementSibling;
        }
    }
    //console.log("DOMContentLoadedイベントが実行されました。");
});