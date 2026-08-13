// 選択中の飲み物
let selectedDrink = null;

// 長押しタイマー
let pourTimer = null;


// 飲み物を選択
function chooseDrink(drink) {
  selectedDrink = drink;

  const cup = document.getElementById("cup");

  // 空のカップを表示
  cup.src = "images/cup.png";
  cup.style.display = "block";
}


// 長押し開始
function startPouring(drink) {

  // 飲み物を記憶
  selectedDrink = drink;

  const cup = document.getElementById("cup");

  // 空のカップを表示
  cup.src = "images/cup.png";
  cup.style.display = "block";


  // 以前のタイマーを消す
  if (pourTimer !== null) {
    clearTimeout(pourTimer);
  }


  // 3秒後に完成
  pourTimer = setTimeout(function() {

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