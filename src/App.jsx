import './App.css'
import React,{useEffect} from 'react';
import Header from './components/Header'
import Home from './pages/Home/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';


function App() {
    useEffect(() => {
      AOS.init();
    }, []);

  return(
    <>
   <Header />
   <Home />
   <Footer />
    </>
  )
      
}

export default App
