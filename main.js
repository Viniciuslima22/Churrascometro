// Carne - 400g por pessoa + de 6 horas 650g
// Cerveja - 1200ml por pessoa + de 6 horas 2000ml
// Refrigerante/agua 1000ml pro pessoa + de 6 horas 1500ml
// criança vale po 0,5

let inputAdultos = document.getElementById("adultos")
let inputCrianca = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
 

let resultado = document.getElementById('resultado')

function calcular(){

    console.log('Calculando')
    
    let adultos = inputAdultos.value
    let criancas = inputCrianca.value
    let duracao = inputDuracao.value

    let qtdTotalcarne = carnePP(duracao) * adultos + carnePP(duracao) /  2 * criancas;
    let qtdTotalceveja = cervejaPP(duracao) * adultos;

    let qtdTotalrefri = refriPP(duracao) * adultos + refriPP(duracao) /  2 * criancas;
   
resultado.innerHTML = `<p> ${qtdTotalcarne/1000}KG de Carne<p>`
resultado.innerHTML += `<p> ${Math.ceil(qtdTotalceveja/1000)}Latas de Cerveja <p>`
resultado.innerHTML += `<p> ${Math.ceil(qtdTotalrefri/1000)}Pet de Refrigerante <p>`



}
     
    function carnePP(duracao){
        if(duracao >= 6) 
           {return 650 }
           
           else {return 400}
        
        }

        function cervejaPP(duracao){
            if(duracao >= 6) 
               {return 2000 }
               
               else {return 1200}
            
            }


            function refriPP(duracao){
                if(duracao >= 6) 
                   {return 1500 }
                   
                   else {return 1000}
                
                }
    

