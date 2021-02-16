import { useState, useEffect } from 'react';
import User from './status';

const MinhaConta = () => {
 
  return ( 
    <div>
    {useEffect(() => {
      document.getElementById('login').innerText = 'Bem-vindo, Fulano'; 
    })}
    <h1>Hello</h1>
    </div>
   );
}
 
export default MinhaConta;