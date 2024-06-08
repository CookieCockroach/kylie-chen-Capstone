import { Link } from "react-router-dom";
import "./Closet.scss";

export default function Closet() {
    return (
        <>
            <header className="header">
                <Link to="/">
                    <img className="header_nav" src={`${import.meta.env.VITE_BASEURL}/arrow.svg`}></img>
                </Link>
                <div className="header_logo">
                    My Closet
                </div>
                <Link to='/laundry'>
                    <div className="header_laundry">
                        Laundry
                    </div>
                </Link>
            </header>
            <Link to="/add">
                <div className="new">
                    Bought new clothes?
                </div>
            </Link>
            <Link to="/tops">
                <div className="top">
                    Top
                </div>
            </Link>
            <Link to="/bottoms">
                <div className="bottom">
                    Bottom
                </div>
            </Link>
        </>
    )
}
