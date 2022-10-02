import React from 'react'
import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import AboutStudent from './components/AboutStudent'
import AddStudent from './components/AddStudent'
import Home from './components/Home'
import Navbar from './components/Navbar'
import UpdateStudent from './components/UpdateStudent';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddStudent/>}/>
        <Route path="/update/:id" element={<UpdateStudent/>}/>
        <Route path="/about" element={<AboutStudent/>}/>
      </Routes>
    </Router>
  )
}

export default App