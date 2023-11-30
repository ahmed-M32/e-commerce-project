import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/nav";
import SyncLoader from "react-spinners/SyncLoader"


 function App(){
    const [loading ,setloading] =useState(true);


    useEffect(()=>{
        setTimeout(()=>{
            setloading(false);
        },3000)
    })
return(
    loading?

<SyncLoader color="#e56a77"  className="load" />    :
    <Navbar></Navbar>
    )
};
export default App;