const Ingressos = () => {
  return ( 

    <div className="container">
    <h1>Reserva de assentos</h1>          
    {/* <div className="ref d-flex justify-content-center">             */}
    <div class="disponivel">Disponível</div>
     <div class="ocupada">Ocupada</div>
    {/* </div>     */}
     {/* <h1>Selecione</h1>                */}
     <br></br>
     
    </div> 

  );
} 

// Gera um array de reservas de poltonas
var reservas = [], qtdePoltronas = 35;

for (let i = 0; i < qtdePoltronas; i++) {
  reservas[i] = false;    
}

let localOcupado = 0;

const fnIniciarSessao = (array) => {
    const containerSeats = document.getElementById("poltronas")

    for (const i in array) {
         let setPoltrona = document.createElement("p");
         setPoltrona.className = "poltronas";            
         setPoltrona.style.backgroundColor = "green";                          
         setPoltrona.innerHTML =`<h1>${parseInt(i) + 1}</h1>`;
                                
                
                containerSeats.appendChild(setPoltrona);                         
        }           
    }

    fnIniciarSessao(reservas);

    const fnReservarPoltrona = () => {       
        
      const reserverBtn = document.getElementById("poltronas") ;
             reserverBtn.addEventListener("click",marcar);       
   }    

   const fnOcuparLugar = (i) => {
       const setPoltrona = document.querySelectorAll(".poltronas");        
       setPoltrona[i].style.backgroundColor = "red";       
   }      

   const marcar = () => {
     if (localOcupado === qtdePoltronas) {
      fnSessaoLotada();                           
     } else { 
           for (let i = 0; i < reservas.length; i++) {
               if (reservas[i] === false) {
                   reservas[i] = true;
                   fnOcuparLugar(i);
                   localOcupado++;
                   let qtdeOcupada = i + 1;
                   fnResumoContagem(qtdeOcupada);
                   
                   break;
               }
          }
       }
   }        

const  fnSessaoLotada = () => {
alert("Atenção: Sessão lotada!");
}
// var x = '5*-'
const fnResumoContagem = (qtdeOcupada) => {
   const ticket = document.getElementById("ingresso");
   ticket.innerHTML = `<div id="tela">
                       Tela do Cinema
 </div>
    <div class="root">                            
    <p>Qtde Ocupada: ${qtdeOcupada}</p>                           
    <p>Qtde Disponível: ${qtdePoltronas-qtdeOcupada}</p>
  </div>`                        
}


fnReservarPoltrona();

export default Ingressos;





