import React, { useEffect, useState } from "react";
import api from './api';

export default function App() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    api.get("/users/")
       .then((response) => {
         console.log(response);
         setProdutos(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);
  return (
    <div className="produto-container">
       <h1>Relação de Produtos</h1>
        <ul>
           {produtos.map(produto => (
             <li key={produto.Id}>
                <b>Nome:</b>{produto.name}<br/>
                <b>Descrição:</b>{produto.user_id}<br/>
                <b>Preço:</b>{produto.preco}<br/>
            </li>
         ))}
        </ul>
    </div>
  );
}