import React from 'react';
import Componente from './frontend/Componente';

/*const App = () => {
    return (
        <div>
            <h2>Exibição de Resultado</h2>
            <Componente />
            {/* Adicione mais lógica ou componentes conforme necessário */
//        </div>
//    );
//};*/

const App = () => {
    return React.createElement('div', null,
        React.createElement('h2', null, 'Exibição de Resultado'),
        React.createElement(Componente, null)
        // Adicione mais lógica ou componentes conforme necessário
    );
};

export default App;
