import Navbar from "./components/Navbar";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import useAuthContext from "./hooks/useAuthContext";
import SendMessage from "./pages/SendMessage";
import ForgotPassword from "./pages/ForgotPassword";
import RecoverPassword from "./pages/RecoverPassword";
import Verify from './pages/Verify'
function App() {
  const {user} = useAuthContext()
  console.log({user})
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/'  element={ user ?<Home/> : <Navigate  to='/login' />}/>
          <Route path='/login' element={ !user ? <Login/> : <Navigate to={'/'} />}/>
          <Route path='/signup' element={  !user ? <Signup/> : <Navigate to={'/'} />}/>
          <Route path='/send/:id' element={ <SendMessage/>} />
          <Route path='/forgetPassword' element={ <ForgotPassword/> }/>
          <Route path='/passwordRecovery/:token' element={ <RecoverPassword/> }/>
          <Route path='/user/verify/:token' element={<Verify/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
