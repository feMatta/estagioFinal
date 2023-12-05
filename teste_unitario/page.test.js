import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Componente from './page';

describe('Componente', () => {
  test('readXMLFile function updates userForm state correctly', () => {
    // Arrange
    const { getByText, getByTestId } = render(<Componente />);
    const fileInput = getByTestId('fileInput');
    
    const xmlContent = `
      <root>
        <CNPJ>07872718000117</CNPJ>
        <xNome>COMERCIAL S.R.DE ALIMENTOS LTDA-ME	</xNome>
        <vNF>1136.23</vNF>
        <dVenc>2022-12-15</dVenc>
        <xLgr>R.ODONIA DA COSTA MACHADO TOLEDO	</xLgr>
        <nro>56</nro>
        <xBairro>TIRADENTES</xBairro>
        <xMun>CARIACICA</xMun>
        <UF>ES</UF>
        <CEP>29143529</CEP>
      </root>
    `;
    
    const file = new File([xmlContent], 'test.xml', { type: 'application/xml' });
    
    // Act
    fireEvent.change(fileInput, { target: { files: [file] } });
    fireEvent.click(getByText('Ler Arquivo XML'));

    // Assert
    expect(screen.getByText('CNPJ: 07872718000117')).toBeInTheDocument();
    expect(screen.getByText('Nome: COMERCIAL S.R.DE ALIMENTOS LTDA-ME	')).toBeInTheDocument();
    expect(screen.getByText('Valor: 1136.23')).toBeInTheDocument();
    expect(screen.getByText('Data vencimento: 2022-12-15')).toBeInTheDocument();
    expect(screen.getByText('Logradouro: R.ODONIA DA COSTA MACHADO TOLEDO	')).toBeInTheDocument();
    expect(screen.getByText('Numero: 56')).toBeInTheDocument();
    expect(screen.getByText('Bairro: TIRADENTES')).toBeInTheDocument();
    expect(screen.getByText('Municipio: CARIACICA')).toBeInTheDocument();
    expect(screen.getByText('UF: ES')).toBeInTheDocument();
    expect(screen.getByText('CEP: 29143529')).toBeInTheDocument();
  });
});


describe('Componente', () => {
  test('readXMLFile function updates userForm state correctly', () => {
    // Arrange
    const { getByText, getByTestId } = render(<Componente />);
    const fileInput = getByTestId('fileInput');
    
    const xmlContent = `
      <root>
        <CNPJ>06273476000182</CNPJ>
        <xNome>MECA Office Mobil. Eireli-ME		</xNome>
        <vNF>1103</vNF>
        <dVenc>2019-05-11</dVenc>
        <xLgr>AV. MARCOS DE FREITAS COSTA	</xLgr>
        <nro>1055</nro>
        <xBairro>Daniel Foseca</xBairro>
        <xMun>Uberlandia</xMun>
        <UF>MG</UF>
        <CEP>38400328</CEP>
      </root>
    `;
    
    const file = new File([xmlContent], 'test.xml', { type: 'application/xml' });
    
    // Act
    fireEvent.change(fileInput, { target: { files: [file] } });
    fireEvent.click(getByText('Ler Arquivo XML'));

    // Assert
    expect(screen.getByText('CNPJ: 06273476000182')).toBeInTheDocument();
    expect(screen.getByText('Nome: MECA Office Mobil. Eireli-ME		')).toBeInTheDocument();
    expect(screen.getByText('Valor: 1103')).toBeInTheDocument();
    expect(screen.getByText('Data vencimento: 2019-05-11')).toBeInTheDocument();
    expect(screen.getByText('Logradouro: AV. MARCOS DE FREITAS COSTA		')).toBeInTheDocument();
    expect(screen.getByText('Numero: 1055')).toBeInTheDocument();
    expect(screen.getByText('Bairro: Daniel Foseca')).toBeInTheDocument();
    expect(screen.getByText('Municipio: Uberlandia')).toBeInTheDocument();
    expect(screen.getByText('UF: MG')).toBeInTheDocument();
    expect(screen.getByText('CEP: 38400328')).toBeInTheDocument();
  });
});