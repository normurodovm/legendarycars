import { Routes, Route, Outlet } from "react-router";
import { Contact } from "./components/hero/contact";
import { About } from "./components/about/about";
import { Link } from "react-router-dom";
import Layout from "./components/layout/layout";
import productimg1 from "/public/product-img-1.png"
import { Cls } from "./components/adidas/adidas";
import { Nike } from "./components/nike/nike";


  
function App() {
  return (
    <>

    <div className="">
  
      {/* <div>
        <header className="p-7 bg-slate-800 mb-16">
              <h2 className="text-white">react router darsi</h2>
        </header>
        <Link to="/about">Blogs</Link>
        <Link to="/">Blogs</Link>
      </div> */}
      <Routes>
        <Route path="/" element={<Layout/>}>                       
        <Route index element={<Contact />} />                       
        <Route path="about" element={<About />} />  
        <Route path="Cls" element={<Cls/>}/>                     
        <Route path="nike" element={<Nike/>}/>                     
        </Route>
      </Routes>
      </div>
    </>

  );
}

export default App;
