import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Pages/Sheard/Footer/Footer';
import Header from './Pages/Sheard/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/Products';
import SignUp from './Pages/SignUp/SignUp';
import PageNotFound from './Pages/Sheard/PageNotFound/PageNotFound';
import { ToastContainer } from 'react-toastify';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/products/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
