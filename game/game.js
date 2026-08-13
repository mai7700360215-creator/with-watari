let selectedDrink = null;
let pourStartTime = null;
let pourAnimation = null;


// =========================
// ボタン取得
// =========================

const buttons = document.querySelectorAll("#drink-buttons button");

buttons.forEach(function(button) {

  const drink = button.dataset.drink;


  // PC
  button.addEventListener("mousedown", function(event) {

    event.preventDefault();

    startPouring(drink);

  });


  button.addEventListener("mouseup", function(event) {

    event.preventDefault();

    stopPouring();

  });


  button.addEventListener("mouseleave", function() {

    stopPouring();

  });


  // スマホ
  button.addEventListener("touchstart", function(event) {

    event.preventDefault();

    startPouring(drink);

  }, { passive: false });


  button.addEventListener("touchend", function(event) {

    event.preventDefault();

    stopPouring();

  }, { passive: false });


  button.addEventListener("touchcancel", function() {

    stopPouring();

  });

});


// =========================
// 注ぎ始める
// =========================

function startPouring(drink) {

  selectedDrink = drink;

  const cup = document.getElementById("cup");
  const progress = document.getElementById("pour-progress");
  const result = document.getElementById("result");


  // 空のカップ
  cup.src = "images/cup.png";
  cup.style.display = "block";


  // 判定を消す
  result.textContent = "";
  result.style.display = "none";


  // バーを0に戻す
  progress.style.width = "0%";


  // 開始時間
  pourStartTime = Date.now();


  updatePourBar();
}


// =========================
// バーを動かす
// =========================

function updatePourBar() {

  if (pourStartTime === null) {
    return;
  }


  const elapsed =
    Date.now() - pourStartTime;


  let percent =
    (elapsed / 5000) * 100;


  if (percent > 100) {
    percent = 100;
  }


  document.getElementById("pour-progress").style.width =
    percent + "%";


  if (elapsed < 5000) {

    pourAnimation =
      requestAnimationFrame(updatePourBar);

  }

}


// =========================
// 指・マウスを離す
// =========================

function stopPouring() {

  if (pourStartTime === null) {
    return;
  }


  if (pourAnimation !== null) {

    cancelAnimationFrame(pourAnimation);

    pourAnimation = null;

  }


  const elapsed =
    Date.now() - pourStartTime;


  const seconds =
    elapsed / 1000;


  // 飲み物入りカップ
  const cup =
    document.getElementById("cup");


  cup.src =
    "images/" + selectedDrink + ".png";


  // 判定
  showResult(seconds);


  // リセット
  pourStartTime = null;
}


// =========================
// 判定結果
// =========================

function showResult(seconds) {

  const result =
    document.getElementById("result");


  result.style.display = "block";


  if (seconds < 2.5) {

    result.textContent =
      "少なすぎます。";

  }

  else if (seconds <= 3.5) {

    result.textContent =
      "ちょうどいい！";

  }

  else if (seconds < 5) {

    result.textContent =
      "少し多いです。";

  }

  else {

    result.textContent =
      "入れすぎです！";

  }

}