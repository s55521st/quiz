let que = document.getElementById("que");
let res = document.getElementById("res");
let logo = document.getElementById("logo");
let A = document.getElementById("A");
let B = document.getElementById("B");
let C = document.getElementById("C");
let D = document.getElementById("D");
let text1 = document.getElementById("Ataku");
let text2 = document.getElementById("Btaku");
let text3 = document.getElementById("Ctaku");
let text4 = document.getElementById("Dtaku");
let cnt = 40;
let num = 0;
let num2 = 0;
let sco = 0;
let flag = true;
function change() {
  if (num2 < 1) {
    taku2();
    num2 = 1;
  } else if (num2 < 2) {
    taku3();
    num2 = 2;
  } else if (num2 < 3) {
    taku4();
    num2 = 3;
  } else if (num2 < 4) {
    taku5();
    num2 = 4;
  } else if (num2 < 5) {
    taku6();
    num2 = 5;
  } else if (num2 < 6) {
    taku7();
    num2 = 6;
  } else if (num2 < 7) {
    taku8();
    num2 = 7;
  } else if (num2 < 8) {
    taku9();
    num2 = 8;
  } else if (num2 < 9) {
    taku10();
  }
}
function taku2() {//A
  Ataku.src = "img/taku2.png";
  Btaku.src = "img/taku1.png";
  Ctaku.src = "img/taku4.png";
  Dtaku.src = "img/taku8.png";
}
function taku3() {//C
  Ataku.src = "img/taku10.png";
  Btaku.src = "img/taku7.png";
  Ctaku.src = "img/taku3.png";
  Dtaku.src = "img/taku6.png";
}
function taku4() {//D
  Ataku.src = "img/taku1.png";
  Btaku.src = "img/taku9.png";
  Ctaku.src = "img/taku7.png";
  Dtaku.src = "img/taku4.png";
}
function taku5() {//A
  Ataku.src = "img/taku5.png";
  Btaku.src = "img/taku2.png";
  Ctaku.src = "img/taku9.png";
  Dtaku.src = "img/taku7.png";
}
function taku6() {//A
  Ataku.src = "img/taku6.png";
  Btaku.src = "img/taku3.png";
  Ctaku.src = "img/taku10.png";
  Dtaku.src = "img/taku9.png";
}
function taku7() {//D
  Ataku.src = "img/taku2.png";
  Btaku.src = "img/taku8.png";
  Ctaku.src = "img/taku10.png";
  Dtaku.src = "img/taku7.png";
}
function taku8() {//C
  Ataku.src = "img/taku4.png";
  Btaku.src = "img/taku7.png";
  Ctaku.src = "img/taku8.png";
  Dtaku.src = "img/taku2.png";
}
function taku9() {//A
  Ataku.src = "img/taku9.png";
  Btaku.src = "img/taku3.png";
  Ctaku.src = "img/taku2.png";
  Dtaku.src = "img/taku1.png";
}
function taku10() {//B
  Ataku.src = "img/taku1.png";
  Btaku.src = "img/taku10.png";
  Ctaku.src = "img/taku3.png";
  Dtaku.src = "img/taku6.png";
}
let time = setInterval(() => {
  if (cnt > 0) {
    cnt--;
    res.textContent = "スコア：" + sco + " | 時間 : " + cnt + "秒";
  } else {
    que.style.color = "red";
    res.textContent = "結果　" + "スコア：" + sco;
    que.textContent = "時間切れ!";
    flag = false;
    clearInterval(time);
  }
}, 1000);
let max = 10;
let name = new Array(max);
name = [
  "Youtubu",
  "Mixer",
  "Twitch",
  "Twitter",
  "Instagram",
  "Facebook",
  "Discord",
  "skype",
  "telegram",
  "Last.fm",
];
let seikai = ["B", "A", "C", "D", "A", "A", "D", "C", "A", "B"];
//Aをクリック
A.addEventListener("click", () => {
  if (flag) {
    if (seikai[num] == "A") {
      //que.style.color="red";
      que.textContent = "問題" + (num + 1) + "　正解";
      sco++;
      res.textContent = "スコア ：" + sco + " | 時間 : " + cnt + "秒";
    } else {
      que.textContent = "問題" + (num + 1) + "　不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1);
        logo.src = "img/logo" + num + ".png";
        change();
      }, 500);
    } else {
      que.style.color = "red";
      que.textContent = "問題の回答終了!";
      res.textContent = "結果　" + "スコア ：" + sco;
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解! おめでとう！";
        logo.src = "img/clear.png";
      }
    }
  }
});
//Bをクリック
B.addEventListener("click", () => {
  if (flag) {
    if (seikai[num] == "B") {
      //que.style.color="red";
      que.textContent = "問題" + (num + 1) + "　正解";
      sco++;
      res.textContent = "スコア ：" + sco + " | 時間 : " + cnt + "秒";
    } else {
      que.textContent = "問題" + (num + 1) + "　不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1);
        logo.src = "img/logo" + num + ".png";
        change();
      }, 400);
    } else {
      que.style.color = "rad";
      que.textContent = "問題の回答終了!";
      res.textContent = "結果　" + "スコア ：" + sco;
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解! おめでとう！";
        logo.src = "img/clear.png";
      }
    }
  }
});
//Cをクリック
C.addEventListener("click", () => {
  if (flag) {
    if (seikai[num] == "C") {
      //que.style.color="red";
      que.textContent = "問題" + (num + 1) + "　正解";
      sco++;
      res.textContent = "スコア ：" + sco + " | 時間 : " + cnt + "秒";
    } else {
      que.textContent = "問題" + (num + 1) + "　不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1);
        logo.src = "img/logo" + num + ".png";
        change();
      }, 400);
    } else {
      que.style.color = "rad";
      que.textContent = "問題の回答終了!";
      res.textContent = "結果　" + "スコア ：" + sco;
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解! おめでとう！";
        logo.src = "img/clear.png";
      }
    }
  }
});
//Dをクリック
D.addEventListener("click", () => {
  if (flag) {
    if (seikai[num] == "D") {
      //que.style.color="red";
      que.textContent = "問題" + (num + 1) + "　正解";
      sco++;
      res.textContent = "スコア ：" + sco + " | 時間 : " + cnt + "秒";
    } else {
      que.textContent = "問題" + (num + 1) + "　不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1);
        logo.src = "img/logo" + num + ".png";
        change();
      }, 400);
    } else {
      que.style.color = "rad";
      res.textContent = "結果　" + "スコア ：" + sco;
      que.textContent = "問題の回答終了!";
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解! おめでとう！";
        logo.src = "img/clear.png";
      }
    }
  }
});
