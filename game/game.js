// 選んだ飲み物
let selectedDrink = null;

// 長押しタイマー
let pourTimer = null;


// =========================
// 飲み物を選ぶ
// =========================

function chooseDrink(drink) {
  selectedDrink = drink;

  const cup = document.getElementById("cup");

  // 空のカップに戻す
  cup.src = "images/cup.png";
  cup.style.display = "block";
}


// =========================
// 長押し開始
// =========================

function startPouring(event) {
  event.preventDefault();

  if (!selectedDrink) return;

  // すでにタイマーがあれば止める
  if (pourTimer !== null) {
    clearTimeout(pourTimer);
  }

  // 3秒押したら完成
  pourTimer = setTimeout(function () {

    const cup = document.getElementById("cup");

    cup.src = "images/" + selectedDrink + ".png";

    pourTimer = null;

  }, 3000);
}


// =========================
// 長押し終了
// =========================

function stopPouring(event) {
  event.preventDefault();

  if (pourTimer !== null) {
    clearTimeout(pourTimer);
    pourTimer = null;
  }
}


// =========================
// カップ
// =========================

const cup = document.getElementById("cup");


// PC・スマホ共通
cup.addEventListener("pointerdown", startPouring);
cup.addEventListener("pointerup", stopPouring);
cup.addEventListener("pointercancel", stopPouring);