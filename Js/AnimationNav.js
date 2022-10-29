$("#sliderBar i").click(function() {
    let menuNav= $(".box").outerWidth();
    if($("#sliderBar").css("left") == "0px"){
        $('#sliderBar').animate({left:`-${menuNav}`},1000)
    }
    else{
        $('#sliderBar').animate({left:`0px`},1000)

    }
})