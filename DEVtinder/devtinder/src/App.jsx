import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Body from "./component/Body";
function App() {
  return (
    <>
      <BrowserRouter basename= "/">
        <Routes>
          <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />}/>
              <Route path="/Signup" element={<Signup />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
