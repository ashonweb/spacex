import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import DataComponent from './Components/DataComponent';
import FilterComponent from './Components/FilterComponent';

function App() {
  return (
    <div className="App">
      <section className="App-header">
       <Header/>
        <Content/>

      </section>
        
    </div>
  );
}

export default App;


