import React, { Component, useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

const App = () => {

  const [smurfs, setSmurfs] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurfs(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const addSmurfs = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {})
      .catch(err => console.log(err));
  };

  const deleteSmurf = smurfId => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(res => {
        setSmurfs(res.data);
      })
      .catch(err => console.log(err));
  };

    return (
        <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  
}

export default App;
