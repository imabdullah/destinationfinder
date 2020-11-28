import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />

      </div>
    </Router>
  );
}

export default App;
