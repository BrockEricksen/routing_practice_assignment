import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserInputs from './components/UserInputs';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:userInput' element={<UserInputs/>}/>
        <Route path='/:userInput/:textColor/:bgColor' element={<UserInputs/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
