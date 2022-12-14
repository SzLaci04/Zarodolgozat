import Keprendeles from "../components/Keprendeles";
import Szovegrendeles from "../components/Szovegrendeles";
import { useState,useEffect } from "react";

function Rendeles()
{
    const [toltodik,setToltodik]=useState(true);
    let [loadedMeretek,setLoadedMeretek]=useState([]);

    useEffect(()=>{
        setToltodik(true);
        fetch('Zarodolgozat/zarodolgozat/php/adatbazis.php/meretek')
        .then((eredmeny)=>{return eredmeny.json();})
        .then(data=>{
          setToltodik(false);
          setLoadedMeretek(data);
          console.log(loadedMeretek);
        });    
      },[]);

    if(toltodik)
    {
        return <section><p>Loading...</p></section>
    }
    return(
        <div>
            <Keprendeles meretek={loadedMeretek}/>
            <Szovegrendeles meretek={loadedMeretek}/>
        </div>
    );
}
export default Rendeles;