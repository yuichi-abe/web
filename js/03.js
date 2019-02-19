// ボタン取得
var button = document.getElementById("button01");

//ネコ画像を取得
var imgNeko = document.getElementById("neko");

//ボタンをクリックしたら表示されるようにする
//ボタンにイベントリスナーを登録
button.addEventListener("click",function(){
        // console.log(event);


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

// var mainPict = document.getElementById("target_img");

// var nekoListPict = [
//                         {src:"猫エンジニア.jpg",
//                          width:"25%",
//                          hight:"25%",
//                         },
//                         {src:"瞳がうるんだ子猫.jpg",
//                          width:"25%",
//                          hight:"25%",
//                         },
//                         {src:"あざ笑う子猫.jpg",
//                          width:"25%",
//                          hight:"25%",
//                         }
                        
//                 ]



// var r = Math.floor( Math.random() * nekoListPict.length);
// mainPict.setAttribute("src"  ,getPath(nekoListPict[r].src));
// mainPict.setAttribute("width",nekoListPict[r].width);
// mainPict.setAttribute("hight",nekoListPict[r].hight);

// 画像をインターバルで変更する処理
// var i = 0;
// var timer = setInterval(function(){
//         mainPict.setAttribute("src",getPath(nekoListPict[i].src));
//         i++;
//         if(i > nekoListPict.length - 1){
//                 i = 0;
//         }
// },2000);

//写真ギャラリー
var imgs = [
        {
                src:"猫たちのご飯タイム.jpg",
                msg:"ネコのご飯"
        },
        {
                src:"逃亡寸前の猫エンジニア.jpg",
                msg:"ネコのエンジニア"
        },
        {
                src:"ミャーと鳴いてるオス猫.jpg",
                msg:"鳴いているネコ"
        },
        {
                src:"ボックスから顔だけだして下を見ているオス猫.jpg",
                msg:"ボックスから顔だけ"
        }

]

const MAIN = 0;  //インデックス 0がメインとする

var mainGallary = document.querySelector("#gallary .main_gallary");
var subGallary = document.querySelector("#gallary .sub_gallary");

// メイン画像オブジェクト作成
var mainImg = createImgObj(imgs[MAIN],"main");
var mainMsg = createImgMsg(imgs[MAIN]);

// メインギャラリーに画像オブジェクトをインサート
mainGallary.insertBefore(mainImg,null);
mainGallary.insertBefore(mainMsg,null);

//サブギャラリー作成
for(var i=0; i<imgs.length; i++){
        var subImg = createImgObj(imgs[i],"sub");
        subGallary.insertBefore(subImg,null);
}

// サブイメージの親のsub_gallaryにクリックイベントを定義
// event.targetでクリックしたimgが取れる｡
subGallary.addEventListener("click",function(event){
        if(event.target.src){
                console.log(event);
                mainImg.src = event.target.src;
                mainMsg.innerText = event.target.alt;
        }
});


function createImgObj(img,text){
        var imgObj =  document.createElement("img");
        imgObj.setAttribute("src",getPath(img.src));
        imgObj.setAttribute("alt",img.msg);

        if(text == "main"){
                imgObj.setAttribute("width","70%");
                imgObj.setAttribute("height","70%");
        }else{
                imgObj.setAttribute("width","25%");
                imgObj.setAttribute("height","25%");
        }

        // 作成したimgタグのオブジェクトをリターン
        return imgObj;
}


function createImgMsg(img){
        var pMsg = document.createElement("p");
        pMsg.innerText = img.msg;
        return pMsg;
}

function getPath(img){
        //画像の保存場所
        return "image\\neko\\" + img;
}
// 










