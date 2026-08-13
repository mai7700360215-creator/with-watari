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

  // 最初からやり直す
  isFinished = false;

  // 注ぎ始めた時間
  pourStartTime = Date.now();

  // バーを0に戻す
  updatePourBar();

}


// =========================
// バーを更新
// =========================

function updatePourBar() {

  if (pourStartTime === null) return;

  const elapsed = Date.now() - pourStartTime;

  // 5秒で100%
  let percent = (elapsed / 5000) * 100;

  // 100%を超えない
  if (percent > 100) {
    percent = 100;
  }

  const progress = document.getElementById("pour-progress");

  progress.style.width = percent + "%";


  // まだ5秒経っていなければ続ける
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

  if (pourStartTime === null) return;

  // バー更新を止める
  if (pourAnimation !== null) {
    cancelAnimationFrame(pourAnimation);
    pourAnimation = null;
  }


  const elapsed = Date.now() - pourStartTime;


  // 5秒以内なら飲み物を完成
  if (elapsed > 0) {

    const cup = document.getElementById("cup");

    cup.src = "images/" + selectedDrink + ".png";

  }


  // リセット
  pourStartTime = null;
}