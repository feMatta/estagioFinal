import React, { useState } from 'react';

const Componente = () => {
  const [CNPJ, setCNPJ] = useState('');
  const [xNome, setxNome] = useState('');
  const [vNF, setvNF] = useState('');
  const [dVenc, setdVenc] = useState('');
  const [xLgr, setxLgr] = useState('');
  const [nro, setnro] = useState('');
  const [xBairro, setxBairro] = useState('');
  const [xMun, setxMun] = useState('');
  const [UF, setUF] = useState('');
  const [CEP, setCEP] = useState('');
  


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

        // Atualizar o estado com os valores obtidos
        setCNPJ(CNPJValue);
        setxNome(xNomeValue);
        setvNF(vNFValue);
        setdVenc(dVencValue);
        setxLgr(xLgrValue);
        setnro(nroValue);
        setxBairro(xBairroValue);
        setxMun(xMunValue);
        setUF(UFValue);
        setCEP(CEPValue);
      };

      reader.readAsText(file);
    } else {
      console.error('Nenhum arquivo selecionado.');
    }
  };

  return (
    <div>
      <button onClick={readXMLFile}>Ler Arquivo XML</button>
      <p>CNPJ: {CNPJ}</p>
      <p>Nome: {xNome}</p>
      <p>Valor: {vNF}</p>
      <p>Data vencimento: {dVenc}</p>
      <p>Logradouro: {xLgr}</p>
      <p>Numero: {nro}</p>
      <p>Bairro: {xBairro}</p>
      <p>Municipio: {xMun}</p>
      <p>UF: {UF}</p>
      <p>CEP: {CEP}</p>
    </div>
  );
};

export default Componente;
