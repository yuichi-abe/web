// var weight

// prompt は入力するダイアログを表示する｡
// 入力された文字列は返り値となる為､weightに代入される｡
// weight = prompt("BMIを測定します｡まずはあなたの体重を(kg)入力してください");
// console.log(weight);

// var msg = "こんにちは";

// var name = prompt("名前を入力してください");

// // alertは警告ダイアログ
// alert(msg + name + "さん");

// var weight;
// var height;

// weight = prompt("あなたの体重(kg)を教えてください");

// height = prompt("次にあなたの身長(m)を教えてください");

// var bmi =  weight/ (height * height);

// alert("あなたのBMIは" + bmi + "です｡");

// var money;
// var pizzaPrice = 2500; 


// money = prompt("所持金を入力してください");

// if(money >= pizzaPrice){
//         var otsuri = money - pizzaPrice;
//         alert("お釣りは\\" + otsuri + "です｡");

// }else{
//         alert("お金が足りません");
// }

// GU = 1;
// CHOKI = 2;
// PA= 3;

// var isOpening = confirm("じゃんけんを開始します｡");

// if(isOpening){ 
// var hum = prompt("じゃんけん \n\n" + "1:グー" + "\n" + "2:チョキ" + "\n" + "3:パー");

// //文字列を整数に変換
// hum = parseInt(hum);

//  if(hum !== GU && hum !== CHOKI && hum !== PA){
//          alert("不正な値です｡");
//  }else{
//         //Math.random() 0~1未満のランダムな数値
//         //Math.floor() 少数切り捨て
//         var com = Math.floor( Math.random() * 3) + 1;
//         var comHum;

//         console.log(comHum);

//         switch (com) {
//                 case GU:
//                         comHum = "グー"
//                         break;
//                 case CHOKI:
//                         comHum = "チョキ";
//                         break;
//                 case PA:
//                         comHum = "パー";
//                         break;
//                 default:
//                         break;
//         }

//         console.log(comHum);

//         var msg;

//         if(hum == com){
//                 msg = "あいこ";
//         }else if( (hum == GU && com == CHOKI)  
//                 || (hum == CHOKI && com == PA) 
//                 || (hum == PA && com == GU)
//         ){
//                 msg = "勝ち";
//         }else{
//                 msg = "負け";
//         }

//         alert(msg);
//  }
// }

// var stg = document.getElementById('practice');
// stg.innerHTML = "<h1>練習</h1>";

// var stg2 = document.querySelector("#about h2");
// stg2.innerHTML = "っっs";

// stg2.style.color = "#729846";
// stg.style.color = "#FF0000";
// stg.style.backgroundColor = "#bbc52d";
// stg.style.fontSize = "45px";

// var practice = document.getElementById("practice");
// var first = document.createElement("div"); 

// first.setAttribute("id","first");

// first.innerHTML = "<p>要素を追加</p>";

// practice.insertBefore(first,null);

// var second = document.createElement("div");

// second.setAttribute("id","second");
// second.innerHTML = "<p>さらに要素を追加</p>";
// practice.insertBefore(second,first);

// var parent = first.parentElement;
// parent.removeChild(first);

var button = document.getElementById("button");
var textArea = document.getElementById("textarea");
var maxlengthNum = textArea.getAttribute("maxlength");

var textMsg = document.createElement("div");
textMsg.setAttribute("id","textMsg");
textMsg.innerHTML = "<p>残り文字数</p>";

textArea.parentElement.insertBefore(textMsg,textArea);


button.addEventListener("click",function(){
        var form = document.getElementById("form");
        form.style.display = "block";

        
})

textArea.addEventListener("keyup",function(){
        var textNum = textArea.value.length;
        textMsg.innerHTML = "<p>あと " + (maxlengthNum - textNum) + " 文字";

})


// var maxlengthNum = form.getAttribute("maxlength");
// var dispLengthNum = 0;

// var textMsg = document.createElement("div");
// var parent = 

// document.getElementById("dispMsgLength").innerHTML 
//         = "<p>あと" + msgNum + ""  + "文字" +"</p>";

// button.addEventListener("mouseout",function(){
//         var form = document.getElementById("form");

//         form.style.display = "none";
// })
















