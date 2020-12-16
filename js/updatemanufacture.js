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
        var carArr=$('form').serializeArray();
        var car = {
            _id:carArr[0].value,
            name: carArr[1].value,
            country: carArr[2].value,
            founded: carArr[3].value,
        };
        var d = carArr[0].value;
        console.log(d);
        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/manufacturers/' + d,
            type: 'DELETE',

        });
        $.ajax({
            type:'post',
            url: 'https://webtechcars.herokuapp.com/api/manufacturers',
            data: JSON.stringify(car),
            dataType: "json",
            contentType: "application/json",
            success: function () {
                window.alert("Sikeres frissítés")
            },
            error: function () {
                window.alert("Hiba");
            }
        })
    })
});