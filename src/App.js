
//import React, { useState } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import User from './Pages/User';
import List from './Pages/List';

function App() {
  // const [users, setUsers] = useState([]);

  // const addUser = (user) => {
  //   setUsers([...users, user]);
  // };
  return (
    <BrowserRouter>
     <Navbar />
    <Routes>
    <Route exact path="/" element={<User  />} />
      <Route path="/list" element={<List  />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
