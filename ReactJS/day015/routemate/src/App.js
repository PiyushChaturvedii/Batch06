import "./App.css";
import { Header, Footer } from "./components/index";
import { AllRoutes } from "./routes/AllRoutes";
// import { Footer } from "./components/Footer";
// import { ProductList } from "./pages/ProductList";
// import { ProductDetail } from "./pages/ProductDetail";
// import { Contact } from "./pages/Contact";
// import { PageNotFound } from "./pages/PageNotFound";
// import {ContactEu} from './components/ContactEu';
// import {ContactIn} from './components/ContactIn'
// import {ContactUs} from './components/ContactUs'
// import {ContactOther} from './pages/Contact/ContactOther'

function App() {


  return (
    <div className="App">
      <Header />
        <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;
