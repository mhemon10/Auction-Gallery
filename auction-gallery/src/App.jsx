
import React from 'react';
import Navbar from './components/Navbar';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import AuctionSection from "./components/AuctionSection";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Banner />
      <AuctionSection />
      <Footer/>
      <ToastContainer position="top-center" autoClose={2000} />

      {/* Add other sections like hero, main, footer here */}
    </div>
  );
}

export default App;
