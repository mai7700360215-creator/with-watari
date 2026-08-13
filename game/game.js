let selectedDrink = null;

function chooseDrink(drink) {
  selectedDrink = drink;

  const cup = document.getElementById("cup");

  // 空のカップを表示
  cup.src = "images/cup.png";
  cup.style.display = "block";
}


// カップを長押ししたら注ぐ
function startPouring() {
  if (!selectedDrink) return;

  const cup = document.getElementById("cup");

  cup.src = "images/" + selectedDrink + ".png";
}


// マウス
document.getElementById("cup").addEventListener("mousedown", startPouring);

// タッチ
document.getElementById("cup").addEventListener("touchstart", startPouring);