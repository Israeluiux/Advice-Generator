import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Advise from './Pages/Advice/Advice'

function App() {
  
return (
  <Router>
    <Routes>
      <Route path='/' element={<Advise/>} />
    </Routes>
  </Router>

)
  
}

export default App
