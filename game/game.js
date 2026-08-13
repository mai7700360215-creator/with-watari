// 選択中の飲み物
let selectedDrink = null;

// 長押しタイマー
let pourTimer = null;

// すでに完成したか
let isFinished = false;


// =========================
// 長押し開始
// =========================

function startPouring(drink) {

  selectedDrink = drink;

  const cup = document.getElementById("cup");

  // 新しく注ぎ始めるので空にする
  cup.src = "images/cup.png";
  cup.style.display = "block";

  isFinished = false;

  // 前のタイマーを解除
  if (pourTimer !== null) {
    clearTimeout(pourTimer);
  }

  // 3秒長押し
  pourTimer = setTimeout(function() {

    cup.src = "images/" + selectedDrink + ".png";

    // 完成したことを記録
    isFinished = true;

    pourTimer = null;

  }, 3000);
}


// =========================
// 長押し終了
// =========================

function stopPouring() {

  // すでに完成しているなら何もしない
  if (isFinished) {
    return;
  }

  // 3秒前ならキャンセル
  if (pourTimer !== null) {
    clearTimeout(pourTimer);
    pourTimer = null;
  }
}