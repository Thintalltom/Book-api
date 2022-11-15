import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Books from './Components/Books'
import Genres from './Components/Genres'
import './App.css';

function App() {

  return (
    <div>

     <BrowserRouter>
     <Routes>
       <Route path="/book" element={<Books />} /> 
       <Route path="/genre" element={<Genres />} />
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
