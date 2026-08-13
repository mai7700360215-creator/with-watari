// 選択中の飲み物
let selectedDrink = null;

// 注ぎ始めた時間
let pourStartTime = null;

// バー更新用
let pourAnimation = null;

// 完成したか
let isFinished = false;


// =========================
// 長押し開始
// =========================

function startPouring(drink) {

  selectedDrink = drink;

  const cup = document.getElementById("cup");

  // 空のカップにする
  cup.src = "images/cup.png";
  cup.style.display = "block";

  // 新しく開始
  isFinished = false;

  // 注ぎ始めた時間
  pourStartTime = Date.now();

  // バーを0に戻す
  const progress = document.getElementById("pour-progress");
  progress.style.width = "0%";

  // バーを動かす
  updatePourBar();
}


// =========================
// バーを更新
// =========================

function updatePourBar() {

  if (pourStartTime === null) {
    return;
  }

  const elapsed = Date.now() - pourStartTime;

  // 5秒で100%
  let percent = (elapsed / 5000) * 100;

  // 100%を超えない
  if (percent > 100) {
    percent = 100;
  }

  const progress = document.getElementById("pour-progress");

  progress.style.width = percent + "%";


  // 5秒未満なら更新を続ける
  if (elapsed < 5000) {

    pourAnimation = requestAnimationFrame(updatePourBar);

  } else {

    pourAnimation = null;
  }
}


// =========================
// 長押し終了
// =========================

function stopPouring() {

  if (pourStartTime === null) {
    return;
  }


  // バー更新を止める
  if (pourAnimation !== null) {

    cancelAnimationFrame(pourAnimation);

    pourAnimation = null;
  }


  // 注いだ時間
  const elapsed = Date.now() - pourStartTime;


  // 飲み物を入れる
if (elapsed > 0) {

  const cup = document.getElementById("cup");

  cup.src = "images/" + selectedDrink + ".png";

  isFinished = true;


  // =========================
  // 判定
  // =========================

  const seconds = elapsed / 1000;

  if (seconds < 2.5) {

    console.log("少なすぎます");

  } else if (seconds <= 3.5) {

    console.log("ぴったりです！");

  } else if (seconds < 5) {

    console.log("多いです");

  } else {

    console.log("入れすぎです");
  }
}


  // 注ぐ時間をリセット
  pourStartTime = null;
}