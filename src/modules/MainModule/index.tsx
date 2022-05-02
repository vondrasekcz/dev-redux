import { Routes, Route, } from "react-router-dom";
import Layout from "../../components/Layout.tsx";
import Api from "../Api/Api";
import Counters from "../Counters/Counters";
import Home from "../Home/Home";
import Products from "../Products";
import ProductDetail from "../Products/ProductDetail";
import ProductNew from "../Products/ProductNew";


const MainModule = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="counters" element={<Counters />} />
        <Route path="api" element={<Api />} />
        <Route path="products" element={<Products /> }>
          <Route path="new" element={<ProductNew />} />
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};


export default MainModule;
