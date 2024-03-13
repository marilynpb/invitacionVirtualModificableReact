import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import floresHeader from './img/Grupo03.webp'
import Header from './Components/Header';
import Content from './Components/Content';

function App() {
  return (
    <div className="App text-center text-focus-in">
        {/* Imagenes Decoracion Header*/}
        <img width="100px" src={floresHeader} align="left"/>
        <img className="p-0 m-0" width="100px" src={floresHeader} align="right" style={{transform: 'scaleX(-1)'}}/>

        {/* Header Layout */}
        <Header/>

        <Content/>
    </div>
  );
}

export default App;
