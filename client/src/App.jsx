
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import Closet from './pages/Closet/Closet'
import Edit from './pages/Edit/Edit'
import Add from './pages/Add/Add'
import Top from './pages/Top/Top'
import Bottom from './pages/Bottom/Bottom'
import Laundry from './pages/Laundry/Laundry'
import Inspiration from './pages/Inspiration/Inspiration'

function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/closet" element={ <Closet/>}/>
    <Route path="/:cloth_id" element={ <Edit/>}/>
    <Route path="/add" element={ <Add/>}/>
    <Route path="/Tops" element={ <Top/>}/>
    <Route path="/Bottoms" element={ <Bottom/>}/>
    <Route path="/laundry" element={ <Laundry/>}/>
    <Route path="/inspiration" element={ <Inspiration/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
