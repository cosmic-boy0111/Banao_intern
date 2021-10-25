import logo from './logo.svg';
import React,{createContext,useState} from 'react';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from './components/Navbar';
import Body from './components/Body';
import AlertDialog from './components/Login';
import FullScreenDialog from './components/Login2';

export const userContext = createContext()
function App() {

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [user, setUser] = useState(false)
  const [name, setName] = useState('')

  return (
    <>
    <userContext.Provider value={{
      open,
      setOpen,
      user,
      setUser,
      name,
      setName,
      open2,
      setOpen2
    }}>
      <FullScreenDialog />
      <AlertDialog />
      <Navbar />
      <Body />
    </userContext.Provider>
    </>
  );
}

export default App;
