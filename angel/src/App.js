
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Aboutus from './Components/Aboutus';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LoginComponent from './Components/LoginComponent';
import SignupComponent from'./Components/SignupComponent';
import UpdateProfile from './Components/UpdateProfile';

function App() {
  return (
    <div className="App">
     <NavbarComp/>  
     <BrowserRouter>
           <Routes>
            <Route exact path='/'element={<home/>}/>
            <Route  path = '/Aboutus' element={<Aboutus/>}/> 
            <Route  path = '/UpdateProfile' element={<UpdateProfile/>}/>
            <Route  path = '/LoginComponent' element={<LoginComponent/>}/> 
            <Route  path = '/SignupComponent' element={<SignupComponent/>}/> 
            
            
           </Routes>
           </BrowserRouter>
     
       </div>
  );
}

export default App;
