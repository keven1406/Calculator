//Calculadora
//13/02/2017
//Elias Keven

function operacao(n1,operador,n2){
  if (operador == "+")
    return n1+n2;
  else if (operador == "-")
    return n1-n2;
  else if (operador == "x")
    return n1*n2;
  else if (operador == "/")
    return n1/n2;
  else
    return "Não posso efeturar uma operação com esse operador";
}
console.log(operacao(2,"+",2));