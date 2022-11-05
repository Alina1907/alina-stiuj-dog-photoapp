import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Info from './Info';
import { Header } from './Header';
import Footer from './Footer';
import Dog from './Dog';
import SelectDog from './SelectDog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
          <Routes>
              <Route path="/" element={<Main />} /> 
              <Route path="/info" element={<Info />}></Route>
              <Route path="/dog" element={<Dog />}></Route>
              <Route path="/select-dog" element={<SelectDog />}></Route>
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;