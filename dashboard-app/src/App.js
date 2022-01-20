
import './App.css';
import { NavBar } from './components/NavBar';
import { Dashboard } from './components/Dashboard';
import 'react-calendar/dist/Calendar.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Dashboard/>
    </div>
  );
}

export default App;
