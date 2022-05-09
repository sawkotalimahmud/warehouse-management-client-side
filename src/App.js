import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Pages/Sheard/Footer/Footer";
import Header from "./Pages/Sheard/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Products from "./Pages/Products/Products";
import SignUp from "./Pages/SignUp/SignUp";
import PageNotFound from "./Pages/Sheard/PageNotFound/PageNotFound";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import AddProduct from "./Pages/AddProduct/AddProduct";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/products"
          element={
            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/products/:id"
          element={
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addproduct"
          element={
            <RequireAuth>
              <AddProduct></AddProduct>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
