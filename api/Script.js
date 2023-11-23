/*let url="dados/data.xml";
$.ajax(url)
    .done(function(xml){
        $(xml).find("dest").each(function(){
            $("#cards").append(`<div class="card">
                                <p class="nome"> ${ $(this).find("xNome").text()}</p>
                                <p class="CNPJ"> ${ $(this).find("CNPJ").text()}</p>
                                <p class="valor"> ${ $(this).find("vNF").text()}</p>
                                <p class="vencimento_boleto"> ${ $(this).find("dVenc").text()}</p>
                                <div clas="entrega">
                                    <p class="rua"> ${ $(this).find("xLgr").text()}</p>
                                    <p class="numero"> ${ $(this).find("nro").text()}</p>
                                    <p class="bairro"> ${ $(this).find("xBairro").text()}</p>
                                    <p class="municipio"> ${ $(this).find("xMun").text()}</p>
                                    <p class="estado"> ${ $(this).find("UF").text()}</p>
                                    <p class="CEP"> ${ $(this).find("CEP").text()}</p>
                                </div>
                                </div>
                                `);
        })
    })
    .fail(function(){
        alert ("Erro ao ler arquivo XML");
    })
    */


    function readXMLFile() {
      const fileInput = document.getElementById('fileInput');
      const file = fileInput.files[0];
    
      if (file) {
        const reader = new FileReader();
    
        reader.onload = function (e) {
          const xmlString = e.target.result;
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    
          // Agora você pode acessar os elementos XML como desejar
          const CNPJ = xmlDoc.getElementsByTagName('CNPJ')[0].textContent;
          const xNome = xmlDoc.getElementsByTagName('xNome')[0].textContent;
          const vNF = xmlDoc.getElementsByTagName('vNF')[0].textContent;
          const dVenc = xmlDoc.getElementsByTagName('dVenc')[0].textContent;
          const xLgr = xmlDoc.getElementsByTagName('xLgr')[0].textContent;
          const nro = xmlDoc.getElementsByTagName('nro')[0].textContent;
          const xBairro = xmlDoc.getElementsByTagName('xBairro')[0].textContent;
          const xMun = xmlDoc.getElementsByTagName('xMun')[0].textContent;
          const UF = xmlDoc.getElementsByTagName('UF')[0].textContent;
          const CEP = xmlDoc.getElementsByTagName('CEP')[0].textContent;
    
          // Exibindo as variáveis no console, você pode fazer o que quiser aqui
          console.log('CNPJ:', CNPJ);
          console.log('Nome:', xNome);
          console.log('Valor:', vNF);
          console.log('Data Vencimento:', dVenc);
          console.log('Logradouro:', xLgr);
          console.log('Numero:', nro);
          console.log('Bairro:', xBairro);
          console.log('Municipio:', xMun);
          console.log('UF:', UF);
          console.log('CEP:', CEP);
    
          const data = {
            CNPJ,
            xNome,
            vNF,
            dVenc,
            xLgr,
            nro,
            xBairro,
            xMun,
            UF,
            CEP
          };
    
          // Enviar dados para o servidor Node.js
          fetch('http://localhost:8080/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(response => response.json())
            .then(data => {
              console.log('Sucesso:', data);
            })
            .catch((error) => {
              console.error('Erro:', error);
            });
        };
    
        reader.readAsText(file);
      } else {
        console.error('Nenhum arquivo selecionado.');
      }
    };
    

//export default readXMLFile;


/* import React, { useState } from "react";

 const MeuComponente = () => {
   const [CNPJ, setCNPJ] = useState('');
   const [xNome, setxNome] = useState('');
 
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
 
         // Exibindo as variáveis no console
         console.log('CNPJ:', CNPJValue);
         console.log('xNome:', xNomeValue);
 
         // Atualizar o estado com os valores obtidos
         setCNPJ(CNPJValue);
         setxNome(xNomeValue);
       };
 
       reader.readAsText(file);
     } else {
       console.error('Nenhum arquivo selecionado.');
     }
   };
 
  /* return (
     <div>
       <button onClick={readXMLFile}>Ler Arquivo XML</button>
       <p>CNPJ: {CNPJ}</p>
       <p>xNome: {xNome}</p>
     </div>
   );
 };
 
 export default MeuComponente;*/

