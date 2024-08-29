import React from 'react';
import Card from './componentes/card/index';

import img1 from './componentes/card/img/img1.png'
import img2 from './componentes/card/img/img2.png'
import img3 from './componentes/card/img/img3.png'

function App() {
  return (
    <>
      <h2>Projetos Cards</h2>
      <Card image={img1} text='Stewed cabboge with sauce' price='5.90'/>
      <Card image={img2} text='Puree soup with turkey pieces' price='7.55'/>
      <Card image={img3} text='Chicken with vegetables' price='3.99'/>
    </>
  );
}

export default App;
