import { Link } from "react-router-dom";

export default function Cloth({ item }) {

    return (
        <>
            <Link to={`/${item.cloth_id}`}>
                <div className="cloth" style={{backgroundColor: item.color}}>
                    <img className="cloth_icon" alt="cloth_icon" src={`${import.meta.env.VITE_BASEURL}/${item.icon}`}></img>
                </div>
            </Link>
        </>
    )
}