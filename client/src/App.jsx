
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'

function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/closet" element={ <Closet/>}/>
    <Route path="/:cloth_id" element={ <Edit/>}/>
    <Route path="/add" element={ <Add/>}/>
    <Route path="/tops" element={ <Top/>}/>
    <Route path="/bottoms" element={ <Bottom/>}/>
    <Route path="/laundry" element={ <Laundry/>}/>
    <Route path="/inspiration" element={ <Inspiration/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
