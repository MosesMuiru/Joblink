import { useState } from 'react'
// import Login from './pages/Login'
import Navbar from './componets/Navbar'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
// importing componets

import Login from './pages/Login'
import Signin from "./pages/Signin"
import Home from './pages/Home'
import HiringManagers from "./pages/HiringManagers"
import Aboutus from "./pages/AboutUs"
import Freelance from "./pages/Freelance"



import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<BrowserRouter>


<Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/hiringmanagers' element={<HiringManagers/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    
</BrowserRouter>

      
      
      
    </div>
  )
}

export default App
