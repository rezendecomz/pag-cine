import { useState, useEffect } from 'react';
import User from './status';

const MinhaConta = () => {
 
  return ( 
    <div>
    {useEffect(() => {
      console.log(User.usuario);
      User.trocaStatus();
            console.log(User.usuario);

      {/* document.getElementById('login').innerText = usuario;  */}
    })}
    <h1>Hello</h1>
    </div>
   );
}
 
export default MinhaConta;