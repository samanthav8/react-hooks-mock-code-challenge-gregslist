import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [ listArr , setListArr ] = useState(([]));
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((res) => res.json())
    .then((data) => setListArr(data))
  }, [])



  return (
    <div className="app">
      <Header 
        setSearchTerm = {setSearchTerm}
        />
      <ListingsContainer 
          listArr={listArr}
          setListArr={setListArr}
          searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
