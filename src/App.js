import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './Components/Navbar';
import Home from './Pages/Home';
import Industries from './Pages/Industries';
import Services from './Pages/Services';
import Team from './Pages/Team';
import Clients from './Pages/Clients';
import Contact from './Pages/Contact';
import Footer from './Components/footer'
function App() {
  return (
    <Router>
          <MyNavbar/>

      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/industries" element={<Industries/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/clients" element={<Clients/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </main>
      </div>
      <Footer/>
    </Router>
  
    // <Router>
    //   <MyNavbar />
    //   <Container fluid className="pt-0 mt-0">
    //     <Routes>
    //       <Route path="/" element={
    //         <>
    //           <section id="home" className="section">
    //             <Home />
    //           </section>
    //           <section id="industries" className="section">
    //             <Industries />
    //           </section>
    //           <section id="services" className="section">
    //            <Services />
    //            </section>
    //            <section id="team" className="section">
    //            <Team />
    //            </section>
    //         </>
    //       } />
    //     </Routes>
    //   </Container>
    // </Router>
  );
}

export default App;
