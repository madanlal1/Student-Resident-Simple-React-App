import React, {useState} from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';


const title = "Hacker Dormitory";
function App() {

  const [data, setData] = useState({});
  console.log("App ",data)
  
  function getData (studentData) {
    setData(studentData);
  }

  return (
    <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search getData={getData}/>
        <Error/>
        <ResidentsList data={data}/>
      </div>
    </div>
  );
}

export default App;
