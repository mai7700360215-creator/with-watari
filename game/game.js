let selectedDrink = null;


// 飲み物を選ぶ
function chooseDrink(drink) {
  selectedDrink = drink;

  const cup = document.getElementById("cup");

  // 空のカップを表示
  cup.src = "images/cup.png";
  cup.style.display = "block";
}


// カップを押したら確認
function pourDrink() {
  if (!selectedDrink) {
    return;
  }

  const cup = document.getElementById("cup");

  cup.src = "images/" + selectedDrink + ".png";
}


// カップ
const cup = document.getElementById("cup");


// PC
cup.addEventListener("click", pourDrink);


// スマホ
cup.addEventListener("touchend", pourDrink);