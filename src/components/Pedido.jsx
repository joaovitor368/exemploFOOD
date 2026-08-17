import React, { useState } from 'react'

//ARRAY DE OBJETOS CONTENDO ESTADO INICIAl DO CARDAPIO

const cardapio=[
    {id:1,nome:"Combo-01",preço:25.00,disponivel:true,quantidade:0},
    {id:2,nome:"Combo-02",preço:35.00,disponivel:true,quantidade:0},
    {id:3,nome:"Combo-03",preço:45.00,disponivel:true,quantidade:0},
    {id:4,nome:"Combo-04",preço:55.00,disponivel:true,quantidade:0},
];

const Pedido = () => {
    //HOOK-usestate-Manipula o estado da variavel
    //Estados para gerenciar a lista de itens
    const [itens,setItens]=useState(cardapio);
    const [status, setStatus] = useState("");
    const [enviar, setEnviar] = useState(false);
    //valor fixo adicionado ao total quando tiver items no carrinho
    const taxaEntrega=5.00;

    //função que altera a quantidade de um pedido
    const alterarQuantidade = (id, valor) => {
        setItems(prev =>
            //map:percorre a lista para criar um novo array sem modificar o original(IMUTABILIDADE)
            prev.map(item =>
                //TERNÁRIO:verifica se o item da iteração atual e o que deve fazer alterado
                // SPRED(..item) copia as prioridades do item e atualiza apenas a quantidade mantendo o resto
                //Math.max: objeto que garante que a qunatidade nunca seja menor que
                //Item: retorna o item intacto caso id nao corresponde 
                item.id === id ? { ...item, quantidade: Math.max(0, item.quantidade + valor) }
                    : item
            )

        )

    }



    
  return (
    <div>
      
    </div>
  )
}

export default Pedido
