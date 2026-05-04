import './App.css';
import {AllRoutes} from './routers/AllRoutes'
import {Header, Footer} from "./components"

function App() {
  return (
    <div className="App">
      <Header/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
