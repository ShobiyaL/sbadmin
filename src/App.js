
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';

function App() {
  let data={
    monthly:"Rs: 40,000",
    annual:"Rs: 4,00,000",
    task:70,
    pending:18
  }
  
  return <>
    <div className='main-wrapper'>
      <Sidebar/>
      <div id="dashB">
      <Navigation/>
      <Dashboard data={data}/>
      </div>
      
    </div>
  </>
    
  
}
export default App;
