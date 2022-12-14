import classes from "./Szovegrendeles.module.css";
function Szovegrendeles(props)
{
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
                                    props.meretek.map(meret=>
                                        {
                                        console.log(meret);
                                        return <option 
                                            key={meret.meretId}
                                            value={meret.meretId}>
                                            {meret.meret}
                                        </option>
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