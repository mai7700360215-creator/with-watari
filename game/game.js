// 選択中の飲み物
let selectedDrink = null;

// 長押し用タイマー
let pourTimer = null;


// =========================
// 飲み物を選ぶ
// =========================

function chooseDrink(drink) {
  selectedDrink = drink;

  // カップを空に戻す
  const cup = document.getElementById("cup");
  cup.src = "images/cup.png";
  cup.style.display = "block";
}


// =========================
// 注ぎ始める
// =========================

function startPouring() {
  if (!selectedDrink) return;

  // 3秒後に完成
  pourTimer = setTimeout(function () {
    const cup = document.getElementById("cup");

    cup.src = "images/" + selectedDrink + ".png";

    pourTimer = null;
  }, 3000);
}


// =========================
// 注ぐのをやめる
// =========================

function stopPouring() {
  if (pourTimer !== null) {
    clearTimeout(pourTimer);
    pourTimer = null;
  }
}


// =========================
// カップにイベントを設定
// =========================

const cup = document.getElementById("cup");


// マウスで押し始める
cup.addEventListener("mousedown", startPouring);

// マウスを離す
cup.addEventListener("mouseup", stopPouring);

// カップからマウスが外れた
cup.addEventListener("mouseleave", stopPouring);


// スマホ・タブレット用
cup.addEventListener("touchstart", function (event) {
  event.preventDefault();
  startPouring();
});

cup.addEventListener("touchend", function (event) {
  event.preventDefault();
  stopPouring();
});