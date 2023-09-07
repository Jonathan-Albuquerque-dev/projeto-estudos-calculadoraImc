function calcular(event) {
  event.preventDefault();

  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let resultado = document.getElementById("resultado");

  let pesoFormatado = Number(peso);
  let alturaFormatado = Number(altura);

  let imc = pesoFormatado / (alturaFormatado * alturaFormatado);
  let imc2 = imc.toFixed(2);

  if (imc < 17) {
    resultado.innerHTML = `Seu IMC é de : ${imc2} vc está muito abaixo do peso`;
  } else if (imc > 17 && imc < 18.5) {
    resultado.innerHTML = `Seu IMC é de : ${imc2} vc está abaixo do peso`;
  } else if (imc > 18.4 && imc < 24.99) {
    resultado.innerHTML = `Seu IMC é de : ${imc2} vc está com peso normal`;
  } else {
    resultado.innerHTML = `Seu IMC é de : ${imc2} vc está acima do peso`;
  }

  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}
