import { useRef} from "react";

function Kepesrendeles()
{
    const kepInput=useRef();
    const kivalasztKezelo=event=>
    {
        console.log(kepInput.current.files[0]);
    }
    return(
        <div>
            <form className="m-1">
                <input type="file" className="form-control my-1 " onChange={kivalasztKezelo} ref={kepInput}/>
                <input type="button" className="btn btn-primary" value="Feltöltés"/>
            </form>
        </div>
    );
}
export default Kepesrendeles;