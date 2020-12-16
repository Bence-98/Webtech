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
        var carArray=$('form').serializeArray();
        var car = {
            _id:null,
            name: carArray[0].value,
            consumption: carArray[1].value,
            color: carArray[2].value,
            manufacturer: carArray[3].value,
            avaiable: carArray[4].value,
            year: carArray[5].value,
            horsepower: carArray[6].value
        }
        $.ajax({
            type:'post',
            url: 'https://webtechcars.herokuapp.com/api/cars',
            data: JSON.stringify(car),
            dataType: "json",
            contentType: "application/json",
            success: function () {
                window.alert("Sikeres küldés");
            },
            error: function () {
                window.alert("Hiba");
            }
        })
    })
})