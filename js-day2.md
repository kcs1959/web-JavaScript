# JavaScript講習会第2回

## まず、index.htmlを以下の状態に書き換えましょう
``` HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color Flipper || Simple</title>
    <!-- styles -->
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <nav>
      <div class="nav-center">
        <h4>color flipper</h4>
        <ul class="nav-links">
          <li><a href="index.html">simple</a></li>
          <li><a href="hex.html">hex</a></li>
        </ul>
      </div>
    </nav>
    <main>
      <div class="container">
        <h2>background color : <span class="color">#f1f5f8</span></h2>
        <button class="btn btn-hero" id="btn">click me</button>
      </div>
    </main>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

## 次に、hex.htmlも以下の状態に書き換えましょう
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color Flipper || Hex</title>
    <!-- styles -->
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <nav>
      <div class="nav-center">
        <h4>color flipper</h4>
        <ul class="nav-links">
          <li><a href="index.html">simple</a></li>
          <li><a href="hex.html">hex</a></li>
        </ul>
      </div>
    </nav>
    <main>
      <div class="container">
        <h2>background color : <span class="color">#f1f5f8</span></h2>
        <button class="btn btn-hero" id="btn">click me</button>
      </div>
    </main>
    <!-- javascript -->
    <script src="hex.js"></script>
  </body>
</html>
```

## さらに、app.jsを以下の状態に書き換えましょう
```javascript
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
```

## しばらくはapp.jsを変えていきます

## addEventListenerの理解
```javascript
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  console.log(2+3);
});
```

## 一旦randomnumberを固定
```javascript
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = 2;
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
```
ボタンを何回押しても紫っぽい色が出るはず

## 乱数を作る関数の理解
```javascript
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){   
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.random();
}
```

## 0から4までの乱数を作り、整数に直すことで4種類の色を表示させ、app.jsの完成へ
```javascript
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
```
## app.jsが完成したので、次はhex.jsへ

## hex.jsを以下の状態に書き換えましょう
```javascript
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
```

## for文の理解
```javascript
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[0];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
```

## 乱数を使ってランダムな色を表示させ、hex.jsの完成へ
```javascript
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
```