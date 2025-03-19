import './App.css'
import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'
import {Routes, Route} from 'react-router'
import NavBar from './components/navbar/NavBar'

function App() {
  return (
    <>
      <NavBar content={
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/edit" element={<Edit/>}/>
        </Routes> 
      }/>
    </>
  )
}

export default App
