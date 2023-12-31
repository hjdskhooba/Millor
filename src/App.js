import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";
import "./scss/style.scss";
import Profile from "./pages/Profile/Profile";
import Layolog from "./pages/Catalog/Layolog";
import Store from "./pages/Contacts/Store";
import CoffeeFilters from "./pages/Catalog/Coffee/Coffee-Filters/Coffee-Filters";
import TeaFilters from "./pages/Catalog/Tea/Tea-Filters/Tea-Fiters";
import VendingFilters from "./pages/Catalog/Vending/Vending-Filters/Vending-Filters";
import HealthyFilters from "./pages/Catalog/HealthyEating/HealthyEating-Filters/HealthyEating-Filters";
import SignUp from "./pages/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";
import ProductCard from "./pages/Catalog/ProductCard/ProductCard";
import { CustomContext } from "./utils/Context";

function App() {
  const { category } = useContext(CustomContext);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/store" element={<Store />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Каталог товаров */}
        <Route path="/catalog" element={<Layolog />} />
        <Route path="/catalog/coffee" element={<CoffeeFilters />} />
        <Route path="/catalog/tea" element={<TeaFilters />} />
        <Route path="/catalog/wanding" element={<VendingFilters />} />
        <Route path="/catalog/healthy" element={<HealthyFilters />} />
        <Route
          path={`/catalog/coffee-drinks/card-item`}
          element={<ProductCard />}
        />
        <Route path={`/catalog/catalog/card-item`} element={<ProductCard />} />
        <Route
          path={`/catalog/healthy-eatings/card-item`}
          element={<ProductCard />}
        />
        {/* Каталог товаров */}
        {/* Корзина */}
        <Route path="/cart" element={<Cart />} />
        {/* Корзина */}
        {/* Профиль пользователя */}
        <Route path="/profile" element={<Profile />} />
        {/* Профиль пользователя */}
      </Route>
    </Routes>
  );
}

export default App;
