import React, { useState } from 'react'
import './App.css'
import {
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import useUser from './Methods/useUsers'
import Sidebar from './components/Sidebar/Sidebar'
import Tips from './pages/Tips/Tips'
import Statistics from './pages/Statistics/Statistics'


export const UserContext = React.createContext();

function App() {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const toggleSidebar = () => setSidebarOpened(!sidebarOpened);
  const ret = useUser();
  return (
    <UserContext.Provider value={ret}>
      <div className="App">
          {/* {ret.isLoggedIn ? ( */}
            <Routes>
              <Route path="/" exact Component={Login} />
              <Route path="/Register" exact Component={Register} />
              <Route path="/Home" Component={Home} />
              <Route path="/Tips" Component={Tips} />
              <Route path="/Statistics" Component={Statistics} />
              

            </Routes>
          {/* ) : ( */}
            {/* <> */}
              <Sidebar
                sidebarOpened={sidebarOpened}
                toggleSidebar={toggleSidebar}
              />
              {/* <Routes>
                <Route exact path="/" Component={Home} />
              </Routes> */}
            {/* </> */}
          {/* )} */}
      </div>
    </UserContext.Provider>
  );
}

export default App
