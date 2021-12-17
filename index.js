// Task 1.2
function indexOfWeight(){
  var height = 1.7;
  var weight = 66;
  var index = weight/(height*height);
    if (index < 16) {
    var message = "Надмірний дифіцит маси тіла";
    console.log(message);
  }
  else if (index < 16 || index > 25){
    message = "Нормальна вага";
    console.log(message);
  }
  else if (index<25 || index>30){
    message = "Предожиріння";
    console.log(message);
  }
  else if (index<30 || index>35){
    message = "Ожиріння 1 ступення";
    console.log(message);
  }
  else{
    message = "Ожиріння 2 і вище ступення";
    console.log(message);
  }
}
  indexOfWeight();

  //Task 1.3
  function getLeapYear() {
    let k = 400
    if (k % 4 == 0 || k % 100 == 0 || k % 400 == 0) {
      console.log('Рік - високосний')
    } else {
      console.log('Рік не високосний')
    }
  }
  getLeapYear();

  //Task 1.4
  function coffee(){
    let array = ['Тетяна', 'Станісав','Марія','Вадим','Ігор'];
    var random = Math.floor(Math.random() * array.length);
    console.log(array[random]);
    }
    coffee();
//Task 2
function NameSurnameWhile(){
    let name = "Vadim";
    let surname = "Tolmachov";
    let count = 100;
    while (count > 1) {
        if (count % 15 == 0) {
            console.log(surname + name);
        } else if (count % 5 ==0){
            console.log(surname);
        }
        else if (count % 3 ==0){
            console.log(name);
          }
            else{
              console.log(count)
            }
            count=count-1
        }
}
NameSurnameWhile();

function NameSurnameFor(){
    let name = "Vadim";
    let surname = "Tolmachov";
    for (let count = 100; count > 1; count--) {
        if (count % 15 == 0) {
            console.log(surname + name);
        } else if (count % 5 ==0){
            console.log(surname);
        }
        else if (count % 3 ==0){
            console.log(name);
          }
            else{
              console.log(count)
            }
        }
}
//NameSurnameFor(); //Unccoment this usage to watch how function works with cycle for
//Task 3.1
function BottlesOfBeer(){
  let word = "bottles";
  let number = 99;
  while (number > 0) {
      console.log(number + " " + word + " of beer on the wall.");
      console.log(number + " " + word + " of beer");
      console.log("Take one down, pass it around,");
      number = number - 1;
      if (number > 0) {
          console.log(number + " " + word + " of beer on the wall.");
      } else {
          console.log("No more " + word + " of beer on the wall.");
      }
  }
}
BottlesOfBeer();

//Task 3.2
function fibbonacсi(n) {
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
      let a = result[i - 2];
      let b = result[i - 1];
      result.push(a + b);
    }
    console.log(result);
    return result[n];
  }
  console.log(fibbonacсi(12));

//Task 4
function bonesGame(){
  function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
  let m = getRandomIntInclusive(1, 6)
  var randomImageSource2 = "./фоточки/dice"+m+".jpg";
	 document.querySelectorAll("img")[0].setAttribute("src", randomImageSource2);

  let n = getRandomIntInclusive(1, 6)
  var randomImageSource2 = "./фоточки/dice"+n +".jpg";
	 document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  if(m > n){
document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(m < n){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else {
  document.querySelector("h1").innerHTML = "Draw!";
}
}
bonesGame();
