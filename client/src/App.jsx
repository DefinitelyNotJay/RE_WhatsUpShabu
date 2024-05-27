import {Route, Routes} from "react-router-dom"
import LoginPage from './pages/LoginPage'
import RegisterPage from "./pages/RegisterPage"
import ManageTable from "./pages/receptionist/ManageTable"
const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/ManageTable" element={<ManageTable/>}/>
      </Route>
    </Routes>
  )
}

export default App