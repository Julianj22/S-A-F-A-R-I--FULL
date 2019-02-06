
$("body").mouseenter(function() {
    $("#saf").delay(2000).fadeIn(2000);
    $("#btm").delay(2000).fadeIn(2000);
});    
    
$("#one").click(function(){
    $("#one").fadeOut();
    $("#chung").delay(1000).fadeIn(1000);
    $("#text1").delay(2000).fadeIn(1000);
});
    
$("#chung").dblclick(function(){
    $("#loading").fadeIn();
    $("#text1").fadeOut();
    $("#loading").delay(7000).fadeOut(1000);
    $("#chung").fadeOut(1000);
    $("#j").delay(8000).fadeIn(1000);
    $("#r1").delay(8000).fadeIn(1000);
    $("#l1").delay(8000).fadeIn(1000);
});

$("#l1").click(function(){
     $(".page_1").fadeOut(3000);
    $(".page_2").delay(3000).fadeIn(3000);
});

$(".donkeykong_quest2").click(function(){
     $(".page_2").fadeOut(3000);
    $(".page_3").delay(3000).fadeIn(3000);
});

$("#bribe").click(function() {
    $("#bribe_text").fadeIn();
    $("#proceed").fadeIn();
    $("#kr_text").fadeOut();
    $("#krool").fadeOut(2000);
    $(".krool_button").fadeOut();
});

$("#proceed").click(function(){
     $(".page_3").fadeOut(3000);
    $(".page_4").delay(3000).fadeIn(3000);
});

$("#leave").click(function() {
    $("#funky_surfboard").fadeOut(2000);
    $("#fs").delay(2000).fadeIn(2000);
});

$("#take").click(function() {
    $("#funky_surfboard").fadeOut(2000);
    $("#fs").delay(2000).fadeIn(2000);
});

$("#r1").click(function() {
    $(".page_1").fadeOut(2000);
     $(".page_6").delay(2000).fadeIn(2000);
});

$(".donkeykong_quest1").click(function() {
    $(".page_2").fadeOut(2000);
     $(".page_6").delay(2000).fadeIn(2000);
});

$("#flee ").click(function() {
    $(".page_3").fadeOut(2000);
     $(".page_6").delay(2000).fadeIn(2000);
});

$(".page_5").mouseenter(function(){
$("#sad").delay(3000).fadeIn(1000);
});

$("#rs").click(function() {
    location.reload(false);
});

$("#rs1").click(function() {
    location.reload(false);
});

$("#run1").click(function() {
    $(".page_4").fadeOut(2000);
     $(".page_5").delay(2000).fadeIn(2000);
});

$("#run2").click(function() {
    $(".page_4").fadeOut(2000);
     $(".page_5").delay(2000).fadeIn(2000);
});






