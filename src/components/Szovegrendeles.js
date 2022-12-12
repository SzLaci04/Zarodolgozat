import { useRef } from "react";
import { useState,useEffect } from "react";
import classes from "./Szovegrendeles.module.css";
function Szovegrendeles()
{
    const [toltodik,setToltodik]=useState(true);
    let meretek=null;

    useEffect(()=>{
        setToltodik(true);
        fetch('Zarodolgozat/zarodolgozat/php/adatbazis.php/meretek')
        .then(eredmeny=>{return eredmeny.json();})
        .then(data=>{
            const sizes=[];
            for(const key of data)
            {
                sizes.push(key);
            }
          setToltodik(false);
          console.log(sizes);
          console.log(data);
          meretek=data;
          console.log(meretek);
        });    
      },[]);

    if(toltodik)
    {
        return <section><p>Loading...</p></section>
    }
    return(
        <div className="mx-5 mt-1">
        <form>
            <div className="border bg-success rounded p-2 text-white">
                <h1>Szöveges termék rendelése</h1>
                <p className="mx-1">Ebben az ablakban lehet szöveges terméket rendelni.</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 form-group rounded bg-success">
                            <h3>Méretek</h3>
                            <select className="form-control bg-secondary text-white">
                                {
                                    meretek.map(meret=>{
                                        <option key={meret.meretID} value={meret.meretID}>{meret.meret}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-md-12 col-lg-6 form-group rounded bg-success">
                            <h3>Szöveg</h3>
                            <textarea className={"form-control text-white bg-secondary "+classes.textarea}/>
                        </div>
                    </div>
                </div>
                <input type="button" className="btn bg-light text-success border border-secondary" value="Rendelés leadása"/>
            </div>
        </form>
    </div>
    );
}

export default Szovegrendeles;