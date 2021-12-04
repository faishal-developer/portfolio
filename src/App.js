import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import SingleService from './Component/SingleService';

function App() {
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
