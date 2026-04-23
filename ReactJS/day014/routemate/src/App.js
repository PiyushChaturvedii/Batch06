import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import { ProductDetail } from "./pages/ProductDetail";
import { Contact } from "./pages/Contact";
import { Admin } from "./pages/Admin";
import { PageNotFound } from "./pages/PageNotFound";
import {ContactEu} from './components/ContactEu';
import {ContactIn} from './components/ContactIn'
import {ContactUs} from './components/ContactUs'
import {ContactOther} from './components/ContactOther'

function App() {
  const user = false;
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />}>
            <Route path="in" element={<ContactIn />} />
            <Route path="eu" element={<ContactEu />} />
            <Route path="us" element={<ContactUs />} />
            <Route path="*" element={<ContactOther />} />
          </Route>
          <Route
            path="/admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          />
          <Route path="*" element={<PageNotFound title="404" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
