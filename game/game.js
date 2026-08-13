// 選択中の飲み物
let selectedDrink = null;


// 飲み物を選ぶ
function chooseDrink(drink) {
  selectedDrink = drink;

  // カップは空のまま
  const cup = document.getElementById("cup");
  cup.src = "images/cup.png";
  cup.style.display = "block";
}


// カップを長押ししたら注ぐ
function startPouring() {
  if (!selectedDrink) return;

  const cup = document.getElementById("cup");

  // 選んだ飲み物に変更
  cup.src = "images/" + selectedDrink + ".png";
}


// カップをマウスで押したとき
document.getElementById("cup").addEventListener("mousedown", startPouring);


// カップをタッチしたとき
document.getElementById("cup").addEventListener("touchstart", startPouring);