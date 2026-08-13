let selectedDrink = null;
let pourStartTime = null;
let pourAnimation = null;


// =========================
// 長押し開始
// =========================

function startPouring(drink) {

  selectedDrink = drink;

  const cup = document.getElementById("cup");
  const result = document.getElementById("result");
  const progress = document.getElementById("pour-progress");

  cup.src = "images/cup.png";
  cup.style.display = "block";

  result.textContent = "";
  result.style.display = "none";

  progress.style.width = "0%";

  pourStartTime = Date.now();

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

  let percent = (elapsed / 5000) * 100;

  if (percent > 100) {
    percent = 100;
  }

  document.getElementById("pour-progress").style.width =
    percent + "%";


  if (elapsed < 5000) {

    pourAnimation =
      requestAnimationFrame(updatePourBar);

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

  if (pourAnimation !== null) {

    cancelAnimationFrame(pourAnimation);

    pourAnimation = null;
  }

  const elapsed =
    Date.now() - pourStartTime;

  const seconds =
    elapsed / 1000;


  // カップを飲み物入りにする
  const cup =
    document.getElementById("cup");

  cup.src =
    "images/" + selectedDrink + ".png";


  // 判定
  showResult(seconds);


  pourStartTime = null;
}


// =========================
// 判定
// =========================

function showResult(seconds) {

  const result =
    document.getElementById("result");

  result.style.display = "block";


  if (seconds < 2.5) {

    result.textContent =
      "少なすぎます。";

  } else if (seconds <= 3.5) {

    result.textContent =
      "ちょうどいい！";

  } else if (seconds < 5) {

    result.textContent =
      "少し多いです。";

  } else {

    result.textContent =
      "入れすぎです！";
  }
}


// =========================
// スマホ・PC共通の操作
// =========================

const buttons =
  document.querySelectorAll("#drink-buttons button");


buttons.forEach(function(button) {

  // PC
  button.addEventListener("mousedown", function() {

    const drink =
      getDrinkFromButton(button);

    startPouring(drink);
  });


  button.addEventListener("mouseup", function() {

    stopPouring();
  });


  // スマホ
  button.addEventListener("touchstart", function(event) {

    event.preventDefault();

    const drink =
      getDrinkFromButton(button);

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
// ボタンから飲み物を判定
// =========================

function getDrinkFromButton(button) {

  const text =
    button.textContent.trim();


  if (text === "緑茶") {

    return "green_tea";

  }

  if (text === "コーヒー") {

    return "coffee";

  }

  if (text === "紅茶") {

    return "black_tea";
  }

  return null;
}