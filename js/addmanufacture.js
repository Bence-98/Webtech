$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();
        var manufArray=$('form').serializeArray();
        var manufacture = {
            _id:null,
            name: manufArray[0].value,
            country: manufArray[1].value,
            founded: manufArray[2].value,
        }
        $.ajax({
            type:'post',
            url: 'https://webtechcars.herokuapp.com/api/manufacturers',
            data: JSON.stringify(manufacture),
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