import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mi from './Components/Mi'
import Login from './Components/Login'
import Reg from './Components/Reg';
function App() {
  const [count, setCount] = useState(0)
  const getdata = ()=>{
    const ur = localStorage.getItem('mobile')
    if(ur) {return JSON.parse(ur)}
    else {return []}
  }
  const [user,setUser]=useState(getdata)
  
  return (
    <>
      <BrowserRouter>
        {/* <Dashboard/> */}
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/card' element={
          user?<Card />:<Login />
          } />
          <Route path='/reg' element={<Reg/>}/>
          <Route path='/Mi' element={<Mi name='Mi' />} />
          <Route path='/Realme' element={<Mi name='Realme' />} />
          <Route path='/Iphone' element={<Mi name='Iphone' />} />
          <Route path='/Samsung' element={<Mi name='Samsung' />} />
          <Route path='/Vivo' element={<Mi name='Vivo' />} />
          <Route path='/Oneplus' element={<Mi name='OnePlus' />} />
          <Route path='/Oppo' element={<Mi name='Oppo' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
