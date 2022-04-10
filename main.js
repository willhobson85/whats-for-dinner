//variables
var addRecipeBtn = document.querySelector(".add-recipe");
var letsCookBtn = document.querySelector(".letsCook");
var clearBtn = document.querySelector(".clear-button");
var cookpotBox = document.querySelector(".container2");
var recipeBox = document.querySelector(".container3");
var typeOfFood = document.getElementsByName("radio-btn");
var whatToCook = document.querySelector("p");

var sides = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies",
];

var mains = [
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza",
];

var desserts = [
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons",
"Chocolate Cupcakes",
"Pavlova",
"Pumpkin Pie",
"Key Lime Pie",
"Tart Tatin",
"Croissants",
"Eclairs"
];

//event listeners
letsCookBtn.addEventListener("click", getDish);
clearBtn.addEventListener("click", clearDish);

//functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomFood() {
  for (var i = 0; i < typeOfFood.length; i++) {
    if (typeOfFood[i].checked); {
      typeOfFood[i].value;
    }
  }
}

function getDish() {
  var output = '';
  var selected = document.querySelector('input[type="radio"]:checked');
  var randomDish = getRandomIndex(selected.value);
  cookpotBox.classList.add('hidden');
  recipeBox.classList.remove('hidden');
  switch(selected.value) {
    case 'side':
      output = sides[randomDish];
      break;
    case 'mainDish':
      output = mains[randomDish];
      break;
    case 'dessert':
      output = desserts[randomDish];
      break;
    case 'entireMeal':
      output = `${mains[randomDish]}, with a side of ${sides[randomDish]}, and ${desserts[randomDish]} for dessert!`;
      break;
}

  whatToCook.innerText = output ;
}

function clearDish() {
  cookpotBox.classList.remove('hidden');
  recipeBox.classList.add('hidden');
}
