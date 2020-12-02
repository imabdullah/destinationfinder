import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Test  from './components/pages/Test';
import Search from './components/views/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
<br /><br />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/test" component={Test}/>
        <Route path="/test2" component={Search}/>
      </div>
    </Router>
  );
}

export default App;
