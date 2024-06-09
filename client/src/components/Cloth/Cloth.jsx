import { Link } from "react-router-dom";

export default function Cloth({top}){

    return(
        <>
        <Link to={`/${top.cloth_id}`}>
            <img className="cloth_icon" alt="cloth_icon" src={`${import.meta.env.VITE_BASEURL}/${top.icon}`}></img>
        </Link>
        </>
    )
}