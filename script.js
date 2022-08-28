function inserir(i){
    const resultado = document.getElementById('resultado');
    if (resultado.innerHTML == "0"){
        resultado.innerHTML += i;
        resultado.innerHTML = resultado.innerHTML.substring(1);
    }else{       
        resultado.innerHTML += i;
    }
 }
 
 function numeros(){
     const input = Array.from(document.getElementsByTagName('input'));
 
     input.map(
         function (element){
             if (element.classList[0] != 'operador'){
             element.onclick = function (){inserir(element.value);}}
         })
 }
 
 
 function apagarTudo(){
     document.getElementById('resultado').innerHTML = "" 
 }
 
 function apagar(){
    const resultado = document.getElementById('resultado');
    const tamanho = resultado.innerHTML.length;
    resultado.innerHTML = resultado.innerHTML.substring(0, tamanho-1)
 }
 
 async function checarVazio(){
     
     const resultado = document.getElementById('resultado');
     if (Boolean(resultado.innerHTML) == false){
         resultado.innerHTML = "0"
     }
 }