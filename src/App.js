import './App.css';
import Home from "./pages/home/Home";
import Register from './pages/register/Register';
import { Watch } from './pages/watch/Watch';
import Login from './pages/login/login';
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom";

function App() {
  const user=false;
  return (
   <BrowserRouter>
    <Routes>
      <Route path={'/'} element={user?<Home/>:<Navigate to="/register"/>}/>
      <Route path={'/register'} element={user?<Navigate to="/"/>:<Register/>}/>
      <Route path={'/login'} element={user?<Navigate to="/"/>:<Login/>}/>
      {user &&(
        <>
        <Route path={'/movies'}  element={<Home type="movies"/>} />
        <Route path={'/series'}  element={<Home type='series'/>} />
        <Route path={'/watch'} element={<Watch/>}/>
        </>
      )
        
      }
      
    </Routes>
   </BrowserRouter>
  );
}

export default App;
