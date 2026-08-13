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
  const result = document.getElementById("result");
  const progress = document.getElementById("pour-progress");

  // 空のカップに戻す
  cup.src = "images/cup.png";
  cup.style.display = "block";

  // 前回の判定を消す
  result.textContent = "";
  result.style.display = "none";

  // バーを0に戻す
  progress.style.width = "0%";

  // 新しく開始
  isFinished = false;

  pourStartTime = Date.now();

  // バーを動かす
  updatePourBar();
}


// =========================
// バー更新
// =========================

function updatePourBar() {

  if (pourStartTime === null) {
    return;
  }

  const elapsed = Date.now() - pourStartTime;

  // 5秒で100%
  let percent = (elapsed / 5000) * 100;

  if (percent > 100) {
    percent = 100;
  }

  const progress = document.getElementById("pour-progress");

  progress.style.width = percent + "%";


  // 5秒までは更新
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


  // バー更新を停止
  if (pourAnimation !== null) {

    cancelAnimationFrame(pourAnimation);

    pourAnimation = null;
  }


  // 注いだ時間
  const elapsed = Date.now() - pourStartTime;

  const seconds = elapsed / 1000;


  // 飲み物入りカップにする
  if (elapsed > 0) {

    const cup = document.getElementById("cup");

    cup.src = "images/" + selectedDrink + ".png";
    cup.style.display = "block";

    isFinished = true;
  }


  // 判定
  showResult(seconds);


  // リセット
  pourStartTime = null;
}


// =========================
// 判定結果
// =========================

function showResult(seconds) {

  const result = document.getElementById("result");

  result.style.display = "block";


  if (seconds < 2.5) {

    result.textContent = "少なすぎます。";

  } else if (seconds <= 3.5) {

    result.textContent = "ちょうどいい！";

  } else if (seconds < 5) {

    result.textContent = "少し多いです。";

  } else {

    result.textContent = "入れすぎです！";
  }
}