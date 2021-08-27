import './App.css';
import Navbar from './components/Navbar/Navbar'
import ScanMailPage from './pages/ScanMailPage/ScanMailPage';
import ViewHistoryPage from './pages/ViewHistoryPage/ViewHistoryPage';
import ScanResultPage from './pages/ScanResultPage/ScanResultPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route path="/scan" component={ScanMailPage}/>
            <Route path="/history" component={ViewHistoryPage}/>
            <Route path="/result" component={ScanResultPage}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
