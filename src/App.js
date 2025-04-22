import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import SingleService from './Component/SingleService';
import { useEffect } from 'react';
import logo from "./image/faishal-edited.png"

function App() {

  useEffect(()=>{
    document.title = "Md Faishal | Front-end Developer";
    const link = document.createElement("link");
    link.rel = "shortcut icon";
    link.href = logo;
    document.head.appendChild(link);
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/home" element={<Home />}>
        </Route>
        <Route path="/service/:serviceId" element={<SingleService />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
