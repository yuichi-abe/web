// ボタン取得
var button = document.getElementById("button");

//ネコ画像を取得
var imgNeko = document.getElementById("neko");

//ボタンをクリックしたら表示されるようにする
//ボタンにイベントリスナーを登録
button.addEventListener("click",function(){
        // ネコ画像オブジェクトを引数に渡し､返り値として､そのスタイルを取得
        var imgNekoStyle = window.getComputedStyle(imgNeko);

        console.log(imgNekoStyle.display);
        
        if(imgNekoStyle.display == "none"){
                // ネコ画像styleのdisplay プロパティがnoneだったら表示
                imgNeko.style.display = "block";
                button.innerText = "表示を消す";
        }else{
                imgNeko.style.display = "none";
                button.innerText = "表示する";
        }

})

var target = document.getElementById("target_img");

var nekoList = ["猫エンジニア.jpg","瞳がうるんだ子猫.jpg","あざ笑う子猫.jpg"];
var r = Math.floor( Math.random() * nekoList.length);
target.setAttribute("src","image\\neko\\" + nekoList[r]);
target.setAttribute("width","70%");
target.setAttribute("hight","70%");

var i = 0;

var timer = setInterval(function(){
        target.setAttribute("src","image\\neko\\" + nekoList[i]);
        i++;
        if(i > nekoList.length - 1){
                i = 0;
        }
},2000);

