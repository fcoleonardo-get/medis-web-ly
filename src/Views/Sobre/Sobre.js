import React from 'react';
import SobrePage from './SobrePage';


function Sobre() {

  const equipe = [
    "Francisco Leonardo Aureliano Ferreira",
    "Yakmuri Cosme da Silva"
  ]

  return (
    <SobrePage title={"O que é o Projeto?"} text="A proposta do trabalho é auxiliar os órgãos e os profissionais da área da saúde a melhor atender as pessoas com suspeita de ter 
                                                      contraído o novo coronavírus ou mesmo que já tenha contraído vírus, bem como toda a população em geral que está exposta a contaminação
                                                      pela doença e dessa forma necessitam de atendimento tanto para realizar testes rápidos para identificar se apresenta uma doença bem como 
                                                      receber auxílio sobre Quais medidas tomar em cada caso particular em caso de contaminação. Além desses, a plataforma assistirá aos gestores
                                                      de saúde por meio de dados em tempo real sobre todas as pessoas cadastradas na plataforma de forma a facilitar a tomada de decisão neste momento
                                                      único de pandemia que o mundo está vivenciando."
      equipe={"Equipe de desenvolvimento:"}
      listequipe={equipe}
    />

  )
}

export default Sobre;