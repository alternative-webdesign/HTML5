$(function(){
   $('.ascenseur').next('div').hide();
   $('.ascenseur').click(function(){
        $('.ascenseur').next('div').slideUp(1000);
        $(this).next('div').slideDown(1000);
    });
});    