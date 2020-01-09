$(document).ready(function(){
    $(".theButton").on("click", function() {
        $(".container").siblings().fadeTo("slow", 0.1);
    });
     $(".superButton").click(function (){
        $(".container").siblings().fadeTo("slow", 1);
    });
    $(".theButton").mouseenter(function() {
        $(this).addClass("makeBlack");
    });
    $(".theButton").mouseleave(function() {
        $(this).removeClass("makeBlack");
    });
    $(".theButton").click( function() {
        var col = $(this).css("background-color");
        $("superButton").text(col);
    });
});
//--- for Challenge_B.html ---//
$(document).ready(function(){
    $("th").on("click", function() {
        $("tr").children().removeClass("selection");
        $(this).siblings().addClass("selection");
    });
});