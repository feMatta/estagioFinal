'use client';

import React, { useState, useEffect } from 'react';


const Componente = () => {
  const [userForm, setUserForm] = useState({
    CNPJ: '',
    xNome: '',
    vNF: '',
    dVenc: '',
    xLgr: '',
    nro: '',
    xBairro: '',
    xMun: '',
    UF: '',
    CEP: ''
  });
  


  const readXMLFile = () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const xmlString = e.target.result;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

        // Acessando os elementos XML
        const CNPJValue = xmlDoc.getElementsByTagName('CNPJ')[0].textContent;
        const xNomeValue = xmlDoc.getElementsByTagName('xNome')[0].textContent;
        const vNFValue = xmlDoc.getElementsByTagName('vNF')[0].textContent;
        const dVencValue = xmlDoc.getElementsByTagName('dVenc')[0].textContent;
        const xLgrValue = xmlDoc.getElementsByTagName('xLgr')[0].textContent;
        const nroValue = xmlDoc.getElementsByTagName('nro')[0].textContent;
        const xBairroValue = xmlDoc.getElementsByTagName('xBairro')[0].textContent;
        const xMunValue = xmlDoc.getElementsByTagName('xMun')[0].textContent;
        const UFValue = xmlDoc.getElementsByTagName('UF')[0].textContent;
        const CEPValue = xmlDoc.getElementsByTagName('CEP')[0].textContent;

        // Atualizar o estado com os vNFes obtidos
        setUserForm({
          CNPJ: CNPJValue,
          xNome: xNomeValue,
          vNF: vNFValue,
          dVenc: dVencValue,
          xLgr: xLgrValue,
          nro: nroValue,
          xBairro: xBairroValue,
          xMun: xMunValue,
          UF: UFValue,
          CEP: CEPValue
        });

      };


      // Enviar dados para o servidor Node.js
      fetch('http://localhost:8080/', {
        method: 'POST',
        headers: {

          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userForm),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Sucesso:', data);
        })
        .catch((error) => {
          console.error('Erro ao processar o arquivo XML:', error);
        });

      reader.readAsText(file);
    } else {
      console.error('Nenhum arquivo selecionado.');
    }
  };

  const [storedData, setStoredData] = useState([]);

  // Função para obter os dados armazenados no banco de dados
  const fetchStoredData = async () => {
    try {
      const response = await fetch('http://localhost:8080/databaseEmpresa');
      const data = await response.json();
      setStoredData(data);
    } catch (error) {
      console.error('Erro ao obter dados armazenados:', error);
    }
  };
  // Executar a função ao carregar a página
  useEffect(() => {
    fetchStoredData();
  }, []);

  return (
    <div>
      <input type="file" id="fileInput" />
      <button onClick={readXMLFile}>Ler Arquivo XML</button>

      <p>CNPJ: {userForm.CNPJ}</p>
      <p>Nome: {userForm.xNome}</p>
      <p>Valor: {userForm.vNF}</p>
      <p>Data vencimento: {userForm.dVenc}</p>
      <p>Logradouro: {userForm.xLgr}</p>
      <p>Numero: {userForm.nro}</p>
      <p>Bairro: {userForm.xBairro}</p>
      <p>Municipio: {userForm.xMun}</p>
      <p>UF: {userForm.UF}</p>
      <p>CEP: {userForm.CEP}</p>
      <br></br>
      <br></br>
      <br></br>

      <h2>Dados do Cliente</h2>
      <br></br>
      <table border="1">
        <thead>
          <tr>
            <th>CNPJ</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Data vencimento</th>
            <th>Logradouro</th>
            <th>Numero</th>
            <th>Bairro</th>
            <th>Municipio</th>
            <th>UF</th>
            <th>CEP</th>

          </tr>
        </thead>
        <tbody>
          {storedData.map((item, index) => (
            <tr key={index}>
              <td>{item.CNPJ}</td>
              <td>{item.xNome}</td>
              <td>{item.vNF}</td>
              <th>{item.dVenc}</th>
              <th>{item.xLgr}</th>
              <th>{item.nro}</th>
              <th>{item.xBairro}</th>
              <th>{item.xMun}</th>
              <th>{item.UF}</th>
              <th>{item.CEP}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  );
};

export default Componente;