import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Body from "./component/Body";
import Connections from "./component/Connections";
import { Feed } from "./component/Feed";
import { Provider } from 'react-redux'
import Profile from "./component/Profile";
import appStore from "./utils/appStore";
// import Signup from "./component/Signup";
import Requests from "./component/Requests";
function App() {
  return (
    <>
      <Provider store={appStore}>
      <BrowserRouter basename= "/">
        <Routes>
          <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/Signup" element={<Signup />}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/Connections" element={<Connections />}/>
              <Route path="/requests" element={< Requests/>}/>
              <Route path="/signup" element={<Signup/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
