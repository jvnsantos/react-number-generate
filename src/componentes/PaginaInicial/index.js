import React, { useState } from 'react';
import './estilo.css';

export default function PaginaInicial(props) {

  const [numeroAleatorio, setNumeroAleatorio] = useState(0);

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (100 - 1) + 1);
    setNumeroAleatorio(novoNumero);
  }

  return (
    <div className="conteudo-centralizado">
      <h3>Número aleatório:</h3>
      <h1>{numeroAleatorio}</h1>

      <div className='area-botao'>
        <label>
          Click no botão abaixo para gerar um número aleatório:
          </label>

        <button onClick={gerarNumero}>
          {/* //Texto Botão */}
          {props.children}
        </button>


      </div>
    </div>
  );
}

