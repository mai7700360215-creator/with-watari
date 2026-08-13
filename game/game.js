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

  // 空のカップを表示
  cup.src = "images/cup.png";
  cup.style.display = "block";
}


// =========================
// 注ぎ始める
// =========================

function startPouring(drink) {

  // どの飲み物を注ぐか決定
  selectedDrink = drink;

  const cup = document.getElementById("cup");

  // 空のカップを表示
  cup.src = "images/cup.png";
  cup.style.display = "block";

  // すでにタイマーがあれば止める
  if (pourTimer !== null) {
    clearTimeout(pourTimer);
  }

  // 3秒長押し
  pourTimer = setTimeout(function () {

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
// ボタンを設定
// =========================

const buttons = document.querySelectorAll("#drink-buttons button");

buttons.forEach(function(button) {

  // ボタンに設定されている飲み物を取得
  const drink = button.dataset.drink;


  // PC：押し始める
  button.addEventListener("mousedown", function() {
    startPouring(drink);
  });

  // PC：離す
  button.addEventListener("mouseup", stopPouring);

  button.addEventListener("mouseleave", stopPouring);


  // スマホ：押し始める
  button.addEventListener("touchstart", function(event) {
    event.preventDefault();
    startPouring(drink);
  });

  // スマホ：離す
  button.addEventListener("touchend", function(event) {
    event.preventDefault();
    stopPouring();
  });

});