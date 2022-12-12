import { useRef } from "react";

function Keprendeles()
{
    const kepInput=useRef();
    const meretInput=useRef();

    const fileName=useRef();
    const kivalasztKezelo=event=>
    {
        fileName.current.innerHTML="";
        for(let fajl of kepInput.current.files)
        {
            fileName.current.innerHTML+='"'+fajl.name+'" ';
            console.log(fajl);
        }
    };
    return(
        <div className="mx-5 mt-1">
            <form>
                <div className="border bg-success rounded p-2 text-white">
                    <h1>Gravírozott termék rendelése</h1>
                    <p className="mx-1">Ebben az ablakban lehet képes terméket rendelni.</p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-6 form-group rounded bg-success">
                                <h3>Méretek</h3>
                                <select ref={meretInput} className="form-control bg-secondary text-white">
                                    <option value="30x40cm">30x40cm</option>
                                    <option value="40x40cm">40x40cm</option>
                                </select>
                            </div>
                            <div className="col-md-12 col-lg-6 form-group rounded bg-success">
                                <h3>Kép</h3>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input text-white" ref={kepInput} onChange={kivalasztKezelo}/>
                                    <label className="custom-file-label bg-secondary text-white" htmlFor="inputGroupFile01" ref={fileName}>Válasszon képet</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="button" className="btn bg-light text-success border border-secondary" value="Rendelés leadása"/>
                </div>
            </form>
        </div>
    );
}
export default Keprendeles;