let selectedDrink = null;

function chooseDrink(drink) {
  selectedDrink = drink;

  const cup = document.getElementById("cup");

  cup.src = "images/cup.png";
  cup.style.display = "block";
}

function pourDrink() {
  if (!selectedDrink) return;

  const cup = document.getElementById("cup");

  cup.src = "images/" + selectedDrink + ".png";
}

const cup = document.getElementById("cup");

cup.onclick = pourDrink;