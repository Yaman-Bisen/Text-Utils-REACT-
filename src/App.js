import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
///// React router
import {
  BrowserRouter as Router,
  Route,
  Routes
  // Link,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <TextForm/>
//   },
//   {
//     path : "about/",
//     element: <About />,
//   },
// ]);

export default function App() {
  
  const [mode, setMode] = useState('light');  // whether dark mode is eanbled or not
  const [alert, setAlert] = useState(null);  // whether dark mode is eanbled or not

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", 'success');
      document.title = 'TextUtils - DarkMode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", 'success');
      document.title = 'TextUtils - LightMode';
    }
  }

  return (
      
    <div>
      <Router>
        {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />
        
        {/* <RouterProvider router={router} /> */}

        <Routes>
          <Route exact path='/' element={<TextForm />} />
          <Route exact path='/about' element={<About />} />
        </Routes>x
        
        {/* <TextForm heading="ENTER THE TEXT TO ANALYSZE : " mode={mode} showAlert={showAlert} /> */}
      </Router>

     
      </div>
  );
}

