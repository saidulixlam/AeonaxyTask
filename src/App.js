import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import FifthPage from './components/FifthPage';
import SixthPage from './components/SixthPage';
import SeventPage from './components/SeventhPage';
const App = () => {

  return (
    <div className='main'>
      <div className="h-screen flex justify-center items-center">
        <Router>
          <Routes>
            <Route exact path="/" element={<FirstPage/>} />
            <Route path="/second" element={<SecondPage/>} />
            <Route path="/third" element={<ThirdPage/>} />
            <Route path="/fourth" element={<FourthPage/>} />
            <Route path="/fifth" element={<FifthPage/>} />
            <Route path="/six" element={<SixthPage/>} />
            <Route path="/seven" element={<SeventPage/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
