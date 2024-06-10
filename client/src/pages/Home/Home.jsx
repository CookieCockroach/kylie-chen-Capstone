import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
    return (
        <div className="main">
            <h1 className="main__welcome">Welcome Back!</h1>
            <Link to="/closet">
                <div className="main__closet">
                    Check My Closet
                </div>
            </Link>
            <Link to="/inspiration">
                <div className="main__inspiration">
                    Get Outfit Ideas
                </div>
            </Link>
        </div>
    )
}
