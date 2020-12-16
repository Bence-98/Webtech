$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();
        var manufArr=$('form').serializeArray();
        var manufacture = {
            _id:null,
            name: manufArr[0].value,
            country: manufArr[1].value,
            founded: manufArr[2].value,
        }
        $.ajax({
            type:'post',
            url: 'https://webtechcars.herokuapp.com/api/manufacturers',
            data: JSON.stringify(manufacture),
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