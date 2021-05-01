import React, { useState } from "react";
import Pag from "./Pagamento.module.css";
import PayPal from "./PayPal";
const Pagamento = ({precoUn, qtde, money = 0 }) => {
  const [checkout, setCheckOut] = useState(false);
  
  return (
    <div className = {Pag.main}>
      <section className={Pag.money}> 
       <h4>Valor {precoUn.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} | Qtde {qtde}</h4>
       <h2>Total {money.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
       </section>                   

      {        
       checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);            
          }}
        >  {PayPal}  
        Pagar                  
        </button>
      ) }      
    </div>
  );
}
export default Pagamento;

