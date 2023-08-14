import './App.css';
import router from './components/Routes/routes';
import {
  RouterProvider,
} from "react-router-dom";
import UserContext from './context/Usercontext';
import { useState } from 'react';


function App() {

  const [User , setUser] = useState({})

  const ChangeuserInfo= (item) => {
    setUser(item)
  }

  const global = {
    User , ChangeuserInfo
  }
  return (
    <div>
      <UserContext.Provider value={global}>
        <RouterProvider router={router} >
        </RouterProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
