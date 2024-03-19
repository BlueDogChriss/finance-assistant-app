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
              <Route path="/register" exact Component={Register} />

            </Routes>
          {/* ) : ( */}
            {/* <> */}
              {/* <Sidebar
                sidebarOpened={sidebarOpened}
                toggleSidebar={toggleSidebar}
              /> */}
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
