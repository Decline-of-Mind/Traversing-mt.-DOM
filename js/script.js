$(document).ready(function(){
    $(".theButton").on("click", function() {
        $(".container").siblings().fadeTo("slow", 0.1);
    });
     $(".superButton").click(function (){
        $(".container").siblings().fadeTo("slow", 1);
    });
    $(".theButton").mouseenter(function() {
        $(this).addClass(".turnBlack");
    });
    $(".theButton").mouseleave(function() {
        $(this).removeClass(".turnBlack");
    });
});