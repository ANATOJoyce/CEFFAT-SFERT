import './App.css';

import Banner from './components/banner/Banner';
import Information from './components/information/Information';
import Service from './components/service/Service';
import Partners from './components/partner/Partner';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';  
import Navbar from './components/navbar/Navbar';
import Performance from './components/performance/Performance';
import Descriptions from './components/descriptions/Descriptions';

function App() {


  return (
    <> 
      <Navbar />  
      <Service />
      <Descriptions />
      <Information />
      <Banner />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
