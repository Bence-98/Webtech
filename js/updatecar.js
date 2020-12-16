$(document).ready(function (){
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function (data){
        var select = $("#manufacturer")
        $.each(data, function (key, value){
            var option = $('<option value="' + value.name+ '">' + value.name + '</option>');
            select.append(option);
        })
        $(select).append(select);
    })
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
        var carArray=$('form').serializeArray();
        var car = {
            _id:carArray[0].value,
            name: carArray[1].value,
            consumption: carArray[2].value,
            color: carArray[3].value,
            manufacturer: carArray[4].value,
            avaiable: carArray[5].value,
            year: carArray[6].value,
            horsepower: carArray[7].value
        }
        var d = carArray[0].value;
        console.log(d);
        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/cars/' + d,
            type: 'DELETE',

        })
        $.ajax({
            type:'post',
            url: 'https://webtechcars.herokuapp.com/api/cars',
            data: JSON.stringify(car),
            dataType: "json",
            contentType: "application/json",
            success: function () {
                window.alert("Sikeres frissítés");
            },
            error: function () {
                window.alert("Hiba");
            }
        })
    })
})