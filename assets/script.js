let item = (x) => document.querySelector(x);
let itens = (y) => document.querySelectorAll(y);
function latencia(){
function apertou(){
    valor = item('#texto').value;
    $(function(){
        $.ajax({
            url: 'https://api.tenor.com/v1/search?q=' + valor,
            type: 'GET',
            dataType: 'json',
            success: function(json){
                let resultados = json.results;
                for(var i in resultados){
                 itens('.col')[i].innerHTML = `<img src="${resultados[i].media[0].gif.url}">`;
                }
            }
        });
    });
    }
    setTimeout(apertou,1700);
}


//https://api.tenor.com/v1/search?q=
