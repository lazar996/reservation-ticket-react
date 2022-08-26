import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Pages from './Page/Pages';
import NavbarElements from './components/Header/NavbarElements';
import Sidebar from './components/Header/Sidebar/Sidebar';
import { useState } from 'react';
import FooterPage from './components/Footer/FooterPage';



function App() {

  const [isOpen, SetIsOpen] = useState(false);
  
  const toggle=() => {

    SetIsOpen(!isOpen)
  }

  return (
  
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <NavbarElements toggle={toggle}/>
      <Pages/>

      <FooterPage/>
    
    </div>
   
  );
}


export default App;
