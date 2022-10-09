
const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');
const divAparce = document.querySelector('.some');
const divDesaparece = document.getElementById('desaparece');
const palvraNova = document.getElementById('palavaNova')
const btn_adc_palavra = document.getElementById('btn_adc_palavra')
const list = ['caneca', 'mesa','caderno','computador'];
const btn_inicio = document.getElementById("comeca");
const btn_nvo = document.getElementById("nvo_Jogo");
const inputNovaPalavra =document.getElementById('InputNovaPalavra');
var segredo ="";
let palavra_certa = []
let letras_escolhidas=[]
let contador= 0

btn_adc_palavra.addEventListener('click',() =>{

        adc_palavra()
        divDesaparece.style.display= "flex";
        divAparce.classList.toggle('some')
})
btn_nvo.addEventListener('click',()=>{
        divDesaparece.style.display= "flex";
        divAparce.classList.toggle('some')
        contador = 0
        letras_escolhidas.splice(0, letras_escolhidas.length)
        palavra_certa.splice(0,palavra_certa.length)

})
btn_inicio.addEventListener('click',()=>{
        inicio_Do_jogo()
        document.addEventListener("keydown",(evento) => {
                const codigo_Letra = evento.keyCode;
               if(verificacao_de_tecla(codigo_Letra)){
                const letra = evento.key.toUpperCase()
                if(segredo.includes(letra)){
                       
                       mostra_letras_certas(letra)
                      
                      
                }
                else{
                        
                        contador++
                        mostra_letras_erradas(letra)
                        mostra_enforcado(contador);
                }
        
                }
        
                mostra_enforcado();
                MostrarVencedor()
                      
                         
        
        
              
        })
})






function inicio_Do_jogo(){
        
        
        apareceJogo()
        sorteia_Palavra()
        mostrar_forca()


        
       
}

function MostrarVencedor(){
        if(letras_escolhidas.length == segredo.length){
                setTimeout(()=>{
                        alert('vc venceu')
                }, 1000)
        }
}
function mostra_letras_certas(e){
        
        if(palavra_certa.indexOf(e) < 0){
                palavra_certa.push(e)
        for(i=0; i<segredo.length;i++){ //Java
                if(segredo[i] === e ){
                        letras_escolhidas.push(e)
                        escreverLetraCorreta(i)
                        
                       
                        
                      
                        
                }


        }
     
 }
       
}
function escreverLetraCorreta(index) {
        pincel.font = 'bold 40px Inter';
        pincel.lineWidth=6
        pincel.lineCap="round"
        pincel.lineJoin="round"
        pincel.fillStyle= "#0A3871"
  let largura=700/segredo.length
  pincel.fillText(segredo[index],+(largura*index),580)
  pincel.stroke()
}

function mostra_letras_erradas(e){
      
        pincel.font = '34px serif';
         largura = 600/8
        pincel.fillText(e,400+(largura*(contador/2)), 200);
}


 function apareceJogo(){
        palvraNova.style.display= "none";
        divDesaparece.style.display= "none";
        divAparce.classList.toggle('some')
       
        // divAparce.classList.add('aparece');
 }       
function desistir_Jogo(){

        alert("que pena, você perdeu!!")
        divDesaparece.style.display= "flex";
        divAparce.classList.toggle('some')
        contador = 0
        letras_escolhidas.splice(0, letras_escolhidas.length)
        palavra_certa.splice(0,palavra_certa.length)

}

function sorteia_Palavra(){
        const numero = list[Math.floor(Math.random()*list.length)].toUpperCase()
        segredo = numero;
        console.log(segredo);  

}
function verificacao_de_tecla(codigo){
        return codigo >= 65 && codigo <= 90;


}
function mostra_enforcado(desenho){


        
        if(desenho == 1){
                cabeça();
        }
        else if(desenho == 2){
                corpo();
        }
        else if(desenho == 3){
                braco_Direito();
        }
        else if(desenho == 4){
        braco_Esquerdo();
        }
        else if(desenho == 5){
       perna_Direita();
        }
        else if(desenho == 6){
                perna_Esquerda();
        }
        else if(desenho == 7){
                alert("Voce perdeu")}


}
function aparece_input (){
        palvraNova.style.display= "block";
        divDesaparece.style.display= "none";
        InputNovaPalavra.focus();
        
       



}
function adc_palavra(){
        
        list[list.length] = inputNovaPalavra.value;
}


function mostrar_forca(){
        pincel.clearRect(0,0,1200,800)
        pincel.lineWidth = 9
        pincel.lineCap = 'round';
        pincel.lineJoin = 'round';
        pincel.beginPath();
        pincel.moveTo(50,500);
        pincel.lineTo(500,500);
        pincel.moveTo(150,500);
        pincel.lineTo(150,200); //altura
        pincel.lineTo(250,200); //suporte da corda
        pincel.lineTo(250,250); //corda
        pincel.strokeStyle = '#0A3871';
        pincel.stroke();
        faz_linha()
}
function faz_linha(){
        pincel.clearRect(0,590,1200,5);
        pincel.lineWidth = 9
        pincel.lineCap = 'round';
        pincel.lineJoin = 'round';
        pincel.fillStyle = '#0A3871';
        pincel.font = '48px serif';
       
        pincel.beginPath();
        pincel.moveTo(0,590);
        var largura = 700/segredo.length;
            for(i=0; i<segredo.length;i++){
                pincel.moveTo((largura*i),590);
                pincel.fillRect(largura*i,590,50,5);
                }
                }   
function cabeça(){
        pincel.lineWidth = 9
        pincel.strokeStyle= '#0A3871';
        pincel.beginPath();
        pincel.arc(250,280,30,0,3*Math.PI);
        pincel.stroke();
    
    }
    function corpo(){
        pincel.lineWidth = 9
        pincel.beginPath();
        pincel.moveTo(250,310);
        pincel.lineTo(250,420); 
        pincel.strokeStyle= '#0A3871';
        pincel.stroke();
    
    
    }
    function braco_Direito(){
        pincel.lineWidth = 9
        pincel.beginPath();
        pincel.moveTo(250,340);
        pincel.lineTo(290,380);   
        pincel.strokeStyle= '#0A3871';
        pincel.stroke();
    
    
    } 
    function braco_Esquerdo(){
        pincel.lineWidth = 9
        pincel.beginPath();
        pincel.moveTo(250,340);
        pincel.lineTo(210,380); 
        pincel.strokeStyle= '#0A3871';
        pincel.stroke();
    
    
    }
    function perna_Direita(){
        pincel.lineWidth = 9
        pincel.beginPath();
        pincel.moveTo(250,420);
        pincel.lineTo(290,430); 
        pincel.strokeStyle= '#0A3871';
        pincel.stroke();
    
    
    }
    function perna_Esquerda(){
        pincel.lineWidth = 9
        pincel.beginPath();
        pincel.moveTo(250,400);
        pincel.lineTo(210,430); 
        pincel.strokeStyle= '#0A3871';
        pincel.stroke();
    
    
    }
