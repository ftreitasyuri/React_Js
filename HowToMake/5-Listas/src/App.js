import './App.css';
import OutraLista from './componente/OutraLista';

// import Evento from './componente/Evento';

function App() {

  const myItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Exemplo de Renderização de lista</h1>
      <OutraLista itens={myItens}/>
      <OutraLista itens={[]}/>
      
    </div>
  );
}

export default App;
