import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'; 
import Cloth from "../../components/Cloth/Cloth";
import "./Bottom.scss";

export default function Bottom() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchBottoms() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASEURL}/closet/bottoms`);
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching tops:', error);
            }
        }
        fetchBottoms();
    }, [items]);

    return (
        <>
            <header className="header2">
                <Link to="/closet">
                    <img className="header2__nav" src={`${import.meta.env.VITE_BASEURL}/arrow.svg`}></img>
                </Link>
                <h1 className="header2__logo">Bottoms</h1>
            </header>
            <main className="body">
                {items.map((item) => (
                    <Cloth key={item.cloth_id} item={item}/>
                ))}
            </main>
        </>
    );
}