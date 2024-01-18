import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import ResourceAllocationMap from './components/ResourceAllocationMap'
import SeismicActivityGraphs from './components/SeismicActivityGraphs'
// import EmergencyDeploymentMap from './components/EmergencyDeploymentMap'
import Home from './layout/Home'
import Earthquake from './layout/Earthquake'
import Floods from './layout/Floods'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/earthquake' element={<Earthquake/>}/>
        <Route path='/floods' element={<Floods/>}/>

        {/* <Route path='/map' element={<ResourceAllocationMap />}/>
        <Route path='/EmergencyDeploymentMap' element={<EmergencyDeploymentMap/>} /> */}
      </Routes>  
    </BrowserRouter>
  )
}

export default App
