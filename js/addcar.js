$(document).ready(function (){
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function (data){
        var select = $("#manufacturer")
        $.each(data, function (key, value){
            var option = $('<option value="' + value.name+ '">' + value.name + '</option>');
            select.append(option);
        })
        $(select).append(select);
    })
})

$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();
        var carArr=$('form').serializeArray();
        var car = {
            _id:null,
            name: carArr[0].value,
            consumption: carArr[1].value,
            color: carArr[2].value,
            manufacturer: carArr[3].value,
            avaiable: carArr[4].value,
            year: carArr[5].value,
            horsepower: carArr[6].value
        }
        $.ajax({
            type:'post',
            url: 'https://webtechcars.herokuapp.com/api/cars',
            data: JSON.stringify(car),
            dataType: "json",
            contentType: "application/json",
            success: function () {
                window.alert("Sikeres küldés")
            },
            error: function () {
                window.alert("Hiba");
            }
        })
    })
})