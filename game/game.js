
function chooseDrink(drink) {
  const drinkImage = document.getElementById("drink");

  drinkImage.src = "images/" + drink + ".png";
  drinkImage.style.display = "block";
}