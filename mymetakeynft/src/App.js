
import './App.css';
import { ethers } from 'ethers';
import { useState } from 'react';



 function App() {
 const [, setAccount] =useState("");
 const [data, setData] =useState([]);

 const connect = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
 let res= await provider.send("eth_requestAccounts", []);
setAccount(res[0]);
getData(res[0]);
};

 const getData =() => {
  const options = { method: "GET", headers: {Accept: 'application/json', 'x-api-key': '87e86ede6bcc4ee8ac2467a6158f8295'}};

  fetch (
  'https://api.opensea.io/api/v2/events/accounts/0x10daa9f4c0f985430fde4959adb2c791ef2ccf83?event_type=&limit=50', 
  options
 )

  .then((response) => response.json())
  .then((response) => {
    setData(response);
    console.log(response);
    })
    .catch((err) => console .error(err))};
  };

  return (
    <div className="App"> 
    <p>(account)</p>
     <button onClick={connect}>Connect</button>
     
    </div>
  );
}

export default App;

