$(function(){

    $("#btn").click(function(){
        var url = "http://zipcloud.ibsnet.co.jp/api/search?zipcode="
        var yubin = $("#zipcode").val();

        $.ajax({
            url:url + yubin, //リクエスト先URL
            dataType:"JSONP"  //レスポンス先のデータ形式
        }).done(function(data){
            //通信が成功したときの処理
            //console.log(data);
            if(data.results){
                setData(data.results[0]);
            }else{
                alert("データが取得できません");
            }
            

            function setData(data){
                $("#prefecture").val(data.address1);
                $("#city").val(data.address2);
                $("#address").val(data.address3);
            }

        }).fail(function(data){
            //通信が失敗したときの処理
            alert("通信失敗");
        })
    })


    // ajaxの処理
    //$のあとに .(ドット) 忘れないように!!
    // $.ajax({
    //     url:"", //リクエスト先URL
    //     dataType:""  //レスポンス先のデータ形式
    // }).done(function(data){
    //     //通信が成功したときの処理
    // }).fail(function(data){
    //     //通信が失敗したときの処理
    // })
    
});