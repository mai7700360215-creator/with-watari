// 選択中の飲み物
let selectedDrink = null;

// 長押しタイマー
let pourTimer = null;


// 飲み物を選ぶ
function chooseDrink(drink) {
  selectedDrink = drink;

  const cup = document.getElementById("cup");

  // 空のカップに戻す
  cup.src = "images/cup.png";
  cup.style.display = "block";
}


// 注ぎ始める
function startPouring() {
  if (!selectedDrink) return;

  // 3秒長押し
  pourTimer = setTimeout(function () {
    const cup = document.getElementById("cup");

    cup.src = "images/" + selectedDrink + ".png";

    pourTimer = null;
  }, 3000);
}


// 指・マウスを離した
function stopPouring() {
  if (pourTimer !== null) {
    clearTimeout(pourTimer);
    pourTimer = null;
  }
}


// カップ
const cup = document.getElementById("cup");


// 押した
cup.addEventListener("pointerdown", function (event) {
  event.preventDefault();
  startPouring();
});


// 離した
cup.addEventListener("pointerup", function (event) {
  event.preventDefault();
  stopPouring();
});


// カップから離れた
cup.addEventListener("pointerleave", function () {
  stopPouring();
});