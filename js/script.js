$('#js-button').on('click', function(){
    if ($('#submenu').hasClass('invis')) {
        $('#submenu').removeClass('invis').addClass('vis');
        return
    }
    $('#submenu').removeClass('vis').addClass('invis');
});



