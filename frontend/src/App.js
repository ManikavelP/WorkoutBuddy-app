
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Navbar from './componenets/Navbar';

function App() {
  return (
    <div className='App'> 
    <BrowserRouter>
    <Navbar/>
     <div className='bg-gray-200'>
    <Routes>
      <Route
         path='/'
         element = {<Home/>}
      />
    </Routes>
    </div>
   </BrowserRouter>     
    </div>
  );
}

export default App;
