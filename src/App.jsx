import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginAdmin from './auth/LoginAdmin'
import DashboardAdmin from './admin/DashboardAdmin'
import KelolaKelas from './admin/KelolaKelas'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginAdmin/>}/>
        <Route path='/dashboard' element={<DashboardAdmin/>}/>
        <Route path='/kelolakelas' element={<KelolaKelas/>}/>
      </Routes>
    </>
  )
}

export default App
