import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import ResourceAllocationMap from './components/ResourceAllocationMap'
import SeismicActivityGraphs from './components/SeismicActivityGraphs'
// import EmergencyDeploymentMap from './components/EmergencyDeploymentMap'
import Home from './layout/Home'
// import Tweets from './layout/Tweets'
import Video from './layout/Video'
// import GeoJSONMap from './components/GeoJSONMap'
// import MyMap from './components/MyMap'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/video' element={<Video/>}/> */}
        {/* <Route path='/tweets' element={<Tweets/>}/> */}
        {/* <Route path='/map' element={<GeoJSONMap/>}/> */}
        {/* <Route path='/map' element={<MyMap/>}/> */}
        <Route path='/seismic' element={<SeismicActivityGraphs/>}/>
        {/* <Route path='/map' element={<ResourceAllocationMap />}/>
        <Route path='/EmergencyDeploymentMap' element={<EmergencyDeploymentMap/>} /> */}
      </Routes>  
    </BrowserRouter>
  )
}

export default App
