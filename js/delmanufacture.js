$(document).ready(function (){
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function (data){
        var select = $("#id")
        $.each(data, function (key, value){
            var option = $('<option value="' + value._id+ '">' + value._id + '</option>');
            select.append(option)
        })
        $(select).append(select)
    })
})

$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();
        var delArr=$('form').serializeArray();
        var del = delArr[0].value;
        console.log(del);
        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/manufacturers/' + d,
            type: 'DELETE',
            success: function () {
                window.alert("Sikeres törlés");
            },
            error: function () {
                window.alert("Hiba");
            }
        })
    })
})