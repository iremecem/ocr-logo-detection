import './App.css';
import Navbar from './components/Navbar/Navbar'
import ScanMailPage from './pages/ScanMailPage/ScanMailPage';
import ViewHistoryPage from './pages/ViewHistoryPage/ViewHistoryPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route path="/scan" component={ScanMailPage}/>
            <Route path="/history" component={ViewHistoryPage}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
