let today = moment();
$('#currentDay').text(today.format ('dddd, MMMM, Do'));

$('.saveBtn').on('click', function (){
    let btn = $(this);
    let textarea = btn.siblings('textarea');
    let val = textarea.val();
    let id = textarea.attr('id');

    localStorage.setItem(id, val);
});

$('textarea').each(function() {
    let currentHour = moment().hours();

    let time = parseInt($(this).attr('id'));

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

    console.log(currentHour, time);
});

$("#9").val(localStorage.getItem('9'));
$("#10").val(localStorage.getItem('10'));
$("#11").val(localStorage.getItem('11'));
$("#12").val(localStorage.getItem('12'));
$("#13").val(localStorage.getItem('13'));
$("#14").val(localStorage.getItem('14'));
$("#15").val(localStorage.getItem('15'));
$("#16").val(localStorage.getItem('16'));
$("#17").val(localStorage.getItem('17'));