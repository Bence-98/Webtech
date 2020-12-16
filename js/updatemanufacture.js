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
        var manufArray=$('form').serializeArray();
        var manuf = {
            _id:manufArray[0].value,
            name: manufArray[1].value,
            country: manufArray[2].value,
            founded: manufArray[3].value,
        }
        var d = manufArray[0].value;
        console.log(d);
        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/manufacturers/' + d,
            type: 'DELETE',

        })
        $.ajax({
            type:'post',
            url: 'https://webtechcars.herokuapp.com/api/manufacturers',
            data: JSON.stringify(manuf),
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