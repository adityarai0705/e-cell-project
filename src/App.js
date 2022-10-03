import logo from './logo.svg';
import './App.css';
import NavBar from './JsElements/NavBar.js';
import Dashboard from './JsElements/Dashboard';
import ContestPage from './JsElements2/ContestPage';

function App() {
  let curPage = 'Contest';
  let NavBarStyle = '';
  let AppStyle = '';
  
  if( curPage == 'Contest'){
    NavBarStyle = {
      boxShadow : '0 0 0px black'
    }
  };
  return (
    <div className="App">
      <NavBar style={{NavBarStyle}}/>
      <Dashboard/>
      {/* <ContestPage/> */}
    </div>
  );
}

export default App;
