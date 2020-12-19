import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import { Route,Switch } from 'react-router-dom';
import DataComponent from './Components/DataComponent';

function App() {
  return (
    <div className="App">
      <section className="App-header">
       <Header/>
       <Content/>
       {/* <Route path='/' render={() => <Routes/>} /> */}
      </section>
        
    </div>
  );
}

export default App;


const Routes = (props) => {
  // console.log(props, "popopp")
  return (
    <Switch>
      <Route path='/' component={Content} />
      {/* <Route  path='/' component={Content} /> */}

    </Switch>
  );
}

function Prices(props) {
  console.log(props)
  const matchParams = window.location.pathname;
  console.log(matchParams, "href")
  let firstpath = (matchParams.split('/')[1]);
  let secondpath = (matchParams.split('/')[2]);
  console.log(secondpath,"secondpath")

  if (firstpath === '') {
    return (
      <Content {...props} key={matchParams} />
    )
  }

}