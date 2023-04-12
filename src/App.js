import { useState } from 'react';
import './Appa.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
//   // Link
// }from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
      document.title="My App-Dark";
    }
    else{
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      document.title="My App-Light";
      setMode('light');
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="My App2" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}/> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>}/
          > */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
