
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Deals from './pages/Deals'
import Login from './pages/Login';
import Signup from './pages/Signup';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import AddItem from './pages/AddItem';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import Product4 from './pages/Product4';
import Product5 from './pages/Product5';
import Product6 from './pages/Product6';
import FetchDataFromLocal from './data/FetchDataFromLocal';
import FetchDataFromUrl from './data/FetchDataFromUrl';
import Logout from './pages/Logout';




function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
      <Route path="/" element= {<Login/>}/>
        <Route path="/home" element= {<Home/>}/>
        <Route path="contactus" element= {<Contact/>}/>
        <Route path="deal" element= {<Deals/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="additem" element={<AddItem/>}/>
        <Route path="product1" element={<Product1/>}/>
        <Route path="product2" element={<Product2/>}/>
        <Route path="product3" element={<Product3/>}/>
        <Route path="product4" element={<Product4/>}/>
        <Route path="product5" element={<Product5/>}/>
        <Route path="product6" element={<Product6/>}/>
        <Route path="signout" element={<Logout/>}/>
        <Route path="fetchfatafromfocal" element={<FetchDataFromLocal/>}/>
        <Route path="fetchfatafromurl" element={<FetchDataFromUrl/>}/>
        


      </Routes>

     
    </div>
    </BrowserRouter>
  );
}

export default App;
