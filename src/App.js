import { useState, useEffect } from "react";
import './App.css';
import { fetchData } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Details from "./pages/details/Details"
import Explore from "./pages/explore/Explore";
import SearchResult from "./pages/searchResults/SearchResult"
import Home from "./pages/home/Home"
import PageNotFound from "./pages/404/PageNotFound";


function App() {

  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    apiTesting();
  }, [])

  const apiTesting = () => {
    fetchData("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    })
  }
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
