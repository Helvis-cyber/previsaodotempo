const chave = "36ce3c882b825bbbfb834ff5b0c2c2f6";

function botao() {
  var cidade = document.querySelector(".valor-cidade").value;
  procurarCidade(cidade);
}
async function procurarCidade(cidade) {
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cidade +
    "&appid=" +
    chave +
    "&lang=pt_br" +
    "&units=metric";
  var resposta = await fetch(url);
  var dados = await resposta.json();
  mostrarNaTela(dados);
}
function mostrarNaTela(dados) {
  console.log(dados);
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".descricao").innerHTML = dados.weather[0].description;
  document.querySelector(".icone").src =
    "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
  document.querySelector(".umidade").innerHTML =
    "Umidade " + dados.main.humidity + "%";
}
