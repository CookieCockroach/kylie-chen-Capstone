import { Link } from "react-router-dom";
import "./Closet.scss";

export default function Closet() {
    return (
        <>
            <header className="header">
                <Link to="/">
                    <img className="header__nav" src={`${import.meta.env.VITE_BASEURL}/arrow.svg`}></img>
                </Link>
                <h1 className="header__logo">
                    My Closet
                </h1>
                <Link to='/laundry'>
                    <div className="header__laundry">
                        Laundry
                    </div>
                </Link>
            </header>
            <div className="nav">
                <Link to="/add">
                    <div className="nav__new">
                        Bought new clothes?
                    </div>
                </Link>
                <Link to="/tops">
                    <div className="nav__top">
                        Top
                    </div>
                </Link>
                <Link to="/bottoms">
                    <div className="nav__bottom">
                        Bottom
                    </div>
                </Link>
            </div>
        </>
    )
}
