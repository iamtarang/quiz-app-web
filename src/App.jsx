import Dashboard from './homepage/Dashboard'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './homepage/Layout';
import Login from './Login';

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Layout />} >
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
