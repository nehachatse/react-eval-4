import React from "react";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import User from './Components/User/User';
import { AuthContext } from './Context/AuthContextProvider';
import Routes from "./Routes/Routes";

function App() {
  const {isAuth} = React.useContext(AuthContext);

  return (
    <>
      <Routes/>
    </>
  )
}

export default App;
