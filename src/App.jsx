import Dashboard from './homepage/Dashboard'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './homepage/Layout';

function App() {

  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<Layout />} >
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
