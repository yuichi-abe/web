$(function(){
    $("#button01").click(function(){
        alert("アラートボタンが押されました｡");
    })

    $("#targetImg01").on("maouseover mouseout",function(){
        console.log(this);
    })

    $("#menu > dt").click(function(){
        $("#menu dd").slideToggle();
    });

    //topページボタンを変数に取得
    var topBtn = $("#scroll_top");
    topBtn.hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            topBtn.fadeIn(); //フェードインで表示
        }else{
            topBtn.fadeOut(); //フェードアウトで非表示
        }
    });

    topBtn.click(function(event){
        event.preventDefault();
        $("body,html").animate({scrollTop:0},500);
    });
})