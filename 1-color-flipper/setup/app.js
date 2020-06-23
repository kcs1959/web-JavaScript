const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){ //background-colorを変えるfunction
    // console.log(1+2);

    // get random number between 0 - 3 --colors[0]やcolors[1]という形を作りたい
    // const randomNumber = 2;
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    // return Math.random();  --0から1の数字を作る（0から3ではない）
    // return Math.random() * colors.length; --4倍されるので、0から4の数字を作る
    return Math.floor(Math.random() * colors.length); //--引数として与えた数以下の最大の整数を返す
    
}