import React, {useState, useEffect} from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import './scss/style.scss'
import Layout from './Layout/Layout';
import VendingItems from './pages/Catalog/Vending/Vending-Items/Vending-Items';
import HealthyEatingItems from './pages/Catalog/HealthyEating/HealthyEating-Items/HealthyEating-Items';
import CoffeeItems from "./pages/Catalog/Coffee/Coffee-Items/Coffee-Items";
import TeaItems from './pages/Catalog/Tea/Tea-Items/Tea-Items';
import Contacts from './pages/Contacts/Contacts';
import Blog from './pages/Blog/Blog';
import ClipLoader from 'react-spinners/ClipLoader'

function App() {
  const [loading, setLoading] = useState(false)
  document.addEventListener('DOMContentLoaded', ()=>setLoading(true))
  return (
  <>
  {
    loading ? <ClipLoader color={'#123abc'} loading={loading} size={64}/> :
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/coffee' element={<CoffeeItems/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/tea' element={<TeaItems/>}/>
        <Route path='/wending' element={<VendingItems/>}/>
        <Route path='/healthy' element={<HealthyEatingItems/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Route>
    </Routes>
  }
  </>
  );
}

export default App;
