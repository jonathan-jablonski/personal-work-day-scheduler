let today = moment();
$('#currentDay').text(today.format ('dddd, MMMM, Do, h:mm:ss a'));

$('.saveBtn').on('click', function (){
    let btn = $(this);
    let textarea = btn.siblings('textarea');
    let val = textarea.val();
    let id = textarea.attr('id');

    localStorage.setItem(id, val);
});

$('textarea').each(function() {
    let currentHour = moment().hours();

    let time = $(this).attr('id');

    if(time < currentHour) {
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
    }else if(time > currentHour) {
        $(this).addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
    }else{
        $(this).addClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');
    }
});

$("#9").val(localStorage.getItem('9'));