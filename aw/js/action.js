$(function(){
    $('.action').children('.act').css('visibility','hidden');
    $('.action').mouseover(function(){
        $('.action').children('.act').css('visibility','hidden');
        $(this).children('.act').css('visibility','visible');
    });
});