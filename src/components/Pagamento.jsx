import React from "react";
import Pag from "./Pagamento.module.css";

const Pagamento = ({precoUn, qtde, money = 0 }) => (
  <div className={Pag.main}>    
      <p className={Pag.money}> 
      Preço Un: {precoUn.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} | Qtde: {qtde}
      </p>                 
      <button>Pagar {money.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}            </button>
  </div>
);

export default Pagamento;

