function gacha(){

//配列に画像を挿入する
let star3 = ['01.png','02.png'];
let star2 = ['03.png','04.png','05.png'];
let star1 = ['06.png','07.png','08.png','09.png'];


//console.log(star1);

//排出率の設定
//star3が5%、star2が35%、star1が60%
let star1Ratio = 60; //star1の排出率は60％
let star2Ratio = 95; //star1と2の排出率を合わせた数字

//各ランクに入っているキャラ数
let star1Total = 4;
let star2Total = 3;
let star3Total = 2;

//値が空の配列をつくる
let character = [];

//3回ガチャを回す
for(let i=1; i<4; i++){

//1~100までのランダム
let randomNum = Math.ceil(Math.random()*100);
console.log(randomNum)

//if文でランクの振り分け
if(randomNum <= star1Ratio){
//1~60の場合はstar1の中でランダム抽選
let star1Num = Math.floor(Math.random()*star1Total);
character.push(star1[star1Num]);
}else if(randomNum <= star2Ratio){
//61~95の場合はstar2の中でランダム抽選
let star2Num = Math.floor(Math.random()*star2Total);   
character.push(star2[star2Num]);
}else{
//96~100の場合はstar3の中でランダム抽選
let star3Num = Math.floor(Math.random()*star3Total);   
character.push(star3[star3Num]);    
}
}

console.log(character);
//配列characterの中身をすべて表示

document.querySelector('#outer').innerHTML = 
'<p><img src="img/' + character[0] +  '" alt=""></p><p><img src="img/' + character[1] +  '" alt=""></p><p><img src="img/' + character[2] +  '" alt=""></p>';

}