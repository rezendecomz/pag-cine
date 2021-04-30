import React, { useState } from "react";
import Pag from "./Pagamento.module.css";
import PayPal from "./PayPal";
import Qr from "./IngressoQrCode";

const Pagamento = ({precoUn, qtde, money = 0 }) => {
  const [checkout, setCheckOut] = useState(false);
  
  return (
    <div className = {Pag.main}>
      <p className={Pag.money}> 
       Preço Un: {precoUn.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} | Qtde: {qtde}
       </p>  
      {        
       checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);            
          }}
        >  {PayPal.precoUn}
          Pagar {money.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}           
        </button>       
      ) }
      <Qr />
    </div>
  );
}
export default Pagamento;

