import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Books from './Components/Books'
import Genres from './Components/Genres'

import './App.css';

function App() {
const slides= () => {
  console.log('hello')
}
  return (
    <div>

     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Books slides={slides} />} /> 
       <Route path="/genre" element={<Genres />} />
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
