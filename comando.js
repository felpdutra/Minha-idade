var anoNasc = document.getElementById("nasc");
var masc = document.getElementById("masc");
var fem = document.getElementById("fem");
var img = document.getElementById("img");
var genero = document.getElementById("genero");
var ilustra = document.getElementById("ilustra");
var head = document.getElementById("head");
var placa = document.getElementById("placa");
var data = new Date();
var resultado = document.getElementById("rIdade");
var anoAtual = data.getFullYear();

var hora = data.getHours();
var infHora = document.getElementById("inf");



function date(){
    let infH = infHora;
    if(hora> 0 && hora <12){
        
        document.body.style.backgroundColor= 'rgb(255, 255, 156)';
        head.style.color = 'black';
        infH.innerHTML = `Atualmente são ${hora} hora(s).`;
        infH.style.fontWeight = 'bold'
        ilustra.setAttribute("src", "/img/sol.png");

    }else if(hora>=12 && hora <=18){
        document.body.style.backgroundColor = 'rgb(255, 221, 176)';
        head.style.color = 'black'
        infH.innerHTML = `Atualmente são ${hora} hora(s).`
        infH.style.fontWeight = 'bold'
        ilustra.setAttribute("src", "/img/sol.png")
    }else{
        document.body.style.backgroundColor = 'black';
        infH.style.color = 'black'
        infH.innerHTML = `Atualmente são ${hora} hora(s).`
        infH.style.backgroundColor = 'white'
        infH.style.fontWeight = 'bold'
        head.style.color = 'white'        
        ilustra.setAttribute("src", "/img/lua.png");
        
    }


}

function calculo(){
    let nasc = anoNasc.value;
    let idade = anoAtual - nasc;
    let gener0 = genero;
    gener0 = '';

   
    let msex = document.getElementsByName("gender");
    if(anoNasc.value.length == 0 || anoNasc.value > anoAtual){
        alert("[ERRO] POR FAVOR INSIRA SEU ANO DE NASCIMENTO CORRETAMENTE.")
    }
    else if(msex[0].checked){
        gener0 = 'HOMEM';
        resultado.innerHTML = `Você é um ${gener0} e possui ${idade} anos.`
        
        img.setAttribute("src", "/img/homem.png");
    }else{
        gener0= 'MULHER';
        resultado.innerHTML = `Você é uma ${gener0} e possui ${idade} anos. `
        
        img.setAttribute("src", "/img/mulher.png");
    }

    
}













