import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Info from './Info';
import { Header } from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
          <Routes>
              <Route path="/" element={<Main />} /> 
              <Route path="/info" element={<Info />}></Route>
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;