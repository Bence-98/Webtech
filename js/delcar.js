$(document).ready(function (){
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function (data){
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
        var dArr=$('form').serializeArray();
        var d = dArr[0].value;
        console.log(d);
        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/cars/' + d,
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