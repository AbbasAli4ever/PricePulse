import Login from "../pages/Login";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import SalesLayout from "../components/SalesLayout";
import ItemGrid from "../components/ItemGrid";
import ItemsBanner from "../components/ItemsBanner";
import ProductArray from "../components/ProductArray";
import FilteredLayout from "../components/FilteredLayout";
import Navbar from "../components/Navbar";
import ShowItem from "../pages/ShowItem";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Favorites from "../pages/Favorites";
import Signup from "../pages/Signup";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
  const location = useLocation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [location.pathname]);

  const prodArray = ProductArray();
  return (
    <>
      {show && <Navbar />}
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home array={prodArray.slice(0,15)} />} />
        <Route path="/aboutus" element={<AboutUs />} />

        <Route path="/sales/*">
          <Route
            index
            element={
              <SalesLayout>
                <ItemsBanner name='ALL ITEMS'/>
                <ItemGrid array={prodArray} />
              </SalesLayout>
            }
          />
          <Route path=":slug" element={<FilteredLayout />} />
        </Route>
        <Route path="/contactus" element={<Contact />} />
        <Route path="/details/:id" element={<ShowItem array={prodArray} />} />
        <Route path="/favorites" element={<Favorites />} />
          <Route path="/search/:slug" element={<SearchBox />} />
        </Route>
      </Routes>
      {show && <Footer />}
    </>
  );
}
