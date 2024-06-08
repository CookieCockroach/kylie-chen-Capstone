import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
    return (
        <>
            <h1>Welcome Back!</h1>
            <h2>I want to...</h2>
            <Link to="/closet">
                <div className="closet">
                    Check My Closet
                </div>
            </Link>
            <Link to="/inspiration">
                <div className="inspiration">
                    Get Outfit Ideas
                </div>
            </Link>
        </>
    )
}
