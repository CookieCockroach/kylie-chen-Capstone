import { Link } from "react-router-dom";
import './Cloth.scss'

export default function Cloth({ item }) {

    return (
        <>
            <Link to={`/${item.cloth_id}`}>
                <div className="cloth" style={{backgroundColor: item.color}}>
                    <img className="cloth__icon" alt="cloth_icon" src={`${import.meta.env.VITE_BASEURL}/${item.icon}`}></img>
                </div>
            </Link>
        </>
    )
}