import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import ResourceAllocationMap from './components/ResourceAllocationMap'
import SeismicActivityGraphs from './components/SeismicActivityGraphs'
// import EmergencyDeploymentMap from './components/EmergencyDeploymentMap'
import Home from './layout/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/seismic' element={<SeismicActivityGraphs/>}/>
        {/* <Route path='/map' element={<ResourceAllocationMap />}/>
        <Route path='/EmergencyDeploymentMap' element={<EmergencyDeploymentMap/>} /> */}
      </Routes>  
    </BrowserRouter>
  )
}

export default App
