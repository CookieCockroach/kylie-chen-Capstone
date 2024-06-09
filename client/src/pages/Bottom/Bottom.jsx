import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'; 
import Cloth from "../../components/Cloth/Cloth";

export default function Bottom() {
    const [tops, setTops] = useState([]);

    useEffect(() => {
        async function fetchTops() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASEURL}/closet/bottoms`);
                setTops(response.data);
            } catch (error) {
                console.error('Error fetching tops:', error);
            }
        }
        fetchTops();
    }, []);

    return (
        <>
            <header className="header">
                <Link to="/closet">
                    <img className="header_nav" src={`${import.meta.env.VITE_BASEURL}/arrow.svg`}></img>
                </Link>
                <h1>Tops</h1>
            </header>
            <main className="main">
                {tops.map((top) => (
                    <Cloth key={top.id} top={top}/>
                ))}
            </main>
        </>
    );
}